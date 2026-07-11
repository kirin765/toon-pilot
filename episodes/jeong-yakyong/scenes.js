// Director scene script — the "LLM-writable" layer. EP.3 정약용 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, entrance? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// Casting reuses the 4 rig variants only. 정약용은 문신(선비) — militia(갓+도포)로 고정,
// 관직기(청단령 남색) → 유배기(백의 베이지)로 의상색만 전환해 처지 변화를 표현.
// 정조는 king 변주(곤룡포 적색 — EP.2 세종과 동일 팔레트, 시대만 다름).
var TRANSITION = 0.45;

var JY_OFFICIAL = { shirt: "#3f6d8e", pants: "#24435c" }; // 관직기 — 청단령 남색
var JY_EXILE = { shirt: "#e3d8c0", pants: "#6f5c43" };    // 유배기 — 백의 베이지

var SCENES = [
  {
    id: "s1", start: 0, dur: 5.80, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: "#d94f37", pants: "#1f2d45", x: 50, bottom: 560, w: 440, expr: "neutral", pose: "point" },
    ],
    changes: [],
  },
  {
    id: "s2", start: 5.35, dur: 7.25, talker: "s2-jy",
    chars: [
      { id: "s2-jy", variant: "militia", shirt: JY_OFFICIAL.shirt, pants: JY_OFFICIAL.pants, x: 72, bottom: 640, w: 360, expr: "happy", pose: "point", flip: true },
      { id: "s2-king", variant: "king", shirt: "#c0392b", pants: "#7c1d12", x: 28, bottom: 660, w: 420, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 10.43, char: "s2-king", expr: "proud", pose: "raised" },
    ],
  },
  {
    id: "s3", start: 12.15, dur: 6.45, talker: "s3-jy",
    chars: [
      { id: "s3-jy", variant: "militia", shirt: JY_EXILE.shirt, pants: JY_EXILE.pants, x: 40, bottom: 660, w: 420, expr: "shocked", pose: "raised" },
    ],
    changes: [
      { at: 16.9, char: "s3-jy", expr: "neutral", pose: "down" },
    ],
  },
  {
    id: "s4", start: 18.15, dur: 5.35, talker: "s4-jy",
    chars: [
      { id: "s4-jy", variant: "militia", shirt: JY_EXILE.shirt, pants: JY_EXILE.pants, x: 34, bottom: 640, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 21.15, char: "s4-jy", expr: "shocked", pose: "shrug" },
    ],
  },
  {
    id: "s5", start: 23.05, dur: 4.10, talker: "s5-jy",
    chars: [
      { id: "s5-jy", variant: "militia", shirt: JY_EXILE.shirt, pants: JY_EXILE.pants, x: 62, bottom: 640, w: 420, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 25.16, char: "s5-jy", expr: "proud", pose: "raised" },
    ],
  },
  {
    id: "s6", start: 26.7, dur: 6.75, talker: "s6-jy",
    chars: [
      { id: "s6-jy", variant: "militia", shirt: JY_EXILE.shirt, pants: JY_EXILE.pants, x: 30, bottom: 660, w: 380, expr: "proud", pose: "point" },
    ],
    changes: [
      { at: 31.18, char: "s6-jy", expr: "happy" },
    ],
  },
  {
    id: "s7", start: 33.0, dur: 5.35, talker: "s7-jy",
    chars: [
      { id: "s7-jy", variant: "militia", shirt: JY_EXILE.shirt, pants: JY_EXILE.pants, x: 50, bottom: 620, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 36.83, char: "s7-jy", expr: "happy" },
    ],
  },
  {
    id: "s8", start: 37.9, dur: 5.60, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: "#d94f37", pants: "#1f2d45", x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 43.5;
