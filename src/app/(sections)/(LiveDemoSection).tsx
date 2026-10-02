"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Loader2, Sparkles, Trophy, Send, ShieldCheck, X, ChevronRight } from "lucide-react";
import {
  zonarApi,
  type CommunitySummary,
  type ContributionResponse,
  type ContributorProfile,
  type LeaderboardEntry,
  type PlatformStats,
  type QualityLabel,
  type ScoreResponse,
} from "@/lib/api";

const EXAMPLES = [
  "Volume dropped 30% this week while price held support, which means sellers may be exhausted. What does the sentiment data say?",
  "gm",
  "AIRDROP!!! FREE MONEY dm me now 100x guaranteed",
];

const labelStyles: Record<QualityLabel, string> = {
  High: "text-[#C3E89B] border-[#C3E89B]",
  Medium: "text-yellow-300 border-yellow-300",
  Low: "text-orange-400 border-orange-400",
  Spam: "text-red-400 border-red-400",
};

const sourceLabel: Record<ContributorProfile["source"], string> = {
  Web: "Website",
  Telegram: "Telegram",
  Seed: "Demo data",
};

const barColor = (score: number) =>
  score >= 70 ? "bg-[#C3E89B]" : score >= 40 ? "bg-yellow-300" : score >= 20 ? "bg-orange-400" : "bg-red-400";

