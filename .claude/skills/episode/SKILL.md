---
name: episode
description: 삼십초 역사 원커맨드 에피소드 제작 — 주제 하나를 입력받아 사료 리서치 → 팩트체크된 30초 대본 → TTS·타이밍 동기화 → 컷아웃 씬 연출 → 렌더 → 블라인드 검수 → 업로드 메타까지 한 번에 뽑는다. 사용자가 "에피소드 만들어줘", "○○ 편 제작", "/episode ○○" 라고 하면 발동. 이 repo(toon-pilot)의 rig·엔진을 재사용하며, PROJECT-NOTES.md의 지뢰 회피 규칙이 각 스테이지에 인라인돼 있다.
---

# 삼십초 역사 — 원커맨드 에피소드

주제 입력 → `renders/<slug>.mp4` + 업로드 메타. 악플 3종(사실 오류·어눌한 말투·고증 논란)은 각각 게이트(S3·S4·S8)로 차단한다. **PROJECT-NOTES.md를 먼저 읽을 것** — 지뢰 원문과 아키텍처가 거기 있다.

## 포맷 (YouTube Shorts)

- **1080×1920 세로.** 파일럿(임진왜란)은 1920×1080 가로였다 — 새 에피소드는 세로로 제작하고, 파일럿의 배경 모티프(한옥·지도·바다·황혼 언덕·아웃트로)는 재배치해서 재사용한다: 캐릭터를 크게(w 380~480px), 상하 스택 구도, 배경 오브젝트는 상단 1/3.
- **Shorts 세이프존**: 우측 ~140px(액션 버튼)·하단 ~320px(제목/채널 UI)에 자막·스탬프 금지. `.cap-wrap`은 `bottom: 380px` 기준.
- 길이 30~35s. 씬 4~5개 + 아웃트로.

## 파이프라인

### S0. 입력 확인
- 주제 + 에피소드 번호(시리즈 넘버링) + 이전 편 예고와의 연결 여부.
- **소재 거부 목록**: 동북공정 인접(고구려·발해 귀속 등 현재진행 분쟁 프레임), 근현대 정치(해방 이후), 위안부·독도처럼 정확해도 진영 싸움이 붙는 주제. 야사는 "야사임"을 자막에 명시하면 허용.

### S1. 사료 리서치 → `episodes/<slug>/facts.md`
- WebSearch/WebFetch로 수집. 우선순위: 우리역사넷(contents.history.go.kr) > 한국민족문화대백과(encykorea.aks.ac.kr) > 조선왕조실록DB(sillok.history.go.kr) > 기타.
- 산출: 사실 목록(연도·수치·인명·인과), **주장마다 출처 URL 2개**. 출처 1개뿐인 흥미 주장은 "야사/설" 라벨.
- 여기서 훅 후보 3개를 같이 뽑는다 (역설·반전·의외 수치).

### S2. 대본 → `script.txt`
구조 (한 줄 = 한 문장 = 씬 경계 후보):
```
1행  훅 (0–2s): 결말·역설 먼저. "○○한 왕이 있었습니다" / "조선 최악의 아침" 형.
     "오늘은 ~를 알아보겠습니다" 형 도입 금지.
2–5행 상황 → 전개 → 반전 1개. 에피소드당 핵심 사실 1개·반전 1개만.
6행  펀치라인 (여운 or 유머).
7행  고정 아웃트로: "삼십 초 역사. 다음 편이 궁금하면, 구독." (+ 다음 편 예고 변형 가능)
```
구어체 규칙 (어눌함 게이트 1/2):
- 문장 ≤ 15어절, 총 70~85어절 (≈2.5어절/s → 30~35s).
- 종결어미 다양화: ~습니다 연속 3회 금지, ~했죠/~인데요/명사 종결 섞기.
- **숫자·단위는 TTS가 읽을 한글로 표기** (십오만, 이십 일). 자막 표시형(15만, 20일)은 S5에서 변환.
- 소리 내어 읽었을 때 걸리는 문장은 다시 쓴다.

