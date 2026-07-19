// Director scene script — the "LLM-writable" layer. EP.12 측우기 = 문종 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat? }],
//   changes [{ at, char, expr?, pose? }].
// 캐스팅: 해설 = host(붉은) s1·s7 / 장영실 = militia 남색 관복+갓(EP.1 동일) s3 통념 / 세자 문종 = king 곤룡포 남색변주+익선관 s5·s6.
//   ⚠ 세자는 흑/남색 곤룡포(왕=홍색과 구분). 정체는 자막/스탬프가 전달 — 측우기는 지식 의존 기물이라 "측우기" 스탬프 필수(카탈로그).
// 씬 경계 = S5 문장 테이블(bin/sync_timing.py). 씬 start = 문장 start − 0.2(리드).
//
// ⚠ S3 팩트체크가 이월한 그림 제약 (factcheck.md) — 그림도 팩트체크 대상:
//   1. "세계 최초" 단독 금지 → 스탬프는 반드시 "세계 최초의 표준 우량계"(한정어 포함). 중국 천지분 1247 반례 방어.
//   2. "손수 만들어" 물리적 제작 귀속 금지 → 세자는 '고안·측정'. 측우기 옆 세자는 재는(point) 자세로, 만드는 도구 금지.
//   3. 측우기 = 청동 기물(황동 톤+녹청 포인트, 갈색 단색 금지 — 시그니처 표). sp4 재사용.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var YA   = { shirt: "#3a4f6e", pants: "#1f2d45" };  // 장영실 — 남색 관복 + 갓 (통념)
var SEJA = { shirt: "#28324f", pants: "#20294a" };  // 세자 문종 — 흑남색 곤룡포 + 익선관 (왕=홍색과 구분, 밝은 배경 대비)

var SCENES = [
  {
    // S1 훅 — "비의 양을 재는 이 발명품, 만든 사람은 우리가 아는 그 과학자가 아니었습니다."
    // 앵커 = 측우기(비 내리는 대석 위 청동 원통). "?" — 누가 만들었나. host 해설이 가리킴.
    id: "s1", start: 0, dur: 6.89, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 76, bottom: 560, w: 360, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 3.2, char: "s1-host", expr: "shocked" },
    ],
  },
  {
    // S2 — "전국을 똑같은 그릇으로 잰 조선의 측우기는, 유럽의 우량계보다 이백 년이나 빨랐죠."
    // 앵커 = 측우기(크게). 스탬프 "측우기 · 세계 최초의 표준 우량계"(한정어 필수). num "200년". 환경 = 비+구름.
    id: "s2", start: 6.44, dur: 7.72, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 통념 — "우리는 흔히 이걸 장영실의 발명품으로 알고 있는데요."
    // 앵커 = 측우기 + 장영실(남색 관복 갓)이 자기 것인 양 가리킴. 스탬프 "장영실?" — 물음표로 의심 신호.
    id: "s3", start: 13.71, dur: 4.95, talker: "s3-ya",
    chars: [
      { id: "s3-ya", variant: "militia", shirt: YA.shirt, pants: YA.pants, x: 72, bottom: 560, w: 400, expr: "proud", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S4 반전 — "그런데 실록을 펼치면, 가뭄을 근심하던 한 세자의 이름이 적혀 있습니다."
    // 앵커 = 실록(펼친 선장본) — 한 줄이 금빛으로 강조. 스탬프 "世子, 가뭄을 근심하여". 인물 없음(책 집중).
    id: "s4", start: 18.21, dur: 6.10, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S5 인물 공개 — "빗물 재는 법을 손수 고안한 그 세자가, 바로 훗날의 임금 문종이었죠."
    // 앵커 = 측우기 + 세자 문종(남색 곤룡포)이 빗물을 재는(가리키는) 자세. num "문종". 환경 = 비.
    id: "s5", start: 23.86, dur: 6.03, talker: "s5-seja",
    chars: [
      { id: "s5-seja", variant: "king", shirt: SEJA.shirt, pants: SEJA.pants, x: 70, bottom: 560, w: 420, expr: "proud", pose: "point", flip: true },
    ],
    changes: [
      { at: 28.3, char: "s5-seja", expr: "happy" },
    ],
  },
  {
    // S6 펀치라인 — "세계가 인정한 발명품에 적힌 건, 백성을 걱정하던 왕세자의 이름이었습니다."
    // 앵커 = 측우기(금빛 글로, 전시대). 세자 문종이 곁에 서서(자랑). 스탬프 "측우기 · 세계 최초의 표준 우량계".
    id: "s6", start: 29.44, dur: 6.79, talker: "s6-seja",
    chars: [
      { id: "s6-seja", variant: "king", shirt: SEJA.shirt, pants: SEJA.pants, x: 74, bottom: 560, w: 400, expr: "proud", pose: "point", flip: true },
    ],
    changes: [
      { at: 33.6, char: "s6-seja", expr: "happy", pose: "raised" },
    ],
  },
  {
    // S7 아웃트로
    id: "s7", start: 35.78, dur: 6.80, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 42.1;
