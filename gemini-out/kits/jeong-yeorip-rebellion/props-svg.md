# [소품 목록 + 컷아웃 SVG 초안] 조선의 아나키스트 정여립과 기축옥사

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **정여립의 대동계 결의 깃발과 천하공물 선언문 (Daedonggye Flag & Manifesto)**: 신분 평등과 '천하공물(天下公物)'이 새겨진 붉고 거대한 결의 깃발과 대동계 맹약 문서.
2. **기축옥사의 피 묻은 국문 고문틀과 형장 참도 (Torture Rack & Sword)**: 1,000여 명의 지식인들을 잔혹하게 고문하고 처형했던 관아 형장의 곤장틀과 참도.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 정여립의 대동계 결의 깃발과 천하공물(天下公物) 선언문
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-daedong-flag">
    <!-- 대동계 거대한 무장 깃발 (오른편 위로 나부낌) -->
    <path d="M 160 50 L 360 80 C 370 120 360 180 340 230 L 160 190 Z" fill="#b71c1c" stroke="#3e2723" stroke-width="6"/>
    <line x1="160" y1="30" x2="160" y2="280" stroke="#4e342e" stroke-width="12" stroke-linecap="round"/>
    <!-- 깃발 안 한자 '대동(大同)' 컷아웃 요약 -->
    <!-- '大(큰 대)' -->
    <path d="M 210 110 L 250 115 M 230 95 L 220 150 M 230 115 L 250 150" stroke="#ffd54f" stroke-width="8" stroke-linecap="round"/>
    <!-- '同(한 동)' -->
    <path d="M 270 110 L 310 115 L 310 165 L 270 160 Z M 285 125 L 295 125 M 290 125 L 290 150 M 280 145 L 300 145" fill="none" stroke="#ffd54f" stroke-width="7" stroke-linecap="round"/>
    <!-- 앞쪽에 깔린 천하공물설 선언문 한지 문서 (왼편 아래) -->
    <rect x="30" y="150" width="180" height="130" rx="4" fill="#fff9c4" stroke="#5d4037" stroke-width="6" transform="rotate(-6 30 150)"/>
    <!-- '天下公物(천하공물 - 나라는 공공의 것)' 붉은 혁명 붓글씨 -->
    <text x="50" y="200" fill="#d32f2f" font-size="18" font-weight="bold" transform="rotate(-6 50 200)">天下公物</text>
    <path d="M 50 220 L 180 220 M 50 240 L 160 240 M 50 260 L 170 260" stroke="#37474f" stroke-width="4" stroke-dasharray="10,6" transform="rotate(-6 50 220)"/>
  </g>
</svg>
```

### S2. 기축옥사의 피 묻은 국문 고문 형틀과 참살 칼
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-torture-gear">
    <!-- 관아 잔혹한 국문 형틀 (주리 틀기 및 곤장 바닥 나무틀) -->
    <rect x="60" y="160" width="280" height="40" rx="4" fill="#5d4037" stroke="#3e2723" stroke-width="6"/>
    <polygon points="80,160 70,240 110,240 100,160" fill="#4e342e" stroke="#263238" stroke-width="4"/>
    <polygon points="300,160 290,240 330,240 320,160" fill="#4e342e" stroke="#263238" stroke-width="4"/>
    <!-- 주리 틀기용 굵은 나무 몽둥이 2개 -->
    <path d="M 130 90 L 160 250" stroke="#8d6e63" stroke-width="14" stroke-linecap="round"/>
    <path d="M 190 90 L 170 250" stroke="#8d6e63" stroke-width="14" stroke-linecap="round"/>
    <!-- 피 흘림 효과 (1,000여 명 학살 참극) -->
    <path d="M 150 180 Q 155 210 150 230 M 175 190 Q 170 220 175 240" fill="none" stroke="#b71c1c" stroke-width="6" stroke-linecap="round"/>
    <!-- 옆에 놓인 사형 무사의 대형 참살 칼 (망나니 참도) -->
    <path d="M 230 220 L 340 70" stroke="#90a4ae" stroke-width="18" stroke-linecap="round"/>
    <path d="M 230 220 L 340 70" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    <circle cx="330" cy="80" r="12" fill="#b71c1c"/>
    <rect x="210" y="210" width="35" height="20" rx="4" fill="#3e2723" stroke="#ffd54f" stroke-width="4" transform="rotate(-45 210 210)"/>
  </g>
</svg>
```
