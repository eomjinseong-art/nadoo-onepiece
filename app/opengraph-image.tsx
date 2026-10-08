import { ImageResponse } from "next/og";

export const alt = "나두원피스 · 동블루에서 에그헤드까지";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const title = "나두원피스";
  const sub = "동블루에서 에그헤드까지, 아크로 읽기";
  const font = await loadFont(`${title}${sub}NADOO ONE PIECE`);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f6f0e4",
          color: "#1b2430",
          padding: "72px",
          borderTop: "18px solid #0f6e86",
          borderBottom: "18px solid #c4892a",
          fontFamily: font ? "NotoSerifKR" : "serif",
        }}
      >
        <div style={{ color: "#0f6e86", fontSize: 28, letterSpacing: 6 }}>NADOO ONE PIECE</div>
        <div style={{ marginTop: 20, fontSize: 84 }}>{title}</div>
        <div style={{ marginTop: 18, fontSize: 36, color: "#5d6b73" }}>{sub}</div>
        <div style={{ marginTop: 36, fontSize: 26, color: "#2f6b52" }}>비공식 팬 정리 · 밀짚모자 일당의 항해</div>
      </div>
    ),
    {
      ...size,
      ...(font ? { fonts: [{ name: "NotoSerifKR", data: font, weight: 700 as const, style: "normal" as const }] } : {}),
    },
  );
}
