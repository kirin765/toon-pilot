// 사람이 튜너(studio-layout.html)로 조정한 좌표·크기. 에피소드마다 리셋한다.
// EP.30 大丘 → 大邱 — S6.5 회수분(2026-08-08). 유효 키 필터로 stale 1건(`s1-yun`, EP.25 윤구연) 제거.
//   ⚠ stale 키가 섞여 나왔다 = 튜너 localStorage가 비워지지 않았다는 증거(지뢰 #17).
//     다행히 EP.29 키(s1-king·s2-huseong…)와 이 편의 키(yusaeng·pangwan·yeongjo…)는 이름이 겹치지 않아 오염은 그 1건뿐.
// 경향: 인물 대부분을 dy +37~61로 내렸다(초안이 인물을 높게 찍는 편향, ART-RULES §2-5).
//       예외는 **영조**(s6 −33 / s8 −17) — 어좌를 1.7배로 키운 뒤라 왕을 올려야 어좌 앞에 '앉는 자리'로 정렬된다.
var LAYOUT_OVERRIDES = {
  "s3-pangwan":   { "dx": 0, "dy": 61,  "s": 1, "ox": 216, "oy": 1068 },
  "s3-yusaeng":   { "dx": 0, "dy": 54,  "s": 1, "ox": 885.59375, "oy": 1110 },
  "s5-iyangchae": { "dx": 0, "dy": 40,  "s": 1, "ox": 432, "oy": 1076 },
  "s6-yeongjo":   { "dx": 0, "dy": -33, "s": 1, "ox": 518.390625, "oy": 1062 },
  "s6-seungji":   { "dx": 0, "dy": 47,  "s": 1, "ox": 885.59375, "oy": 1104 },
  "s8-yeongjo":   { "dx": 0, "dy": -17, "s": 1, "ox": 518.390625, "oy": 1056 },
  "s8-seungji":   { "dx": 0, "dy": 17,  "s": 1, "ox": 896.390625, "oy": 1110 },
  "s11-sagwan":   { "dx": 0, "dy": 37,  "s": 1, "ox": 183.59375, "oy": 1114 }
};
var OBJECT_OVERRIDES = {};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; }
