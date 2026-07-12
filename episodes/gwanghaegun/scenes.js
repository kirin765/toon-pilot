// Director scene script — the "LLM-writable" layer. EP.4 광해군 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, entrance? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// Casting reuses the 4 rig variants only. 광해군 = king(곤룡포, 심홍색) → 폐위 후
// militia+noHat(무채색 평복)으로 전환해 "왕관을 잃음"을 시각화(지뢰 #11 규칙).
// 강홍립(도원수)은 admiral 변주로 1회 등장.
var TRANSITION = 0.45;

var GH_KING = { shirt: "#9c2b3c", pants: "#4f1520" };   // 곤룡포 — 심홍색(EP.3 정조의 주황빛 적색과 구분)
var GH_EXILE = { shirt: "#7c7a6e", pants: "#45423a" };  // 폐위 후 평복 — 무채색 회갈
var GEN_KH = { shirt: "#4a5568", pants: "#262f3a" };    // 강홍립 — 두정갑 강청색
var HOST = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    id: "s1", start: 0, dur: 5.73, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 50, bottom: 560, w: 440, expr: "neutral", pose: "point" },
    ],
    changes: [],
  },
  {
    id: "s2", start: 5.28, dur: 5.36, talker: "s2-king",
    chars: [
      { id: "s2-king", variant: "king", shirt: GH_KING.shirt, pants: GH_KING.pants, x: 30, bottom: 660, w: 380, expr: "neutral", pose: "point" },
      { id: "s2-general", variant: "admiral", shirt: GEN_KH.shirt, pants: GEN_KH.pants, x: 74, bottom: 630, w: 340, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 9.0, char: "s2-king", pose: "raised" },
    ],
  },
  {
    id: "s3", start: 10.19, dur: 5.93, talker: "s3-king",
    chars: [
      { id: "s3-king", variant: "king", shirt: GH_KING.shirt, pants: GH_KING.pants, x: 50, bottom: 640, w: 420, expr: "angry", pose: "shrug" },
    ],
    changes: [
      { at: 13.6, char: "s3-king", expr: "neutral", pose: "down" },
    ],
  },
  {
    id: "s4", start: 15.67, dur: 6.17, talker: "s4-king",
    chars: [
      { id: "s4-king", variant: "king", shirt: GH_KING.shirt, pants: GH_KING.pants, x: 50, bottom: 660, w: 400, expr: "neutral", pose: "shrug" },
    ],
    changes: [],
  },
  {
    id: "s5", start: 21.39, dur: 5.33, talker: "s5-king",
    chars: [
      { id: "s5-king", variant: "king", shirt: GH_KING.shirt, pants: GH_KING.pants, x: 50, bottom: 640, w: 410, expr: "angry", pose: "down" },
    ],
    changes: [
      { at: 24.53, char: "s5-king", expr: "shocked" },
    ],
  },
  {
    id: "s6", start: 26.27, dur: 5.45, talker: "s6-exile",
    chars: [
      { id: "s6-exile", variant: "militia", noHat: true, shirt: GH_EXILE.shirt, pants: GH_EXILE.pants, x: 50, bottom: 640, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 29.33, char: "s6-exile", expr: "shocked" },
    ],
  },
  {
    id: "s7", start: 31.27, dur: 5.56, talker: "s7-exile",
    chars: [
      { id: "s7-exile", variant: "militia", noHat: true, shirt: GH_EXILE.shirt, pants: GH_EXILE.pants, x: 64, bottom: 620, w: 400, expr: "neutral", pose: "shrug" },
    ],
    changes: [],
  },
  {
    id: "s8", start: 36.38, dur: 5.72, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 42.1;
