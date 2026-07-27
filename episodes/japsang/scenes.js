// Director scene script — EP.23 잡상 / 궁궐 지붕 위의 손오공 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, noBadge?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   신입 관원·선배 관원 = militia hat:"samo" (사모+단령 — 어우야담은 광해군대(1622)라 흉배 OK)
//   host = 아웃트로(s11)
//   잡상 4종(대당사부·손행자·저팔계·사화상)은 rig가 아니라 소품(japsangSVG 인젝터) — 지붕 위 흙인형.
//
// 씬 경계 = S5 문장 테이블(18문장 → 10씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
// ⚠ 문장8·9·14·18은 whisper가 앞당긴 것을 silencedetect로 보정한 값 사용(지뢰 #58).
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. 어처구니 어원설 언급 금지(속설).
//   2. 홀수 규칙 금지(기관 출처 충돌 — 중화전 10개 반례).
//   3. 실록 인용 금지(실록의 雜像은 나례 인형·상아 잡상·능 석물).
//   4. 서유기 명명·신참례는 『어우야담』 프레임 명시(스탬프에 "야담집" 라벨).
//   5. "500년째" 류 시점 단정 금지 — 현존물은 고종 중건기.
//   6. 절 대비 씬은 "남아 있는 절 지붕엔 없다"의 시각화 — 사찰 지붕에 잡상을 그리지 않는 것으로만 표현.
//
// ⚠ 시그니처 표 준수 메모:
//   · 잡상 미니 피규어는 반드시 마루(내림마루 밴드) 위에 착지 — 부양 금지.
//   · 원숭이 시그니처 = 둥근 귀 2 + 밝은 주둥이 + 금색 머리띠 + 꼬리. 저팔계 = 늘어진 귀 + 콧구멍 2 들창코.
//   · 기왓골은 평행(방사형 = 텐트, 지뢰 #60). 처마 반전 + 용마루 + 내림마루 2줄.
//   · 밤 씬(s3) 전각은 배경과 명도 분리 — 윤곽 하이라이트 + 밝은 창호지 면(창 안에 달 금지, 지뢰 #45).
//   · 경회루(s5) 물은 석축 기단 밑동과 접촉(EP.8 곶 문법) — 인물 없음.
//   · 원형 글로우 금지 — 노을 빛은 가로 저채도 타원 띠(지뢰 #47).
//   · 자금성(s9) 밴드는 의도된 중국 문법(황유리 기와+주수) + 라벨 chip 명시로 고증 오독 차단.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var DANRYONG_NEW = "#3f6b5e";   // 신입 관원 단령 — 녹
var DANRYONG_S1  = "#4a6a8a";   // 선배 1 단령 — 청
var DANRYONG_S2  = "#5a5a7d";   // 선배 2 단령 — 자청

var SCENES = [
  {
    // S1 훅 — "경복궁 지붕 위에는, 손오공이 앉아 있습니다."
    // 낮 경복궁 전각(EP.22 s1 팔작지붕 개정판) + 양쪽 내림마루 위 미니 잡상 행렬 + chip.
    id: "s1", start: 0, dur: 4.95, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S2 — "추녀마루 위에 작은 흙인형들이…" / "이걸 잡상이라고 부릅니다." /
    //      "맨 앞은 삼장법사, 그 뒤로 손오공, 저팔계, 사오정입니다."
    // 지붕 클로즈업: 대각 내림마루 밴드 + 잡상 4좌 대형 + 스탬프 「잡상(雜像)」 + 이름 chip 4연속.
    id: "s2", start: 4.50, dur: 14.25, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 — "불과 잡귀를 막아 주는 수호신이었죠."
    // 밤 전각 + 잡상 실루엣 + 좌측 화염 뭉치 + chip 「벽사(辟邪)」.
    id: "s3", start: 18.30, dur: 4.05, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S4 — "궁궐과 왕실이 세운 건물에만 올릴 수 있었죠." / "남아 있는 절 지붕엔 없습니다."
    // 상하 대비: 위 = 궁궐 지붕(잡상 ✓), 아래 = 사찰(법당+석탑, 잡상 없음 ✗).
    id: "s4", start: 21.90, dur: 7.67, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S5 — "경복궁 경회루에는 열한 개나 올라가 있죠."
    // 경회루: 석축 기단 + 돌기둥 열 + 2층 누각 + 지붕 잡상 11좌 + 연못 + num-pop 11개.
    id: "s5", start: 29.12, dur: 4.37, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S6 — "그런데 이 이름들, 어떻게 전해졌을까요." / "광해군 때 야담집, 어우야담에 답이 있습니다."
    // 기록 인서트: 서안 + 닫힌 선장본 『於于野談』 제첨 + 스탬프(야담집 라벨).
    id: "s6", start: 33.04, dur: 9.05, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S7 — "새로 관리가 되면, 선배들 앞에서 신고식을 치렀는데요." /
    //      "대궐 문루 위 잡상 이름 열 개를, 단숨에 열 번 외워야 했습니다."
    // 대궐 문루(성곽+홍예문, EP.17 s4 자산) 앞: 신입 1 + 선배 2. 스탬프 「면신례」 + chip 「10개 × 10번」.
    id: "s7", start: 41.64, dur: 11.97, talker: null,
    chars: [
      { id: "s7-newbie", variant: "militia", hat: "samo", shirt: DANRYONG_NEW, pants: "#33475e",
        x: 24, bottom: 560, w: 380, expr: "neutral", pose: "down" },
      { id: "s7-senior1", variant: "militia", hat: "samo", shirt: DANRYONG_S1, pants: "#33475e",
        x: 64, bottom: 650, w: 330, expr: "neutral", pose: "point", flip: true },
      { id: "s7-senior2", variant: "militia", hat: "samo", shirt: DANRYONG_S2, pants: "#33475e",
        x: 86, bottom: 560, w: 350, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 47.20, char: "s7-newbie", expr: "shocked" },
      { at: 49.90, char: "s7-senior1", pose: "raised" },
    ],
  },
  {
    // S8 — "대당사부, 손행자, 저팔계, 사화상." / "못 외우면 관리 대접을 못 받았죠."
    // 신입 클로즈업(외치는 립싱크) + 이름 step 체인 4단(EP.15 문법) + chip 「許參 거부」.
    id: "s8", start: 53.16, dur: 9.41, talker: "s8-newbie",
    chars: [
      { id: "s8-newbie", variant: "militia", hat: "samo", shirt: DANRYONG_NEW, pants: "#33475e",
        x: 28, bottom: 560, w: 440, expr: "neutral", pose: "raised" },
    ],
    changes: [
      { at: 58.90, char: "s8-newbie", expr: "shocked" },
      { at: 58.90, char: "s8-newbie", pose: "down" },
    ],
  },
  {
    // S9 — "중국 황궁 지붕에는 용과 봉황, 신선이 올라갑니다." / "조선은 그 자리에 소설 주인공을 올렸습니다."
    // 상하 대비: 위 = 자금성(황유리 기와 + 선인·용·봉 주수, 라벨 chip), 아래 = 조선(회기와 + 잡상 4, 라벨 chip).
    id: "s9", start: 62.12, dur: 9.65, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S10 펀치라인 — "손오공은 지금도 궁궐을 지키고 있죠."
    // 노을 지붕 클로즈업: 내림마루 + 손행자 잡상 대형 단독 + 원경 전각 실루엣.
    id: "s10", start: 71.32, dur: 3.85, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S11 아웃트로
    id: "s11", start: 74.72, dur: 5.88, talker: "s11-host",
    chars: [
      { id: "s11-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
