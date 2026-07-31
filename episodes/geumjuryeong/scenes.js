// Director scene script — EP.25 영조 금주령 / 윤구연 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, noBadge?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표 (지뢰 #62) — 장소를 고유명으로 먼저 확정하고 앵커 소품·배경 소스를 도출한다.
//   distinct 배경 5종(숭례문 앞 / 정전 앞마당 / 경현당 어전 / 관북 역로 / 사관의 서안),
//   동일 배경 연속 ≤3(최대 2), 무인 씬 연속 ≤2(단독 1개).
//
// | 씬  | 문장 요지                          | 장소(고유명)            | 시간대   | 배경 소스                                    | 앵커 소품              | 캐릭터                |
// |-----|-------------------------------------|--------------------------|----------|-----------------------------------------------|------------------------|-----------------------|
// | s1  | 훅 — 증거는 빈 술병 하나 / 목이 잘림 | 숭례문 앞 박석 마당      | 낮 흐림  | gateBgSVG(EP.3→EP.17 성곽+홍예문+문루)        | **빈 술병(대형)**      | 윤구연(admiral)       |
// | s2  | 흉년 → 영조가 술을 금함             | 궁궐 정전 앞마당         | 낮       | courtBgSVG(EP.24 s3~s5 정전 재사용)           | 금주 방문(榜文) 게시대 | 영조(king)            |
// | s3  | 1762 대사헌 탄핵 → 파직 청구        | 경현당 어전 안           | 낮       | throneBgSVG(EP.17 오봉병+어좌+단 재사용)      | 어좌 + 일월오봉도      | 영조, 남태회          |
// | s4  | 영조의 답 — "어찌 파직만으로"        | 경현당 어전 안(연속 2/3) | 낮       | 동일 tone="rage"(붉은 조명 변주)              | 어좌                   | 영조(angry), 남태회   |
// | s5  | 선전관을 보내 증거를 찾게 함        | 한양→북청 관북 역로      | 낮       | roadBgSVG(bench sp6 능선·흙길·이정표)         | **말 탄 선전관**       | 조성(admiral) + 말    |
// | s6  | 가져온 건 술 냄새 나는 빈 병        | 경현당 어전 안(새 런)    | 낮       | throneBgSVG                                    | **소반 위 빈 술병**    | 영조, 조성            |
// | s7  | 분노 → 숭례문 친림 → 참수           | 숭례문 앞 박석 마당      | 낮→암전  | gateBgSVG tone="grim"                          | 홍예문 + 문루          | 영조, 윤구연          |
// | s8  | 정승 셋 만류 → 셋 다 파직           | 경현당 어전 안(새 런)    | 낮       | throneBgSVG                                    | 정승 3인 + 어좌        | 영조 + 정승 3인       |
// | s9  | 12년 뒤 직첩 환급                   | 집경당 어전 안           | 낮(만년) | throneBgSVG tone="late"(따뜻한 톤)             | **직첩 두루마리**      | 늙은 영조             |
// | s10 | 실록 인용 2문장                     | 사관의 서안(실록 지면)   | —        | deskBgSVG(EP.10/EP.19 서안+선장본)            | **펼친 실록**          | 사관(militia)         |
// | s11 | 펀치라인 — 죄가 되기 전             | 숭례문 앞 박석 마당      | 황혼     | gateBgSVG tone="dusk"(수미상관)               | **빈 술병**(s1 회귀)   | (무인 · 단독 1개)     |
// | s12 | 아웃트로                            | —                         | —        | —                                              | —                      | host                  |
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   영조 = king (곤룡포 적색 + 익선관). ⚠ 지뢰 #12 — king 익선관 튜닝(y:-26,s:0.9)은 미검증이라 이 편 렌더 프레임에서 육안 재확인할 것.
//   윤구연(남병사) = admiral (전립+두정갑) — 종2품 무관. "장군"으로 읽혀야 훅이 선다.
//   조성(선전관) = admiral 색 변주 — 선전관은 무관직.
//   남태회(대사헌) = militia hat:"samo" (사모+단령, 흉배 有 — 1762년은 1454년 흉배 제도 이후라 noBadge 불필요).
//   정승 3인 = militia hat:"samo" 색 변주 3종.
//   사관 = militia (갓+도포).
//   host = 아웃트로(s12).
//
// 씬 경계 = S5 문장 테이블(21문장 → 11씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md "화면에도 적용되는 제약") — 화면도 이 선을 지킨다:
//   1. 누룩 소품 금지(실록 원문에 없음 — 2차 기사에만 있는 서술).
//   2. "충청병사"·"호남" 표기 금지 — 남병사(함경도 남병영·북청). s5 이정표도 북청 방면으로.
//   3. 삼정승 차자 본문 인용 금지(실록은 「上箚救之」만 적었다).
//   4. 사도세자 임오화변 연결 금지.
//   5. 참수(s7) — 유혈·잘린 목 묘사 금지. 지뢰 #41대로 **충격선 + 암전**으로만(회전으로 쓰러뜨리지 않는다).
//
// ⚠ 시그니처 표 준수 메모:
//   · 술병 = 호리병(잘록한 허리) + 어두운 아가리 + 옆에 잔. 세로 긴 기물 단독 배치 금지 →
//     s1·s11은 멍석 받침 + 잔 + 냄새 물결선 동반, s1은 윤구연 rig가 옆에 서서 맥락 고정.
//   · 어좌는 절대 비워 두지 않는다(지뢰 #50) — 전 어전 씬에 king rig가 어좌 앞에 있다.
//   · 대신 실루엣(s8 배경열)은 불투명도 0.96↑(지뢰 #51 유령 오독).
//   · 기왓골은 경사면 따라 **평행 세로**(지뢰 #60 방사형 금지), 처마 반전 필수.
//   · 세로쓰기 글줄(s9 직첩·s10 실록)은 **짧은 획을 세로로 끊어 쌓기**(지뢰 #46 십자 오독).
//   · 배경 글로우 원/타원 전면 금지(지뢰 #47·EP.20 확장).
//   · 소품 진입은 y슬라이드만(지뢰 #40 — x슬라이드는 clipped_text).
var TRANSITION = 0.45;

