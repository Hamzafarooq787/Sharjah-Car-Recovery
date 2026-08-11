import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0c12",
          gap: 32,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 24,
            background: "#f5b400",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a0c12",
            fontSize: 84,
            fontWeight: 900,
          }}
        >
          S
        </div>
        <div style={{ display: "flex", color: "#ffffff", fontSize: 60, fontWeight: 900 }}>Sharjah Car Recovery</div>
        <div style={{ display: "flex", color: "#f5b400", fontSize: 32, fontWeight: 700, letterSpacing: 4 }}>
          24/7 CAR RECOVERY &amp; TOWING
        </div>
      </div>
    ),
    { ...size },
  )
}
