const LABEL = {
  mid: "중간 스포일러",
  late: "스포일러",
  final: "후반 스포일러",
} as const;

export function SpoilerBadge({ level = "late" }: { level?: keyof typeof LABEL }) {
  const tone =
    level === "final"
      ? "border-pirate/40 bg-pirate/10 text-pirate"
      : level === "mid"
        ? "border-straw/50 bg-straw/10 text-straw"
        : "border-wine/40 bg-wine/10 text-wine";
  return <span className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] tracking-wide ${tone}`}>{LABEL[level]}</span>;
}
