import type { MetadataRoute } from "next";
import { BUSINESS_NAME, SITE_URL } from "@/config/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: "Richh Street",
    description:
      "Rooftop cafe in NIBM, Pune. Specialty coffee, mocktails, breakfast and late-night food. Open 10 AM – 4 AM daily.",
    start_url: "/",
    display: "standalone",
    background_color: "#efeced",
    theme_color: "#7a0002",
    lang: "en-IN",
    scope: "/",
    id: SITE_URL,
    icons: [
      {
        src: "/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // Add these when commissioned from the designer:
      // { src: "/favicon/icon-192.png", sizes: "192x192", type: "image/png" },
      // { src: "/favicon/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
