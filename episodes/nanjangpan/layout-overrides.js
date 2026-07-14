// 레이아웃 오프셋(위치/크기) — studio-layout.html에서 생성. 비면 원본 그대로.
// EP.6 난장판 · S6.5 인간 조정 회수 (2026-07-15).
// 조정 3건 = 차일 천을 세 씬 모두 상향(초안이 일관되게 낮게 달았음). 항등 변환 8건은 회수 시 제거.
var LAYOUT_OVERRIDES = {
  "s1-canopy-fabric": { "dx": 0, "dy": -61, "s": 1, "ox": 540, "oy": 710 },
  "s3-canopy": { "dx": 0, "dy": -92, "s": 1, "ox": 540, "oy": 670 },
  "s5-canopy": { "dx": 0, "dy": -76, "s": 1, "ox": 540, "oy": 640 }
};
var OBJECT_OVERRIDES = {};
var ADDED_PROPS = {};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; window.ADDED_PROPS = ADDED_PROPS; }
