# [소품 목록 + 컷아웃 SVG 초안] 조선의 방탄복, 종이 갑옷(지갑)과 엄심갑

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 종이갑옷 지갑 (Joseon Paper Armor Jigap)**: 한지를 30겹 이상 겹치고 옻칠을 해 황갈색/흑흑색 광택이 나며, 놋쇠 징(두정)이 일정하게 박힌 전통 포형 종이 갑옷.
2. **구부러진 왜구 화살과 엄심갑 (Deflected Arrow & Chest Armor)**: 가슴 앞을 가리는 튼튼한 종이 흉갑(엄심갑)에 꽂혔으나 뚫지 못하고 앞이 구부러진 왜군의 화살.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 조선군 지갑(종이 갑옷) 상의
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-paper-armor">
    <!-- 갑옷 몸통 (황갈색 기름/옻칠 종이 재질감) -->
    <path d="M 100 80 L 150 50 L 250 50 L 300 80 L 320 180 L 280 250 L 120 250 L 80 180 Z" fill="#8d6e63" stroke="#3e2723" stroke-width="8" stroke-linejoin="round"/>
    <!-- 목깃과 어깨 장식 보강재 -->
    <path d="M 150 50 C 180 80 220 80 250 50" fill="none" stroke="#212121" stroke-width="10"/>
    <rect x="180" y="50" width="40" height="25" rx="4" fill="#5d4037" stroke="#212121" stroke-width="4"/>
    <!-- 한지 30겹 박음질 및 두정(놋쇠 못) 패턴 요약 -->
    <line x1="120" y1="110" x2="280" y2="110" stroke="#5d4037" stroke-width="4" stroke-dasharray="10,5"/>
    <line x1="110" y1="150" x2="290" y2="150" stroke="#5d4037" stroke-width="4" stroke-dasharray="10,5"/>
    <line x1="120" y1="190" x2="280" y2="190" stroke="#5d4037" stroke-width="4" stroke-dasharray="10,5"/>
    <line x1="130" y1="230" x2="270" y2="230" stroke="#5d4037" stroke-width="4" stroke-dasharray="10,5"/>
    <!-- 놋쇠 징(두정) 컷아웃 점들 -->
    <circle cx="140" cy="110" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="200" cy="110" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="260" cy="110" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="150" cy="150" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="200" cy="150" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="250" cy="150" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="160" cy="190" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="200" cy="190" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <circle cx="240" cy="190" r="5" fill="#ffd54f" stroke="#3e2723" stroke-width="2"/>
    <!-- 허리띠 (광다회) -->
    <rect x="110" y="170" width="180" height="20" fill="#b71c1c" stroke="#7f0000" stroke-width="4"/>
  </g>
</svg>
```

### S2. 엄심갑과 튕겨 나가 구부러진 화살촉
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-deflected-arrow">
    <!-- 엄심갑 (가슴 보호 종이 보호대 - 한지 겹침 질감) -->
    <rect x="80" y="80" width="200" height="180" rx="15" fill="#a1887f" stroke="#3e2723" stroke-width="8"/>
    <path d="M 80 120 L 280 120 M 80 160 L 280 160 M 80 200 L 280 200" stroke="#5d4037" stroke-width="5" stroke-dasharray="15,8"/>
    <!-- 갑옷 끈 (어깨 매듭) -->
    <path d="M 110 80 Q 110 40 140 30 M 250 80 Q 250 40 220 30" fill="none" stroke="#212121" stroke-width="8" stroke-linecap="round"/>
    <!-- 꽂혔으나 뚫지 못하고 충격으로 휘어버린 왜구 화살 -->
    <path d="M 360 60 L 240 140 L 230 155" fill="none" stroke="#3e2723" stroke-width="10" stroke-linecap="round"/>
    <!-- 깃털 (화살깃) -->
    <path d="M 360 60 L 375 45 M 350 70 L 365 55 M 360 60 L 375 75 M 350 70 L 365 85" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
    <!-- 구부러진 쇠 화살촉 (충격 흡수 팩트체크) -->
    <path d="M 230 155 L 210 160 L 220 175 Z" fill="#cfd8dc" stroke="#212121" stroke-width="5"/>
    <!-- 튕겨 나가는 스파이크 충격 효과선 -->
    <line x1="200" y1="135" x2="180" y2="120" stroke="#ffeb3b" stroke-width="6" stroke-linecap="round"/>
    <line x1="195" y1="165" x2="165" y2="165" stroke="#ffeb3b" stroke-width="6" stroke-linecap="round"/>
    <line x1="210" y1="185" x2="190" y2="205" stroke="#ffeb3b" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```
