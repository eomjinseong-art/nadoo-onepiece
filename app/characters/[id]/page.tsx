import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chibi } from "@/components/Chibi";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Pager } from "@/components/Pager";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { arcById } from "@/data/arcs";
import { berryLabel, bountiesOf } from "@/data/bounties";
import { GROUP_LABEL, characterById, characterNeighbors, characters } from "@/data/characters";
import { fruitsOf } from "@/data/fruits";
import { REL_LEGEND, otherEnd, relationsOf } from "@/data/relations";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return characters.map((character) => ({ id: character.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const character = characterById(id);
  if (!character) return {};
  return pageMetadata({
    title: character.nameKo,
    description: `${character.nameKo} (${character.nameEn}), ${character.epithet}. ${character.summary}`,
    path: `/characters/${character.id}`,
    type: "article",
  });
}

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const character = characterById(id);
  if (!character) notFound();
  const bounty = bountiesOf(character.id);
  const fruits = fruitsOf(character.id);
  const joined = character.joined ? arcById(character.joined) : undefined;
  const bonds = relationsOf(character.id);
  const { prev, next } = characterNeighbors(character.id);
  const group = GROUP_LABEL[character.group];

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "인물", path: "/characters" },
            { name: character.nameKo, path: `/characters/${character.id}` },
          ]),
          articleLd({
            headline: character.nameKo,
            description: character.summary,
            path: `/characters/${character.id}`,
            about: [character.nameEn, character.epithet],
          }),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/characters", label: "인물" },
          { label: character.nameKo },
        ]}
      />
      <div className="mt-4 flex items-start gap-4">
        <Chibi id={character.id} title={character.nameKo} className="h-32 w-32 shrink-0" />
        <div className="min-w-0">
          <PageHead kicker={`${group.ko} · ${character.nameEn}`} title={character.nameKo} lead={character.epithet} />
          <div className="mt-2 flex flex-wrap gap-2">
            {character.spoiler ? <SpoilerBadge level={character.spoiler} /> : null}
          </div>
        </div>
      </div>

      <p className="mt-6 leading-8 text-ink">{character.summary}</p>

      {character.careful ? (
        <aside className="mt-4 rounded-md border border-wine/30 bg-wine/5 px-4 py-3 text-sm leading-7 text-ink">{character.careful}</aside>
      ) : null}

      {character.dream ? (
        <section className="mt-8">
          <h2 className="font-serif text-2xl text-ink">꿈</h2>
          <p className="mt-3 leading-8">{character.dream}</p>
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">과거 사연</h2>
        <p className="mt-3 leading-8">{character.past}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">능력 · 열매</h2>
        <p className="mt-3 leading-8">{character.ability}</p>
        {fruits.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {fruits.map((fruit) => (
              <li key={fruit.id}>
                <Link href={`/devil-fruits#${fruit.id}`} className="text-ocean hover:underline">
                  {fruit.nameKo}
                </Link>
                <span className="text-sm text-muted"> · {fruit.type}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">명장면</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-8">
          {character.scenes.map((scene) => (
            <li key={scene}>{scene}</li>
          ))}
        </ul>
      </section>

      {character.lines.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-2xl text-ink">대표 대사</h2>
          <ul className="mt-3 space-y-3">
            {character.lines.map((line) => (
              <li key={line.line} className="rounded-md border border-line bg-card px-4 py-3">
                <blockquote className="font-serif text-lg">“{line.line}”</blockquote>
                <p className="mt-1 text-sm text-muted">{line.context}</p>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-muted">긴 대본이 아니라, 장면을 기억하기 위한 짧은 우리말입니다.</p>
        </section>
      ) : null}

      {bounty ? (
        <section className="mt-8">
          <h2 className="font-serif text-2xl text-ink">현상금 변천</h2>
          <div className="mt-3 overflow-x-auto rounded-lg border border-line">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <caption className="sr-only">{character.nameKo} 현상금</caption>
              <thead className="bg-sand text-muted">
                <tr>
                  <th className="px-3 py-2 font-medium">시점</th>
                  <th className="px-3 py-2 font-medium">액수</th>
                  <th className="px-3 py-2 font-medium">메모</th>
                </tr>
              </thead>
              <tbody>
                {bounty.changes.map((change) => (
                  <tr key={`${change.when}-${change.amount}`} className="border-t border-line">
                    <td className="px-3 py-2">{change.when}</td>
                    <td className="px-3 py-2 tabular-nums">{berryLabel(change.amount)}</td>
                    <td className="px-3 py-2 text-muted">{change.detail ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {joined ? (
        <p className="mt-8 text-sm leading-7">
          동료가 된 아크:{" "}
          <Link href={`/story/${joined.id}`} className="text-ocean hover:underline">
            {joined.title}
          </Link>
        </p>
      ) : null}

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">관련 아크</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {character.arcIds.map((arcId) => {
            const arc = arcById(arcId);
            if (!arc) return null;
            return (
              <li key={arcId}>
                <Link href={`/story/${arc.id}`} className="rounded-full border border-line bg-sand px-3 py-1 text-sm hover:border-ocean">
                  {arc.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {bonds.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-2xl text-ink">관계</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7">
            {bonds.map((relation) => {
              const otherId = otherEnd(relation, character.id);
              const other = characterById(otherId);
              const kind = REL_LEGEND.find((item) => item.id === relation.kind);
              return (
                <li key={`${relation.a}-${relation.b}-${relation.kind}`}>
                  <span className="mr-2 text-ocean">{kind?.label}</span>
                  {other ? (
                    <Link href={`/characters/${other.id}`} className="hover:text-ocean">
                      {other.nameKo}
                    </Link>
                  ) : (
                    otherId
                  )}
                  <span className="text-muted"> — {relation.note}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-sm">
            <Link href="/relations" className="text-ocean hover:underline">
              관계도에서 보기
            </Link>
          </p>
        </section>
      ) : null}

      <Pager
        prev={prev ? { href: `/characters/${prev.id}`, label: prev.nameKo } : undefined}
        next={next ? { href: `/characters/${next.id}`, label: next.nameKo } : undefined}
      />
    </article>
  );
}
