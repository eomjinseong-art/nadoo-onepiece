"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Chibi } from "@/components/Chibi";
import { characterById, characters } from "@/data/characters";
import { REL_LEGEND, otherEnd, relations, relationsOf } from "@/data/relations";
import type { RelKind } from "@/data/types";

const NODE_W = 112;
const NODE_H = 132;
const GAP_X = 18;
const GAP_Y = 56;
const PAD = 28;

const PLACED: { id: string; col: number; row: number }[] = [
  { id: "roger", col: 0, row: 0 },
  { id: "rayleigh", col: 1, row: 0 },
  { id: "shanks", col: 2, row: 0 },
  { id: "whitebeard", col: 3, row: 0 },
  { id: "oden", col: 4, row: 0 },
  { id: "garp", col: 5, row: 0 },
  { id: "dragon", col: 6, row: 0 },
  { id: "mihawk", col: 7, row: 0 },
  { id: "vegapunk", col: 8, row: 0 },
  { id: "marco", col: 9, row: 0 },
  { id: "ace", col: 0, row: 1 },
  { id: "sabo", col: 1, row: 1 },
  { id: "koby", col: 2, row: 1 },
  { id: "corazon", col: 3, row: 1 },
  { id: "hancock", col: 4, row: 1 },
  { id: "vivi", col: 5, row: 1 },
  { id: "yamato", col: 6, row: 1 },
  { id: "momonosuke", col: 7, row: 1 },
  { id: "bonney", col: 8, row: 1 },
  { id: "kuma", col: 9, row: 1 },
  { id: "zoro", col: 0, row: 2 },
  { id: "nami", col: 1, row: 2 },
  { id: "usopp", col: 2, row: 2 },
  { id: "sanji", col: 3, row: 2 },
  { id: "luffy", col: 4, row: 2 },
  { id: "chopper", col: 5, row: 2 },
  { id: "robin", col: 6, row: 2 },
  { id: "franky", col: 7, row: 2 },
  { id: "brook", col: 8, row: 2 },
  { id: "jinbe", col: 9, row: 2 },
  { id: "law", col: 0, row: 3 },
  { id: "kid", col: 1, row: 3 },
  { id: "buggy", col: 2, row: 3 },
  { id: "crocodile", col: 3, row: 3 },
  { id: "doflamingo", col: 4, row: 3 },
  { id: "big-mom", col: 5, row: 3 },
  { id: "kaido", col: 6, row: 3 },
  { id: "blackbeard", col: 7, row: 3 },
  { id: "akainu", col: 8, row: 3 },
  { id: "katakuri", col: 9, row: 3 },
  { id: "smoker", col: 0, row: 4 },
  { id: "aokiji", col: 1, row: 4 },
  { id: "enel", col: 2, row: 4 },
  { id: "lucci", col: 3, row: 4 },
  { id: "gorosei", col: 4, row: 4 },
];

const BANDS = [
  { row: 0, label: "옛 세대 · Elders", color: "#c4892a" },
  { row: 1, label: "가족 · 인연", color: "#9b3d5a" },
  { row: 2, label: "밀짚모자 · Straw Hats", color: "#0f6e86" },
  { row: 3, label: "맞수 · 적", color: "#a33b3b" },
  { row: 4, label: "해군 · 정부", color: "#3d6ea8" },
];

function cell(col: number, row: number) {
  return {
    x: PAD + col * (NODE_W + GAP_X),
    y: PAD + row * (NODE_H + GAP_Y),
  };
}

const nodes = PLACED.map((item) => ({ ...item, ...cell(item.col, item.row) }));
const nodeById = new Map(nodes.map((node) => [node.id, node]));
const width = PAD * 2 + 10 * NODE_W + 9 * GAP_X;
const height = PAD * 2 + 5 * NODE_H + 4 * GAP_Y;

function colorOf(kind: RelKind) {
  return REL_LEGEND.find((item) => item.id === kind)?.color ?? "#0f6e86";
}

