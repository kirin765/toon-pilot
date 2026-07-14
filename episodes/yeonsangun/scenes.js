// Director scene script — the "LLM-writable" layer. EP.5 연산군 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?/skirt?, x(%), bottom(px), w(px), expr, pose, flip?, royal?, noHat? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// 연산군 = king(대홍 곤룡포) S1~S5 → 폐위 후 militia+noHat(무채색 평복)으로 전환(지뢰 #11 규칙).
// 흥청 = lady 기녀 색변주. 신하 = militia(갓+남색 관복). 죄인 = militia noHat 백의. 나졸 = admiral.
var TRANSITION = 0.45;

var YS_KING = { shirt: "#b83227", pants: "#7a1e18" };   // 연산군 곤룡포 — 대홍(EP.4 광해군 심홍과 구분)
var YS_EXILE = { shirt: "#8a8578", pants: "#4a4740" };  // 폐위 후 평복 — 무채색 회갈
var HEUNG1 = { shirt: "#3a9b8f", skirt: "#c73a3a" };    // 흥청 기녀 — 옥색 저고리+다홍 치마
var HEUNG2 = { shirt: "#e0a93a", skirt: "#7a4a9c" };    // 흥청 기녀 — 노랑 저고리+자주 치마
var SINHA = { shirt: "#2f3d5c", pants: "#1e2740" };     // 신하 관복 — 남색 단령
var JOEIN = { shirt: "#f6efe3", pants: "#d9d0be" };     // 죄인 백의
var NAJOL = { shirt: "#4a5568", pants: "#262f3a" };     // 나졸 어두운 군복
var HOST = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "흥청망청" 향락 (술상 + 흥청)
    id: "s1", start: 0, dur: 6.10, talker: "s1-king",
    chars: [
      { id: "s1-king", variant: "king", shirt: YS_KING.shirt, pants: YS_KING.pants, x: 30, bottom: 600, w: 400, expr: "happy", pose: "raised" },
      { id: "s1-heung", variant: "lady", shirt: HEUNG1.shirt, skirt: HEUNG1.skirt, x: 71, bottom: 600, w: 360, expr: "happy", pose: "raised", flip: true },
    ],
    changes: [
      { at: 2.3, char: "s1-king", expr: "proud" },
    ],
  },
  {
    // S2 — 어머니 폐비 윤씨의 사약을 뒤늦게 앎 (사약 소반)
    id: "s2", start: 5.65, dur: 7.41, talker: "s2-king",
    chars: [
      { id: "s2-king", variant: "king", shirt: YS_KING.shirt, pants: YS_KING.pants, x: 64, bottom: 600, w: 410, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 9.5, char: "s2-king", expr: "shocked", pose: "raised" },
    ],
  },
  {
    // S3 — 갑자사화 복수 숙청 (국문장: 형틀+의금부+곤장)
    id: "s3", start: 12.61, dur: 6.01, talker: "s3-king",
    chars: [
      { id: "s3-najol", variant: "admiral", shirt: NAJOL.shirt, pants: NAJOL.pants, x: 15, bottom: 600, w: 360, expr: "angry", pose: "raised" },
      { id: "s3-joein", variant: "militia", noHat: true, shirt: JOEIN.shirt, pants: JOEIN.pants, x: 46, bottom: 640, w: 320, expr: "shocked", pose: "down" },
      { id: "s3-king", variant: "king", shirt: YS_KING.shirt, pants: YS_KING.pants, x: 80, bottom: 610, w: 360, expr: "angry", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S4 — 흥청 1만 명, 궁궐을 놀이터로 (술상 + 흥청 다수)
    id: "s4", start: 18.17, dur: 7.01, talker: "s4-king",
    chars: [
      { id: "s4-king", variant: "king", shirt: YS_KING.shirt, pants: YS_KING.pants, x: 28, bottom: 610, w: 400, expr: "proud", pose: "raised" },
      { id: "s4-heung1", variant: "lady", shirt: HEUNG1.shirt, skirt: HEUNG1.skirt, x: 60, bottom: 600, w: 340, expr: "happy", pose: "raised", flip: true },
      { id: "s4-heung2", variant: "lady", shirt: HEUNG2.shirt, skirt: HEUNG2.skirt, x: 84, bottom: 600, w: 320, expr: "happy", pose: "raised", flip: true },
    ],
    changes: [],
  },
  {
    // S5 — 백성 수군, 반정으로 폐위 (어전: 병풍+어좌, 신하 반발)
    id: "s5", start: 24.73, dur: 6.86, talker: "s5-king",
    chars: [
      { id: "s5-king", variant: "king", shirt: YS_KING.shirt, pants: YS_KING.pants, x: 40, bottom: 600, w: 410, expr: "neutral", pose: "down" },
      { id: "s5-sinha", variant: "militia", shirt: SINHA.shirt, pants: SINHA.pants, x: 77, bottom: 610, w: 360, expr: "angry", pose: "point", flip: true },
    ],
    changes: [
      { at: 28.8, char: "s5-king", expr: "shocked", pose: "raised" },
    ],
  },
  {
    // S6 여운 — 교동 위리안치, 이름은 지워졌지만 말은 남았다 (위리안치)
    id: "s6", start: 31.14, dur: 8.20, talker: "s6-exile",
    chars: [
      { id: "s6-exile", variant: "militia", noHat: true, shirt: YS_EXILE.shirt, pants: YS_EXILE.pants, x: 50, bottom: 600, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [],
  },
  {
    // S7 아웃트로
    id: "s7", start: 38.89, dur: 5.71, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 44.6;
