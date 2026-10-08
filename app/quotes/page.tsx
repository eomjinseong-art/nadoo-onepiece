import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chibi, hasChibi } from "@/components/Chibi";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { arcById } from "@/data/arcs";
import { characterById } from "@/data/characters";
import { THEME_META, quotes, quotesByTheme } from "@/data/quotes";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "명언 · 명대사",
  description: "우정, 사랑, 꿈, 정의, 이별, 자유, 웃음. 원피스의 짧은 명대사를 장면과 감동의 이유와 함께 모았습니다.",
  path: "/quotes",
});

export default function QuotesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "명대사", path: "/quotes" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "명대사" }]} />
      <PageHead
        kicker="Quotes · 명언 · 명대사"
        title="명언 · 명대사"
        lead="한두 문장만 적습니다. 대본과 가사를 길게 옮기지 않았고, 우리말은 장면을 기억하기 위한 짧은 옮김입니다. 원문의 전문이 아닙니다."
      />
      <nav aria-label="주제" className="mt-6 flex flex-wrap gap-2">
        {THEME_META.map((theme) => (
          <a key={theme.id} href={`#${theme.id}`} className="rounded-full border border-line bg-card px-3 py-1 text-sm hover:border-ocean">
            {theme.ko}
          </a>
        ))}
      </nav>
      <div className="mt-8 space-y-12">
        {THEME_META.map((theme) => (
          <section key={theme.id} aria-labelledby={theme.id}>
            <h2 id={theme.id} className="font-serif text-2xl text-ink">
              {theme.ko}
            </h2>
            <p className="text-xs tracking-wide text-ocean">{theme.en}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{theme.blurb}</p>
            <ol className="mt-4 space-y-4">
              {quotesByTheme(theme.id).map((quote) => {
                const arc = quote.arcId ? arcById(quote.arcId) : undefined;
                const speaker = quote.speakerId ? characterById(quote.speakerId) : undefined;
                return (
                  <li key={quote.id} className="rounded-lg border border-line bg-card p-4">
                    <div className="flex items-start gap-3">
                      {quote.speakerId && hasChibi(quote.speakerId) ? (
                        <Chibi id={quote.speakerId} title={quote.speaker} className="h-16 w-16 shrink-0" />
                      ) : null}
                      <div className="min-w-0">
                        <blockquote className="font-serif text-xl leading-snug">“{quote.line}”</blockquote>
                        <p className="mt-2 text-sm text-ink">
                          {speaker ? (
                            <Link href={`/characters/${speaker.id}`} className="hover:text-ocean">
                              {quote.speaker}
                            </Link>
                          ) : (
                            quote.speaker
                          )}
                          {arc ? (
                            <>
                              {" · "}
                              <Link href={`/story/${arc.id}`} className="text-ocean hover:underline">
                                {arc.title}
                              </Link>
                            </>
                          ) : null}
                        </p>
                        {quote.spoiler ? (
                          <p className="mt-2">
                            <SpoilerBadge level={quote.spoiler} />
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted">{quote.context}</p>
                    <p className="mt-2 text-sm leading-7">
                      <span className="text-ocean">왜 감동인가. </span>
                      {quote.why}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">이 페이지의 대사 {quotes.length}개.</p>
    </div>
  );
}
