// Director scene script — EP.22 피휘 / 왕 이름이 외자인 이유 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, noBadge?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   정조·현종·세종 = king (곤룡포 색변주 + 익선관)
//   대신/예조·승지 = militia hat:"samo" (사모+단령)   ⚠ s10은 1420년이라 noBadge:true
//                     — 문관 흉배는 단종 2년(1454) 제도(EP.10 최만리 선례)
//   선비/백성       = militia 갓+도포
//   host           = 아웃트로(s11)
//
// 씬 경계 = S5 문장 테이블(17문장 → 10씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
// ⚠ 문장14·18은 whisper가 앞당긴 것을 silencedetect로 보정한 값 사용(지뢰 #58).
//
// ⚠ S3 적대검증 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. 「杖八十」「杖一百」 처벌 스탬프 금지 — 명 황제 어명 전제 조문이고 조선 집행례 0건.
//   2. 세종의 휘 「裪」 금지 — 실록 전체에서 그 총서 1건뿐인 이체자, 정본은 「祹」. 이 편은 아예 안 쓴다.
//   3. 「大丘 → 大邱」 금지 — 공자 피휘라 층위가 다르고 1750년 상소는 영조가 기각(命給其章).
//   4. 「古諱成桂」 금지 — 태조 개명은 실록에 기사 자체가 없다(시점·이유 무근거).
//   5. s7 이름 단자에 후보 글자를 여럿 그리지 말 것 — 실록은 「單子…首望落點」만 적고 후보 글자를
//      밝히지 않는다. 낙점된 「焞」 한 글자만 노출한다.
//   6. 모든 한자는 SVG <text>의 실제 글자 — 손으로 그린 획 금지(EP.19 지뢰).
//
// ⚠ 시그니처 표 준수 메모:
//   · 세로쓰기 글줄 = 짧은 획을 세로로 끊어 쌓기(긴 통막대+가로 눈금 = 십자가판 오독, 지뢰 #46).
//   · 창호 = 밝은 창호지 면 + 어두운 세로살 + 가로 3연 밴드 + 하단 궁판(어두운 면+밝은 살 = 감옥, 지뢰 #45).
//   · 어좌는 비워 두지 않는다 — 왕 rig가 앞에 선다(지뢰 #50).
//   · 원형 글로우 금지 — 빛은 가로로 넓은 저채도 타원 띠(지뢰 #47, EP.20에서 저채도도 실패).
//   · 붓은 종이에 닿게 눕힌다(위로 뻗으면 창, 지뢰 #20).
//   · 풀블리드 벽 밴드는 stage DOM 최선두(지뢰 #49).
//   · 소나무 = 비대칭 수관층 + 적갈색 줄기.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var GONRYONG_JJ = "#c0392b";   // 정조 — 홍색 곤룡포
var GONRYONG_HJ = "#a8332c";   // 현종 — 같은 홍색 계열 색변주
var GONRYONG_SJ = "#b5322a";   // 세종
var DANRYONG_A  = "#4a6a8a";   // 대신 단령 — 청
var DANRYONG_B  = "#3f6b5e";   // 대신 단령 — 녹
var DOPO        = "#cfc3a6";   // 선비 도포 — 베이지

