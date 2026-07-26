// Director scene script — EP.21 화랑/원화 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, band?, skirt?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅:
//   화랑        = hwarang variant (신규 — 상투+머리띠+꽃+분 바른 얼굴, characters.js).
//                 ⚠ 갓·도포는 조선 문법이라 삼국 씬에 쓰지 않는다. 이 채널 첫 삼국시대 편.
//   남모·준정   = lady 색변주 (신라 여성 복식 도상이 rig에 없어 치마저고리 유지 — 고정 댓글에 명시)
//   host        = 아웃트로(s8)
//
// 씬 경계 = S5 문장 테이블(15문장 → 7씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크·적대검증 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. '화랑=전사 집단' 프레임 금지 — 무기·갑주·전투 소품 0개. 사료가 말하는 관찰·천거 기능만.
//   2. 남모·준정을 '여자라서 질투' 프레임으로 연출 금지 — 사료 원문(爭娟相妬)의 범위까지만.
//   3. 원문 스탬프는 직접 대조본만: 取美貌男子 粧飾之 / 傅粉粧飾之 / 强勸酒至醉 /
//      投河水以殺之·俊貞伏誅 / 花郞 / 擇其善者 薦之於朝.
//   4. 300여 명(num-pop)은 사료 聚徒三百餘人 — F4.
//
// ⚠ 시그니처 표 준수 메모:
//   · 첨성대 = sp20 검증 자산(井자 정자석 몸통 밖 돌출 + 석축 어긋난 세로 줄눈 — 등대 오독 차단).
//   · 군중 실루엣 = 불투명 0.96↑(반투명은 '유령' 판독, EP.17) + 중경 스케일.
//   · 물 밴드 규칙 — s5는 인물을 배치하지 않는다(물 위 인물 = 익사 오독, it3 참사).
//   · 소나무 = 비대칭 수관층 + 적갈색 줄기(좌우대칭 3단 원뿔 = 크리스마스 트리 오독).
//   · 정자 = sp16(벽 없이 기둥만 — 집 오독 방지).
//   · 원형 글로우 금지(지뢰 #47) — s2 빛은 가로로 넓은 저채도 타원 띠.
var TRANSITION = 0.45;

var HOST  = { shirt: "#d94f37", pants: "#1f2d45" };
// 화랑 — 분을 바른 밝은 피부(傅粉)가 이 편의 핵심 시각 근거
var HW_A  = { variant: "hwarang", skin: "#f9e2d2", shirt: "#c0392b", pants: "#2b3f63", band: "#8e3b7a" };
var HW_B  = { variant: "hwarang", skin: "#f9e2d2", shirt: "#2e6a6a", pants: "#3a3050", band: "#d94f37" };
var HW_C  = { variant: "hwarang", skin: "#f9e2d2", shirt: "#3a7ca5", pants: "#2f3a52", band: "#e8b74a" };
// 원화 두 사람 — 저고리/치마 색으로만 구분(신분·성격 서술 배제)
var NAMMO = { variant: "lady", shirt: "#e6d9bd", skirt: "#7b4a86" };
var JUNJ  = { variant: "lady", shirt: "#dfd2b4", skirt: "#2e6a6a" };

