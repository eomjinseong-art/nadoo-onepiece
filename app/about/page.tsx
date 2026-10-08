import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "안내",
  description: "나두원피스는 팬이 만든 비공식 정리 사이트입니다. 저작권, 읽는 범위, 스포일러 표시를 적습니다.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "안내", path: "/about" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "안내" }]} />
      <PageHead kicker="About · 안내" title="이 사이트" lead={`${SITE_NAME}는 원피스를 처음부터 읽으려는 사람을 위한 비공식 아크 가이드입니다.`} />
      <div className="mt-6 space-y-4 leading-8">
        <p>팬이 만든 비공식 정리 사이트입니다. ONE PIECE의 저작권은 원작자(오다 에이치로)와 슈에이샤, 토에이 애니메이션에 있습니다.</p>
        <p>
          순서는 만화입니다. 애니메이션의 중간 에피소드는 넣지 않았고, 화수는 자신 있는 범위만 대략으로 적었습니다. 최신 사가는 에그헤드까지이며 진행 중으로 표시합니다. 엘바프에 도착한 뒤의 사건은 적지 않습니다.
        </p>
        <p>
          명대사는 한두 문장의 짧은 우리말입니다. 대본과 노래 가사를 그대로 옮기지 않았습니다. 확인하지 못한 숫자와 이름은 빈칸으로 두거나, 아크 끝의 ‘확인이 필요한 부분’에 적었습니다.
        </p>
        <p>
          인물 그림은 이 사이트를 위해 그린 치비 마스코트입니다. 공식 작화를 베끼지 않았고, 모자·머리색·도구로만 누구인지 구분합니다. 인터넷 이미지를 가져다 쓰지 않습니다.
        </p>
        <p>
          후반에야 드러나는 사실에는 중간, 스포일러, 후반 스포일러 배지를 붙였습니다. 처음부터 끝까지 읽으려는 사람을 위한 사이트이므로 내용을 가리지는 않습니다.
        </p>
        <p>
          표준 주소는 <span className="text-ocean">{SITE_URL}</span> 입니다. 같은 집안의 다른 읽기 사이트는 아래쪽 나두 이야기 목록에 있습니다.
        </p>
        <p>
          <Link href="/story" className="text-ocean hover:underline">
            동블루부터 읽기
          </Link>
        </p>
      </div>
    </div>
  );
}
