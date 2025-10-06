import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Borgar - Full-Stack Developer | 18+ Years Experience",
  description: "Experienced full-stack developer with 18+ years of expertise in modern web technologies. Specializing in React, Node.js, Python, and cloud solutions.",
  keywords: "full-stack developer, React, Node.js, TypeScript, Python, web development, software engineer, 18 years experience",
  authors: [{ name: "Borgar" }],
  creator: "Borgar",
  publisher: "Borgar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://borgar-portfolio.com",
    title: "Borgar - Full-Stack Developer | 18+ Years Experience",
    description: "Experienced full-stack developer with 18+ years of expertise in modern web technologies.",
    siteName: "Borgar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Borgar - Full-Stack Developer | 18+ Years Experience",
    description: "Experienced full-stack developer with 18+ years of expertise in modern web technologies.",
    creator: "@borgar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
