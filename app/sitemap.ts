import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/business";

/**
 * Sitemap — generated at build time (static export).
 *
 * Only include URLs that actually exist and return 200.
 * Future pages are listed as comments; uncomment as each is built.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Live pages ────────────────────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Future pages — uncomment as each page is created ─────────────────
    // { url: `${SITE_URL}/about`,   lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    // { url: `${SITE_URL}/menu`,    lastModified: now, changeFrequency: "weekly",   priority: 0.9 },
    // { url: `${SITE_URL}/gallery`, lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    // { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly",   priority: 0.6 },
    // { url: `${SITE_URL}/events`,  lastModified: now, changeFrequency: "weekly",   priority: 0.8 },
    // { url: `${SITE_URL}/offers`,  lastModified: now, changeFrequency: "weekly",   priority: 0.8 },
    // { url: `${SITE_URL}/blog`,    lastModified: now, changeFrequency: "weekly",   priority: 0.7 },
    // { url: `${SITE_URL}/faq`,     lastModified: now, changeFrequency: "monthly",  priority: 0.6 },
  ];
}
