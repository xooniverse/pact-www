import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pact - Make Informed Decisions",
  description: "Your go to AI-assisted group discussion & decision-making tool.",
  creator: "Xooniverse",
  authors: [
    {
      name: "Xooniverse",
      url: "https://xooniverse.com"
    }
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: 'https://pact.xooniverse.com',
    title: 'Pact - Make Informed Decisions',
    description: 'Make informed decisions with Pact, your AI-assisted group discussion and decision-making tool.',
    images: [
      {
        url: 'https://pact.xooniverse.com/banner.png',
        alt: 'Pact - Make Informed Decisions',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Pact - Make Informed Decisions',
    description: 'Make informed decisions with Pact, your AI-assisted group discussion and decision-making tool.',
    creator: '@Xooniverse',
    images: [
      {
        url: 'https://pact.xooniverse.com/twitter-card.png',
        width: 1200,
        height: 630,
        alt: 'Pact - Make Informed Decisions',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
