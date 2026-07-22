// Director scene script — EP.14 착호갑사 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅: 착호갑사 = **admiral**(전립 + 두정갑) — 갑사는 무반이라 사모(문관)·갓 부적합.
//   s3 두 명(부대), s4 시취(활), s5 눈밭 사냥(창), s7 세조 몰이 사고(창).
//   해설 host s8. 왕 rig 미등장(s7은 갑사+호랑이로만 — 인물 과밀 회피, "나라는"은 스탬프/자막이 담당).
// 호랑이 = rig 아님, 씬별 인라인 SVG(bench/tiger-bench.html — V1 정립 / V2 스토킹 / V3 포효).
// 씬 경계 = S5 문장 테이블(8문장 → 8씬). 리드 0.3s.
//
// ⚠ S3 팩트체크 이월 그림 제약 (factcheck.md):
//   1. **조총 금지** — 착호갑사 무기는 활·창(조선 전기). 조총은 임란 이후라 시대착오(F13-b).
//   2. **"항상 440명 대기" 식 자막 금지** — 5번 6삭 교대라 상번은 1/5(F1-c). 대본·스탬프는 "정원"까지만.
//   3. **갑사 1,800명 중 440명 금지** — 원문은 14,800원(F1-b). 화면에 1,800 표기 금지.
//   4. s7은 착호갑사 출동이 아니라 **세조의 강무(사냥)** — 박타내는 그냥 갑사(F26). 자막이 상황 명시.
//   5. 죽음 직접 묘사 금지(시신·X자 눈) — 쓰러짐(회전)+충격선+스탬프로 암시(EP.13 압사 전례).
//   6. 호랑이 얼굴 스왑: 위협 씬(s2·s6·s7) = V3 포효, 사냥 씬(s5) = V2 스토킹.
//      다문 입 호랑이는 블라인드에서 "귀엽다"로 읽혀 재난 톤이 붕괴한다(bench/tiger-bench-results.md).
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var GAP  = { shirt: "#4a5f7a", pants: "#2b3444" };  // 착호갑사 — 남색 두정갑 + 전립
var GAP2 = { shirt: "#6b5a44", pants: "#3d3428" };  // 착호갑사 변주 — 갈색 두정갑

var SCENES = [
  {
    // S1 훅 — "조선의 법전에는, 호랑이 잡는 부대의 정원이 적혀 있습니다. 사백사십 명."
    // 서재: 펼친 경국대전(EP.10/12 실록 재사용) + 등잔. 스탬프 「捉虎四百四十」 / num "440명"
    id: "s1", start: 0, dur: 7.68, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S2 — "밤에 호랑이가 근정전 뜰에 들어오고, 창덕궁에선 새끼까지 쳤으니까요."
    // 밤 궁궐 마당: 달+별, 박석, 궁궐 담+전각 실루엣. 호랑이 V3(포효) 크게.
    // 스탬프 「夜, 虎入勤政殿庭」 → 10.6 「大虎養雛」
    id: "s2", start: 7.23, dur: 6.69, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S3 — "이름은 착호갑사, 세종 초엔 스무 명이 성종 땐 스물두 배가 됩니다."
    // 낮 훈련장: 착호갑사 2명(창/활 동반). 스탬프 「착호갑사 捉虎甲士」 / num "20 → 440"
    id: "s3", start: 13.47, dur: 5.86, talker: null,
    chars: [
      { id: "s3-gap1", variant: "admiral", shirt: GAP.shirt,  pants: GAP.pants,  x: 28, bottom: 560, w: 400, expr: "proud",   pose: "point" },
      { id: "s3-gap2", variant: "admiral", shirt: GAP2.shirt, pants: GAP2.pants, x: 74, bottom: 560, w: 400, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S4 — "활과 창, 달리기와 힘까지 봤지만, 호랑이 두 마리면 시험은 면제였습니다."
    // 시취: 활 쏘는 갑사(좌) + 과녁(우, 주 소품). 스탬프 「捉虎二口者 除取才許屬」
    id: "s4", start: 18.88, dur: 7.31, talker: null,
    chars: [
      { id: "s4-gap", variant: "admiral", shirt: GAP.shirt, pants: GAP.pants, x: 26, bottom: 560, w: 420, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 23.9, char: "s4-gap", expr: "proud" },
    ],
  },
  {
    // S5 — "큰 화살을 거푸 쏘아 박고, 창으로 거듭 찔렀죠."
    // 눈밭(sp18 계열): 내리는 눈+나목+눈언덕. 갑사(창) + 호랑이 V2(스토킹).
    // 27.4 화살 3발 박힘 → 28.4 갑사 창 내지름
    id: "s5", start: 25.74, dur: 5.34, talker: null,
    chars: [
      { id: "s5-gap", variant: "admiral", shirt: GAP.shirt, pants: GAP.pants, x: 24, bottom: 600, w: 380, expr: "angry", pose: "point" },
    ],
    changes: [],
  },
  {
    // S6 — "그런데도 피해는 끝나지 않아, 영조 삼십 년엔 경기도에서 한 달 만에 백스무 명이 물려 죽었습니다."
    // 어스름 마을: 먹구름+초가+돌담. 호랑이 V3(포효) 마을 앞. num "120명" / 스탬프 「一朔內噉死一百二十餘人」
    id: "s6", start: 30.63, dur: 7.83, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S7 — "세조의 호랑이 몰이에선 창을 잘못 찔러 물려 죽은 갑사도 있었는데, 나라는 그 아들을 등용하라 명했습니다."
    // 산 몰이터: 산 능선+소나무. 갑사(창) + 호랑이 V3. 40.4 충격선 + 갑사 쓰러짐(회전) — 시신 묘사 없음.
    // 42.6 어두워짐 + 스탬프 「錄用其子」(여운)
    id: "s7", start: 38.01, dur: 8.42, talker: null,
    chars: [
      { id: "s7-gap", variant: "admiral", shirt: GAP.shirt, pants: GAP.pants, x: 34, bottom: 580, w: 380, expr: "angry", pose: "point" },
    ],
    changes: [
      { at: 40.4, char: "s7-gap", expr: "shocked" },
    ],
  },
  {
    // S8 아웃트로
    id: "s8", start: 45.98, dur: 6.22, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 52.2;
