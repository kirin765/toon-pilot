// Director scene script — the "LLM-writable" layer. EP.9 김정호/대동여지도 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat? }],
//   changes [{ at, char, expr?, pose? }].
// 캐스팅: 해설 = host(붉은) 전 씬 talker / 고산자 김정호 = militia(갓+남회색 도포) s2·s4 등장.
// 씬 경계 = S5 문장 테이블(bin/sync_timing.py). 씬 start = 문장 start − 0.3(리드).
//
// ⚠ S3 팩트체크가 이월한 그림 제약 (factcheck.md) — 그림도 팩트체크 대상(지뢰 #27):
//   1. 판목소각(대원군)을 총독부에 귀속 금지 — 스탬프는 "대원군이 불태웠다?"(세간 통설, 물음표)로만.
//   2. 목판 현존은 국립중앙박물관 11매=보물 1581호. 총 12매(숭실대 1매)는 화면에 안 씀 → "11" 스탬프.
//   3. s4 신화(8번·3번·옥사)는 '옛 교과서 삽화' 톤(세피아 배경)으로 = 지어낸 이야기임을 시각 신호.
//   4. 대동여지도 목판 = 나무판에 지도 음각. 도마·현판 오독 방지: 나뭇결+새겨진 지도선+판 두께.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var KIM  = { shirt: "#3f5169", pants: "#2a3542" };  // 고산자 — 남회색 도포 + 갓

var SCENES = [
  {
    // S1 훅 — "대동여지도 목판은 불타 없어졌다고들 하죠. 그런데 그게, 지금도 박물관에 있습니다."
    // 앵커 = 대동여지도 목판(중앙, 크게). 불꽃이 밑에서 핥다가 5.5s 반전에 꺼지고 "현존" 스탬프.
    id: "s1", start: 0, dur: 7.95, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 78, bottom: 560, w: 360, expr: "shocked", pose: "point", flip: true },
    ],
    changes: [
      { at: 5.49, char: "s1-host", expr: "happy", pose: "raised" },
    ],
  },
  {
    // S2 — "조선의 지도쟁이, 고산자 김정호. 생몰년도 신분도 기록에 없는 사람인데요."
    // 앵커 = 김정호 + 서안 위 그리다 만 한반도 지도. 생몰/신분 미상 = "?~?" num + "미상" 스탬프.
    id: "s2", start: 7.50, dur: 8.28, talker: "s2-host",
    chars: [
      { id: "s2-kim",  variant: "militia", shirt: KIM.shirt,  pants: KIM.pants,  x: 30, bottom: 560, w: 400, expr: "neutral", pose: "down" },
      { id: "s2-host", variant: "host",    shirt: HOST.shirt, pants: HOST.pants, x: 78, bottom: 560, w: 340, expr: "happy", pose: "point", flip: true },
    ],
    changes: [
      { at: 11.6, char: "s2-kim", expr: "proud" },
    ],
  },
  {
    // S3 — "그가 만든 대동여지도는 세로 6.7미터, 22첩짜리 지도였습니다. 목판에 새겨 찍어낸, 복사되는 전국 지도였죠."
    // 앵커 = 대형 한반도 지도(세로로 길게, 첩 접힘선+방점). 보조 = 찍혀 나온 지도 여러 장(복제). num 6.7m·22첩.
    id: "s3", start: 15.33, dur: 12.70, talker: "s3-host",
    chars: [
      { id: "s3-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 80, bottom: 560, w: 340, expr: "happy", pose: "point", flip: true },
    ],
    changes: [
      { at: 22.6, char: "s3-host", expr: "proud" },
    ],
  },
  {
    // S4 — "그런데 우리가 배운 이야기는 달랐죠. 전국을 세 번, 백두산을 여덟 번 오르고, 옥에서 죽었다."
    // '옛 교과서 삽화' 톤(세피아). 앵커 = 백두산(천지) + 걷는 김정호 + 옥 창살. num 3번·8번. 옥사는 창살로.
    // 호스트 제거 — 옥 창살 안에 빨간 현대 호스트가 들어가 "해설자가 감옥에?" 오독(S6.4). 김정호가 talker.
    id: "s4", start: 27.58, dur: 8.70, talker: "s4-kim",
    chars: [
      { id: "s4-kim",  variant: "militia", shirt: KIM.shirt,  pants: KIM.pants,  x: 26, bottom: 560, w: 380, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 34.5, char: "s4-kim", expr: "shocked" },
    ],
  },
  {
    // S5 — "다 총독부 교과서가 그린 김정호입니다. 그 시작은 1925년 신문 한 편이었고, 실록엔 그가 갇힌 기록조차 없죠."
    // 앵커 = 옛 신문 지면(세로쓰기 제호+단). 보조 = 총독부 교과서·실록(X). num 1925. "실록엔 없음 ✗" 스탬프.
    id: "s5", start: 35.83, dur: 10.45, talker: "s5-host",
    chars: [
      { id: "s5-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 80, bottom: 560, w: 340, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 43.4, char: "s5-host", expr: "angry" },
    ],
  },
  {
    // S6 펀치라인 — "사라졌다던 그 목판은, 국립중앙박물관에 열한 장이 보물로 남아 있습니다."
    // s1 목판의 풀서클 회수. 앵커 = 목판(온전, 금색 보물 라벨) + 여러 장. num 11·보물. "보물 1581호" 스탬프.
    id: "s6", start: 45.83, dur: 6.74, talker: "s6-host",
    chars: [
      { id: "s6-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 78, bottom: 560, w: 360, expr: "proud", pose: "point", flip: true },
    ],
    changes: [
      { at: 49.3, char: "s6-host", pose: "raised" },
    ],
  },
  {
    // S7 아웃트로
    id: "s7", start: 52.12, dur: 7.98, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 60.1;
