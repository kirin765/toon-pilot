# [소품 목록 + 컷아웃 SVG 초안] 조선 사약(賜藥)의 진실, 즉사하는 사극 독약이 아니라 온돌방을 지펴야 죽는 시신 보존형 VIP 형벌

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 왕실 사약(賜藥) 사발과 국왕 교지 상자 (Sayak Bowl & Royal Edict Box)**: 임금이 하사한다는 뜻의 붉은 교지 합과 비상·부자 독초를 달여 담은 흑갈색 사약 사기그릇.
2. **사약 처형용 절절 끓는 군불 온돌 아궁이 (Roasting Ondol Furnace)**: 독성 흡수와 화학 반응을 가속하기 위해 장작을 맹렬히 지피던 붉은 불꽃 아궁이와 쩔쩔 끓는 구들장 온돌 바닥.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 국왕 하사품 붉은 교지 상자와 흑갈색 사약 사발
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-sayak-bowl-box">
    <!-- 국왕 교지 담은 왕실 옻칠 약상자 (오른편 아래쪽) -->
    <rect x="180" y="160" width="180" height="90" rx="8" fill="#b71c1c" stroke="#7f0000" stroke-width="6"/>
    <rect x="250" y="150" width="40" height="20" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <text x="235" y="215" fill="#ffd54f" font-size="22" font-weight="bold">賜 藥(하사)</text>
    <!-- 사약 담은 큰 흑갈색 사기그릇 사발 (왼편 중앙에 띄움) -->
    <ellipse cx="120" cy="140" rx="80" ry="25" fill="#3e2723" stroke="#212121" stroke-width="6"/>
    <path d="M 40 140 C 40 210 200 210 200 140 Z" fill="#4e342e" stroke="#212121" stroke-width="6"/>
    <!-- 사발 속 칠흑 같이 어두운 비소·부자 독물 액체 -->
    <ellipse cx="120" cy="145" rx="70" ry="18" fill="#1b0000"/>
    <!-- 독한 약기운 모락모락 보라색 김 -->
    <path d="M 90 120 Q 100 80 110 120" stroke="#9c27b0" stroke-width="5" fill="none"/>
    <path d="M 130 110 Q 140 70 150 110" stroke="#9c27b0" stroke-width="5" fill="none"/>
    <text x="65" y="260" fill="#212121" font-size="16" font-weight="bold">시신 보존 VIP 형벌</text>
  </g>
</svg>
```

### S2. 독성 흡수를 위해 장작불을 지피는 절절 끓는 온돌 아궁이
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-ondol-furnace">
    <!-- 절절 끓는 뜨거운 온돌 방바닥 구들장 단면 (상단 배경) -->
    <rect x="20" y="40" width="360" height="90" fill="#ffcc80" stroke="#e65100" stroke-width="6"/>
    <line x1="20" y1="85" x2="380" y2="85" stroke="#e65100" stroke-width="4" stroke-dasharray="10,10"/>
    <text x="110" y="75" fill="#d32f2f" font-size="20" font-weight="bold">온돌방 가열 (체온 상승)</text>
    <!-- 하단 맹렬히 타오르는 아궁이와 장작불 -->
    <path d="M 80 130 L 320 130 L 320 280 L 80 280 Z" fill="#424242" stroke="#212121" stroke-width="6"/>
    <path d="M 130 280 A 70 70 0 0 1 270 280 Z" fill="#000000" stroke="#212121" stroke-width="6"/>
    <!-- 타오르는 붉은색·노란색 장작 불꽃 -->
    <path d="M 170 280 Q 190 200 200 240 Q 210 180 230 280 Z" fill="#ff3d00"/>
    <path d="M 185 280 Q 200 220 215 280 Z" fill="#ffd54f"/>
    <!-- 아궁이 속 참나무 장작 -->
    <rect x="160" y="260" width="80" height="15" rx="5" fill="#5d4037" transform="rotate(-15 160 260)"/>
    <rect x="170" y="265" width="80" height="15" rx="5" fill="#3e2723" transform="rotate(10 170 265)"/>
    <text x="125" y="165" fill="#fff59d" font-size="16" font-weight="bold">독성 혈액 순환 가속</text>
  </g>
</svg>
```
