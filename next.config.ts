import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      // ── Security headers — applied to every route ──────────────────────
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Referrer policy — full URL only to same origin
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict browser feature access
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },

      // ── Aggressive caching for static image assets ────────────────────
      // max-age=31536000 = 1 year (immutable since filenames don't change)
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },

      // ── Favicon cache (shorter — may be updated more often) ───────────
      {
        source: "/favicon/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },

      // ── llms.txt — allow AI bots to cache for 1 day ───────────────────
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          // Explicitly allow all crawlers to access this file
          { key: "X-Robots-Tag", value: "all" },
        ],
      },
    ];
  },
};

export default nextConfig;
