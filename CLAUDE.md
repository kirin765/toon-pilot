# CLAUDE.md — Claude Code 전용 부록

> **정본은 `AGENTS.md`다. 먼저 그것을 읽어라.**
> 프로젝트 정체성·아키텍처·명령·하드 규칙·게이트는 전부 거기 있고, 여기엔 중복해 두지 않는다.
> 에피소드 제작은 `docs/EPISODE-PIPELINE.md`, 아트 규칙은 `docs/ART-RULES.md`.

이 파일에는 **Claude Code에서만 의미가 있는 것**만 둔다.

## 슬래시 커맨드

- **`/episode <주제>`** — 에피소드 원커맨드 제작. 스킬은 `docs/EPISODE-PIPELINE.md`를 실행하는 얇은 래퍼다.
- `/hyperframes` — HyperFrames 프레임워크 자체를 다룰 때의 라우터(도메인 스킬 `/hyperframes-core`, `/hyperframes-animation`, `/hyperframes-cli`, `/hyperframes-media` 등으로 분기).
  이 저장소는 **이미 만들어진 컴포지션을 계속 고치는** 프로젝트이므로, `/product-launch-video`·`/faceless-explainer` 같은
  생성 워크플로우로 새 프로젝트를 파지 말 것. 스킬이 없거나 낡았으면 `npx skills add heygen-com/hyperframes` 후 세션 재시작.

## Claude 전용 실행 매핑

파이프라인의 「필요한 능력」 표(`docs/EPISODE-PIPELINE.md` §0)를 Claude Code에서는 이렇게 채운다:

| 스테이지 | 도구 |
| --- | --- |
| S1 사료 리서치 | `WebSearch` / `WebFetch` |
| S3 적대적 팩트체크 | 별도 서브에이전트(Agent) — 사료를 새로 열게 한다 |
| S6.4 프레임 점검 | `Read`로 스냅샷 PNG를 직접 본다 |
| S6.5 튜너 회수 | Claude in Chrome `javascript_tool` (탭: `http://localhost:3014/studio-layout.html`) |
| S8 블라인드 검수 | 컨텍스트 없는 서브에이전트 2명. 프롬프트는 `docs/BLIND-REVIEW-PROMPT.md` 그대로 |
| 대기·완료 알림 | `telegram-bot` 스킬 (S6.5 대기 = ⏸, 완성 = ✅) |

## 실행 주의

- `npm run dev`·`python3 -m http.server 3014`는 **`run_in_background: true`로만** 실행한다. 포그라운드는 타임아웃과 함께 죽는다.
- 프리뷰 서버 설정은 `.claude/launch.json` (`toon-pilot-preview` 3013 / `toon-pilot-static` 3014).
- 렌더는 오래 걸린다 — `ubuntu-server` 스킬로 홈서버에서 돌리는 것이 기본.
