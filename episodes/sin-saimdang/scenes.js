// Director scene script — the "LLM-writable" layer. EP.7 신사임당 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker (lip-flaps narration words in its window),
//   chars [{ id, variant, skin?, shirt?, pants?/skirt?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat? }],
//   changes [{ at, char, expr?, pose? }]  — mid-scene direction.
// 캐스팅: 신사임당 = lady(쪽+한복) / 어숙권·안견·신랑 = militia(갓+도포) 색변주 / 호스트 = host.
// 씬 경계 = S5 문장 테이블(bin/sync_timing.py). s4/s5는 4행의 두 문장을 나눈 것.
var TRANSITION = 0.45;

var SAIMDANG = { shirt: "#f3ece0", skirt: "#6b7fa8" };  // 신사임당 — 옥색 치마 + 흰 저고리
var BRIDE = { shirt: "#f3ece0", skirt: "#c65a48" };     // s4 신부 — 혼례 다홍 치마
var EOSUK = { shirt: "#9db8cc", pants: "#4a5d70" };     // 어숙권 — 청색 도포(평론가)
var ANGYEON = { shirt: "#a8bd8a", pants: "#5c6b45" };   // 안견 — 녹색 도포(화원)
var GROOM = { shirt: "#e3d8c0", pants: "#6f5c43" };     // s4 신랑 — 베이지 도포
var HOST = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "5만원권 속 이 사람을, 조선은 현모양처라고 부른 적이 없습니다"
    // 앵커 = 컷아웃 5만원권(포도). 실물 초상 도안(이종상 2009)은 현행 저작물이라 복제 금지이고,
    // 지폐 안에 흉상을 그리는 시도는 S8 블라인드 3연속 실패(헤드폰→붐마이크→수염 난 남자) —
    // 컷아웃 흉상은 '조선 여성'을 못 버틴다(치마가 없으면 성별 판독이 붕괴).
    // → '이 사람'의 지시 대상은 지폐 옆에 선 lady rig 실물이 맡는다(검수 2명 모두 '한국 여성' 판독).
    id: "s1", start: 0, dur: 6.45, talker: "s1-host",
    chars: [
      { id: "s1-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 24, bottom: 560, w: 400, expr: "happy", pose: "point" },
      { id: "s1-saimdang", variant: "lady", shirt: SAIMDANG.shirt, skirt: SAIMDANG.skirt, x: 72, bottom: 560, w: 400, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 3.0, char: "s1-host", expr: "proud" },
    ],
  },
  {
    // S2 — 어숙권 『패관잡기』: "포도와 산수가 절묘하니, 안견 다음에 간다"
    // 앵커 = 포도 그림 족자(컷아웃). 대본이 "포도"라 말하는 순간 화면도 포도여야 한다.
    id: "s2", start: 6.00, dur: 8.07, talker: "s2-eosuk",
    chars: [
      { id: "s2-eosuk", variant: "militia", shirt: EOSUK.shirt, pants: EOSUK.pants, x: 74, bottom: 560, w: 400, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 9.49, char: "s2-eosuk", expr: "shocked" },
      { at: 11.92, char: "s2-eosuk", expr: "proud" },
    ],
  },
  {
    // S3 — "몽유도원도를 그린 바로 그 안견이죠" (실물 인서트: 안견 「몽유도원도」 1447)
    id: "s3", start: 13.62, dur: 4.38, talker: "s3-angyeon",
    chars: [
      { id: "s3-angyeon", variant: "militia", shirt: ANGYEON.shirt, pants: ANGYEON.pants, x: 24, bottom: 560, w: 380, expr: "proud", pose: "point" },
    ],
    changes: [],
  },
  {
    // S4 — "남자가 처가로 장가들고, 재산도 딸 아들 똑같이 나누던 시대" (남귀여가혼 + 균분상속)
    id: "s4", start: 17.55, dur: 6.00, talker: "s4-groom",
    chars: [
      { id: "s4-groom", variant: "militia", shirt: GROOM.shirt, pants: GROOM.pants, x: 30, bottom: 610, w: 380, expr: "happy", pose: "point" },
      { id: "s4-bride", variant: "lady", shirt: BRIDE.shirt, skirt: BRIDE.skirt, x: 69, bottom: 600, w: 370, expr: "happy", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S5 — "사임당도 서른여덟 살까지 강릉 친정에 살았죠" (실물 인서트: 신사임당 「초충도」)
    // 오죽헌(烏竹軒)의 검은 대나무 = 장소 시그니처
    id: "s5", start: 23.10, dur: 4.77, talker: "s5-saimdang",
    chars: [
      { id: "s5-saimdang", variant: "lady", shirt: SAIMDANG.shirt, skirt: SAIMDANG.skirt, x: 28, bottom: 560, w: 420, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 25.5, char: "s5-saimdang", expr: "happy" },
    ],
  },
  {
    // S6 — "정작 현모양처는 조선에 없던 말이었어요. 일본에서 들어온 신식 교육 표어였죠."
    // 조선 서고를 다 뒤져도 그 말이 없다 → 서가가 앵커, "현모양처" 스탬프에 ✗
    id: "s6", start: 27.42, dur: 8.28, talker: "s6-host",
    chars: [
      { id: "s6-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 70, bottom: 560, w: 400, expr: "shocked", pose: "shrug", flip: true },
    ],
    changes: [
      { at: 31.93, char: "s6-host", expr: "neutral" },
    ],
  },
  {
    // S7 — "처음 등장한 게 천구백육년. 그녀가 죽고 삼백오십오 년 뒤였습니다." (연표 두루마리)
    id: "s7", start: 35.25, dur: 7.12, talker: "s7-host",
    chars: [
      // 우측 — 좌측은 1906/355 숫자 타이포 자리(초안에서 host가 연표를 가렸다, S6.4 적발)
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 72, bottom: 560, w: 400, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [
      { at: 39.39, char: "s7-host", expr: "shocked" },
    ],
  },
  {
    // S8 펀치라인 — "지금도 5만원권 앞면엔, 어숙권이 절묘하다던 그 포도가 실려 있습니다"
    // s1 지폐 + s2 포도의 풀서클 회수
    id: "s8", start: 41.92, dur: 6.19, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 74, bottom: 560, w: 400, expr: "proud", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S9 아웃트로
    id: "s9", start: 47.66, dur: 5.64, talker: "s9-host",
    chars: [
      { id: "s9-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 30, bottom: 640, w: 420, expr: "happy", pose: "point" },
    ],
    changes: [],
  },
];

var TOTAL_DURATION = 53.3;
