# toon-pilot — 삼십초 역사

사우스파크풍 **종이 컷아웃 한국사 숏폼** 채널 「삼십초 역사」([@history30sec](https://www.youtube.com/@history30sec))를
코드로 찍어내는 프로젝트. 1080×1920 세로, 편당 45~100초.

주제 하나를 넣으면 사료 리서치 → 대본 → 팩트체크 → TTS → 연출 → 렌더 → 검수 → 업로드 메타까지
한 파이프라인으로 나온다. HTML + GSAP 컴포지션을 [HyperFrames](https://hyperframes.heygen.com)로 MP4 렌더한다.

> **에이전트로 작업한다면 먼저 `AGENTS.md`를 읽는다.** 이 README는 사람용 개요고, 정본은 `AGENTS.md`다.

## 무엇이 들어 있나

- `episodes/` — EP.1~EP.31 아카이브 (`facts.md` · `script.txt` · `scenes.js` · `index.html` · 업로드 메타)
- `characters.js` — 캐릭터 rig 팩토리 (`variant` 6종: host/king/admiral/militia/lady/kid)
- `scenes.js` — 디렉터 장면 JSON (씬별 start/dur/talker/chars/changes)
- `captions-data.js` — 립싱크 `WORDS` + 자막 `CAPTION_GROUPS`
- `index.html` — 씬 DOM·배경·캐릭터 마운트·타임라인 조립
- `bin/` — 게이트 스크립트 (`check_script.py`, `check_composition.mjs`, `sync_timing.py`)
- `docs/` — 파이프라인·아트룰·검수 프롬프트

## 아키텍처 — 3레이어 분리

| 레이어 | 파일 | 누가 만드나 |
| --- | --- | --- |
| rig | `characters.js` (+ `char-tuning.js`) | 사람 — 거의 안 건드림 |
| 엔진 | `index.html` 타임라인 빌드부 | 사람 — 거의 안 건드림 |
| 콘텐츠 | `script.txt` · `scenes.js` · 씬/배경 부분 | **LLM이 생성** |

산출물은 `renders/<slug>.mp4`, 아카이브는 `episodes/<slug>/`. 진행 상태는 `episodes/<slug>/STATE.md`에 남긴다.

## 파이프라인 (S0~S9)

| 스테이지 | 하는 일 | 게이트 |
| --- | --- | --- |
| S1 | 사료 리서치 → `facts.md` | 출처 2개 |
| S2 | 대본 → `script.txt` | `bin/check_script.py` (어눌함·분량) |
| S3 | 팩트체크 | 주장 ↔ `facts.md` 1:1 대조 |
| S4 | edge-tts + 전사 귀검증 | 실단어 붕괴만 FAIL |
| S5 | 타이밍 동기화 (`sync_timing.py`) | — |
| S6 | 연출 `scenes.js` + `index.html` | `bin/check_composition.mjs` |
| S7 | 렌더 | 프레임 체크리스트 11항목 |
| S8 | 블라인드 검수 (고증·가독성) | **컨텍스트 없는 검수자** |
| S9 | 패키징 · 업로드 | — |

**FAIL이면 다음 스테이지로 가지 않는다.** 자세한 절차는 `docs/EPISODE-PIPELINE.md`.

## 빠른 시작

```bash
# 게이트 (에러 0이어야 렌더)
python3 bin/check_script.py --density 중간   # 대본 — TTS 전
node bin/check_composition.mjs               # 컴포지션 — 렌더 전
npm run check                                # hyperframes lint + validate + inspect
npm run gate                                 # 셋 다 한 번에

# 제작
uvx edge-tts --voice ko-KR-InJoonNeural --rate=+6% --file script.txt --write-media narration.mp3
python3 bin/sync_timing.py --hi <강조어,쉼표구분>
npx hyperframes snapshot --at <t1,t2,...> --no-end --describe false -o <tmp>/snaps
npx hyperframes render --quality standard --output renders/<slug>.mp4

# 도구
npm run dev                   # 프리뷰 서버 (3013) — 블로킹. 반드시 백그라운드
python3 -m http.server 3014   # 레이아웃 튜너 (studio-layout.html)
npx hyperframes docs <topic>
```

## 하드 규칙 (요약)

- **결정론만** — `Math.random()` · `Date.now()` · `fetch()` · GSAP `repeat:-1` 금지.
- 타이밍 요소는 `data-start` · `data-duration` · `data-track-index` + `class="clip"` 필수.
- 씬은 **track 0/1 교대 + z-index 상승 + 0.45s 겹침**.
- SVG 팔 회전은 CSS `transform-origin` 금지 → GSAP `svgOrigin` (`arm-l "60 152"` / `arm-r "140 152"`).
- 위치 기반 선택자(`:nth-child` · `:last-child`) 금지.
- 한국어 TTS는 **edge-tts**. `npx hyperframes transcribe`는 한글을 깨뜨리므로 금지.
- 배치는 사람이 최종 결정한다 — **S6.5 레이아웃 튜너를 건너뛰고 렌더하지 않는다.**

전체 상수·금지 목록은 `docs/AGENT-QUICKREF.md`, 실제로 밟은 지뢰 74건은 `PROJECT-NOTES.md` 상단 「지뢰 인덱스」.

## 문서 지도

| 파일 | 용도 |
| --- | --- |
| `AGENTS.md` | 정본 진입점 — 정체성·명령·아키텍처 |
| `docs/EPISODE-PIPELINE.md` | 제작 파이프라인 정본 |
| `docs/AGENT-QUICKREF.md` | 항상 로드되는 상수·금지 카드 |
| `docs/ART-RULES.md` | 아트/연출 규칙, 오독 시그니처 |
| `PROJECT-NOTES.md` | 밟은 지뢰 인덱스 + 아키텍처 |
| `props-catalog.md` | 소품·배경 카탈로그 |
| `design.md` | 팔레트·타이포·모션 |
| `episode-candidates.md` | 채택/기각 주제 |

## 업로드

항상 `happylife2080100@gmail.com`의 「삼십초 역사」(@history30sec) 채널로 올린다.

```bash
yt_upload.py --token ~/.config/youtube-upload/token.history-d9t.json ...
```

업로드 직전 `channels.list(mine=true)`로 채널명이 "삼십초 역사"인지 확인한다.
