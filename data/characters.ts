import { crew } from "@/data/characters-crew";
import { rest } from "@/data/characters-rest";
import type { Character, CharacterGroup } from "@/data/types";

export const characters: Character[] = [...crew, ...rest];

export const GROUP_ORDER: CharacterGroup[] = ["crew", "family", "legend", "pirate", "marine", "ally", "gov"];

export const GROUP_LABEL: Record<CharacterGroup, { ko: string; en: string }> = {
  crew: { ko: "밀짚모자 일당", en: "Straw Hats" },
  family: { ko: "가족 · 맹세", en: "Family" },
  legend: { ko: "전설의 바다", en: "Legends" },
  pirate: { ko: "해적", en: "Pirates" },
  marine: { ko: "해군", en: "Marines" },
  ally: { ko: "동료와 이웃", en: "Allies" },
  gov: { ko: "세계정부", en: "Government" },
};

export function characterById(id: string) {
  return characters.find((character) => character.id === id);
}

export function charactersInGroup(group: CharacterGroup) {
  return characters.filter((character) => character.group === group);
}

export function characterNeighbors(id: string) {
  const index = characters.findIndex((character) => character.id === id);
  return { prev: index > 0 ? characters[index - 1] : undefined, next: characters[index + 1] };
}
