# [소품 목록 + 컷아웃 SVG 초안] 조선의 궁중 셰프 수라간 남성 숙수(대령숙수)와 잔치 요리 비공식 기록

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 대령숙수(남성 셰프) 식도와 무쇠 가마솥 (Daeryeong Suksu Knife & Cauldron)**: 수백 근의 육류를 발골하는 남자 요리사의 거대한 식도와 화력을 다루는 무쇠솥.
2. **궁중 진연의궤 잔치 고임상과 숙수 패찰 (Royal Banquet Goimsang & Badge)**: 수십 척 높이로 화려하게 쌓아 올린 잔치 음식 탑(고임상)과 사선서 소속임을 증명하는 목패.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 대령숙수의 묵직한 조리 식도와 수라간 초대형 무쇠 가마솥
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-chef-knife-cauldron">
    <!-- 수라간 초대형 무쇠 가마솥 (오른편 아래쪽) -->
    <path d="M 150 170 C 150 260 370 260 370 170 Z" fill="#212121" stroke="#000000" stroke-width="6"/>
    <ellipse cx="260" cy="170" rx="110" ry="25" fill="#424242" stroke="#000000" stroke-width="6"/>
    <ellipse cx="260" cy="175" rx="95" ry="18" fill="#d7ccc8" fill-opacity="0.9"/>
    <!-- 가마솥 아래 활활 타오르는 붉은 장작 불꽃 -->
    <path d="M 210 250 Q 230 220 250 250 Q 270 220 290 250 Q 310 220 310 250" stroke="#ff3d00" stroke-width="6" fill="none"/>
    <!-- 조선 남성 셰프 대령숙수의 묵직한 조리 식도 (왼편 위에서 가로지름) -->
    <path d="M 40 80 L 160 100 L 160 140 L 40 110 Z" fill="#b0bec5" stroke="#37474f" stroke-width="5" transform="rotate(-15 40 80)"/>
    <!-- 나무 손잡이 및 칼날 빛남 묘사 -->
    <rect x="160" y="105" width="60" height="25" rx="5" fill="#5d4037" stroke="#3e2723" stroke-width="4" transform="rotate(-15 160 105)"/>
    <text x="70" y="130" fill="#1a237e" font-size="16" font-weight="bold" transform="rotate(-15 70 130)">待令熟手(남성)</text>
    <!-- 뜨거운 김 모락모락 -->
    <path d="M 240 130 Q 250 100 260 130" stroke="#cfd8dc" stroke-width="4" fill="none"/>
    <path d="M 280 120 Q 290 90 300 120" stroke="#cfd8dc" stroke-width="4" fill="none"/>
  </g>
</svg>
```

### S2. 궁중 진연의궤 잔치 고임상(음식탑)과 사선서 숙수 패찰
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-goimsang-badge">
    <!-- 붉은색 궁중 제기 탁자 상 (오른편 바닥) -->
    <rect x="160" y="240" width="200" height="30" rx="4" fill="#b71c1c" stroke="#7f0000" stroke-width="5"/>
    <rect x="180" y="270" width="20" height="20" fill="#7f0000"/>
    <rect x="320" y="270" width="20" height="20" fill="#7f0000"/>
    <!-- 높이 쌓아 올린 궁중 잔치 고임상 음식 탑 (오색 한과 및 떡 탑) -->
    <rect x="180" y="200" width="160" height="40" fill="#fff9c4" stroke="#fbc02d" stroke-width="4"/>
    <rect x="190" y="160" width="140" height="40" fill="#ffcc80" stroke="#f57c00" stroke-width="4"/>
    <rect x="200" y="120" width="120" height="40" fill="#f8bbd0" stroke="#c2185b" stroke-width="4"/>
    <rect x="210" y="80" width="100" height="40" fill="#c8e6c9" stroke="#388e3c" stroke-width="4"/>
    <!-- 고임상 꼭대기 장식 화려한 꽃 진화(상화) -->
    <circle cx="260" cy="65" r="18" fill="#d32f2f" stroke="#b71c1c" stroke-width="3"/>
    <circle cx="260" cy="65" r="8" fill="#ffd54f"/>
    <!-- 사선서 남성 숙수 신분증 나무 목패 (왼편 중앙에 크게 띄움) -->
    <rect x="30" y="80" width="100" height="150" rx="10" fill="#ffecb3" stroke="#5d4037" stroke-width="6" transform="rotate(-10 30 80)"/>
    <text x="50" y="140" fill="#3e2723" font-size="22" font-weight="bold" writing-mode="tb" transform="rotate(-10 50 140)">司膳署</text>
    <text x="80" y="140" fill="#b71c1c" font-size="22" font-weight="bold" writing-mode="tb" transform="rotate(-10 80 140)">熟手</text>
    <circle cx="80" cy="95" r="8" fill="#5d4037" transform="rotate(-10 80 95)"/>
  </g>
</svg>
```
