import type { BountyRow } from "@/data/types";

/** 포스터와 작품 안에서 확인된 액수. 동결된 칠무해 시절은 그 직전의 숫자입니다. */
export const bountyRows: BountyRow[] = [
  {
    id: "luffy",
    name: "몽키 D. 루피",
    changes: [
      { when: "아롱 파크", amount: "30,000,000", detail: "동블루 최고에 가까운 첫 현상금. 네즈미의 신고." },
      { when: "알라바스타", amount: "100,000,000", detail: "자야에서 검은수염이 보여 줍니다. 공식 공은 스모커에게 돌아갑니다." },
      { when: "에니에스 로비", amount: "300,000,000", detail: "정부와의 전쟁. 최악의 세대로 묶입니다." },
      { when: "정상전쟁 후", amount: "400,000,000", detail: "모리아, 천룡인, 임펠다운, 혈연, 종소리가 이유로 거론됩니다." },
      { when: "드레스로자", amount: "500,000,000" },
      { when: "홀케이크", amount: "1,500,000,000", detail: "신문은 다섯 번째 황제라 씁니다. 공식 임명은 아닙니다." },
      { when: "와노", amount: "3,000,000,000", detail: "사황. 각성 모습이 실수로 실리고, 빼려던 D가 남습니다." },
    ],
  },
  {
    id: "zoro",
    name: "롤로노아 조로",
    changes: [
      { when: "알라바스타", amount: "60,000,000", detail: "위스키 피크의 사냥꾼들과 미스터 1." },
      { when: "에니에스 로비", amount: "120,000,000" },
      { when: "드레스로자", amount: "320,000,000" },
      { when: "와노", amount: "1,111,000,000", detail: "킹을 이긴 검사. 대선단의 간부." },
    ],
  },
  {
    id: "nami",
    name: "나미",
    changes: [
      { when: "알라바스타", amount: "16,000,000", detail: "수영복 사진. 기자 행세를 믿었습니다." },
      { when: "에니에스 로비", amount: "66,000,000", detail: "어인섬에 도착할 때까지 이 금액입니다." },
      { when: "와노", amount: "366,000,000" },
    ],
  },
  {
    id: "usopp",
    name: "우솝",
    changes: [
      { when: "에니에스 로비", amount: "30,000,000", detail: "이름은 소게킹. 깃발을 쏜 저격수." },
      { when: "드레스로자", amount: "200,000,000", detail: "신 우솝. 본명과 얼굴로 바뀝니다." },
      { when: "와노", amount: "500,000,000" },
    ],
  },
  {
    id: "sanji",
    name: "산지",
    changes: [
      { when: "에니에스 로비", amount: "77,000,000", detail: "렌즈 캡 때문에 그림 얼굴." },
      { when: "드레스로자", amount: "177,000,000", detail: "생포만. 빈스모크 가문의 사정. 사진은 드디어 얼굴." },
      { when: "홀케이크", amount: "330,000,000", detail: "빈스모크 산지로 찍히고 생포 조건은 풀립니다." },
      { when: "와노", amount: "1,032,000,000", detail: "포스터는 다시 그림입니다." },
    ],
  },
  {
    id: "chopper",
    name: "토니토니 쵸파",
    changes: [
      { when: "에니에스 로비", amount: "50", detail: "반려동물. 괴물형은 다른 생물로 오해." },
      { when: "드레스로자", amount: "100" },
      { when: "와노", amount: "1,000", detail: "의사로 인정되면서도 반려동물 칸은 유지됩니다." },
    ],
  },
  {
    id: "robin",
    name: "니코 로빈",
    changes: [
      { when: "오하라, 여덟 살", amount: "79,000,000", detail: "군함 침몰은 구실. 이유는 포네글리프." },
      { when: "에니에스 로비", amount: "80,000,000" },
      { when: "드레스로자", amount: "130,000,000" },
      { when: "와노", amount: "930,000,000" },
    ],
  },
  {
    id: "franky",
    name: "프랭키",
    changes: [
      { when: "에니에스 로비", amount: "44,000,000" },
      { when: "드레스로자", amount: "94,000,000", detail: "사진은 일반 프랑키." },
      { when: "와노", amount: "394,000,000", detail: "사진은 서니의 사자 머리." },
    ],
  },
  {
    id: "brook",
    name: "브룩",
    changes: [
      { when: "럼버 시절", amount: "33,000,000", detail: "죽은 뒤에도 포스터가 살아 있었습니다." },
      { when: "드레스로자", amount: "83,000,000", detail: "소울 킹의 공연 사진." },
      { when: "와노", amount: "383,000,000" },
    ],
  },
  {
    id: "jinbe",
    name: "징베",
    changes: [
      { when: "태양 해적단", amount: "76,000,000" },
      { when: "칠무해 직전", amount: "250,000,000", detail: "칠무해가 되며 동결." },
      { when: "정상전쟁 후", amount: "438,000,000", detail: "칠무해를 떠난 뒤." },
      { when: "와노", amount: "1,100,000,000" },
    ],
  },
  {
    id: "law",
    name: "트라팔가 로",
    changes: [
      { when: "샤본디", amount: "200,000,000" },
      { when: "2년 뒤, 칠무해 직전", amount: "440,000,000", detail: "칠무해가 되며 동결." },
      { when: "드레스로자", amount: "500,000,000", detail: "칠무해에서 풀립니다." },
      { when: "와노", amount: "3,000,000,000" },
    ],
  },
  {
    id: "kid",
    name: "유스타스 키드",
    changes: [
      { when: "샤본디", amount: "315,000,000", detail: "당시 루피보다 높습니다." },
      { when: "2년 뒤", amount: "470,000,000" },
      { when: "와노", amount: "3,000,000,000" },
    ],
  },
  {
    id: "ace",
    name: "포트거스 D. 에이스",
    changes: [{ when: "흰수염 선단", amount: "550,000,000", detail: "붙잡힌 뒤 철회. 사망으로 종료." }],
  },
  {
    id: "sabo",
    name: "사보",
    changes: [{ when: "드레스로자 무렵", amount: "602,000,000 이상", detail: "세계회의 이후 더 올랐다는 소식만 있고, 새 숫자는 이 표에 단정하지 않습니다." }],
  },
  {
    id: "blackbeard",
    name: "검은수염",
    changes: [
      { when: "하치노스 습격 무렵", amount: "2,247,600,000" },
      { when: "그 뒤", amount: "3,996,000,000" },
    ],
  },
  {
    id: "hancock",
    name: "보아 행콕",
    changes: [
      { when: "쿠자 선장 시절", amount: "80,000,000", detail: "칠무해로 동결." },
      { when: "칠무해 폐지 후", amount: "1,659,000,000" },
    ],
  },
  {
    id: "crocodile",
    name: "크로커다일",
    changes: [
      { when: "칠무해 직전", amount: "81,000,000", detail: "바로크 워크스를 알았다면 더 올랐을 거라는 말이 있습니다." },
      { when: "크로스 길드", amount: "1,965,000,000" },
    ],
  },
  {
    id: "doflamingo",
    name: "도플라밍고",
    changes: [{ when: "칠무해 직전", amount: "340,000,000", detail: "체포 후 철회." }],
  },
  {
    id: "buggy",
    name: "버기",
    changes: [
      { when: "동블루", amount: "15,000,000" },
      { when: "크로스 길드", amount: "3,189,000,000", detail: "간판 사황. 실력의 순위와 포스터의 순위가 다릅니다." },
    ],
  },
  {
    id: "mihawk",
    name: "미호크",
    changes: [{ when: "크로스 길드", amount: "3,590,000,000" }],
  },
  {
    id: "shanks",
    name: "샹크스",
    changes: [
      { when: "포샤 마을 무렵", amount: "1,040,000,000" },
      { when: "칠무해 폐지 무렵", amount: "4,048,900,000" },
    ],
  },
  {
    id: "kaido",
    name: "카이도",
    changes: [{ when: "사황", amount: "4,611,100,000" }],
  },
  {
    id: "big-mom",
    name: "빅 맘",
    changes: [
      { when: "어린 시절", amount: "50,000,000" },
      { when: "그 뒤 어린 시절", amount: "500,000,000" },
      { when: "사황", amount: "4,388,000,000" },
    ],
  },
  {
    id: "whitebeard",
    name: "흰수염",
    changes: [{ when: "사망 당시", amount: "5,046,000,000", detail: "사망으로 종료." }],
  },
  {
    id: "roger",
    name: "골 D. 로저",
    changes: [{ when: "해적왕", amount: "5,564,800,000", detail: "알려진 최고액. 처형 후 철회." }],
  },
  {
    name: "아롱",
    changes: [{ when: "동블루", amount: "20,000,000", detail: "해군에게 돈을 쥐여 낮춘 숫자라는 설명이 있습니다." }],
  },
  {
    name: "돈 크리크",
    changes: [{ when: "동블루", amount: "17,000,000" }],
  },
  {
    id: "katakuri",
    name: "카타쿠리",
    changes: [{ when: "빅 맘 선단", amount: "1,057,000,000" }],
  },
  {
    name: "킹",
    changes: [{ when: "백수 해적단", amount: "1,390,000,000" }],
  },
  {
    name: "퀸",
    changes: [{ when: "백수 해적단", amount: "1,320,000,000" }],
  },
  {
    name: "잭",
    changes: [{ when: "백수 해적단", amount: "1,000,000,000" }],
  },
];

export function bountiesOf(id: string) {
  return bountyRows.find((row) => row.id === id);
}

export function berryLabel(amount: string) {
  return `${amount}베리`;
}
