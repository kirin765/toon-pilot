# toon-pilot — 삼십초 역사

**이 파일이 모든 에이전트의 정본 진입점이다.** 모델·하네스와 무관하게 여기서 시작한다.
(`CLAUDE.md`는 Claude Code 전용 부록이고, 내용은 이 문서를 가리킨다.)

사우스파크풍 **종이 컷아웃 한국사 숏폼** 채널 「삼십초 역사」(@history30sec)를 코드로 찍어내는 프로젝트.
1080×1920 세로, 편당 45~100초. HTML + GSAP 컴포지션을 [HyperFrames](https://hyperframes.heygen.com)로 MP4 렌더한다.

---

## 무엇을 하려는지에 따라 갈라진다

| 요청 | 읽을 것 |
| --- | --- |
| **에피소드 제작** ("○○ 편 만들어줘", "에피소드 뽑아줘") | **`docs/EPISODE-PIPELINE.md`** — S0~S9 전 스테이지. 이게 이 저장소의 주 업무다 |
| 씬·소품·배경 저작/수정 | `docs/ART-RULES.md` + `props-catalog.md` |
| 렌더가 이상하다 / 예전에 이 문제 봤나? | `PROJECT-NOTES.md` 상단 「지뢰 인덱스」 |
| 캐릭터 rig 수정 | `characters.js` + `PROJECT-NOTES.md` 아키텍처 절 |
| HyperFrames 프레임워크 자체 | `npx hyperframes docs <topic>` / https://hyperframes.heygen.com/llms.txt |

**작업 전에 `PROJECT-NOTES.md`의 지뢰 인덱스를 훑는다.** 74건이 전부 실제로 밟은 것이고, 상당수가 재발했다.

### 하네스별 진입점

| 하네스 | 자동 로드 | 스테이지 커맨드 | 검수 서브에이전트 |
| --- | --- | --- | --- |
| **opencode** | `AGENTS.md` + `docs/AGENT-QUICKREF.md` (`opencode.json`의 `instructions`) | `/episode`, `/ep-facts`, `/ep-script`, `/ep-voice`, `/ep-plan`, `/ep-scene N`, `/ep-gate`, `/ep-tune`, `/ep-render`, `/ep-review`, `/ep-ship` | `@blind-reviewer`, `@gojeung-reviewer`, `@factcheck-adversary` |
| **Claude Code** | `CLAUDE.md` → 이 파일 | `/episode` (전 스테이지 일괄) | 서브에이전트 + `docs/BLIND-REVIEW-PROMPT.md` |
| 그 외 | `AGENTS.md` | 없음 — `docs/EPISODE-PIPELINE.md`를 순서대로 실행 | `docs/BLIND-REVIEW-PROMPT.md`를 다른 세션에 |

**컨텍스트가 좁거나 빠른 모델(예: deepseek flash)은 스테이지 커맨드를 하나씩 쓴다.**
전 파이프라인을 한 번에 태우지 말고, 스테이지마다 게이트를 통과시킨 뒤 다음으로 간다.
진행 상태는 `episodes/<slug>/STATE.md`(템플릿: `docs/EPISODE-STATE-TEMPLATE.md`)에 기록한다 —
세션이 끊겨도 거기서 이어갈 수 있고, 스테이지 건너뛰기를 막는 장치다.

---

## 아키텍처 — 3레이어 분리가 핵심

| 파일 | 역할 |
| --- | --- |
| `characters.js` | **rig 팩토리.** `makeCharacter({variant, skin, shirt, pants, hat})` 하나로 모든 캐릭터 생성. variant 6종 = host/king/admiral/militia/lady/kid |
| `char-tuning.js` | rig 파츠(모자·수염) 위치 미세 보정. **`<script>` 태그가 빠지면 튜닝이 통째로 죽는데 `npm run check`는 0 에러로 통과한다**(지뢰 #54) |
| `scenes.js` | **디렉터 장면 JSON.** 씬별 start/dur/talker/chars(위치·표정·포즈)/changes. 상단 주석에 씬 플랜 표 |
| `captions-data.js` | `WORDS`(립싱크 구동) + `CAPTION_GROUPS`(자막, hi=강조어). `bin/sync_timing.py`가 생성 |
| `layout-overrides.js` | 사람이 튜너로 조정한 좌표·크기(`LAYOUT_OVERRIDES` / `OBJECT_OVERRIDES`). 에피소드마다 리셋 |
| `index.html` | 조립. 씬 DOM·배경 인젝터·캐릭터 마운트·타임라인(입 플랩·깜빡임·전환·자막·스탬프) |

**LLM이 생성하는 레이어는 `script.txt` + `scenes.js` + `index.html`의 씬/배경 부분이다.**
rig(`characters.js`)와 엔진(타임라인 빌드부)은 건드리지 않는다.

산출물은 `renders/<slug>.mp4`, 아카이브는 `episodes/<slug>/`.

---

## 명령

```bash
# 게이트 (이 순서로 통과시킨다)
python3 bin/check_script.py --density 중간   # 대본 — TTS 돌리기 전
node bin/check_composition.mjs               # 컴포지션 — 렌더 전
npm run check                                # hyperframes lint + validate + inspect (에러 0 필수)
npm run gate                                 # 위 셋을 한 번에

# 제작
uvx edge-tts --voice ko-KR-InJoonNeural --rate=+6% --file script.txt --write-media narration.mp3
python3 bin/sync_timing.py --hi <강조어,쉼표구분>
npx hyperframes snapshot --at <t1,t2,...> --no-end --describe false -o <tmp>/snaps
npx hyperframes render --quality standard --output renders/<slug>.mp4

# 도구
npm run dev                   # 프리뷰 서버 (3013) — 장시간 실행. 반드시 백그라운드로
python3 -m http.server 3014   # 레이아웃 튜너용 정적 서버 (studio-layout.html)
npx hyperframes docs <topic>  # data-attributes | gsap | compositions | rendering | troubleshooting
```

> `npm run dev`는 블로킹 서버다. 포그라운드로 돌리면 타임아웃과 함께 죽는다.

### 게이트 스크립트가 잡는 것

`npm run check`(hyperframes)는 **문법과 레이아웃만** 본다. 이 프로젝트에서 실제로 사고를 낸 결함은
대부분 그걸 0 에러로 통과했다. 그래서 게이트 2종을 따로 둔다:

- `bin/check_script.py` — 예측 길이(`어절×0.49 + 문장×1.18`), 문장별 어절 수, 아라비아 숫자,
  `~습니다` 연속, 훅/아웃트로 형식, 전사 끝단어 대조.
- `bin/check_composition.mjs` — 스크립트 로드 누락(#54), 트랙 교대·z-index·타이밍 드리프트,
  배경 다양성(#62), 풀블리드 emit 순서(#69), 색 동화(#70), 자막 안전존,
  캐스팅 화이트리스트, 결정론 위반(`Math.random`/`Date.now`/`repeat:-1`).

**FAIL이면 다음 스테이지로 가지 않는다.** 경고(⚠)는 판단해서 처리하되, 무시했으면 이유를 보고에 남긴다.

---

## 하드 규칙

### 컴포지션 (HyperFrames 계약)

1. 타이밍이 있는 요소는 `data-start` · `data-duration` · `data-track-index` **전부** 필요하고 `class="clip"`이 있어야 한다.
2. 타임라인은 paused로 만들어 `window.__timelines["main"]`에 등록한다.
3. 같은 트랙 클립은 겹칠 수 없다 → **씬은 track 0/1 교대 + z-index 상승 + 0.45s 겹침**.
4. 비디오는 `muted` + 별도 `<audio>`.
5. **결정론만**: `Date.now()`·`Math.random()`·네트워크 fetch·`repeat:-1` 금지.
6. SVG 팔 회전은 GSAP **`svgOrigin`** 필수 (arm-l `"60 152"` / arm-r `"140 152"`). CSS `transform-origin`은 피벗이 틀어진다.
7. 위치 기반 CSS 선택자(`:nth-child`·`:last-child`) 금지 — 요소를 끼우면 조용히 대상이 바뀐다.

### 한국어 TTS

- **edge-tts를 쓴다** — HyperFrames 내장 Kokoro는 한국어 미지원.
- **전사는 `npx hyperframes transcribe`(whisper.cpp) 금지** — 한글을 U+FFFD로 깨뜨리고 마지막 문장을 뭉갠다. faster-whisper로 직접 만든다(`docs/EPISODE-PIPELINE.md` S4).

### YouTube 업로드 (고정)

이 저장소의 영상은 **항상 happylife2080100@gmail.com 계정의 「삼십초 역사」(@history30sec) 채널**로 올린다.

```bash
yt_upload.py --token ~/.config/youtube-upload/token.history-d9t.json ...
```

기본 `token.json`은 다른 프로젝트들이 돌려쓰는 공용 토큰이라 계정이 수시로 바뀐다
(2026-07-11 EP.2가 엉뚱한 채널로 오업로드된 사고의 원인). 업로드 직전 `channels.list(mine=true)`로
채널명이 "삼십초 역사"인지 확인한다.

### 렌더

오래 걸리는 렌더는 로컬 대신 **우분투 홈서버**(Tailscale `100.113.73.17`)에서 돌린다.

---

## 검수는 게이트다 — 완화 금지

에피소드 하나에 게이트가 5개 있고 전부 실제 사고에서 나왔다:

| 게이트 | 막는 것 | 방법 |
| --- | --- | --- |
| S2 대본 | 어눌한 말투·분량 붕괴 | `bin/check_script.py` |
| S3 팩트체크 | 사실 오류 | 주장 ↔ `facts.md` 1:1 대조, 출처 2개 |
| S4 귀검증 | TTS 오발음 | 전사에서 **실단어로 붕괴**하는 것만 |
| S6.4 프레임 | 시각 결함 | 씬 단위 스냅샷 체크리스트 11항목 |
| S8 블라인드 | 오독·고증 | `docs/BLIND-REVIEW-PROMPT.md`를 **컨텍스트 없는 검수자**에게 |

**작화한 세션이 자기 검증하면 오독을 못 잡는다.** S8은 반드시 분리된 검수자에게 맡긴다
(다른 세션·다른 모델·사람 — 셋 다 안 되면 사용자에게 넘긴다).

배치의 최종 결정권은 사람에게 있다 — **S6.5(레이아웃 튜너)를 건너뛰고 렌더하지 않는다.**

---

## 새로 배운 것은 문서에 남긴다

- 새 지뢰 → `PROJECT-NOTES.md` 「밟은 지뢰」에 새 번호 + 상단 인덱스 표에 한 줄.
- 새 오독 패턴 → `docs/ART-RULES.md` §3 시그니처 표에 행 추가.
- 새 소품·배경 → `props-catalog.md`에 출처 파일과 함께 등재.
- 채택/기각한 주제 → `episode-candidates.md` 갱신.

기계로 셀 수 있게 된 규칙은 산문에 두지 말고 `bin/check_*`로 옮긴다.
