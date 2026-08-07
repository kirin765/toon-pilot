// Director scene script — EP.30 大丘 → 大邱, 임금이 돌려보낸 상소 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, hat?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표 (지뢰 #62) — 장소를 고유명으로 먼저 확정하고 앵커 소품·배경 소스를 도출한다.
//   distinct 배경 8종(대구부 읍성 문루 앞·대구 향교 대성전 앞마당·대성전 안·한지 도판 3변주·
//   이양채의 사랑채·창덕궁 편전 어전·궁궐 정전 앞마당·춘추관 사고 서가) + 아웃트로.
//   동일 배경 **연속 0** — 씬마다 장소가 바뀐다. 재방문은 어전 s6·s8(사이에 s7), 문루 s1·s12(수미상관).
//
// | 씬  | 문장   | 요지                          | 장소(고유명)                  | 시간대 | 배경 소스                                  | 앵커 소품                        | 캐릭터                     |
// |-----|--------|-------------------------------|--------------------------------|--------|--------------------------------------------|----------------------------------|----------------------------|
// | s1  | [1]    | 훅 — 돌려보낸 상소 / 바뀐 이름 | 대구부 읍성 문루 앞 큰길       | 낮     | gateBgSVG "day"(EP.25→28 성문 계보)        | **현판 게시대 「大丘」 + 되돌아온 상소** | 유생(militia 갓)      |
// | s2  | [2-3]  | 원래 언덕 구 / 향교의 공자 제사 | 대구 향교 대성전 앞마당        | 낮     | hyanggyoBgSVG(신규: 홍살문+대성전+박석)    | **대성전 + 홍살문**              | 대구 판관·유생             |
// | s3  | [4-5]  | 축문의 「大丘判官」 / 공자 이름 = 丘 | 대성전 안 — 공자 신위 앞     | 낮     | shrineBgSVG(신규: 감실+위패+제상+마루)     | **위패(감실) + 제상**            | 대구 판관(초헌)·유생       |
// | s4  | [6]    | 신위 앞에서 이름을 부른 셈     | 축문 지면(한지 도판)           | —      | sheetBgSVG "chuk"(EP.28 재사용·제첨 교체)  | **축문 「維歲次…大丘判官」 + 丘 방점** | (무인 — 인포그래픽)   |
// | s5  | [7-8]  | 1750 이양채 상서 — 從便變通     | 이양채의 사랑채 방 안          | 낮     | roomBgSVG "study"(EP.26→29 계열)           | **서안 + 붓 + 상서 종이**        | 이양채(militia 갓)         |
// | s6  | [9-10] | 승지의 반박 — 「凡祭不諱」      | 창덕궁 편전 어전               | 낮     | throneBgSVG(EP.5→25→29 재사용)             | **어좌 + 일월오봉도**            | 영조(king)·승지            |
// | s7  | [11]   | 구 자를 쓴 중국 고을 일곱      | 펼친 자전 지면(한지 도판)      | —      | sheetBgSVG "jajeon"(선장본 좌우면 변주)    | **한자 7자 격자 封沈商任內章安** | (무인 — 인포그래픽)        |
// | s8  | [12-13]| 영조의 면박 — 三百餘年…泯默     | 창덕궁 편전 어전(재방문)       | 낮     | throneBgSVG "rage"(붉은 조명 변주)         | **어좌 + 물린 상소**             | 영조(angry)·승지           |
// | s9  | [14]   | 命給其章 — 상소 반려           | 궁궐 정전 앞마당               | 낮     | courtBgSVG(EP.22→25→29 재사용)             | **되돌려 나가는 상소 두루마리**  | 승지                       |
// | s10 | [15-16]| 정조 대 실록의 大邱 / 邱 자형   | 실록 지면(한지 도판)           | —      | sheetBgSVG "sillok"(제첨 「正祖實錄」)     | **「安東 大邱 等邑」 + 丘+阝=邱** | (무인 — 인포그래픽)        |
// | s11 | [17]   | 철종 무렵 실록에서 大丘 소멸    | 춘추관 사고(史庫) 서가         | 낮     | archiveBgSVG(신규: 낮은 궤+눕힌 서책 더미) | **실록 책궤 + 표기 분포 수치**   | 사관(militia 사모)         |
// | s12 | [18-19]| 왕명은 없었다 / 임금은 이겼고   | 대구부 읍성 문루 앞(수미상관)  | 낮→석양| gateBgSVG "dusk"                           | **현판 「大丘」→「大邱」 교체**   | 유생(s1과 동일 rig)        |
// | s13 | [20]   | 아웃트로                       | —                              | —      | —                                          | —                                | host                       |
//
// 캐스팅 (기존 rig 6종 안에서만 — 신규 variant 없음):
//   영조     = king + 익선관 + 적색 곤룡포(#8a3226) — **EP.25 영조와 같은 색**(같은 임금 = 같은 rig).
//   이양채   = militia + **갓 + 청금(靑衿) 옥색 도포** — 幼學(벼슬 없는 유생)이므로 사모·단령 금지.
//   유생(s1·s12) = 이양채와 같은 rig·같은 색. 수미상관에서 동일인으로 읽혀야 한다.
//   승지     = militia + samo + 청 단령(#2f4f7a). 대구 판관 = militia + samo + 녹 단령(#4a6b3f).
//   사관     = militia + samo + 회청 단령(#5d6b7a) — EP.25 사관 계승.
//   ⚠ 흉배는 단종 2년(1454) 제도 이후라 1750년 씬은 noBadge 불필요.
//   ⚠ 사모는 중국 관모 오독 리스크 → 단령 색 + 각대 + 씬 맥락(향교·어전·사고)으로 보강.
//   host = s13. 내레이션은 3인칭 해설 → talker 없음(전 씬 립싱크 없음).
//
// 씬 경계 = S5 줄 테이블(20줄 → 12씬 + 아웃트로). 리드 0.30s, TRANSITION 0.45.
// ⚠ L7·L8·L15·L20은 whisper가 앞당긴 것을 silencedetect로 보정한 값 사용(지뢰 #58).
// ⚠ 정보량 '중간'의 권장 씬 수는 8~10 + 아웃트로인데 12를 썼다 — 배경 연속 금지(지뢰 #62)를
//   지키면서 장소가 12번 바뀌는 서사라 병합할 곳이 없었다. 씬당 평균 6.4s로 페이싱은 유지된다.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. **상소 소품에 「邱」자를 그리지 말 것.** 실록 상소 원문의 요구는 「伏乞從便變通」뿐이고
//      邱자는 어디에도 없다. s5의 상서 지면에는 「大丘」와 「變通」까지만.
//   2. **「大丘 → 大邱」를 왕명·교지 형식으로 그리지 말 것** — 개칭을 명한 왕명은 실록에 0건이다.
//      s12의 현판 교체는 **아무도 명하지 않은 사이에 바뀌는 것**으로 연출한다(교지 두루마리·옥새 금지).
//   3. **大邱 등장 연도를 화면 숫자로 단정하지 말 것** — s10 스탬프는 「정조 2년(1778) 기사」까지만.
//      「최초」라는 낱말을 쓰지 않는다(기관 서술은 1779년이라 어긋난다).
//   4. **이양채를 조롱·희화화하지 말 것.** 영조의 면박은 사료지만 화면이 편들면 톤이 무너진다 —
//      s8에서 이양채는 화면에 없고, s5·s12의 유생 표정은 진지하게 유지한다.
//   5. 사도세자(元良) 등장 금지. 청 옹정제·중국 조정 장면 금지 — s7은 **글자 지면**으로만 처리한다.
//   6. s11 수치 스탬프는 **실록 표기 한정**임을 반드시 병기(실록 밖 문헌의 大丘가 반론 카드).
//
// ⚠ 시그니처 표 준수 메모:
//   · 한자는 SVG <text>의 실제 글자만(지뢰 #67). `writing-mode` 금지 — 글자당 <text>로 y를 직접 쌓는다(지뢰 #78).
//   · 현판 게시대는 **두 기둥이 지면까지** — 편액을 하늘에 띄우면 공중 부양으로 읽힌다(EP.22 1R).
//   · 위패는 감실(龕室) 안에 — 세로 긴 판 단독 배치 금지(지뢰 #84). 개석+계단 대좌형(EP.22 s5 명패 문법).
//   · 어좌는 비워 두지 않는다(지뢰 #50·#66) — 영조 rig를 어좌 앞 중심에 정렬.
//   · 서안은 **낮은 좌식**(허리 높이 4각 탁자 = 중국 문법). 붓은 종이에 닿게 눕힌다(지뢰 #20).
//   · 서책은 **눕혀 쌓기 + 좌측 갈색 제첨 탭** — 세워 꽂은 색색 책등은 서양식(EP.22 1R 고증).
//   · 담장 마감은 **낮은 반원 수막새** — 균일 사각 톱니는 성벽 여장/중국 성벽(EP.29 고증).
//   · 기왓골 세로 + 처마 반전 완만(지뢰 #60·#73). 단청 붉은 기둥은 궁궐 전용(지뢰 #28) —
//     향교 대성전·읍성 문루는 나무색 기둥으로 간다.
//   · 배경 글로우 원형 금지(지뢰 #47). 소품 진입은 y슬라이드만(지뢰 #40).
var TRANSITION = 0.45;

