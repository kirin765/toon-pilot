// 사람이 튜너(studio-layout.html)로 조정한 좌표·크기. 에피소드마다 리셋한다.
// EP.31 가체 금지령 — S6.5 회수분(2026-08-09). localStorage 클리어 후 재조정(지뢰 #17),
//   유효 키 필터로 stale 0건 확인(이전 회수에서 EP.28 키 s1-king·s2-huseong… 가 검출 → 폐기하고 재조정).
// 경향: 인물 6명을 dy +38~66로 올렸다 — 가체/족두리 머리가 초안보다 커서 상단 절단 방지용.
var LAYOUT_OVERRIDES = {
  "s1-wife":       { "dx": 0, "dy": 66, "s": 1, "ox": 388.796875,  "oy": 1054 },
  "s4-gungnyeo":   { "dx": 0, "dy": 0,  "s": 1, "ox": 885.59375,   "oy": 1118 },
  "s5-wife":       { "dx": 0, "dy": 54, "s": 1, "ox": 388.796875,  "oy": 1066 },
  "s7-ideokmu":    { "dx": 0, "dy": 55, "s": 1, "ox": 367.1875,    "oy": 1078 },
  "s8-siabeoji":   { "dx": 0, "dy": 55, "s": 1, "ox": 151.203125,  "oy": 1100 },
  "s8-myeoneuri":  { "dx": 0, "dy": 38, "s": 1, "ox": 653.4192962646484, "oy": 1128.8334350585938 }
};
var OBJECT_OVERRIDES = {};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; }
