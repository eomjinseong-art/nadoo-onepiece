import type { Saga } from "@/data/types";

export const sagas: Saga[] = [
  {
    id: "east-blue",
    no: 1,
    title: "동블루",
    titleEn: "East Blue",
    blurb: "밀짚모자, 첫 동료 다섯, 그리고 바다로 나가겠다는 약속. 그랜드 라인 전의 항구들입니다.",
  },
  {
    id: "alabasta",
    no: 2,
    title: "알라바스타",
    titleEn: "Alabasta",
    blurb: "고래 라분, 바로크 워크스, 그리고 비가 오지 않는 나라. 비비가 부탁한 항해입니다.",
  },
  {
    id: "sky-island",
    no: 3,
    title: "하늘섬",
    titleEn: "Sky Island",
    blurb: "꿈은 끝났다는 조롱과, 종소리로 대답하는 하늘. 역사의 돌이 처음 길게 등장합니다.",
  },
  {
    id: "water-7",
    no: 4,
    title: "워터 세븐",
    titleEn: "Water 7",
    blurb: "배의 작별, 로빈을 되찾으려 정부와 싸운 섬, 그리고 새 배 사우전드 서니.",
  },
  {
    id: "thriller-bark",
    no: 5,
    title: "스릴러 바크",
    titleEn: "Thriller Bark",
    blurb: "그림자를 빼앗는 유령선. 브룩과 라분의 약속, 그리고 조로의 침묵.",
  },
  {
    id: "summit-war",
    no: 6,
    title: "정상전쟁",
    titleEn: "Summit War",
    blurb: "샤본디에서 흩어진 뒤, 임펠다운과 마린포드. 이야기가 한 번 꺾이는 자리입니다.",
  },
  {
    id: "fish-man",
    no: 7,
    title: "어인섬",
    titleEn: "Fish-Man Island",
    blurb: "2년 만의 재회, 바다 밑의 나라, 증오를 물려받지 않겠다는 약속.",
  },
  {
    id: "dressrosa",
    no: 8,
    title: "드레스로자",
    titleEn: "Dressrosa",
    blurb: "도플라밍고의 실, 법의 복수, 사보의 귀환, 그리고 밀짚모자 대선단.",
  },
  {
    id: "whole-cake",
    no: 9,
    title: "홀케이크 아일랜드",
    titleEn: "Whole Cake Island",
    blurb: "조우의 밍크, 산지의 결혼식, 빅 맘, 그리고 사황의 바다로 들어가는 문.",
  },
  {
    id: "wano",
    no: 10,
    title: "와노쿠니",
    titleEn: "Wano",
    blurb: "닫힌 나라, 오뎅이 맡긴 20년, 카이도와 빅 맘. 이 가이드에서 가장 긴 아크입니다.",
  },
  {
    id: "final",
    no: 11,
    title: "최종장",
    titleEn: "Final Saga",
    blurb: "에그헤드까지의 기록입니다. 엘바프 이후는 연재가 이어지는 중이라 적지 않습니다.",
    ongoing: true,
  },
];

export function sagaById(id: string) {
  return sagas.find((saga) => saga.id === id);
}
