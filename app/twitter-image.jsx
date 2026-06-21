import { ImageResponse } from "next/og";

export const alt = "Amanullah Yawari — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 55%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: avatar badge + site label */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#000000",
            }}
          >
            AY
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#8a8a8a",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            yawari.vercel.app
          </div>
        </div>

        {/* Middle: name + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            Amanullah Yawari
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#c9c9c9",
              marginTop: 18,
              fontWeight: 400,
            }}
          >
            Full-Stack Developer · Kabul, Afghanistan
          </div>
        </div>

        {/* Bottom: tech stack pills */}
        <div style={{ display: "flex", gap: 14 }}>
          {["Next.js", "TypeScript", "Supabase", "Flutter"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#e5e5e5",
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                padding: "10px 24px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
