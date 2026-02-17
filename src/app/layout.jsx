import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keshav | Software Engineer",
  description:
    "Skilled Software Engineer building seemless mobile and web applications",
  keywords:
    "software engineer, mobile developer, web developer, frontend, UI/UX, portfolio, minimalist design, expo ,react native, nextjs, tailwindcss, html, css",
  authors: [{ name: "Keshav" }],
  creator: "Keshav",
  openGraph: {
    title: "Keshav | Software Engineer",
    description:
      "Skilled Software Engineer building seemless mobile and web applications",
    url: "https://my-portfolio-blush-beta-17.vercel.app/",
    siteName: "Keshav Portfolio",
    type: "website",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1905805359064723456/pJ1-dOHi_400x400.jpg", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Keshav - Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <Toaster />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
