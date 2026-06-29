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
  title: "RockPail | Keep Fun Simple",
  description:
    "RockPail is the simple, portable outdoor throwing game built around rocks, metal pails, and the perfect DING.",
  metadataBase: new URL("https://rockpail.com"),
  openGraph: {
    title: "RockPail | Keep Fun Simple",
    description:
      "Fill the pails. Place them 7 paces apart. Throw the rocks. Call it loud.",
    url: "https://rockpail.com",
    siteName: "RockPail",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RockPail | Keep Fun Simple",
    description:
      "The simple, portable outdoor throwing game built around rocks, metal pails, and the perfect DING.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
