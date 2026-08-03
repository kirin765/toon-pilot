---
description: S4~S5 — TTS 생성 + 전사 + 타이밍 동기화 → captions-data.js
---

# S4~S5 · TTS · 타이밍

강조어(hi, 쉼표 구분): **$ARGUMENTS**

## S4. TTS

```bash
uvx edge-tts --voice ko-KR-InJoonNeural --rate=+6% --file script.txt --write-media narration.mp3
```

### 전사 — `hyperframes transcribe`를 쓰지 마라

whisper.cpp는 한글을 U+FFFD로 깨뜨리고 마지막 문장을 뭉갠다(지뢰 #53·#33). faster-whisper로 직접 만든다:

```bash
uv run --with faster-whisper python - <<'EOF'
from faster_whisper import WhisperModel
import json
m = WhisperModel('medium', device='cpu', compute_type='int8')
segs,_ = m.transcribe('narration.mp3', language='ko', beam_size=5,
                      word_timestamps=True, vad_filter=False, condition_on_previous_text=False)
w=[{"text":x.word.strip(),"start":round(x.start,2),"end":round(x.end,2)}
   for s in segs for x in (s.words or []) if x.word.strip()]
json.dump(w, open('transcript.json','w'), ensure_ascii=False, indent=2)
print(len(w), w[-1])
EOF
```

`vad_filter=False` 필수 — 켜면 아웃트로가 통째로 떨어진다.

### 게이트 — 끝단어 대조

```bash
python3 bin/check_script.py --transcript
```

### 귀검증 (어눌함 게이트)

전사를 읽고 오독을 찾는다. **실단어로 붕괴하는 것만 위험하다**(지뢰 #32):
- 위험: "부하"→"부화", "금오"→"금호" 처럼 **다른 뜻의 실제 단어**가 되는 경우 → script.txt를 고쳐 TTS 재생성.
- 무시: 뜻 없는 철자 편향 → 화면 스탬프로 보강하면 된다.
- 붕괴 후보는 2~3개 문맥으로 A/B 해서 판별한다.

## S5. 타이밍 동기화

```bash
python3 bin/sync_timing.py --hi <강조어,쉼표구분>
```

`transcript.json` + `script.txt` → `captions-data.js`(WORDS/CAPTION_GROUPS) + **문장 테이블**(씬 경계용) 출력.
문장 테이블을 STATE.md에 붙여 둔다 — S6에서 씬 경계로 쓴다.

### 후편집 2건 (둘 다 필수)

1. **자막 표시형 변환**: 십오만→15만, 천육백팔년→1608년. WORDS와 CAPTION_GROUPS **양쪽**, hi 배열 포함.
   나이·기간 같은 **작은 수도 빠뜨리지 마라**(지뢰 #10).
2. **자동 그룹핑 눈검수 — 선택이 아니다**(지뢰 #61). `CAPTION_GROUPS`의 text만 세로로 출력해 한 줄씩 읽는다.
   조사·의존명사·수사에서 끊긴 무의미 조각이 있으면 `caption-splits.txt`를 만들고 다시 돌린다:
   - 스크립트 문장당 한 줄, 그룹별 어절 수를 공백으로 구분 (예: `3 4 2`)
   - 합이 문장 어절 수와 다르면 스크립트가 즉시 죽으니 오타 걱정은 없다
   - 실측: 19문장 중 10군데가 무의미 조각이었다

### 정렬 대조 (무음이 있을 때만)

```bash
ffmpeg -i narration.mp3 -af silencedetect=n=-35dB:d=0.30 -f null - 2>&1 | grep silence_end
```

`silence_end` 목록과 CAPTION_GROUPS의 start를 대조해 **0.45초 이상 앞선 그룹만** 보정한다(지뢰 #58).
구간별 리맵을 쓸 때 **경계값이 앞 구간에 잡히지 않는지** 확인한다.

마지막으로 출력된 audio/root `data-duration` 제안값을 `index.html`에 반영한다.

STATE.md 갱신. 다음: `/ep-scene 1`
