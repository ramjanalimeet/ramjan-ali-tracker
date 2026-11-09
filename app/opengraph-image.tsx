import { ImageResponse } from "next/og";
import { OG_ALT } from "@/lib/site";

export const alt = OG_ALT;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#111210",
        color: "#F2F3F0",
      }}
    >
      <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
        Ramjan Ali<span style={{ color: "#C6F432" }}>.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
          Local SEO &amp; AI Search Visibility
        </div>
        <div style={{ fontSize: 38, color: "#C6F432", marginTop: 20 }}>for Home Service Businesses</div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#8d9088" }}>
        Google Maps · ChatGPT · Gemini · AI Overviews
      </div>
    </div>,
    size,
  );
}
