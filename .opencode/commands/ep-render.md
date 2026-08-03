---
description: S7 — 최종 검증 후 MP4 렌더
---

# S7 · 렌더

slug: **$ARGUMENTS**

## 1. 최종 검증 (에러 0)

```bash
npm run gate
```

FAIL이면 렌더하지 않는다.

## 2. 렌더

```bash
npx hyperframes render --quality standard --output renders/<slug>.mp4
```

- 오래 걸린다. 백그라운드로 돌리고 완료를 기다린다.
- 로컬이 느리면 우분투 홈서버(Tailscale `100.113.73.17`)에서 돌린다.

## 3. 산출물 확인

```bash
ffprobe -v error -show_entries format=duration -show_entries stream=width,height,codec_name \
        -of default=noprint_wrappers=1 renders/<slug>.mp4
```

- 해상도 **1080×1920** 인지
- 길이가 `index.html`의 root `data-duration`과 맞는지
- 오디오 스트림이 있는지

STATE.md 갱신. 다음: `/ep-review`
