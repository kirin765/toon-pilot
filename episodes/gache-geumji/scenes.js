// Director scene script — EP.31 가체 금지령, 사람을 죽인 가발 (vertical 1080×1920).
// Schema per scene: id, start/dur (dur includes 0.45 transition overlap into next),
//   talker, chars [{ id, variant, skin?, shirt?, pants?, skirt?, hat?, gache?, jokduri?, x(%), bottom(px), w(px), expr, pose, flip? }],
//   changes [{ at, char, expr?, pose? }].
//
// ⚠ S6.0 씬 플랜 표 (지뢰 #62) — 장소를 고유명으로 먼저 확정하고 앵커 소품·배경 소스를 도출한다.
//   distinct 배경 5종(부잣집 규방·한양 기와집 골목·창덕궁 편전 어전·이덕무의 서재·한지 도판 2변주) + 아웃트로.
//   동일 배경 연속은 s2→s3(골목, 여인 1명 추가 + 넘팝으로 변화 ≥1) 한 곳뿐. 재방문(비연속): 규방 s1·s5·s8(톤 변주), 어전 s4·s6·s10.
//
// | 씬  | 문장   | 요지                           | 장소(고유명)             | 시간대 | 배경 소스                                | 앵커 소품                       | 캐릭터                  |
// |-----|--------|--------------------------------|--------------------------|--------|------------------------------------------|---------------------------------|-------------------------|
// | s1  | [1]    | 훅 — 사람을 죽일 만큼 무거운 가발 | 부잣집 규방 안          | 낮     | boudoirBgSVG "day"(신규: 세살창+횃대+경대) | **가체 얹은 부인(히어로)+경대** | 부인A(lady+gache)       |
// | s2  | [2-3]  | 딴머리를 얹어 머리를 높임 / 가체  | 한양 기와집 골목        | 낮     | streetBgSVG "day"(신규: 기와집+막돌담+능선) | **가체 부인 2인**              | 부인A·부인B(lady+gache) |
// | s3  | [4-5]  | 높이 경쟁 / 실록의 몇백 금       | 한양 기와집 골목(연속)   | 낮     | streetBgSVG "day" — 여인C 등장+넘팝로 변화 | **더 큰 가체(tall) + 몇백 금**  | 부인B·부인C(tall)       |
// | s4  | [6-7]  | 영조 금지령 / 족두리로 대신       | 창덕궁 편전 어전        | 낮     | throneBgSVG "base"(EP.5→25→30 재사용)     | **어좌 + 족두리 쓴 궁녀**       | 영조(king)·궁녀(jokduri)|
// | s5  | [8-9]  | 족두리를 구슬로 / 값이 맞먹음     | 부잣집 규방(재방문)      | 낮     | boudoirBgSVG "warm"                       | **구슬 족두리 부인 + 경대**     | 부인A(jokduri jewel)    |
// | s6  | [10-11]| 팔 년 만에 철회 / 유행에 진 임금  | 창덕궁 편전 어전(재방문) | 낮     | throneBgSVG "base"                        | **어좌 + 영조(체념)**           | 영조·승지(militia samo) |
// | s7  | [12-13]| 이덕무의 기록 / 며느리 이야기     | 이덕무의 서재(사랑채)    | 낮     | roomBgSVG(EP.26→30 재사용 — 지면 글자 교체)| **서안 + 붓 + 「士小節」 지면**  | 이덕무(militia 갓)      |
// | s8  | [14]   | 압사 — 가체 무게에 목뼈가         | 부잣집 안방(저녁)        | 저녁   | boudoirBgSVG "dusk"(방문 추가 변주)        | **기우는 tall 가체 + 방문**     | 며느리(tall)·시아버지   |
// | s9  | [15]   | 사치가 사람을 죽였다 — 탄식       | 『사소절』 지면(한지 도판)| —     | sheetBgSVG "士小節"(EP.28→30 재사용)      | **「婦儀」 글줄 + 국역 인용**    | (무인 — 인포그래픽)     |
// | s10 | [16]   | 정조의 재금지                    | 창덕궁 편전 어전(재방문) | 낮     | throneBgSVG "base" — 왕이 정조(홍룡포)     | **어좌 + 정조**                 | 정조(king #c0392b)·승지 |
// | s11 | [17-18]| 한문+한글 병기 사목               | 『가체신금사목』 지면     | —     | sheetBgSVG "事目" — 한문열+한글열 대비     | **한문 「加髢申禁事目」+한글열** | (무인 — 인포그래픽)     |
// | s12 | [19-20]| 쪽머리 정착 / 사극 속 유산        | 한양 기와집 골목(석양)   | 석양   | streetBgSVG "dusk"                        | **쪽머리 부인(가체 없음)**      | 부인A(기본 lady)·부인B  |
// | s13 | [21]   | 아웃트로                         | —                        | —      | —                                        | —                               | host                    |
//
// 캐스팅 (rig 6종 안 — lady 머리 옵션 gache/jokduri는 characters.js에 이번 편 신설, hwarang 신설 전례):
//   부인A = lady, 살구 저고리 + 자주 치마. s1 가체 → s5 구슬 족두리 → s12 쪽머리(기본 lady)로
//           같은 인물이 머리만 바뀌는 아크(수미상관). 부인B = 옥색 저고리 + 남색 치마.
//   부인C(s3) = 황 저고리 + 다홍 치마 + gache:"tall" — 「높을수록 자랑」의 화면 근거.
//   며느리(s8) = 연분홍 저고리 + gache:"tall", w 350(13세 — kid rig는 댕기머리(미혼)라 부적합, 작은 lady로).
//   영조 = king #8a3226(EP.25·30 계승). 정조 = king #c0392b 홍룡포(EP.16 계승) — 색으로 두 왕 구분.
//   궁녀(s4) = lady + jokduri(민짜) — 금지령의 대상을 화면에 세운다. 이덕무 = militia 갓 + 녹갈 도포.
//   시아버지 = militia 갓 + 갈색 도포. host = s13. 내레이션 3인칭 해설 → talker 없음(전 씬 립싱크 없음).
//
// 씬 경계 = S5 문장 테이블(21줄 → 12씬 + 아웃트로). 리드 0.25~0.35s, TRANSITION 0.45.
// ⚠ 문장 9·16·21 start는 silencedetect 보정값(29.75 / 58.11 / 76.82) 기준(지뢰 #58).
// ⚠ 정보량 '중간' 권장 씬 수 8~10 + 아웃트로인데 12를 썼다 — 규방/골목/어전을 오가는 왕복 서사라
//   문장 경계에서 장소가 바뀌는 곳을 병합할 수 없었다. 씬당 평균 6.4s로 페이싱은 유지된다.
//
// ⚠ S3 팩트체크 이월 제약(factcheck.md) — 화면도 이 선을 지킨다:
//   1. 압사 일화는 이덕무 단일 기록 — s8은 s7(이덕무가 기록을 남긴다) 뒤에만 오고,
//      화면 스탬프도 「~라고 적었다」 전언 프레임을 유지한다. 실록 인용처럼 보이게 하지 않는다.
//   2. s8 사망의 직접 묘사 금지 — 기울어짐+충격선까지만. X자 눈(만화 사망 표시)은 시그니처 표 금지 항목.
//   3. s5 족두리 장식은 **구슬·패물(珠貝)** — 초안의 '칠보'는 S3 🔴로 기각됐다. 칠보(법랑) 질감 금지.
//   4. s6 철회는 「옛 제도 회복」까지만 — "전면 재허용"으로 보이게 그리지 않는다(加髢만은 계속 금지 단서).
//   5. s11 한글 열은 문서명 「가체신금사목」 표기까지만 — 한글 전교의 본문 문장을 지어내지 않는다.
//   6. 가체 무게 kg·가격 환산 수치 금지 — 화면 수치는 실록 「累百金」과 연도만.
//
// ⚠ 시그니처 표 준수 메모:
//   · 가체는 땋은 결 스트로크 필수(민무늬 = 터번). 좌우 쌍 돌기 금지 — 중앙 단일 매스 링.
//   · 족두리는 인물 머리 위에서만(모자 단독 배치 = UFO, 지뢰 표). 소품으로 따로 세우지 않는다.
//   · 경대는 사각 접이 거울 + 서랍 — 원형 거울 금지(원형 기물 단독 = 달/행성).
//   · 횃대에 건 한복은 동정 V깃이 보여야 옷으로 읽힌다.
//   · 한자는 SVG <text> 실제 글자만(지뢰 #67), writing-mode 금지(지뢰 #78).
//   · 서안은 낮은 좌식, 붓은 종이에 닿게 눕힘(지뢰 #20). 어좌는 비워 두지 않는다(지뢰 #50).
//   · 담장 마감은 낮은 반원 수막새(EP.29). 기왓골 세로 + 처마 반전 완만(지뢰 #60·#73).
//   · 사가(규방·골목·서재)에 단청 붉은 기둥 금지(지뢰 #28).
var TRANSITION = 0.45;

