// Director scene script — EP.18 세종의 관노비 출산휴가 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, skirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge?, royal? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅(기존 6종 변주 — 신규 variant 없음):
//   산모(관비)  = lady, 연미색 저고리 + 남색 치마 (s1/s2/s3/s5/s7)
//   세종        = king 홍룡포 (s4 어전 전지 / s6 하교의 이유)
//   남편(관노)  = militia hat:"paeraengi"(초립=평민/천민) + 녹갈 (s5)
//   host        = 아웃트로(s8)
//   ⚠ 세종대(1426~1434)는 문관 흉배(단종 2년·1454) 이전 — samo 단령 관원을 쓰면 noBadge 필수.
//     s4는 세종 단독+전지 두루마리로 구성해 관원 자체를 넣지 않아 이 리스크를 회피.
// 씬 경계 = S5 문장 테이블(8문장 → 7씬 + 아웃트로). 리드 0.30s.
//
// ⚠ S3 팩트체크·적대검증 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. 대상은 公處婢子(관비=공노비) 한정. s1에 「官婢 = 관청에 매인 여종」 스탬프로 못박고,
//      s7 펀치는 "사노비엔 닿지 않았다"를 경계로 보여준다(냉소·재산 프레임 금지).
//   2. 130일은 산전 一朔(≈30) + 산후 100일의 '합산 근사치'. 실록에 130이라 적힌 바 없음 —
//      s1 num-pop은 130일을 headline로 쓰되 s4에서 100+30 구성을 스탬프로 분해해 정직성 확보.
//   3. 원문 스탬프는 위키문헌 raw로 verbatim 확인분만 사용(지뢰 #38): 給暇百日/除役一朔/
//      産兒七日後立役/未及其家而産/因此或致隕命 誠爲可恤/其夫滿三十日後役使 — 전량 대조 완료.
//   4. 주체는 세종의 직접 왕명(傳旨/敎/上謂…曰) — "신하 건의" 연출 금지.
//   5. 조선 전기라 엽전·상평통보 등 화폐 소품 금지(지뢰 #27) — 재산 프레임 회피와도 부합.
//
// ⚠ 강보 아기(신규 소품): 캐릭터가 소품 위에 렌더되므로 '안은' 자세는 오클루전으로 사라진다 →
//   요람/포대기에 '눕힌' 소품으로 배치하고 항상 둥근 얼굴(피부색 원)+감은 눈(곡선, X자 금지)+
//   강보 가로 감김선을 보여 '보따리' 오독을 차단(시그니처 표).
var TRANSITION = 0.45;

var HOST  = { shirt: "#d94f37", pants: "#1f2d45" };
var KING  = { shirt: "#b5322a", pants: "#7c1d12" };            // 세종 — 홍룡포
var MOM   = { shirt: "#cdbfa2", skirt: "#3a4a63", skin: "#f2c99b" }; // 산모(관비)
var HUSB  = { shirt: "#6b7658", pants: "#463c2c" };            // 남편(관노) — 초립+녹갈

