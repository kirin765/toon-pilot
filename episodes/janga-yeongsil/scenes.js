// Director scene script — the "LLM-writable" layer. EP.1 장영실 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, entrance? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// Casting reuses the 4 rig variants only. 장영실 rises commoner(militia)→official(admiral)
// across scenes — the variant swap mirrors his status change on purpose.
var TRANSITION = 0.45;

var YA_COMMON = { shirt: "#e3d8c0", pants: "#6f5c43" };   // 노비/평민 도포 (베이지)
var YA_SCHOLAR = { shirt: "#4a6a8a", pants: "#2f4258" };  // 궁 발탁 후 (청색)
var YA_OFFICIAL = { shirt: "#3a4a6a", pants: "#26314a" }; // 대호군 (남색 관복)

var SCENES = [
  {
    id: "s1", start: 0, dur: 4.55 + TRANSITION, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: "#d94f37", pants: "#1f2d45", x: 50, bottom: 560, w: 440, expr: "neutral", pose: "point" },
    ],
    changes: [],
  },
  {
    id: "s2", start: 4.55, dur: 5.79 + TRANSITION, talker: "s2-ya",
    chars: [
      { id: "s2-ya", variant: "militia", shirt: YA_COMMON.shirt, pants: YA_COMMON.pants, x: 50, bottom: 660, w: 420, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 7.6, char: "s2-ya", expr: "proud", pose: "point" },
    ],
  },
  {
    id: "s3", start: 10.34, dur: 4.42 + TRANSITION, talker: "s3-king",
    chars: [
      { id: "s3-king", variant: "king", shirt: "#c0392b", pants: "#7c1d12", x: 34, bottom: 660, w: 420, expr: "neutral", pose: "point" },
      { id: "s3-ya", variant: "militia", shirt: YA_COMMON.shirt, pants: YA_COMMON.pants, x: 72, bottom: 650, w: 360, expr: "happy", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    id: "s4", start: 14.76, dur: 6.12 + TRANSITION, talker: "s4-ya",
    chars: [
      { id: "s4-ya", variant: "militia", shirt: YA_SCHOLAR.shirt, pants: YA_SCHOLAR.pants, x: 74, bottom: 640, w: 380, expr: "proud", pose: "point" },
    ],
    changes: [
      { at: 18.83, char: "s4-ya", expr: "happy" },
    ],
  },
  {
    id: "s5", start: 20.88, dur: 4.39 + TRANSITION, talker: "s5-off",
    chars: [
      { id: "s5-off", variant: "admiral", shirt: YA_OFFICIAL.shirt, pants: YA_OFFICIAL.pants, x: 50, bottom: 640, w: 440, expr: "proud", pose: "raised" },
    ],
    changes: [],
  },
  {
    id: "s6", start: 25.27, dur: 7.04 + TRANSITION, talker: "s6-off",
    chars: [
      { id: "s6-off", variant: "admiral", shirt: YA_OFFICIAL.shirt, pants: YA_OFFICIAL.pants, x: 30, bottom: 660, w: 400, expr: "shocked", pose: "raised" },
    ],
    changes: [
      { at: 29.4, char: "s6-off", expr: "angry", pose: "down" },
    ],
  },
  {
    id: "s7", start: 32.31, dur: 5.99, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: "#d94f37", pants: "#1f2d45", x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 38.3;
