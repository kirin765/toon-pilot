// Director scene script — EP.19 신주무원록 / 조선의 검시 제도 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, skirt?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅(기존 6종 변주 — 신규 variant 없음):
//   초검관(고을 수령)  = militia 갓 + 남색 관복  (s1/s2/s3)
//   복검관(이웃 수령)  = militia 갓 + 짙은 녹 관복 (s2/s3)
//   대조 관원 / 검시관 = militia 갓 + 회청 관복  (s4/s5/s6)
//   host               = 아웃트로(s8)
//   ⚠ samo(사모+단령) 미사용 — 문관 흉배는 단종 2년(1454) 제도라 조선 전기 씬과 충돌하고,
//     사모 자체가 중국 관모 오독 리스크가 있다. 갓 쓴 militia로 전 씬 통일.
//
// 씬 경계 = S5 문장 테이블(8문장 → 7씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크·적대검증 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. 3행 처벌 근거는 **대명률 436조**(검시관 본인 杖60). 「檢吏 私自宣泄者 嚴刑定配」(대전통편)는
//      처벌 대상이 아전이므로 화면에 쓰지 않는다.
//   2. 4행에 **기관명(형조)을 쓰지 않는다** — 근거 기사는 서울 절차인데 2행이 지방(고을 수령)이라
//      사료 오적용이 된다. 화면도 "따로 올라가 대조"까지만.
//   3. 6행 신분 예외의 출전은 **대전통편(1785)** — s6 스탬프에 출전을 명기해 시대 혼재를 정직하게 드러낸다.
//   4. "조선판 CSI"·"완벽한 과학수사" 프레임 금지 — s5의 논지는 도구가 소박했다는 것이고,
//      화면도 도구를 크고 화려하게 그리지 않는다(소반 위 소박한 법물).
//   5. 삼검·사검까지만. 오검·육검은 화면에도 넣지 않는다(법전 명문 밖).
//   6. 조선 전기~후기를 걸치므로 엽전·상평통보 등 화폐 소품 금지(지뢰 #27), 담뱃대 금지(지뢰 #18).
//
// ⚠ 톤 — 시신 묘사 금지(수익화 리스크). s1의 검시 현장은 **멍석 위 흰 천**으로만 표현하고
//   신체 형태·혈흔·표정을 일절 그리지 않는다. 흰 천은 낮고 단순한 매스 + 접힌 단.
//
// ⚠ 시그니처 표 준수 메모:
//   · 은비녀 = 세로 긴 기물 단독 배치 금지 → s5에서 **소반 위에 눕혀** 배치(끝만 검게).
//   · 옹기(식초·지게미) = 흑갈 유약 + 잘록한 목 + 뚜껑, 단 위 2개 이상 나란히.
//   · 세로쓰기 글줄 = 짧은 글자 획을 끊어 쌓기(지뢰 #46). 긴 통막대+가로눈금 금지.
//   · 세살 창호 = 밝은 창호지 면 + 어두운 살 + 가로 3연 밴드 + 하단 궁판(지뢰 #45). 창 안에 달 금지.
//   · 장(杖) = 세워 들면 창 오독 → s3에서 **낮은 형틀 위에 가로로 눕혀** 배치. 넓적한 곤(棍)은 시대착오.
//   · 사가(양반가)에는 단청 기둥 금지, 기왓골은 경사 따라 세로(지뢰 #28).
//   · 배경 글로우는 원이 아니라 가로로 넓은 저채도 타원 띠(지뢰 #47).
var TRANSITION = 0.45;

var HOST  = { shirt: "#d94f37", pants: "#1f2d45" };
var OFF_A = { shirt: "#3a4a63", pants: "#2b3548" };   // 초검관 — 남색 관복
var OFF_B = { shirt: "#4a5a48", pants: "#333f30" };   // 복검관 — 짙은 녹 관복
var OFF_C = { shirt: "#55606e", pants: "#3a424c" };   // 대조 관원 / 검시관 — 회청 관복

