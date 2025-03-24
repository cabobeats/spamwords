import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spam Words Detector | Free Email & Content Analysis Tool",
  description: "Free tool to detect spam words and phrases in your email marketing, website content, and social media posts. Improve deliverability and avoid spam filters.",
  keywords: "spam detector, spam words, spam checker, email deliverability, spam filter, spam content, marketing copy checker, spam phrases, spam email detector, email marketing tool",
  authors: [{ name: "Blue Ocean Records LLC" }],
  creator: "Blue Ocean Records LLC",
  publisher: "Blue Ocean Records LLC",
  robots: "index, follow",
  applicationName: "Spam Words Detector",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spamdetector.yourdomain.com",
    siteName: "Spam Words Detector",
    title: "Spam Words Detector | Free Email & Content Analysis Tool",
    description: "Analyze your content for spam triggers that could affect email deliverability and engagement. Free spam words detection tool.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spam Words Detector Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Spam Words Detector | Free Email & Content Analysis Tool",
    description: "Analyze your content for spam triggers that could affect email deliverability and engagement. Free spam words detection tool.",
    images: ["/twitter-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://spamdetector.yourdomain.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
