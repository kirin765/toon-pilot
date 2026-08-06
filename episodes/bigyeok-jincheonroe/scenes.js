// Director scene script — EP.28 비격진천뢰 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표 (지뢰 #62) — 장소를 고유명으로 먼저 확정하고 앵커 소품·배경 소스를 도출한다.
//   distinct 배경 6종(왜군 진영 야영지·경주 읍성 성문·군기시 공방·한지 도판·발굴 구덩이·CT 판독) + 아웃트로.
//   동일 배경 연속 ≤3 (camp: s1·s2 연속 2 + s7 재등장 — 사이에 4씬).
//
// | 씬  | 문장    | 요지                          | 장소(고유명)               | 시간대 | 배경 소스                          | 앵커 소품                        | 캐릭터                  |
// |-----|---------|-------------------------------|-----------------------------|--------|------------------------------------|-----------------------------------|-------------------------|
// | s1  | [1-2]   | 훅 — 쇳덩이 낙하·왜군 구경     | 경주성 안 왜군 진영 야영지  | 밤     | campBgSVG(신규: 군막+모닥불+성곽 원경) | **비격진천뢰(도화선 불꽃)**       | 왜군 실루엣 3(비ríg)    |
// | s2  | [3]     | 폭발                          | 같은 진영 (연속 2/3)        | 밤     | campBgSVG + 섬광                    | **폭발 버스트+파편**              | 실루엣 2(튕겨남)        |
// | s3  | [4]     | 실록·1592·경주성              | 경주 읍성 성문 앞           | 밤     | gateBgSVG(EP.25 숭례문 개정판 재사용, night) | 성곽+홍예문+문루                | (무인 — 전경 인서트)    |
// | s4  | [5]     | 화포장 이장손                  | 군기시 화포 공방            | 낮     | forgeBgSVG(신규: EP.27 room 계열+화로) | **화로+포탄 받침대**              | 이장손(militia+패랭이)  |
// | s5  | [6-7]   | 속: 화약·쇳조각·나무 축        | 한지 도판(단면도)           | —      | sheetBgSVG(신규: 한지+제첨)         | **단면 컷어웨이**                 | (무인 — 인포그래픽)     |
// | s6  | [8-10]  | 감는 횟수=시계, 10/15          | 한지 도판 2 (연속 2/3)      | —      | sheetBgSVG + 목곡 비교              | **목곡 2본(받침대 위)**           | 이장손(포인팅)          |
// | s7  | [11-12] | 뜸→모여듦→폭발·20여 명         | 경주성 안 왜군 진영(재연)   | 밤     | campBgSVG 재사용(s1과 4씬 간격)     | 비격진천뢰+버스트                 | 실루엣 3(모여듦)        |
// | s8  | [13-14] | 성 포기·곡식 만여 석           | 경주 읍성 성문 앞           | 새벽   | gateBgSVG(dawn 톤 변주)             | **가마니 더미(EP.20 규격)**       | 박진(admiral)           |
// | s9  | [15]    | 2018 고창 11발                 | 고창 무장현 관아 터 발굴 구덩이 | 낮(현대) | digBgSVG(신규: 토층 단면)         | **구덩이 속 포탄 11발**           | (무인 — 인포그래픽)     |
// | s10 | [16-17] | CT·심지 구멍 2·불발 설계       | CT 판독 화면                | —      | ctBgSVG(신규: 스캔 프레임)          | **X선 투시 포탄+뚜껑 확대**       | (무인 — 인포그래픽, 연속 2) |
// | s11 | [18]    | 아웃트로                       | —                           | —      | —                                  | —                                 | host                    |
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   이장손 = militia + paeraengi(공장工匠 신분) + 회갈색 작업복.
//   박진 = admiral (전립+두정갑 — 경상좌병사).
//   왜군 = rig 금지(외국인 variant 없음, EP.8 선례) → **비rig 실루엣**(먹색 0.97 불투명, 창 동반).
//     복식 디테일 0(고증 회피), 정체는 chip 「왜군 진영」+내레이션이 전달. S8 블라인드로 검증.
//   host = s11(아웃트로). 내레이션은 3인칭 해설 → talker 없음.
//
// 씬 경계 = S5 문장 테이블(18씬 문장 → 10씬 + 아웃트로). 리드 0.3~0.4s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. "세계 최초 시한폭탄" 단정 금지 — 스탬프도 "감는 횟수=폭발 시간"까지만(중국 진천뢰 반례).
//   2. 사망 수는 실록 수치 「20여 명」만(징비록 30여 명 병기 금지).
//   3. 출토 지점은 「구덩이」(수혈) — "마당에 놓인" 연출 금지. 11발 매납 시점 미확정 → 화면도 시점 주장 없음.
//   4. 심지 구멍 2개는 「뚜껑(개철)」에 — 몸통에 그리지 않는다.
//   5. 이장손 생몰 미상 — 연도 스탬프 금지. "1591년 발명" 류 단정 금지.
//
// ⚠ 시그니처 표 준수 메모:
//   · 포탄(구형 철구)은 원형 기물 단독 클로즈업 금지(=행성/달, 지뢰 #86) → 항상 지면 접점+임팩트 균열
//     +도화선 불꽃(시그니처) 동반. s4는 나무 받침대(스케일 기준자, 지뢰 #65). 밤하늘에 달 금지(원형 중복).
//   · 목곡 2본은 세로 긴 기물 단독 금지(=미사일) → 나무 받침대+비스듬+도화선 꼬리+도판 프레임.
//   · 실루엣은 불투명 0.97(유령 금지)+발밑 지면 접점+창(군졸 시그니처). 쓰러짐은 기울임만(머리 프레임 밖 금지, 지뢰 #41).
//   · 배경 글로우 원형 금지(지뢰 #47) — 모닥불 빛은 낮은 가로 타원, 저채도.
//   · 기왓골 평행 세로 + 윤곽 클립(지뢰 #73), 처마 반전 — gateBgSVG(EP.25 개정판) 그대로.
//   · 한자는 SVG <text>(지뢰 #67). 도판 제첨 「飛擊震天雷」.
//   · 소품 진입은 y슬라이드만(지뢰 #40).
var TRANSITION = 0.45;

