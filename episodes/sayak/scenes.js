// Director scene script — EP.24 사약의 진실 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, noBadge?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표(재작업 — 2026-07-29, 지뢰 #62 재발 방지) — 장소를 고유명으로 먼저 확정하고
//   앵커 소품·배경 소스를 도출한다. distinct 배경 3종(처소/정전/아궁이 딴채), 동일 배경 연속 ≤3,
//   무인 씬 연속 ≤2(모두 단독 1개로 유지).
//
// | 씬  | 문장 요지                     | 장소(고유명)              | 시간대 | 배경 소스                                  | 앵커 소품        | 캐릭터            |
// |-----|--------------------------------|---------------------------|--------|---------------------------------------------|------------------|-------------------|
// | s1  | 사극 통념 — 피 토하며 즉사     | 죄인의 처소 방 안         | 밤     | 신규 roomBgSVG(세살문+세살창+선반)          | 세살문           | 죄인              |
// | s2  | 반전 — 그 자리에서 죽는 경우 적음 | 죄인의 처소 방 안       | 밤     | 동일(연속 2/3)                              | 세살창           | 죄인              |
// | s3  | 사=하사 뜻                     | 궁궐 정전 앞마당          | 낮     | courtBgSVG — japsang/EP.22 s1 정전 재사용   | 정전+월대        | 임금(king)        |
// | s4  | 명예형 + 예기 인용             | 궁궐 정전 앞마당          | 낮     | 동일(연속 2/3)                              | 서안+『예기』책   | (무인 · 인포그래픽) |
// | s5  | 시신보존 + 대상 한정           | 궁궐 정전 앞마당          | 낮     | 동일(연속 3/3, 한도)                        | 관료 2인         | 관료 2인(admiral) |
// | s6  | 집행 절차(관복·무릎·마심) 앵커 | 죄인의 처소 방 안         | 밤     | roomBgSVG 재사용(새 런 1/3)                 | 소반+사발        | 죄인+금부도사     |
// | s7  | 재료 불명                      | 죄인의 처소 방 안         | 밤     | 동일(연속 2/3)                              | 사발 클로즈업    | (무인)            |
// | s8  | 반전 — 안 죽는 경우            | 죄인의 처소 방 안         | 밤     | 동일(연속 3/3, 한도)                        | 죄인             | 죄인              |
// | s9  | 아궁이 + 교살                  | 온돌 아궁이 딴채          | 밤     | 신규 furnaceBgSVG(아궁이+장작+돌벽)         | 아궁이           | 나졸(militia)     |
// | s10 | 펀치라인(빈 소반)              | 죄인의 처소 방 안(아침)   | 새벽   | roomBgSVG dawn 톤(새 런 1/1)                | 빈 소반+사발     | (무인)            |
// | s11 | 아웃트로                       | —                          | —      | —                                            | —                | host              |
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   죄인(수형자) = militia hat:"samo" (사모+단령) — F4 "관복을 갖춰 입었다"를 반영, 백의가 아니다.
//   금부도사 = admiral (어두운 관복) — 사약을 전하는 관원.
//   임금 = king (곤룡포, 익선관 기본형 — 특정 왕 단정 없음, 하사 행위만 상징).
//   관료 2인(s5) = admiral 변주(색만 다르게) — "받았습니다"의 행위 주체를 rig로 세움(무인 오독 회피).
//   나졸(s9) = militia hat:"samo" 색 변주 — "지폈다"의 행위 주체.
//   host = 아웃트로(s11).
//
// 씬 경계 = S5 문장 테이블(20행 → 10씬 + 아웃트로). 리드 0.3s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. 임형수 온돌/농담 일화 미사용(실록과 모순) — 인물 특정 없이 일반화된 서술로만.
//   2. 단종 교살 논쟁 미사용 — 정치적으로 민감, 이 편의 범위 밖.
//   3. 엽전 등 후기 소품 금지 — 이 편은 시대 특정 안 하므로 화폐 소품 자체를 배제.
//   4. F6·F7(안 죽는 경우·아궁이·교살)은 "전해집니다" 헤지 문구와 함께만 등장 — 자막·스탬프도 단정형 금지.
//
// ⚠ 시그니처 표 준수 메모:
//   · 세살창(온돌방) = 밝은 창호지 면 + 어두운 세로살 + 가로 3연 밴드 + 하단 궁판. 밤 장면이라도 창 안에 달 금지.
//   · 아궁이(s9) = 낮은 개방형 사각 화덕 + 벌겋게 달군 불꽃 + 장작. 서양 벽난로(아치+맨틀+굴뚝) 문법 금지.
//   · 세로 긴 기물(오랏줄 제외) 단독 배치 금지 — 오랏줄은 코일 형태로만.
//   · 소반+사발은 bench/sp2.html 검증 자산 그대로 재사용(EP 스프린트1 통과분).
var TRANSITION = 0.45;

