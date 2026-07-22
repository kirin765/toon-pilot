// Director scene script — EP.15 신문고 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅(기존 6종 변주):
//   백성 = militia noHat + 서민 베이지(s2 하소연자, s5 격쟁자)
//   양반 = militia 갓 + 남색 도포 (s3 — 실제 이용층)
//   태종 = king 홍룡포 (s4 — 설치 교서, 역설)
//   host = 아웃트로(s6)
//   신문고(북)는 s1(주 소품)·s3·s4(배경) 재등장.
// 씬 경계 = S5 문장 테이블(6문장 → 6씬). 리드 0.30s.
//
// ⚠ S3 팩트체크/적대적 검증 이월 제약 (factcheck.md):
//   1. 3단계(수령→관찰사→사헌부)는 **외방(지방) 루트** — 스탬프는 화살표로만, "한양 양반도 이 3단"이라 단정 금지.
//   2. s4 "북 하나로 좁혀" — "죄다 틀어막았다" 표현 폐기(신문고는 왕 전달 창구이기도). 스탬프 「非其越訴, 乃許擊鼓」.
//   3. s5 격쟁은 **후대(16C~)** 전개 — "훗날 유명무실해지자"로 시대 명시. 태종~문종대엔 오히려 격쟁 금지였음.
//   4. 엽전 금지(화폐 유통 실패기) — 문서/두루마리로. 담뱃대·비녀 돌기 금지(rig 확립).
//   5. 신문고 위치는 "대궐 문"으로만(의금부 당직청 앞은 1차 사료 미확정). 스탬프 「申聞鼓」.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var MIN  = { shirt: "#c9b78f", pants: "#7a6a52" };  // 백성 — 서민 베이지 마 + 무명 바지
var YB   = { shirt: "#3a5a7a", pants: "#2b3444" };  // 양반 — 남색 도포
var KING = { shirt: "#b0392b", pants: "#7a2a1f" };  // 태종 — 홍룡포

var SCENES = [
  {
    // S1 훅 — "억울하면 누구든 두드리라던 북, 신문고. 그런데 아무나 칠 순 없었습니다."
    // 대궐 문루 아래 매달린 큰 북(신문고). 스탬프 「申聞鼓」(2.9) → 반전 "정말 아무나?"(4.6). 무인.
    id: "s1", start: 0, dur: 7.56, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S2 — "고을 수령과 관찰사, 사헌부까지 다 거치고도 안 풀려야 겨우 북 앞에 설 수 있었으니까요."
    // 낮 관아: 동헌 + 백성(소지 든). 3단계 화살표 스탬프 守令→監司→司憲府→擊鼓 (7.8/8.5/9.6/10.6).
    id: "s2", start: 7.11, dur: 7.72, talker: null,
    chars: [
      { id: "s2-min", variant: "militia", noHat: true, shirt: MIN.shirt, pants: MIN.pants, x: 20, bottom: 560, w: 380, expr: "shocked", pose: "raised" },
    ],
    changes: [],
  },
  {
    // S3 — "그러니 북을 울린 건 대개 한양의 양반이었고, 내용도 노비와 재산 다툼이 태반이었습니다."
    // 대궐 앞 신문고(우) + 양반(좌, 갓). 노비/재산 문서 더미. 스탬프 「奴婢·刑獄·財産」(18.8).
    id: "s3", start: 14.38, dur: 7.33, talker: null,
    chars: [
      { id: "s3-yb", variant: "militia", shirt: YB.shirt, pants: YB.pants, x: 27, bottom: 560, w: 400, expr: "proud", pose: "point" },
    ],
    changes: [],
  },
  {
    // S4 — "억울함을 들어준다면서도, 임금 앞에 곧장 나서는 길은 이 북 하나로 좁혀 놓았으니까요."
    // 어전 느낌: 태종 king(교서) + 배경 신문고 + 홍살문(빗장). 스탬프 「非其越訴, 乃許擊鼓」(26.2).
    id: "s4", start: 21.26, dur: 7.19, talker: null,
    chars: [
      { id: "s4-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 30, bottom: 560, w: 420, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 26.2, char: "s4-king", expr: "proud" },
    ],
  },
  {
    // S5 — "훗날 신문고마저 유명무실해지자, 억울한 백성은 임금이 지나는 길을 막고 징을 울렸습니다."
    // 임금 행차(royal 가마) + 백성이 징을 침. 스탬프 「擊錚」(34.6). 유명무실 = 배경 낡은 북.
    id: "s5", start: 28.00, dur: 8.41, talker: null,
    chars: [
      { id: "s5-min", variant: "militia", noHat: true, shirt: MIN.shirt, pants: MIN.pants, x: 34, bottom: 600, w: 390, expr: "angry", pose: "raised" },
    ],
    changes: [
      { at: 34.5, char: "s5-min", expr: "shocked" },
    ],
  },
  {
    // S6 아웃트로
    id: "s6", start: 35.96, dur: 8.04, talker: "s6-host",
    chars: [
      { id: "s6-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 44.0;
