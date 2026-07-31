# [소품 목록 + 컷아웃 SVG 초안] 조선의 배달 민족, 18세기 한양 냉면 배달과 '효종갱'

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **18세기 한양 냉면 배달 목기 상자와 얼음 사발 (Naengmyeon Delivery Box & Bowl)**: 실학자 황윤석의 일기에 기록된 유생들의 스터디 배달 음식 냉면 나무 상자와 냉육수 사발.
2. **성균관 효종갱 보온 솜 항아리와 주문서 (Hyojonggaeng Cotton Pot & Order Slip)**: 새벽 종 울릴 때 따뜻하게 배달하기 위해 항아리 겉을 솜으로 두껍게 싼 해장국 항아리와 양반의 배달 주문서.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 18세기 한양 냉면 배달 나무 상자와 얼음 냉육수 사발
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-naengmyeon-box">
    <!-- 조선 배달용 2단 목기 나무 상자 (왼편 배경) -->
    <rect x="40" y="80" width="160" height="180" rx="8" fill="#6d4c41" stroke="#3e2723" stroke-width="6"/>
    <line x1="40" y1="160" x2="200" y2="160" stroke="#3e2723" stroke-width="6"/>
    <rect x="100" y="50" width="40" height="30" rx="4" fill="none" stroke="#3e2723" stroke-width="6"/>
    <text x="65" y="130" fill="#fff9c4" font-size="18" font-weight="bold">冷麵(냉면)</text>
    <!-- 얼음 둥둥 뜬 시원한 한양 냉면 도자기 사발 (오른편 앞쪽) -->
    <path d="M 180 180 Q 180 270 280 270 Q 380 270 380 180 Z" fill="#eceff1" stroke="#455a64" stroke-width="6"/>
    <ellipse cx="280" cy="180" rx="100" ry="25" fill="#cfd8dc" stroke="#455a64" stroke-width="6"/>
    <!-- 시원한 살얼음 동동 육수와 메밀 면발 묘사 -->
    <ellipse cx="280" cy="185" rx="80" ry="18" fill="#80deea" fill-opacity="0.8"/>
    <path d="M 230 185 Q 280 160 330 185" stroke="#a1887f" stroke-width="8" fill="none"/>
    <!-- 둥둥 뜬 살얼음 조각 및 삶은 계란 반쪽 -->
    <rect x="250" y="175" width="20" height="12" rx="2" fill="#ffffff" stroke="#80deea" stroke-width="2" transform="rotate(-15 250 175)"/>
    <circle cx="295" cy="180" r="14" fill="#ffffff" stroke="#fbc02d" stroke-width="4"/>
  </g>
</svg>
```

### S2. 새벽 배송 효종갱 보온 솜 항아리와 한양 양반 배달 주문 편지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-hyojonggaeng-pot">
    <!-- 효종갱 솜 항아리 (오른편 중앙) - 열 보존을 위해 흰 솜(구름 모양)으로 싸여 있음 -->
    <path d="M 180 150 C 180 260 360 260 360 150 C 360 90 180 90 180 150 Z" fill="#4e342e" stroke="#263238" stroke-width="6"/>
    <!-- 두툼하게 두른 흰색 보온 솜 패키징 (항아리 중간 칭칭 감쌈) -->
    <path d="M 170 160 Q 200 130 230 160 Q 270 130 310 160 Q 350 130 370 160 Q 370 210 330 210 Q 280 230 230 210 Q 180 230 170 160 Z" fill="#f5f5f5" stroke="#b0bec5" stroke-width="5" fill-opacity="0.9"/>
    <!-- 항아리 위쪽 김(따뜻한 온기) 모락모락 -->
    <path d="M 250 70 Q 260 50 270 70" stroke="#cfd8dc" stroke-width="4" stroke-linecap="round" fill="none"/>
    <path d="M 280 60 Q 290 40 300 60" stroke="#cfd8dc" stroke-width="4" stroke-linecap="round" fill="none"/>
    <text x="235" y="185" fill="#d32f2f" font-size="16" font-weight="bold">曉鐘羹 (보온솜)</text>
    <!-- 한양 양반의 새벽 배송 배달 주문서 편지 (왼편 아래 가로지름) -->
    <rect x="30" y="120" width="140" height="150" rx="4" fill="#fff9c4" stroke="#8d6e63" stroke-width="5" transform="rotate(-12 30 120)"/>
    <text x="50" y="170" fill="#3e2723" font-size="18" font-weight="bold" transform="rotate(-12 50 170)">曉鐘 注文</text>
    <text x="55" y="200" fill="#d32f2f" font-size="14" font-weight="bold" transform="rotate(-12 55 200)">새벽 배송</text>
    <path d="M 50 220 L 140 220 M 50 240 L 120 240" stroke="#5d4037" stroke-width="3" transform="rotate(-12 50 220)"/>
  </g>
</svg>
```
