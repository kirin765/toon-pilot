// Director scene script — EP.17 심환지 후일담 / 장용영 혁파 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, x(%), bottom(px), w(px), expr, pose, flip?, hat?, noHat?, noBadge? }],
//   changes [{ at, char, expr?, pose? }].
//
// 캐스팅(기존 6종 변주 — 신규 variant 없음):
//   심환지 = militia hat:"samo" + 흑단령 (s1 / s2 / s5 / s6)
//            1802년이라 문관 흉배(단종 2년·1454~) 제도 확립 후 ⇒ noBadge 불필요
//   정조   = king 홍룡포 (s3 — 회상 씬 전용)
//   장용영 군졸 = admiral 변주 + 창 (s4) — 시그니처 표 "군졸/병사: 무기 1개 동반 필수"
//   host   = 아웃트로(s7)
// 씬 경계 = S5 문장 테이블(8문장 → 6씬 + 아웃트로. 문장3+4를 s3에 합침). 리드 0.30s.
//
// ⚠ S3 적대적 검증 이월 제약 (factcheck.md) — 화면도 이 선을 지킨다:
//   1. 정조의 하교는 **심환지가 전한 전언**이다(「記昔…若曰」). s3 인용 타이포에
//      "심환지가 어전에서 전한"을 반드시 병기. 정조 발화로 단정하는 연출 금지.
//   2. 인용문에 **「今左右暬御」(곁의 호위)를 복원**한다. "이것"으로 뭉개면 심환지의
//      확대 해석을 화면이 복창하게 된다 — 그 확대 자체가 s4의 반전이다.
//   3. 혁파를 **명(命)한 주체는 대왕대비**다. s5 스탬프는 「命罷壯勇營」로 명시하고,
//      심환지 단독 결정으로 읽히는 구도(그가 직접 부수는 등)를 만들지 않는다.
//   4. **외영은 존속했다**(총리영으로 개편). s6 스탬프에 명시. "장용영이 통째로 소멸"
//      연출 금지 — 깃발 페이드는 '본영 해체'의 은유로만.
//   5. **재정 프레임 금지**: "장용영이 국고를 잠식했다"는 실록과 배치(심환지 본인이
//      「不煩大農, 而財用自裕」 인정). 돈·엽전·창고 소품으로 원인을 암시하지 말 것.
//   6. 신유사옥·독살설·「호종자」는 화면에도 일절 등장 금지.
//   7. 1806년 관작 추탈은 **사유에 장용영이 없다** — 인과로 붙이는 연출 금지(고정 댓글 전용).
//
// ⚠ 한문 원문 스탬프는 본 세션이 sillok 페이지를 직접 페치해 대조한 것만 사용(지뢰 #38):
//   「命罷壯勇營」·「皆無異辭」·「積有時月」·「今左右暬御…後世不可以此爲法」 — 전량 대조 완료.
var TRANSITION = 0.45;

var HOST = { shirt: "#d94f37", pants: "#1f2d45" };
var KING = { shirt: "#c0392b", pants: "#7c1d12" };  // 정조 — 홍룡포 (EP.16 동일)
var SIM  = { shirt: "#2f3a4a", pants: "#222a36" };  // 심환지 — 흑단령 (EP.16 동일)
var GUARD = { shirt: "#3f5d7a", pants: "#2b3c50" }; // 장용영 군졸 — 남색 군복
var SUNJO = { shirt: "#c0392b", pants: "#7c1d12" };  // 순조 — 홍룡포. 1802년 12세라 rig를 작게(w 280)
// S8 블라인드 대응: 빈 어좌가 "붉은 문짝/걸어놓은 북"으로 판독(확신도 하)돼,
// 어좌 앞에 어린 임금을 세워 '앉는 자리'임을 확정한다. 고증상으로도 순조는 그 자리에 있었다
// (「上曰: 卿等所奏如此, 又承慈敎, 依爲之」).

