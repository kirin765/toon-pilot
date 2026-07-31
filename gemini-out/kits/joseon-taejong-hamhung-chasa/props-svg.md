# [소품 목록 + 컷아웃 SVG 초안] 아들이 보낸 사신들을 화살로 쏴 죽였다? 태조 이성계 함흥차사의 진실

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **분노한 신궁 태조 이성계 강궁과 엎드려 떠는 사신 차사 (Taejo Archery & Terrified Envoy)**: 백발 수염을 휘날리며 아들 이방원을 향한 분노로 거대한 뿔 강궁을 팽팽히 당기는 신궁 이성계와, 화살이 날아와 박히자 식은땀을 흘리며 엎드려 벌벌 떠는 사신.
2. **조사의 무장 반군과 사신 피살을 기록한 태종실록 (Jo Sa-wi Rebellion & Annals)**: 1402년 동북면에서 창칼과 깃발을 들고 일어난 조사의 무장 반군 병사들과, 박순 등 일부 사신 피살 사건의 정사 팩트를 기록한 『태종실록』 서책.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 거대한 강궁을 당기는 분노한 신궁 태조 이성계와 엎드린 사신 차사
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-taejo-archery-envoy">
    <!-- 왼편: 백발 수염을 휘날리며 팽팽한 강궁을 당기는 태조 이성계 -->
    <circle cx="100" cy="110" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <path d="M 60 70 L 140 70 L 120 30 L 80 30 Z" fill="#b71c1c" stroke="#880e4f" stroke-width="3"/>
    <!-- 백발 눈썹과 카리스마 수염 -->
    <path d="M 75 95 L 95 105" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    <path d="M 125 95 L 105 105" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    <path d="M 70 140 Q 100 180 130 140 Z" fill="#ffffff" stroke="#e0e0e0" stroke-width="2"/>
    <!-- 왕실 청색 곤룡포 및 화살 당기는 팔 -->
    <rect x="50" y="155" width="100" height="115" fill="#1565c0" stroke="#0d47a1" stroke-width="5" rx="10"/>
    <!-- 거대한 각궁 (뿔 강궁) -->
    <path d="M 160 50 Q 200 150 160 250" stroke="#3e2723" stroke-width="10" fill="none" stroke-linecap="round"/>
    <line x1="160" y1="50" x2="160" y2="250" stroke="#ffffff" stroke-width="3"/>
    <!-- 날아가는 날카로운 화살 -->
    <line x1="160" y1="150" x2="260" y2="150" stroke="#8d6e63" stroke-width="6"/>
    <polygon points="260,140 285,150 260,160" fill="#424242"/>
    <polygon points="160,140 145,150 160,160" fill="#d32f2f"/>
    <!-- 오른편: 화살이 바로 앞에 박혀 식은땀 흘리며 엎드린 왕실 사신 차사 -->
    <path d="M 285 150 L 300 180" stroke="#424242" stroke-width="6"/>
    <circle cx="330" cy="200" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 295 180 L 365 180 L 350 155 L 310 155 Z" fill="#212121"/>
    <!-- 겁에 질린 식은땀 -->
    <circle cx="310" cy="190" r="6" fill="#00b0ff"/>
    <circle cx="350" cy="195" r="8" fill="#00b0ff"/>
    <rect x="290" y="235" width="80" height="40" fill="#2e7d32" stroke="#1b5e20" stroke-width="4" rx="5"/>
    <text x="70" y="285" fill="#d32f2f" font-size="16" font-weight="bold">야사 속 신궁 이성계의 함흥차사 징벌</text>
  </g>
</svg>
```

### S2. 동북면 조사의의 난 무장 반군과 사신 피살을 기록한 태종실록
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-rebellion-taejong-annals">
    <!-- 오른편: 사신 피살과 조사의의 난 정사를 기록한 태종실록 서책 -->
    <rect x="200" y="50" width="170" height="200" fill="#efebe9" stroke="#5d4037" stroke-width="6" rx="5"/>
    <rect x="220" y="70" width="130" height="160" fill="#ffffff" stroke="#d7ccc8" stroke-width="2"/>
    <text x="240" y="110" fill="#3e2723" font-size="22" font-weight="bold" font-family="serif">太宗實錄</text>
    <text x="235" y="150" fill="#d32f2f" font-size="16" font-weight="bold">1402년 조사의의 난</text>
    <text x="230" y="180" fill="#212121" font-size="15" font-weight="bold">사신 박순 전쟁 피살 팩트</text>
    <path d="M 290 220 L 320 180" stroke="#b71c1c" stroke-width="6" stroke-linecap="round"/>
    <!-- 왼편: 동북면에서 반군 깃발을 들고 일어난 무장 반군 병사들 -->
    <!-- 반군 창칼 및 붉은 군기 깃발 -->
    <polygon points="30,60 120,80 30,110" fill="#d32f2f" stroke="#880e4f" stroke-width="3"/>
    <line x1="30" y1="50" x2="30" y2="250" stroke="#3e2723" stroke-width="6"/>
    <text x="45" y="90" fill="#ffffff" font-size="18" font-weight="bold">趙 (조사의 반군)</text>
    <!-- 반군 투구와 창을 든 병사 -->
    <circle cx="130" cy="150" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 95 130 L 165 130 L 150 100 L 110 100 Z" fill="#424242" stroke="#212121" stroke-width="3"/>
    <rect x="100" y="185" width="60" height="65" fill="#5d4037" stroke="#3e2723" stroke-width="4" rx="5"/>
    <line x1="160" y1="170" x2="190" y2="120" stroke="#90a4ae" stroke-width="6"/>
    <text x="40" y="280" fill="#212121" font-size="16" font-weight="bold">사신 피살의 진짜 원인: 동북면 무장 반란</text>
  </g>
</svg>
```