### S3. 팩트체크 게이트 (사실 오류 차단)
- 대본의 모든 사실 주장(연도·수치·인명·인과)을 추출 → facts.md와 1:1 대조.
- facts.md에 없는 주장 = 대본에서 삭제하거나 S1로 돌아가 출처 2개 확보.
- 판정 기록을 `episodes/<slug>/factcheck.md`에 남긴다 (주장 → 출처 매핑 표).
- 통과 전에는 S4로 넘어가지 않는다.

### S4. TTS + 귀검증 (어눌함 게이트 2/2)
```bash
uvx edge-tts --voice ko-KR-InJoonNeural --rate=+6% --file script.txt --write-media narration.mp3
npx hyperframes transcribe narration.mp3 --model small --language ko   # .en 모델 금지
```
- narration.mp3를 실제로 듣는다(또는 whisper 결과에서 오독 감지). 발음이 뭉개지는 단어 → script.txt 표기 수정 → TTS 재생성. (예: 한자어 연음, 외래어)

### S5. 타이밍 동기화
```bash
python3 bin/sync_timing.py --hi <강조어,쉼표구분>
```
- transcript.json + script.txt → `captions-data.js` (WORDS/CAPTION_GROUPS) 자동 생성 + **문장 테이블**(씬 경계) 출력.
- 후편집 2건: ① 자막 표시형 변환 (십오만→15만 — WORDS와 CAPTION_GROUPS 양쪽, hi 배열 포함) ② 그룹핑이 의미 단위에 어긋나면 수동 조정.
- 출력된 audio/root data-duration 제안값을 index.html에 반영.

### S6. 연출 — `scenes.js` + `index.html`
- **씬 경계 = S5 문장 테이블.** 씬 start = 문장 start − 0.2~0.4s(리드), dur는 다음 씬 start까지 + TRANSITION(0.45).
- **캐스팅은 기존 variant 4종**(host/king/admiral/militia) 안에서. 새 인물이 필요하면 모자·의상 색으로 변주. **새 variant 파츠 = 이 스킬 범위 밖**(별도 아트 세션 — PROJECT-NOTES 룩 프로세스 필수).
- 배경: 파일럿 모티프 재사용 우선(한옥 팔레스·한반도 지도·밤바다·황혼 언덕·크림 아웃트로). 새 오브젝트는 **레퍼런스 트레이스**(프리핸드 금지 — PROJECT-NOTES 재발방지 §3), design.md 팔레트·금지사항 준수.
- **레이아웃 조정 대상 등록 (저작 규칙 — S6.5 튜너의 전제)**:
  - 모든 소품 요소에 저작 시점에 `data-adj="<씬id>-<이름>"` 직접 부여 (런타임 `ADJ_MAP` 등록 불필요; 캐릭터는 마운트 시 자동 부여).
  - 소품 내부는 논리 부위(층·지붕·몸체)만이 아니라 **시각적으로 독립된 세부 조각(몸돌·지붕돌·상륜 등)까지 전부 `<g data-obj="키">`로 중첩 그룹핑** — 튜너가 `[data-obj]`를 자동 노출하므로 그룹핑 입도가 곧 조정 입도다. 예: `pagoda-tier1` 안에 `pagoda-tier1-body`/`pagoda-tier1-roof`. 단 GSAP이 개별 애니메이트하는 자식은 그룹 금지(정적 transform과 충돌).
  - index.html 재작성 시 하단 **레이아웃 오버라이드 적용부(`window.__layout` 훅 블록)는 반드시 보존**하고, `layout-overrides.js`는 빈 오버라이드(`{}`)로 리셋한다.
- 지뢰 (전부 파일럿에서 실제로 밟음):
  1. 팔 회전은 GSAP `svgOrigin` 필수 — arm-l `"60 152"`, arm-r `"140 152"`. CSS transform-origin 금지.
  2. 스탬프류 슬램: CSS `visibility:hidden` + 타임라인 `tl.set visible` + scale 0→1 back.out. `fromTo` immediateRender pre-state를 inspector가 잡는다.
  3. 캔버스보다 큰 장식은 `overflow:hidden` 래퍼(`data-layout-ignore`) 안에. 자식에 attr 달아도 소용없음.
  4. 씬은 track 0/1 교대 + z-index 상승 + 0.45s 겹침. 퇴장 애니 금지(마지막 씬 제외).
  5. 자막 그룹은 밖에서 fade-out + `visibility:hidden` set (caption self-lint가 index.html에 내장돼 있음).