var SCENES = [
  {
    // S1 훅 — "정조가 없애라 한 편지를, 심환지는 날짜까지 적어 남긴 사람입니다."
    // 어스름 서고. 앵커 = 오동나무 상자 + 날짜 부기된 편지 더미(EP.16 s6 자산 재사용).
    id: "s1", start: 0, dur: 6.67, talker: "s1-sim",
    chars: [
      { id: "s1-sim", variant: "militia", hat: "samo", shirt: SIM.shirt, pants: SIM.pants, x: 76, bottom: 560, w: 400, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 3.9, char: "s1-sim", expr: "proud" },
    ],
  },
  {
    // S2 — "정조가 죽고 두 해도 지나기 전, 그는 정조가 세운 호위 부대 장용영을 없애자고 아룁니다."
    // 어전(수렴청정). 앵커 = 어좌+일월오봉도(EP.16 s4 재사용) + 신규 수렴(발).
    id: "s2", start: 6.22, dur: 7.45, talker: "s2-sim",
    chars: [
      { id: "s2-sunjo", variant: "king", shirt: SUNJO.shirt, pants: SUNJO.pants, x: 59, bottom: 714, w: 320, expr: "neutral", pose: "down" },
      { id: "s2-sim", variant: "militia", hat: "samo", shirt: SIM.shirt, pants: SIM.pants, x: 21, bottom: 560, w: 380, expr: "neutral", pose: "point" },
    ],
    changes: [
      { at: 11.3, char: "s2-sim", expr: "angry" },
    ],
  },
  {
    // S3 — "근거는 정조가 예전에 이렇게 말했다는 그의 기억이었죠." + 인용문
    // 회상(밤 내전). 앵커 = 서안+간찰+등잔+세살창호(EP.16 s1 재사용).
    id: "s3", start: 13.22, dur: 11.09, talker: "s3-king",
    chars: [
      { id: "s3-king", variant: "king", shirt: KING.shirt, pants: KING.pants, x: 74, bottom: 560, w: 400, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 18.3, char: "s3-king", expr: "proud" },
    ],
  },
  {
    // S4 ★반전★ — "정조가 가리킨 건 곁의 호위였는데, 심환지는 그걸 군영 전체로 넓혔습니다."
    // 낮 군영. 앵커 = 성곽+문루(EP.3 s2 재사용) + 장용영 군졸 2명(창 동반) + 깃발.
    id: "s4", start: 23.86, dur: 5.45, talker: null,
    chars: [
      { id: "s4-g1", variant: "admiral", shirt: GUARD.shirt, pants: GUARD.pants, x: 17, bottom: 560, w: 330, expr: "neutral", pose: "down" },
      { id: "s4-g2", variant: "admiral", shirt: GUARD.shirt, pants: GUARD.pants, x: 83, bottom: 560, w: 330, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S5 — "아무도 이의를 달지 않았고, 대왕대비가 폐지를 명했죠."
    // 어전 재방문(더 어둡게). 대신들 사모 뒷모습 열 + 수렴 + 심환지.
    id: "s5", start: 28.86, dur: 6.49, talker: "s5-sim",
    chars: [
      { id: "s5-sim", variant: "militia", hat: "samo", shirt: SIM.shirt, pants: SIM.pants, x: 18, bottom: 560, w: 340, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S6 펀치라인 — "편지를 남긴 덕에 우리는 그 임금의 속을 읽지만, 그 임금의 군영은 그가 전한 한마디로 사라졌습니다."
    // 어스름 성 밖. 배경 = 성곽 실루엣 + 장용영 깃발 3개(페이드아웃 = 본영 해체 은유).
    id: "s6", start: 34.90, dur: 8.31, talker: "s6-sim",
    chars: [
      { id: "s6-sim", variant: "militia", hat: "samo", shirt: SIM.shirt, pants: SIM.pants, x: 80, bottom: 560, w: 340, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S7 아웃트로
    id: "s7", start: 42.76, dur: 6.14, talker: "s7-host",
    chars: [
      { id: "s7-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants, x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