var JOEIN = { shirt: "#4a5a6e", pants: "#33475e" };   // 죄인 단령 — 회청
var GWANWON = { shirt: "#2c3548", pants: "#1a2130" }; // 금부도사 — sp2.html과 동일
var KING = { shirt: "#8a3226", pants: "#26221c" };    // 임금 곤룡포 — 적색
var OFFICIAL1 = { shirt: "#2c3548", pants: "#1a2130" }; // s5 관료 1
var OFFICIAL2 = { shirt: "#3a4562", pants: "#242c40" }; // s5 관료 2
var NAJOL = { shirt: "#4a5a6e", pants: "#2c3548" };     // s9 나졸(불 때는 사람)
var HOST = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "사극에서 사약을 마시면 피를 토하며 죽습니다."
    id: "s1", start: 0, dur: 4.91, talker: null,
    chars: [
      { id: "s1-joein", variant: "militia", hat: "samo", shirt: JOEIN.shirt, pants: JOEIN.pants,
        x: 51, bottom: 560, w: 420, expr: "shocked", pose: "raised" },
    ],
    changes: [],
  },
  {
    // S2 — "그런데 그 자리에서 죽는 경우는 적었습니다."
    id: "s2", start: 4.46, dur: 4.19, talker: null,
    chars: [
      { id: "s2-joein", variant: "militia", hat: "samo", shirt: JOEIN.shirt, pants: JOEIN.pants,
        x: 50, bottom: 560, w: 420, expr: "neutral", pose: "down" },
    ],
    changes: [],
  },
  {
    // S3 — "사약의 '사' 자는, 죽을 사가 아니라 줄 사입니다." / "임금이 하사한다는 뜻이죠."
    id: "s3", start: 8.20, dur: 8.01, talker: null,
    chars: [
      { id: "s3-king", variant: "king", shirt: KING.shirt, pants: KING.pants,
        x: 51, bottom: 640, w: 260, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S4 — "참수나 교수형과는 다른, 일종의 명예형이었습니다." / 예기 인용
    id: "s4", start: 15.76, dur: 12.33, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S5 — "그래서 시신을 보존해 준 거죠." / 대상 한정 — "받았습니다"의 행위 주체를 rig로.
    id: "s5", start: 27.64, dur: 12.27, talker: null,
    chars: [
      { id: "s5-off1", variant: "admiral", shirt: OFFICIAL1.shirt, pants: OFFICIAL1.pants,
        x: 38, bottom: 660, w: 360, expr: "neutral", pose: "down", flip: true },
      { id: "s5-off2", variant: "admiral", shirt: OFFICIAL2.shirt, pants: OFFICIAL2.pants,
        x: 62, bottom: 640, w: 360, expr: "neutral", pose: "down" },
    ],
    changes: [],
  },
  {
    // S6(앵커) — "관복을 갖춰 입었습니다." / "방 안에서 무릎을 꿇었습니다." / "그렇게 담담히 사약을 받아 마셨죠."
    id: "s6", start: 39.46, dur: 9.75, talker: null,
    chars: [
      { id: "s6-gwanwon", variant: "admiral", shirt: GWANWON.shirt, pants: GWANWON.pants,
        x: 73, bottom: 610, w: 380, expr: "neutral", pose: "down" },
      { id: "s6-joein", variant: "militia", hat: "samo", shirt: JOEIN.shirt, pants: JOEIN.pants,
        x: 23, bottom: 565, w: 380, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S7 — "그런데 정작 무엇이 들었는지는 지금도 모릅니다." / "비상이나 초오 같은 독초로 추정될 뿐입니다."
    id: "s7", start: 48.76, dur: 7.41, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S8 — "그런데도 안 죽는 경우가 드물지 않았다고 전해집니다."
    id: "s8", start: 55.72, dur: 6.43, talker: null,
    chars: [
      { id: "s8-joein", variant: "militia", hat: "samo", shirt: JOEIN.shirt, pants: JOEIN.pants,
        x: 50, bottom: 560, w: 420, expr: "neutral", pose: "shrug" },
    ],
    changes: [],
  },
  {
    // S9 — "그러면 아궁이에 장작을 지폈다고 전해집니다." / "그래도 안 되면 목을 졸랐다고 전해집니다."
    // "지폈다"의 행위 주체 — 나졸이 아궁이 앞에 쭈그려 불을 땐다.
    id: "s9", start: 61.70, dur: 8.49, talker: null,
    chars: [
      { id: "s9-najol", variant: "militia", hat: "samo", shirt: NAJOL.shirt, pants: NAJOL.pants,
        x: 68, bottom: 560, w: 340, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S10 펀치라인 — "시신을 지키려던 배려가, 다른 방식을 불러온 셈입니다."
    id: "s10", start: 69.74, dur: 4.47, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S11 아웃트로
    id: "s11", start: 73.76, dur: 6.54, talker: "s11-host",
    chars: [
      { id: "s11-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
