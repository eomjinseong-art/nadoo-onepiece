import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chibi, hasChibi } from "@/components/Chibi";
import { JapaneseQuiz } from "@/components/JapaneseQuiz";
import { JapaneseStudy, type ArcLite } from "@/components/JapaneseStudy";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Ruby } from "@/components/Ruby";
import { arcs } from "@/data/arcs";
import { JP_KIND_LABEL, JP_USAGE_LABEL, SPEECH_STYLES, jpItems } from "@/data/japanese";
import { sagaById, sagas } from "@/data/sagas";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "원피스로 배우는 일본어 100",
  description:
    "海賊王におれはなる부터 에그헤드까지. 원피스 아크 순서로 외우기 쉬운 일본어 표현 100개를 후리가나, 로마자·한글 발음, 문법 한 줄, 일상 예문과 퀴즈로 정리했습니다.",
  path: "/japanese",
});

export default function JapanesePage() {
  const arcLite: ArcLite[] = arcs.map((arc) => ({ id: arc.id, title: arc.title, sagaTitle: sagaById(arc.sagaId)?.title ?? "" }));
  const bySaga = sagas
    .map((saga) => {
      const ids = new Set(arcs.filter((arc) => arc.sagaId === saga.id).map((arc) => arc.id));
      return { saga, count: jpItems.filter((item) => ids.has(item.arcId)).length, first: arcs.find((arc) => ids.has(arc.id) && jpItems.some((i) => i.arcId === arc.id)) };
    })
    .filter((row) => row.count > 0);
  const lines = jpItems.filter((item) => item.kind === "line").length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8" data-jp-count={jpItems.length}>
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "일본어", path: "/japanese" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "일본어" }]} />
      <PageHead
        kicker="Japanese · 원피스로 배우는 일본어"
        title="원피스로 배우는 일본어 100"
        lead="대본을 통째로 옮기지 않습니다. 동블루에서 에그헤드까지, 기억에 남고 실제로 쓸 만한 짧은 말과 단어 100개만 골랐습니다. 카드마다 후리가나, 로마자와 한글 발음, 뜻, 장면, 문법 한 줄, 일상 예문이 있습니다."
      />

      <div className="mt-5 flex items-start gap-3 rounded-lg border border-line bg-card p-4">
        <Chibi id="luffy" title="밀짚모자 마스코트" className="h-16 w-16 shrink-0" />
        <div className="text-sm leading-7 text-ink">
          <p>
            <strong>{jpItems.length}개</strong> 중 원작 대사는 {lines}개, 모두 한 줄 이내의 짧은 인용입니다. 정확한 문구에 자신이 없는 말은
            지어내지 않고 <em className="not-italic text-ocean">‘전해지는 표현’</em>으로 표시하거나 핵심 단어로 바꿨습니다.
          </p>
          <p className="mt-1 text-muted">
            팬이 만든 비공식 학습 자료입니다. 그림은 이 사이트의 자체 마스코트이며 원작 그림이 아닙니다. ONE PIECE의 저작권은 오다 에이치로와 슈에이샤, 토에이 애니메이션에 있습니다.
          </p>
        </div>
      </div>

      <section aria-labelledby="legend" className="mt-6">
        <h2 id="legend" className="sr-only">
          표시 안내
        </h2>
        <dl className="grid gap-2 text-sm sm:grid-cols-2">
          <div className="rounded-md border border-line bg-card px-3 py-2">
            <dt className="text-xs text-muted">종류</dt>
            <dd className="text-ink">{Object.values(JP_KIND_LABEL).join(" · ")}</dd>
          </div>
          <div className="rounded-md border border-line bg-card px-3 py-2">
            <dt className="text-xs text-muted">실제로 써도 될까</dt>
            <dd className="text-ink">
              <span className="text-kelp">{JP_USAGE_LABEL.ok}</span> · <span className="text-pirate">{JP_USAGE_LABEL.manga}</span>
            </dd>
          </div>
        </dl>
        <nav aria-label="사가로 이동" className="mt-4 flex flex-wrap gap-2">
          {bySaga.map(({ saga, count, first }) => (
            <a key={saga.id} href={first ? `#arc-${first.id}` : "#list"} className="rounded-full border border-line bg-card px-3 py-1 text-sm hover:border-ocean">
              {saga.title} <span className="text-muted">{count}</span>
            </a>
          ))}
          <a href="#speech" className="rounded-full border border-ocean/40 bg-ocean/5 px-3 py-1 text-sm text-ocean">
            말투 비교
          </a>
          <a href="#quiz" className="rounded-full border border-ocean/40 bg-ocean/5 px-3 py-1 text-sm text-ocean">
            퀴즈
          </a>
        </nav>
      </section>

      <JapaneseStudy arcs={arcLite} />

      <section id="speech" aria-labelledby="jp-speech" className="mt-12 scroll-mt-28">
        <h2 id="jp-speech" className="font-serif text-2xl text-ink">
          인물별 말투 비교
        </h2>
        <p className="mt-1 text-sm leading-7 text-muted">
          일본어는 1인칭(나)과 말끝만 바꿔도 성격이 드러납니다. 만화 말투는 그대로 따라 하면 거칠거나 어색하게 들릴 수 있습니다. 처음에는 私(わたし)와 です·ます가 가장 안전합니다.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {SPEECH_STYLES.map((row) => (
            <li key={row.id} className="rounded-lg border border-line bg-card p-3">
              <div className="flex items-center gap-2">
                {hasChibi(row.id) ? <Chibi id={row.id} title={row.name} className="h-11 w-11 shrink-0" /> : null}
                <div className="min-w-0">
                  <p className="font-serif text-lg text-ink">{row.name}</p>
                  <p className="text-xs text-muted">
                    <a href={`?who=${encodeURIComponent(row.name)}#list`} className="text-ocean hover:underline">
                      이 인물 카드만 보기
                    </a>
                  </p>
                </div>
              </div>
              <dl className="mt-2 space-y-1 text-sm leading-6">
                <div className="flex gap-2">
                  <dt className="w-14 shrink-0 text-muted">1인칭</dt>
                  <dd lang="ja" className="text-ink">
                    {row.first}
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-14 shrink-0 text-muted">말끝</dt>
                  <dd lang="ja" className="text-ink">
                    {row.endings}
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-14 shrink-0 text-muted">느낌</dt>
                  <dd className="text-ink">{row.feel}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-14 shrink-0 text-muted">대표</dt>
                  <dd className="font-serif text-ink">
                    <Ruby text={row.sample} />
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <JapaneseQuiz />

      <p className="mt-10 text-sm leading-7 text-muted">
        장면을 더 읽고 싶다면 <Link href="/quotes" className="text-ocean hover:underline">명대사</Link>와{" "}
        <Link href="/story" className="text-ocean hover:underline">아크별 이야기</Link>로 이어집니다. 이 페이지의 표현 {jpItems.length}개.
      </p>
    </div>
  );
}
