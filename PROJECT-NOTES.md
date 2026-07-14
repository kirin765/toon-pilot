# PROJECT-NOTES — 삼십초 역사 (toon-pilot)

2026-07-04 세션 핸드오프. 사우스파크풍 종이 컷아웃 애니메이션을 코드로 빠르게 찍어내는 파일럿.
목표 채널: 유튜브 역사/영화/시사 30초~ 요약 (오리지널 캐릭터, South Park 디자인 복제 금지).

## 완성물

- `renders/imjin-30s-pilot.mp4` — 35.5s, 1920×1080, h264+aac. "임진왜란 편" 파일럿 완성본.
- `renders/imjin-30s-pilot-v2.mp4` — 동일 에피소드, 파츠 일러스트 업그레이드 버전 (2026-07-05).
- 스타일 스펙은 `design.md` (팔레트·폰트·모션 규칙·금지사항).

## 아키텍처 (3-레이어 분리가 핵심)

| 파일 | 역할 |
| --- | --- |
| `characters.js` | **rig 팩토리.** `makeCharacter({variant, skin, shirt, pants})` 하나로 모든 캐릭터 생성. variant = host/king/admiral/militia (모자·머리만 교체). `EXPRESSIONS` 5종(neutral/happy/proud/shocked/angry) = 눈·입·눈썹 가시성/변형 조합. `POSES` 4종(down/point/raised/shrug) = 팔 회전각. |
| `scenes.js` | **디렉터 장면 JSON.** 장면별 start/dur/talker/chars(위치·표정·포즈)/changes(중간 연출 변경). LLM이 생성하는 레이어가 여기 + 대본. `TRANSITION=0.45` 겹침 포함. |
| `captions-data.js` | whisper 타이밍 + 원문 보정된 `WORDS`(립싱크 구동) & `CAPTION_GROUPS`(자막, hi=강조어). |
| `index.html` | 조립. 장면 DOM/배경, 캐릭터 마운트, 타임라인 빌드(입 플랩·깜빡임·바운스·전환·자막·스탬프). |

## 에피소드 제작 파이프라인

```bash
# 1. 대본 (자연 발화 ~2.5w/s, 숫자는 한글 표기 — TTS가 읽는 대로)
vim script.txt
# 2. 한국어 TTS — 내장 Kokoro는 한국어 미지원, edge-tts 사용
uvx edge-tts --voice ko-KR-InJoonNeural --rate=+6% --file script.txt --write-media narration.mp3
# 3. 단어 타임스탬프 (.en 모델 금지)
npx hyperframes transcribe narration.mp3 --model small --language ko
# 4. transcript.json 타이밍으로 captions-data.js(WORDS/GROUPS) + scenes.js(장면 경계=문장 경계) 갱신
#    index.html의 각 씬 data-start/duration, audio data-duration, root data-duration도 동기화
# 5. 검증 → 렌더
npm run check
npx hyperframes render --quality standard --output renders/<name>.mp4
# 프레임 눈검증: ffmpeg -ss <t> -i renders/x.mp4 -frames:v 1 f.png
```

첫 편 기준 렌더 ~34초. 대본→완성 몇 분 수준.

## 세션에서 밟은 지뢰 (재발 방지)

