import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Google — main + AI-extended crawler
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // OpenAI / ChatGPT crawlers
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Common Crawl (trains many LLMs)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Amazon Alexa / Bedrock
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // Apple Intelligence / Siri
      {
        userAgent: "Applebot",
        allow: "/",
      },
      // Microsoft Bing
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