export function RelationMap() {
  const [selected, setSelected] = useState<string | null>("luffy");
  const scroller = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const selectedCharacter = selected ? characterById(selected) : undefined;
  const selectedRelations = selected ? relationsOf(selected) : [];
  const relatedIds = useMemo(() => {
    if (!selected) return null;
    const ids = new Set<string>([selected]);
    for (const relation of relationsOf(selected)) ids.add(otherEnd(relation, selected));
    return ids;
  }, [selected]);

  const edges = relations
    .map((relation, index) => {
      const from = nodeById.get(relation.a);
      const to = nodeById.get(relation.b);
      if (!from || !to) return null;
      const pair = relations.filter((item, itemIndex) => itemIndex <= index && ((item.a === relation.a && item.b === relation.b) || (item.a === relation.b && item.b === relation.a)));
      const x1 = from.x + NODE_W / 2;
      const y1 = from.y + 36;
      const x2 = to.x + NODE_W / 2;
      const y2 = to.y + 36;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.hypot(dx, dy) || 1;
      const bend = 28 + (pair.length - 1) * 16;
      const cx = (x1 + x2) / 2 + (-dy / len) * bend;
      const cy = (y1 + y2) / 2 + (dx / len) * bend;
      return { ...relation, index, d: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}` };
    })
    .filter((edge) => edge !== null);

  function pick(id: string) {
    setSelected((current) => (current === id ? null : id));
  }

  return (
    <div>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
        {REL_LEGEND.map((item) => (
          <li key={item.id} className="inline-flex items-center gap-1.5">
            <svg width="28" height="8" aria-hidden>
              <line x1="0" y1="4" x2="28" y2="4" stroke={item.color} strokeWidth="3" strokeLinecap="round" />
            </svg>
            {item.label}
          </li>
        ))}
      </ul>
      <div
        ref={scroller}
        className="mt-3 cursor-grab overflow-x-auto rounded-lg border border-line bg-card active:cursor-grabbing"
        aria-label="관계도"
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse" || event.button !== 0) return;
          const target = event.target as HTMLElement;
          if (target.closest("button, a")) return;
          const el = scroller.current;
          if (!el) return;
          drag.current = { x: event.clientX, left: el.scrollLeft };
          el.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current || !scroller.current) return;
          scroller.current.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <div className="relative" style={{ width, height }}>
          {BANDS.map((band) => {
            const top = cell(0, band.row).y - 8;
            return (
              <div key={band.label} className="absolute left-0 right-0" style={{ top, height: NODE_H + 16 }}>
                <p className="sticky left-3 z-20 w-max rounded-full bg-white/90 px-2 py-0.5 text-[11px] text-ocean" style={{ color: band.color }}>
                  {band.label}
                </p>
              </div>
            );
          })}
          <svg className="absolute inset-0 z-[1]" width={width} height={height} aria-hidden>
            {edges.map((edge) => {
              const active = relatedIds ? relatedIds.has(edge.a) && relatedIds.has(edge.b) : false;
              const opacity = relatedIds ? (active ? 1 : 0.05) : 0.35;
              return (
                <path
                  key={`${edge.a}-${edge.b}-${edge.kind}-${edge.index}`}
                  d={edge.d}
                  fill="none"
                  stroke={colorOf(edge.kind)}
                  strokeWidth={active ? 3.2 : 1.6}
                  strokeOpacity={opacity}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
          {nodes.map((node) => {
            const person = characterById(node.id);
            if (!person) return null;
            const on = selected === node.id;
            const linked = Boolean(relatedIds && relatedIds.has(node.id) && !on);
            const dimmed = Boolean(relatedIds && !relatedIds.has(node.id));
            return (
              <button
                key={node.id}
                type="button"
                aria-pressed={on}
                onClick={() => pick(node.id)}
                className="absolute z-10 flex flex-col items-center rounded-lg border bg-white px-1 py-1 text-center"
                style={{
                  left: node.x,
                  top: node.y,
                  width: NODE_W,
                  height: NODE_H,
                  opacity: dimmed ? 0.28 : 1,
                  borderColor: on ? "#0f6e86" : linked ? "#c4892a" : "#e3d5c0",
                  boxShadow: on ? "0 0 0 3px #0f6e86" : undefined,
                }}
              >
                <Chibi id={node.id} title={person.nameKo} className="h-16 w-16" />
                <span className="mt-0.5 max-w-full truncate font-serif text-[12px] leading-4 text-ink">{person.nameKo}</span>
                <span className="max-w-full truncate text-[10px] leading-3 text-muted">{person.epithet}</span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="mt-2 text-xs text-muted">칸을 누르면 그 사람과 잇닿은 선만 밝아집니다. 같은 칸을 다시 누르면 전체가 돌아옵니다. 좁은 화면에서는 아래로 밀면 목록이 있습니다.</p>

      {selectedCharacter ? (
        <section aria-live="polite" className="mt-4 rounded-lg border border-line bg-card p-4">
          <div className="flex items-start gap-3">
            <Chibi id={selectedCharacter.id} title={selectedCharacter.nameKo} className="h-20 w-20 shrink-0" />
            <div className="min-w-0">
              <h2 className="font-serif text-2xl text-ink">{selectedCharacter.nameKo}</h2>
              <p className="text-sm text-muted">{selectedCharacter.nameEn}</p>
              <p className="mt-1 text-sm leading-6 text-ink">{selectedCharacter.summary}</p>
            </div>
          </div>
          <ul className="mt-3 space-y-2">
            {selectedRelations.map((relation) => {
              const otherId = otherEnd(relation, selectedCharacter.id);
              const other = characterById(otherId);
              const legend = REL_LEGEND.find((item) => item.id === relation.kind);
              return (
                <li key={`${relation.a}-${relation.b}-${relation.kind}`} className="flex flex-wrap items-baseline gap-2 text-sm">
                  <button type="button" className="rounded-full border border-line px-2 py-0.5 hover:border-ocean" onClick={() => pick(otherId)}>
                    {other?.nameKo ?? otherId}
                  </button>
                  <span className="text-xs" style={{ color: legend?.color }}>
                    {legend?.label}
                  </span>
                  <span className="text-muted">{relation.note}</span>
                </li>
              );
            })}
          </ul>
          <Link href={`/characters/${selectedCharacter.id}`} className="mt-3 inline-block text-sm text-ocean">
            인물 페이지 →
          </Link>
        </section>
      ) : null}

      <section className="mt-8" aria-labelledby="relation-list-heading">
        <h2 id="relation-list-heading" className="font-serif text-2xl text-ink">
          인물별 관계
        </h2>
        <p className="mt-1 text-sm text-muted">그림을 움직이기 어려우면 여기서 고르면 됩니다. 지도에 없는 인물도 선이 있으면 나옵니다.</p>
        <div className="mt-3 space-y-2">
          {characters
            .filter((person) => relationsOf(person.id).length > 0)
            .map((person) => (
              <details key={person.id} className="rounded-md border border-line bg-card px-3 py-2" open={selected === person.id}>
                <summary className="flex cursor-pointer items-center gap-2">
                  <Chibi id={person.id} title={person.nameKo} className="h-10 w-10" />
                  <span className="font-serif text-ink">{person.nameKo}</span>
                  <span className="text-xs text-muted">{person.epithet}</span>
                </summary>
                <ul className="mt-2 space-y-1 pb-2 pl-12 text-sm">
                  {relationsOf(person.id).map((relation) => {
                    const other = characterById(otherEnd(relation, person.id));
                    const legend = REL_LEGEND.find((item) => item.id === relation.kind);
                    return (
                      <li key={`${person.id}-${relation.a}-${relation.b}-${relation.kind}`}>
                        <span style={{ color: legend?.color }}>{legend?.label}</span>
                        <span className="mx-1 text-ink">{other?.nameKo}</span>
                        <span className="text-muted">— {relation.note}</span>
                      </li>
                    );
                  })}
                </ul>
              </details>
            ))}
        </div>
      </section>
    </div>
  );
}
