// Director scene script — EP.20 문종화차 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅(기존 6종 변주 — 신규 variant 없음):
//   문종(왕)     = king 홍룡포 (EP.16·17 KING 색 동일 — 왕=홍색, EP.12 세자 시절 흑남색과 구분)
//   임영대군     = militia 갓 + 청록 도포 (왕의 동생 — 정체는 chip 「동생 임영대군」이 전달)
//   포수/관원    = admiral 무관(전립, s1 점화수) / militia 회청 관복(s5)
//   host         = 아웃트로(s7)
//
// 씬 경계 = S5 문장 테이블(7문장 → 6씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크·적대검증 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. "최초 발명" 프레임 금지 — 화차 최초는 1409 최해산. 화면·스탬프 전부 "새 화차/설계"까지만.
//   2. 700여 대는 실록 단정 금지 → num-pop 출처를 「우리역사넷」으로 명기.
//   3. 로켓 병기 기록 스탬프는 민백 한정형 그대로: "세계에서 가장 자세하고 오래된 로켓 병기 기록".
//   4. MLRS·현대 무기 비교 금지. 「其制度, 皆上所指授」·「宜當無事時, 分授各司, 令轉輸雜物」는
//      직접 대조 완료된 원문만 스탬프에 사용.
//   5. 측우기=세자 시절(1441) / 화차=즉위 후(1451) 시점 분리 — s2 스탬프에 "세자 시절" 명기.
//
// ⚠ 시그니처 표 준수 메모:
//   · 화차 = sp10 검증 자산(벌집 격자 발사대 + 신기전 + 2륜 수레). 발사 화염·비행 신기전이 "짐칸" 오독 차단.
//   · 신기전 비행은 y드리프트만(세로 캔버스 x슬라이드 금지 — 지뢰 #40).
//   · 실록 글줄 = 짧은 획 끊어 쌓기(지뢰 #46). EP.12 책의 긴 막대+눈금은 재작화해서 재사용.
//   · 측우기 = EP.12 재작화본(짧고 굵은 개방 청동 그릇 + 측우대, 지뢰 #36) 그대로.
//   · 가마니 = 통통한 라운드 사각 + 짚결 스트로크 + 묶음 끈(보따리 단독 배치 금지 규칙 회피 — 수레 위 적재).
//   · s6 황혼 화차는 완전 실루엣 금지(격자 사라지면 투석기 오독) — 어둡게 톤다운하되 격자·바퀴 유지,
//     배경 노을 밴드와 명도 대비 확보.
//   · 원형 글로우 금지 — 노을은 가로로 넓은 저채도 타원 띠(지뢰 #47).
var TRANSITION = 0.45;

var HOST  = { shirt: "#d94f37", pants: "#1f2d45" };
var KING  = { shirt: "#c0392b", pants: "#7c1d12" };  // 문종 — 홍룡포 (EP.16·17 동일)
var IY    = { shirt: "#2e6a6a", pants: "#234a4a" };  // 임영대군 — 청록 도포
var GUNR  = { shirt: "#4a5568", pants: "#262f3a" };  // 포수 — 무관 (sp10 동일)
var OFF   = { shirt: "#55606e", pants: "#3a424c" };  // 관원 — 회청 관복 (EP.19 동일)

var SCENES = [
  {
    // S1 훅 — "불을 붙이면 로켓 백 발이 차례로 날아가는 수레, 설계자는 조선의 임금이었습니다."
    // 벌판 화차 발사(sp10 앙상블 재사용: 화차+발사 화염+비행 신기전+총통+포수).
    // 스탬프 「화차 火車」, num-pop 「100발」.
    id: "s1", start: 0, dur: 7.49, talker: null,
    chars: [
      { id: "s1-gunner", variant: "admiral", shirt: GUNR.shirt, pants: GUNR.pants, x: 62, bottom: 575, w: 330, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 3.6, char: "s1-gunner", expr: "proud" },
    ],
  },
  {
    // S2 — "세자 시절 측우기를 고안했던 그 사람, 문종인데요."
    // 궁궐 담 앞: 측우기(EP.12 재작화본) + 문종(홍룡포)이 가리킴. EP.12 시리즈 콜백.
    // 스탬프 「측우기 測雨器 — 세자 시절 고안(1441)」.
    id: "s2", start: 7.04, dur: 5.33, talker: "s2-king",
    chars: [
      { id: "s2-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 68, bottom: 560, w: 420, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 9.9, char: "s2-king", expr: "proud" },
    ],
  },
  {
    // S3 — "즉위 이듬해, 동생 임영대군에게 새 화차를 만들게 했습니다."
    // 궁 마당: 문종(point) → 미완성 화차(발사틀 없는 수레 골격 — s4 완성형과 대비) ← 임영대군(flip).
    // chip 「동생 임영대군」.
    id: "s3", start: 11.92, dur: 5.79, talker: "s3-king",
    chars: [
      { id: "s3-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 22, bottom: 560, w: 400, expr: "neutral", pose: "point" },
      { id: "s3-iy", variant: "militia", shirt: IY.shirt, pants: IY.pants, x: 80, bottom: 560, w: 360, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 14.8, char: "s3-iy", expr: "proud", pose: "raised" },
    ],
  },
  {
    // S4 — "발사틀에 신기전이 백 개, 실록은 적었죠. 그 제도는 모두 임금이 직접 일러 준 것이었다."
    // 완성 화차(장전 상태, 발사 전) + 서안 위 펼친 실록(글줄=획 스택 재작화).
    // 스탬프 「其制度, 皆上所指授」 small "그 제도는 모두 임금이 직접 일러 준 것이었다 — 문종실록 1451".
    id: "s4", start: 17.26, dur: 7.89, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S5 — "지시는 하나 더 있었는데요, 평소엔 이 수레로 관청 짐을 나르라."
    // 관아 앞(EP.19 동헌 재사용 — 관청이라 단청 허용): 화차 수레에 가마니 적재 + 관원이 뒤에서 민다.
    // num-pop 「700여 대」 small "1451년 한 해 제작 — 우리역사넷", 스탬프 「宜當無事時, 分授各司, 令轉輸雜物」.
    id: "s5", start: 24.7, dur: 7.35, talker: null,
    chars: [
      { id: "s5-off", variant: "militia", shirt: OFF.shirt, pants: OFF.pants, x: 66, bottom: 560, w: 330, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 28.5, char: "s5-off", expr: "happy" },
    ],
  },
  {
    // S6 여운 — "이듬해 문종은 서른아홉으로 세상을 떠났습니다. 병약했다고만 기억되는 왕의 손에서, 조선의 로켓 수레가 나왔죠."
    // 황혼: 노을 띠 + 별 + 능선 실루엣 + 톤다운 화차 + 하늘로 오르는 신기전 한 발.
    // num-pop 「39」 small "文宗 1414–1452", 후반 스탬프 = 민백 한정형 로켓 기록.
    id: "s6", start: 31.6, dur: 9.98, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S7 아웃트로
    id: "s7", start: 41.13, dur: 5.97, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
