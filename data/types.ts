export type SpoilerLevel = "mid" | "late" | "final";

export type Saga = {
  id: string;
  no: number;
  title: string;
  titleEn: string;
  blurb: string;
  ongoing?: boolean;
};

export type Face = { name: string; id?: string };

export type Arc = {
  id: string;
  sagaId: string;
  no: number;
  title: string;
  titleEn: string;
  chapters: string;
  spoiler?: SpoilerLevel;
  overview: string[];
  events: string[];
  moving: string[];
  legacy: string;
  faces: Face[];
  bounties?: string[];
  uncertain?: string;
};

export type CharacterGroup = "crew" | "family" | "legend" | "pirate" | "marine" | "ally" | "gov";

export type Character = {
  id: string;
  nameKo: string;
  nameEn: string;
  epithet: string;
  group: CharacterGroup;
  summary: string;
  dream?: string;
  past: string;
  ability: string;
  scenes: string[];
  lines: { line: string; context: string }[];
  joined?: string;
  spoiler?: SpoilerLevel;
  careful?: string;
  arcIds: string[];
};

export type QuoteTheme = "friendship" | "love" | "dream" | "justice" | "farewell" | "freedom" | "laughter";

export type Quote = {
  id: string;
  theme: QuoteTheme;
  speaker: string;
  speakerId?: string;
  line: string;
  arcId?: string;
  context: string;
  why: string;
  spoiler?: SpoilerLevel;
};

export type FruitType = "파라메시아" | "동물계" | "자연계" | "환수종" | "고대종" | "특수 파라메시아";

export type Fruit = {
  id: string;
  nameKo: string;
  nameEn: string;
  type: FruitType;
  user: string;
  userId?: string;
  note: string;
  spoiler?: SpoilerLevel;
};

export type BountyChange = { when: string; amount: string; detail?: string };

export type BountyRow = {
  id?: string;
  name: string;
  changes: BountyChange[];
};

export type ThemeScene = {
  title: string;
  body: string;
  arcId?: string;
  characterIds: string[];
};

export type Theme = {
  id: string;
  title: string;
  titleEn: string;
  lead: string;
  scenes: ThemeScene[];
};

export type RelKind = "crew" | "brother" | "family" | "mentor" | "rival" | "enemy" | "ally";

export type Relation = {
  a: string;
  b: string;
  kind: RelKind;
  note: string;
};
