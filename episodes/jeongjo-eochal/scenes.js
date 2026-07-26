// Director scene script — EP.16 정조어찰첩 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅(기존 6종 변주 — 신규 variant 없음):
//   정조   = king 홍룡포 (s1 밤 서재 / s4 어전 / s5 면박)
//   심환지 = militia hat:"samo" + 흑단령 (s2 / s4 / s6)
//            1796~1800년이라 문관 흉배(단종 2년·1454~) 제도 확립 후 ⇒ noBadge 불필요(EP.10 최만리와 반대)
//   host   = 아웃트로(s7)
// 씬 경계 = S5 문장 테이블(6문장 → 6씬 + 아웃트로). 리드 0.30s.
//
// ⚠ S3 팩트체크/적대적 검증 이월 제약 (factcheck.md) — 화면도 이 선을 지킨다:
//   1. 실록·승정원일기 '원문 인서트' 금지 — 어찰첩은 실록에 없는 개인 소장 서첩이다.
//      s4에서 공식 기록을 암시할 땐 그린 서책까지만, 원문 인용 스탬프 금지.
//   2. 한문 원문 스탬프 전면 금지 — 폐기 지시도 「無算之□」도 탈초 원문을 1차 자료로
//      확인하지 못했다(마지막 글자 판독 실패). 한글 번역만 노출(지뢰 #38).
//   3. 초서(흘림체) 인서트 금지 — "화가 나서 초서로 갈겨썼다"는 커뮤니티 경유 서술이라 미확인.
//      s5 '뒤죽박죽'은 정자체 한글로만, 표기도 성대출판부 표기를 따른다.
//   4. 독살설 암시 금지 — 병세·약재 등 사인 관련 시각 요소 일절 없음(학계 미합의).
//   5. 「노론 벽파」·「297통」·「승하 13일 전」은 TTS 붕괴로 대사에서 뺀 정보라 스탬프가 전담.
//   6. s4 각본 스탬프는 '심환지 건'으로 한정 — "조정 전체가 각본"으로 읽히는 연출 금지.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var KING = { shirt: "#c0392b", pants: "#7c1d12" };  // 정조 — 홍룡포
var SIM  = { shirt: "#2f3a4a", pants: "#222a36" };  // 심환지 — 흑단령(당상관 상복)

var SCENES = [
  {
    // S1 훅 — "조선의 성군 정조는 편지에 몇 번이고 덧붙였습니다. 보는 즉시 찢어 없애라."
    // 밤 내전. 앵커 = 서안+간찰+붓(EP.10 s2 서재 자산 변형). 정조가 편지를 쓴다.
    // 스탬프 「보는 즉시 찢어 없애라」(5.35) — 한글 번역만(제약 2).
    id: "s1", start: 0, dur: 7.29, talker: "s1-king",
    chars: [
      { id: "s1-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 72, bottom: 560, w: 410, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 4.3, char: "s1-king", expr: "angry" },
    ],
  },
  {
    // S2 — "상대는 정적으로 알려진 노론의 거두 심환지, 죽기 열흘 남짓 전까지 삼백 통 가까이."
    // 낮 관아. 앵커 = 동헌(EP.15 재사용) + 심환지가 받아 든 간찰.
    // 스탬프 「노론 벽파의 거두」(8.7) + num-pop 「297통 / 마지막 편지는 승하 13일 전」(12.2).
    id: "s2", start: 6.84, dur: 7.31, talker: "s2-sim",
    chars: [
      { id: "s2-sim", variant: "militia", hat: "samo", shirt: SIM.shirt, pants: SIM.pants, x: 20, bottom: 560, w: 380, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 10.4, char: "s2-sim", expr: "shocked" },
    ],
  },
  {
    // S3 — "그 편지에는 어떤 상소를 언제 올릴지까지 적혀 있었습니다."
    // 무인. 앵커 = 펼친 간찰 지면 대형(세로 글줄 + 접힌 자국). 보조 = 상소 두루마리.
    // .step 체인(EP.15 문법) 「어떤 상소를」→「언제 올릴지」 — 절차를 그림 대신 타이포로.
    id: "s3", start: 13.70, dur: 4.56, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S4 반전 — "심환지가 아뢰고 임금이 못 이기는 척 받아들인 일이, 실은 미리 짜인 각본이었던 겁니다."
    // 어전(EP.5→EP.10 일월오봉도 병풍 + 어좌 단 재사용). 정조 단 위, 심환지 아래에서 아뢴다.
    // 스탬프 「미리 짜인 각본」 슬램(23.1) — small에 '심환지 건'으로 한정(제약 6).
    id: "s4", start: 17.81, dur: 7.72, talker: "s4-sim",
    chars: [
      { id: "s4-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 28, bottom: 700, w: 420, expr: "proud", pose: "down" },
      { id: "s4-sim", variant: "militia", hat: "samo", shirt: SIM.shirt, pants: SIM.pants, x: 80, bottom: 560, w: 340, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 23.1, char: "s4-king", expr: "happy" },
      { at: 23.1, char: "s4-sim", expr: "proud" },
    ],
  },
  {
    // S5 — "생각 없는 늙은이라 면박을 주고, 한글로 뒤죽박죽이라 쓰기도 했죠."
    // 밤 서재 재방문. 앵커 = 펼친 간찰 + 한글 「뒤죽박죽」 타이포 팝(EP.10 자모 팝 문법).
    // 정조 angry. 스탬프 「생각 없는 늙은이」(25.9). 초서 금지·정자체만(제약 3).
    id: "s5", start: 25.08, dur: 6.46, talker: "s5-king",
    chars: [
      { id: "s5-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 26, bottom: 560, w: 420, expr: "angry", pose: "point" },
    ],
    changes: [
      { at: 28.4, char: "s5-king", expr: "shocked", pose: "shrug" },
    ],
  },
  {
    // S6 펀치라인 — "그런데 심환지는 태우지 않았습니다. 받은 날짜까지 적어 남긴 덕에,
    //                우리는 성군의 뒷담화도, 그걸로 일을 되게 한 솜씨도 읽고 있죠."
    // 앵커 = 오동나무 상자(EP.11 재사용) + 날짜 부기된 편지 더미. 화로는 불이 꺼진 채(태우지 '않았다').
    // 후반 어찰첩 6첩 등장 + 스탬프 「297통 · 6첩」「보물 · 국립중앙박물관」(양립 착지).
    id: "s6", start: 31.09, dur: 11.37, talker: "s6-sim",
    chars: [
      { id: "s6-sim", variant: "militia", hat: "samo", shirt: SIM.shirt, pants: SIM.pants, x: 78, bottom: 560, w: 360, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 33.0, char: "s6-sim", expr: "proud" },
      { at: 37.4, char: "s6-sim", expr: "happy" },
    ],
  },
  {
    // S7 아웃트로 — "삼십 초 역사. 다음 편이 궁금하면, 구독."
    id: "s7", start: 42.01, dur: 7.09, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 49.1;
