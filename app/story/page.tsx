import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { arcs, arcsInSaga } from "@/data/arcs";
import { sagas } from "@/data/sagas";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "이야기",
  description: "동블루부터 에그헤드까지, 원피스의 사가와 아크를 회차가 아니라 사건 단위로 정리한 목차입니다.",
  path: "/story",
});

export default function StoryIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "이야기", path: "/story" },
          ]),
          itemListLd(
            "원피스 아크",
            "/story",
            arcs.map((arc) => ({ name: arc.title, path: `/story/${arc.id}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "이야기" }]} />
      <PageHead
        kicker="Story · 사가와 아크"
        title="이야기"
        lead="1,100편이 넘는 애니메이션을 회차마다 따라가지 않습니다. 사가 안에 아크를 두고, 누가 무엇을 했는지와 그 편이 남긴 뜻만 적습니다. 화수는 만화 기준의 대략입니다."
      />
      <div className="mt-8 space-y-10">
        {sagas.map((saga) => (
          <section key={saga.id} aria-labelledby={saga.id}>
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 id={saga.id} className="font-serif text-2xl text-ink">
                {saga.title}
              </h2>
              <span className="text-xs tracking-wide text-ocean">{saga.titleEn}</span>
              {saga.ongoing ? <span className="rounded-full border border-pirate/40 px-2 py-0.5 text-[11px] text-pirate">진행 중</span> : null}
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{saga.blurb}</p>
            <ol className="mt-4 divide-y divide-line rounded-lg border border-line bg-card">
              {arcsInSaga(saga.id).map((arc) => (
                <li key={arc.id}>
                  <Link href={`/story/${arc.id}`} className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3 hover:bg-sand">
                    <span className="w-8 text-xs text-ocean">{String(arc.no).padStart(2, "0")}</span>
                    <span className="font-medium text-ink">{arc.title}</span>
                    <span className="text-xs text-muted">{arc.titleEn}</span>
                    <span className="text-xs text-muted">{arc.chapters}</span>
                    {arc.spoiler ? <SpoilerBadge level={arc.spoiler} /> : null}
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
