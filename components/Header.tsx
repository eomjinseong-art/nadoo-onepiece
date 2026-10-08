"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SisterBar } from "@/components/SisterSites";
import { VisitorCounter } from "@/components/VisitorCounter";
import { NAV, SITE_NAME, SITE_NAME_EN } from "@/lib/site";

function active(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2" aria-label={`${SITE_NAME} 홈`}>
          <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full border border-ocean bg-sand text-ocean">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <ellipse cx="12" cy="14" rx="8" ry="2.6" fill="#f2c14e" stroke="currentColor" strokeWidth="1.4" />
              <path d="M6 13.6c.6-4 2.8-6.2 6-6.2s5.4 2.2 6 6.2" fill="#f6d56a" stroke="currentColor" strokeWidth="1.4" />
              <path d="M7.2 12.6h9.6" stroke="#b23b3b" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-lg leading-tight tracking-wide text-ink">{SITE_NAME}</span>
            <span className="mt-0.5 block text-[10px] leading-none tracking-[0.18em] text-ocean">{SITE_NAME_EN}</span>
          </span>
        </Link>
        <div className="ml-auto flex items-center gap-3">
          <VisitorCounter />
        </div>
      </div>
      <nav aria-label="주요 메뉴" className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-2">
        {NAV.map((item) => {
          const on = active(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={on ? "page" : undefined}
              className={`shrink-0 rounded-full px-3 py-2 text-sm ${on ? "bg-ocean/10 font-semibold text-ocean" : "text-muted hover:bg-sand hover:text-ink"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <SisterBar />
      <div className="wave-rule opacity-80" aria-hidden />
    </header>
  );
}
