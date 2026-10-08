import { COUPANG_COPY, COUPANG_NOTE, COUPANG_URL } from "@/lib/site";

/** 쿠팡 파트너스 배너. 주소는 수익 추적용이므로 바꾸지 않습니다. */
export function CoupangBanner() {
  return (
    <aside aria-label="광고" className="mx-auto max-w-6xl px-4 pt-8">
      <a
        href={COUPANG_URL}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="flex items-center gap-3 rounded-md border border-line bg-card px-4 py-3 text-sm text-ink transition-colors hover:border-ocean hover:text-ocean"
      >
        <span className="shrink-0 rounded-sm border border-line px-1.5 py-0.5 text-[10px] tracking-wider text-muted">광고</span>
        <span className="min-w-0 flex-1">{COUPANG_COPY}</span>
        <span aria-hidden="true" className="shrink-0 text-ocean">
          →
        </span>
      </a>
      <p className="mt-2 text-[11px] leading-5 text-muted">{COUPANG_NOTE}</p>
    </aside>
  );
}
