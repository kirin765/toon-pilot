---
description: S9 — 아카이브 + 업로드 메타 작성
---

# S9 · 패키징

slug: **$ARGUMENTS**

## 1. 아카이브 → `episodes/<slug>/`

루트 작업 파일은 다음 에피소드가 덮어쓴다. **아카이브가 원본이다.**

```bash
mkdir -p episodes/<slug>
cp script.txt scenes.js captions-data.js layout-overrides.js index.html episodes/<slug>/
# facts.md · factcheck.md · STATE.md 는 이미 그 안에 있다
```

빠뜨리기 쉬운 것: **`layout-overrides.js`**(사람이 조정한 좌표 — 이게 없으면 재현이 안 된다).

## 2. `episodes/<slug>/meta.md` — 업로드 메타

- **제목**: 훅형 + 시리즈 넘버링 — `삼십초 역사 EP.N — <훅 문장>`
- **설명**: 3~5줄. **사실 출처를 1줄 포함**한다(신뢰 신호). 야사가 섞였으면 명시.
- **해시태그** 3~5개
- **다음 편 예고 문장** (고정 댓글용)

## 3. 업로드 (사용자 승인 후)

**채널 고정**: happylife2080100@gmail.com 계정의 「삼십초 역사」(@history30sec).

```bash
yt_upload.py --token ~/.config/youtube-upload/token.history-d9t.json ...
```

⚠ 기본 `token.json`은 다른 프로젝트들이 돌려쓰는 공용 토큰이라 계정이 수시로 바뀐다.
실제로 EP.2가 엉뚱한 채널로 오업로드된 적이 있다. 업로드 직전 `channels.list(mine=true)`로
채널명이 "삼십초 역사"인지 확인한다.

업로드는 되돌리기 어렵다 — **사용자 승인 없이 실행하지 않는다.**

## 4. 문서 갱신 (잊지 말 것)

- 새로 밟은 지뢰 → `PROJECT-NOTES.md` 「밟은 지뢰」에 새 번호 + **상단 인덱스 표에 한 줄**
- 새 오독 패턴 → `docs/ART-RULES.md` §3 시그니처 표에 행 추가
- 새로 그린 소품·배경 → `props-catalog.md`에 출처 파일과 함께 등재
- 채택/기각한 주제 → `episode-candidates.md` 상태 갱신
- STATE.md 전 항목 체크 + 생략한 게이트가 있으면 명시

## 5. 최종 보고

완성 경로 · 길이 · 통과한 게이트 · **생략한 게이트와 그 이유**를 한 번에 보고한다.
