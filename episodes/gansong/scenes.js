// Director scene script — the "LLM-writable" layer. EP.11 간송 전형필 / 해례본 지키기 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat? }],
//   changes [{ at, char, expr?, pose? }].
// 캐스팅: 해설 = host(붉은) s1·s6·s7 / 간송 전형필 = militia(갓+두루마기 남회색) s3·s4·s5 연속 등장.
//   ⚠ 1940s 인물이나 rig 6종 내 유지 — 갓+두루마기는 근대까지 착용, 컷아웃 문법상 허용. 정체는 자막/돈/책이 전달.
// 씬 경계 = S5 문장 테이블(bin/sync_timing.py). 씬 start = 문장 start − 0.2(리드).
//
// ⚠ S3 팩트체크가 이월한 그림 제약 (factcheck.md) — 그림도 팩트체크 대상(지뢰 #27):
//   1. 해례본 원리 해설(해례)은 집현전 8인 저술 — "세종이 원리를 썼다"는 그림 금지. 책은 '한글 원리를 담은 책'으로만.
//   2. 근현대 소품이라 엽전 금지(당연). 돈은 1940s 지폐 다발(무액면), 오동나무 상자는 뚜껑+경첩 시그니처.
//   3. 김태준·이용준 등 실명 인물 등장 금지(근현대 정치 인접). 간송 1인 + 해설 host만.
//   4. 실물 해례본 인서트(assets/haerye.jpg)는 평면 전시물이라 컷아웃 액자 마운트 OK(EP.9/EP.10 방식, 지뢰 #35).
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var GANSONG = { shirt: "#3f5568", pants: "#2a3542" };  // 간송 — 남회색 두루마기 + 갓

var SCENES = [
  {
    // S1 훅 — "국보를 단돈 천 원에 팔겠다기에, 어떤 이는 부른 값의 열 배를 냈습니다."
    // 앵커 = 고서(닫힌 선장본) + 지폐 다발. 가격 역설: 1천 원 ↔ ×10 → 1만 원.
    id: "s1", start: 0, dur: 6.96, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 78, bottom: 560, w: 370, expr: "shocked", pose: "point", flip: true },
    ],
    changes: [
      { at: 4.5, char: "s1-host", expr: "happy" },
    ],
  },
  {
    // S2 — "천구백사십 년 안동, 한글을 어떤 원리로 만들었는지 풀어 놓은 책이 세상에 나왔죠."
    // 고택에서 해례본 출현. 앵커 = 해례본 실물 인서트(액자). 미들 = 고택(EP.7 사가). 원경 = 산 능선. num "1940".
    id: "s2", start: 6.51, dur: 6.91, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 — "일제가 우리말과 글을 짓누르던 때, 이 책마저 빼앗길 위험이 컸습니다."
    // 앵커 = 한글 자모 위 붉은 금지 사선(우리말·글 지우기). 보조 = 옛 신문 지면(EP.9). 간송이 근심.
    id: "s3", start: 12.97, dur: 6.33, talker: "s3-gan",
    chars: [
      { id: "s3-gan", variant: "militia", shirt: GANSONG.shirt, pants: GANSONG.pants, x: 76, bottom: 560, w: 400, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 16.5, char: "s3-gan", expr: "shocked" },
    ],
  },
  {
    // S4 — "조선의 대부호 전형필은, 보물엔 보물의 값을 치러야 한다며 만 원을 건넸죠."
    // 앵커 = 지폐 다발(1만 원, 큰 더미) + 고서. 간송이 돈을 건넴. num "1만 원 = 기와집 열 채".
    id: "s4", start: 18.85, dur: 6.79, talker: "s4-gan",
    chars: [
      { id: "s4-gan", variant: "militia", shirt: GANSONG.shirt, pants: GANSONG.pants, x: 74, bottom: 560, w: 400, expr: "proud", pose: "point", flip: true },
    ],
    changes: [
      { at: 23.7, char: "s4-gan", expr: "happy", pose: "raised" },
    ],
  },
  {
    // S5 — "전쟁이 터지자, 그는 이 책을 오동나무 상자에 넣고 베개 삼아 지켰습니다."
    // 6·25. 앵커 = 오동나무 상자(뚜껑 열림 + 해례본) — 신규. 원경 = 전쟁 밤(붉은 지평선 + 연기 실루엣). 간송이 지킴.
    id: "s5", start: 25.19, dur: 7.21, talker: "s5-gan",
    chars: [
      { id: "s5-gan", variant: "militia", shirt: GANSONG.shirt, pants: GANSONG.pants, x: 74, bottom: 560, w: 390, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 30.3, char: "s5-gan", expr: "proud" },
    ],
  },
  {
    // S6 펀치라인 — "천 원에 사라질 뻔한 책은, 이제 값을 매길 수 없는 국보가 됐습니다."
    // 앵커 = 해례본 실물 인서트(전시대 위 + 금빛 글로). num "국보 제70호". host 해설.
    id: "s6", start: 31.95, dur: 6.12, talker: "s6-host",
    chars: [
      { id: "s6-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 76, bottom: 560, w: 370, expr: "proud", pose: "point", flip: true },
    ],
    changes: [
      { at: 36.0, char: "s6-host", expr: "happy", pose: "raised" },
    ],
  },
  {
    // S7 아웃트로
    id: "s7", start: 37.62, dur: 7.40, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 45.0;
