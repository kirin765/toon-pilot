// 사람이 튜너(studio-layout.html)로 조정한 좌표·크기. 에피소드마다 리셋한다.
// EP.29 효종의 침 한 방 — S6.5 회수분(2026-08-07). 유효 키 필터 통과, stale 0건.
// 경향: 캐릭터 대부분을 dy +35~73으로 내렸다(LLM 초안이 인물을 높게 찍는 편향).
//       s3 성곽 원경은 s 1.75로 키우고 dy +99로 내려 지평에 앉혔다.
var LAYOUT_OVERRIDES = {
  "s1-king":       { "dx": 0, "dy": 73, "s": 1, "ox": 324, "oy": 1068 },
  "s1-gagwi":      { "dx": 0, "dy": 58, "s": 1, "ox": 799.1875, "oy": 1102 },
  "s2-king":       { "dx": 0, "dy": 72, "s": 1, "ox": 356.390625, "oy": 1062 },
  "s2-huseong":    { "dx": 0, "dy": 62, "s": 1, "ox": 831.59375, "oy": 1112 },
  "s3-fort":       { "dx": 0, "dy": 99, "s": 1.75, "ox": 540, "oy": 495, "r": 0 },
  "s3-sky":        { "dx": 0, "dy": 0, "s": 1, "ox": 540, "oy": 600 },
  "s5-huseong":    { "dx": 0, "dy": 59, "s": 1, "ox": 334.796875, "oy": 1072 },
  "s5-gagwi":      { "dx": 0, "dy": 64, "s": 1, "ox": 820.796875, "oy": 1098 },
  "s6-king":       { "dx": 0, "dy": 48, "s": 1, "ox": 334.796875, "oy": 1062 },
  "s6-seja":       { "dx": 0, "dy": 47, "s": 1, "ox": 810, "oy": 1120 },
  "s7-king":       { "dx": 0, "dy": 49, "s": 1, "ox": 334.796875, "oy": 1062 },
  "s7-gagwi":      { "dx": 0, "dy": 35, "s": 1, "ox": 820.796875, "oy": 1106 },
  "s8-king":       { "dx": 0, "dy": 69, "s": 1, "ox": 334.796875, "oy": 1062 },
  "s8-gagwi":      { "dx": 0, "dy": 51, "s": 1, "ox": 820.796875, "oy": 1106 },
  "s10-king":      { "dx": 0, "dy": 55, "s": 1, "ox": 820.796875, "oy": 1092 },
  "s10-gagwi":     { "dx": 0, "dy": 55, "s": 1, "ox": 356.390625, "oy": 1066 },
  "s11-gagwi":     { "dx": 0, "dy": 59, "s": 1, "ox": 324, "oy": 1100 },
  "s11-najol":     { "dx": 0, "dy": 56, "s": 1, "ox": 799.1875, "oy": 1126 },
  "s12-hyeonjong": { "dx": 0, "dy": -21, "s": 1, "ox": 540, "oy": 1080 }
};
var OBJECT_OVERRIDES = {};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; }