var SCENES = [
  {
    // S1 훅 — "신라의 화랑은 얼굴을 보고 뽑았습니다." / "삼국사기에 미모의 남자라고 적혀 있죠."
    // 경주 들(첨성대+고분+남산 능선) 앞에 화랑 1인 히어로. 스탬프 「取美貌男子 粧飾之」.
    id: "s1", start: 0, dur: 7.93, talker: null,
    chars: [
      { id: "s1-hw", variant: "hwarang", skin: HW_A.skin, shirt: HW_A.shirt, pants: HW_A.pants, band: HW_A.band,
        x: 30, bottom: 560, w: 520, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 4.20, char: "s1-hw", expr: "proud" },
    ],
  },
  {
    // S2 — "당나라 기록은 한술 더 뜹니다. 곱게 분을 발라 꾸몄다는 거예요."
    // 인서트: 권자본(가로 두루마리) — 좌우 축 + 세로쓰기 글줄 + 금색 하이라이트.
    // 스탬프 「傅粉粧飾之」 small "당나라 『신라국기』(『삼국사기』 인용)".
    id: "s2", start: 7.48, dur: 4.07, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 — "그런데 원래는 여자 자리였습니다." / "진흥왕은 남모와 준정을 세웠어요."
    // 경주 들: 남모·준정 두 사람 + 뒤로 낭도 무리. 스탬프 「源花 원화」, num-pop 「300여 명」.
    id: "s3", start: 11.10, dur: 7.01, talker: null,
    chars: [
      { id: "s3-nammo", variant: "lady", shirt: NAMMO.shirt, skirt: NAMMO.skirt, x: 28, bottom: 560, w: 410, expr: "neutral", pose: "down" },
      { id: "s3-junj",  variant: "lady", shirt: JUNJ.shirt,  skirt: JUNJ.skirt,  x: 72, bottom: 568, w: 398, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S4 — "둘은 서로의 아름다움을 시기했습니다." / "준정이 남모를 불러 술을 먹였어요."
    // 밤 사삿집 마당(私第): 소반 술상(신라 토기 호리병) 사이에 둔 두 사람.
    // 스탬프 「强勸酒至醉」. ⚠ 술을 권하는 쪽/받는 쪽을 자세로만 표현 — 사료 밖 서사 금지.
    id: "s4", start: 17.66, dur: 7.63, talker: null,
    chars: [
      { id: "s4-junj",  variant: "lady", shirt: JUNJ.shirt,  skirt: JUNJ.skirt,  x: 18, bottom: 566, w: 400, expr: "neutral", pose: "down" },
      { id: "s4-nammo", variant: "lady", shirt: NAMMO.shirt, skirt: NAMMO.skirt, x: 82, bottom: 570, w: 392, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 19.10, char: "s4-junj", expr: "angry" },
      { at: 19.10, char: "s4-nammo", expr: "angry" },
      { at: 21.90, char: "s4-junj", pose: "point" },
      { at: 22.10, char: "s4-nammo", expr: "neutral" },
    ],
  },
  {
    // S5 — "그리고 강물에 던져 죽였습니다." / "준정도 처형됐고, 무리는 흩어졌죠."
    // 밤 강: 발밑까지 내려오는 물 밴드 + 파문 + 갈대 + 강 건너 흩어지는 무리 실루엣.
    // ⚠ 인물 배치 없음 — 물 밴드 위 인물은 '물에 빠진 사람'으로 읽힌다(it3 참사).
    // 스탬프 「投河水以殺之 · 俊貞伏誅」.
    id: "s5", start: 24.84, dur: 7.77, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S6 — "그 뒤 남자로 바뀐 겁니다." / "하지만 목적은 외모가 아니었어요."
    // 낮 들판: 화랑 2인 + 큰 소나무 + 낭도 무리. 스탬프 「花郞 · 화랑」.
    id: "s6", start: 32.16, dur: 6.91, talker: null,
    chars: [
      { id: "s6-hw1", variant: "hwarang", skin: HW_A.skin, shirt: HW_A.shirt, pants: HW_A.pants, band: HW_A.band,
        x: 52, bottom: 560, w: 420, expr: "proud", pose: "down" },
      { id: "s6-hw2", variant: "hwarang", skin: HW_B.skin, shirt: HW_B.shirt, pants: HW_B.pants, band: HW_B.band,
        x: 80, bottom: 572, w: 396, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 36.10, char: "s6-hw1", expr: "neutral" },
    ],
  },
  {
    // S7 — "사람을 알아볼 방법이 없었거든요." / "그래서 모아 놓고 행실을 살폈습니다." / "그 무리에서 김유신이 나왔죠."
    // 산수 유람(遊娛山水): 정자 + 개울 + 화랑 무리. 스탬프 「擇其善者 薦之於朝」, 후반 chip 「김유신 — 15세에 화랑」.
    id: "s7", start: 38.62, dur: 10.00, talker: null,
    chars: [
      { id: "s7-hw1", variant: "hwarang", skin: HW_A.skin, shirt: HW_A.shirt, pants: HW_A.pants, band: HW_A.band,
        x: 22, bottom: 560, w: 400, expr: "neutral", pose: "down" },
      { id: "s7-hw2", variant: "hwarang", skin: HW_C.skin, shirt: HW_C.shirt, pants: HW_C.pants, band: HW_C.band,
        x: 41, bottom: 568, w: 386, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 45.90, char: "s7-hw1", expr: "proud" },
    ],
  },
  {
    // S8 아웃트로
    id: "s8", start: 48.17, dur: 6.03, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
