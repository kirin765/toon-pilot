// Layout overrides — EP.18 관노비 출산휴가. S6.5 인간 튜너 회수분(2026-07-24).
// 회전 기능 신설분 포함: 아기 머리 3종 회전(r), 우물 밧줄·두레박 확대.
var LAYOUT_OVERRIDES = {
  "s1-crib": { dx: 0, dy: -1, s: 1, ox: 655, oy: 1235 },
  "s2-well": { dx: 0, dy: 0, s: 1, ox: 305, oy: 1080 },
  "s3-crib": { dx: 15, dy: -28, s: 1, ox: 595, oy: 1289 },
  "s5-crib": { dx: 0, dy: 0, s: 1, ox: 540, oy: 1224 }
};
var OBJECT_OVERRIDES = {
  "s1-baby-head": { dx: 12, dy: 7, s: 1, cx: 114.36, cy: 137, r: -71 },
  "s2-well-rope": { dx: 0, dy: 0, s: 1.2, cx: 235, cy: 210 },
  "s2-well-bucket": { dx: 0, dy: 0, s: 1.31, cx: 273, cy: 238.5 },
  "s3-baby-head": { dx: 19, dy: 8, s: 1, cx: 74.59, cy: 81.5, r: -75 },
  "s5-baby-head": { dx: 7, dy: 11, s: 1.03, cx: 81.61, cy: 126.5, r: -75 }
};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; }
