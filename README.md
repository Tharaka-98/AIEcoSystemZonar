# Zonar- AI Ecosystem Website

A responsive, animated marketing website for **Zonar**, a concept platform where a Telegram bot learns from community conversations and rewards high-quality contributions. The site is built with **Next.js 15, React 19, TypeScript and Tailwind CSS v4**, includes interactive **3D scenes made in Spline**, and is exported as a fully static site deployed on **Vercel**.

**Live demo:** https://ai-eco-system-zonar.vercel.app/

---

## Website

<img width="2480" height="3509" alt="zonar" src="https://github.com/user-attachments/assets/6b990865-699e-4a02-a1cc-1063ba9cdd31" />


---

## Features

1. **Animated hero slider.** The opening section is a full-width carousel built with Swiper.
2. **Interactive 3D scenes.** Four Spline scenes are embedded as React components and scale to fit mobile, tablet and desktop.
3. **Splash screen with live progress.** A React Context tracks each 3D scene as it loads and shows a percentage spinner until all assets are ready, so users never see a half-loaded page.
4. **Section-based page layout.** The page is split into self-contained sections (Hero, Telegram Bot, Features, Token, Ecosystem), and each section takes props so its content can be changed easily.
5. **Reusable UI components.** These include the header, footer, an animated border button, gradient backdrops, divider lines and a spinner.
6. **Responsive design.** The layout is mobile-first using Tailwind breakpoints, with separate logos for mobile and desktop.
7. **Static export.** `output: "export"` builds the site to plain HTML, CSS and JS, so it can be hosted on any CDN without a server.
8. **Performance tooling.** `@next/bundle-analyzer` is included to inspect bundle size.
9. **SEO and PWA metadata.** The site includes a web app manifest, favicons in several sizes, Apple touch icons and Open Graph-ready metadata.

---

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (PostCSS) |
| 3D graphics | Spline (`@splinetool/react-spline`) |
| Carousel | Swiper 11 |
| Icons | Lucide React |
| Fonts | Geist, Geist Mono, Sora (via `next/font`) |
| Code quality | ESLint 9 (`eslint-config-next`) |
| Hosting | Vercel (static export) |

---

## Project Structure

```
src/
├── app/
│   ├── (sections)/                  # Page sections
│   │   ├── (MainSliderSection).tsx      # Hero carousel
│   │   ├── (TelegramBotSection).tsx     # How the bot works
│   │   ├── (ThatDoMoreSection).tsx      # Feature highlights
│   │   ├── (DriveItAllSection).tsx      # Token utility
│   │   └── (CryptoEcosystemSection).tsx # Ecosystem overview
│   ├── layout.tsx                   # Root layout, fonts, metadata
│   ├── page.tsx                     # Home page (composes sections)
│   └── globals.css
├── components/
│   ├── header/  footer/             # Site navigation
│   ├── splinescene/Element1-4/      # 3D scene wrappers
│   ├── SwiperDifferences/           # Comparison carousel
│   ├── BorderMagicButton/           # Animated CTA button
│   ├── backdrop/                    # Gradient backgrounds
│   ├── spinner/                     # Loading spinner
│   └── horizontalLine/
├── context/
│   └── SplashScreenLoaderContext.tsx  # Tracks 3D asset loading
├── constants/
│   ├── links.ts                     # External links
│   └── spline-constants.ts          # Spline scene URLs
└── types/global.d.ts
public/
├── images/                          # Logos and illustrations
└── static/                          # Favicons and manifest
```

---

## How the Splash Loader Works

1. `SplashScreenLoaderProvider` starts with every Spline scene marked as "loading".
2. Each 3D component calls `addLoading(scene)` when it mounts, and `removeLoading(scene)` when Spline reports that the scene has loaded.
3. The provider works out `completed / total` and passes it to the `Spinner`, which draws a progress ring.
4. When nothing is left loading, after a minimum display time of 1 second, the overlay fades out and stops capturing clicks.

---

## Getting Started

**Prerequisites:** Node.js 18.18 or later and Yarn (npm also works).

```bash
# 1. Clone
git clone https://github.com/Tharaka-98/AIEcoSystemZonar.git
cd AIEcoSystemZonar

# 2. Install dependencies
yarn install

# 3. Run the dev server (Turbopack)
yarn dev
# open http://localhost:3000
```

### Scripts

| Command | What it does |
|---|---|
| `yarn dev` | Starts the dev server with Turbopack |
| `yarn build` | Builds a production static export into `out/` |
| `yarn start` | Serves a production build |
| `yarn lint` | Runs ESLint |
| `ANALYZE=true yarn build` | Builds and opens the bundle size report |

---

## Deployment

The project is a static export, so `yarn build` produces an `out/` folder that any static host can serve.
On **Vercel**, import the repository and keep the default Next.js settings. Every push to `main` redeploys the site.

---

## Planned Improvements

1. Lazy-load the Spline scenes with `next/dynamic` to make the first page load faster.
2. Improve accessibility: alt text, focus states and support for reduced motion.
3. Add Lighthouse scores and unit tests for the loader context.
4. Connect a working demo of the Telegram bot.

---

## Author

**Tharaka Senevirathne**, Master of Information Technology, Charles Darwin University
GitHub: [@Tharaka-98](https://github.com/Tharaka-98)