1. **SVG 팔 회전 피벗**: `<g>`에 CSS `transform-origin: Npx Npx` 쓰면 피벗이 틀어져 팔이 몸에서 분리됨(스케일된 svg에서 단위 해석 문제). 반드시 GSAP `svgOrigin` 사용 — arm-l `"60 152"`, arm-r `"140 152"` (초기 포즈 `gsap.set` + 변경 `tl.to` 모두).
2. **inspector는 invisible도 측정**: `tl.fromTo`의 immediateRender가 등장 전 pre-state(거대 scale, opacity 0)를 만들고, inspector는 `visibility:hidden`이어도 잡음. 스탬프류 슬램은 **scale 0→1 back.out** + CSS `visibility:hidden` + 등장 시점 `tl.set visible`로.
3. **자식 오버플로가 부모 씬에 귀속됨**: 캔버스보다 큰 장식(드리프트용 2400px 파도)은 씬의 scrollWidth를 부풀려 `clipped_text` 에러 유발. `data-layout-ignore`를 자식에 달아도 소용없음 — **overflow:hidden 래퍼**(`.waves-clip`, data-layout-ignore) 안에 넣어야 함. 오프스크린 진입(거북선)도 동일 래퍼로 해결.
4. **잔여 inspect 경고 5건은 노이즈**: #s3 풀캔버스 rect에 스탬프 텍스트가 귀속돼 brand-badge/자막과 "겹침"으로 나옴. 렌더 프레임으로 실겹침 없음 확인(2026-07-04). 경고 카운트가 이 기준선에서 늘면 그때만 조사.
5. **transcript.json 한글이 깨져 보이는 것**은 터미널 출력 인코딩 문제일 수 있음 — 원문은 script.txt 기준으로 captions-data.js에 보정해 둠. whisper가 단어를 합치기도 함(예: "이십 일"→"20일") — 단어 수 대조로 매핑.
6. **장면 전환은 트랙 교대**: same-track 클립은 겹칠 수 없으므로 씬을 track 0/1 교대 배치 + 0.45s 겹침 + z-index 상승(#s1 10 → #s5 50, overlay 100). 진입 씬의 `.stage`(배경 포함 풀블리드)를 push/iris/blur로 덮어씌움. 퇴장 애니메이션 금지(마지막 씬 제외).
7. **preview 서버**: 프로젝트 루트가 아닌 세션에서는 `.claude/launch.json`의 `toon-pilot-preview`(port 3013) 사용. preview_eval로 `window.__timelines.main.seek(t)` 후 DOM 검사 가능 (overlay가 최상단이므로 `elementsFromPoint` 복수형).
8. **지뢰 #2는 EP1 자체 코드에서도 안 지켜진 곳이 있었음**(hook-stamp/stamp-rank/stamp-flog가 `scale:2.6~2.8→1`로 슬램). EP2(김시습)에서 이 패턴을 그대로 복붙했다가 `clipped_text` 에러 재현(2026-07-09) — 큰 텍스트 스탬프는 예외 없이 **scale 0→1**만 쓸 것. 기존 씬 복사 시 이 지뢰가 반복될 수 있으니 스탬프 애니메이션은 매번 확인.
9. **TTS 특정 단어 발음 실패**: edge-tts `ko-KR-InJoonNeural`이 "금오"(금오산·금오신화·금오공과대학교 등)를 문맥·보이스 무관하게 "금호"/무작위 오발음으로 재현(2026-07-09, SunHi/Hyunsu 보이스로도 재현 — 특정 보이스 문제 아님). 표기 변경(띄어쓰기·구두점)으로도 해결 안 됨 — **동의어로 우회**(예: 금오산→"경주 남산")하거나, 발음이 필수가 아니면 대사에서 빼고 화면 스탬프로만 노출. 새 대본에 흔치 않은 한자어 고유명사가 들어가면 TTS 생성 후 whisper 재전사로 반드시 귀검증(S4).
10. **자막 숫자 변환은 작은 수도 빠뜨리지 말 것**: S5 "표시형 변환"(십오만→15만)을 큰 수에만 적용하고 나이·기간 같은 작은 수(다섯 살→5살, 사흘→3일)는 임의로 생략했다가 사용자 피드백으로 재작업(2026-07-10). 대사(TTS용)는 한글 표기 유지, 자막(CAPTION_GROUPS)만 숫자로 변환.
11. **직업/신분 전환은 모자까지 갈아입혀야 함**: 캐릭터가 승려·삭발 등으로 신분이 바뀌는 서사인데 rig의 모자(갓)를 그대로 두면 "아직도 갓 쓰고 있다"는 피드백 발생(2026-07-10). `characters.js`에 `cfg.noHat`(민머리 대체) 옵션으로 대응. **삭발 승려는 `militia`와 같은 variant지만 별도 튜닝 키 `"monk"`로 관리** — `characters.js`가 `variant==="militia" && cfg.noHat`이면 `tuneKey="monk"`로 해석하고, noHat일 때도 (원래는 건너뛰던) `wrapTf`를 삭발 음영에 적용(pivotY=72). 갓 쓴 militia와 앉음새를 독립 조정하기 위함. `studio.html`에 5번째 탭 "승려(삭발)"로 노출(`CHAR_TUNING.monk` 필요 — 구버전 localStorage 대비 로드시 누락 키 자동 채움).
12. **CHAR_TUNING 값은 씬마다 재검증**: militia 갓의 `y:-20,s:1.3`은 실제로 렌더해보니 크라운이 머리 위로 크게 떠 보임(피벗 계산상 뷰박스 밖으로 나갈 정도). 이전 세션이 정한 튜닝값이라도 새 에피소드 렌더 프레임에서 반드시 육안 재확인할 것 — `y:-4,s:1.05` 정도가 갓이 자연스럽게 앉는 값.
13. **배경 소품은 자막 안전존과 겹치는지 렌더 프레임으로 확인**: 정적 인스펙터(`npm run check`)는 자막-소품 겹침을 항상 잡아주지 않음(자막은 JS로 동적 삽입되고 위치도 씬마다 다름). 화면 하단 1/3(`bottom` 값이 작은 소품)에 배경 건물/장식을 놓았다면, 자막이 떠 있는 타임스탬프의 실제 렌더 프레임을 잘라 확인 — 한 번은 암자 건물이 자막에 거의 완전히 가려진 채로 통과할 뻔함.
14. **위치 기반 CSS 선택자(`:last-child`, `:nth-child`) 금지**: 기존 애니메이션이 `.fire-pile path:last-child`처럼 위치로 대상을 잡고 있으면, 나중에 그 컨테이너에 새 SVG 요소를 추가하는 순간 선택자가 의도치 않은 다른 요소를 가리키게 됨. 처음부터 명시적 클래스명을 쓸 것.
15. **GSAP `repeat:-1`(무한 반복) 금지**: 결정론적 프레임 캡처(`hyperframes inspect`/`render`)와 호환되지 않아 린트 에러(`gsap_infinite_repeat`) 발생. 연기·잉걸불처럼 반복 연출이 필요하면 `Math.floor(씬잔여시간 / 사이클시간) - 1`로 유한 repeat 값을 계산해서 쓸 것.
17. **S6.5 튜너 localStorage 오염**(2026-07-13, EP.5): `layout-overrides.js`를 빈 오버라이드로 리셋해도 studio-layout.html이 **localStorage(`toon-layout-overrides-v2`)에 저장된 이전 에피소드 오버라이드를 iframe 위에 복원**해 조정값 회수가 오염된다(EP.5에서 EP.4 키 32개가 섞여 s6-sea를 500px 내리는 등 배치 붕괴). 튜너 오픈 직후 localStorage의 `toon-layout-overrides-v1/v2`·`toon-layout-outline` 제거 + reload(char-tuning-v1은 보존). 회수 시 `__layout.list()` 유효 키로 필터링해 잔여 stale 키 제거. SKILL S6.5에 0번 단계로 명문화.
18. **lady rig 비녀는 담뱃대로 오독**(2026-07-13, EP.5 S8): 스프린트2 lady의 비녀(갈색 막대+구슬)가 flip된 기녀의 턱선에서 짧은 담뱃대로 읽힘 — 블라인드·고증 검수자 2명이 독립적으로 "담뱃대"로 오독. 담배는 임진왜란 이후 유입이라 조선 전기(연산군 등)엔 시대착오. `characters.js` lady 비녀 돌출부 제거로 해결(쪽+한복 V깃+옷고름+치마로 여성 판독은 충분). **위로 솟거나 얼굴 옆으로 뻗는 머리 장식은 원형 캐릭터에서 계속 다른 것으로 오독된다**(뿔=귀, 비녀=담뱃대) — 실루엣 매스로만 표현.
16. **모델은 지침의 하한선까지만 그린다**: "구성 요소 3~6개 목록화"만 주면 요소당 프리미티브 1개짜리 막대그림(깃대 rect+깃발 polygon+창날 polygon = 끝)이 나옴 — EP.4 sonnet5 세션(2026-07-12)에서 "배경 단색+미니 깃발 2개+캐릭터" 씬, 남색 배경에 암갈 단색 슬랩 건물(명암·대비 없음), 소품 0개 씬("제주도 유배"에 해+바다 띠뿐)이 실제로 나옴. → 스킬 S6에 **씬 구성 최소 규격**(3레이어 / 주 소품 폭 ≥380px / 프리미티브 ≥12·그룹 ≥4 / 2톤 명암 / 배경 명도 대비)과 **소품 라이브러리 복사 우선** 규칙을 숫자 기준으로 명문화, S6.4 체크리스트에 재검 항목 추가. 지침은 세기 가능해야 모델 무관하게 지켜진다.

## 도구: 레이아웃 튜너 (studio-layout.html) — 2026-07-10 추가

`studio.html`(캐릭터 얼굴 파츠 튜너)에 이어 두 번째 자체 GUI. **캐릭터·배경·소품의 위치(x·y)·크기를 드래그/슬라이더로 조정** → 비파괴 오버라이드 파일 `layout-overrides.js` 생성.

**2026-07-11 파이프라인 공식화**: LLM이 찍는 배치가 매번 어긋난다는 사용자 결론에 따라, `/episode` 스킬에 **S6.5 "인간 레이아웃 조정"** 단계로 편입 — 렌더 전에 반드시 사용자가 튜너로 조정하고, 조정값은 Claude in Chrome이 자동 회수한다(아래 "조정값 회수" 참조). 에피소드 시작 시 `layout-overrides.js`는 빈 오버라이드로 리셋, S9에서 아카이브에 포함.

- **아키텍처**: `char-tuning.js`와 동일한 오버라이드 패턴. index.html이 `layout-overrides.js`(전역 `LAYOUT_OVERRIDES`)를 읽어 각 요소에 적용. 비어 있으면 원본 그대로(렌더 무영향).
- **적용 방식**: 대상 요소를 stage를 꽉 채우는 `.adj-wrap`으로 감싸고 wrapper에 `transform: translate(dx,dy) scale(s)` + `transform-origin: ox oy`(요소 홈 중심) 적용. **GSAP 진입 트윈은 내부 요소(선택자 그대로 매칭)를 애니메이트하므로 wrapper 오버라이드와 충돌하지 않음** — 정적 오버라이드를 요소 자신의 inline transform으로 주면 GSAP가 덮어써서 사라짐(그래서 wrapper 필수).
- **scale 오버라이드 → 씬 overflow 풀기(2026-07-10)**: `.adj-wrap`이 stage 전체(1080×1920)라 큰 `scale`(예: 1.81)을 주면 wrapper 렌더 박스가 stage 밖으로 커지고, 부모 씬(`.scene`은 `overflow:hidden`)의 `scrollWidth`가 부풀어 **`clipped_text` 오검출**이 난다(실제 텍스트는 안 잘림 — 투명 빈 공간일 뿐). `data-layout-allow-overflow`는 `text_box_overflow`만 억제하고 `clipped_text`엔 안 먹힘(인스펙터 룰이 `clipsOverflow`인 조상만 검사). → `applyAdjust`에서 오버라이드(scale≠1 또는 translate)가 걸린 **해당 씬만 `overflow:visible`**로 풀어줌. 스테이지 밖은 1080×1920 렌더 캔버스에 안 잡히므로 시각 영향 0. (SVG 소품은 `offset*`가 없어 자식 박스 측정 기반 shrink-wrap은 불가 → 이 방식이 최선.)
- **조정 대상 등록**: 캐릭터는 마운트 시 `data-adj=<char id>` 자동 부여. 배경/소품은 **저작 시점에 `data-adj="<씬id>-<이름>"`을 직접 부여**하는 것이 규칙(2026-07-11부터 — index.html은 에피소드마다 재작성되므로 저작 규칙이 런타임 맵보다 단순). 김시습 편 index.html의 `ADJ_MAP`(선택자→키 런타임 등록)은 구방식 유산으로 그대로 동작하지만 신규 저작에는 쓰지 않는다. 부위 분할 입도: 논리 부위(층·지붕·몸체)뿐 아니라 시각적으로 독립된 세부 조각(몸돌·지붕돌·상륜)까지 `<g data-obj>` 중첩 그룹핑 — 그룹핑 입도 = 조정 입도.
- **조정값 회수 (2026-07-11 변경)**: 다운로드 버튼 → 수동 복사 대신, 사용자 완료 신호 후 Claude in Chrome `javascript_tool`로 `__layout.get()` + `__layout.getObjects()`를 JSON으로 받아 `layout-overrides.js`를 로컬에서 조립·저장(에디터와 iframe이 같은 3014 origin이라 접근 가능). **주의: `overridesText()` 원문 문자열 반환은 Chrome 확장의 데이터 유출 가드가 차단**(2026-07-11 실측 — JSON 객체 반환은 통과). 탭이 닫혀도 localStorage(`toon-layout-overrides-v2`) 자동저장분이 재오픈 시 복원됨. 다운로드/클립보드 버튼은 수동 폴백으로 유지. 왕복 검증 완료: 파일 저장 → index.html 하드리로드 → `.adj-wrap` transform 반영 확인.
- **편집기 훅**: index.html이 `window.__layout`(list/get/set/rectOf/measureOrigin/overridesText) 노출. 편집기는 iframe으로 index.html을 로드하고 `window.__timelines.main.pause(t)`로 씬 이동 후 훅으로 요소 박스를 그림.
- **씬 이동 타임**: 각 씬을 `start + dur - 0.7`로 seek — 진입 트윈이 끝나고 **늦게 등장하는 요소(스탬프·숫자 타이포)도 이미 보이는** 시점. 다음 씬 진입 전이라 겹침도 없음.
- **실행 전제**: 정적 서버로 열어야 iframe이 index.html + 상대경로 스크립트를 로드함. `.claude/launch.json`의 `toon-pilot-static`(python http.server 3014) → `http://localhost:3014/studio-layout.html`. (hyperframes preview 서버 3013이 아님.)
- **좌표 변환**: 편집기 iframe은 `transform: scale(0.4)`로 축소 표시 → 드래그 화면delta / 0.4 = 컴포지션 px. 요소 rect은 iframe 내부 문서 기준(1080-base)이라 축소 무관.
- **소품 내부 부위 조정(2026-07-10 추가)**: 소품(석탑·기와집 등)의 논리적 부위를 `<g data-obj="키">`로 묶고(pagoda-base/tier1/tier2/tier3/finial, palace-roof/body/podium, hall-roof/body, hermitage-roof/body), 편집기에서 요소 선택 시 그 하위 `[data-obj]`를 "부위"로 드릴다운. 부위 오프셋은 **SVG `<g>`의 `transform` 속성**으로 적용(`OBJECT_OVERRIDES`) — 요소 오프셋(CSS wrapper transform)과 별개 레이어. 크기 조정은 `translate(cx cy) scale(s) translate(-cx -cy)`로 부위 bbox 중심 기준(`getBBox()`로 cx/cy 계산·저장). 드래그 화면델타→SVG단위 변환은 `g.parentNode.getScreenCTM().inverse()`로(iframe 축소·부모 스케일 모두 자동 반영). 새 부위를 조정 대상에 넣으려면 해당 요소 안에서 primitive들을 `<g data-obj>`로 감싸면 끝(자동으로 편집기에 노출). GSAP가 개별 애니메이트하는 자식(크라운 g·불꽃 flame-inner)은 부위로 묶지 말 것(정적 transform과 충돌).

## 숫자 타이포그래피 규칙 (2026-07-10 사용자 피드백)

"5살/3일을 숫자로 표시"는 **자막 텍스트를 숫자로 바꾸는 게 아니라**, 자막은 자연 표기("다섯 살"·"사흘")로 두고 **별도의 큰 숫자 타이포("5살"·"3일")를 화면에 팝**시키라는 뜻이었음. `.num-pop`(Black Han Sans, 숫자만 금색 강조) + scale 0→1 팝 애니메이션. 숫자 타이포는 배경 그래픽(크라운 등)과 겹치지 않게 빈 구역에 배치 — s3에서 처음엔 크라운과 겹쳐 재배치(중앙→좌측). **교훈: 자막(내레이션 싱크)과 강조 타이포(시각적 훅)는 별개 레이어다.**

## 룩 이슈 (2026-07-05 사용자 피드백 → 같은 날 전부 수정, v3 렌더 반영)

전 항목 수정 후 블라인드 readability 테스트 통과(무맥락 에이전트 4개가 지도·한옥·갓·갑주·거북선을 high confidence로 명명). 수정 요지: 지도=실제 해안선 트레이스, 갓 챙 rx68>머리 r58, 익선관 날개=기운 매미날개 잎, 전립 챙 rx62 + 수염 말굽형, 호스트=네이비 칼라+고대비 지퍼+시보리, 한옥=기단·기둥·창살문·처마반전·용마루·기와골.

**⚠ 미해결(모자/갓) — 2026-07-08 부분 해결.** EP.1(장영실) 블라인드 검수에서 **전립(admiral)이 청 만주족 관모로 오독**됨(2/2 검수자, "돔+금구슬 정자+붉은 상모" = Qing 시그니처)이 확인돼 `characters.js` 수정: 전립=넓은 평챙+낮은 펠트 크라운+작은 증자(붉은술·금구슬 제거), 갓(militia)=높은 원통 크라운. 재검수서 "조선 흑립/전립(KOREAN)"으로 판독 = 청 오독 해소. **2026-07-08 후속: 참고이미지 3종 문제 재작화** — ① 익선관 소각(뿔)이 '토끼 귀'로 오독(둥근 만화 머리에선 위로 솟은 뿔=무조건 귀) → **뿔 제거, 머리 덮는 둥근 관+뒤 높은 이중단**으로 실루엣만 암시(세종 식별=곤룡포 담당) ② 갓이 서양 실크햇으로 오독(크라운 원통·과높음) → **낮은 절두원뿔 대우+넓은 양태** ③ admiral 수염이 검은 덩어리 → **얇은 밴드형·밝은 톤**. **교훈: 위로 솟는 모자 장식(뿔·깃)은 원형 캐릭터 머리에서 귀로 읽힌다 — 실루엣은 머리를 덮는 매스로 표현, 돌기는 피할 것.** 잔여 폴리시(비차단): 세종 관이 다소 단조(중절모 느낌), 거북선 용두 방향, s3 이순신 수면 위.

### 원래 이슈 표 (기록용)

| # | 증상 | 근본 원인 |
| --- | --- | --- |
| 1 | s2 한반도 지도가 뭉게구름처럼 보임 | index.html 지도 패스가 볼록 Q커브만의 프리핸드 블롭. 실제 해안선 특징(오목한 만, 서해안 요철, 남해 다도해)이 없음 — 실루엣을 실제 지도에서 단순화 트레이스해야 함 |
| 2 | 모자-머리 크기 불일치: 익선관 날개가 귀/뿔처럼 읽힘(s2 왕), 갓이 "이마 스티커"처럼 보임(s4) | 챙·관모가 머리 원(r58)보다 좁게 그려짐. **규칙: 챙 있는 모자는 머리 폭보다 넓게(갓 챙 rx≥66), 모자 하단이 머리 실루엣을 확실히 감싸고 겹치게.** 익선관 날개는 옆이 아니라 뒤통수 위쪽에 세워 배치 |
| 3 | 전립·턱수염 정합 어긋남 (s3 이순신) | 모자 챙 라인·수염 시작선이 얼굴 랜드마크(눈·볼 라인)와 독립적으로 좌표 지정됨 — 얼굴 기준선에서 파생하도록 |
| 4 | 호스트 의상이 뭘 입은 건지 안 읽힘 | 지퍼·포켓이 shirt색 20% 셰이드라 대비 부족, 칼라·소매 등 "재킷 문법" 셰이프 부재 |
| 5 | s1 기와집이 거북선으로 오인됨 | 지붕 곡면+어두운 색 덩어리가 몸체와 분리돼 읽힘. 처마 끝 반전, 기와 골 라인, 주춧돌 등 "건물 문법" 디테일 필요 |

**재발 방지 프로세스 (아트 작업 시 필수):**
1. **캐릭터 시트 검수** — 파츠 수정 후 풀프레임 축소본이 아니라 대형 스케일(캐릭터 1개 ≥600px) 스크린샷으로 변형/정합 확인. 임시 charsheet 페이지를 만들어 variant × 표정 × 포즈 그리드로 볼 것.
2. **블라인드 readability 테스트** — 렌더 프레임을 컨텍스트 없는 서브에이전트에 보여주고 "이 화면의 오브젝트를 명명하라"만 시킴. 의도한 이름(한반도, 기와집, 갓)과 다르게 답하면 불합격. 작화자가 자기 그림을 검증하면 의도를 알기에 오독을 못 잡는다 — 이번 이슈 전부가 이 케이스.
3. **실물 기반 오브젝트는 레퍼런스 트레이스** — 지도·건물·기물처럼 "정답 실루엣"이 있는 것은 프리핸드 금지, 실제 형태를 단순화해서 옮길 것.

## 다음 단계 (합의된 방향)

1. ~~**파츠 일러스트 교체**~~ ✅ 2026-07-05 완료 — rig 계약(클래스·피벗·표정/포즈) 유지한 채 characters.js만 교체: `shade()` 헬퍼(파라미터 색에서 2톤 플랫 셰이딩 파생), 유기 실루엣, 의상 고증(곤룡포 흉배·옥대, 두정갑 징·갑찰·전립 상모, 갓·동정·옷고름, 호스트 재킷). 얼굴 파츠(눈·입·눈썹)는 의도적으로 무수정.
2. **BGM/SFX** — hyperframes-media / media-use 스킬 (스탬프 슬램 효과음, 잔잔한 국악풍 BGM).
3. ~~**원커맨드 에피소드 스킬**~~ ✅ 2026-07-08 구현 — `.claude/skills/episode/SKILL.md` (주제 → 사료 리서치 → 팩트체크 게이트 → 대본 → TTS 귀검증 → `bin/sync_timing.py` 타이밍 동기화 → 씬 연출 → 렌더 → 블라인드 readability+고증 이중 검수 → `episodes/<slug>/` 아카이브+업로드 메타). 악플 3종(사실 오류·어눌함·고증)이 각각 게이트로 매핑됨. **✅ EP.1 장영실 완성**: `renders/janga-yeongsil.mp4`(1080×1920, 38.3s), 아카이브 `episodes/janga-yeongsil/`. 실전에서 게이트 작동 실증: ① 팩트체크가 측우기=문종(장영실 아님)을 대본에서 제외 ② 블라인드 검수가 전립 청-오독을 잡아 rig 수정 유발. **세로 재배치 규칙 실검증: 캐릭터 진입은 x슬라이드 금지→y슬라이드**(좁은 캔버스서 좌우 오버플로가 clipped_text 에러 유발). **✅ EP.2 김시습 완성**(2026-07-09): `renders/kim-siseup.mp4`(1080×1920, 41.2s), 아카이브 `episodes/kim-siseup/`. 캐스팅: 김시습=militia 고정(장영실과 달리 승진 없음, 색상만 베이지→회색 전환), 세종=king 변주. 게이트 실증: ① TTS가 "금오"를 일관 오발음해 대사에서 우회(경주 남산으로 치환, 금오신화는 화면 스탬프로만) ② 고증 검수가 무량사 탑의 빨강+금박 배색을 일본식 오중탑 오독 위험으로 지적해 무채색 화강암톤 재채색. 새 지뢰 2건은 위 "밟은 지뢰" #8·#9 참조. 다음: EP.3 주제 선정(episodes/janga-yeongsil/meta.md 후보 중 정약용·광해군·연산군 잔여). **✅ EP.3 정약용 완성**(2026-07-12): `renders/jeong-yakyong.mp4`(1080×1920, 43.5s), 아카이브 `episodes/jeong-yakyong/`. 게이트 실증: ① whisper가 "정약용"→"정야경" 표기 — TTS 오발음이 아닌 whisper의 '굥' 희귀음절 철자 편향으로 판정(A/B 대조 TTS + 모음 스펙트럼 분석, meta.md 참조) ② 신설 S6.4 프레임 자체 점검(스냅샷+5항목 기계 체크리스트)이 자막존 겹침 2건·스탬프-캐릭터 겹침·태양 후광 오독·색 동화를 렌더 전에 차단 → 블라인드/고증 검수 원패스. **✅ EP.4 광해군 완성**(2026-07-12): `renders/gwanghaegun.mp4`(1080×1920, 42.1s), 아카이브 `episodes/gwanghaegun/`. 이전 세션이 S6 최소 규격 도입 전에 만든 초안이라 s1(훅)·s6(제주 유배)·s7(여운)이 빈 화면이었던 것을 이번 세션에서 소품 신설(전고+화톳불, 초가+돌담, 빈 옥좌+일월오봉도+왕관)로 해결(위 "밟은 지뢰" #16 실사례). 별도 벤치(`bench/`, it1→it2, 78.3%→90.9%)로 소품 오독 방지 규칙을 먼저 검증한 뒤 실전 적용. 게이트 실증: S8 블라인드 검수가 s5 "닫힌 궁문"을 옷장/반닫이로 오독 — 벽과 문짝 폭을 맞추고 문고리·리벳을 더해도 여전히 옷장으로 오독(오히려 반닫이 문법과 일치해버림) → **"닫힌 문" 컨셉을 포기하고 창살(감금)로 전환해 해결**. 업로드: https://youtu.be/jmXDyLVjtmU (unlisted). **✅ EP.5 연산군 완성**(2026-07-13): `renders/yeonsangun.mp4`(1080×1920, 44.6s), 아카이브 `episodes/yeonsangun/`. 훅=일상어 어원("흥청망청")으로 폭군 잔혹사 톤을 사치·낭비 프레임으로 순화, 풀서클 펀치라인("이름은 지워졌지만 말은 남았다"). 소품 전량 라이브러리 재사용(술상 sp13·사약 sp2·국문장 sp7·어전 병풍 EP.4 s7·위리안치 sp3, 신규는 연등뿐) — 스프린트 자산이 제작 시간 대폭 단축. 게이트 실증: ① S8 이중 검수가 **lady rig 비녀→담뱃대 오독**(임란 이후 담배 = 조선 전기 시대착오)을 잡아 `characters.js` 비녀 제거(쪽+한복으로 여성 판독 충분 — 스프린트2 lady 쓰는 향후 에피소드 전부 반영) ② S6.5 튜너 localStorage 오염(아래 지뢰 #17). 업로드: https://youtu.be/jIYoZHxeLDo (unlisted). **원래 후보 목록(김시습·정약용·광해군·연산군) 전량 소진** → 후속 후보군은 `episode-candidates.md`로 분리(2026-07-14). 1순위 난장판(과거 시험장 어원, 팩트체크 통과·착수 가능), 2순위 신사임당, 그 외 세종/한글·이순신은 훅 미확정. 어원 훅 후보 4종 팩트체크 결과와 기각 사유(황진이·원효·이판사판·어영부영 등)도 그 문서에 박제 — 재검 금지.
4. 유의: 반복 재사용 애니 + AI 내레이션 조합은 YouTube 대량생산 콘텐츠 정책 심사 대상이 될 수 있음 — 대본의 관점/유머가 차별화 포인트.

## 세션 이력 요약 (2026-07-04)

리서치(기성 툴 조사: rhubarb-lip-sync, PyToon, synctoon, Adobe Character Animator 등) → "JSON 장면 스크립트 + hyperframes 렌더" 자체 파이프라인 결정 → 파일럿 구현·검증·렌더까지 한 세션에 완료. 립싱크는 rhubarb 대신 whisper 단어 타이밍 기반 0.1s 입 플랩(사우스파크식)으로 단순화 — 결과 충분.
