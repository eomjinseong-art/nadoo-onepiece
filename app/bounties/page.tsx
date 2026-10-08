import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Chibi } from "@/components/Chibi";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { berryLabel, bountyRows } from "@/data/bounties";
import { characterById } from "@/data/characters";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "현상금",
  description: "포스터에 나온 현상금만 모았습니다. 밀짚모자 일당의 변천과, 사황·칠무해의 공개된 액수입니다.",
  path: "/bounties",
});

export default function BountiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "현상금", path: "/bounties" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "현상금" }]} />
      <PageHead
        kicker="Bounties · 현상금"
        title="현상금 변천"
        lead="작품 안에서 포스터나 대사로 확인된 액수만 적습니다. 동결된 칠무해는 그 직전의 숫자입니다. 사보의 이후 인상분은 정확한 액수를 확인하지 못해 비워 두었습니다."
      />
      <div className="mt-6 overflow-x-auto rounded-lg border border-line bg-card">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="sr-only">현상금 변천표</caption>
          <thead className="bg-sand text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">이름</th>
              <th className="px-3 py-2 font-medium">변천</th>
            </tr>
          </thead>
          <tbody>
            {bountyRows.map((row) => {
              const person = row.id ? characterById(row.id) : undefined;
              return (
                <tr key={row.name} className="border-t border-line align-top">
                  <th scope="row" className="px-3 py-3 font-medium text-ink">
                    <span className="flex items-center gap-2">
                      {person ? <Chibi id={person.id} title={person.nameKo} className="h-10 w-10" /> : null}
                      {person ? (
                        <Link href={`/characters/${person.id}`} className="hover:text-ocean">
                          {row.name}
                        </Link>
                      ) : (
                        row.name
                      )}
                    </span>
                  </th>
                  <td className="px-3 py-3">
                    <ol className="space-y-2">
                      {row.changes.map((change) => (
                        <li key={`${row.name}-${change.when}-${change.amount}`}>
                          <span className="text-muted">{change.when}</span>
                          <span className="mx-2 tabular-nums text-ink">{berryLabel(change.amount)}</span>
                          {change.detail ? <span className="text-muted">{change.detail}</span> : null}
                        </li>
                      ))}
                    </ol>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
