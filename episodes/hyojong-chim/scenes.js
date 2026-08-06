// Director scene script — EP.29 효종의 침 한 방 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표 (지뢰 #62) — 장소를 고유명으로 먼저 확정하고 앵커 소품·배경 소스를 도출한다.
//   distinct 배경 7종(대조전 침전·훈련도감 연무장·대조전 합문 밖 마당·대조전 영외 툇마루·
//   실록 지면 도판·의금부 마당·창덕궁 편전 어전) + 아웃트로.
//   동일 배경 연속 ≤3: 침전 s1·s2(2) → s6·s7·s8(3, 상한) → s9가 끊음 → s10 단독.
//
// | 씬  | 문장     | 요지                        | 장소(고유명)                | 시간대 | 배경 소스                              | 앵커 소품                    | 캐릭터                    |
// |-----|----------|-----------------------------|------------------------------|--------|----------------------------------------|------------------------------|---------------------------|
// | s1  | [1]      | 훅 — 침 맞은 직후 "고맙다"   | 창덕궁 대조전 침전 안        | 낮(사시)| roomBgSVG "sick"(EP.26·27 계열 개정)  | **침통+침(소반 위)**          | 효종(king)·신가귀(militia·사모) |
// | s2  | [2-3]    | 4/27 귀 앞 부스럼 · 이레     | 같은 침전 — **이레 전 아침**(연속 2/3) | 아침 | roomBgSVG "morn"(밝기·소품 교체)  | **약사발+옹기(소반 위)**      | 효종·유후성               |
// | s3  | [4]      | 북벌을 내세우던 41세 왕      | 훈련도감 연무장              | 낮     | drillBgSVG(신규: 성곽 원경+흙마당)     | **관혁(貫革) 과녁**           | 효종·군졸(admiral+창)     |
// | s4  | [5-6]    | 신가귀 = 무관 · 작년 볼기 종기 | 대조전 합문 밖 박석 마당    | 낮     | courtBgSVG(EP.22→27 정전 재사용)       | **침통(손) + 환도**           | 신가귀                    |
// | s5  | [7-8]    | 어의 유후성 「不可輕試」      | 대조전 영외(楹外) 툇마루     | 낮     | verandaBgSVG(신규: 기둥·난간·마루널)   | **약장(藥欌)**                | 유후성·신가귀             |
// | s6  | [9-10]   | 세자가 매달림 → 却之         | 대조전 침전 (연속 1/3)       | 낮     | roomBgSVG "sick"                       | **수라 소반(물린 상)**        | 효종·세자(king 아청·작게) |
// | s7  | [11-12]  | 침 → 피 → "微可貴"           | 대조전 침전 (연속 2/3)       | 낮     | roomBgSVG "sick"                       | **침을 든 손 + 침구멍**       | 효종·신가귀               |
// | s8  | [13]     | 血湧不止 — 혈갈·괴화 실패    | 대조전 침전 (연속 3/3)       | 낮     | roomBgSVG "sick"                       | **지혈약 사발 + 물든 무명천** | 효종·신가귀               |
// | s9  | [14]     | "실록은 적었습니다"          | 실록 지면(한지 도판)         | —      | sheetBgSVG(EP.28 재사용)               | **한자 지면 「蓋鍼犯血絡」**  | (무인 — 인포그래픽)       |
// | s10 | [15-16]  | 久病手戰 → 그날 낮 승하      | 대조전 침전 (연속 1)         | 낮→어둠 | roomBgSVG "dim"                       | **떨리는 손 + 침**            | 신가귀·효종               |
// | s11 | [17]     | 한 달 남짓 뒤 교형           | 의금부 마당                  | 낮     | prisonBgSVG(신규: 막돌담+판문 대문)    | **판문 대문 + 오랏줄**        | 신가귀·나졸(admiral)      |
// | s12 | [18-20]  | 참형 대신 교형 — 새 임금     | 창덕궁 편전 어전             | 낮     | throneBgSVG(EP.5→27 재사용)            | **어좌 + 계본(啓本)**         | 현종(king 아청)·대신      |
// | s13 | [21]     | 아웃트로                     | —                            | —      | —                                      | —                            | host                      |
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   효종 = king + 익선관 + 홍룡포(#8e3626).
//   세자(s6) = king + **아청 곤룡포(#2c3d5c)** + w 작게(340). 현종(s12) = **같은 rig·같은 색·같은 크기 계열**
//     — 펀치라인 "침을 말렸던 그 아들이었습니다"가 성립하려면 s6의 세자와 s12의 임금이 **한눈에 동일인**이어야 한다.
//   신가귀 = militia + samo + **녹색 단령(#4a6b3f)** + 환도(무관 시그니처, s4).
//   유후성 = militia + samo + **남색 단령(#2f4f7a)** — 신가귀와 단령 색으로만 구분.
//   ⚠ 사모는 중국 관모 오독 리스크 → 흉배(1454년 제도 이후라 noBadge 불필요) + 각대 + 씬 맥락으로 보강.
//   군졸/나졸 = admiral(전립+두정갑) + 창. 대신 = militia + samo + 자색 단령(#5b4a6b).
//   host = s13. 내레이션은 3인칭 해설 → talker 없음(전 씬 립싱크 없음).
//
// 씬 경계 = S5 문장 테이블(21문장 → 12씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
// ⚠ 정보량 '중간'의 권장 씬 수는 8~10 + 아웃트로인데 12를 썼다 — 배경 연속 3씬 상한(지뢰 #62)을
//   지키려면 침전 6씬 사이에 다른 장소를 끼워야 했다. 씬당 평균 6.5s로 페이싱은 유지된다.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. **却之의 대상은 왕세자다**(유후성 아님). s5(유후성 반대)와 s6(세자 만류→물리침)을 **다른 씬·다른 장소**로
//      분리해, 화면이 "왕이 어의를 무시했다"는 없는 인과를 만들지 않게 한다.
//   2. 「蓋鍼犯血絡」은 사관의 추정 어사이고 개수실록은 반대설을 병기했다 → s9는 **실록 지면**으로 화자를 넘기고,
//      스탬프에 이설(或云)을 함께 노출한다. 화면이 사인을 단정하지 않는다.
//   3. 작년 침은 **볼기 종기(髀腫)**다 — s4 스탬프에 부위를 명시. "왕을 살렸다"는 표현 금지.
//   4. 「微可貴, 病幾危矣」의 목적어는 **병**이다 — 스탬프 국역을 그대로 쓴다.
//   5. 감형 주체는 **현종 본인**(수렴청정 없음) — s12에 수렴(발) 금지. 「旬日不許」를 스탬프로 노출.
//   6. 사망 원인의 현대 의학 진단(측두동맥 등) 화면 금지. 암살설 흔적 0.
//   7. 교형 장면 **직접 묘사 금지** — 의금부 마당의 닫힌 판문 + 오랏줄까지만. 형구·시신 없음.
//
// ⚠ 시그니처 표 준수 메모:
//   · 침(鍼)은 **가늘고 짧게 + 소반 위 눕힘** — 세로 긴 기물 단독 배치 금지(지뢰 #84 = 망원경/미사일).
//     침통도 눕혀서 뚜껑을 열어 둔다. 붓 오독 회피를 위해 붓털 없음 + 금속 광택 스트로크.
//   · 소반 위 사발은 상판과 명도 대비 필수(어두운 소반 + 밝은 백자).
//   · 피는 **점·번짐**까지만 — 흐르는 붉은 띠는 톤·수익화 리스크. 무명천의 얼룩으로 전달.
//   · 어좌는 비워 두지 않는다(지뢰 #50·#66) — 현종 rig를 어좌 앞 중심에 정렬.
//   · 과녁은 **관혁(사각 천 + 중앙 검은 사각)** — 동심원 다색 표적은 20C 양궁 표적(시대착오, ART-RULES).
//   · 판문 대문은 세로 널판 + 가로 띠장 2 + 못(패널 액자 = 서양/중국 판문).
//   · 막돌담은 불규칙 자연석 + 흙색 줄눈(균일 running-bond = 근대 조적).
//   · 한자는 SVG <text>만(지뢰 #67). `writing-mode` 금지 — 글자당 <text>로 y를 직접 쌓는다(지뢰 #78).
//   · 소품 진입은 y슬라이드만(지뢰 #40). 배경 글로우 원형 금지(지뢰 #47).
//   · 기왓골 세로 + 처마 반전 완만(지뢰 #60·#73).
var TRANSITION = 0.45;

var HYOJONG  = { shirt: "#8e3626", pants: "#26221c" };   // 효종 — 홍룡포
var SEJA     = { shirt: "#2c3d5c", pants: "#1b2430" };   // 세자=현종 — 아청 곤룡포(동일인 신호)
var GAGWI    = { shirt: "#4a6b3f", pants: "#2b3a24" };   // 신가귀 — 녹색 단령
var HUSEONG  = { shirt: "#2f4f7a", pants: "#1f2d45" };   // 유후성 — 남색 단령
var DAESIN   = { shirt: "#5b4a6b", pants: "#2e2438" };   // 대신 — 자색 단령(당상관)
var GUNJOL   = { shirt: "#5c5a4a", pants: "#2b2a22" };   // 군졸 — 두정갑
var NAJOL    = { shirt: "#4a4238", pants: "#26221c" };   // 나졸
var HOST     = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "자기를 죽인 침에, 조선의 왕은 고맙다고 말했습니다."
    id: "s1", start: 0, dur: 5.49, talker: null,
    chars: [
      { id: "s1-king", variant: "king", shirt: HYOJONG.shirt, pants: HYOJONG.pants,
        x: 30, bottom: 600, w: 420, expr: "happy", pose: "down" },
      { id: "s1-gagwi", variant: "militia", hat: "samo", shirt: GAGWI.shirt, pants: GAGWI.pants,
        x: 74, bottom: 590, w: 380, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [{ at: 2.9, char: "s1-king", expr: "proud" }],
  },
  {
    // S2 — "효종의 오른쪽 귀 앞에 부스럼이 났습니다. / 일주일이 지나도 낫지 않았죠." (이레 전 아침)
    id: "s2", start: 5.04, dur: 7.13, talker: null,
    chars: [
      { id: "s2-king", variant: "king", shirt: HYOJONG.shirt, pants: HYOJONG.pants,
        x: 33, bottom: 600, w: 430, expr: "neutral", pose: "down" },
      { id: "s2-huseong", variant: "militia", hat: "samo", shirt: HUSEONG.shirt, pants: HUSEONG.pants,
        x: 77, bottom: 592, w: 360, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 9.3, char: "s2-king", expr: "shocked" },
      { at: 9.5, char: "s2-huseong", expr: "shocked", pose: "shrug" },
    ],
  },
  {
    // S3 — "북벌을 내세우던 마흔한 살 왕이었습니다."
    id: "s3", start: 11.72, dur: 4.41, talker: null,
    chars: [
      { id: "s3-king", variant: "king", shirt: HYOJONG.shirt, pants: HYOJONG.pants,
        x: 38, bottom: 596, w: 420, expr: "angry", pose: "point" },
      { id: "s3-gunjol", variant: "admiral", shirt: GUNJOL.shirt, pants: GUNJOL.pants,
        x: 62, bottom: 600, w: 360, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 14.0, char: "s3-king", expr: "proud" }],
  },
  {
    // S4 — "침을 잡은 사람은 신가귀라는 무관이었죠. / 작년엔 왕의 볼기 종기를 침으로 터뜨렸습니다."
    id: "s4", start: 15.68, dur: 8.13, talker: null,
    chars: [
      { id: "s4-gagwi", variant: "militia", hat: "samo", shirt: GAGWI.shirt, pants: GAGWI.pants,
        x: 32, bottom: 580, w: 440, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 20.1, char: "s4-gagwi", expr: "proud", pose: "point" }],
  },
  {
    // S5 — "어의 유후성은 반대했습니다. / 가볍게 시험할 일이 아니라고요."
    id: "s5", start: 23.36, dur: 6.79, talker: null,
    chars: [
      { id: "s5-huseong", variant: "militia", hat: "samo", shirt: HUSEONG.shirt, pants: HUSEONG.pants,
        x: 31, bottom: 596, w: 420, expr: "angry", pose: "raised" },
      { id: "s5-gagwi", variant: "militia", hat: "samo", shirt: GAGWI.shirt, pants: GAGWI.pants,
        x: 76, bottom: 600, w: 370, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 27.2, char: "s5-huseong", expr: "shocked", pose: "point" },
      { at: 27.5, char: "s5-gagwi", expr: "angry" },
    ],
  },
  {
    // S6 — "아들인 세자도 미루자고 매달렸습니다. / 왕은 아들의 청을 물리쳤습니다."
    id: "s6", start: 29.70, dur: 7.57, talker: null,
    chars: [
      { id: "s6-king", variant: "king", shirt: HYOJONG.shirt, pants: HYOJONG.pants,
        x: 31, bottom: 600, w: 430, expr: "neutral", pose: "down" },
      { id: "s6-seja", variant: "king", shirt: SEJA.shirt, pants: SEJA.pants,
        x: 75, bottom: 596, w: 340, expr: "shocked", pose: "raised", flip: true },
    ],
    changes: [
      { at: 33.9, char: "s6-king", expr: "angry", pose: "point" },
      { at: 34.2, char: "s6-seja", expr: "shocked", pose: "shrug" },
    ],
  },
  {
    // S7 — "침구멍에서 피가 나오자, 왕이 말했죠. / 가귀가 아니었으면 위태로울 뻔했다."
    id: "s7", start: 36.82, dur: 7.99, talker: null,
    chars: [
      { id: "s7-king", variant: "king", shirt: HYOJONG.shirt, pants: HYOJONG.pants,
        x: 31, bottom: 600, w: 430, expr: "shocked", pose: "down" },
      { id: "s7-gagwi", variant: "militia", hat: "samo", shirt: GAGWI.shirt, pants: GAGWI.pants,
        x: 76, bottom: 592, w: 370, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [{ at: 41.0, char: "s7-king", expr: "happy" }],
  },
  {
    // S8 — "그런데 피가 멎지 않았습니다."
    id: "s8", start: 44.36, dur: 3.51, talker: null,
    chars: [
      { id: "s8-king", variant: "king", shirt: HYOJONG.shirt, pants: HYOJONG.pants,
        x: 31, bottom: 600, w: 430, expr: "shocked", pose: "down" },
      { id: "s8-gagwi", variant: "militia", hat: "samo", shirt: GAGWI.shirt, pants: GAGWI.pants,
        x: 76, bottom: 592, w: 370, expr: "shocked", pose: "shrug", flip: true },
    ],
    changes: [],
  },
  {
    // S9 — "침이 혈락을 범했다고, 실록은 적었습니다." (실록 지면 — 화자를 사료로 넘김)
    id: "s9", start: 47.42, dur: 4.73, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S10 — "가귀는 오랜 병으로, 손이 떨리고 있었죠. / 효종은 그날 낮에 숨을 거뒀습니다."
    id: "s10", start: 51.70, dur: 7.62, talker: null,
    chars: [
      { id: "s10-gagwi", variant: "militia", hat: "samo", shirt: GAGWI.shirt, pants: GAGWI.pants,
        x: 33, bottom: 596, w: 430, expr: "shocked", pose: "point" },
      { id: "s10-king", variant: "king", shirt: HYOJONG.shirt, pants: HYOJONG.pants,
        x: 76, bottom: 600, w: 380, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [{ at: 56.4, char: "s10-king", expr: "shocked" }],
  },
  {
    // S11 — "신가귀는 한 달 남짓 뒤 교형에 처해졌습니다." (형 집행 장면 없음 — 닫힌 판문까지)
    id: "s11", start: 58.87, dur: 5.08, talker: null,
    chars: [
      { id: "s11-gagwi", variant: "militia", hat: "samo", shirt: GAGWI.shirt, pants: GAGWI.pants,
        x: 30, bottom: 580, w: 400, expr: "shocked", pose: "down" },
      { id: "s11-najol", variant: "admiral", shirt: NAJOL.shirt, pants: NAJOL.pants,
        x: 74, bottom: 584, w: 350, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S12 — "목을 베지 않은 건, 새 임금이 버텼기 때문이죠. / 작년의 공은 잊을 수 없다. / 침을 말렸던 그 아들이었습니다."
    id: "s12", start: 63.50, dur: 10.49, talker: null,
    chars: [
      { id: "s12-hyeonjong", variant: "king", shirt: SEJA.shirt, pants: SEJA.pants,
        x: 50, bottom: 600, w: 400, expr: "neutral", pose: "down" },
      { id: "s12-daesin", variant: "militia", hat: "samo", shirt: DAESIN.shirt, pants: DAESIN.pants,
        x: 79, bottom: 596, w: 360, expr: "angry", pose: "raised", flip: true },
    ],
    changes: [
      { at: 68.1, char: "s12-hyeonjong", expr: "angry", pose: "point" },
      { at: 70.9, char: "s12-hyeonjong", expr: "neutral", pose: "down" },
      { at: 71.2, char: "s12-daesin", expr: "shocked", pose: "shrug" },
    ],
  },
  {
    // S13 아웃트로
    id: "s13", start: 73.54, dur: 6.16, talker: null,
    chars: [
      { id: "s13-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
