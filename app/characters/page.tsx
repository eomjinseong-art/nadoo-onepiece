import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chibi } from "@/components/Chibi";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { GROUP_LABEL, GROUP_ORDER, characters, charactersInGroup } from "@/data/characters";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "인물",
  description: "밀짚모자 일당 열 사람과, 에이스·사황·해군·혁명까지. 꿈, 과거, 능력, 명장면을 짧게 모은 인물 사전입니다.",
  path: "/characters",
});

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "인물", path: "/characters" },
          ]),
          itemListLd(
            "원피스 인물",
            "/characters",
            characters.map((character) => ({ name: character.nameKo, path: `/characters/${character.id}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "인물" }]} />
      <PageHead
        kicker="Characters · 인물"
        title="인물"
        lead="밀짚모자 열 사람은 꿈과 과거, 능력, 명장면, 대사, 현상금까지 길게 적었습니다. 그 밖의 인물은 이야기에서 맡는 자리 위주로 짧게 적었습니다. 그림은 공식 작화를 베끼지 않은 이 사이트의 마스코트입니다."
      />
      <div className="mt-8 space-y-10">
        {GROUP_ORDER.map((group) => {
          const list = charactersInGroup(group);
          const label = GROUP_LABEL[group];
          return (
            <section key={group} aria-labelledby={`group-${group}`}>
              <h2 id={`group-${group}`} className="font-serif text-2xl text-ink">
                {label.ko}
              </h2>
              <p className="text-xs tracking-wide text-ocean">{label.en}</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((character) => (
                  <li key={character.id}>
                    <Link href={`/characters/${character.id}`} className="flex h-full gap-3 rounded-lg border border-line bg-card p-3 hover:border-ocean">
                      <Chibi id={character.id} title={character.nameKo} className="h-20 w-20 shrink-0" />
                      <span className="min-w-0">
                        <span className="block font-medium text-ink">{character.nameKo}</span>
                        <span className="block text-xs text-muted">{character.nameEn}</span>
                        <span className="mt-1 block text-sm leading-6 text-muted">{character.epithet}</span>
                        {character.spoiler ? (
                          <span className="mt-2 inline-block">
                            <SpoilerBadge level={character.spoiler} />
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
