import type { ReactNode } from "react";

const INK = "#3a2a22";
const SKIN = "#f6c7a8";
const BLUSH = "#f4a8ad";

type Eye = "normal" | "wink" | "shut" | "socket" | "shades" | "sleepy" | "one-closed" | "spiral" | "none";
type Mouth = "smile" | "grin" | "open" | "flat" | "teeth" | "none";
type Nose = "none" | "dot" | "long" | "blue";

function Eyes({ kind }: { kind: Eye }) {
  if (kind === "none") return null;
  if (kind === "shades") return <rect x="46" y="66" width="68" height="22" rx="9" fill="#1b1b1b" stroke={INK} strokeWidth="2" />;
  if (kind === "socket") {
    return (
      <>
        <ellipse cx="64" cy="78" rx="13" ry="15" fill="#2c261f" />
        <ellipse cx="98" cy="78" rx="13" ry="15" fill="#2c261f" />
        <circle cx="66" cy="75" r="3.2" fill="#fff" />
        <circle cx="100" cy="75" r="3.2" fill="#fff" />
      </>
    );
  }
  if (kind === "shut" || kind === "sleepy") {
    const y = kind === "sleepy" ? 80 : 76;
    return (
      <>
        <path d={`M52 ${y} Q64 ${y - 8} 76 ${y}`} stroke={INK} strokeWidth="2.3" fill="none" strokeLinecap="round" />
        <path d={`M86 ${y} Q98 ${y - 8} 110 ${y}`} stroke={INK} strokeWidth="2.3" fill="none" strokeLinecap="round" />
      </>
    );
  }
  if (kind === "wink") {
    return (
      <>
        <circle cx="64" cy="76" r="4.4" fill={INK} />
        <circle cx="62.4" cy="74.6" r="1.4" fill="#fff" />
        <path d="M88 76 Q98 68 110 76" stroke={INK} strokeWidth="2.3" fill="none" strokeLinecap="round" />
      </>
    );
  }
  if (kind === "one-closed") {
    return (
      <>
        <path d="M52 78 Q64 86 74 72" stroke={INK} strokeWidth="2.3" fill="none" strokeLinecap="round" />
        <circle cx="98" cy="76" r="4.4" fill={INK} />
        <circle cx="96.4" cy="74.6" r="1.4" fill="#fff" />
      </>
    );
  }
  if (kind === "spiral") {
    return (
      <>
        <circle cx="64" cy="78" r="4.4" fill={INK} />
        <circle cx="62.4" cy="76.6" r="1.4" fill="#fff" />
        <path d="M92 66c6-8 16-2 12 6-3 5-8 4-8 0 0-2 2-3 4-2" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
      </>
    );
  }
  return (
    <>
      <circle cx="64" cy="76" r="4.4" fill={INK} />
      <circle cx="98" cy="76" r="4.4" fill={INK} />
      <circle cx="62.4" cy="74.6" r="1.4" fill="#fff" />
      <circle cx="96.4" cy="74.6" r="1.4" fill="#fff" />
    </>
  );
}

function Mouth({ kind }: { kind: Mouth }) {
  if (kind === "none") return null;
  if (kind === "flat") return <path d="M68 102 H94" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />;
  if (kind === "open") return <ellipse cx="80" cy="104" rx="10" ry="7" fill="#e07a86" stroke={INK} strokeWidth="2" />;
  if (kind === "teeth") {
    return (
      <>
        <path d="M62 98 Q80 114 98 98" fill="#fff" stroke={INK} strokeWidth="2" />
        <path d="M80 98 V110" stroke={INK} strokeWidth="1.4" />
      </>
    );
  }
  if (kind === "grin") return <path d="M62 96 Q80 116 98 96" stroke={INK} strokeWidth="2.3" fill="none" strokeLinecap="round" />;
  return <path d="M66 98 Q80 110 94 98" stroke={INK} strokeWidth="2.3" fill="none" strokeLinecap="round" />;
}

function Buddy({
  top,
  bottom,
  skin = SKIN,
  eye = "normal",
  mouth = "smile",
  nose = "none",
  freckles = false,
  scar = false,
  blush = true,
  back,
  hair,
  bangs,
  hat,
  prop,
  arm = true,
}: {
  top: string;
  bottom: string;
  skin?: string;
  eye?: Eye;
  mouth?: Mouth;
  nose?: Nose;
  freckles?: boolean;
  scar?: boolean;
  blush?: boolean;
  back?: ReactNode;
  hair?: ReactNode;
  bangs?: ReactNode;
  hat?: ReactNode;
  prop?: ReactNode;
  arm?: boolean;
}) {
  return (
    <>
      <ellipse cx="80" cy="182" rx="30" ry="5" fill="#e4d3b8" />
      {back}
      <ellipse cx="80" cy="160" rx="30" ry="22" fill={bottom} stroke={INK} strokeWidth="2.3" />
      {arm ? (
        <>
          <path d="M50 146 Q30 156 36 174" stroke={skin} strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M110 146 Q130 156 124 174" stroke={skin} strokeWidth="7" fill="none" strokeLinecap="round" />
        </>
      ) : null}
      <path d="M54 128 Q80 114 106 128 L102 158 Q80 170 58 158 Z" fill={top} stroke={INK} strokeWidth="2.3" strokeLinejoin="round" />
      <circle cx="80" cy="78" r="40" fill={skin} stroke={INK} strokeWidth="2.4" />
      {hair}
      {blush ? (
        <>
          <ellipse cx="52" cy="90" rx="8" ry="5" fill={BLUSH} opacity="0.9" />
          <ellipse cx="108" cy="90" rx="8" ry="5" fill={BLUSH} opacity="0.9" />
        </>
      ) : null}
      <Eyes kind={eye} />
      {nose === "dot" ? <circle cx="80" cy="90" r="2.2" fill={INK} /> : null}
      {nose === "blue" ? <ellipse cx="80" cy="92" rx="11" ry="8" fill="#4f78d0" stroke={INK} strokeWidth="2" /> : null}
      {nose === "long" ? <path d="M78 86 Q138 78 150 98 Q132 112 78 102 Z" fill={skin} stroke={INK} strokeWidth="2.2" /> : null}
      <Mouth kind={mouth} />
      {freckles ? (
        <g fill="#c4846a">
          <circle cx="56" cy="92" r="1.5" />
          <circle cx="62" cy="96" r="1.5" />
          <circle cx="98" cy="96" r="1.5" />
          <circle cx="104" cy="92" r="1.5" />
        </g>
      ) : null}
      {scar ? (
        <path d="M54 96 l6 6 M60 96 l-6 6" stroke="#c45a4a" strokeWidth="1.8" strokeLinecap="round" />
      ) : null}
      {bangs}
      {hat}
      {prop}
    </>
  );
}