var YEONGJO = { shirt: "#8a3226", pants: "#26221c" };   // 영조 — 적색 곤룡포(EP.25·30 계승)
var JEONGJO = { shirt: "#c0392b", pants: "#7c1d12" };   // 정조 — 홍룡포(EP.16 계승)
var WIFE_A  = { shirt: "#d98e73", skirt: "#7a4a68" };   // 부인A — 살구 저고리 + 자주 치마 (s1·s5·s12 동일인)
var WIFE_B  = { shirt: "#7d9bb5", skirt: "#3f5a78" };   // 부인B — 옥색 저고리 + 남색 치마
var WIFE_C  = { shirt: "#c8ae54", skirt: "#8e3b30" };   // 부인C — 황 저고리 + 다홍 치마 (tall 가체)
var MYEONEURI = { shirt: "#e0a8b8", skirt: "#6e3a4a" }; // 며느리 — 연분홍 저고리
var GUNGNYEO  = { shirt: "#5f8a5f", skirt: "#2f4a2f" }; // 궁녀 — 녹 저고리
var IDEOKMU = { shirt: "#96a583", pants: "#5c6b4f" };   // 이덕무 — 녹갈 도포
var SIABEOJI = { shirt: "#6b5a44", pants: "#3f3528" };  // 시아버지 — 갈색 도포
var SEUNGJI = { shirt: "#2f4f7a", pants: "#1f2d45" };   // 승지 — 청 단령
var HOST    = { shirt: "#d94f37", pants: "#1f2d45" };

