import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0c12",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 5,
            background: "#f5b400",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a0c12",
            fontSize: 14,
            fontWeight: 900,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size },
  )
}
