import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelationMap } from "@/components/RelationMap";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "관계도",
  description: "밀짚모자 동료, 루피·에이스·사보의 맹세, 스승과 제자, 가족과 라이벌과 적을 누르면 그 선만 밝아지는 관계도입니다.",
  path: "/relations",
});

export default function RelationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "관계도", path: "/relations" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "관계도" }]} />
      <PageHead
        kicker="Bonds · 관계도"
        title="관계도"
        lead="이름을 누르면 그 사람과 이어진 선만 밝아집니다. 색은 동료, 맹세의 형제, 가족, 스승, 라이벌, 동맹, 적입니다. 좁은 화면에서는 아래 목록이 같은 관계를 글로 보여 줍니다."
      />
      <div className="mt-6">
        <RelationMap />
      </div>
    </div>
  );
}
