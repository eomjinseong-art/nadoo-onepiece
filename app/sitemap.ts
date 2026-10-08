import type { MetadataRoute } from "next";
import { arcs } from "@/data/arcs";
import { characters } from "@/data/characters";
import { assertContent } from "@/lib/content-check";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  assertContent();
  const now = new Date();
  const staticPaths = ["/", "/story", "/characters", "/relations", "/quotes", "/themes", "/devil-fruits", "/bounties", "/world", "/about"];
  const pages = [
    ...staticPaths.map((path) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...arcs.map((arc) => ({
      url: `${SITE_URL}/story/${arc.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...characters.map((character) => ({
      url: `${SITE_URL}/characters/${character.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: character.group === "crew" ? 0.7 : 0.5,
    })),
  ];
  return pages;
}
