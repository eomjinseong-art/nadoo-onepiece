export const SITE_NAME = "나두원피스";
export const SITE_NAME_EN = "Nadoo One Piece";
export const SITE_TAGLINE = "동블루에서 에그헤드까지, 아크로 읽는 원피스";
export const SITE_SUB =
  "애니메이션 1,100편을 회차마다 따라가지 않고, 사가와 아크 단위로 사건·인물·대사를 짧게 정리한 비공식 읽기 가이드입니다. 순서는 만화 기준이며, 엘바프 이후는 적지 않습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-onepiece.vercel.app";

export const MYTH_URL = "https://nadoo-myth.vercel.app";
export const MYTH_NAME = "나두신화";

export const ILIAD_URL = "https://iliad-stories.vercel.app";
export const ILIAD_NAME = "일리아스이야기";

export const GREECE_URL = "https://greece-stories.vercel.app";
export const GREECE_NAME = "그리스이야기";

export const ROME_URL = "https://rome-stories.vercel.app";
export const ROME_NAME = "로마이야기";

export const EGYPT_URL = "https://egypt-stories.vercel.app";
export const EGYPT_NAME = "이집트이야기";

export const PERSIA_URL = "https://persia-stories.vercel.app";
export const PERSIA_NAME = "페르시아이야기";

export const CHOSEN_URL = "https://the-chosen-korean.vercel.app";
export const CHOSEN_NAME = "더 초즌 · 성경";

export const PHILOSOPHY_URL = "https://philosophy-stories.vercel.app";
export const PHILOSOPHY_NAME = "철학이야기";

export const KOREA_URL = "https://korea-stories.vercel.app";
export const KOREA_NAME = "대한민국이야기";

export const TIMELINE_URL = "https://nadoo-timeline.vercel.app";
export const TIMELINE_NAME = "나두연표";

export const HUB_URL = "https://tinalinkeom.vercel.app";
export const HUB_NAME = "나두 허브";

export const SISTER_LABEL = "나두 이야기";

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";
export const COUPANG_COPY = "Going Merry 대신 택배 타고 오는 원피스 굿즈·만화책 → 쿠팡";
export const COUPANG_NOTE = "이 링크는 쿠팡 파트너스 활동의 일환으로 수수료를 받을 수 있습니다.";

export const SISTERS = [
  {
    href: MYTH_URL,
    name: MYTH_NAME,
    en: "MYTH",
    button: "나두신화에서 신 읽기",
    note: "신의 편, 파리스의 심판, 목마, 오디세이아.",
    body: "헤라와 아폴론이 누구 편인지, 파리스의 심판과 목마는 신화 사전에 있습니다.",
  },
  {
    href: ILIAD_URL,
    name: ILIAD_NAME,
    en: "ILIAD",
    button: ILIAD_NAME,
    note: "10년째 해의 약 51일, 아킬레우스의 분노.",
    body: "호메로스의 일리아스를 짧은 한국어로 읽습니다. 목마와 발뒤꿈치는 이 시 밖의 이야기입니다.",
  },
  {
    href: GREECE_URL,
    name: GREECE_NAME,
    en: "GREECE",
    button: GREECE_NAME,
    note: "미케네 궁전과 트로이 영웅의 가계.",
    body: "시의 배경이 된 청동기 궁전, 그리고 트로이 영웅 탭이 있는 가족관계도.",
  },
  {
    href: ROME_URL,
    name: ROME_NAME,
    en: "ROME",
    button: ROME_NAME,
    note: "아이네이아스에서 로물루스로 이어지는 건국 전승.",
    body: "이탈리아와 로마의 족보는 로마이야기의 전승 가계에 있습니다.",
  },
  {
    href: EGYPT_URL,
    name: EGYPT_NAME,
    en: "EGYPT",
    button: EGYPT_NAME,
    note: "파라오와 나일강, 선왕조에서 클레오파트라.",
    body: "같은 집안의 역사 글입니다.",
  },
  {
    href: PERSIA_URL,
    name: PERSIA_NAME,
    en: "PERSIA",
    button: PERSIA_NAME,
    note: "아케메네스에서 파르티아·사산까지.",
    body: "페르시아 왕의 역사는 별도 사이트에 있습니다.",
  },
  {
    href: CHOSEN_URL,
    name: CHOSEN_NAME,
    en: "CHOSEN",
    button: CHOSEN_NAME,
    note: "드라마 『더 초즌』을 성경 구절과 나눠 읽는 가이드.",
    body: "성경에 있는 장면과 드라마가 더한 장면을 구분해 적습니다.",
  },
  {
    href: PHILOSOPHY_URL,
    name: PHILOSOPHY_NAME,
    en: "PHILOSOPHY",
    button: PHILOSOPHY_NAME,
    note: "플라톤은 호메로스의 신을 문제 삼습니다.",
    body: "시를 나중에 어떻게 읽었는지는 철학이야기로 이어집니다.",
  },
  {
    href: KOREA_URL,
    name: KOREA_NAME,
    en: "KOREA",
    button: KOREA_NAME,
    note: "백제·신라·가야, 고려와 조선을 남쪽 고을로.",
    body: "같은 나두의 한국사입니다.",
  },
  {
    href: TIMELINE_URL,
    name: TIMELINE_NAME,
    en: "TIMELINE",
    button: TIMELINE_NAME,
    note: "전승 연대와 사건이 정리된 세기.",
    body: "이야기 속 연대와 기록이 모인 세기를 나눠 둡니다.",
  },
  {
    href: HUB_URL,
    name: HUB_NAME,
    en: "HUB",
    button: HUB_NAME,
    note: "나두 사이트를 모아 둔 허브.",
    body: "역사·신화·철학 사이트의 문간입니다.",
  },
] as const;

