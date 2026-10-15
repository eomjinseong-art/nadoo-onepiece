import { Fragment } from "react";

const RE = /\[([^|\]]+)\|([^\]]+)\]/g;

/** "[漢字|かんじ]" 표기를 <ruby>로 바꿉니다. */
export function Ruby({ text, className }: { text: string; className?: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  RE.lastIndex = 0;
  while ((match = RE.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <ruby key={match.index}>
        {match[1]}
        <rp>(</rp>
        <rt className="text-[0.55em] font-normal tracking-normal text-ocean">{match[2]}</rt>
        <rp>)</rp>
      </ruby>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return (
    <span lang="ja" className={className}>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </span>
  );
}
