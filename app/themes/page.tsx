import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { PersonChip } from "@/components/PersonChip";
import { arcById } from "@/data/arcs";
import { characterById } from "@/data/characters";
import { themes } from "@/data/themes";

const EXTRA_NAME: Record<string, string> = {
  bellemere: "벨메르",
  hiriluk: "히루루크",
  saul: "사울",
  zeff: "제프",
  pedro: "페드로",
  "bon-clay": "봉쿠레",
  merry: "고잉 메리",
};
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "테마",
  description: "우정, 사랑, 꿈, 자유가 어느 아크와 인물에서 커지는지 모아 둔 장면 모음입니다.",
  path: "/themes",
});

export default function ThemesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "테마", path: "/themes" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "테마" }]} />
      <PageHead
        kicker="Themes · 장면 모음"
        title="우정 · 사랑 · 꿈 · 자유"
        lead="같은 주제가 어느 아크에서 커지는지 모아 두었습니다. 인물 이름 중 이 사이트에 페이지가 있는 사람만 링크로 이어집니다."
      />
      <div className="mt-8 space-y-12">
        {themes.map((theme) => (
          <section key={theme.id} aria-labelledby={theme.id}>
            <h2 id={theme.id} className="font-serif text-2xl text-ink">
              {theme.title}
            </h2>
            <p className="text-xs tracking-wide text-ocean">{theme.titleEn}</p>
            <p className="mt-3 leading-8">{theme.lead}</p>
            <ol className="mt-4 space-y-4">
              {theme.scenes.map((scene) => {
                const arc = scene.arcId ? arcById(scene.arcId) : undefined;
                return (
                  <li key={scene.title} className="rounded-lg border border-line bg-card p-4">
                    <h3 className="font-serif text-lg text-ink">{scene.title}</h3>
                    <p className="mt-2 text-sm leading-7">{scene.body}</p>
                    {arc ? (
                      <p className="mt-2 text-sm">
                        <Link href={`/story/${arc.id}`} className="text-ocean hover:underline">
                          {arc.title}
                        </Link>
                      </p>
                    ) : null}
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {scene.characterIds.map((id) => {
                        const person = characterById(id);
                        return (
                          <li key={id}>
                            <PersonChip id={id} name={person?.nameKo ?? EXTRA_NAME[id] ?? id} size="sm" />
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
      <p className="mt-8 text-sm">
        같은 주제를 대사로 읽으려면 <Link href="/quotes" className="text-ocean hover:underline">명대사</Link>로 이어집니다.
      </p>
    </div>
  );
}
