"use client";

import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Chibi, hasChibi } from "@/components/Chibi";
import { CoupangCard } from "@/components/CoupangCard";
import { Ruby } from "@/components/Ruby";
import { SpoilerBadge } from "@/components/SpoilerBadge";
import { JP_KIND_LABEL, JP_LEVEL_LABEL, JP_USAGE_LABEL, jpItems, type JpItem, type JpLevel, type JpUsage } from "@/data/japanese";

export type ArcLite = { id: string; title: string; sagaTitle: string };

const AD_COPY = {
  icon: "🗾",
  ko: "‘나카마’ 다음 단어가 궁금하다면 — 일본어 첫걸음 책·원피스 굿즈 보러 가기",
  en: "Learn Japanese one nakama at a time.",
};

function Card({ item, arc }: { item: JpItem; arc?: ArcLite }) {
  const chibi = item.speakerId && hasChibi(item.speakerId);
  return (
    <li id={item.id} data-jp-card="" className="scroll-mt-28 rounded-lg border border-line bg-card p-4">
      <div className="flex items-start gap-3">
        {chibi ? <Chibi id={item.speakerId!} title={item.speaker} className="h-14 w-14 shrink-0" /> : null}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="rounded-full border border-ocean/40 bg-ocean/5 px-2 py-0.5 text-ocean">{JP_KIND_LABEL[item.kind]}</span>
            <span className="rounded-full border border-line px-2 py-0.5 text-muted">{JP_LEVEL_LABEL[item.level]}</span>
            <span
              className={`rounded-full border px-2 py-0.5 ${item.usage === "ok" ? "border-kelp/40 bg-kelp/10 text-kelp" : "border-pirate/40 bg-pirate/10 text-pirate"}`}
            >
              {JP_USAGE_LABEL[item.usage]}
            </span>
            {item.spoiler ? <SpoilerBadge level={item.spoiler} /> : null}
          </div>
          <p className="mt-2 font-serif text-xl leading-[2.2] text-ink sm:text-2xl">
            <Ruby text={item.ruby} />
          </p>
          <p className="text-sm text-muted">
            <span className="font-mono text-[13px]">{item.romaji}</span>
            <span className="mx-1.5 text-line">|</span>
            <span>{item.hangul}</span>
          </p>
          <p className="mt-1 text-base font-medium text-ink">{item.ko}</p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-7 text-muted">
        <span className="text-ink">{item.speaker}</span>
        {arc ? (
          <>
            {" · "}
            <Link href={`/story/${arc.id}`} className="text-ocean hover:underline">
              {arc.title}
            </Link>
          </>
        ) : null}
        {" — "}
        {item.context}
      </p>
      <p className="mt-2 rounded-md bg-sand/70 px-3 py-2 text-sm leading-7 text-ink">
        <span className="mr-1 text-ocean">문법</span>
        {item.grammar}
      </p>
      <div className="mt-2 rounded-md border border-dashed border-line px-3 py-2 text-sm leading-7">
        <p className="text-[11px] tracking-wide text-ocean">일상 예문</p>
        <p className="font-serif text-lg leading-[2.1] text-ink">
          <Ruby text={item.example.ruby} />
        </p>
        <p className="text-muted">
          <span className="font-mono text-[12px]">{item.example.romaji}</span>
          <span className="mx-1.5 text-line">|</span>
          {item.example.hangul}
        </p>
        <p className="text-ink">{item.example.ko}</p>
      </div>
    </li>
  );
}

