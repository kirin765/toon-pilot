// Director scene script — EP.26 허준 해부 픽션 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, noBadge?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표 (지뢰 #62) — 장소를 고유명으로 먼저 확정하고 앵커 소품·배경 소스를 도출한다.
//   distinct 배경 6 인젝터 / 9 시각 변주, 동일 배경 연속 ≤3(최대 2), 무인 씬 연속 ≤2(s2·s3 딱 2개).
//
// | 씬  | 문장 요지                            | 장소(고유명)                  | 시간대 | 배경 소스                                   | 앵커 소품                    | 캐릭터            |
// |-----|---------------------------------------|-------------------------------|--------|----------------------------------------------|------------------------------|-------------------|
// | s1  | 훅 — 제자가 스승의 시신을 해부한다    | 사가 사랑채 방 안(소설 속 밤)  | 밤     | roomBgSVG tone="night" (EP.16 세살창+EP.19 사가) | **멍석 위 흰 천(시신)**      | 허준(militia)     |
// | s2  | 그 스승은 실존 인물이 아니다          | 같은 방 — 다른 벽면(줌)        | 밤     | roomBgSVG tone="night" (연속 2/3)             | **이름패 「柳義泰」**          | 허준(shocked)     |
// | s3  | 이름의 모델은 허준 사후 37년 출생     | 궁궐 정전 앞마당(숙종대 어의)  | 낮     | courtBgSVG(EP.24→EP.25 정전) · 방문대 없음     | **이름패 「劉以泰」 + 37년**   | (무인 1/2)        |
// | s4  | 1965년 글 → 이은성의 이야기           | 현대 자료 열람실               | —      | archiveBgSVG(신규 — 연표 패널+선반+책상)       | **1965년 인쇄 지면 + 소설**   | host              |
// | s5  | 살인 사건이면 나라가 시신을 살폈다    | 관아 동헌 앞마당(검시 현장)    | 낮     | yardBgSVG(EP.19 동헌 개정판+막돌담)            | **멍석 위 흰 천 + 검시관 2인**| 관원·의생         |
// | s6  | 의술로 시신을 여는 건 금기 / 신체발부  | 사가 서재 방 안               | 낮     | roomBgSVG tone="day" (서안 런)                 | **서안 위 펼친 『효경』**      | 선비(militia)     |
// | s7  | 허준의 스승은 기록에 없다             | 내의원 서고 방 안             | 낮     | roomBgSVG tone="stack" (연속 2/3, 냉톤)        | **3단 서가 + 빈 칸**          | 허준(militia)     |
// | s8  | 1608 선조 승하 → 대간의 탄핵 → 벌     | 궁궐 정전 앞마당(삭직 방문)    | 낮     | courtBgSVG + 방문대 「削職」                    | **삭직 방문(榜文) 게시대**(좌) | 허준 + 대간(우)   |
// | s9  | 변방 유배 → 유배지에서 절반 이상 집필 | 변방 유배 처소(눈밭)          | 낮     | snowBgSVG tone="day" (sp18 눈밭+EP.14 설송)    | **서안 + 붓 + 원고 더미**     | 허준(백의)        |
// | s10 | 2년 뒤 광해군의 전교                  | 궁궐 어전                     | 낮     | throneBgSVG(EP.5→17→25 오봉병+어좌+단)         | **펼친 실록(傳曰 원문)**      | 광해군(king)      |
// | s11 | 펀치 — 스승을 가른 밤이 아니다        | 변방 유배 처소(눈밭 새벽)      | 새벽   | snowBgSVG tone="dawn"(수미상관)                | **완성된 동의보감 더미**      | 허준(백의)        |
// | s12 | 아웃트로                              | —                              | —      | —                                              | —                            | host              |
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   허준 = militia (갓 + 도포). 남색 의원 도포 → 유배 씬(s9·s11)은 **백의(베이지)** 색변주(지뢰 #11 신분 전환).
//   검시 관원(s5) = militia hat:"samo" (사모+단령, 1438년 이후이므로 흉배 有 — 1454 제도 이후라 noBadge 불필요는 아님!
//     ⚠ s5는 시대 특정이 없는 제도 설명 씬이라 조선 후기 기준으로 흉배 유지).
//   의생(s5) = militia 갓 색변주 — 오작인(천민)이 아니라 검시 입회 의생으로 설정(복식 격 정합).
//   선비(s6) = militia 갓 + 갈색 도포.
//   대간(s8) = militia hat:"samo" 흑단령.
//   광해군(s10) = king (곤룡포 홍색 + 익선관 — 지뢰 #64 소각 부활본).
//   host = s4(자료 열람 해설) · s12(아웃트로).
//
// 씬 경계 = S5 문장 테이블(19문장 → 11씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. **「의주」 표기 금지** — 실록에 배소 지명이 없다(削職→門外黜送→中道付處, 「流配荒裔」). s9·s11은 지명 없이 "변방".
//   2. **「실록은 이렇게 적었다」 프레이밍 금지** — s10 인용은 광해군의 전교(傳曰). 스탬프에 「傳曰」 명시.
//   3. **1990년을 '이야기가 만들어진 해'로 쓰지 말 것** — s4 연표 패널은 1965(글) → 1975(극본) → 1990(유고 출간) 순서를 그대로 노출.
//   4. **해부 장면의 최초 영상화 매체 특정 금지**(「집념」 필름 미보존, 확인 실패) — s4 스탬프는 확인된 두 매체만.
//   5. **노정우 실명 미사용**(근현대 실명, EP.11 선례) — 화면도 「1965년 한 한의학자의 글」까지.
//   6. **검시(국법) ↔ 해부(금기) 구별을 화면에서도 유지** — s5는 검시 제도(『신주무원록』 1438), s6는 금기. 같은
//      「멍석+흰 천」 자산을 s1(소설 속 해부)과 s5(제도상 검시)에 쓰되 **s5에는 칼·도구를 두지 않는다.**
//   7. 시신 묘사 톤(EP.19 계보) — 인체 윤곽·유혈 금지. 흰 천 + 짚신 2짝 + 천 주름까지만.
//
// ⚠ 시그니처 표 준수 메모:
//   · 흰 천 시신 = 머리 돔 + 목 잘록 + 무릎 봉우리 + **천 밖 짚신 2짝** + 주름 + rig와 같은 외곽선(EP.19 4라운드 규격).
//     매끈한 원통은 예외 없이 "말아둔 이불/자루"로 읽힌다.
//   · 이름패 = **미니 기와 개석(용마루+처마 반전) + 계단형 2단 대좌 + 사각 어깨 + 세로 한자 `<text>`**(EP.22 s5 규격).
//     상단 반원 + 쐐기 받침은 "서핑보드/다리미판"이 된다.
//   · 한자는 손으로 획을 그리지 말고 **SVG `<text>`**(지뢰 #67) — 지면이 주 소품인 s6·s10은 실제 글자 세로쓰기.
//   · 한옥 창호 = 촘촘한 세로살 + 가로 3연 밴드 + **밝은 창호지 면 + 어두운 살** + 하단 궁판(지뢰 #45).
//     밤 실내라도 창 안에 달·별 금지.
//   · 기왓골은 경사면 따라 **평행 세로**(지뢰 #60 방사형 금지), 처마 반전 필수.
//   · 눕혀 쌓은 서책은 **왼쪽 끝 갈색 제첨 탭 필수**(없으면 "냅킨/식빵"). 세워 꽂은 색색 책등 서가는
//     조선 씬 금지 — s4(현대 자료실)에서만 세워 꽂는다.
//   · 대간 실루엣은 불투명도 0.96↑(지뢰 #51 유령 오독) + 중경 스케일.
//   · 배경 글로우 원/타원 전면 금지(지뢰 #47·EP.20 확장).
//   · 소품 진입은 y슬라이드만(지뢰 #40 — x슬라이드는 clipped_text).
//   · 침엽수는 적갈색 줄기 + **비대칭** 수관(좌우대칭 3단 원뿔 = 크리스마스 트리).
var TRANSITION = 0.45;

var HEOJUN     = { shirt: "#3d4f66", pants: "#26303f" };  // 허준 — 내의원 의관 남색 도포
var HEOJUN_EXL = { shirt: "#d9cdb4", pants: "#8a7c63" };  // 유배 중의 허준 — 백의(삭직 후)
var OFFICER    = { shirt: "#2b3140", pants: "#1a2130" };  // 검시 관원(수령) — 아청 흑단령
var CLERK      = { shirt: "#6b7a6a", pants: "#3f4a3e" };  // 검시에 입회한 의생(醫生)
//   ⚠ 오작인(천민)으로 두면 갓+도포가 신분에 안 맞는다 — rig 6종 제약상 의생으로 설정
var SEONBI     = { shirt: "#6b5a44", pants: "#40352a" };  // 서재의 선비
var DAEGAN     = { shirt: "#333b4c", pants: "#212734" };  // 대간(사헌부·사간원) — 흑단령
var GWANGHAE   = { shirt: "#a8402f", pants: "#26221c" };  // 광해군 — 곤룡포 홍색
var HOST       = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "사극 최고의 명장면으로 꼽히는 대목이 있습니다. / 제자 허준이 스승의 시신을 해부하는 장면이죠."
    id: "s1", start: 0, dur: 8.85, talker: null,
    chars: [
      { id: "s1-heojun", variant: "militia", shirt: HEOJUN.shirt, pants: HEOJUN.pants,
        x: 82, bottom: 590, w: 380, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [{ at: 5.30, char: "s1-heojun", expr: "shocked" }],
  },
  {
    // S2 — "그런데 그 스승은 실존 인물이 아닙니다. / 그 스승의 이름은 유의태."
    id: "s2", start: 8.40, dur: 7.01, talker: null,
    chars: [
      { id: "s2-heojun", variant: "militia", shirt: HEOJUN.shirt, pants: HEOJUN.pants,
        x: 82, bottom: 590, w: 370, expr: "shocked", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S3 — "이름을 가져온 의원은 허준이 죽고 삼십칠 년 뒤에 태어났습니다." (무인 1/2 — 문장에 행위 주체 없음)
    id: "s3", start: 14.96, dur: 5.81, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S4 — "그 이름은 천구백육십오년 한 한의학자의 글에서 나왔습니다. / 그걸 이야기로 만든 사람이 작가 이은성이죠."
    id: "s4", start: 20.32, dur: 7.81, talker: "s4-host",
    chars: [
      { id: "s4-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 84, bottom: 570, w: 400, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [{ at: 25.00, char: "s4-host", expr: "proud" }],
  },
  {
    // S5 — "살인 사건이 나면 나라가 시신을 살폈습니다."
    id: "s5", start: 27.68, dur: 5.89, talker: null,
    chars: [
      { id: "s5-officer", variant: "militia", hat: "samo", shirt: OFFICER.shirt, pants: OFFICER.pants,
        x: 19, bottom: 590, w: 350, expr: "neutral", pose: "point" },
      { id: "s5-clerk", variant: "militia", shirt: CLERK.shirt, pants: CLERK.pants,
        x: 84, bottom: 580, w: 330, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S6 — "하지만 의학을 배우려 시신을 여는 건 금기였죠. / 부모에게 받은 몸이라 머리카락도 안 잘랐거든요."
    id: "s6", start: 33.12, dur: 8.71, talker: "s6-seonbi",
    chars: [
      { id: "s6-seonbi", variant: "militia", shirt: SEONBI.shirt, pants: SEONBI.pants,
        x: 80, bottom: 590, w: 380, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 34.60, char: "s6-seonbi", expr: "angry", pose: "raised" },
      { at: 38.20, char: "s6-seonbi", expr: "neutral", pose: "down" },
    ],
  },
  {
    // S7 — "허준이 누구에게 배웠는지는 기록에 없습니다."
    id: "s7", start: 41.38, dur: 4.55, talker: null,
    chars: [
      { id: "s7-heojun", variant: "militia", shirt: HEOJUN.shirt, pants: HEOJUN.pants,
        x: 82, bottom: 590, w: 370, expr: "neutral", pose: "shrug", flip: true },
    ],
    changes: [],
  },
  {
    // S8 — "대신 천육백팔년 선조가 죽자 임금의 의원 허준은 벌을 받습니다."
    id: "s8", start: 45.48, dur: 6.07, talker: null,
    chars: [
      { id: "s8-heojun", variant: "militia", shirt: HEOJUN.shirt, pants: HEOJUN.pants,
        x: 52, bottom: 570, w: 350, expr: "shocked", pose: "down" },
      { id: "s8-daegan", variant: "militia", hat: "samo", shirt: DAEGAN.shirt, pants: DAEGAN.pants,
        x: 81, bottom: 582, w: 320, expr: "angry", pose: "point", flip: true },
    ],
    changes: [{ at: 49.30, char: "s8-heojun", pose: "shrug" }],
  },
  {
    // S9 — "관직을 빼앗기고 변방으로 유배됐죠. / 유배지에서 책의 절반 이상을 썼습니다."
    id: "s9", start: 51.10, dur: 7.35, talker: null,
    chars: [
      { id: "s9-heojun", variant: "militia", shirt: HEOJUN_EXL.shirt, pants: HEOJUN_EXL.pants,
        x: 47, bottom: 590, w: 390, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 55.00, char: "s9-heojun", expr: "proud" }],
  },
  {
    // S10 — "이 년 뒤 광해군은 이렇게 말했습니다. / 유배되어 떠돌아다니는 가운데서도 그 일을 쉬지 않았다."
    // ⚠ 지뢰 #66 — 어좌 중심 x(≈523px)에 왕을 정렬해야 어좌가 '앉는 자리'로 읽힌다.
    id: "s10", start: 58.00, dur: 9.19, talker: "s10-king",
    chars: [
      { id: "s10-king", variant: "king", shirt: GWANGHAE.shirt, pants: GWANGHAE.pants,
        x: 48, bottom: 700, w: 400, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 62.10, char: "s10-king", pose: "point", expr: "proud" }],
  },
  {
    // S11 펀치라인 — "허준의 명장면은 스승을 가른 밤이 아닙니다. / 죄인이 되고도 붓을 놓지 않은 일 년 팔 개월."
    id: "s11", start: 66.74, dur: 7.87, talker: null,
    chars: [
      { id: "s11-heojun", variant: "militia", shirt: HEOJUN_EXL.shirt, pants: HEOJUN_EXL.pants,
        x: 79, bottom: 590, w: 380, expr: "proud", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S12 아웃트로
    id: "s12", start: 74.16, dur: 6.44, talker: null,
    chars: [
      { id: "s12-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
