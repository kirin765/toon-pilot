// Director scene script — the "LLM-writable" layer. EP.10 세종/한글 창제 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat? }],
//   changes [{ at, char, expr?, pose? }].
// 캐스팅: 해설 = host(붉은) s1·s6 / 세종 = king(곤룡포+익선관) s2·s5 / 최만리 = militia hat:"samo"(사모+남색 단령) s3·s4·s5.
//   ⚠ 사모 = 중국 관모 오독 리스크 → 단령 남색 + 흉배 맥락 보강(스프린트2 검증 변주).
// 씬 경계 = S5 문장 테이블(bin/sync_timing.py). 씬 start = 문장 start − 0.3(리드).
//
// ⚠ S3 팩트체크가 이월한 그림 제약 (factcheck.md) — 그림도 팩트체크 대상(지뢰 #27):
//   1. 실록 기사는 "한 문장"(1443-12-30, 是月 월간 기사) — 스탬프 날짜는 "세종 25년 12월"까지만(날짜 특정 금지).
//   2. 상소 주체는 "집현전 부제학 최만리" 개인 특정 — 집현전 전원 반대로 보이는 연출 금지(군중 X).
//   3. 펀치라인 근거는 '해례본(원리 풀이 책)의 유일성' — 해례본 책이 앵커. "세계 유일" 문구는 책과 묶어서만.
//   4. 조선 전기 씬이므로 엽전·담뱃대 금지(지뢰 #18·#27). 서안은 낮은 좌식(중국 서탁 금지).
//   5. 한글 자모 소품은 창제 대상이므로 등장 OK — 단 s2(창제 장면)와 s6(펀치라인)에만.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var CHOI = { shirt: "#3f5169", pants: "#2a3542" };  // 최만리 — 남색 단령 + 사모

var SCENES = [
  {
    // S1 훅 — "조선 최대의 발명은, 실록에 예고 없이 딱 한 문장으로 등장합니다."
    // 앵커 = 펼친 실록(선장본, EP.8 서책 재사용). 한 글줄만 금색 하이라이트 = "딱 한 문장".
    id: "s1", start: 0, dur: 5.82, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 78, bottom: 560, w: 380, expr: "shocked", pose: "point", flip: true },
    ],
    changes: [
      { at: 2.8, char: "s1-host", expr: "happy" },
    ],
  },
  {
    // S2 — "이달에 임금이 친히 언문 스물여덟 자를 지었다. 준비 과정 기록은, 그 앞에 한 건도 없죠."
    // 밤 서재 비밀 작업. 앵커 = 서안+붓+종이(EP.9 서안 변형) + 세종. 언문 자모가 금색으로 팝.
    id: "s2", start: 5.37, dur: 8.70, talker: "s2-king",
    chars: [
      { id: "s2-king", variant: "king", shirt: "#c0392b", pants: "#7c1d12", x: 32, bottom: 560, w: 430, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 8.73, char: "s2-king", expr: "proud", pose: "raised" },
      { at: 9.93, char: "s2-king", expr: "neutral", pose: "down" },
    ],
  },
  {
    // S3 — "집현전이 만들어 준 게 아니냐고요? 두 달 뒤 집현전 부제학 최만리가 올린 건, 반대 상소였습니다."
    // 앵커 = 상소 두루마리(대형, 세로). 원경 = 궁궐 전각(EP.2, 집현전). 최만리가 상소를 가리킴.
    id: "s3", start: 13.62, dur: 9.49, talker: "s3-choi",
    chars: [
      { id: "s3-choi", variant: "militia", hat: "samo", noBadge: true, shirt: CHOI.shirt, pants: CHOI.pants, x: 72, bottom: 560, w: 400, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 17.17, char: "s3-choi", expr: "angry" },
    ],
  },
  {
    // S4 — "중국과 다른 글자를 만들면, 스스로 오랑캐가 된다는 거였죠."
    // 앵커 = 상소문 지면 클로즈업(세로쓰기 획 + 붉은 강조단). 스탬프 「自同於夷狄」.
    id: "s4", start: 22.66, dur: 5.72, talker: "s4-choi",
    chars: [
      { id: "s4-choi", variant: "militia", hat: "samo", noBadge: true, shirt: CHOI.shirt, pants: CHOI.pants, x: 74, bottom: 560, w: 380, expr: "angry", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S5 — "세종이 되묻습니다. 네가 운서를 아느냐. 자모가 몇이나 있느냐."
    // 어전(EP.5 일월오봉도+어좌 단 재사용). 세종이 단 위에서 최만리를 가리킴. 스탬프 「汝知韻書乎」.
    id: "s5", start: 27.93, dur: 8.11, talker: "s5-king",
    chars: [
      { id: "s5-king", variant: "king", shirt: "#c0392b", pants: "#7c1d12", x: 28, bottom: 700, w: 430, expr: "angry", pose: "point" },
      { id: "s5-choi", variant: "militia", hat: "samo", noBadge: true, shirt: CHOI.shirt, pants: CHOI.pants, x: 78, bottom: 560, w: 340, expr: "shocked", pose: "down", flip: true },
    ],
    changes: [
      { at: 33.19, char: "s5-king", expr: "neutral" },
    ],
  },
  {
    // S6 펀치라인 — "그렇게 한글은, 만든 사람과 시기, 원리를 풀이한 책까지 남은, 세계 유일의 문자가 됐습니다."
    // 앵커 = 훈민정음 해례본(닫힌 선장본 + 오침 + 제첨). 자모 풀서클 재등장. "유일" 팝.
    id: "s6", start: 35.59, dur: 8.51, talker: "s6-host",
    chars: [
      { id: "s6-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 78, bottom: 560, w: 380, expr: "proud", pose: "point", flip: true },
    ],
    changes: [
      { at: 41.76, char: "s6-host", expr: "happy", pose: "raised" },
    ],
  },
  {
    // S7 아웃트로
    id: "s7", start: 43.65, dur: 7.75, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 51.4;
