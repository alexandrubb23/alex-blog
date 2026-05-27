import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#1a1625",
          borderRadius: "6px",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 14,
          color: "#6D54D0",
          letterSpacing: "-0.5px",
        }}
      >
        AB
      </div>
    ),
    { ...size }
  );
}
