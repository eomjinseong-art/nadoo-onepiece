import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chibi, hasChibi } from "@/components/Chibi";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { characterById } from "@/data/characters";
import { fruits } from "@/data/fruits";
import type { FruitType } from "@/data/types";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const ORDER: FruitType[] = ["파라메시아", "특수 파라메시아", "동물계", "환수종", "고대종", "자연계"];

export const metadata = pageMetadata({
  title: "악마의 열매",
  description: "파라메시아, 동물계, 자연계. 주요 악마의 열매와 사용자, 나중에 이름이 바뀐 열매를 짧게 정리한 도감입니다.",
  path: "/devil-fruits",
});

export default function FruitsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "악마의 열매", path: "/devil-fruits" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "악마의 열매" }]} />
      <PageHead
        kicker="Devil Fruits · 도감"
        title="악마의 열매"
        lead="한 사람이 보통 하나만 먹습니다. 바다와 해루석에 약해지고, 두 개를 가진 예외는 작품 안에서 뚜렷한 경우에만 적습니다. 이름이 나중에 바뀐 열매는 후반 스포일러입니다."
      />
      <div className="mt-8 space-y-10">
        {ORDER.map((type) => {
          const list = fruits.filter((fruit) => fruit.type === type);
          if (list.length === 0) return null;
          return (
            <section key={type} aria-labelledby={type}>
              <h2 id={type} className="font-serif text-2xl text-ink">
                {type}
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {list.map((fruit) => {
                  const user = fruit.userId ? characterById(fruit.userId) : undefined;
                  return (
                    <li key={fruit.id} id={fruit.id} className="rounded-lg border border-line bg-card p-4">
                      <div className="flex items-start gap-3">
                        {fruit.userId && hasChibi(fruit.userId) ? (
                          <Chibi id={fruit.userId} title={fruit.user} className="h-14 w-14 shrink-0" />
                        ) : null}
                        <div>
                          <h3 className="font-medium text-ink">{fruit.nameKo}</h3>
                          <p className="text-xs text-muted">{fruit.nameEn}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        사용자:{" "}
                        {user ? (
                          <Link href={`/characters/${user.id}`} className="text-ocean hover:underline">
                            {fruit.user}
                          </Link>
                        ) : (
                          fruit.user
                        )}
                      </p>
                      {fruit.spoiler ? (
                        <p className="mt-2">
                          <SpoilerBadge level={fruit.spoiler} />
                        </p>
                      ) : null}
                      <p className="mt-2 text-sm leading-7 text-muted">{fruit.note}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
