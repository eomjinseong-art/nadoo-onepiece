import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { JsonLd } from "@/components/JsonLd";
import { TodayQuote } from "@/components/TodayQuote";
import { arcsInSaga } from "@/data/arcs";
import { sagas } from "@/data/sagas";
import { jsonLd, websiteLd } from "@/lib/seo";
import { HOME_SECTIONS, SITE_NAME, SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <p className="text-xs tracking-[0.22em] text-ocean">ONE PIECE · 비공식 읽기 가이드</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight text-ink sm:text-5xl">{SITE_NAME}</h1>
      <p className="mt-3 max-w-3xl font-serif text-xl text-ocean-deep">{SITE_TAGLINE}</p>
      <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{SITE_SUB}</p>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        밀짚모자 열 사람의 꿈부터, 정상전쟁, 와노, 에그헤드의 출발까지. 후반의 비밀에는 스포일러 배지를 붙였습니다. 엘바프에 닿은 뒤의 사건은 적지 않습니다.
      </p>

      <div className="mt-8">
        <TodayQuote />
      </div>

      <section className="mt-10" aria-labelledby="saga-map">
        <h2 id="saga-map" className="font-serif text-2xl text-ink">
          사가 지도
        </h2>
        <p className="mt-1 text-sm text-muted">Story map · 누르면 그 아크로 갑니다.</p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {sagas.map((saga) => {
            const arcs = arcsInSaga(saga.id);
            return (
              <li key={saga.id} id={saga.id} className="rounded-lg border border-line bg-card p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-serif text-lg text-ink">
                    <span className="mr-2 text-sm text-ocean">{String(saga.no).padStart(2, "0")}</span>
                    {saga.title}
                  </h3>
                  {saga.ongoing ? <span className="rounded-full border border-pirate/40 px-2 py-0.5 text-[11px] text-pirate">진행 중</span> : null}
                </div>
                <p className="text-xs tracking-wide text-muted">{saga.titleEn}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{saga.blurb}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {arcs.map((arc) => (
                    <li key={arc.id}>
                      <Link href={`/story/${arc.id}`} className="rounded-full border border-line bg-sand px-2.5 py-1 text-xs text-ink hover:border-ocean hover:text-ocean">
                        {arc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-10" aria-labelledby="entries">
        <h2 id="entries" className="font-serif text-2xl text-ink">
          어디로 읽을까요
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {HOME_SECTIONS.map((section) => (
            <li key={section.href}>
              <Link href={section.href} className="block h-full rounded-lg border border-line bg-card p-4 hover:border-ocean">
                <p className="text-[11px] tracking-[0.16em] text-ocean">{section.en}</p>
                <h3 className="mt-1 font-serif text-xl text-ink">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{section.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CoupangBanner />
    </div>
  );
}
