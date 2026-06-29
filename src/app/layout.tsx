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
  icons: {
    icon: "/Favicon_purple.png",
    shortcut: "/Favicon_purple.png",
    apple: "/Favicon_purple.png",
  },
  openGraph: {
    title: "RockPail | Keep Fun Simple",
    description:
      "Fill the pails. Place them 7 paces apart. Throw the rocks. Call it loud.",
    url: "https://rockpail.com",
    siteName: "RockPail",
    images: [
      {
        url: "/Purple_Logo.png",
        width: 1200,
        height: 630,
        alt: "RockPail logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RockPail | Keep Fun Simple",
    description:
      "The simple, portable outdoor throwing game built around rocks, metal pails, and the perfect DING.",
    images: ["/Purple_Logo.png"],
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
