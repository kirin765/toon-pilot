# [소품 목록 + 컷아웃 SVG 초안] 흥선대원군의 당백전 발매와 조선 인플레이션 대참사

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **흥선대원군의 악화 당백전 동전과 경복궁 도면 (Dangbaekjeon & Blueprint)**: 상평통보의 100배 가치라 새겨진 거대한 구리색 당백전 동전과 밑에 깔린 경복궁 공사 도면.
2. **물가 6배 폭등 쌀 가마니와 엽전 산더미 지게 (Rice Sack & Coin Cart)**: 쌀 한 가마니(가치 폭등)를 사기 위해 지게와 리어카에 산더미처럼 쌓아 싣고 온 똥값 엽전 뭉치들.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 상평통보의 100배 악화 당백전 동전과 경복궁 도면
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-dangbaekjeon">
    <!-- 밑에 깔린 경복궁 중건 도면 한지 (청사진/건축도 요약) -->
    <rect x="40" y="60" width="280" height="200" rx="6" fill="#eceff1" stroke="#37474f" stroke-width="6" transform="rotate(-6 40 60)"/>
    <rect x="70" y="80" width="220" height="160" fill="none" stroke="#607d8b" stroke-width="3" stroke-dasharray="8,8" transform="rotate(-6 70 80)"/>
    <polygon points="150,110 110,140 190,140" fill="#90a4ae" stroke="#37474f" stroke-width="3" transform="rotate(-6 150 110)"/>
    <!-- 위에 압도적으로 놓인 거대한 악화 당백전 동전 -->
    <circle cx="230" cy="160" r="95" fill="#d84315" stroke="#3e2723" stroke-width="10"/>
    <circle cx="230" cy="160" r="75" fill="#bf360c" stroke="#ffab91" stroke-width="4"/>
    <!-- 중앙 사각형 구멍 (엽전 상징) -->
    <rect x="205" y="135" width="50" height="50" fill="#3e2723" stroke="#ffab91" stroke-width="5"/>
    <!-- 한자 '當百(당백)' 컷아웃 글씨 요약 -->
    <!-- '當(마땅 당)' 요약 (상단) -->
    <path d="M 220 85 L 240 85 M 230 75 L 230 95 M 215 105 L 245 105 M 220 115 L 240 115" stroke="#fff9c4" stroke-width="6" stroke-linecap="round"/>
    <!-- '百(일백 백)' 요약 (하단 - 100배 강조) -->
    <path d="M 215 195 L 245 195 M 230 190 L 230 225 M 220 205 L 240 205 M 220 215 L 240 215" stroke="#fff9c4" stroke-width="7" stroke-linecap="round"/>
    <!-- '100X' 현대적 경고 붉은 불꽃/충격 화살표 -->
    <path d="M 310 90 L 350 120 L 320 130 Z" fill="#ffeb3b" stroke="#d32f2f" stroke-width="4"/>
    <text x="325" y="115" fill="#d32f2f" font-size="16" font-weight="bold">100배</text>
  </g>
</svg>
```

### S2. 쌀 1가마니 사려 엽전 산더미를 실은 지게 (초인플레이션)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-inflation-cart">
    <!-- 오른편: 귀하신 쌀 가마니 (물가 6배 폭등) -->
    <ellipse cx="300" cy="210" rx="50" ry="30" fill="#d7ccc8" stroke="#5d4037" stroke-width="6"/>
    <path d="M 250 210 C 250 150 350 150 350 210 Z" fill="#efebe9" stroke="#5d4037" stroke-width="6"/>
    <path d="M 270 170 L 330 170 M 265 190 L 335 190" stroke="#8d6e63" stroke-width="4" stroke-dasharray="6,4"/>
    <text x="280" y="190" fill="#b71c1c" font-size="20" font-weight="bold">쌀 6배↑</text>
    <!-- 왼편: 똥값이 되어 산더미처럼 쌓인 당백전 엽전 지게/리어카 -->
    <!-- 나무 지게 틀 -->
    <path d="M 60 250 L 100 120 L 140 250" fill="none" stroke="#4e342e" stroke-width="8" stroke-linecap="round"/>
    <line x1="75" y1="200" x2="125" y2="200" stroke="#4e342e" stroke-width="8"/>
    <line x1="85" y1="160" x2="115" y2="160" stroke="#4e342e" stroke-width="8"/>
    <!-- 산더미 엽전 뭉치들 (휴지조각 화폐) -->
    <ellipse cx="100" cy="150" rx="50" ry="25" fill="#d84315" stroke="#3e2723" stroke-width="6"/>
    <ellipse cx="90" cy="130" rx="40" ry="20" fill="#bf360c" stroke="#3e2723" stroke-width="5"/>
    <ellipse cx="110" cy="115" rx="30" ry="15" fill="#e64a19" stroke="#3e2723" stroke-width="5"/>
    <circle cx="100" cy="95" r="15" fill="#ff7043" stroke="#3e2723" stroke-width="4"/>
    <!-- 흘러넘쳐 바닥에 뒹구는 동전들 -->
    <circle cx="160" cy="240" r="12" fill="#d84315" stroke="#3e2723" stroke-width="3"/>
    <circle cx="190" cy="250" r="14" fill="#bf360c" stroke="#3e2723" stroke-width="3"/>
    <circle cx="220" cy="245" r="12" fill="#e64a19" stroke="#3e2723" stroke-width="3"/>
    <!-- 물가 폭등 충격파 눈물/땀 흘림 효과 -->
    <path d="M 170 140 Q 200 120 230 150" fill="none" stroke="#2196f3" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```
