---
description: 게이트 3종을 돌리고 결과를 해석해 고친다
---

# 게이트

```
!`python3 bin/check_script.py --density 중간; echo "=== 컴포지션 ==="; node bin/check_composition.mjs`
```

## 너의 일

위 출력을 읽고 **✗(오류)를 전부 해소한다.** ⚠(경고)는 판단해서 처리하되, 무시하기로 했으면
그 이유를 STATE.md에 한 줄 남긴다.

그다음 프레임워크 린트를 돌린다:

```bash
npm run check
```

에러 0이어야 한다. inspect 경고는 기준선(노이즈 5건) 대비 **증가분만** 조사한다.

## 자주 나오는 ✗와 대처

| 메시지 | 원인 · 대처 |
| --- | --- |
| `<script src="char-tuning.js"> 누락` | index.html을 새로 쓰면서 빠뜨렸다. 이게 없으면 rig 튜닝이 통째로 죽는데 `npm run check`는 통과한다(지뢰 #54) |
| `track=N — 씬은 track 0/1 교대` | 같은 트랙 클립은 겹칠 수 없다. 짝수 씬 0, 홀수 씬 1 |
| `타이밍 불일치 — index.html vs scenes.js` | 한쪽만 고쳤다. 두 파일의 start/dur를 맞춘다 |
| `z-index — 단조 증가해야` | 씬 전환이 트랙 교대 + z 상승으로 만들어진다. `#s1:10 → #s2:20 → …`, overlay는 최대 |
| `distinct 배경 N종` / `4씬 연속` | 씬 플랜(S6.0)이 게으르다. 같은 서사도 방/마당/문밖으로 쪼갠다 |
| `풀블리드 밴드가 … y구간을 삼킨다` | emit 순서. 밴드를 그 위에 서는 구조물보다 **앞으로** 옮긴다(지뢰 #69) |
| `stage 배경색이 소품 색으로도 쓰였다` | 배경 위에 직접 놓인 소품이면 통째로 사라진다(지뢰 #70). 다른 소품 위라면 무시 가능 |
| `variant "..."는 rig 6종 밖` | host/king/admiral/militia/lady/kid만 쓴다. 새 인물은 모자·의상 색으로 변주 |
| `Math.random / Date.now / repeat:-1` | 결정론 렌더가 깨진다. 전부 제거 |
| `.cap-wrap bottom < 380px` | Shorts 하단 UI에 자막이 가린다 |
| `예측 길이 … 목표 밖` | 압축하지 말고 문장을 쪼개거나 **사료 항목을 통째로** 넣거나 뺀다 |

셋 다 통과하면 STATE.md를 갱신하고 `/ep-tune`으로 간다.
