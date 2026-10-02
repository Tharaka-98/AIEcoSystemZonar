import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import { SplashScreenLoaderProvider } from "@/context/SplashScreenLoaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  weight: ["400", "600"],
  variable: "--font-sora",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Zonar",
  description:
    "Welcome to the next big shift in crypto—a project that has the potential to change the way we think about tokens, AI, and how communities create value. What we're building isn't just another bot.",
  applicationName: "Zonar",
  icons: {
    icon: [
      { url: "/static/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/static/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/static/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/static/apple-touch-icon.png", sizes: "180x180" },
    other: [
      {
        rel: "mask-icon",
        url: "/static/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/static/site.webmanifest",
  other: {
    "msapplication-TileColor": "#00aba9",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth focus:scroll-auto">
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) add attributes to <body> before React loads */}
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable}  antialiased`}
      >
        <SplashScreenLoaderProvider>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </SplashScreenLoaderProvider>
      </body>
    </html>
  );
}
