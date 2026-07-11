// 레이아웃 오프셋(위치/크기) — studio-layout.html에서 생성. 비면 원본 그대로.
var LAYOUT_OVERRIDES = {
  "s2-fortress": {
    "dx": 0,
    "dy": 0,
    "ox": 540,
    "oy": 1180,
    "s": 1
  },
  "s2-geojunggi": {
    "dx": 7,
    "dy": -500,
    "ox": 540,
    "oy": 1200,
    "s": 2.5
  }
};
var OBJECT_OVERRIDES = {};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; }
