# [소품 목록 + 컷아웃 SVG 초안] 조선의 수학자 최석정과 세계 최초의 9x9 마법진 '구수략'

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **최석정의 구수략 9x9 마법진 책과 산가지 (Gusuryak Math Book & Rods)**: 오일러보다 60년 앞선 9행 9열 직교 라틴 방진 '구구모수변궁양도'가 도식화된 고서와 대나무 계산 도구 산가지.
2. **오일러의 서양 논문과 조선 영의정 옥새 (Euler Paper & Prime Minister Seal)**: 서양 수학자 오일러의 1779년 논문 양피지와 이를 압도한 조선 영의정의 붉은 옥새 인장.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 최석정의 구수략 9x9 마법진 도표(구구모수변궁양도)와 산가지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-magic-square">
    <!-- 구수략 수학 고서 펼쳐진 한지 (중앙 위쪽) -->
    <rect x="50" y="40" width="300" height="220" rx="6" fill="#fff8e1" stroke="#5d4037" stroke-width="6"/>
    <line x1="200" y1="40" x2="200" y2="260" stroke="#8d6e63" stroke-width="4"/>
    <!-- 왼쪽 페이지: 9x9 직교 라틴 방진 격자 도표 컷아웃 (3x3 마법진 9개 요약) -->
    <rect x="70" y="65" width="110" height="110" fill="none" stroke="#3e2723" stroke-width="4"/>
    <line x1="106" y1="65" x2="106" y2="175" stroke="#3e2723" stroke-width="2"/>
    <line x1="143" y1="65" x2="143" y2="175" stroke="#3e2723" stroke-width="2"/>
    <line x1="70" y1="101" x2="180" y2="101" stroke="#3e2723" stroke-width="2"/>
    <line x1="70" y1="138" x2="180" y2="138" stroke="#3e2723" stroke-width="2"/>
    <!-- 신비로운 수학 기호 및 산모양 숫자 표시 -->
    <circle cx="88" cy="83" r="8" fill="#d32f2f"/>
    <circle cx="125" cy="120" r="8" fill="#0288d1"/>
    <circle cx="161" cy="156" r="8" fill="#388e3c"/>
    <!-- 오른쪽 페이지: '九數略(구수략)' 한자 및 산가지(산목) 계산 묘사 -->
    <text x="230" y="90" fill="#3e2723" font-size="22" font-weight="bold">九數略</text>
    <text x="225" y="125" fill="#d32f2f" font-size="14" font-weight="bold">오일러+60년</text>
    <!-- 대나무 계산 도구 산가지 (앞쪽 아래 가로지름) -->
    <path d="M 220 170 L 320 170 M 230 190 L 330 190 M 250 155 L 250 205 M 290 155 L 290 205" stroke="#e65100" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 오일러의 서양 수학 논문과 이를 깨부수는 조선 영의정 인장
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-euler-seal">
    <!-- 오일러의 서양 양피지 논문 (왼편 기울어짐) -->
    <rect x="40" y="80" width="180" height="150" rx="4" fill="#eeeeee" stroke="#616161" stroke-width="5" transform="rotate(-8 40 80)"/>
    <text x="60" y="130" fill="#424242" font-size="16" font-weight="bold" transform="rotate(-8 60 130)">Euler (1779)</text>
    <path d="M 60 150 L 180 150 M 60 175 L 160 175" stroke="#9e9e9e" stroke-width="4" transform="rotate(-8 60 150)"/>
    <!-- 조선 영의정 최석정의 압도적 금장 붉은 옥새 인장 (오른편 아래로 도장 쾅!) -->
    <rect x="210" y="120" width="150" height="130" rx="8" fill="#fff9c4" stroke="#4e342e" stroke-width="6" transform="rotate(6 210 120)"/>
    <text x="225" y="160" fill="#3e2723" font-size="16" font-weight="bold" transform="rotate(6 225 160)">崔錫鼎 (1690s)</text>
    <!-- '領議政(영의정) / 世界最初(세계최초)' 거대한 붉은 도장 -->
    <circle cx="280" cy="210" r="40" fill="#b71c1c" fill-opacity="0.9" stroke="#7f0000" stroke-width="5"/>
    <text x="252" y="217" fill="#ffffff" font-size="20" font-weight="bold">世界最初</text>
  </g>
</svg>
```
