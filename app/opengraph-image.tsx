import { ImageResponse } from "next/og";
import { BUSINESS_NAME, HOURS_DISPLAY, ADDRESS } from "@/config/business";

// ---------------------------------------------------------------------------
// Next.js automatic OG image generation
// This file is picked up by Next.js and used as the OpenGraph and Twitter
// card image for every page that doesn't override it.
// Output: 1200×630 PNG — the standard social-share card size.
// ---------------------------------------------------------------------------

export const runtime = "edge";
export const alt = `${BUSINESS_NAME} | Rooftop Cafe in NIBM, Pune`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          // Brand gradient — espresso tones from globals.css
          background:
            "linear-gradient(135deg, #24170f 0%, #4b382f 55%, #966253 100%)",
        }}
      >
        {/* Decorative warm glow in top-right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(150,98,83,0.45) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top bar — eyebrow text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "52px 80px 0",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "2px",
              background: "#966253",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#f2d9bd",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {ADDRESS.addressLocality}, {ADDRESS.addressRegion} · India
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          {/* Business name */}
          <div
            style={{
              color: "#fff5e6",
              fontSize: "80px",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}
          >
            {BUSINESS_NAME}
          </div>

          {/* Tagline */}
          <div
            style={{
              color: "#f2d9bd",
              fontSize: "30px",
              lineHeight: 1.4,
              marginBottom: "36px",
              maxWidth: "700px",
            }}
          >
            Rooftop cafe · Specialty coffee · Mocktails · Late-night food
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              `Open ${HOURS_DISPLAY.replace("Open daily · ", "")}`,
              "NIBM Road · Pune",
              "Rooftop seating",
              "Wi-Fi friendly",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "10px 20px",
                  border: "1px solid rgba(242,217,189,0.35)",
                  borderRadius: "999px",
                  color: "#f2d9bd",
                  fontSize: "16px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px 48px",
          }}
        >
          <span
            style={{
              color: "rgba(242,217,189,0.6)",
              fontSize: "18px",
              letterSpacing: "0.04em",
            }}
          >
            richhstreetcoffee.com
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                display: "flex",
              }}
            />
            <span style={{ color: "#f2d9bd", fontSize: "16px" }}>
              Open now · till 4 AM
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
