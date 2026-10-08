"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Chibi } from "@/components/Chibi";
import { quotes } from "@/data/quotes";

export function TodayQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const day = Math.floor((now.getTime() - start.getTime()) / 86400000);
    setIndex(day % quotes.length);
  }, []);

  const quote = quotes[index] ?? quotes[0];

  return (
    <section className="rounded-lg border border-line bg-card p-5" aria-labelledby="today-quote">
      <p id="today-quote" className="text-[11px] tracking-[0.16em] text-ocean">
        오늘의 명대사 · Quote of the day
      </p>
      <div className="mt-3 flex items-start gap-3">
        {quote.speakerId ? <Chibi id={quote.speakerId} title={quote.speaker} className="h-16 w-16 shrink-0" /> : null}
        <div>
          <blockquote className="font-serif text-xl leading-snug text-ink">“{quote.line}”</blockquote>
          <p className="mt-2 text-sm text-muted">
            {quote.speaker}
            {quote.arcId ? ` · ${quote.context}` : ` · ${quote.context}`}
          </p>
        </div>
      </div>
      <Link href="/quotes" className="mt-3 inline-block text-sm text-ocean">
        테마별 명대사 →
      </Link>
    </section>
  );
}
