import Link from "next/link";
import { Chibi, hasChibi } from "@/components/Chibi";
import { characterById } from "@/data/characters";

export function PersonChip({ id, name, size = "md" }: { id?: string; name: string; size?: "sm" | "md" }) {
  const person = id ? characterById(id) : undefined;
  const label = person?.nameKo ?? name;
  const box = size === "sm" ? "h-9 w-9" : "h-12 w-12";
  const body = (
    <span className="inline-flex items-center gap-2">
      {id && hasChibi(id) ? <Chibi id={id} title={label} className={`${box} shrink-0`} /> : null}
      <span>{label}</span>
    </span>
  );
  const shell = "inline-flex items-center rounded-full border border-line bg-card px-2 py-1 text-sm text-ink";
  if (!person) return <span className={shell}>{body}</span>;
  return (
    <Link href={`/characters/${person.id}`} className={`${shell} hover:border-ocean hover:text-ocean`}>
      {body}
    </Link>
  );
}
