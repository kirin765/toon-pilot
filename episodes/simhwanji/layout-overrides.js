// 레이아웃 오프셋(위치/크기) — studio-layout.html에서 생성. 비면 원본 그대로.
// EP.17 심환지 후일담 — S6.5 인간 조정 회수분(2026-07-24).
//   s4-hills 아래로, s5-screen 좌·하, s5-blind 좌·하 이동. (s1-case·s1-box는 이동 0이라 제외)
var LAYOUT_OVERRIDES = {
  "s4-hills": { dx: 0, dy: 222, s: 1, ox: 540, oy: 670 },
  "s5-screen": { dx: -127, dy: 114, s: 1, ox: 670, oy: 724.5 },
  "s5-blind": { dx: -30, dy: 79, s: 1, ox: 937, oy: 910 }
};
var OBJECT_OVERRIDES = {};
var ADDED_PROPS = {};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; window.ADDED_PROPS = ADDED_PROPS; }
