# [소품 목록 + 컷아웃 SVG 초안] 3대 왕비를 전부 자기 친정 여인으로 뽑았다? 조선을 삼킨 왕비 감별사 순원왕후 안동 김씨

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **왕비 간택 심사하는 왕비 감별사 순원왕후와 안동 김씨 처녀들 (Queen Maker Sunwon & Candidates)**: 화려한 대왕대비 보위에 앉아 돋보기를 들고 날카롭게 심사하며 친정 안동 김씨 처녀만 합격시키는 왕비 감별사 순원왕후.
2. **수렴청정 발(주렴) 뒤의 순원왕후와 허수아비 철종, 세도 가계도 (Regency Curtain & Puppet King)**: 발(주렴) 뒤에서 권력을 지휘하는 순원왕후와 꼭두각시처럼 땀 흘리는 철종 임금, 그리고 3대 연속 안동 김씨 왕비 싹쓸이를 적은 왕실 가계도.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 왕비 간택 심사에서 안동 김씨만 골라내는 감별사 순원왕후
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-sunwon-queen-maker">
    <!-- 오른편: 대왕대비 보위에 앉아 돋보기 들고 심사하는 순원왕후 -->
    <circle cx="280" cy="110" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <!-- 대왕대비 화려한 가채와 비녀 장식 -->
    <path d="M 235 90 Q 280 30 325 90 Z" fill="#212121"/>
    <circle cx="250" cy="80" r="10" fill="#ffd54f"/>
    <circle cx="310" cy="80" r="10" fill="#ffd54f"/>
    <rect x="235" y="65" width="90" height="20" fill="#b71c1c" rx="5"/>
    <!-- 권력자의 도도하고 눈 끝 올라간 감별사 표정 -->
    <path d="M 260 100 L 275 105" stroke="#212121" stroke-width="4"/>
    <path d="M 300 100 L 285 105" stroke="#212121" stroke-width="4"/>
    <circle cx="265" cy="110" r="5" fill="#000000"/>
    <circle cx="295" cy="110" r="5" fill="#000000"/>
    <path d="M 270 130 L 290 130" stroke="#d32f2f" stroke-width="4"/>
    <rect x="230" y="155" width="100" height="115" fill="#b71c1c" stroke="#880e4f" stroke-width="5" rx="10"/>
    <!-- 손에 쥔 금장 돋보기 (왕비 감별기) -->
    <circle cx="200" cy="130" r="25" fill="none" stroke="#ffd54f" stroke-width="6"/>
    <line x1="220" y1="150" x2="250" y2="180" stroke="#5d4037" stroke-width="8" stroke-linecap="round"/>
    <!-- 왼편: 심사받는 처녀들과 안동 김씨 '합격' 표지 -->
    <circle cx="80" cy="140" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 45 140 Q 80 80 115 140 Z" fill="#212121"/>
    <rect x="50" y="175" width="60" height="95" fill="#e1bee7" stroke="#8e24aa" stroke-width="4" rx="5"/>
    <rect x="40" y="200" width="80" height="40" fill="#fff9c4" stroke="#f57c00" stroke-width="3" rx="5"/>
    <text x="45" y="225" fill="#d32f2f" font-size="14" font-weight="bold">安東 金氏 (합격)</text>
    <text x="40" y="285" fill="#b71c1c" font-size="16" font-weight="bold">3대 왕비를 연속 독점한 안동 김씨 킹메이커</text>
  </g>
</svg>
```

### S2. 수렴청정 발(주렴) 뒤의 순원왕후와 허수아비 철종, 세도 가계도
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-regency-curtain-cheoljong">
    <!-- 왼편 상단: 주렴(왕실 발) 뒤에서 명령 내리는 대왕대비 순원왕후 -->
    <rect x="30" y="40" width="140" height="140" fill="#fff9c4" opacity="0.8" stroke="#8d6e63" stroke-width="4" stroke-dasharray="5,5"/>
    <circle cx="100" cy="100" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <text x="50" y="60" fill="#b71c1c" font-size="16" font-weight="bold">垂簾聽政 (수렴청정)</text>
    <!-- 오른편: 꼭두각시 허수아비 철종 임금 -->
    <circle cx="280" cy="130" r="40" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 250 95 L 310 95 L 300 65 L 260 65 Z" fill="#212121"/>
    <!-- 땀 흘리며 권력자 할머니 눈치 보는 철종 -->
    <circle cx="265" cy="125" r="5" fill="#000000"/>
    <circle cx="295" cy="125" r="5" fill="#000000"/>
    <circle cx="255" cy="115" r="6" fill="#00e5ff"/>
    <path d="M 270 150 Q 280 140 290 150" stroke="#5d4037" stroke-width="3" fill="none"/>
    <rect x="240" y="170" width="80" height="100" fill="#1565c0" stroke="#0d47a1" stroke-width="4" rx="10"/>
    <line x1="280" y1="170" x2="280" y2="250" stroke="#ffd54f" stroke-width="4"/>
    <!-- 중앙 하단: 순조-헌종-철종 안동 김씨 왕비 3대 싹쓸이 가계도 -->
    <rect x="50" y="200" width="160" height="70" fill="#ffffff" stroke="#d32f2f" stroke-width="4" rx="5"/>
    <text x="60" y="225" fill="#212121" font-size="13" font-weight="bold">순조 정비: 순원왕후 (김씨)</text>
    <text x="60" y="245" fill="#212121" font-size="13" font-weight="bold">헌종 정비: 효현왕후 (김씨)</text>
    <text x="60" y="265" fill="#d32f2f" font-size="13" font-weight="bold">철종 정비: 철인왕후 (김씨)</text>
    <text x="50" y="290" fill="#212121" font-size="14" font-weight="bold">60년 안동 김씨 외척 왕실 독점의 실체</text>
  </g>
</svg>
```