export default function LiveDemoSection() {
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");
  const [result, setResult] = useState<ScoreResponse | null>(null);
  const [reward, setReward] = useState<ContributionResponse | null>(null);
  const [board, setBoard] = useState<LeaderboardEntry[]>([]);
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [busy, setBusy] = useState<"score" | "contribute" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiOnline, setApiOnline] = useState(true);
  const [communities, setCommunities] = useState<CommunitySummary[]>([]);
  const [communityId, setCommunityId] = useState<number | null>(null);
  const [profile, setProfile] = useState<ContributorProfile | null>(null);
  const [profileLoadingId, setProfileLoadingId] = useState<number | null>(null);

  const refresh = useCallback(async () => {
    try {
      const [b, s, c] = await Promise.all([
        zonarApi.leaderboard(7, 8, communityId),
        zonarApi.stats(),
        zonarApi.communities(),
      ]);
      setBoard(b);
      setStats(s);
      setCommunities(c);
      setApiOnline(true);
    } catch {
      setApiOnline(false);
    }
  }, [communityId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const openProfile = async (id: number) => {
    setProfileLoadingId(id);
    try {
      setProfile(await zonarApi.contributor(id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load profile");
    } finally {
      setProfileLoadingId(null);
    }
  };

  // Close the profile panel with Escape
  useEffect(() => {
    if (!profile) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProfile(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [profile]);

  const run = async (mode: "score" | "contribute") => {
    setError(null);
    setBusy(mode);
    try {
      if (mode === "score") {
        setResult(await zonarApi.score(message));
        setReward(null);
      } else {
        const r = await zonarApi.contribute(nickname, message);
        setResult(r.result);
        setReward(r);
        await refresh();
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBusy(null);
    }
  };

  const canSubmit = message.trim().length > 0 && busy === null;

  return (
    <section id="live-demo" className="relative bg-black py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <div className="mb-2 text-[14px] md:text-lg font-sora text-[#C3E89B]">Try It Live</div>
          <div className="w-20 h-0.5 bg-[#C3E89B] mb-4" />
          <h2 className="font-sora font-bold text-center text-white text-[28px] md:text-[40px] lg:text-[48px] mb-4">
            How Valuable Is Your Message?
          </h2>
          <p className="max-w-2xl text-center font-sora text-[#FFFFFFCC] text-[12px] md:text-[16px] mb-12">
            Type a message the way you would in a community chat. Our scoring engine rates it from 0–100,
            explains why, and awards points for genuine insight – while spam and duplicates earn nothing.
          </p>
        </div>

        {!apiOnline && (
          <div className="mb-8 rounded-2xl border border-orange-400/50 bg-orange-400/10 p-4 text-center font-sora text-sm text-orange-200">
            The scoring API is offline. Start it with <code>cd ZonarBackend &amp;&amp; dotnet run --project src/Zonar.Api</code>.
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Input + result */}
          <div className="lg:col-span-3 backdrop-blur-lg bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] rounded-[30px] p-6 md:p-8">
            <label className="block font-sora text-sm text-[#C3E89B] mb-2" htmlFor="demo-message">
              Your message
            </label>
            <textarea
              id="demo-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              rows={4}
              placeholder="e.g. Volume is up 40% because..."
              className="w-full resize-none rounded-2xl bg-black/60 border border-white/15 p-4 font-sora text-white text-sm md:text-base placeholder:text-white/40 focus:outline-none focus:border-[#C3E89B]"
            />

            <div className="mt-2 flex flex-wrap gap-2">
              {EXAMPLES.map((ex, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMessage(ex)}
                  className="rounded-full border border-white/20 px-3 py-1 font-sora text-[11px] text-white/70 hover:border-[#C3E89B] hover:text-[#C3E89B]"
                >
                  {["Insightful example", "Low-effort example", "Spam example"][i]}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <button
                type="button"
                disabled={!canSubmit}
                onClick={() => run("score")}
                className="flex flex-1 items-center justify-center gap-2 rounded-[15px] border border-white/30 py-3 font-sora text-white transition hover:border-[#C3E89B] disabled:opacity-40"
              >
                {busy === "score" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                Score it
              </button>

              <div className="flex flex-1 gap-2">
                <input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  maxLength={24}
                  placeholder="Nickname"
                  aria-label="Nickname"
                  className="w-1/2 rounded-[15px] bg-black/60 border border-white/15 px-3 font-sora text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#C3E89B]"
                />
                <button
                  type="button"
                  disabled={!canSubmit || nickname.trim().length < 2}
                  onClick={() => run("contribute")}
                  className="flex w-1/2 items-center justify-center gap-2 rounded-[15px] bg-[#C3E89B] py-3 font-sora font-semibold text-black transition hover:brightness-110 disabled:opacity-40"
                >
                  {busy === "contribute" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  Earn points
                </button>
              </div>
            </div>

            {error && <p className="mt-4 font-sora text-sm text-red-400">{error}</p>}

            {result && (
              <div className="mt-8 rounded-2xl bg-black/50 border border-white/10 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-sora text-xs text-white/60">Quality score</div>
                    <div className="font-sora text-5xl font-bold text-white">
                      {result.score}
                      <span className="text-lg text-white/50">/100</span>
                    </div>
                  </div>
                  <span className={`rounded-full border px-3 py-1 font-sora text-sm ${labelStyles[result.label]}`}>
                    {result.label}
                  </span>
                </div>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${barColor(result.score)}`}
                    style={{ width: `${result.score}%` }}
                  />
                </div>

                <ul className="mt-5 space-y-2">
                  {result.reasons.map((r, i) => (
                    <li key={i} className="flex justify-between gap-4 font-sora text-sm text-white/80">
                      <span>{r.text}</span>
                      {r.impact !== 0 && (
                        <span className={r.impact > 0 ? "text-[#C3E89B]" : "text-red-400"}>
                          {r.impact > 0 ? `+${r.impact}` : r.impact}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                {reward && (
                  <div className="mt-5 rounded-xl border border-[#C3E89B]/40 bg-[#C3E89B]/10 p-4 font-sora text-sm text-white">
                    <span className="font-semibold text-[#C3E89B]">+{reward.rewardPoints} points</span> for{" "}
                    {reward.displayName}.{" "}
                    {(reward.rewardPoints === 0 || reward.dailyCapReached) && <>{reward.message} </>}
                    <span className="text-white/60">(Today: {reward.pointsEarnedToday} pts)</span>
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 font-sora text-[11px] text-white/50">
                  <ShieldCheck className="h-3 w-3" /> Engine: {result.scorerUsed} · Your message text is never stored.
                </div>
              </div>
            )}
          </div>

          {/* Leaderboard + stats */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="backdrop-blur-lg bg-[#FFFFFF1A] shadow-md shadow-[#C3E89B] rounded-[30px] p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-sora text-lg font-semibold text-white">
                  <Trophy className="h-5 w-5 text-[#C3E89B]" /> Leaderboard{" "}
                  <span className="text-xs font-normal text-white/50">(7 days)</span>
                </div>
                <select
                  aria-label="Filter by community"
                  value={communityId ?? ""}
                  onChange={(e) => setCommunityId(e.target.value === "" ? null : Number(e.target.value))}
                  className="max-w-[60%] rounded-xl bg-black/60 border border-white/15 px-3 py-1.5 font-sora text-xs text-white focus:outline-none focus:border-[#C3E89B]"
                >
                  <option value="">All communities</option>
                  {communities.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.contributors})
                    </option>
                  ))}
                </select>
              </div>
              {board.length === 0 ? (
                <p className="font-sora text-sm text-white/60">No contributions yet – be the first!</p>
              ) : (
                <ol className="space-y-2">
                  {board.map((e) => (
                    <li key={e.contributorId}>
                      <button
                        type="button"
                        onClick={() => openProfile(e.contributorId)}
                        title="View profile"
                        className={`group flex w-full items-center justify-between rounded-xl px-3 py-2 font-sora text-sm transition hover:bg-[#C3E89B]/10 ${
                          reward?.contributorId === e.contributorId ? "bg-[#C3E89B]/15" : "bg-black/40"
                        }`}
                      >
                        <span className="text-left text-white">
                          <span className="mr-2 text-white/50">{e.rank}.</span>
                          {e.displayName}
                        </span>
                        <span className="flex items-center gap-1 text-[#C3E89B]">
                          {e.totalPoints} pts
                          {profileLoadingId === e.contributorId ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <ChevronRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100" />
                          )}
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
              )}
              <p className="mt-3 font-sora text-[11px] text-white/40">Tap a contributor to see their profile.</p>
            </div>

            {stats && (
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Messages scored", stats.totalContributions],
                  ["Points awarded", stats.totalPointsAwarded],
                  ["Avg. score", stats.averageScore],
                  ["Spam blocked", stats.spamBlocked + stats.duplicatesBlocked],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#FFFFFF1A] p-4 text-center">
                    <div className="font-sora text-2xl font-bold text-white">{value}</div>
                    <div className="font-sora text-[11px] text-white/60">{label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {profile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${profile.displayName} profile`}
          onClick={() => setProfile(null)}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[30px] border border-[#C3E89B]/30 bg-[#0d0d0d] p-6 md:p-8 shadow-lg shadow-[#C3E89B]/20"
          >
            <button
              type="button"
              onClick={() => setProfile(null)}
              aria-label="Close"
              className="absolute right-5 top-5 text-white/60 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="font-sora text-xs text-[#C3E89B]">{sourceLabel[profile.source]} contributor</div>
            <h3 className="font-sora text-2xl font-bold text-white">{profile.displayName}</h3>
            <div className="mt-1 font-sora text-[11px] text-white/50">
              Member since {new Date(profile.memberSinceUtc).toLocaleDateString()} · Last active{" "}
              {new Date(profile.lastActiveAtUtc).toLocaleString()}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["Points", profile.totalPoints],
                ["Messages", profile.contributions],
                ["Avg. score", profile.averageScore],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#FFFFFF1A] p-3 text-center">
                  <div className="font-sora text-xl font-bold text-white">{value}</div>
                  <div className="font-sora text-[11px] text-white/60">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex gap-3 font-sora text-xs">
              <span className="rounded-full border border-[#C3E89B]/50 px-3 py-1 text-[#C3E89B]">
                High quality: {profile.highQualityCount}
              </span>
              <span className="rounded-full border border-red-400/50 px-3 py-1 text-red-300">
                Spam: {profile.spamCount}
              </span>
            </div>

            <div className="mt-6 font-sora text-sm font-semibold text-white">Recent scores</div>
            <ul className="mt-3 space-y-2">
              {profile.recent.map((r, i) => (
                <li key={i} className="flex items-center gap-3 font-sora text-xs">
                  <span className="w-8 text-right text-white">{r.score}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${barColor(r.score)}`} style={{ width: `${r.score}%` }} />
                  </div>
                  <span className={`w-16 text-right ${labelStyles[r.label].split(" ")[0]}`}>{r.label}</span>
                  <span className="w-12 text-right text-[#C3E89B]">+{r.rewardPoints}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-sora text-[11px] text-white/40">
              Only scores are stored – never the message text.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
