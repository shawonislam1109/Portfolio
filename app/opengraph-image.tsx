import { ImageResponse } from "next/og";

export const alt = "Rabiyul Islam — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#f8fafc",
        background: "linear-gradient(135deg, #09111f 0%, #10182a 52%, #172042 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 28, fontWeight: 700 }}>
        <div style={{ display: "flex", width: 54, height: 54, alignItems: "center", justifyContent: "center", borderRadius: 14, color: "#09111f", background: "linear-gradient(135deg, #4adcc4, #9b7cff)" }}>RI</div>
        rabiyul<span style={{ color: "#4adcc4" }}>.</span>islam
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 25, letterSpacing: 4, color: "#4adcc4", textTransform: "uppercase" }}>Full stack developer</div>
        <div style={{ display: "flex", maxWidth: 920, marginTop: 22, fontSize: 76, lineHeight: 1.05, fontWeight: 700, letterSpacing: -3 }}>Digital products built with clarity &amp; character.</div>
      </div>
      <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#94a3b8" }}>React <span style={{ color: "#4adcc4" }}>•</span> Next.js <span style={{ color: "#4adcc4" }}>•</span> Node.js <span style={{ color: "#4adcc4" }}>•</span> NestJS</div>
    </div>,
    size,
  );
}
