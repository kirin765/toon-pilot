---
description: 삼십초 역사 에피소드 제작 — 진행 상태를 읽고 다음 스테이지를 실행한다
---

# 에피소드 오케스트레이터

주제/지시: **$ARGUMENTS**

현재 작업 파일 상태:
!`ls -la script.txt narration.mp3 transcript.json captions-data.js scenes.js 2>/dev/null; echo "--- 최근 에피소드 ---"; ls -t episodes 2>/dev/null | head -3`

## 너의 일

**한 번에 전 파이프라인을 실행하지 마라.** 스테이지 하나씩 끝내고 게이트를 통과시킨 뒤 다음으로 간다.

1. `episodes/<slug>/STATE.md`가 있으면 **먼저 읽는다**. 없고 새 에피소드를 시작하는 것이면
   `docs/EPISODE-STATE-TEMPLATE.md`를 복사해 만든다 (slug = 로마자 소문자-하이픈).
2. STATE.md의 체크박스를 보고 **다음 미완료 스테이지 하나**를 고른다.
3. 그 스테이지의 전용 커맨드를 실행하라고 사용자에게 알리고, 그대로 진행한다:

| 스테이지 | 커맨드 | 산출물 |
| --- | --- | --- |
| S0~S1 주제·사료 | `/ep-facts <주제>` | `episodes/<slug>/facts.md` |
| S2~S3 대본·팩트체크 | `/ep-script` | `script.txt`, `factcheck.md` |
| S4~S5 TTS·타이밍 | `/ep-voice` | `narration.mp3`, `transcript.json`, `captions-data.js` |
| S6 연출 (씬마다 1회) | `/ep-scene <씬번호>` | `scenes.js`, `index.html` |
| 게이트 확인 | `/ep-gate` | — |
| S6.5 인간 레이아웃 조정 | `/ep-tune` | `layout-overrides.js` |
| S7 렌더 | `/ep-render` | `renders/<slug>.mp4` |
| S8 블라인드 검수 | `/ep-review` | 판정 |
| S9 패키징 | `/ep-ship` | `episodes/<slug>/`, `meta.md` |

4. 스테이지를 끝낼 때마다 **STATE.md의 체크박스를 갱신하고 결과를 한 줄 적는다.**

## 규칙

- 게이트(`python3 bin/check_script.py`, `node bin/check_composition.mjs`, `npm run check`)가 FAIL이면 **다음 스테이지로 넘어가지 않는다.** 고치고 다시 돌린다.
- **S3 · S6.4 · S6.5 · S8은 생략 불가.** 할 수 없으면 사용자에게 알리고 멈춘다.
- 절차의 근거가 필요하면 `docs/EPISODE-PIPELINE.md`를 읽는다. 숫자 상수는 `docs/AGENT-QUICKREF.md`에 있다.
- 주제가 없으면 `episode-candidates.md`에서 🟢 후보를 고른다.