var SCENES = [
  {
    // S1 훅 — "조선의 관청 여종에게, 넉 달 넘는 출산휴가가 있었습니다."
    // 관청 마당. 앵커=동헌(sp8) + 요람의 강보 아기 + 산모. num-pop 130일, 스탬프 官婢.
    id: "s1", start: 0, dur: 6.03, talker: null,
    chars: [
      { id: "s1-mom", variant: "lady", skin: MOM.skin, shirt: MOM.shirt, skirt: MOM.skirt, x: 30, bottom: 560, w: 400, expr: "happy", pose: "down" },
    ],
    changes: [
      { at: 3.4, char: "s1-mom", expr: "proud" },
    ],
  },
  {
    // S2 — "본래는 아이를 낳고 칠 일 만에, 다시 일터로 나가야 했죠."
    // 우물가 노동. 앵커=우물(석축+도르래 틀) + 물동이. num-pop 7일, 스탬프 産兒七日後立役.
    id: "s2", start: 5.58, dur: 5.71, talker: null,
    chars: [
      { id: "s2-mom", variant: "lady", skin: MOM.skin, shirt: MOM.shirt, skirt: MOM.skirt, x: 66, bottom: 560, w: 390, expr: "shocked", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S3 폐단 — "그러다 갓난아기가 상하고, 산모가 집에 닿기도 전에 아이를 낳는 일이 생겼습니다."
    // 황혼 흙길. 앵커=큰 나무 + 떨군 봇짐 + 원경 초가(닿지 못한 집) + 길가에 눕힌 강보 아기.
    // 톤: 참혹 아님(고단함·연민) — 시신 묘사 금지, 강보 아기 평화롭게.
    id: "s3", start: 10.84, dur: 6.93, talker: null,
    chars: [
      { id: "s3-mom", variant: "lady", skin: MOM.skin, shirt: MOM.shirt, skirt: MOM.skirt, x: 27, bottom: 470, w: 380, expr: "shocked", pose: "shrug" },
    ],
    changes: [],
  },
  {
    // S4 개혁 — "세종은 산후 휴가를 백 일로 늘리고, 산달 앞 한 달을 더 얹었죠."
    // 어전. 앵커=어좌+일월오봉도(세종이 앉음, 지뢰 #50) + 형조에 내린 전지 두루마리.
    // num-pop 100일+30일. 스탬프 給暇百日 / 除役一朔.
    id: "s4", start: 17.32, dur: 6.03, talker: "s4-king",
    chars: [
      { id: "s4-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 44, bottom: 640, w: 400, expr: "proud", pose: "point" },
    ],
    changes: [
      { at: 20.4, char: "s4-king", expr: "happy" },
    ],
  },
  {
    // S5 남편 — "몇 해 뒤엔, 산모의 남편에게도 서른 날을 줍니다."
    // 초가 집. 앵커=초가집 + 요람의 강보 아기 + 산모(lady) + 남편(관노, 초립). 곁을 지킴.
    // num-pop 30일, 스탬프 其夫滿三十日後役使. 2인 씬(x≈30/68).
    id: "s5", start: 22.90, dur: 4.29, talker: null,
    chars: [
      { id: "s5-mom", variant: "lady", skin: MOM.skin, shirt: MOM.shirt, skirt: MOM.skirt, x: 22, bottom: 560, w: 330, expr: "happy", pose: "down" },
      { id: "s5-husb", variant: "militia", hat: "paeraengi", shirt: HUSB.shirt, pants: HUSB.pants, x: 78, bottom: 560, w: 350, expr: "happy", pose: "point", flip: true },
    ],
    changes: [],
  },
  {
    // S6 이유 — "홀로 두면 산모가 목숨까지 잃는다는 게 그 이유였습니다."
    // 어전(차분). 앵커=서안+전지 + 세종. 세종 하교 원문 스탬프:
    //   「因此或致隕命, 誠爲可恤」(이 때문에 목숨을 잃기까지 하니 가엾다). num-pop 없음.
    id: "s6", start: 26.74, dur: 6.01, talker: "s6-king",
    chars: [
      { id: "s6-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 70, bottom: 560, w: 400, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 29.6, char: "s6-king", expr: "proud" },
    ],
  },
  {
    // S7 펀치 — "조선이 가장 낮은 신분에게 내어준 배려였지만, 그 손길은 나라가 부리는 노비에서 멈췄죠."
    // 앵커=따뜻한 빛 속 산모+아기(수혜자) 전경 + 돌담 경계 + 담 너머 어둡게(불투명 0.95↑, 지뢰 #51)
    //   사노비 노동 실루엣(닿지 못한 이들). 스탬프: 「公處婢子 한정 · 사노비는 제외」.
    id: "s7", start: 32.30, dur: 7.28, talker: null,
    chars: [
      { id: "s7-mom", variant: "lady", skin: MOM.skin, shirt: MOM.shirt, skirt: MOM.skirt, x: 34, bottom: 560, w: 400, expr: "happy", pose: "down" },
    ],
    changes: [],
  },
  {
    // S8 아웃트로
    id: "s8", start: 39.13, dur: 5.87, talker: "s8-host",
    chars: [
      { id: "s8-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
