# [소품 목록 + 컷아웃 SVG 초안] 조선을 설계하고도 500년간 무덤조차 없었던 건국의 아버지, 정도전의 비극

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **경복궁 설계도 조선경국전과 참살당하는 정도전 (Gyeongbokgung Blueprint & Assassinated Dojeon)**: 한양 궁궐과 4대문 이름을 적은 «조선경국전» 설계도를 손에 쥐고, 왕자의 난을 일으킨 이방원 군사의 칼에 피 흘리며 비참하게 참살당하는 삼봉 정도전.
2. **500년간 무덤 없는 텅 빈 흙더미 가묘와 고종 복권 교지 (Empty Unmarked Grave & Restoration Edict)**: 시신을 찾지 못해 500년간 잡초만 무성하고 텅 비어있는 황량한 가짜 무덤(가묘)과, 1865년 흥선대원군 시절 마침내 시호를 내리고 복권시킨 고종 임금의 신원 교지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 경복궁 설계도를 쥐고 이방원의 칼에 참살당하는 천재 정도전
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-assassinated-dojeon">
    <!-- 오른편: 피 흘리며 쓰러지는 삼봉 정도전 상반신 -->
    <circle cx="260" cy="130" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <path d="M 210 90 L 310 90 L 300 50 L 250 50 Z" fill="#212121"/>
    <!-- 피 흘리며 고통받는 표정 -->
    <path d="M 235 125 L 250 130" stroke="#5d4037" stroke-width="4"/>
    <path d="M 285 130 L 270 125" stroke="#5d4037" stroke-width="4"/>
    <circle cx="245" cy="140" r="5" fill="#000000"/>
    <circle cx="275" cy="140" r="5" fill="#000000"/>
    <path d="M 250 160 Q 260 150 270 160" stroke="#d32f2f" stroke-width="5" fill="none"/>
    <rect x="210" y="175" width="100" height="105" fill="#eceff1" stroke="#90a4ae" stroke-width="5" rx="10"/>
    <!-- 가슴과 옷을 물들인 붉은 피 -->
    <path d="M 220 190 Q 250 220 280 190 Z" fill="#d32f2f"/>
    <!-- 왼편: 이방원 군사의 날카로운 참살 칼날 (대검) -->
    <polygon points="60,100 230,170 60,140" fill="#90a4ae" stroke="#37474f" stroke-width="3"/>
    <line x1="100" y1="120" x2="220" y2="165" stroke="#ffffff" stroke-width="4"/>
    <!-- 하단 손에 쥔 경복궁 설계도 조선경국전 -->
    <rect x="230" y="220" width="120" height="60" fill="#fffde7" stroke="#8d6e63" stroke-width="4" transform="rotate(-10 230 220)" rx="5"/>
    <text x="245" y="250" fill="#3e2723" font-size="16" font-weight="bold">朝鮮經國典 (한양 설계)</text>
    <text x="50" y="280" fill="#d32f2f" font-size="16" font-weight="bold">1398년 제1차 왕자의 난 정도전 참살</text>
  </g>
</svg>
```

### S2. 500년 무덤 없는 텅 빈 흙더미 가묘와 1865년 고종 복권 교지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-empty-grave-restoration">
    <!-- 오른편: 1865년 고종 대에 비로소 내린 복권 교지 (한지 교지) -->
    <rect x="220" y="40" width="160" height="200" fill="#fff9c4" stroke="#8d6e63" stroke-width="6" rx="5"/>
    <text x="240" y="80" fill="#b71c1c" font-size="22" font-weight="bold" font-family="serif">伸寃復權令</text>
    <text x="245" y="120" fill="#3e2723" font-size="15" font-weight="bold">500년 만에 정도전의</text>
    <text x="240" y="150" fill="#3e2723" font-size="15" font-weight="bold">공훈과 시호를 복권함</text>
    <rect x="260" y="170" width="80" height="50" fill="#d32f2f" rx="5"/>
    <text x="275" y="203" fill="#ffffff" font-size="18" font-weight="bold">高宗 (1865)</text>
    <!-- 왼편: 시신을 찾지 못해 잡초만 무성한 황량한 흙더미 가짜 무덤 (가묘) -->
    <path d="M 30 240 Q 110 130 190 240 Z" fill="#8d6e63" stroke="#5d4037" stroke-width="5"/>
    <!-- 무성한 잡초와 텅 빈 비석 -->
    <path d="M 60 210 L 50 180 M 80 190 L 75 160 M 140 200 L 150 170" stroke="#2e7d32" stroke-width="6" stroke-linecap="round"/>
    <rect x="90" y="110" width="40" height="80" fill="#cfd8dc" stroke="#78909c" stroke-width="4" rx="5"/>
    <text x="95" y="155" fill="#37474f" font-size="14" font-weight="bold">假墓 (가묘)</text>
    <text x="35" y="280" fill="#212121" font-size="16" font-weight="bold">시신 없는 가짜 무덤: 조선의 비극적 아이러니</text>
  </g>
</svg>
```
