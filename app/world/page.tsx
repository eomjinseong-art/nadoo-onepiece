import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { worldSections } from "@/data/world";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "세계",
  description: "그랜드 라인, 네 개의 바다, 레드 라인, 세계정부, 사황과 해군, D의 의지와 공백의 100년. 후반 비밀은 배지를 붙였습니다.",
  path: "/world",
});

export default function WorldPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "세계", path: "/world" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "세계" }]} />
      <PageHead
        kicker="World · 세계 구조"
        title="세계"
        lead="바다의 모양과 권력의 이름부터 읽어도 됩니다. 공백의 100년, 포네글리프, 빈 왕좌 쪽은 배지가 있는 절부터 후반입니다."
      />
      <div className="mt-8 space-y-10">
        {worldSections.map((section) => (
          <section key={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="flex flex-wrap items-center gap-2">
              <h2 id={`${section.id}-title`} className="font-serif text-2xl text-ink">
                {section.title}
              </h2>
              {section.spoiler ? <SpoilerBadge level={section.spoiler} /> : null}
            </div>
            <p className="text-xs tracking-wide text-ocean">{section.titleEn}</p>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-8">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
