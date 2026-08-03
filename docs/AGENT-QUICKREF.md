# 퀵레퍼런스 — 항상 컨텍스트에 있는 카드

`AGENTS.md`와 함께 항상 로드된다. **숫자 상수와 절대 금지는 전부 여기 있다.**
근거·배경은 `docs/EPISODE-PIPELINE.md`(절차) · `docs/ART-RULES.md`(아트) · `PROJECT-NOTES.md`(지뢰).

## 절대 금지

1. `Math.random()` · `Date.now()` · `new Date()` · `fetch()` · GSAP `repeat:-1` — 결정론 렌더가 깨진다.
2. `npx hyperframes transcribe` — 한글을 U+FFFD로 깨뜨린다. faster-whisper를 쓴다.
3. CSS `transform-origin`으로 SVG 팔 회전 — GSAP `svgOrigin` 필수(arm-l `"60 152"` / arm-r `"140 152"`).
4. `:nth-child` · `:last-child` 선택자.
5. rig variant 6종(host/king/admiral/militia/lady/kid) 밖의 새 캐릭터.
6. **게이트 우회.** FAIL이면 다음 스테이지로 가지 않는다.
7. 유튜브 업로드에 공용 `token.json` 사용 — `--token ~/.config/youtube-upload/token.history-d9t.json` 고정.

## 게이트 (셋 다 exit 0이어야 렌더)

```bash
python3 bin/check_script.py --density 중간   # 대본 — TTS 전
node bin/check_composition.mjs               # 컴포지션 — 렌더 전
npm run check                                # hyperframes (에러 0)
npm run gate                                 # 셋 다 한 번에
```

## 숫자 상수

| 항목 | 값 |
| --- | --- |
| 캔버스 | 1080 × 1920 (세로) |
| 자막 `.cap-wrap` | `bottom: 380px` — 하단 320px·우측 140px는 Shorts UI존 |
| 지면선 | `bottom: 560px` — 서 있는 모든 것의 하단을 ±100px에 스냅 |
| 캐릭터 | `w 380~440` / `bottom 560~660` / 렌더 높이 = `w × 1.2` |
| 씬 전환 | track 0/1 교대 + z-index 상승 + 겹침 `0.45s` |
| 길이 예측 | `초 ≈ 어절×0.49 + 문장수×1.18` (문장 = **마침표** 단위) |
| 정보량 기본 '중간' | 65~80s · 어절 90~110 · 문장 19~23 · 씬 8~10 + 아웃트로 |
| 배경 | distinct ≥ 3종(아웃트로 제외), 동일 배경 연속 ≤ 3씬 |
| 무인 씬 | 연속 ≤ 2 |
| 주 소품 | 렌더 폭 ≥ 380px, 프리미티브 ≥ 12개, `data-obj` 그룹 ≥ 4 |
| 씬 레이어 | 환경 + 주 소품 + 보조/실루엣 = **3레이어 필수** |
| 2톤 명암 | 한 변 200px 넘는 면은 단색 금지 (벽·바닥·하늘 밴드 포함) |

## 스테이지 순서

`S0 주제 → S1 사료 → S2 대본 → S3 팩트체크 → S4 TTS → S5 타이밍 → S6 연출 → S6.4 프레임점검 → S6.5 인간튜닝 → S7 렌더 → S8 블라인드검수 → S9 패키징`

**생략 불가 4종: S3 · S6.4 · S6.5 · S8.** 능력이 없어 건너뛰었으면 최종 보고에 명시한다.

opencode에서는 스테이지마다 전용 커맨드가 있다 — `/episode`가 다음에 실행할 커맨드를 알려준다.
진행 상태는 `episodes/<slug>/STATE.md`에 기록하고, 매 스테이지 시작 시 먼저 읽는다.

## 파일 역할

`script.txt` 대본 · `narration.mp3` TTS · `transcript.json` 단어 타임스탬프 ·
`captions-data.js` 자막/립싱크(생성물) · `scenes.js` 장면 JSON · `layout-overrides.js` 사람이 조정한 좌표 ·
`index.html` 조립 · `characters.js` rig(**수정 금지**) · `renders/<slug>.mp4` 산출물 · `episodes/<slug>/` 아카이브
