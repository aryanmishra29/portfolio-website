import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const imagePath = path.join(process.cwd(), "public", "aryan-headshot.png");
  const buffer = fs.readFileSync(imagePath);
  const dataUrl = `data:image/png;base64,${buffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a0a0f",
          backgroundImage: `url(${dataUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 30%",
          backgroundRepeat: "no-repeat",
        }}
      />
    ),
    { ...size },
  );
}
