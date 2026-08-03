---
description: S6.5 — 사람이 레이아웃을 직접 조정한다 (건너뛰고 렌더 금지)
---

# S6.5 · 인간 레이아웃 조정

**LLM이 찍은 위치·크기는 초안이다.** 배치의 최종 결정권은 사람에게 있다.
이 단계를 건너뛰고 렌더하지 않는다.

## 절차

1. `layout-overrides.js`를 빈 오버라이드로 리셋한다:
   ```js
   // layout-overrides.js
   var LAYOUT_OVERRIDES = {};
   var OBJECT_OVERRIDES = {};
   window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES;
   ```
   `index.html` 하단의 `window.__layout` 훅 블록은 **반드시 보존**한다.

2. 정적 서버를 **백그라운드로** 띄운다 (hyperframes preview 3013이 아니라 3014):
   ```bash
   python3 -m http.server 3014
   ```

3. 사용자에게 알린다:
   > 레이아웃 조정 대기 — http://localhost:3014/studio-layout.html
   > 조정이 끝나면 알려주세요.

   **여기서 멈추고 사용자 신호를 기다린다.**

4. ⚠ **튜너를 연 직후 localStorage를 반드시 클리어하라고 안내한다**(지뢰 #17).
   `layout-overrides.js`를 비우는 것만으로는 부족하다 — 튜너가 localStorage에 저장된
   **이전 에피소드 오버라이드를 iframe 위에 복원**해 회수 데이터를 오염시킨다(실제로 키 32개가 섞여 배치가 붕괴했다).
   브라우저 콘솔에서:
   ```js
   ["toon-layout-overrides-v1","toon-layout-overrides-v2","toon-layout-outline"]
     .forEach(k=>localStorage.removeItem(k)); location.reload();   // char-tuning-v1은 보존
   ```

5. 완료 신호 후 회수 — 브라우저 자동화가 없으면 **수동 경로**를 쓴다:
   - 사용자에게 튜너의 다운로드 버튼을 눌러 받은 내용을 붙여 달라고 요청한다.
   - 받은 내용을 `layout-overrides.js`에 그대로 쓴다
     (형식: 주석 헤더 + `var LAYOUT_OVERRIDES` + `var OBJECT_OVERRIDES` + window 노출 1줄).
   - 브라우저 자동화가 있으면 튜너 탭에서:
     ```js
     const L = document.querySelector("iframe").contentWindow.__layout;
     ({ layout: L.get(), objects: L.getObjects() })
     ```
     `L.list()`의 유효 키로 필터링해 stale 키를 제거한다.

6. 재검증:
   ```bash
   node bin/check_composition.mjs && npm run check
   ```

STATE.md 갱신. 다음: `/ep-render`
