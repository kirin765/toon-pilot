// Director scene script — EP.13 조선의 코끼리 (1411) (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge? }],
//   changes [{ at, char, expr?, pose? }].
// 캐스팅: 태종 = king 홍색 곤룡포(EP.10 세종 배색 재사용 — 다른 에피소드라 혼동 없음) s4·s6 /
//   유정현(병조판서) = militia hat:"samo" noBadge(문관 흉배는 1454 제도, 1413년이라 제외 — EP.10 최만리 전례) s4 /
//   이우(전 공조전서) = militia 갓+소색 두루마기(전직이라 관복 아님) s3 / 해설 host s8.
// 코끼리 = rig 아님, 씬별 인라인 SVG(elephant-bench v1 채택 + 앞귀 어두운 톤 보정 — bench/it6-results.md).
// 씬 경계 = S5 문장 테이블. 긴 문장행 2개는 단어 타임스탬프로 분할(2행→s2/s3 at 9.0 "전직", 5행→s6/s7 at 38.25 "다시").
//
// ⚠ S3 팩트체크 이월 그림 제약 (factcheck.md):
//   1. "재판" 프레임 금지 — 법정·판사봉 소품 금지. 어전 건의 장면만(유정현 아룀 + 태종 웃음).
//   2. 압사 직접 묘사 금지(시신·X자 눈) — 쓰러짐(회전)+충격선+「踏殺之」 스탬프로 암시. 톤 조절(후보표 약점).
//   3. 마지막 명령은 재유배 명령 — s7은 훈훈한 코다가 아니라 황혼 섬의 여운(코끼리 홀로).
//   4. 이우 이름 식별은 스탬프 「전 공조전서 이우」가 담당(whisper 이우→이유 철자 편향 방어).
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var KING = { shirt: "#c0392b", pants: "#7c1d12" };  // 태종 — 홍색 곤룡포 + 익선관
var YU   = { shirt: "#3a4f6e", pants: "#1f2d45" };  // 병조판서 유정현 — 사모 + 남색 단령 (noBadge)
var IU   = { shirt: "#cfc4a8", pants: "#8a7a5c" };  // 전 공조전서 이우 — 갓 + 소색 두루마기

var SCENES = [
  {
    // S1 훅 — "조선왕조실록에는, 사람을 죽이고 섬으로 유배당한 코끼리가 있습니다."
    // 서재: 펼친 실록(EP.10/12 재사용) 위로 코끼리가 크게 등장. num "유배?"
    id: "s1", start: 0, dur: 6.39, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S2 헌상 — "태종 십일 년 일본 국왕이 선물한 코끼리인데,"
    // 항구: 바다+돛단배(it5-s2)+모래 뭍에 코끼리 상륙. 스탬프 "일본 국왕의 선물 · 1411 조선 최초 상륙"
    id: "s2", start: 5.94, dur: 3.31, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 이우 사건 — "전직 관리 이우가 못생겼다 비웃으며 침을 뱉자 밟아 죽였습니다."
    // 궁궐 마당: 이우(좌)가 코끼리(우)를 비웃음 → 12.3 코끼리 코 들어올림(V2) + 이우 쓰러짐 + 충격선 + 「踏殺之」
    id: "s3", start: 8.8, dur: 5.98, talker: "s3-iu",
    chars: [
      { id: "s3-iu", variant: "militia", shirt: IU.shirt, pants: IU.pants, x: 31, bottom: 640, w: 370, expr: "happy", pose: "point" },
    ],
    changes: [
      { at: 12.3, char: "s3-iu", expr: "shocked", pose: "raised" },
    ],
  },
  {
    // S4 어전 — "병조판서가 아뢰길 … 태종은 웃으며 따랐죠."
    // 어전 세트(EP.10 s5 재사용): 일월오봉도+어좌 단. 유정현(우, 아룀) + 태종(좌, 단 위). 20.5 태종 happy(웃음).
    // 스탬프 「殺人者當殺」 → 「置于全羅海島」(유배 프레임 원문 방어).
    id: "s4", start: 14.33, dur: 8.14, talker: "s4-yu",
    chars: [
      { id: "s4-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 28, bottom: 700, w: 430, expr: "neutral", pose: "down" },
      { id: "s4-yu", variant: "militia", hat: "samo", noBadge: true, shirt: YU.shirt, pants: YU.pants, x: 76, bottom: 560, w: 360, expr: "angry", pose: "point", flip: true },
    ],
    changes: [
      { at: 20.5, char: "s4-king", expr: "happy", pose: "raised" },
    ],
  },
  {
    // S5 섬 유배 — "여섯 달 뒤 관찰사가 보고합니다. 풀도 먹지 않고, 사람을 보면 눈물을 흘립니다."
    // sp3 섬 세트: 바다+원경 섬+대나무. 코끼리 홀로(채도 낮춤) + 28.4 눈물 방울. num "6달" / 스탬프 「見人則墮淚」.
    id: "s5", start: 22.02, dur: 8.60, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S6 복귀→재사망 — "태종은 불쌍히 여겨 뭍으로 불렀지만 칠 년 뒤 또 사람이 죽었고, 실록의 마지막 명령은 이랬습니다."
    // 초원 뭍: 태종(좌)+코끼리(우) 재회 → 33.2 화면 어두워짐 + num "7년 뒤" + 태종 shocked.
    id: "s6", start: 30.17, dur: 8.23, talker: null,
    chars: [
      { id: "s6-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 26, bottom: 640, w: 390, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 33.3, char: "s6-king", expr: "shocked", pose: "down" },
    ],
  },
  {
    // S7 펀치라인 — "다시 섬으로 보내되, 병들어 죽지 않게 하라."
    // 황혼 바다: 어두운 코끼리 홀로 뭍 끝. 스탬프 「勿令病死」 — 실록의 마지막 코끼리 기록. 여운.
    id: "s7", start: 37.95, dur: 4.78, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S8 아웃트로
    id: "s8", start: 42.28, dur: 7.32, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 49.6;