var KING = { shirt: "#8a3226", pants: "#26221c" };      // 영조 곤룡포 — 적색
var KING_OLD = { shirt: "#7a4a3a", pants: "#3a332c" };  // 만년의 영조(s9) — 바랜 톤
var YUN = { shirt: "#3f5a4a", pants: "#26362c" };       // 윤구연(남병사) — 무관 두정갑 녹청
var JOSEONG = { shirt: "#4a4a62", pants: "#2b2b3c" };   // 조성(선전관)
var NAMTAE = { shirt: "#2b3140", pants: "#1a2130" };    // 남태회(대사헌) — 아청 흑단령
var JEONG1 = { shirt: "#333b4c", pants: "#212734" };    // 영의정 — 흑단령(명도만 변주)
var JEONG2 = { shirt: "#2a3140", pants: "#1b202b" };    // 좌의정 — 흑단령
var JEONG3 = { shirt: "#232936", pants: "#161a24" };    // 우의정 — 흑단령
var SAGWAN = { shirt: "#5d6b7a", pants: "#38414d" };    // 사관
var HOST = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "증거는 빈 술병 하나였습니다. / 그걸로 장군의 목이 잘렸습니다."
    id: "s1", start: 0, dur: 7.00, talker: null,
    chars: [
      { id: "s1-yun", variant: "admiral", shirt: YUN.shirt, pants: YUN.pants,
        x: 78, bottom: 560, w: 380, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [{ at: 3.90, char: "s1-yun", expr: "shocked", pose: "shrug" }],
  },
  {
    // S2 — "흉년이 들자 임금 영조는 술을 금했습니다."
    id: "s2", start: 6.55, dur: 4.39, talker: null,
    chars: [
      { id: "s2-king", variant: "king", shirt: KING.shirt, pants: KING.pants,
        x: 28, bottom: 560, w: 420, expr: "angry", pose: "point" },
    ],
    changes: [],
  },
  {
    // S3 — "천칠백육십이년, 대사헌 남태회가 아룁니다. / 몰래 술을 빚는다는 겁니다. / 파직을 청했습니다."
    id: "s3", start: 10.49, dur: 13.58, talker: "s3-namtae",
    chars: [
      { id: "s3-king", variant: "king", shirt: KING.shirt, pants: KING.pants,
        x: 43, bottom: 700, w: 380, expr: "neutral", pose: "down" },
      { id: "s3-namtae", variant: "militia", hat: "samo", shirt: NAMTAE.shirt, pants: NAMTAE.pants,
        x: 85, bottom: 560, w: 350, expr: "neutral", pose: "raised", flip: true },
    ],
    changes: [
      { at: 16.60, char: "s3-namtae", expr: "angry" },
      { at: 20.80, char: "s3-namtae", pose: "point" },
      { at: 20.80, char: "s3-king", expr: "angry" },
    ],
  },
  {
    // S4 — "그런데 영조의 답은 달랐습니다. / 어찌 파직만으로 그치겠는가."
    id: "s4", start: 23.62, dur: 6.75, talker: "s4-king",
    chars: [
      { id: "s4-king", variant: "king", shirt: KING.shirt, pants: KING.pants,
        x: 46, bottom: 700, w: 420, expr: "neutral", pose: "down" },
      { id: "s4-namtae", variant: "militia", hat: "samo", shirt: NAMTAE.shirt, pants: NAMTAE.pants,
        x: 87, bottom: 560, w: 300, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 27.15, char: "s4-king", expr: "angry", pose: "point" },
      { at: 27.15, char: "s4-namtae", expr: "shocked" },
    ],
  },
  {
    // S5 — "임금은 그 증거를 잡아 오라 명합니다." (선전관 조성, 관북 역로)
    id: "s5", start: 29.92, dur: 4.09, talker: null,
    chars: [
      { id: "s5-joseong", variant: "admiral", shirt: JOSEONG.shirt, pants: JOSEONG.pants,
        x: 17, bottom: 700, w: 340, expr: "angry", pose: "point" },
    ],
    changes: [],
  },
  {
    // S6 — "선전관이 가져온 건 술 냄새 나는 빈 병이었습니다."
    id: "s6", start: 33.56, dur: 5.07, talker: null,
    chars: [
      { id: "s6-king", variant: "king", shirt: KING.shirt, pants: KING.pants,
        x: 50, bottom: 700, w: 360, expr: "shocked", pose: "down" },
      { id: "s6-joseong", variant: "admiral", shirt: JOSEONG.shirt, pants: JOSEONG.pants,
        x: 86, bottom: 560, w: 300, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S7 — "영조는 분노해 직접 숭례문으로 나갔습니다. / 윤구연은 그 자리에서 목이 베였습니다."
    id: "s7", start: 38.18, dur: 8.22, talker: null,
    chars: [
      { id: "s7-king", variant: "king", shirt: KING.shirt, pants: KING.pants,
        x: 24, bottom: 560, w: 400, expr: "angry", pose: "point" },
      { id: "s7-yun", variant: "admiral", shirt: YUN.shirt, pants: YUN.pants,
        x: 76, bottom: 560, w: 360, expr: "shocked", pose: "down", flip: true },
    ],
    changes: [{ at: 42.60, char: "s7-yun", pose: "shrug" }],
  },
  {
    // S8 — "정승 셋이 나서서 말렸습니다. / 영조는 답도 없이 셋 다 파직했습니다."
    id: "s8", start: 45.95, dur: 7.40, talker: null,
    chars: [
      { id: "s8-king", variant: "king", shirt: KING.shirt, pants: KING.pants,
        x: 40, bottom: 700, w: 360, expr: "angry", pose: "down" },
      { id: "s8-j1", variant: "militia", hat: "samo", shirt: JEONG1.shirt, pants: JEONG1.pants,
        x: 58, bottom: 560, w: 280, expr: "shocked", pose: "point", flip: true },
      { id: "s8-j2", variant: "militia", hat: "samo", shirt: JEONG2.shirt, pants: JEONG2.pants,
        x: 74, bottom: 590, w: 260, expr: "shocked", pose: "point", flip: true },
      { id: "s8-j3", variant: "militia", hat: "samo", shirt: JEONG3.shirt, pants: JEONG3.pants,
        x: 88, bottom: 620, w: 240, expr: "shocked", pose: "point", flip: true },
    ],
    changes: [
      { at: 49.50, char: "s8-j1", pose: "down" },
      { at: 49.70, char: "s8-j2", pose: "down" },
      { at: 49.90, char: "s8-j3", pose: "down" },
    ],
  },
  {
    // S9 — "십이 년 뒤, 영조는 죽은 그의 벼슬을 돌려줍니다."
    id: "s9", start: 52.90, dur: 5.39, talker: null,
    chars: [
      { id: "s9-king", variant: "king", shirt: KING_OLD.shirt, pants: KING_OLD.pants,
        x: 46, bottom: 700, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 55.00, char: "s9-king", pose: "point" }],
  },
  {
    // S10 — "실록은 이렇게 적었습니다. / 그 일은 금령이 내리기 전이었다. / 사람들이 모두 원통하게 여겼다."
    id: "s10", start: 57.84, dur: 9.96, talker: null,
    chars: [
      { id: "s10-sagwan", variant: "militia", shirt: SAGWAN.shirt, pants: SAGWAN.pants,
        x: 84, bottom: 560, w: 320, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [{ at: 64.30, char: "s10-sagwan", expr: "shocked" }],
  },
  {
    // S11 펀치라인 — "죄가 없어서가 아니었습니다. / 아직 죄가 되기 전이었던 겁니다." (무인, s1 수미상관)
    id: "s11", start: 67.35, dur: 6.81, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S12 아웃트로
    id: "s12", start: 73.71, dur: 5.89, talker: null,
    chars: [
      { id: "s12-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