var SCENES = [
  {
    // S1 훅 — "정조가 왕이 된 해, 땅 이름 두 개가 바뀝니다."
    // 낮 궁궐 정전 외경 + 정조. chip "정조 즉위 · 1776년".
    id: "s1", start: 0, dur: 5.65, talker: null,
    chars: [
      { id: "s1-king", variant: "king", shirt: GONRYONG_JJ, pants: "#2f3a52",
        x: 25, bottom: 560, w: 430, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 3.40, char: "s1-king", expr: "proud" },
    ],
  },
  {
    // S2 — "이산은 초산으로, 또 다른 이산은 이성으로 바뀌었죠."
    // 관아 동헌 + 현판 글자 교체(理山→楚山), 우측 작은 현판(尼山→尼城). 인물 없음(소품 씬).
    id: "s2", start: 5.20, dur: 5.07, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 — "실록에 적힌 이유는, 임금의 이름과 발음이 같아서였습니다."
    // 실내 기록 인서트: 서안 위 펼친 선장본 실록 + 금색 하이라이트 글줄.
    // 스탬프 「以御名音同也」 — 정조실록 즉위년 5월 22일(kva_10005022_005).
    id: "s3", start: 9.82, dur: 5.57, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S4 — "임금 이름 글자는, 백성이 함부로 쓸 수 없었거든요."
    // 낮 방: 세살 창호 + 서안 + 종이(글줄 중 한 칸이 비어 있음 = 피휘공자법) + 눕힌 붓 + 선비.
    id: "s4", start: 14.94, dur: 5.19, talker: null,
    chars: [
      { id: "s4-scholar", variant: "militia", shirt: DOPO, pants: "#8a7a5c",
        x: 74, bottom: 560, w: 390, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 17.30, char: "s4-scholar", expr: "shocked" },
    ],
  },
  {
    // S5 — "그래서 조선 임금 27명 중 25명이 외자입니다." / "피해야 할 글자를 하나로 줄이려는 거였죠."
    // 궁궐 담 마당 + 이름패 2기 대비(한 글자 祘 / 두 글자 芳遠). num-pop 25, 스탬프 예외 2명.
    id: "s5", start: 19.68, dur: 8.69, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S6 — "게다가 평소 아무도 안 쓰는 글자를 골랐습니다."
    // 어둑한 서고: 서가 + 펼친 자전(옥편) 글자 격자 + 금색 동그라미 + 등잔 + 선비.
    id: "s6", start: 27.92, dur: 5.11, talker: null,
    chars: [
      { id: "s6-scholar", variant: "militia", shirt: "#b9ad8e", pants: "#7d6f52",
        x: 16, bottom: 560, w: 320, expr: "neutral", pose: "down" },
    ],
    changes: [],
  },
  {
    // S7 — "현종은 외아들의 이름을 이렇게 정했어요." / "한 글자로 하되, 불 화 변에서 고르라." /
    //      "그렇게 나온 이름이 숙종의 순입니다."
    // 어전: 일월오봉도 병풍 + 어좌(왕이 앞에 섬, 지뢰 #50) + 대신 + 이름 단자(焞 + 붉은 낙점).
    // 스탬프 「宜用一字, 而從火邊擇字」 — 현종실록 7년 3월 11일(kra_10703011_001).
    id: "s7", start: 32.58, dur: 11.79, talker: null,
    chars: [
      { id: "s7-king", variant: "king", shirt: GONRYONG_HJ, pants: "#2f3a52",
        x: 79, bottom: 620, w: 400, expr: "neutral", pose: "down" },
      { id: "s7-min", variant: "militia", hat: "samo", shirt: DANRYONG_A, pants: "#33475e",
        x: 16, bottom: 560, w: 330, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 36.90, char: "s7-king", pose: "point" },
      { at: 41.10, char: "s7-king", expr: "proud" },
      { at: 41.10, char: "s7-king", pose: "down" },
    ],
  },
  {
    // S8 — "그런데 예법은 원래 이랬습니다." / "두 글자 이름은, 한 글자씩 따로 피하진 않는다."
    // 밝은 한지 톤 인서트: 서안 위 펼친 예서 「二名不偏諱」 + 옆에 닫힌 선장본(경제육전).
    id: "s8", start: 43.92, dur: 8.19, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S9 — "태종은 이방원, 이름이 두 글자였죠." / "그런데 신하들은 문서에서 뒷글자를 다른 글자로 바꿔 썼습니다."
    // 관청 실내: 문서 지면 + 「遠」 → 「遐」 글자 카드 교체 + 신하.
    // 스탬프 「以遐字代遠字」 — 세종실록 2년 1월 25일(kda_10201025_003).
    id: "s9", start: 51.66, dur: 9.99, talker: null,
    chars: [
      { id: "s9-min", variant: "militia", hat: "samo", shirt: DANRYONG_B, pants: "#33475e",
        x: 21, bottom: 560, w: 374, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 57.20, char: "s9-min", pose: "point" },
    ],
  },
  {
    // S10 — "세종 때 예조가 이 관행을 금지합니다." / "신하가 아첨하는 길을 막자면서요." /
    //       "임금 이름을 피하던 나라가, 너무 피하는 걸 막은 겁니다."
    // 어전: 세종 + 예조 판서(noBadge — 1420년) + 올린 계본 두루마리.
    // 스탬프 「以杜臣子謟諛之端」 + chip 「從之 — 그대로 따랐다」.
    id: "s10", start: 61.20, dur: 12.32, talker: null,
    chars: [
      { id: "s10-king", variant: "king", shirt: GONRYONG_SJ, pants: "#2f3a52",
        x: 70, bottom: 640, w: 404, expr: "neutral", pose: "down" },
      { id: "s10-yejo", variant: "militia", hat: "samo", noBadge: true, shirt: "#5a6f92", pants: "#33475e",
        x: 25, bottom: 560, w: 378, expr: "neutral", pose: "raised", flip: true },
    ],
    changes: [
      { at: 65.40, char: "s10-yejo", pose: "down" },
      { at: 68.70, char: "s10-king", expr: "proud" },
    ],
  },
  {
    // S11 아웃트로
    id: "s11", start: 73.07, dur: 6.03, talker: "s11-host",
    chars: [
      { id: "s11-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
