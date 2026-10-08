import type { Theme } from "@/data/types";

export const themes: Theme[] = [
  {
    id: "friendship",
    title: "우정",
    titleEn: "Friendship",
    lead: "밀짚모자의 항해는 보물 지도보다 동료의 자리로 진행됩니다. 떠나고, 사과하고, 대신 맞고, 다시 밥상에 앉습니다.",
    scenes: [
      {
        title: "모자를 맡기는 밤",
        body: "아롱 파크에서 루피는 사연의 끝까지 캐묻지 않습니다. 나미가 도와 달라고 말한 순간, 모자가 그녀의 머리에 얹힙니다.",
        arcId: "arlong-park",
        characterIds: ["luffy", "nami"],
      },
      {
        title: "배의 장례와 사과",
        body: "고잉 메리는 행복했다고 하고, 우솝은 자존심을 접습니다. 조로는 아무 일 없던 것처럼 돌아오는 것은 안 된다고 선을 긋습니다. 우정이 규율과 같이 있습니다.",
        arcId: "post-enies-lobby",
        characterIds: ["usopp", "zoro", "luffy"],
      },
      {
        title: "아무 일도 없었어",
        body: "스릴러 바크의 아침, 조로는 선장의 고통과 피로를 대신 받습니다. 말하지 않는 쪽이 더 무겁습니다.",
        arcId: "thriller-bark",
        characterIds: ["zoro", "sanji"],
      },
      {
        title: "밥을 기다리는 선장",
        body: "홀케이크에서 산지는 가문을 이유로 떠나고, 루피는 맞지 않으려 하지 않은 채 굶으며 기다립니다. 해적왕의 조건에 요리사 한 사람이 들어 있습니다.",
        arcId: "whole-cake-island",
        characterIds: ["sanji", "luffy"],
      },
    ],
  },
  {
    id: "love",
    title: "사랑",
    titleEn: "Love",
    lead: "연애보다 먼저, 부모와 자식과 형제가 이 바다를 움직입니다. 선택한 가족도 혈연만큼 무겁습니다.",
    scenes: [
      {
        title: "귤밭의 엄마",
        body: "벨메르는 해군이었고, 돈이 모자란 날에도 세 사람이라고 말합니다. 나미와 노지코는 그 선택으로 삽니다.",
        arcId: "arlong-park",
        characterIds: ["nami", "bellemere"],
      },
      {
        title: "벚꽃 의사",
        body: "히루루크는 나라를 고치지 못하고 죽지만, 잊히지 않기 위해 쵸파에게 깃발을 남깁니다. 사람은 잊혔을 때 죽는다는 말이 모자가 됩니다.",
        arcId: "drum-island",
        characterIds: ["chopper", "hiriluk"],
      },
      {
        title: "세 잔의 술",
        body: "에이스와 사보와 루피는 혈연이 아니라 잔으로 형제가 됩니다. 사보는 한 번 죽었다고 믿어지고, 에이스는 흰수염의 아들이 됩니다.",
        arcId: "post-war",
        characterIds: ["luffy", "ace", "sabo"],
      },
      {
        title: "사랑해, 그리고 아버지",
        body: "코라손은 로에게 그 말을 남기고, 쿠마는 보니의 자유를 조건으로 자신을 넘깁니다. 둘 다 후반에 열리므로 배지를 보고 읽으면 됩니다.",
        arcId: "dressrosa",
        characterIds: ["corazon", "law", "kuma", "bonney"],
      },
    ],
  },
  {
    id: "dream",
    title: "꿈",
    titleEn: "Dreams",
    lead: "각자 꿈의 문장이 다릅니다. 선장은 해적왕, 검사는 제일, 항해사는 지도, 저격수는 용사, 요리사는 올 블루, 의사는 만병, 고고학자는 역사, 조선공은 배, 음악가는 고래, 조타수는 같이 쓰는 바다.",
    scenes: [
      {
        title: "모자와 벽",
        body: "샹크스의 모자와 미호크의 칼이 같은 동블루에 있습니다. 하나는 약속, 하나는 아직 넘지 못한 검입니다.",
        arcId: "baratie",
        characterIds: ["luffy", "shanks", "zoro", "mihawk"],
      },
      {
        title: "종소리",
        body: "자야에서 꿈은 끝났다는 조롱을 받고, 스카이피아에서 종이 울립니다. 아래의 크리켓이 그 소리를 듣습니다.",
        arcId: "skypiea",
        characterIds: ["luffy", "robin"],
      },
      {
        title: "너무 일찍 도착한 왕",
        body: "로저는 라프텔에 갔고, 레일리는 너무 일렀을 수 있다고 말합니다. 루피의 꿈은 그 시차를 메우는 쪽에 놓입니다.",
        arcId: "return-sabaody",
        characterIds: ["roger", "rayleigh", "luffy"],
      },
      {
        title: "오뎅의 한 시간",
        body: "와노를 열겠다는 꿈은 본인이 아니라 20년 뒤의 아들과 가신에게 넘어갑니다. 야마토는 그 일기를 자기 이름으로 읽습니다.",
        arcId: "wano",
        characterIds: ["oden", "momonosuke", "yamato"],
      },
    ],
  },
  {
    id: "freedom",
    title: "자유",
    titleEn: "Freedom",
    lead: "해적왕을 가장 자유로운 사람이라고 부르는 이야기입니다. 자유는 바다를 나가는 일, 금지된 책을 읽는 일, 노예를 사지 않는 일, 그리고 후반에는 웃으며 해방하는 이름으로 돌아옵니다.",
    scenes: [
      {
        title: "처형대의 웃음",
        body: "로저는 죽으면서 세계를 바다로 내보냅니다. 루피는 같은 마을, 같은 단 위에서 웃습니다.",
        arcId: "loguetown",
        characterIds: ["roger", "luffy"],
      },
      {
        title: "경매장의 주먹",
        body: "천룡인의 총구 앞에서 루피는 이름을 따지지 않습니다. 그 주먹 때문에 대장 키자루가 오고, 일행은 흩어집니다.",
        arcId: "sabaody",
        characterIds: ["luffy", "kizaru", "hancock"],
      },
      {
        title: "살고 싶다는 자유",
        body: "로빈에게 자유는 먼저 살아남는 일이었습니다. 오하라의 책은 정부가 지우려 한 질문입니다.",
        arcId: "enies-lobby",
        characterIds: ["robin", "saul"],
      },
      {
        title: "니카",
        body: "와노에서 고무의 이름이 니카로 열립니다. 해방의 전사가 웃으며 싸운다는 설정은 후반 스포일러입니다. 에그헤드의 방송은 그 자유를 세계가 듣게 하지만, 이 가이드는 방송 원문을 싣지 않습니다.",
        arcId: "wano",
        characterIds: ["luffy", "vegapunk"],
      },
    ],
  },
];
