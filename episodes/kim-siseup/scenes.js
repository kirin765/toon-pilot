// Director scene script — the "LLM-writable" layer. EP.2 김시습 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, entrance? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// Casting reuses the 4 rig variants only. 김시습은 평생 militia(평민/선비) 그대로 —
// 장영실과 달리 벼슬에 오르지 않으므로 admiral(관료) 변주로 스왑하지 않는다.
// 소년기~청년기(밝은 베이지) → 승려기(무채색 회색)로 의상색만 전환해 신분/처지 변화를 표현.
var TRANSITION = 0.45;

var KS_YOUTH = { shirt: "#e3d8c0", pants: "#6f5c43" };  // 소년~청년(과거 전 상태) 베이지
var KS_MONK = { shirt: "#8a8478", pants: "#4a463d" };   // 삭발 후 승려 — 무채색 회색

var SCENES = [
  {
    id: "s1", start: 0, dur: 5.20, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: "#d94f37", pants: "#1f2d45", x: 50, bottom: 560, w: 440, expr: "neutral", pose: "point" },
    ],
    changes: [],
  },
  {
    id: "s2", start: 4.75, dur: 5.55, talker: "s2-ks",
    chars: [
      { id: "s2-ks", variant: "militia", shirt: KS_YOUTH.shirt, pants: KS_YOUTH.pants, x: 68, bottom: 640, w: 360, expr: "neutral", pose: "point", flip: true },
      { id: "s2-king", variant: "king", shirt: "#c0392b", pants: "#7c1d12", x: 30, bottom: 660, w: 420, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 7.36, char: "s2-king", expr: "proud", pose: "raised" },
    ],
  },
  {
    id: "s3", start: 9.85, dur: 6.35, talker: "s3-ks",
    chars: [
      { id: "s3-ks", variant: "militia", shirt: KS_YOUTH.shirt, pants: KS_YOUTH.pants, x: 50, bottom: 660, w: 420, expr: "shocked", pose: "raised" },
    ],
    changes: [
      { at: 13.07, char: "s3-ks", expr: "angry", pose: "down" },
    ],
  },
  {
    id: "s4", start: 15.75, dur: 5.87, talker: "s4-ks",
    chars: [
      { id: "s4-ks", variant: "militia", noHat: true, shirt: KS_MONK.shirt, pants: KS_MONK.pants, x: 62, bottom: 640, w: 400, expr: "angry", pose: "down" },
    ],
    changes: [
      { at: 19.64, char: "s4-ks", expr: "neutral", pose: "shrug" },
    ],
  },
  {
    id: "s5", start: 21.17, dur: 6.66, talker: "s5-ks",
    chars: [
      { id: "s5-ks", variant: "militia", noHat: true, shirt: KS_MONK.shirt, pants: KS_MONK.pants, x: 32, bottom: 660, w: 400, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 24.98, char: "s5-ks", expr: "proud" },
    ],
  },
  {
    id: "s6", start: 27.38, dur: 6.76, talker: "s6-ks",
    chars: [
      { id: "s6-ks", variant: "militia", noHat: true, shirt: KS_MONK.shirt, pants: KS_MONK.pants, x: 50, bottom: 660, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 31.27, char: "s6-ks", expr: "happy" },
    ],
  },
  {
    id: "s7", start: 33.69, dur: 7.51, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: "#d94f37", pants: "#1f2d45", x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 41.2;