var SCENES = [
  {
    // S1 훅 — "조선에선 살인 사건이 나면, 시신을 두 번 검사했습니다."
    // 고을 관아 마당(아침). 앵커=관아 동헌 + 멍석 위 흰 천(검시 현장) + 돌담.
    // num-pop 「2번」, 스탬프=세종 14년 전지 「檢屍者, 人之死生係焉」.
    id: "s1", start: 0, dur: 5.75, talker: null,
    chars: [
      { id: "s1-off", variant: "militia", shirt: OFF_A.shirt, pants: OFF_A.pants, x: 25, bottom: 560, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 2.6, char: "s1-off", expr: "shocked" },
    ],
  },
  {
    // S2 — "고을 수령이 초검을 하면, 이웃 고을 수령이 복검을 했죠."
    // 두 고을. 좌=초검 고을 관아, 우=복검 고을 관아, 가운데 고갯길+경계 표석.
    // 라벨 2개(초검/복검), 스탬프=세종 24년 「初檢官…在外所在官守令。復檢官…在外隣近守令」.
    id: "s2", start: 5.3, dur: 5.27, talker: null,
    chars: [
      { id: "s2-a", variant: "militia", shirt: OFF_A.shirt, pants: OFF_A.pants, x: 22, bottom: 560, w: 360, expr: "neutral", pose: "point" },
      { id: "s2-b", variant: "militia", shirt: OFF_B.shirt, pants: OFF_B.pants, x: 78, bottom: 560, w: 360, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S3 핵심 — "두 검시관이 만나 입을 맞추면, 곤장 예순 대를 맞았습니다."
    // 밤 담장 뒤 밀담. 두 수령이 마주 섬 + 붉은 금지 X + 형틀 위에 눕힌 곤장.
    // num-pop 「60대」, 스탬프=대명률 436조 「初覆檢官吏相見, 符同屍狀 … 正官杖六十」.
    // ⚠ 형구는 넓적한 곤(棍)이 아니라 가는 장(杖) — 곤은 임진왜란 이후 군문 형구다(S8 고증 🔴).
    // ⚠ 밤 배경(남색)에 담장을 암갈로 두면 실루엣이 사라진다 → 밝은 회백 석축으로 대비 확보.
    id: "s3", start: 10.12, dur: 5.79, talker: null,
    chars: [
      { id: "s3-a", variant: "militia", shirt: OFF_A.shirt, pants: OFF_A.pants, x: 27, bottom: 560, w: 350, expr: "shocked", pose: "shrug", flip: true },
      { id: "s3-b", variant: "militia", shirt: OFF_B.shirt, pants: OFF_B.pants, x: 55, bottom: 560, w: 350, expr: "shocked", pose: "shrug" },
    ],
    changes: [],
  },
  {
    // S4 — "두 기록은 따로 올라가 대조됐고, 어긋나면 삼검, 사검까지 갔고요."
    // 관청 내부. 앵커=낮은 좌식 서안 위 나란히 놓인 두 장의 시장(屍帳) + 등잔 + 세살 창호.
    // .step 화살표 체인(EP.15 문법): 초검 → 복검 → 삼검 → 사검.
    // 스탬프=세종 28년 「詳覆司專掌初復檢狀內同異, 相考施行」. ⚠ 기관명은 화면에도 쓰지 않는다.
    id: "s4", start: 15.46, dur: 6.95, talker: null,
    chars: [
      { id: "s4-off", variant: "militia", shirt: OFF_C.shirt, pants: OFF_C.pants, x: 86, bottom: 560, w: 300, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 18.96, char: "s4-off", expr: "shocked" },
    ],
  },
  {
    // S5 — "정작 도구는 은비녀에 식초 같은 것들이었죠. 믿을 구석은 도구가 아니라 절차였던 겁니다."
    // 관아 마루. 앵커=소반 위 법물(눕힌 은비녀·흰 종이·사발) + 옹기 2개(식초·지게미).
    // 후반(≈26.0s)에 검안 문서 3장이 겹쳐 쌓이며 '절차'로 무게추 이동.
    // 스탬프=「檢屍 法物 — 銀釵·糟·醋·蔥·椒·鹽·白梅」(7종 명기 — '전부'라는 축소 회피).
    id: "s5", start: 21.96, dur: 8.07, talker: null,
    chars: [
      { id: "s5-off", variant: "militia", shirt: OFF_C.shirt, pants: OFF_C.pants, x: 88, bottom: 560, w: 260, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 26.14, char: "s5-off", expr: "proud" },
    ],
  },
  {
    // S6 — "물론 사족 부녀와 고관의 주검은, 검시하지 말라 적혀 있었죠."
    // 저녁. 앵커=양반가 기와집(사가 — 단청 금지·세살창·세로 기왓골) + 돌담 + 닫힌 대문.
    // 검시관이 담 앞에서 발길을 돌린다(shrug). 지면에 펼친 법전.
    // 스탬프=대전통편 출전 명기 「大典通編 刑典 檢驗 — 士族婦女犯殺人, 雖正法, 勿爲檢驗」.
    id: "s6", start: 29.58, dur: 6.33, talker: null,
    chars: [
      { id: "s6-off", variant: "militia", shirt: OFF_C.shirt, pants: OFF_C.pants, x: 26, bottom: 560, w: 390, expr: "shocked", pose: "shrug" },
    ],
    changes: [],
  },
  {
    // S7 펀치 — "그래도 그 지침서의 이름은 무원록. 억울함을, 없게 하라."
    // 새벽. 앵커=서안 위 크게 펼친 선장본 『무원록』(제첨 「無寃錄」) + 등잔 + 종이에 닿은 붓 + 세살 창호.
    // 대형 타이포 「無寃」 + "억울함을 없게 하라". 캐릭터 없음 — 책이 주인공.
    id: "s7", start: 35.46, dur: 6.85, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S8 아웃트로
    id: "s8", start: 41.86, dur: 5.74, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
