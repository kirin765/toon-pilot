# [소품 목록 + 컷아웃 SVG 초안] 귀국 2달 만에 온몸이 검게 변해 피를 뿜고 죽었다? 인조와 소현세자 독살 의혹

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **서구 천리경 망원경과 아담 샬 신부의 천문학 책 (Western Telescope & Adam Schall Books)**: 청나라 베이징에서 독일 선교사 아담 샬 신부에게 선물 받아 조선에 들여온 서양 황동 천리경(망원경)과, 서구 천주학 및 천문학 서책을 안고 있는 소현세자.
2. **온몸이 검게 변해 피 흘리는 소현세자 시신과 인조 (Poisoned Sohyeon & King Injo)**: 인조실록 기록 그대로 온몸이 시꺼맣게 변하고 일곱 구멍(칠규)에서 붉은 피를 흘리며 쓰러진 33세 소현세자의 시신과, 옆에서 침을 놓은 의관 이형익, 그리고 싸늘한 표정의 인조.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 서구 천리경 망원경과 아담 샬 신부의 천문학 책을 든 소현세자
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-sohyeon-telescope-books">
    <!-- 오른편: 서양 황동 천리경(망원경)을 든 개혁파 소현세자 -->
    <circle cx="260" cy="110" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <!-- 왕세자 익선관 및 곤룡포 -->
    <path d="M 230 70 L 290 70 L 280 40 L 240 40 Z" fill="#212121"/>
    <circle cx="260" cy="65" r="12" fill="#ffd54f"/>
    <!-- 눈망울과 희망에 찬 표정 -->
    <circle cx="245" cy="105" r="5" fill="#000000"/>
    <circle cx="275" cy="105" r="5" fill="#000000"/>
    <path d="M 245 125 L 275 125" stroke="#5d4037" stroke-width="4"/>
    <rect x="210" y="155" width="100" height="115" fill="#1565c0" stroke="#0d47a1" stroke-width="5" rx="10"/>
    <!-- 길게 뻗은 서구 황동 천리경 (망원경) -->
    <polygon points="120,130 240,160 240,180 120,150" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <ellipse cx="120" cy="140" rx="10" ry="15" fill="#00e5ff" stroke="#00838f" stroke-width="3"/>
    <!-- 왼편: 아담 샬 신부의 서양 천문학 서책 및 자명종 시계 -->
    <rect x="40" y="170" width="100" height="80" fill="#efebe9" stroke="#5d4037" stroke-width="5" rx="5"/>
    <text x="50" y="200" fill="#b71c1c" font-size="16" font-weight="bold">西洋 天文學</text>
    <text x="50" y="230" fill="#3e2723" font-size="14" font-weight="bold">아담 샬 신부 선물</text>
    <!-- 자명종 시계 -->
    <circle cx="90" cy="120" r="30" fill="#ffffff" stroke="#ffd54f" stroke-width="6"/>
    <line x1="90" y1="120" x2="90" y2="100" stroke="#212121" stroke-width="3"/>
    <line x1="90" y1="120" x2="105" y2="120" stroke="#212121" stroke-width="3"/>
    <text x="45" y="285" fill="#1565c0" font-size="16" font-weight="bold">조선의 근대화를 꿈꿨던 개혁파 소현세자</text>
  </g>
</svg>
```

### S2. 온몸이 검게 변해 피 흘리는 소현세자 시신과 인조실록 기록
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-poisoned-sohyeon-injo">
    <!-- 하단: 온몸이 숯처럼 검게 변하고 일곱 구멍(칠규)에서 피 흘리는 소현세자 시신 -->
    <rect x="50" y="180" width="300" height="70" fill="#cfd8dc" stroke="#90a4ae" stroke-width="4" rx="10"/>
    <!-- 시꺼맣게 변한 얼굴 빛 (약물 중독 부패 묘사) -->
    <circle cx="100" cy="190" r="35" fill="#455a64" stroke="#263238" stroke-width="4"/>
    <!-- 눈, 코, 입(칠규)에서 쏟아지는 붉은 피 -->
    <line x1="90" y1="180" x2="85" y2="210" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
    <line x1="110" y1="180" x2="115" y2="210" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
    <line x1="100" y1="195" x2="100" y2="225" stroke="#d32f2f" stroke-width="6" stroke-linecap="round"/>
    <text x="80" y="150" fill="#d32f2f" font-size="16" font-weight="bold">온몸이 검게 변함 (毒)</text>
    <!-- 오른편 상단: 싸늘하게 외면하며 의심하는 아버지 인조 임금 -->
    <circle cx="300" cy="90" r="40" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 270 55 L 330 55 L 320 25 L 280 25 Z" fill="#b71c1c"/>
    <path d="M 285 85 L 300 90 M 315 85 L 300 90" stroke="#212121" stroke-width="3"/>
    <path d="M 290 110 L 310 110" stroke="#212121" stroke-width="4"/>
    <!-- 왼편 상단: 번개침(이침)을 놓은 어의 이형익 -->
    <circle cx="160" cy="80" r="30" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <line x1="160" y1="110" x2="120" y2="160" stroke="#00e5ff" stroke-width="5" stroke-linecap="round"/>
    <text x="140" y="50" fill="#3e2723" font-size="14" font-weight="bold">의관 이형익 (이침)</text>
    <text x="40" y="280" fill="#d32f2f" font-size="16" font-weight="bold">1645년 인조실록 23년: 마치 약물 중독 같았다</text>
  </g>
</svg>
```