var SCENES = [
  {
    // S1 훅 — "조선의 가발은, 사람을 죽일 만큼 무거웠습니다."
    id: "s1", start: 0, dur: 5.15, talker: null,
    chars: [
      { id: "s1-wife", variant: "lady", gache: true, shirt: WIFE_A.shirt, skirt: WIFE_A.skirt,
        x: 36, bottom: 590, w: 460, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 2.2, char: "s1-wife", expr: "shocked" }],
  },
  {
    // S2 — "여인들은 딴머리를 얹어 머리를 높였습니다. / 이것을 가체라고 했죠."
    id: "s2", start: 4.70, dur: 7.07, talker: null,
    chars: [
      { id: "s2-wifea", variant: "lady", gache: true, shirt: WIFE_A.shirt, skirt: WIFE_A.skirt,
        x: 26, bottom: 596, w: 410, expr: "proud", pose: "down" },
      { id: "s2-wifeb", variant: "lady", gache: true, shirt: WIFE_B.shirt, skirt: WIFE_B.skirt,
        x: 74, bottom: 590, w: 400, expr: "neutral", pose: "point", flip: true },
    ],
    changes: [{ at: 9.3, char: "s2-wifeb", expr: "proud" }],
  },
  {
    // S3 — "높을수록, 클수록 자랑이었습니다. / 실록이 적은 값만 몇백 금이었죠."
    id: "s3", start: 11.32, dur: 7.75, talker: null,
    chars: [
      { id: "s3-wifec", variant: "lady", gache: "tall", shirt: WIFE_C.shirt, skirt: WIFE_C.skirt,
        x: 30, bottom: 590, w: 430, expr: "proud", pose: "raised" },
      { id: "s3-wifeb", variant: "lady", gache: true, shirt: WIFE_B.shirt, skirt: WIFE_B.skirt,
        x: 78, bottom: 596, w: 370, expr: "shocked", pose: "down", flip: true },
    ],
    changes: [{ at: 15.8, char: "s3-wifeb", expr: "shocked", pose: "shrug" }],
  },
  {
    // S4 — "보다 못한 영조가 금지령을 내렸습니다. / 가체를 벗고 족두리를 쓰라고 했죠."
    id: "s4", start: 18.62, dur: 7.59, talker: null,
    chars: [
      { id: "s4-yeongjo", variant: "king", shirt: YEONGJO.shirt, pants: YEONGJO.pants,
        x: 48, bottom: 600, w: 430, expr: "angry", pose: "down" },
      { id: "s4-gungnyeo", variant: "lady", jokduri: true, shirt: GUNGNYEO.shirt, skirt: GUNGNYEO.skirt,
        x: 82, bottom: 592, w: 350, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [{ at: 22.8, char: "s4-yeongjo", expr: "angry", pose: "point" }],
  },
  {
    // S5 — "그러자 여인들은 족두리를 구슬로 꾸몄죠. / 꾸미는 값이 가체와 맞먹게 됐죠."
    id: "s5", start: 25.76, dur: 7.63, talker: null,
    chars: [
      { id: "s5-wife", variant: "lady", jokduri: "jewel", shirt: WIFE_A.shirt, skirt: WIFE_A.skirt,
        x: 36, bottom: 590, w: 440, expr: "proud", pose: "down" },
    ],
    changes: [{ at: 30.1, char: "s5-wife", expr: "happy", pose: "raised" }],
  },
  {
    // S6 — "영조는 팔 년 만에 명을 거두었습니다. / 임금이 유행에 진 것이었죠."
    id: "s6", start: 32.94, dur: 6.81, talker: null,
    chars: [
      { id: "s6-yeongjo", variant: "king", shirt: YEONGJO.shirt, pants: YEONGJO.pants,
        x: 48, bottom: 600, w: 430, expr: "angry", pose: "down" },
      { id: "s6-seungji", variant: "militia", hat: "samo", shirt: SEUNGJI.shirt, pants: SEUNGJI.pants,
        x: 82, bottom: 594, w: 360, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [{ at: 36.9, char: "s6-yeongjo", expr: "neutral", pose: "shrug" }],
  },
  {
    // S7 — "금지가 풀린 사이, 학자 이덕무가 기록을 남깁니다. / 부잣집의 열세 살 며느리 이야기입니다."
    id: "s7", start: 39.30, dur: 9.50, talker: null,
    chars: [
      { id: "s7-ideokmu", variant: "militia", shirt: IDEOKMU.shirt, pants: IDEOKMU.pants,
        x: 34, bottom: 584, w: 430, expr: "neutral", pose: "down" },
    ],
    changes: [{ at: 44.6, char: "s7-ideokmu", expr: "angry" }],
  },
  {
    // S8 — "시아버지 앞에 일어서다, 가체 무게에 목뼈가 부러졌습니다." (직접 묘사 금지 — 기울어짐+충격선까지)
    id: "s8", start: 48.35, dur: 5.60, talker: null,
    chars: [
      { id: "s8-myeoneuri", variant: "lady", gache: "tall", shirt: MYEONEURI.shirt, skirt: MYEONEURI.skirt,
        x: 56, bottom: 588, w: 350, expr: "neutral", pose: "down" },
      { id: "s8-siabeoji", variant: "militia", shirt: SIABEOJI.shirt, pants: SIABEOJI.pants,
        x: 14, bottom: 592, w: 380, expr: "neutral", pose: "down" },
    ],
    changes: [
      { at: 50.6, char: "s8-myeoneuri", expr: "shocked" },
      { at: 51.2, char: "s8-siabeoji", expr: "shocked", pose: "raised" },
    ],
  },
  {
    // S9 — "이덕무는, 사치가 사람을 죽였다고 탄식했죠." (사소절 지면 — 전언 프레임)
    id: "s9", start: 53.50, dur: 4.81, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S10 — "정조는 다시 금지령을 내렸습니다."
    id: "s10", start: 57.86, dur: 4.03, talker: null,
    chars: [
      { id: "s10-jeongjo", variant: "king", shirt: JEONGJO.shirt, pants: JEONGJO.pants,
        x: 48, bottom: 600, w: 430, expr: "angry", pose: "point" },
      { id: "s10-seungji", variant: "militia", hat: "samo", shirt: SEUNGJI.shirt, pants: SEUNGJI.pants,
        x: 82, bottom: 594, w: 360, expr: "neutral", pose: "down", flip: true },
    ],
    changes: [],
  },
  {
    // S11 — "이번엔 법령을 한글로도 반포했는데요. / 여인들이 읽을 수 있게 한 것이죠."
    id: "s11", start: 61.44, dur: 7.31, talker: null,
    chars: [],
    changes: [],
  },
  {
    // S12 — "여인들은 차츰 쪽머리를 하게 됩니다. / 사극 속 쪽진 머리는, 이 금지령의 유산입니다."
    id: "s12", start: 68.30, dur: 8.09, talker: null,
    chars: [
      { id: "s12-wifea", variant: "lady", shirt: WIFE_A.shirt, skirt: WIFE_A.skirt,
        x: 30, bottom: 596, w: 420, expr: "happy", pose: "down" },
      { id: "s12-wifeb", variant: "lady", shirt: WIFE_B.shirt, skirt: WIFE_B.skirt,
        x: 76, bottom: 590, w: 390, expr: "proud", pose: "down", flip: true },
    ],
    changes: [{ at: 72.6, char: "s12-wifea", expr: "proud", pose: "point" }],
  },
  {
    // S13 아웃트로
    id: "s13", start: 75.94, dur: 6.46, talker: null,
    chars: [
      { id: "s13-host", variant: "host", shirt: HOST.shirt, pants: HOST.pants,
        x: 22, bottom: 300, w: 420, expr: "happy", pose: "raised" },
    ],
    changes: [],
  },
];