export function JapaneseStudy({ arcs }: { arcs: ArcLite[] }) {
  const [arc, setArc] = useState("all");
  const [speaker, setSpeaker] = useState("all");
  const [level, setLevel] = useState<"all" | JpLevel>("all");
  const [usage, setUsage] = useState<"all" | JpUsage>("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("arc");
    if (fromUrl && arcs.some((a) => a.id === fromUrl)) setArc(fromUrl);
    const who = params.get("who");
    if (who) setSpeaker(who);
  }, [arcs]);

  const arcMap = useMemo(() => new Map(arcs.map((a) => [a.id, a])), [arcs]);
  const usedArcs = useMemo(() => arcs.filter((a) => jpItems.some((item) => item.arcId === a.id)), [arcs]);
  const speakers = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of jpItems) counts.set(item.speaker, (counts.get(item.speaker) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const visible = jpItems.filter(
    (item) =>
      (arc === "all" || item.arcId === arc) &&
      (speaker === "all" || item.speaker === speaker) &&
      (level === "all" || item.level === level) &&
      (usage === "all" || item.usage === usage),
  );
  const adAfterId = visible[Math.max(0, Math.floor(visible.length / 2) - 1)]?.id;

  const groups: { arc: ArcLite; items: JpItem[] }[] = [];
  for (const item of visible) {
    const meta = arcMap.get(item.arcId);
    if (!meta) continue;
    const last = groups[groups.length - 1];
    if (last && last.arc.id === meta.id) last.items.push(item);
    else groups.push({ arc: meta, items: [item] });
  }

  const reset = () => {
    setArc("all");
    setSpeaker("all");
    setLevel("all");
    setUsage("all");
  };
  const chip = (on: boolean) =>
    `rounded-full border px-3 py-1.5 text-sm ${on ? "border-ocean bg-ocean/10 font-semibold text-ocean" : "border-line bg-card text-ink hover:border-ocean"}`;

  return (
    <section id="list" aria-labelledby="jp-list" className="mt-10 scroll-mt-28">
      <h2 id="jp-list" className="font-serif text-2xl text-ink">
        표현 카드
      </h2>
      <div className="mt-4 space-y-3 rounded-lg border border-line bg-card p-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="text-xs tracking-wide text-muted">아크</span>
            <select value={arc} onChange={(e) => setArc(e.target.value)} className="mt-1 w-full rounded-md border border-line bg-bg px-2 py-2 text-sm">
              <option value="all">전체 아크 (동블루 → 에그헤드)</option>
              {usedArcs.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.sagaTitle} · {a.title}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-xs tracking-wide text-muted">인물</span>
            <select value={speaker} onChange={(e) => setSpeaker(e.target.value)} className="mt-1 w-full rounded-md border border-line bg-bg px-2 py-2 text-sm">
              <option value="all">전체 인물</option>
              {speakers.map(([name, n]) => (
                <option key={name} value={name}>
                  {name} ({n})
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="난이도">
          <span className="text-xs text-muted">난이도</span>
          <button type="button" className={chip(level === "all")} onClick={() => setLevel("all")}>
            전체
          </button>
          {([1, 2, 3] as JpLevel[]).map((lv) => (
            <button key={lv} type="button" className={chip(level === lv)} onClick={() => setLevel(lv)}>
              {JP_LEVEL_LABEL[lv]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="실제 사용">
          <span className="text-xs text-muted">실제 사용</span>
          <button type="button" className={chip(usage === "all")} onClick={() => setUsage("all")}>
            전체
          </button>
          {(["ok", "manga"] as JpUsage[]).map((u) => (
            <button key={u} type="button" className={chip(usage === u)} onClick={() => setUsage(u)}>
              {JP_USAGE_LABEL[u]}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted" aria-live="polite">
          <strong className="text-ink">{visible.length}</strong> / {jpItems.length}개 표시
          {visible.length !== jpItems.length ? (
            <button type="button" onClick={reset} className="ml-3 text-ocean underline underline-offset-4">
              필터 초기화
            </button>
          ) : null}
        </p>
      </div>

      {visible.length === 0 ? <p className="mt-6 text-sm text-muted">조건에 맞는 표현이 없습니다.</p> : null}

      <div className="mt-6 space-y-10">
        {groups.map((group) => (
          <section key={group.arc.id} id={`arc-${group.arc.id}`} aria-labelledby={`h-${group.arc.id}`} className="scroll-mt-28">
            <h3 id={`h-${group.arc.id}`} className="flex flex-wrap items-baseline gap-2 font-serif text-xl text-ink">
              <span className="text-xs tracking-[0.16em] text-ocean">{group.arc.sagaTitle}</span>
              <Link href={`/story/${group.arc.id}`} className="hover:text-ocean">
                {group.arc.title}
              </Link>
              <span className="text-sm text-muted">{group.items.length}개</span>
            </h3>
            <ol className="mt-3 space-y-4">
              {group.items.map((item) => (
                <Fragment key={item.id}>
                  <Card item={item} arc={group.arc} />
                  {item.id === adAfterId ? (
                    <li className="list-none">
                      <CoupangCard copy={AD_COPY} />
                    </li>
                  ) : null}
                </Fragment>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </section>
  );
}
