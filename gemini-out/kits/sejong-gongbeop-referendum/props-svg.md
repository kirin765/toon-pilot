# [소품 목록 + 컷아웃 SVG 초안] 세종대왕, 조선 최초의 여론조사 — 공법 국민투표

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **찬반 집계판 (可/否 산가지 집계, Tally Board)**: 「可」·「否」 두 칸으로 나뉜 나무 게시판에 산가지(막대) 눈금이 쌓이는 집계판 — 여론조사 결과 씬의 히어로 소품. 한자는 SVG `<text>`로 (EP.19 교훈: 손으로 획 그리기 금지).
2. **호조 가부 조사 문서 (설문 두루마리)**: 세로 글줄 + 「可」·「否」 선택지 두 칸이 그려진 조사 문서. 기존 '교지 두루마리'(bench sp2)와 달리 응답 칸이 있는 것이 시그니처.

**재사용 (카탈로그 보유분)**: 어전 세트(sp1 — 세종 하문 씬), 과거 시험장 차일·명부(sp5 — 지방 조사 씬 변주), 논(두렁+회청록 — 남쪽 비옥한 땅), 밭고랑(북쪽 척박한 땅), 서안+붓(EP.10), 관아 동헌(EP.15).

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 찬반 집계판 (可/否 산가지 집계판)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-tally-board">
    <!-- 나무 게시판 몸체 -->
    <rect x="40" y="40" width="320" height="200" rx="8" fill="#fff8e1" stroke="#5d4037" stroke-width="6"/>
    <!-- 상단 가로대 + 다리 2개 (이젤 느낌 방지: 수직 다리) -->
    <rect x="30" y="30" width="340" height="18" rx="6" fill="#8d6e63" stroke="#3e2723" stroke-width="4"/>
    <rect x="70" y="240" width="16" height="45" fill="#8d6e63" stroke="#3e2723" stroke-width="4"/>
    <rect x="314" y="240" width="16" height="45" fill="#8d6e63" stroke="#3e2723" stroke-width="4"/>
    <!-- 중앙 분할선 -->
    <line x1="200" y1="48" x2="200" y2="232" stroke="#5d4037" stroke-width="5"/>
    <!-- 좌측 「可」 (찬성) -->
    <text x="120" y="105" font-size="52" font-family="serif" fill="#2e7d32" text-anchor="middle" font-weight="bold">可</text>
    <!-- 우측 「否」 (반대) -->
    <text x="280" y="105" font-size="52" font-family="serif" fill="#c62828" text-anchor="middle" font-weight="bold">否</text>
    <!-- 좌측 산가지 눈금 (찬성이 더 많게 5+4줄) -->
    <g stroke="#2e7d32" stroke-width="6" stroke-linecap="round">
      <line x1="75" y1="140" x2="75" y2="175"/><line x1="95" y1="140" x2="95" y2="175"/>
      <line x1="115" y1="140" x2="115" y2="175"/><line x1="135" y1="140" x2="135" y2="175"/>
      <line x1="65" y1="145" x2="145" y2="170"/>
      <line x1="80" y1="190" x2="80" y2="225"/><line x1="100" y1="190" x2="100" y2="225"/>
      <line x1="120" y1="190" x2="120" y2="225"/><line x1="140" y1="190" x2="140" y2="225"/>
    </g>
    <!-- 우측 산가지 눈금 (반대는 더 적게 5+2줄) -->
    <g stroke="#c62828" stroke-width="6" stroke-linecap="round">
      <line x1="240" y1="140" x2="240" y2="175"/><line x1="260" y1="140" x2="260" y2="175"/>
      <line x1="280" y1="140" x2="280" y2="175"/><line x1="300" y1="140" x2="300" y2="175"/>
      <line x1="230" y1="145" x2="310" y2="170"/>
      <line x1="250" y1="190" x2="250" y2="225"/><line x1="270" y1="190" x2="270" y2="225"/>
    </g>
  </g>
</svg>
```

### S2. 호조 가부 조사 문서 (설문 두루마리)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-survey-scroll">
    <!-- 상하 두루마리 축 -->
    <rect x="60" y="30" width="280" height="16" rx="8" fill="#5d4037" stroke="#3e2723" stroke-width="4"/>
    <rect x="60" y="254" width="280" height="16" rx="8" fill="#5d4037" stroke="#3e2723" stroke-width="4"/>
    <!-- 한지 지면 -->
    <rect x="75" y="46" width="250" height="208" fill="#fff8e1" stroke="#8d6e63" stroke-width="5"/>
    <!-- 세로 글줄 (오른쪽부터, 문서 본문) -->
    <g stroke="#4e342e" stroke-width="5" stroke-linecap="round">
      <line x1="295" y1="60" x2="295" y2="180"/>
      <line x1="270" y1="60" x2="270" y2="160"/>
      <line x1="245" y1="60" x2="245" y2="175"/>
      <line x1="220" y1="60" x2="220" y2="150"/>
    </g>
    <!-- 응답 칸 2개: 可 / 否 (문서 왼쪽 하단부 — 세로쓰기 문서의 끝) -->
    <rect x="95" y="80" width="50" height="50" fill="none" stroke="#2e7d32" stroke-width="4"/>
    <text x="120" y="118" font-size="30" font-family="serif" fill="#2e7d32" text-anchor="middle" font-weight="bold">可</text>
    <rect x="95" y="150" width="50" height="50" fill="none" stroke="#c62828" stroke-width="4"/>
    <text x="120" y="188" font-size="30" font-family="serif" fill="#c62828" text-anchor="middle" font-weight="bold">否</text>
    <!-- 붉은 관인 (왼쪽 하단 — EP.19 교훈: 세로쓰기는 왼쪽이 글의 끝) -->
    <rect x="90" y="215" width="32" height="32" fill="#d32f2f" opacity="0.85" rx="3"/>
  </g>
</svg>
```
