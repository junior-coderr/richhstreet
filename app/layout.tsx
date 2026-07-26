import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://richhstreetcoffee.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Richh Street Coffee | Rooftop Cafe in NIBM, Pune",
    template: "%s | Richh Street Coffee"
  },
  description:
    "Richh Street Coffee is a rooftop cafe in NIBM, Pune, serving coffee, breakfast, shakes, mocktails, and late-night food from 10 AM to 4 AM.",
  keywords: [
    "Richh Street Coffee",
    "cafe in NIBM Pune",
    "rooftop cafe Pune",
    "late night cafe Pune",
    "coffee shop NIBM",
    "cafe near Dorabjees Mall"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Richh Street Coffee | Rooftop Cafe in NIBM, Pune",
    description:
      "Coffee, breakfast, shakes, mocktails, rooftop seating, Wi-Fi, and late-night food in NIBM, Pune.",
    url: siteUrl,
    siteName: "Richh Street Coffee",
    images: [
      {
        url: "/images/coffee-line-background.png",
        width: 1536,
        height: 864,
        alt: "Coffee illustrations for Richh Street Coffee"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Richh Street Coffee | Rooftop Cafe in NIBM, Pune",
    description:
      "A rooftop cafe in NIBM, Pune, open from 10 AM to 4 AM with coffee, food, Wi-Fi, and mocktails.",
    images: ["/images/coffee-line-background.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Archivo:wght@600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
