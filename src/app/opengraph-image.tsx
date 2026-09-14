import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} | ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, #030712 0%, #0b1220 45%, #3b0764 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#22d3ee",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 18,
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#67e8f9",
            marginTop: 12,
          }}
        >
          {siteConfig.jobTitle}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#cbd5e1",
            marginTop: 32,
          }}
        >
          React · Next.js · Node.js · React Native
        </div>
      </div>
    ),
    { ...size },
  );
}
