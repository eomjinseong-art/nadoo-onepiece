import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { SisterList } from "@/components/SisterSites";
import { BRAND_LINE, NAV, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-sand/80">
      <CoupangBanner />
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <p className="font-serif text-base text-ink">{SITE_NAME}</p>
        <p className="mt-1 text-xs tracking-wide text-ocean">{BRAND_LINE}</p>
        <div className="mt-4 max-w-3xl space-y-2">
          <p>
            팬이 만든 비공식 정리 사이트입니다. ONE PIECE의 저작권은 원작자(오다 에이치로)와 슈에이샤, 토에이 애니메이션에 있습니다.
          </p>
          <p>
            글은 만화를 아크 단위로 다시 적은 것입니다. 긴 대본과 가사를 그대로 옮기지 않았고, 명대사는 장면을 기억하기 위한 짧은 우리말입니다. 없는 사건과 대사는 만들지 않았습니다. 최종장은 에그헤드에서 멈추며, 그 뒤는 진행 중으로 비워 둡니다.
          </p>
        </div>
        <SisterList />
        <nav aria-label="주요 메뉴" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <Link href="/" className="underline decoration-line underline-offset-4 hover:text-ocean">
            홈
          </Link>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="underline decoration-line underline-offset-4 hover:text-ocean">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
