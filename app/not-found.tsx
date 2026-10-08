import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs tracking-[0.2em] text-ocean">404</p>
      <h1 className="mt-2 font-serif text-3xl text-ink">이 바다에는 그 섬이 없습니다</h1>
      <p className="mt-3 text-sm leading-7 text-muted">주소가 없거나 옮겨졌습니다. 로그 포즈를 다시 맞추고 첫 항구로 돌아가세요.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/" className="text-ocean underline">
          홈
        </Link>
        <Link href="/story" className="text-ocean underline">
          이야기
        </Link>
        <Link href="/characters" className="text-ocean underline">
          인물
        </Link>
      </div>
    </div>
  );
}