- 세로 레이아웃: viewport meta `width=1080, height=1920`, body/root 치수, big-year류 타이포 스케일 조정.

### S6.5. 인간 레이아웃 조정 (배치는 사람이 최종 결정)
LLM이 찍은 위치·크기는 초안일 뿐이다 — 렌더 전에 사용자가 `studio-layout.html`로 직접 드래그/슬라이더 조정한다. 이 단계를 건너뛰고 렌더하지 않는다.
1. 정적 서버 기동(background): `.claude/launch.json`의 `toon-pilot-static` — python http.server **3014** (hyperframes preview 3013 아님).
2. Claude in Chrome으로 `http://localhost:3014/studio-layout.html` 새 탭 오픈.
3. Telegram 알림(⏸ blocked): "레이아웃 조정 대기" + URL. 사용자 완료 신호까지 대기.
4. 완료 신호 후 **자동 회수** — `javascript_tool`(studio-layout 탭)로:
   ```js
   const L = document.querySelector("iframe").contentWindow.__layout;
   ({ layout: L.get(), objects: L.getObjects() })
   ```
   받은 JSON으로 `layout-overrides.js`를 로컬에서 조립해 저장한다(기존 파일과 동일 형식: 주석 헤더 + `var LAYOUT_OVERRIDES` + `var OBJECT_OVERRIDES` + window 노출 1줄). **`overridesText()` 원문 문자열 반환은 Chrome 확장 가드가 차단하므로 쓰지 말 것**(2026-07-11 실측). 탭이 닫혔으면 재오픈 — localStorage(`toon-layout-overrides-v2`) 자동저장분이 복원된다.
5. `npm run check` 재통과 확인 후 S7 진행.

### S7. 검증 → 렌더
```bash
npm run check        # 에러 0 필수. inspect 경고는 파일럿 기준선(노이즈 5건) 대비 증가분만 조사
npx hyperframes render --quality standard --output renders/<slug>.mp4
```

### S8. 이중 검수 게이트 (고증·가독성)
```bash
for t in <훅> <씬2중반> <씬3중반> <씬4중반>; do
  ffmpeg -y -ss $t -i renders/<slug>.mp4 -frames:v 1 /tmp/frame-$t.png; done
```
1. **블라인드 readability**: 프레임 4장을 **컨텍스트 없는** 서브에이전트에게 "이 화면의 오브젝트를 전부 명명하라"만 시킨다. 의도한 이름(갓·한옥·거북선…)과 다르면 불합격 → 해당 오브젝트 재작업. 작화한 세션이 자기 검증하면 오독을 못 잡는다.
2. **고증 체크**: 같은 프레임을 "한국사 배경 숏폼인데 중국식·일본식으로 오독될 복식/건축/기물 요소가 있는가"로 검사. 지적 요소는 수정. (컷아웃 그림체가 고증 기대치를 낮춰주지만, 명백한 타국 문법 — 변발·기모노 깃·중국식 처마 — 은 악플 트리거)

### S9. 패키징
- `episodes/<slug>/`에 아카이브: script.txt, facts.md, factcheck.md, scenes.js, captions-data.js, **layout-overrides.js**, index.html 사본, meta.md.
- `meta.md` = 업로드 메타: 제목(훅형, 시리즈 넘버링 "삼십초 역사 EP.N"), 설명(사실 출처 1줄 포함 — 신뢰 신호), 해시태그 3~5, 다음 편 예고 문장(고정 댓글용).
- **YouTube 업로드는 반드시 happylife2080100@gmail.com의 "삼십초 역사"(@history30sec) 채널로** — `yt_upload.py --token ~/.config/youtube-upload/token.history-d9t.json` 명시(공용 token.json 사용 금지, CLAUDE.md 고정 규칙).
- 루트 작업 파일은 다음 에피소드가 덮어쓴다 — 아카이브가 원본.

## 실패 시 규칙
- S3(팩트체크)·S8(검수) 불합격은 **스테이지를 되돌린다** — 게이트를 완화하지 않는다.
- 렌더 관련 미해결 이슈는 PROJECT-NOTES.md "밟은 지뢰"에 추가하고 종료한다.