var JANGSON = { shirt: "#7a6a52", pants: "#4a3f30" };   // 이장손 — 장인 회갈 작업복
var PAKJIN  = { shirt: "#8e3626", pants: "#26221c" };   // 박진 — 두정갑 적갈
var HOST    = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "왜군 진영 한복판에, 쇳덩이 하나가 떨어졌습니다. / 왜군들은 그게 뭔지 몰라, 서로 밀며 구경했죠."
    id: "s1", start: 0, dur: 10.31, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S2 — "잠시 뒤, 쇳덩이가 터졌습니다."
    id: "s2", start: 9.86, dur: 4.51, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 — "실록이 전하는, 천오백구십이년 경주성의 밤이죠." (박진 — 밤 야습 직전, 실록 문장의 행위 주체)
    id: "s3", start: 13.92, dur: 4.99, talker: null,
    chars: [
      { id: "s3-pakjin", variant: "admiral", shirt: PAKJIN.shirt, pants: PAKJIN.pants,
        x: 24, bottom: 570, w: 380, expr: "neutral", pose: "point" },
    ],
    changes: [],
  },
  {
    // S4 — "정체는 화포장 이장손이 만든 비격진천뢰였습니다."
    id: "s4", start: 18.46, dur: 4.97, talker: null,
    chars: [
      { id: "s4-jangson", variant: "militia", hat: "paeraengi", shirt: JANGSON.shirt, pants: JANGSON.pants,
        x: 80, bottom: 570, w: 350, expr: "proud", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S5 — "그 쇳덩이 속에는 화약과 쇳조각을 채웠습니다. / 그리고 도화선을 칭칭 감은, 나무 축이 들어 있었죠."
    id: "s5", start: 22.98, dur: 9.49, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S6 — "그 감는 횟수가 곧 시계였습니다. / 열 번 감으면 빨리 터졌습니다. / 열다섯 번이면, 더 늦게 터졌죠."
    id: "s6", start: 32.02, dur: 10.79, talker: null,
    chars: [
      { id: "s6-jangson", variant: "militia", hat: "paeraengi", shirt: JANGSON.shirt, pants: JANGSON.pants,
        x: 85, bottom: 566, w: 360, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 35.8, char: "s6-jangson", expr: "proud" },
      { at: 39.1, char: "s6-jangson", pose: "raised" },
    ],
  },
  {
    // S7 — "폭탄이 뜸을 들이는 사이, 왜군이 모여든 거죠. / 쇳조각이 별처럼 튀었고, 이십여 명이 즉사했습니다."
    id: "s7", start: 42.36, dur: 9.94, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S8 — "다음 날, 왜군은 경주성을 버리고 달아났습니다. / 성안에는 곡식 만여 석이 남아 있었죠."
    id: "s8", start: 51.85, dur: 8.45, talker: null,
    chars: [
      { id: "s8-pakjin", variant: "admiral", shirt: PAKJIN.shirt, pants: PAKJIN.pants,
        x: 74, bottom: 570, w: 400, expr: "neutral", pose: "point" },
    ],
    changes: [{ at: 56.6, char: "s8-pakjin", expr: "proud", pose: "raised" }],
  },
  {
    // S9 — "사백여 년 뒤, 고창 관아 터 구덩이에서 열한 발이 무더기로 나왔습니다."
    id: "s9", start: 59.85, dur: 6.72, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S10 — "단층 촬영을 해 보니, 뚜껑에 심지 구멍이 두 개였습니다. / 하나가 꺼져도 터지도록, 불발까지 계산한 겁니다."
    id: "s10", start: 66.12, dur: 10.05, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S11 아웃트로
    id: "s11", start: 75.72, dur: 6.08, talker: null,
    chars: [
      { id: "s11-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
