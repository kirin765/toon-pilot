// Director scene script — the "LLM-writable" layer. EP.6 난장판 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?/skirt?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// 캐스팅: 응시자/거자·거벽·사수 = militia(갓+도포) 색변주 / 시험관 = admiral(전립) /
//   선접꾼(주먹패) = 노유·천한 수종이라 militia hat:"paeraengi"(초립) / 김홍도 = militia 색변주 / 호스트 = host.
var TRANSITION = 0.45;

var SEONBI = { shirt: "#e3d8c0", pants: "#6f5c43" };   // 응시자 — 베이지 도포
var GEOJA = { shirt: "#efe7d4", pants: "#7a6a4d" };    // 거자(본인) — 밝은 도포, 부잣집
var GEOBYEOK = { shirt: "#a8bd8a", pants: "#5c6b45" }; // 거벽(문장) — 녹색 도포
var SASU = { shirt: "#9db8cc", pants: "#4a5d70" };     // 사수(글씨) — 청색 도포
var GWAN = { shirt: "#4a5568", pants: "#262f3a" };     // 시험관 — 어두운 관복
var JUMEOK = { shirt: "#8a7a5e", pants: "#4a4030" };   // 선접꾼(주먹패) — 흙빛 평민 복
var HONGDO = { shirt: "#c2b491", pants: "#5a4632" };   // 김홍도 — 화가
var HOST = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "난장판, 시장이 아니라 조선 과거 시험장"
    id: "s1", start: 0, dur: 6.75, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 50, bottom: 560, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [
      { at: 3.6, char: "s1-host", expr: "proud" },
    ],
  },
  {
    // S2 — 33명 뽑는 문과에 10만 명 (응시자 군중)
    id: "s2", start: 6.30, dur: 6.39, talker: "s2-seonbi",
    chars: [
      { id: "s2-seonbi", variant: "militia", shirt: SEONBI.shirt, pants: SEONBI.pants, x: 30, bottom: 560, w: 400, expr: "neutral", pose: "down" },
      { id: "s2-seonbi2", variant: "militia", shirt: GEOJA.shirt, pants: GEOJA.pants, x: 72, bottom: 580, w: 370, expr: "shocked", pose: "shrug", flip: true },
    ],
    changes: [
      { at: 9.29, char: "s2-seonbi", expr: "shocked" },
    ],
  },
  {
    // S3 — 시험관이 먼저 낸 답안지만 채점 (시권 더미 + 감독관)
    id: "s3", start: 12.24, dur: 6.01, talker: "s3-gwan",
    chars: [
      { id: "s3-gwan", variant: "admiral", shirt: GWAN.shirt, pants: GWAN.pants, x: 71, bottom: 560, w: 400, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 15.4, char: "s3-gwan", expr: "proud" },
    ],
  },
  {
    // S4 — 주먹패(선접꾼) 자리싸움, 깔려 죽는 사람도
    id: "s4", start: 17.80, dur: 5.71, talker: "s4-jumeok",
    chars: [
      { id: "s4-jumeok", variant: "militia", hat: "paeraengi", shirt: JUMEOK.shirt, pants: JUMEOK.pants, x: 30, bottom: 570, w: 410, expr: "angry", pose: "raised" },
      { id: "s4-jumeok2", variant: "militia", hat: "paeraengi", shirt: "#9c8a6a", pants: "#5a4e38", x: 72, bottom: 560, w: 390, expr: "angry", pose: "raised", flip: true },
    ],
    changes: [],
  },
  {
    // S5 반전 — 거벽이 짓고 사수가 쓰고, 정작 본인은 앉아만 (3인 + 역할 라벨)
    id: "s5", start: 23.06, dur: 7.59, talker: "s5-geoja",
    chars: [
      { id: "s5-geobyeok", variant: "militia", shirt: GEOBYEOK.shirt, pants: GEOBYEOK.pants, x: 20, bottom: 570, w: 350, expr: "proud", pose: "point" },
      { id: "s5-sasu", variant: "militia", shirt: SASU.shirt, pants: SASU.pants, x: 50, bottom: 560, w: 350, expr: "neutral", pose: "point" },
      { id: "s5-geoja", variant: "militia", shirt: GEOJA.shirt, pants: GEOJA.pants, x: 80, bottom: 575, w: 350, expr: "happy", pose: "down", flip: true },
    ],
    changes: [
      { at: 27.6, char: "s5-geoja", expr: "proud" },
    ],
  },
  {
    // S6 — 김홍도 「공원춘효도」, 강세황 "개미 만 마리의 싸움" (새벽 우산 바다)
    id: "s6", start: 30.20, dur: 6.89, talker: "s6-hongdo",
    chars: [
      { id: "s6-hongdo", variant: "militia", shirt: HONGDO.shirt, pants: HONGDO.pants, x: 24, bottom: 560, w: 380, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 33.8, char: "s6-hongdo", expr: "proud" },
    ],
  },
  {
    // S7 펀치라인 — 이 아수라장을 난장이라 불렀고, 그게 오늘의 난장판
    id: "s7", start: 36.64, dur: 5.27, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 74, bottom: 560, w: 400, expr: "proud", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S8 아웃트로
    id: "s8", start: 41.46, dur: 6.54, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 48.0;
