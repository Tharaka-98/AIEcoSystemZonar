// Client for the Zonar .NET API (see the ZonarBackend project).
// Set NEXT_PUBLIC_API_URL in .env.local (or in Vercel project settings).

export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5080").replace(/\/$/, "");

export type QualityLabel = "Spam" | "Low" | "Medium" | "High";

export interface ScoreReason {
  text: string;
  impact: number;
}

export interface ScoreResponse {
  score: number;
  label: QualityLabel;
  scorerUsed: string;
  reasons: ScoreReason[];
}

export interface ContributionResponse {
  contributorId: number;
  displayName: string;
  result: ScoreResponse;
  rewardPoints: number;
  isDuplicate: boolean;
  dailyCapReached: boolean;
  pointsEarnedToday: number;
  message: string;
}

export interface LeaderboardEntry {
  rank: number;
  contributorId: number;
  displayName: string;
  totalPoints: number;
  contributions: number;
  averageScore: number;
}

export interface PlatformStats {
  totalContributions: number;
  totalContributors: number;
  totalCommunities: number;
  totalPointsAwarded: number;
  averageScore: number;
  spamBlocked: number;
  duplicatesBlocked: number;
  contributionsLast24h: number;
  scoringEngine: string;
}

export type ContributionSource = "Web" | "Telegram" | "Seed";

export interface RecentContribution {
  score: number;
  label: QualityLabel;
  rewardPoints: number;
  createdAtUtc: string;
}

export interface ContributorProfile {
  contributorId: number;
  displayName: string;
  source: ContributionSource;
  totalPoints: number;
  contributions: number;
  averageScore: number;
  highQualityCount: number;
  spamCount: number;
  memberSinceUtc: string;
  lastActiveAtUtc: string;
  recent: RecentContribution[];
}

export interface CommunitySummary {
  id: number;
  name: string;
  source: ContributionSource;
  contributors: number;
  contributions: number;
  totalPoints: number;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
  });

  if (res.status === 429) throw new Error("Too many requests – please wait a minute and try again.");

  if (!res.ok) {
    // ASP.NET Core returns RFC 7807 problem details for validation errors
    const problem = await res.json().catch(() => null);
    const firstError = problem?.errors ? Object.values(problem.errors as Record<string, string[]>)[0]?.[0] : null;
    throw new Error(firstError ?? problem?.title ?? `Request failed (${res.status})`);
  }

  return res.json() as Promise<T>;
}

export const zonarApi = {
  score: (message: string) =>
    request<ScoreResponse>("/api/score", { method: "POST", body: JSON.stringify({ message }) }),

  contribute: (nickname: string, message: string) =>
    request<ContributionResponse>("/api/contributions", {
      method: "POST",
      body: JSON.stringify({ nickname, message }),
    }),

  leaderboard: (days = 7, top = 8, communityId?: number | null) =>
    request<LeaderboardEntry[]>(
      `/api/leaderboard?days=${days}&top=${top}${communityId != null ? `&communityId=${communityId}` : ""}`
    ),

  contributor: (id: number) => request<ContributorProfile>(`/api/contributors/${id}`),

  communities: () => request<CommunitySummary[]>("/api/communities"),

  stats: () => request<PlatformStats>("/api/stats"),
};