function StrawHat() {
  return (
    <g>
      <ellipse cx="80" cy="50" rx="56" ry="13" fill="#f2c14e" stroke={INK} strokeWidth="2.3" />
      <path d="M50 48 Q80 16 110 48" fill="#f6d56a" stroke={INK} strokeWidth="2.3" />
      <path d="M52 49 H108" stroke="#b23b3b" strokeWidth="3.2" strokeLinecap="round" />
    </g>
  );
}

function HairCap({ color, d }: { color: string; d?: string }) {
  return <path d={d ?? "M42 74 Q40 34 80 32 Q120 34 118 74 Q100 58 80 60 Q60 58 42 74"} fill={color} stroke={INK} strokeWidth="2.2" />;
}

const gallery: Record<string, ReactNode> = {
  luffy: (
    <Buddy
      top="#e24b4b"
      bottom="#315f9a"
      scar
      hair={<path d="M58 52 Q68 34 78 50 M84 48 Q96 30 108 50" stroke="#2a211c" strokeWidth="4" fill="none" strokeLinecap="round" />}
      hat={<StrawHat />}
    />
  ),
  zoro: (
    <Buddy
      top="#f4f1ea"
      bottom="#2f6b45"
      eye="one-closed"
      mouth="flat"
      hair={<HairCap color="#2f8a45" d="M40 78 Q36 26 80 30 Q124 26 120 80 Q98 52 80 56 Q58 52 40 78" />}
      bangs={<path d="M46 64 Q80 50 114 64" stroke="#b23b3b" strokeWidth="7" fill="none" strokeLinecap="round" />}
      prop={
        <g stroke={INK} strokeWidth="2" strokeLinecap="round">
          <path d="M118 118 l22 46" stroke="#9aa3ad" strokeWidth="4" />
          <path d="M126 124 l18 40" stroke="#d7dde3" strokeWidth="3" />
          <path d="M108 150 l16 28" stroke="#c5ccd3" strokeWidth="3" />
          <path d="M52 78 l10 14" stroke="#c45a4a" strokeWidth="2" />
        </g>
      }
    />
  ),
  nami: (
    <Buddy
      top="#f28a2c"
      bottom="#f4d7b0"
      eye="wink"
      hair={<path d="M48 96 Q18 48 62 34 Q92 8 118 36 Q146 70 124 118 Q100 78 78 70 Q56 92 48 96" fill="#f08a2a" stroke={INK} strokeWidth="2.2" />}
      prop={
        <g>
          <path d="M132 46 V176" stroke="#c4892a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="132" cy="42" r="8" fill="#f2c14e" stroke={INK} strokeWidth="2" />
          <circle cx="28" cy="150" r="10" fill="#f08a2a" stroke={INK} strokeWidth="2" />
          <path d="M28 140 q8 -8 4 2" fill="#3e8f4a" />
        </g>
      }
    />
  ),
  usopp: (
    <Buddy
      top="#e7d7b4"
      bottom="#3e6b3a"
      nose="long"
      hair={<path d="M46 70 Q30 30 70 36 Q78 18 92 34 Q130 20 122 70 Q100 48 80 52 Q60 48 46 70" fill="#6b4428" stroke={INK} strokeWidth="2.2" />}
      hat={
        <g>
          <circle cx="58" cy="48" r="9" fill="none" stroke="#245c86" strokeWidth="3" />
          <circle cx="78" cy="44" r="9" fill="none" stroke="#245c86" strokeWidth="3" />
          <path d="M67 46 H70" stroke="#245c86" strokeWidth="3" />
        </g>
      }
      prop={
        <g>
          <path d="M118 120 l28 -20" stroke="#6b4428" strokeWidth="4" strokeLinecap="round" />
          <path d="M140 92 v16 M132 100 h16" stroke="#6b4428" strokeWidth="3" strokeLinecap="round" />
        </g>
      }
    />
  ),
  sanji: (
    <Buddy
      top="#2a2a2a"
      bottom="#2a2a2a"
      eye="spiral"
      mouth="smile"
      hair={<path d="M48 64 Q46 28 80 34 Q112 24 108 60 Q90 46 70 52 Q56 48 48 64" fill="#f0d15c" stroke={INK} strokeWidth="2.2" />}
      bangs={<path d="M78 40 Q124 24 122 100 Q100 72 88 64 Q96 48 78 40" fill="#f0d15c" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <path d="M40 128 H120" stroke="#f2f2f2" strokeWidth="6" />
          <circle cx="108" cy="104" r="7" fill="#ef6f9a" stroke={INK} strokeWidth="1.8" />
          <path d="M108 111 V124" stroke="#f2f2f2" strokeWidth="2" />
        </g>
      }
    />
  ),
  chopper: (
    <g>
      <ellipse cx="80" cy="182" rx="26" ry="5" fill="#e4d3b8" />
      <ellipse cx="80" cy="158" rx="28" ry="24" fill="#c4844a" stroke={INK} strokeWidth="2.3" />
      <circle cx="62" cy="176" r="6" fill="#8a5a32" />
      <circle cx="98" cy="176" r="6" fill="#8a5a32" />
      <path d="M46 40 Q40 18 58 28" stroke="#8a5a32" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M114 40 Q120 18 102 28" stroke="#8a5a32" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="86" r="42" fill="#d09258" stroke={INK} strokeWidth="2.4" />
      <ellipse cx="80" cy="98" rx="12" ry="9" fill="#4f78d0" stroke={INK} strokeWidth="2" />
      <circle cx="62" cy="82" r="4" fill={INK} />
      <circle cx="98" cy="82" r="4" fill={INK} />
      <circle cx="60.5" cy="80.5" r="1.3" fill="#fff" />
      <circle cx="96.5" cy="80.5" r="1.3" fill="#fff" />
      <path d="M70 112 Q80 120 90 112" stroke={INK} strokeWidth="2" fill="none" />
      <ellipse cx="80" cy="52" rx="34" ry="16" fill="#f08aaa" stroke={INK} strokeWidth="2.2" />
      <path d="M58 40 Q80 8 102 40 Q80 28 58 40" fill="#f08aaa" stroke={INK} strokeWidth="2.2" />
      <path d="M80 28 V52 M68 40 H92" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
  robin: (
    <Buddy
      top="#6b3e86"
      bottom="#f7f4ef"
      hair={<path d="M42 100 Q36 36 80 32 Q124 36 118 100 Q104 78 80 74 Q56 78 42 100" fill="#241c22" stroke={INK} strokeWidth="2.2" />}
      bangs={<path d="M52 58 Q66 78 62 96 M98 58 Q92 80 100 98" stroke="#241c22" strokeWidth="8" fill="none" strokeLinecap="round" />}
      prop={
        <g>
          <rect x="112" y="128" width="28" height="20" rx="2" fill="#f4efe4" stroke={INK} strokeWidth="2" />
          <path d="M126 128 V148" stroke={INK} strokeWidth="1.4" />
          <circle cx="40" cy="120" r="8" fill="#f08aaa" stroke={INK} strokeWidth="1.6" />
          <circle cx="40" cy="112" r="4" fill="#f2c14e" />
        </g>
      }
    />
  ),
  franky: (
    <Buddy
      top="#2a6fbf"
      bottom="#163a66"
      eye="shades"
      mouth="grin"
      skin="#f0c09a"
      hair={<path d="M48 58 Q40 8 80 18 Q132 -8 124 62 Q100 36 80 42 Q60 36 48 58" fill="#2f7de0" stroke={INK} strokeWidth="2.2" />}
      prop={
        <g>
          <path d="M80 132 l8 16 h-16 z" fill="#f2c14e" stroke={INK} strokeWidth="1.6" />
          <rect x="18" y="150" width="18" height="12" rx="3" fill="#8eb6ea" stroke={INK} strokeWidth="1.6" />
          <rect x="124" y="150" width="18" height="12" rx="3" fill="#8eb6ea" stroke={INK} strokeWidth="1.6" />
        </g>
      }
    />
  ),
  brook: (
    <g>
      <ellipse cx="80" cy="182" rx="30" ry="5" fill="#e4d3b8" />
      <path d="M46 70 Q20 20 80 28 Q150 8 122 78 Q100 40 80 48 Q58 40 46 70" fill="#4a3428" stroke={INK} strokeWidth="2.2" />
      <ellipse cx="80" cy="162" rx="30" ry="22" fill="#2a2428" stroke={INK} strokeWidth="2.3" />
      <circle cx="80" cy="82" r="38" fill="#f7f3ea" stroke={INK} strokeWidth="2.4" />
      <ellipse cx="64" cy="80" rx="12" ry="14" fill="#2c261f" />
      <ellipse cx="98" cy="80" rx="12" ry="14" fill="#2c261f" />
      <circle cx="66" cy="78" r="3" fill="#fff" />
      <circle cx="100" cy="78" r="3" fill="#fff" />
      <path d="M64 104 H96" stroke={INK} strokeWidth="2" />
      <path d="M66 104 v6 M74 104 v6 M82 104 v6 M90 104 v6" stroke={INK} strokeWidth="1.5" />
      <ellipse cx="80" cy="46" rx="34" ry="8" fill="#2a2428" stroke={INK} strokeWidth="2" />
      <rect x="62" y="22" width="36" height="26" rx="3" fill="#2a2428" stroke={INK} strokeWidth="2" />
      <path d="M118 130 q20 10 8 36" stroke="#c4892a" strokeWidth="3" fill="none" />
      <ellipse cx="132" cy="128" rx="14" ry="8" fill="#f2c14e" stroke={INK} strokeWidth="1.6" />
    </g>
  ),
  jinbe: (
    <Buddy
      top="#f2c14e"
      bottom="#1e4e68"
      skin="#7eb4d4"
      nose="dot"
      hair={
        <>
          <path d="M40 78 Q22 70 36 100" fill="#5e9ec4" stroke={INK} strokeWidth="2" />
          <path d="M120 78 Q138 70 124 100" fill="#5e9ec4" stroke={INK} strokeWidth="2" />
        </>
      }
      prop={
        <g>
          <circle cx="80" cy="140" r="8" fill="#e07a3d" stroke={INK} strokeWidth="1.6" />
          <path d="M58 146 Q80 156 102 146" stroke="#1e4e68" strokeWidth="2" fill="none" />
        </g>
      }
    />
  ),
  ace: (
    <Buddy
      top="#f4f1ea"
      bottom="#3a2a22"
      freckles
      mouth="grin"
      hair={<HairCap color="#2a211c" />}
      hat={
        <g>
          <ellipse cx="80" cy="46" rx="40" ry="10" fill="#f08a2a" stroke={INK} strokeWidth="2" />
          <path d="M52 44 Q80 18 108 44" fill="#f08a2a" stroke={INK} strokeWidth="2" />
          <circle cx="60" cy="40" r="3" fill="#e24b4b" />
          <circle cx="80" cy="34" r="3" fill="#e24b4b" />
          <circle cx="100" cy="40" r="3" fill="#e24b4b" />
        </g>
      }
    />
  ),
  sabo: (
    <Buddy
      top="#2d4f86"
      bottom="#1d3557"
      hair={<HairCap color="#f0d15c" />}
      hat={
        <g>
          <ellipse cx="80" cy="48" rx="36" ry="8" fill="#2a2428" stroke={INK} strokeWidth="2" />
          <rect x="64" y="24" width="32" height="24" fill="#2a2428" stroke={INK} strokeWidth="2" />
          <circle cx="62" cy="52" r="7" fill="none" stroke="#c4892a" strokeWidth="2.4" />
          <circle cx="98" cy="52" r="7" fill="none" stroke="#c4892a" strokeWidth="2.4" />
        </g>
      }
      prop={<path d="M124 100 v70" stroke="#c4892a" strokeWidth="4" strokeLinecap="round" />}
    />
  ),
  garp: (
    <Buddy
      top="#f7f7f7"
      bottom="#1e4e86"
      mouth="grin"
      hair={<path d="M48 60 Q40 28 80 36 Q120 24 114 64" fill="#e7e7ea" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <path d="M52 118 H108" stroke="#1e4e86" strokeWidth="6" />
          <circle cx="128" cy="160" r="12" fill={SKIN} stroke={INK} strokeWidth="2" />
        </g>
      }
    />
  ),
  dragon: (
    <Buddy
      top="#2f6b52"
      bottom="#24362c"
      eye="shut"
      mouth="flat"
      blush={false}
      hair={<path d="M36 90 Q20 30 80 28 Q140 30 124 96 Q80 40 36 90" fill="#1d6b45" stroke={INK} strokeWidth="2.2" />}
      bangs={<path d="M58 70 q10 16 4 24" stroke="#c45a4a" strokeWidth="2" fill="none" />}
    />
  ),
  shanks: (
    <Buddy
      top="#2a2428"
      bottom="#2a2428"
      mouth="grin"
      hair={<path d="M40 90 Q28 30 78 34 Q130 20 122 88 Q90 50 70 60 Q50 48 40 90" fill="#c4473a" stroke={INK} strokeWidth="2.2" />}
      bangs={
        <g stroke="#c45a4a" strokeWidth="1.8">
          <path d="M96 62 l14 16 M104 60 l12 18 M112 66 l8 16" />
        </g>
      }
      prop={
        <g>
          <path d="M50 146 Q30 156 36 174" stroke={SKIN} strokeWidth="7" fill="none" strokeLinecap="round" />
          <circle cx="126" cy="150" r="8" fill="#f2c14e" stroke={INK} strokeWidth="1.6" />
        </g>
      }
      arm={false}
    />
  ),
  whitebeard: (
    <Buddy
      top="#f7f4ef"
      bottom="#243044"
      mouth="grin"
      hair={<path d="M48 64 Q70 20 112 48" fill="#f7f7f7" stroke={INK} strokeWidth="2" />}
      bangs={<path d="M42 100 Q80 128 118 100 Q80 118 42 100" fill="#f4f1ea" stroke={INK} strokeWidth="2.2" />}
      prop={<path d="M126 70 v100" stroke="#8a8178" strokeWidth="5" strokeLinecap="round" />}
    />
  ),
  "big-mom": (
    <Buddy
      top="#f4a0c0"
      bottom="#e24b78"
      mouth="grin"
      hair={<path d="M30 80 Q20 10 80 28 Q150 0 132 90 Q110 40 80 48 Q50 36 30 80" fill="#f2a0c4" stroke={INK} strokeWidth="2.2" />}
      hat={<path d="M58 36 h44 l-8 -16 h-28 z" fill="#f2c14e" stroke={INK} strokeWidth="2" />}
      prop={<circle cx="130" cy="150" r="10" fill="#ef6f9a" stroke={INK} strokeWidth="1.6" />}
    />
  ),
  kaido: (
    <Buddy
      top="#5b3d86"
      bottom="#2a2140"
      mouth="grin"
      hair={<HairCap color="#6b4a9a" />}
      hat={
        <>
          <path d="M52 42 Q48 16 64 36" fill="#e7e2f2" stroke={INK} strokeWidth="2" />
          <path d="M108 42 Q112 16 96 36" fill="#e7e2f2" stroke={INK} strokeWidth="2" />
        </>
      }
      prop={<path d="M122 108 q16 20 6 58" stroke="#6a625c" strokeWidth="7" strokeLinecap="round" />}
    />
  ),
  blackbeard: (
    <Buddy
      top="#2a2428"
      bottom="#1b1b1b"
      mouth="teeth"
      hair={<path d="M44 86 Q36 40 80 44 Q124 36 116 90 Q80 70 44 86" fill="#1b1b1b" stroke={INK} strokeWidth="2" />}
      bangs={<path d="M48 96 Q80 124 112 96 Q80 112 48 96" fill="#1b1b1b" stroke={INK} strokeWidth="2" />}
    />
  ),
  mihawk: (
    <Buddy
      top="#2a2428"
      bottom="#2a2428"
      eye="normal"
      mouth="flat"
      hair={<path d="M50 70 Q70 24 110 40 L104 78 Q80 58 50 70" fill="#241c22" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <path d="M118 40 v120" stroke="#2a2428" strokeWidth="4" />
          <path d="M108 78 H140 M124 68 V90" stroke="#c4892a" strokeWidth="3" />
          <circle cx="80" cy="136" r="6" fill="#c4892a" stroke={INK} strokeWidth="1.4" />
        </g>
      }
    />
  ),
  hancock: (
    <Buddy
      top="#b23b3b"
      bottom="#f7f4ef"
      eye="wink"
      hair={<path d="M40 110 Q30 30 80 30 Q140 24 124 120 Q100 70 80 66 Q54 74 40 110" fill="#241c22" stroke={INK} strokeWidth="2.2" />}
      prop={
        <g>
          <path d="M120 120 q24 8 10 36" stroke="#3e8f4a" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle cx="80" cy="28" r="6" fill="#f2c14e" stroke={INK} strokeWidth="1.5" />
        </g>
      }
    />
  ),
  crocodile: (
    <Buddy
      top="#d7c4a1"
      bottom="#8a6a3b"
      mouth="grin"
      hair={<path d="M48 60 Q80 28 116 52" fill="#2a2428" stroke={INK} strokeWidth="2" />}
      bangs={<path d="M52 70 l22 18" stroke="#c45a4a" strokeWidth="2.2" />}
      prop={
        <g>
          <path d="M120 150 q16 -8 10 16" stroke="#c9ced4" strokeWidth="4" fill="none" />
          <path d="M128 166 l8 8" stroke="#c9ced4" strokeWidth="3" />
        </g>
      }
    />
  ),
  doflamingo: (
    <Buddy
      top="#f08aaa"
      bottom="#f2c1d4"
      eye="shades"
      mouth="grin"
      hair={<HairCap color="#f0d7b0" />}
      prop={<path d="M40 70 Q20 40 48 36 Q70 20 90 40" fill="#f4a0c4" stroke={INK} strokeWidth="1.6" />}
    />
  ),
  law: (
    <Buddy
      top="#f7f7f7"
      bottom="#2a2428"
      mouth="flat"
      hair={<HairCap color="#2a2428" />}
      hat={
        <g>
          <ellipse cx="80" cy="46" rx="42" ry="12" fill="#f7f7f7" stroke={INK} strokeWidth="2" />
          <path d="M52 44 Q80 16 108 44" fill="#f7f7f7" stroke={INK} strokeWidth="2" />
          <circle cx="64" cy="36" r="5" fill="#c4844a" />
          <circle cx="96" cy="34" r="4" fill="#c4844a" />
          <circle cx="80" cy="28" r="3.5" fill="#c4844a" />
        </g>
      }
      prop={<path d="M124 70 v90" stroke="#d7dde3" strokeWidth="3" />}
    />
  ),
  kid: (
    <Buddy
      top="#b23b3b"
      bottom="#2a2428"
      mouth="grin"
      hair={<path d="M44 70 L58 20 L80 40 L98 12 L112 38 L124 22 L118 74 Q80 50 44 70" fill="#d24a3a" stroke={INK} strokeWidth="2" />}
      prop={<rect x="112" y="140" width="22" height="16" rx="3" fill="#c9ced4" stroke={INK} strokeWidth="2" />}
    />
  ),
  buggy: (
    <Buddy
      top="#f08a2c"
      bottom="#2d4f86"
      mouth="grin"
      hair={<path d="M40 70 Q36 30 70 40 M90 36 Q124 24 120 74" fill="#3a7bd4" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <circle cx="80" cy="92" r="8" fill="#e24b4b" stroke={INK} strokeWidth="1.6" />
          <circle cx="132" cy="120" r="11" fill={SKIN} stroke={INK} strokeWidth="2" />
        </g>
      }
    />
  ),
  vivi: (
    <Buddy
      top="#f7f7f7"
      bottom="#d7e6f2"
      hair={<path d="M42 96 Q34 32 80 32 Q126 32 118 100 Q80 70 42 96" fill="#3a7bd4" stroke={INK} strokeWidth="2.2" />}
      hat={<circle cx="80" cy="30" r="5" fill="#f2c14e" stroke={INK} strokeWidth="1.4" />}
      prop={
        <g>
          <ellipse cx="128" cy="156" rx="12" ry="8" fill="#f7f7f7" stroke={INK} strokeWidth="1.6" />
          <circle cx="136" cy="154" r="2" fill={INK} />
          <path d="M140 156 q8 2 6 6" stroke="#f2c14e" strokeWidth="2" fill="none" />
        </g>
      }
    />
  ),
  rayleigh: (
    <Buddy
      top="#f7f4ef"
      bottom="#6a625c"
      hair={<HairCap color="#e6d7a8" />}
      bangs={
        <>
          <circle cx="64" cy="74" r="10" fill="none" stroke="#2a2428" strokeWidth="2" />
          <circle cx="96" cy="74" r="10" fill="none" stroke="#2a2428" strokeWidth="2" />
          <path d="M74 74 H86" stroke="#2a2428" strokeWidth="2" />
          <path d="M52 70 l16 10" stroke="#c45a4a" strokeWidth="1.8" />
        </>
      }
    />
  ),
  roger: (
    <Buddy
      top="#b23b3b"
      bottom="#2a2428"
      mouth="grin"
      hair={<path d="M46 66 Q80 30 114 60" fill="#2a2428" stroke={INK} strokeWidth="2" />}
      bangs={<path d="M48 100 Q80 122 112 100 Q96 112 80 112 Q64 112 48 100" fill="#2a2428" stroke={INK} strokeWidth="2" />}
    />
  ),
  akainu: (
    <Buddy
      top="#f7f7f7"
      bottom="#1e4e86"
      mouth="flat"
      hair={<HairCap color="#3a2a22" />}
      prop={
        <g>
          <path d="M48 116 H112" stroke="#1e4e86" strokeWidth="6" />
          <circle cx="126" cy="158" r="12" fill="#e24b4b" stroke={INK} strokeWidth="2" />
        </g>
      }
    />
  ),
  kizaru: (
    <Buddy
      top="#f2c14e"
      bottom="#1e4e86"
      eye="shades"
      mouth="smile"
      hair={<HairCap color="#2a2428" />}
      prop={<circle cx="126" cy="150" r="10" fill="#f6e27a" stroke={INK} strokeWidth="1.6" />}
    />
  ),
  aokiji: (
    <Buddy
      top="#f7f7f7"
      bottom="#7eb4d4"
      eye="sleepy"
      hair={<path d="M46 70 Q40 30 70 40 Q90 18 110 42 Q124 60 112 78" fill="#2a2428" stroke={INK} strokeWidth="2" />}
      prop={<rect x="108" y="156" width="16" height="20" rx="4" fill="#d7f1f8" stroke="#7eb4d4" strokeWidth="2" />}
    />
  ),
  koby: (
    <Buddy
      top="#f7f7f7"
      bottom="#1e4e86"
      hair={<HairCap color="#f0a0c0" />}
      bangs={
        <>
          <circle cx="64" cy="76" r="9" fill="none" stroke="#2a2428" strokeWidth="2" />
          <circle cx="96" cy="76" r="9" fill="none" stroke="#2a2428" strokeWidth="2" />
          <path d="M48 118 H112" stroke="#1e4e86" strokeWidth="5" />
        </>
      }
    />
  ),
  yamato: (
    <Buddy
      top="#f08a2c"
      bottom="#2f6b52"
      mouth="grin"
      hair={<path d="M40 90 Q30 20 80 30 Q140 16 122 96" fill="#f7f7f7" stroke={INK} strokeWidth="2.2" />}
      hat={
        <>
          <path d="M50 48 Q46 18 66 40" fill="#f2c14e" stroke={INK} strokeWidth="2" />
          <path d="M110 48 Q114 18 94 40" fill="#f2c14e" stroke={INK} strokeWidth="2" />
        </>
      }
      prop={<path d="M124 100 q18 24 4 64" stroke="#6a625c" strokeWidth="6" strokeLinecap="round" />}
    />
  ),
  momonosuke: (
    <Buddy
      top="#f4a0c0"
      bottom="#f7c2d4"
      hair={<path d="M70 40 Q80 18 90 40 Q80 30 70 40" fill="#2a2428" stroke={INK} strokeWidth="1.8" />}
      prop={<path d="M112 150 q20 8 16 20 q-16 4 -16 -8" fill="#7ebfa0" stroke={INK} strokeWidth="1.6" />}
    />
  ),
  vegapunk: (
    <Buddy
      top="#f7f7f7"
      bottom="#d7dde3"
      eye="normal"
      hair={<ellipse cx="80" cy="42" rx="28" ry="22" fill="#8fd18a" stroke={INK} strokeWidth="2.2" />}
      bangs={
        <>
          <circle cx="64" cy="74" r="8" fill="none" stroke="#2a2428" strokeWidth="2" />
          <circle cx="98" cy="74" r="8" fill="none" stroke="#2a2428" strokeWidth="2" />
          <path d="M80 22 q6 -10 2 -2" fill="#3e8f4a" />
        </>
      }
    />
  ),
  imu: (
    <g>
      <ellipse cx="80" cy="182" rx="30" ry="5" fill="#e4d3b8" />
      <path d="M40 150 Q30 40 80 28 Q132 40 120 160 Q80 120 40 150" fill="#24182c" stroke={INK} strokeWidth="2.3" />
      <circle cx="80" cy="86" r="28" fill="#1a1422" stroke="#c9b8a4" strokeWidth="2" />
      <circle cx="70" cy="86" r="3" fill="#e6d7a8" />
      <circle cx="90" cy="86" r="3" fill="#e6d7a8" />
      <path d="M62 48 h36 l-6 -14 h-24 z" fill="#c9b8a4" stroke={INK} strokeWidth="1.6" />
    </g>
  ),
  gorosei: (
    <g>
      <ellipse cx="80" cy="182" rx="34" ry="5" fill="#e4d3b8" />
      {[46, 64, 98, 116].map((x) => (
        <g key={x}>
          <circle cx={x} cy="70" r="14" fill={SKIN} stroke={INK} strokeWidth="1.5" />
          <path d={`M${x - 8} 78 Q${x} 90 ${x + 8} 78`} fill="#f7f7f7" />
        </g>
      ))}
      <circle cx="80" cy="92" r="32" fill={SKIN} stroke={INK} strokeWidth="2.2" />
      <path d="M58 108 Q80 126 102 108" fill="#f7f7f7" stroke={INK} strokeWidth="1.6" />
      <circle cx="68" cy="88" r="3" fill={INK} />
      <circle cx="92" cy="88" r="3" fill={INK} />
      <path d="M74 100 H86" stroke={INK} strokeWidth="2" />
      <rect x="52" y="124" width="56" height="40" rx="8" fill="#3a4654" stroke={INK} strokeWidth="2" />
    </g>
  ),
  smoker: (
    <Buddy
      top="#f7f7f7"
      bottom="#1e4e86"
      hair={<path d="M40 70 Q36 24 80 36 Q128 20 118 74" fill="#f7f7f7" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <ellipse cx="130" cy="70" rx="16" ry="10" fill="#e7e7ea" opacity="0.9" />
          <path d="M124 150 v24" stroke="#8a8178" strokeWidth="4" strokeLinecap="round" />
        </g>
      }
    />
  ),
  enel: (
    <Buddy
      top="#f7f7f7"
      bottom="#f2c14e"
      mouth="grin"
      hair={<path d="M48 50 Q80 8 112 50" fill="#f7f7f7" stroke={INK} strokeWidth="2" />}
      bangs={
        <>
          <ellipse cx="42" cy="84" rx="8" ry="14" fill={SKIN} stroke={INK} strokeWidth="1.6" />
          <ellipse cx="118" cy="84" rx="8" ry="14" fill={SKIN} stroke={INK} strokeWidth="1.6" />
        </>
      }
      back={<ellipse cx="80" cy="150" rx="18" ry="26" fill="#e7d7b0" stroke={INK} strokeWidth="2" />}
      prop={<path d="M124 90 v70" stroke="#c4892a" strokeWidth="4" />}
    />
  ),
  lucci: (
    <Buddy
      top="#2a2428"
      bottom="#2a2428"
      mouth="flat"
      hair={<HairCap color="#2a2428" />}
      prop={
        <g>
          <ellipse cx="124" cy="60" rx="12" ry="8" fill="#e7e7ea" stroke={INK} strokeWidth="1.5" />
          <circle cx="130" cy="58" r="1.4" fill={INK} />
          <circle cx="70" cy="96" r="2" fill="#c4844a" />
          <circle cx="78" cy="100" r="2" fill="#c4844a" />
        </g>
      }
    />
  ),
  marco: (
    <Buddy
      top="#f7f4ef"
      bottom="#245c86"
      hair={<path d="M50 66 L64 24 L80 48 L96 18 L112 46 L120 28 L116 72 Q80 52 50 66" fill="#f0d15c" stroke={INK} strokeWidth="2" />}
      back={
        <>
          <path d="M30 130 Q10 100 40 120" fill="#7ec8e8" stroke={INK} strokeWidth="1.6" />
          <path d="M130 130 Q150 100 120 120" fill="#7ec8e8" stroke={INK} strokeWidth="1.6" />
        </>
      }
    />
  ),
  katakuri: (
    <Buddy
      top="#6b3a4a"
      bottom="#2a2428"
      mouth="none"
      hair={<path d="M46 70 L60 20 L80 46 L100 16 L116 48 L112 74 Q80 54 46 70" fill="#f08aaa" stroke={INK} strokeWidth="2" />}
      bangs={<path d="M50 96 Q80 118 110 96 L104 108 Q80 122 56 108 Z" fill="#f4efe4" stroke={INK} strokeWidth="2" />}
    />
  ),
  kuma: (
    <Buddy
      top="#f7f7f7"
      bottom="#2a2428"
      eye="shut"
      mouth="smile"
      hair={
        <>
          <circle cx="52" cy="48" r="12" fill="#6b4428" stroke={INK} strokeWidth="2" />
          <circle cx="108" cy="48" r="12" fill="#6b4428" stroke={INK} strokeWidth="2" />
        </>
      }
      prop={
        <g>
          <rect x="112" y="124" width="24" height="30" rx="2" fill="#6b4428" stroke={INK} strokeWidth="1.6" />
          <circle cx="34" cy="160" r="8" fill="#e7b8b0" stroke={INK} strokeWidth="1.5" />
        </g>
      }
    />
  ),
  bonney: (
    <Buddy
      top="#f08aaa"
      bottom="#2d4f86"
      eye="wink"
      hair={<path d="M42 90 Q36 28 80 32 Q130 24 118 96" fill="#f2a0c4" stroke={INK} strokeWidth="2" />}
      hat={<ellipse cx="80" cy="46" rx="34" ry="8" fill="#2d4f86" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <path d="M120 140 l18 8 l-8 10 z" fill="#f2c14e" stroke={INK} strokeWidth="1.4" />
          <circle cx="126" cy="146" r="4" fill="#e24b4b" />
        </g>
      }
    />
  ),
  oden: (
    <Buddy
      top="#f08a2c"
      bottom="#f4d7b0"
      mouth="grin"
      hair={<path d="M68 42 Q80 12 92 42" fill="#2a2428" stroke={INK} strokeWidth="2" />}
      prop={
        <g stroke="#d7dde3" strokeWidth="3">
          <path d="M118 110 v60" />
          <path d="M128 116 v52" />
        </g>
      }
    />
  ),
  corazon: (
    <Buddy
      top="#2a2428"
      bottom="#2a2428"
      mouth="grin"
      hair={<HairCap color="#f0d15c" />}
      prop={
        <g>
          <path d="M70 128 l10 8 l10 -8 l-4 12 h-12 z" fill="#e24b4b" />
          <circle cx="64" cy="92" r="4" fill="#e24b4b" opacity="0.8" />
          <circle cx="98" cy="92" r="4" fill="#e24b4b" opacity="0.8" />
        </g>
      }
    />
  ),
  bellemere: (
    <Buddy
      top="#e7e7ea"
      bottom="#6a8f6a"
      hair={<path d="M44 96 Q30 36 80 34 Q132 36 116 100" fill="#f08a2a" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <circle cx="126" cy="150" r="9" fill="#f08a2a" stroke={INK} strokeWidth="1.6" />
          <path d="M126 140 q6 -8 2 2" fill="#3e8f4a" />
        </g>
      }
    />
  ),
  hiriluk: (
    <Buddy
      top="#7eb4d4"
      bottom="#2d4f86"
      mouth="grin"
      nose="dot"
      hair={<ellipse cx="80" cy="40" rx="30" ry="12" fill="#2d4f86" stroke={INK} strokeWidth="2" />}
      prop={<circle cx="80" cy="140" r="10" fill="#f4a0c0" stroke={INK} strokeWidth="1.5" />}
    />
  ),
  zeff: (
    <Buddy
      top="#f7f7f7"
      bottom="#2a2428"
      hair={<path d="M50 100 Q80 120 110 100" fill="#f0d15c" stroke={INK} strokeWidth="2" />}
      hat={
        <g>
          <rect x="58" y="28" width="44" height="22" fill="#f7f7f7" stroke={INK} strokeWidth="2" />
          <ellipse cx="80" cy="50" rx="32" ry="8" fill="#f7f7f7" stroke={INK} strokeWidth="2" />
        </g>
      }
      prop={<rect x="112" y="158" width="12" height="18" fill="#c9ced4" stroke={INK} strokeWidth="1.5" />}
    />
  ),
  pedro: (
    <Buddy
      top="#2a2428"
      bottom="#2a2428"
      eye="wink"
      skin="#e0b080"
      hair={
        <>
          <path d="M48 50 l-8 -20 l16 12" fill="#c4844a" stroke={INK} strokeWidth="1.6" />
          <path d="M112 50 l8 -20 l-16 12" fill="#c4844a" stroke={INK} strokeWidth="1.6" />
        </>
      }
      bangs={<path d="M96 70 l16 8" stroke="#2a2428" strokeWidth="3" />}
    />
  ),
  "bon-clay": (
    <Buddy
      top="#f08aaa"
      bottom="#7eb4d4"
      mouth="grin"
      hair={<path d="M40 70 Q30 20 80 30 Q140 16 120 80" fill="#3a7bd4" stroke={INK} strokeWidth="2" />}
      prop={
        <g>
          <path d="M46 46 q20 -28 34 0" fill="#f7f7f7" stroke={INK} strokeWidth="1.6" />
          <path d="M70 128 l8 8 8 -8 4 10 h-24 z" fill="#e24b4b" />
        </g>
      }
    />
  ),
  saul: (
    <Buddy
      top="#f7f7f7"
      bottom="#1e4e86"
      mouth="grin"
      hair={<HairCap color="#6b4428" />}
      bangs={
        <>
          <circle cx="64" cy="76" r="10" fill="none" stroke="#2a2428" strokeWidth="2" />
          <circle cx="98" cy="76" r="10" fill="none" stroke="#2a2428" strokeWidth="2" />
        </>
      }
      prop={<rect x="114" y="120" width="22" height="28" rx="2" fill="#c4844a" stroke={INK} strokeWidth="1.6" />}
    />
  ),
  merry: (
    <g>
      <ellipse cx="80" cy="182" rx="36" ry="5" fill="#e4d3b8" />
      <path d="M28 150 Q80 120 132 150 L124 176 Q80 164 36 176 Z" fill="#d7b07a" stroke={INK} strokeWidth="2.3" />
      <circle cx="80" cy="78" r="40" fill="#f7f4ef" stroke={INK} strokeWidth="2.4" />
      <ellipse cx="52" cy="70" rx="12" ry="18" fill="#f7f4ef" stroke={INK} strokeWidth="2" />
      <ellipse cx="108" cy="70" rx="12" ry="18" fill="#f7f4ef" stroke={INK} strokeWidth="2" />
      <circle cx="66" cy="80" r="4" fill={INK} />
      <circle cx="94" cy="80" r="4" fill={INK} />
      <ellipse cx="80" cy="96" rx="8" ry="6" fill="#f4a8ad" />
      <path d="M70 108 Q80 116 90 108" stroke={INK} strokeWidth="2" fill="none" />
      <path d="M36 150 H124" stroke="#b23b3b" strokeWidth="4" />
    </g>
  ),
};

export const CHIBI_IDS = Object.keys(gallery);

export function hasChibi(id: string) {
  return id in gallery;
}

export function Chibi({ id, className, title }: { id: string; className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 160 190" className={className} role="img" aria-label={title ?? "마스코트"}>
      {gallery[id] ?? (
        <Buddy top="#7eb4d4" bottom="#2f6b52" hat={<StrawHat />} />
      )}
    </svg>
  );
}