var YEONGJO = { shirt: "#8a3226", pants: "#26221c" };   // 영조 — 적색 곤룡포(EP.25 계승)
var YUSAENG = { shirt: "#7e9bab", pants: "#46606e" };   // 이양채/유생 — 갓 + 청금 옥색 도포
var SEUNGJI = { shirt: "#2f4f7a", pants: "#1f2d45" };   // 승지 황경원 — 청 단령
var PANGWAN = { shirt: "#4a6b3f", pants: "#2b3a24" };   // 대구 판관 — 녹 단령
var SAGWAN  = { shirt: "#5d6b7a", pants: "#38414d" };   // 사관 — 회청 단령(EP.25 계승)
var HOST    = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "임금이 상소를 돌려보냈는데, 도시 이름은 달라졌습니다."
    id: "s1", start: 0, dur: 5.83, talker: null,
    chars: [
      { id: "s1-yusaeng", variant: "militia", shirt: YUSAENG.shirt, pants: YUSAENG.pants,
        x: 30, bottom: 600, w: 420, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 3.1, char: "s1-yusaeng", expr: "shocked", pose: "raised" }],
  },
  {
    // S2 — "대구는 원래 언덕 구 자를 썼습니다. / 향교에서는 공자에게 제사를 지냈어요."
    id: "s2", start: 5.38, dur: 7.24, talker: null,
    chars: [
      { id: "s2-pangwan", variant: "militia", hat: "samo", shirt: PANGWAN.shirt, pants: PANGWAN.pants,
        x: 20, bottom: 596, w: 400, expr: "neutral", pose: "down" },
      { id: "s2-yusaeng", variant: "militia", shirt: YUSAENG.shirt, pants: YUSAENG.pants,
        x: 80, bottom: 600, w: 370, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [{ at: 9.5, char: "s2-pangwan", expr: "proud", pose: "raised" }],
  },
  {
    // S3 — "축문에는 대구 판관이라고 적었습니다. / 그런데 공자의 이름이 바로 구였습니다."
    id: "s3", start: 12.17, dur: 8.36, talker: null,
    chars: [
      { id: "s3-pangwan", variant: "militia", hat: "samo", shirt: PANGWAN.shirt, pants: PANGWAN.pants,
        x: 20, bottom: 600, w: 420, expr: "neutral", pose: "raised" },
      { id: "s3-yusaeng", variant: "militia", shirt: YUSAENG.shirt, pants: YUSAENG.pants,
        x: 82, bottom: 594, w: 360, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 17.0, char: "s3-pangwan", expr: "shocked" },
      { at: 17.3, char: "s3-yusaeng", expr: "shocked", pose: "shrug" },
    ],
  },
  {
    // S4 — "위패 앞에서 성인의 이름을 부른 셈이죠." (축문 지면 — 화자를 사료로 넘김)
    id: "s4", start: 20.08, dur: 3.66, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S5 — "천칠백오십년, 유생 이양채가 상소를 올립니다. / 고을 이름을 편한 대로 바꿔 달라고요."
    id: "s5", start: 23.29, dur: 9.16, talker: null,
    chars: [
      { id: "s5-iyangchae", variant: "militia", shirt: YUSAENG.shirt, pants: YUSAENG.pants,
        x: 40, bottom: 580, w: 440, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 28.6, char: "s5-iyangchae", expr: "proud", pose: "point" }],
  },
  {
    // S6 — "승지가 그 자리에서 반박했습니다. / 예법에 제사에는 이름을 피하지 않는다고요."
    id: "s6", start: 32.00, dur: 7.55, talker: null,
    chars: [
      { id: "s6-yeongjo", variant: "king", shirt: YEONGJO.shirt, pants: YEONGJO.pants,
        x: 48, bottom: 600, w: 430, expr: "neutral", pose: "down" },
      { id: "s6-seungji", variant: "militia", hat: "samo", shirt: SEUNGJI.shirt, pants: SEUNGJI.pants,
        x: 82, bottom: 594, w: 370, expr: "angry", pose: "raised", flip: true },
    ],
    changes: [{ at: 35.9, char: "s6-seungji", expr: "proud", pose: "point" }],
  },
  {
    // S7 — "구 자를 쓴 중국 고을만 일곱을 꼽았습니다." (자전 지면 — 중국 조정 장면 회피)
    id: "s7", start: 39.10, dur: 4.59, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S8 — "영조는 더 매서웠습니다. / 삼백여 년 동안 고을 선비들이 이양채만 못해 잠자코 있었겠느냐."
    id: "s8", start: 43.24, dur: 8.27, talker: null,
    chars: [
      { id: "s8-yeongjo", variant: "king", shirt: YEONGJO.shirt, pants: YEONGJO.pants,
        x: 48, bottom: 600, w: 440, expr: "angry", pose: "down" },
      { id: "s8-seungji", variant: "militia", hat: "samo", shirt: SEUNGJI.shirt, pants: SEUNGJI.pants,
        x: 83, bottom: 594, w: 360, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [
      { at: 46.4, char: "s8-yeongjo", expr: "angry", pose: "point" },
      { at: 46.7, char: "s8-seungji", expr: "shocked", pose: "shrug" },
    ],
  },
  {
    // S9 — "임금은 상소를 되돌려 주라 명했습니다." (命給其章 — 반려)
    id: "s9", start: 51.06, dur: 4.17, talker: null,
    chars: [
      { id: "s9-seungji", variant: "militia", hat: "samo", shirt: SEUNGJI.shirt, pants: SEUNGJI.pants,
        x: 36, bottom: 590, w: 420, expr: "neutral", pose: "point" },
    ],
    changes: [],
  },
  {
    // S10 — "그런데 정조 때부터 실록에 다른 글자가 나옵니다. / 구 자에 고을 읍을 붙인 대구였죠."
    id: "s10", start: 54.78, dur: 8.55, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S11 — "철종 무렵에는 실록에서 옛 글자가 사라집니다."
    id: "s11", start: 62.88, dur: 4.79, talker: null,
    chars: [
      { id: "s11-sagwan", variant: "militia", hat: "samo", shirt: SAGWAN.shirt, pants: SAGWAN.pants,
        x: 17, bottom: 590, w: 360, expr: "neutral", pose: "down" },
    ],
    changes: [],
  },
  {
    // S12 — "바꾸라는 왕명은 끝내 없었어요. / 임금은 이겼고, 글자는 바뀌었습니다." (수미상관)
    id: "s12", start: 67.22, dur: 7.69, talker: null,
    chars: [
      { id: "s12-yusaeng", variant: "militia", shirt: YUSAENG.shirt, pants: YUSAENG.pants,
        x: 30, bottom: 600, w: 420, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 71.2, char: "s12-yusaeng", expr: "happy", pose: "raised" }],
  },
  {
    // S13 아웃트로
    id: "s13", start: 74.46, dur: 6.04, talker: null,
    chars: [
      { id: "s13-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
