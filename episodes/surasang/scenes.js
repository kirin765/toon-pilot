// Director scene script — EP.27 조선 왕의 수라상 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표 (지뢰 #62) — 장소를 고유명으로 먼저 확정하고 앵커 소품·배경 소스를 도출한다.
//   distinct 배경 4종(어전·정전마당·수랏간·황무지 들판) + 아웃트로, 동일 배경 연속 ≤3(최대 2).
//
// | 씬  | 문장 | 요지                                | 장소(고유명)            | 시간대 | 배경 소스                        | 앵커 소품                     | 캐릭터            |
// |-----|------|--------------------------------------|--------------------------|--------|----------------------------------|-------------------------------|-------------------|
// | s1  | [1]  | 훅 — 사극의 12첩 반상                | 궁중 어전(수라 드시는 방) | 낮     | throneBgSVG(EP.25 어전 재사용)    | **12첩 수라상(신규)**          | 정조(king)        |
// | s2  | [2-3] | 실제는 검소 / 말기 상궁 전언         | 같은 어전 — 다른 벽면    | 낮     | throneBgSVG (연속 2/3)            | **7그릇 수라상으로 변환**      | 정조              |
// | s3  | [4-6] | 의궤 / 화성행차 / 일곱 그릇          | 궁궐 정전 앞마당          | 낮     | courtBgSVG(EP.22~25 재사용)       | **펼친 의궤(문서) + 7그릇**    | 정조              |
// | s4  | [7-9] | 하루 5끼 / 수라 2번 / 죽·간식         | 수랏간(소주방)            | 낮     | roomBgSVG tone="day" (EP.26 방)   | **5끼 그릇 + 뚝배기**          | 정조              |
// | s5  | [10-12] | 마음대로 못 먹음 / 상궁 시식        | 궁중 어전                | 낮     | throneBgSVG                       | **7그릇 수라상 + 은수저 + 상궁**| 정조 + 상궁(lady) |
// | s6  | [13-15] | 흉년 / 하늘의 경고 / 감선            | 정전 앞마당(흐린 낮)      | 흐림   | courtBgSVG + 음영 오버레이        | **물밥 소반(감선)**            | 정조              |
// | s7  | [16] | 백성의 고통                            | 황무지 들판              | 낮     | fieldBgSVG(신규 — 군중 실루엣)    | **백성 실루엣 3**              | (무인)            |
// | s8  | [17] | 수라상=백성을 살피는 자리(펀치)       | 궁궐 정전 앞마당          | 낮     | courtBgSVG (수미상관 s3·s6)       | **수라상 + 진상 상자**          | 정조              |
// | s9  | [18] | 아웃트로                              | —                        | —      | —                                  | —                               | host              |
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   정조 = king (곤룡포 홍색 + 익선관 — 지뢰 #64 소각 부활본).
//   기미상궁(s5) = lady (저고리+치마, 쪽머리). ⚠ 비녀는 rig에서 제거돼 있음(지뢰 #18).
//   host = s9(아웃트로).
//   모든 내레이션은 3인칭 해설(캐릭터 대사 아님) → talker 없음(다큐멘터리 음성).
//
// 씬 경계 = S5 문장 테이블(19문장 → 8씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. **"12첩이 거짓" 프레이밍 금지** — "조선 말기 상궁들이 전한 것"으로 중립(s2 스탬프).
//   2. **반찬 가짓수 단정 금지** — 수라는 "일곱 그릇"(F5 궁중음식문화재단, 정조 상 한정)만 숫자로.
//      "반찬 7가지" 일반화(F1 추정형)는 화면 스탬프에서도 단정하지 않는다.
//   3. **"독" 금지** — 기미상궁은 "이상이 없는지 살피는" 시식(s5 스탬프). 은수저는 스탬프에서도 "독 검출" 단정 금지.
//   4. **의궤 연도** — "원행을묘정리의궤(1795)"는 행차 연도로만(편찬 1796 표기 금지).
//   5. **"백성이 굶는데" 동기는 유교 재이관 병기** — s6 스탬프에 감선·소선·철선 한자 + "하늘의 경고" 맥락.
//   6. **시식 인물은 상궁** — s5 lady rig는 기미상궁(왕·왕비를 모셔온 상궁). 오독 막을 스탬프 「기미상궁」.
//
// ⚠ 시그니처 표 준수 메모:
//   · 수라상(신규) = 낮은 좌식 상(서안·소반 문법 — 허리 높이 탁자는 중국 문법) + 밝은 백자 반상기.
//     그릇은 반드시 상 위(원형 기물 단독 = 행성, 지뢰 #86) + 소반·상판 명도 대비(표).
//   · 한자는 SVG <text>(지뢰 #67). 의궤 지면도 실제 한자 세로쓰기.
//   · 창호 = 밝은 창호지 면 + 어두운 살 + 하단 궁판(지뢰 #45). 밤에도 창 안 달·별 금지.
//   · 기왓골 평행 세로(지뢰 #60 방사형 금지) + 처마 반전 — 정전·동헌 재사용 자산 그대로.
//   · 군중 실루엣 = 불투명 0.96↑(유령 금지) + 좁은 몸·경사 어깨(EP.21 개선판 문법).
//   · 배경 글로우 원/타원 전면 금지(지뢰 #47).
//   · 소품 진입은 y슬라이드만(지뢰 #40).
var TRANSITION = 0.45;

var JEONGJO = { shirt: "#b5493a", pants: "#26221c" };   // 정조 — 곤룡포 홍색
var SANGGUNG = { shirt: "#3f7a6a", pants: "#8a4a3a" };  // 기미상궁 — 청록 저고리 + 치마
var HOST    = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "사극에서 임금님은 매 끼 반찬 열두 가지를 받았습니다." (12첩 수라상)
    id: "s1", start: 0, dur: 5.87, talker: null,
    chars: [
      { id: "s1-king", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 80, bottom: 570, w: 400, expr: "proud", pose: "point" },
    ],
    changes: [{ at: 3.60, char: "s1-king", pose: "down" }],
  },
  {
    // S2 — "그런데 왕의 밥상 기록은 그보다 검소했습니다. / 그 열두 첩은 조선 말기 상궁들이 전한 것입니다."
    id: "s2", start: 5.42, dur: 8.91, talker: null,
    chars: [
      { id: "s2-king", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 80, bottom: 570, w: 400, expr: "shocked", pose: "down" },
    ],
    changes: [{ at: 9.80, char: "s2-king", expr: "neutral" }],
  },
  {
    // S3 — "왕의 밥상을 기록한 문서가 남아 있죠. / 정조가 어머니의 환갑잔치로 화성에 다녀온 기록입니다.
    //        / 경사스러운 날인데도 정조의 상은 일곱 그릇이 전부였습니다."
    id: "s3", start: 13.88, dur: 13.72, talker: null,
    chars: [
      { id: "s3-king", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 82, bottom: 570, w: 390, expr: "neutral", pose: "point" },
    ],
    changes: [{ at: 22.40, char: "s3-king", expr: "shocked", pose: "shrug" }],
  },
  {
    // S4 — "왕은 하루에 평균 다섯 끼를 먹었습니다. / 정식 밥상인 수라상은 아침과 저녁, 두 번이었죠.
    //        / 이른 아침과 점심, 밤에는 죽이나 간식이었죠."
    id: "s4", start: 27.15, dur: 13.96, talker: null,
    chars: [
      { id: "s4-king", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 82, bottom: 570, w: 380, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 35.70, char: "s4-king", pose: "point" }],
  },
  {
    // S5 — "왕은 밥상을 마음대로 못 먹었습니다. / 먹기 전에 상궁이 먼저 맛을 봤습니다.
    //        / 이상이 없는지 살피는 일이었죠."
    id: "s5", start: 40.66, dur: 12.47, talker: null,
    chars: [
      { id: "s5-king", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 76, bottom: 570, w: 390, expr: "neutral", pose: "down" },
      { id: "s5-sanggung", variant: "lady", shirt: SANGGUNG.shirt, pants: SANGGUNG.pants,
        x: 23, bottom: 600, w: 360, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 43.00, char: "s5-sanggung", expr: "proud" },
      { at: 49.30, char: "s5-king", expr: "proud" },
    ],
  },
  {
    // S6 — "흉년이 들면, 하늘의 경고라 여기고 반찬을 줄였습니다. / 심할 때는 고기를 끊고, 물을 만 밥을 먹었죠."
    id: "s6", start: 52.68, dur: 8.65, talker: null,
    chars: [
      { id: "s6-king", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 78, bottom: 570, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [],
  },
  {
    // S7 — "백성의 고통에 함께하려는 뜻이었죠." (들판의 백성 — rig 2인 + 빈 바가지·괭이)
    id: "s7", start: 60.88, dur: 4.95, talker: null,
    chars: [
      { id: "s7-min1", variant: "militia", hat: "paeraengi", shirt: "#6b7a6a", pants: "#3f4a3e",
        x: 30, bottom: 570, w: 380, expr: "shocked", pose: "shrug" },
      { id: "s7-min2", variant: "militia", hat: "paeraengi", shirt: "#8a7a63", pants: "#5a4a38",
        x: 71, bottom: 582, w: 360, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S8 펀치 — "왕의 수라상은 향연이 아니라 백성을 살피는 자리였습니다."
    id: "s8", start: 65.38, dur: 8.61, talker: null,
    chars: [
      { id: "s8-king", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 82, bottom: 570, w: 390, expr: "proud", pose: "point" },
    ],
    changes: [],
  },
  {
    // S9 아웃트로
    id: "s9", start: 73.54, dur: 6.01, talker: null,
    chars: [
      { id: "s9-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
