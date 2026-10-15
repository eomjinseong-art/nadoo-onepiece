"use client";

import { useCallback, useEffect, useState } from "react";
import { Ruby } from "@/components/Ruby";
import { jpItems, type JpItem } from "@/data/japanese";

type Mode = "blank" | "who" | "meaning";

type Question = {
  item: JpItem;
  prompt: string;
  promptRuby?: string;
  options: string[];
  answer: string;
};

const MODES: { id: Mode; label: string; hint: string }[] = [
  { id: "blank", label: "빈칸 채우기", hint: "빈칸에 들어갈 말을 고르세요." },
  { id: "who", label: "누가 말했을까", hint: "이 말을 한 인물을 고르세요." },
  { id: "meaning", label: "뜻 맞히기", hint: "알맞은 우리말 뜻을 고르세요." },
];

function shuffle<T>(list: T[]) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function distractors(answer: string, pool: string[], n = 3) {
  return shuffle([...new Set(pool.filter((value) => value !== answer))]).slice(0, n);
}

const blankPool = jpItems.filter((item) => item.ja !== item.key && item.ja.includes(item.key));
const whoPool = jpItems.filter((item) => item.kind !== "keyword");

function makeQuestion(mode: Mode): Question {
  if (mode === "blank") {
    const item = pick(blankPool);
    const answer = item.key;
    return {
      item,
      prompt: item.ja.replace(item.key, "＿＿＿"),
      options: shuffle([answer, ...distractors(answer, jpItems.map((x) => x.key))]),
      answer,
    };
  }
  if (mode === "who") {
    const item = pick(whoPool);
    const answer = item.speaker;
    return {
      item,
      prompt: item.ja,
      promptRuby: item.ruby,
      options: shuffle([answer, ...distractors(answer, whoPool.map((x) => x.speaker))]),
      answer,
    };
  }
  const item = pick(jpItems);
  const answer = item.ko;
  return {
    item,
    prompt: item.ja,
    promptRuby: item.ruby,
    options: shuffle([answer, ...distractors(answer, jpItems.map((x) => x.ko))]),
    answer,
  };
}

export function JapaneseQuiz() {
  const [mode, setMode] = useState<Mode>("blank");
  const [question, setQuestion] = useState<Question | null>(null);
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState({ right: 0, total: 0 });

  const next = useCallback((m: Mode) => {
    setQuestion(makeQuestion(m));
    setChosen(null);
  }, []);

  useEffect(() => {
    next(mode);
  }, [mode, next]);

  const choose = (option: string) => {
    if (!question || chosen) return;
    setChosen(option);
    setScore((s) => ({ right: s.right + (option === question.answer ? 1 : 0), total: s.total + 1 }));
  };

  const hint = MODES.find((m) => m.id === mode)?.hint;

  return (
    <section id="quiz" aria-labelledby="jp-quiz" className="mt-12 scroll-mt-28 rounded-lg border border-line bg-card p-4 sm:p-5">
      <h2 id="jp-quiz" className="font-serif text-2xl text-ink">
        퀴즈
      </h2>
      <p className="mt-1 text-sm text-muted">100개 카드에서 무작위로 나옵니다. 점수는 이 화면에만 남습니다.</p>
      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="퀴즈 종류">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={mode === m.id}
            onClick={() => setMode(m.id)}
            className={`rounded-full border px-3 py-1.5 text-sm ${mode === m.id ? "border-ocean bg-ocean/10 font-semibold text-ocean" : "border-line text-ink hover:border-ocean"}`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs tracking-wide text-ocean">{hint}</p>
      {question ? (
        <div className="mt-2">
          <p className="font-serif text-2xl leading-[2.2] text-ink">
            {question.promptRuby ? <Ruby text={question.promptRuby} /> : <span lang="ja">{question.prompt}</span>}
          </p>
          {mode === "blank" ? <p className="text-sm text-muted">뜻: {question.item.ko}</p> : null}
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {question.options.map((option) => {
              const isAnswer = option === question.answer;
              const tone = !chosen
                ? "border-line hover:border-ocean"
                : isAnswer
                  ? "border-kelp bg-kelp/10 text-kelp"
                  : option === chosen
                    ? "border-pirate bg-pirate/10 text-pirate"
                    : "border-line opacity-60";
              return (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => choose(option)}
                    disabled={Boolean(chosen)}
                    lang={mode === "blank" ? "ja" : undefined}
                    className={`w-full rounded-md border px-3 py-2.5 text-left text-base ${tone}`}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
          {chosen ? (
            <div className="mt-3 rounded-md bg-sand/70 px-3 py-2 text-sm leading-7" aria-live="polite">
              <p className="font-medium text-ink">{chosen === question.answer ? "정답!" : `아쉬워요. 정답은 “${question.answer}”`}</p>
              <p className="text-ink">
                <Ruby text={question.item.ruby} /> — {question.item.ko}
              </p>
              <p className="text-muted">
                {question.item.speaker} · {question.item.romaji}
              </p>
              <a href={`#${question.item.id}`} className="text-ocean underline underline-offset-4">
                카드에서 보기
              </a>
            </div>
          ) : null}
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-sm text-muted">
              점수 {score.right} / {score.total}
            </p>
            <button type="button" onClick={() => next(mode)} className="rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-white hover:bg-ocean-deep">
              다음 문제 →
            </button>
          </div>
        </div>
      ) : (
        <p className="mt-2 text-sm text-muted">문제를 준비하는 중…</p>
      )}
    </section>
  );
}
