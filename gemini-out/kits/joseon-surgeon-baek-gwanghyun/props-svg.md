# [소품 목록 + 컷아웃 SVG 초안] 조선의 외과의사 백광현과 종기 수술 '치종남지'

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **백광현의 종기 절개 수술칼과 치종남지 의서 (Surgical Scalpel & Chijongnamji)**: 종기 악창을 과감히 절개하고 배액한 조선 실전 외과 수술칼(치종침)과 외과 비법서.
2. **어의 승진 교지 임명장과 고름 배액 사발 (Royal Diploma & Drainage Bowl)**: 천한 마의 신분에서 종1품 어의로 벼슬이 오른 교지 문서와 독한 종기 농을 받아낸 도자기 사발.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 백광현의 종기 수술 칼(치종침)과 '치종남지' 외과 의서
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-surgeon-scalpel">
    <!-- 치종남지 외과 의서 (왼편) -->
    <rect x="40" y="60" width="160" height="200" rx="4" fill="#3e2723" stroke="#000000" stroke-width="6"/>
    <rect x="55" y="80" width="45" height="140" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <text x="68" y="125" fill="#3e2723" font-size="20" font-weight="bold" writing-mode="tb">治腫指南</text>
    <line x1="120" y1="80" x2="120" y2="230" stroke="#a1887f" stroke-width="3" stroke-dasharray="6,4"/>
    <line x1="160" y1="80" x2="160" y2="230" stroke="#a1887f" stroke-width="3" stroke-dasharray="6,4"/>
    <!-- 백광현의 날카로운 외과 수술칼 및 굵은 침 (오른편 가로지름) -->
    <path d="M 180 200 L 350 70" stroke="#78909c" stroke-width="14" stroke-linecap="round"/>
    <path d="M 180 200 L 350 70" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    <!-- 칼날 끝의 붉은 피와 황색 종기 농 묘사 -->
    <path d="M 330 60 L 360 60 L 345 85 Z" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <circle cx="355" cy="55" r="8" fill="#ffb300" stroke="#ff8f00" stroke-width="2"/>
    <!-- 수술칼 손잡이 나무 재질 -->
    <rect x="170" y="190" width="50" height="25" rx="6" fill="#5d4037" stroke="#3e2723" stroke-width="4" transform="rotate(-37 170 190)"/>
  </g>
</svg>
```

### S2. 어의 승진 교지 문서와 종기 고름을 받아낸 도자기 배액 사발
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-royal-diploma">
    <!-- 왕이 내린 어의 임명장 교지 (왼편 펼쳐진 한지) -->
    <rect x="30" y="50" width="200" height="150" rx="6" fill="#fff8e1" stroke="#8d6e63" stroke-width="6" transform="rotate(-6 30 50)"/>
    <text x="60" y="100" fill="#b71c1c" font-size="22" font-weight="bold" transform="rotate(-6 60 100)">御醫 白光炫</text>
    <text x="65" y="135" fill="#3e2723" font-size="16" font-weight="bold" transform="rotate(-6 65 135)">崇祿大夫 (종1품)</text>
    <circle cx="180" cy="150" r="22" fill="#d32f2f" fill-opacity="0.8" transform="rotate(-6 180 150)"/>
    <!-- 종기 고름과 배액을 받아낸 도자기 수술 사발 (오른편 아래) -->
    <path d="M 220 180 Q 220 260 300 260 Q 380 260 380 180 Z" fill="#eceff1" stroke="#455a64" stroke-width="6"/>
    <ellipse cx="300" cy="180" rx="80" ry="20" fill="#cfd8dc" stroke="#455a64" stroke-width="6"/>
    <!-- 사발 안의 황색 농(고름)과 수술 액체 -->
    <ellipse cx="300" cy="185" rx="60" ry="12" fill="#ffca28" fill-opacity="0.8"/>
    <!-- 사발 옆에 놓인 수술용 약솜 한지 -->
    <circle cx="210" cy="230" r="18" fill="#ffffff" stroke="#b0bec5" stroke-width="4"/>
  </g>
</svg>
```
