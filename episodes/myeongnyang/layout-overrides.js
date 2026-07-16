// 레이아웃 오프셋(위치/크기) — studio-layout.html에서 생성. 비면 원본 그대로.
// EP.8 명량 — S6.5 인간 조정 회수분(2026-07-16). s1 판옥선 장대 누각을 갑판 쪽으로 내림.
var LAYOUT_OVERRIDES = {
  "s1-ship": { dx: 0, dy: 0, ox: 320, oy: 921, s: 1 }
};
var OBJECT_OVERRIDES = {
  "s1-ship-tower": { cx: 485, cy: 537.5, dx: 0, dy: 200, s: 1 },
  "s1-ship-tower-posts": { cx: 486, cy: 548.5, dx: 0, dy: 3, s: 1 },
  "s1-ship-tower-rail": { cx: 485, cy: 346, dx: 0, dy: 0, s: 1 }
};
var ADDED_PROPS = {};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; window.ADDED_PROPS = ADDED_PROPS; }
