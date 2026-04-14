import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hassan — Agentic AI Architect",
  description:
    "I build agentic AI systems for teams that need the thing actually shipped. Founder of Codantrix Labs.",
  metadataBase: new URL("https://hassanalimehdi.dev"),
  openGraph: {
    title: "Hassan — Agentic AI Architect",
    description:
      "I build agentic AI systems for teams that need the thing actually shipped. Founder of Codantrix Labs.",
    url: "https://hassanalimehdi.dev",
    siteName: "Hassan Ali Mehdi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan — Agentic AI Architect",
    description:
      "I build agentic AI systems for teams that need the thing actually shipped.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