export const NAV = [
  { href: "/story", label: "이야기" },
  { href: "/characters", label: "인물" },
  { href: "/relations", label: "관계도" },
  { href: "/quotes", label: "명대사" },
  { href: "/themes", label: "테마" },
  { href: "/devil-fruits", label: "열매" },
  { href: "/bounties", label: "현상금" },
  { href: "/world", label: "세계" },
  { href: "/about", label: "안내" },
] as const;

export const HOME_SECTIONS = [
  {
    href: "/story",
    en: "Story",
    title: "사가 · 아크",
    desc: "동블루부터 에그헤드까지. 회차가 아니라 아크마다 사건, 감동, 그 편이 남긴 것을 읽습니다.",
  },
  {
    href: "/characters",
    en: "Characters",
    title: "인물",
    desc: "밀짚모자 열 사람의 꿈과 과거, 그리고 에이스·사황·해군·혁명을 짧은 글로.",
  },
  {
    href: "/relations",
    en: "Bonds",
    title: "관계도",
    desc: "동료, 맹세의 형제, 스승, 가족, 라이벌, 적을 누르면 그 선만 밝아집니다.",
  },
  {
    href: "/quotes",
    en: "Quotes",
    title: "명언 · 명대사",
    desc: "우정, 사랑, 꿈, 정의, 이별, 자유, 웃음. 한두 문장과 그 장면이 있는 이유.",
  },
  {
    href: "/themes",
    en: "Themes",
    title: "장면 모음",
    desc: "우정·사랑·꿈·자유가 어느 아크에서 커지는지, 인물 페이지로 이어 둡니다.",
  },
  {
    href: "/devil-fruits",
    en: "Fruits",
    title: "악마의 열매",
    desc: "파라메시아, 동물계, 자연계. 누가 먹었고, 나중에 이름이 바뀐 열매는 따로 표시합니다.",
  },
  {
    href: "/bounties",
    en: "Bounties",
    title: "현상금",
    desc: "포스터에 공개된 액수만. 쵸파의 1,000베리와 산지의 스케치도 빠뜨리지 않습니다.",
  },
  {
    href: "/world",
    en: "World",
    title: "세계",
    desc: "그랜드 라인, 사황, 해군, D의 의지로 공백의 100년. 후반 비밀은 배지를 붙입니다.",
  },
] as const;
