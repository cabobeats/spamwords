import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    url: "https://spamwords.xyz",
    siteName: "SpamWords.xyz",
    title: "Spam Words Detector | Free Email & Content Analysis Tool",
    description: "Analyze your content for spam triggers that could affect email deliverability and engagement. Free spam words detection tool.",
    images: [
      {
        url: "https://spamwords.xyz/og-image.jpg",
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
    images: ["https://spamwords.xyz/twitter-image.jpg"]
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
        <link rel="canonical" href="https://spamwords.xyz" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2360A5FA'><path d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z' fill='%2360A5FA' stroke='%232563EB' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/><path d='M16 9L10.5 14.5L8 12' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>" />
      </head>
      <body className={`${inter.className}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TW6Y3VGKGP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TW6Y3VGKGP');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
