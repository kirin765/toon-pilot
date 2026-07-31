# [소품 목록 + 컷아웃 SVG 초안] 조선 영조 시대의 피의 금주령, 몰래 술 담근 사령관을 남대문 앞 길거리에서 즉결 참수형시킨 사연

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 금주령 위반 봉인 술독과 바가지 (Illegal Liquor Clay Pot)**: 쌀 곡식을 축낸다며 어명으로 짚과 붉은 띠로 꽁꽁 봉인된 커다란 옹기 술 항아리와 막걸리가 담긴 표주박 바가지.
2. **남대문(숭례문) 앞 즉결 사형 참수 대도와 사형단 (Namdaemun Public Execution Sword)**: 영조 임금이 지켜보는 길거리 한복판에서 사령관 윤구연의 목을 벤 피 묻은 망나니 참수 칼과 사형 알림 목판 명패.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 어명으로 짚과 붉은 띠로 봉인당한 커다란 옹기 술 항아리와 표주박
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-illegal-liquor-pot">
    <!-- 커다란 갈색 전통 옹기 술 항아리 (중앙) -->
    <ellipse cx="200" cy="240" rx="90" ry="30" fill="#3e2723" stroke="#212121" stroke-width="6"/>
    <path d="M 120 130 C 90 200 110 240 200 240 C 290 240 310 200 280 130 Z" fill="#5d4037" stroke="#212121" stroke-width="6"/>
    <ellipse cx="200" cy="130" rx="60" ry="18" fill="#4e342e" stroke="#212121" stroke-width="6"/>
    <!-- 옹기 목을 감싼 짚봉인과 붉은색 금주령 금지 띠 -->
    <rect x="150" y="115" width="100" height="25" rx="5" fill="#fff9c4" stroke="#fbc02d" stroke-width="4"/>
    <path d="M 140 150 Q 200 170 260 150" stroke="#d32f2f" stroke-width="12" fill="none"/>
    <text x="170" y="157" fill="#ffffff" font-size="16" font-weight="bold">禁 酒 (금지)</text>
    <!-- 왼편 바닥에 놓인 표주박 막걸리 바가지 -->
    <ellipse cx="90" cy="230" rx="40" ry="25" fill="#ffecb3" stroke="#212121" stroke-width="5" transform="rotate(-15 90 230)"/>
    <ellipse cx="90" cy="225" rx="30" ry="15" fill="#ffffff"/>
    <text x="130" y="280" fill="#b71c1c" font-size="18" font-weight="bold">쌀을 축낸 죄 = 참수 사형</text>
  </g>
</svg>
```

### S2. 남대문 앞 즉결 참수형 피 묻은 망나니 대도와 경고 명패
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-execution-sword-board">
    <!-- 남대문(숭례문) 성벽 돌담 배경 암시 (하단) -->
    <rect x="20" y="220" width="360" height="60" fill="#757575" stroke="#424242" stroke-width="6"/>
    <line x1="20" y1="250" x2="380" y2="250" stroke="#424242" stroke-width="4"/>
    <line x1="140" y1="220" x2="140" y2="280" stroke="#424242" stroke-width="4"/>
    <line x1="260" y1="220" x2="260" y2="280" stroke="#424242" stroke-width="4"/>
    <!-- 즉결 사형을 알리는 나무 사형 명패 (오른편 위쪽) -->
    <rect x="230" y="50" width="120" height="150" rx="5" fill="#ffecb3" stroke="#5d4037" stroke-width="6"/>
    <text x="245" y="90" fill="#b71c1c" font-size="20" font-weight="bold">어명 즉결</text>
    <text x="250" y="130" fill="#212121" font-size="22" font-weight="bold">斬 首(참수)</text>
    <text x="245" y="170" fill="#d32f2f" font-size="16" font-weight="bold">윤구연 효수</text>
    <!-- 거대하고 예리한 망나니 참수 칼 (왼편에서 대각선으로 꽂힘) -->
    <path d="M 60 60 L 180 230 L 150 240 L 40 80 Z" fill="#b0bec5" stroke="#212121" stroke-width="6"/>
    <!-- 칼날 끝 피흘림 자국 -->
    <path d="M 150 210 L 180 230 L 160 250 Z" fill="#d32f2f"/>
    <circle cx="175" cy="255" r="6" fill="#d32f2f"/>
    <circle cx="190" cy="265" r="4" fill="#d32f2f"/>
    <!-- 칼 손잡이 -->
    <rect x="30" y="40" width="30" height="30" rx="5" fill="#4e342e" stroke="#212121" stroke-width="5" transform="rotate(35 30 40)"/>
    <text x="60" y="30" fill="#d32f2f" font-size="18" font-weight="bold">남대문 앞 군중 앞 공개 처형</text>
  </g>
</svg>
```
