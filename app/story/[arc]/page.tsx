import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Pager } from "@/components/Pager";
import { PersonChip } from "@/components/PersonChip";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { arcById, arcNeighbors, arcs } from "@/data/arcs";
import { sagaById } from "@/data/sagas";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";
import { Ruby } from "@/components/Ruby";
import { jpByArc } from "@/data/japanese";

export const dynamicParams = false;

export function generateStaticParams() {
  return arcs.map((arc) => ({ arc: arc.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ arc: string }> }) {
  const { arc: id } = await params;
  const arc = arcById(id);
  if (!arc) return {};
  return pageMetadata({
    title: arc.title,
    description: `${arc.title} (${arc.titleEn}). ${arc.overview[0]}`,
    path: `/story/${arc.id}`,
    type: "article",
  });
}

export default async function ArcPage({ params }: { params: Promise<{ arc: string }> }) {
  const { arc: id } = await params;
  const arc = arcById(id);
  if (!arc) notFound();
  const saga = sagaById(arc.sagaId);
  const { prev, next } = arcNeighbors(arc.id);
  const jp = jpByArc(arc.id);

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "이야기", path: "/story" },
            { name: arc.title, path: `/story/${arc.id}` },
          ]),
          articleLd({
            headline: arc.title,
            description: arc.overview[0],
            path: `/story/${arc.id}`,
            about: arc.faces.map((face) => face.name),
          }),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/story", label: "이야기" },
          { label: arc.title },
        ]}
      />
      <PageHead kicker={`${saga?.title ?? "아크"} · ${arc.titleEn}`} title={arc.title} lead={arc.chapters} />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {saga ? (
          <Link href={`/story#${saga.id}`} className="text-sm text-ocean hover:underline">
            {saga.title}
          </Link>
        ) : null}
        {saga?.ongoing ? <span className="rounded-full border border-pirate/40 px-2 py-0.5 text-[11px] text-pirate">진행 중</span> : null}
        {arc.spoiler ? <SpoilerBadge level={arc.spoiler} /> : null}
      </div>

      <section className="prose-read mt-8">
        <h2 className="font-serif text-2xl text-ink">개요</h2>
        {arc.overview.map((paragraph) => (
          <p key={paragraph} className="mt-3 text-base text-ink">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">핵심 사건</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-8 text-ink">
          {arc.events.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">감동 장면</h2>
        <ul className="mt-3 space-y-3">
          {arc.moving.map((line) => (
            <li key={line} className="rounded-md border border-line bg-card px-4 py-3 leading-7 text-ink">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">이 아크가 남긴 것</h2>
        <p className="mt-3 leading-8 text-ink">{arc.legacy}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-2xl text-ink">새로 등장한 인물</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {arc.faces.map((face) => (
            <li key={`${face.name}-${face.id ?? "x"}`}>
              <PersonChip id={face.id} name={face.name} size="sm" />
            </li>
          ))}
        </ul>
      </section>

      {arc.bounties && arc.bounties.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-2xl text-ink">현상금 변화</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-ink">
            {arc.bounties.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">
            표로 모아 둔 액수는 <Link href="/bounties" className="text-ocean hover:underline">현상금</Link> 페이지에 있습니다.
          </p>
        </section>
      ) : null}

      {jp.length > 0 ? (
        <section className="mt-8 rounded-lg border border-line bg-card p-4" aria-labelledby="arc-jp">
          <p className="text-[11px] tracking-[0.16em] text-ocean">Japanese · 이 아크의 일본어</p>
          <h2 id="arc-jp" className="mt-1 font-serif text-xl text-ink">
            이 아크에서 배우는 일본어 {jp.length}개
          </h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {jp.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/japanese?arc=${arc.id}#${item.id}`}
                  className="inline-block rounded-full border border-line bg-sand px-3 py-1 text-sm text-ink hover:border-ocean hover:text-ocean"
                >
                  <Ruby text={item.ruby} /> <span className="text-muted">· {item.ko}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/japanese?arc=${arc.id}#list`} className="mt-3 inline-block text-sm text-ocean hover:underline">
            발음·문법·예문 카드로 보기 →
          </Link>
        </section>
      ) : null}

      {arc.uncertain ? (
        <aside className="mt-8 rounded-md border border-straw/50 bg-straw/10 px-4 py-3 text-sm leading-7 text-ink">
          <p className="font-medium">확인이 필요한 부분</p>
          <p className="mt-1">{arc.uncertain}</p>
        </aside>
      ) : null}

      <Pager
        prev={prev ? { href: `/story/${prev.id}`, label: prev.title } : undefined}
        next={next ? { href: `/story/${next.id}`, label: next.title } : undefined}
      />
      <CoupangCard />
    </article>
  );
}
