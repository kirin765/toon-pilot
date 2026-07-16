// Director scene script — the "LLM-writable" layer. EP.8 명량 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?/skirt?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// 캐스팅: 이순신 = admiral(전립+두정갑) 붉은 융복 / 관망하던 장수 = admiral 녹색 변주 / 호스트 = host.
// 씬 경계 = S5 문장 테이블(bin/sync_timing.py). 씬 start = 문장 start − 0.3(리드).
//
// ⚠ S3 팩트체크가 이월한 그림 제약 (factcheck.md §S6 이월) — 그림도 팩트체크 대상이다(지뢰 #27):
//   1. 거북선 금지 — 우리역사넷이 명량 거북선 참전을 직접 부정. 함선은 전량 판옥선.
//   2. 쇠사슬(철쇄) 금지 — 야사. 울돌목에 밧줄·사슬류를 그리지 않는다.
//   3. 회오리 금지 — 영화 「명량」(2014) 창작. 조류는 물결·유향 라인으로만.
//   4. 왜군 인물 금지 — 외국인 복식은 카탈로그 ❌. 일본 함대는 배 실루엣으로만.
//   5. 적선은 판옥선보다 작고 낮게 — "대장선보다 높이가 낮고 크기가 작아 접근 못 함"(F10).
var TRANSITION = 0.45;

var YI = { shirt: "#8a3b2c", pants: "#3a2a24" };      // 이순신 — 붉은 융복 (sp9 독전 장수 배색)
var JANGSU = { shirt: "#55694f", pants: "#262b21" };  // 관망하던 장수(안위·김응함) — 녹색 군복
var HOST = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "13척으로 133척을 이긴 명량. 그런데 한동안은, 한 척이었습니다."
    // 앵커 = 판옥선 1척(좌, 크게) vs 적 함대 실루엣 다수(우, 작게). 13:133 → 1:133 반전을 숫자 타이포로.
    id: "s1", start: 0, dur: 8.25, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 78, bottom: 560, w: 380, expr: "happy", pose: "point", flip: true },
    ],
    changes: [
      { at: 4.39, char: "s1-host", expr: "shocked" },
      { at: 5.48, char: "s1-host", pose: "raised" },
    ],
  },
  {
    // S2 — "직전 해전에서 조선 수군이 통째로 무너진 뒤였죠." (칠천량, 1597.7 — 조선 수군 유일한 패전)
    // 앵커 = 기울어 가라앉는 판옥선 잔해 + 부러진 돛대. 이름 '칠천량'은 TTS 오발음(7천양) 우회로 스탬프가 맡는다.
    id: "s2", start: 7.84, dur: 4.38, talker: "s2-host",
    chars: [
      { id: "s2-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 74, bottom: 560, w: 380, expr: "shocked", pose: "shrug", flip: true },
    ],
    changes: [],
  },
  {
    // S3 — "좁은 울돌목. 난중일기입니다. 여러 장수의 배를 돌아보니, 먼 바다로 물러나 구경만 하더라."
    // 앵커 = 난중일기(펼친 서책). 배경 = 울돌목 좁은 수로(양쪽 곶, 최협부 300m — F2).
    // 인용 원문 「顧見諸將船 則退在遠海觀望不進」이 이 에피소드의 사료적 근거 자체다.
    id: "s3", start: 11.77, dur: 10.52, talker: "s3-yi",
    chars: [
      { id: "s3-yi", variant: "admiral", shirt: YI.shirt, pants: YI.pants, x: 26, bottom: 560, w: 400, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 16.0, char: "s3-yi", expr: "angry" },
    ],
  },
  {
    // S4 — "열두 척이 지켜보는 동안, 대장선 한 척이 홀로 총통을 쏘아 댔습니다."
    // 앵커 = 대장선(판옥선, 크게) + 총통 화염·연기. 우측 원경에 관망하는 배 무리 실루엣.
    // "12척"은 사료 표현이 아니라 13−1의 산술 추론(F28) — 화면도 '멀리 물러난 무리'로만 표현.
    id: "s4", start: 21.84, dur: 6.51, talker: "s4-yi",
    chars: [
      { id: "s4-yi", variant: "admiral", shirt: YI.shirt, pants: YI.pants, x: 30, bottom: 560, w: 400, expr: "angry", pose: "point" },
    ],
    changes: [],
  },
  {
    // S5 — "이순신이 깃발을 올려 장수들을 불러세웁니다. 군법에 죽고 싶으냐."
    // 앵커 = 초요기(招搖旗) — 장수 호출 신호기. sp9 수자기 형태를 재사용하되 글자만 교체.
    // 대사는 난중일기 원문 「安衛 欲死軍法乎」의 축자 인용. '안위'는 TTS가 '아니'로 읽어 스탬프가 이름을 맡는다.
    id: "s5", start: 27.90, dur: 6.39, talker: "s5-yi",
    chars: [
      { id: "s5-yi", variant: "admiral", shirt: YI.shirt, pants: YI.pants, x: 28, bottom: 560, w: 420, expr: "angry", pose: "raised" },
      { id: "s5-jangsu", variant: "admiral", shirt: JANGSU.shirt, pants: JANGSU.pants, x: 76, bottom: 560, w: 340, expr: "shocked", pose: "down", flip: true },
    ],
    changes: [
      { at: 32.05, char: "s5-yi", pose: "point" },
    ],
  },
  {
    // S6 — "그제야 배들이 달려들었고, 물살까지 뒤집히면서 적선 서른한 척이 부서졌습니다."
    // 순서 = 합류 → 조류 반전 → 일제 공격 → 31척 격파 (F25 우리역사넷 시간순 그대로).
    // 조류는 유향 화살표 + 물결로만 — 회오리 금지(영화 창작).
    id: "s6", start: 33.84, dur: 7.68, talker: "s6-yi",
    chars: [
      { id: "s6-yi", variant: "admiral", shirt: YI.shirt, pants: YI.pants, x: 27, bottom: 560, w: 390, expr: "proud", pose: "point" },
      { id: "s6-jangsu", variant: "admiral", shirt: JANGSU.shirt, pants: JANGSU.pants, x: 62, bottom: 560, w: 360, expr: "angry", pose: "raised" },
    ],
    changes: [
      { at: 38.19, char: "s6-yi", expr: "angry" },
    ],
  },
  {
    // S7 — "이순신은 그 승리를 딱 네 글자로 적었어요. 이것은 실로 천행이었다."
    // 앵커 = 난중일기 + 「此實天幸」 4자 대형 스탬프. s3 일기의 풀서클 회수.
    id: "s7", start: 41.07, dur: 8.47, talker: "s7-yi",
    chars: [
      { id: "s7-yi", variant: "admiral", shirt: YI.shirt, pants: YI.pants, x: 74, bottom: 560, w: 400, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 46.39, char: "s7-yi", expr: "proud" },
    ],
  },
  {
    // S8 펀치라인 — "그리고 물이 빠졌다며 진을 옮겼고, 그게 일기의 끝이었습니다."
    // 원문 순서 그대로: 天幸 → "물이 빠져 큰 배에 맞지 않아" → 달빛 타고 당사도 이진 → 밤을 지냄 = 일기 끝(F13-a).
    // 세계 해전사의 기적을 네 글자로 자평하고 물때 얘기로 끝낸 무심함이 이 편의 착지점.
    id: "s8", start: 49.09, dur: 5.63, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 72, bottom: 560, w: 390, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S9 아웃트로
    id: "s9", start: 54.27, dur: 7.03, talker: "s9-host",
    chars: [
      { id: "s9-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 61.3;
