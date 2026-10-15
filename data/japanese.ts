import raw from "@/data/japanese.json";
import type { SpoilerLevel } from "@/data/types";

export type JpKind = "line" | "keyword" | "traditional";
export type JpUsage = "ok" | "manga";
export type JpLevel = 1 | 2 | 3;

export type JpExample = { ja: string; ruby: string; romaji: string; hangul: string; ko: string };

export type JpItem = {
  id: string;
  arcId: string;
  speaker: string;
  speakerId: string | null;
  kind: JpKind;
  level: JpLevel;
  usage: JpUsage;
  ja: string;
  ruby: string;
  kana: string;
  key: string;
  romaji: string;
  hangul: string;
  ko: string;
  context: string;
  grammar: string;
  example: JpExample;
  spoiler?: SpoilerLevel;
};

export const jpItems = raw.items as JpItem[];

export const JP_KIND_LABEL: Record<JpKind, string> = {
  line: "원작 대사(짧게)",
  keyword: "핵심 단어",
  traditional: "전해지는 표현",
};

export const JP_USAGE_LABEL: Record<JpUsage, string> = {
  ok: "실제로 써도 OK",
  manga: "만화 말투 — 거칠게 들림",
};

export const JP_LEVEL_LABEL: Record<JpLevel, string> = { 1: "입문", 2: "초급", 3: "중급" };

export function jpByArc(arcId: string) {
  return jpItems.filter((item) => item.arcId === arcId);
}

/** 루피·조로·산지·나미·우솝·쵸파·니코 로빈 등 말투 비교 */
export const SPEECH_STYLES: {
  name: string;
  id: string;
  first: string;
  endings: string;
  feel: string;
  sample: string;
}[] = [
  { name: "루피", id: "luffy", first: "おれ (오레)", endings: "〜だ · 〜ぞ · 〜ねえ(=ない)", feel: "짧고 거침없는 소년 반말. 존댓말을 거의 안 쓴다.", sample: "[腹|はら][減|へ]った！" },
  { name: "조로", id: "zoro", first: "おれ (오레)", endings: "〜だ · 〜ねえ · 〜か", feel: "낮고 무뚝뚝한 남성 반말. 말수가 적다.", sample: "[二度|にど]と[負|ま]けねえ" },
  { name: "산지", id: "sanji", first: "おれ (오레)", endings: "〜だぜ · クソ〜 · 여성에겐 〜さん/〜ちゃん", feel: "남자에겐 거칠고, 여성에겐 과하게 다정하다.", sample: "クソお[世話|せわ]になりました" },
  { name: "나미", id: "nami", first: "あたし / 私 (아타시 / 와타시)", endings: "〜わよ · 〜でしょ · 〜なさい", feel: "또렷한 여성 반말. 화나면 명령형이 빨라진다.", sample: "[助|たす]けて" },
  { name: "우솝", id: "usopp", first: "おれ / おれ様 (오레 / 오레사마)", endings: "〜だぞ · 〜ぜ", feel: "허세가 붙을 때 おれ様. 겁먹으면 말이 길어진다.", sample: "[海賊|かいぞく]が[来|き]たぞー！" },
  { name: "쵸파", id: "chopper", first: "おれ (오레)", endings: "〜だぞ · 〜ねえぞ · コノヤロー", feel: "어린아이 같은 반말. 칭찬엔 반대로 말한다.", sample: "[嬉|うれ]しくねえぞ" },
  { name: "니코 로빈", id: "robin", first: "私 (와타시)", endings: "〜わ · 〜かしら · 〜ね", feel: "차분하고 어른스러운 여성 말투. 존댓말과 반말 사이.", sample: "[生|い]きたい" },
  { name: "프랭키", id: "franky", first: "おれ (오레)", endings: "〜だぜ · スーパー！", feel: "들뜬 아저씨 말투. 기분이 좋으면 '스-파-!'.", sample: "スーパー！" },
  { name: "브룩", id: "brook", first: "私 (와타시)", endings: "〜です · 〜ます · 〜ですか", feel: "일당에서 가장 공손한 존댓말. 내용은 장난스럽다.", sample: "よろしいですか" },
  { name: "징베", id: "jinbe", first: "わし (와시)", endings: "〜じゃ · 〜のう", feel: "노인·두목풍 말투. 무게가 있다.", sample: "[数|かぞ]えるな" },
  { name: "트라팔가 로", id: "law", first: "おれ (오레)", endings: "〜だ · 이름 + 〜屋", feel: "냉정한 남성 반말. 사람을 '〜屋'로 부른다.", sample: "[麦|むぎ]わら[屋|や]" },
  { name: "행콕", id: "hancock", first: "わらわ (와라와)", endings: "〜じゃ · 〜であろう", feel: "옛 귀인 여성 말투. 위에서 내려다본다.", sample: "わらわ" },
  { name: "야마토", id: "yamato", first: "ボク (보쿠)", endings: "〜だ · 〜だよ", feel: "소년풍 1인칭에 밝은 반말.", sample: "ボク" },
];
