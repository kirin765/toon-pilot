# [소품 목록 + 컷아웃 SVG 초안] 목뼈가 부러져 죽은 13세 신부와 1억 원짜리 가발, 영조와 정조의 가체금지령

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **금은보화 장식된 4kg 거대한 조선 가체 가발과 1억 원 엽전 산 (Giant 4kg Gache Wig & Gold Coins)**: 사람 머리카락을 산처럼 거대하게 땋아 올리고 금 비녀, 옥 비녀, 진주 떨잠 등 온갖 보석으로 치장한 4kg 중량의 초대형 가체와 그 가치인 1억 원어치 금은보화 엽전 더미.
2. **가체 무게에 목뼈가 꺾인 어린 신부와 영조의 가체금지령 교지 (Broken Neck Bride & Yeongjo Ban)**: 머리의 엄청난 중량을 견디지 못해 목이 꺾이며 비명을 지르는 13세 신부와, 사치와 비극에 분노하여 가체 전면 금지 및 족두리 착용을 명하는 영조 임금의 교지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 금은보화로 장식된 4kg 거대한 조선 가체 가발과 1억 원 엽전 산
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-giant-gache-coins">
    <!-- 중앙: 산처럼 거대하게 땋아 올린 4kg 조선 얹은머리 가체 (가발) -->
    <path d="M 120 180 Q 80 100 150 60 Q 250 20 320 70 Q 360 130 280 190 Z" fill="#212121" stroke="#000000" stroke-width="4"/>
    <path d="M 140 160 Q 180 80 280 120" stroke="#424242" stroke-width="6" fill="none"/>
    <path d="M 160 100 Q 240 60 300 150" stroke="#424242" stroke-width="6" fill="none"/>
    <!-- 금 비녀와 옥 비녀 장식 (비녀) -->
    <rect x="100" y="120" width="120" height="12" fill="#ffd54f" stroke="#f57c00" stroke-width="2" transform="rotate(-15 100 120)" rx="5"/>
    <rect x="220" y="80" width="100" height="12" fill="#00e5ff" stroke="#00b8d4" stroke-width="2" transform="rotate(25 220 80)" rx="5"/>
    <!-- 진주 및 칠보 떨잠 보석 장신구 -->
    <circle cx="180" cy="80" r="14" fill="#e0f7fa" stroke="#006064" stroke-width="3"/>
    <circle cx="260" cy="110" r="16" fill="#f8bbd0" stroke="#880e4f" stroke-width="3"/>
    <circle cx="220" cy="140" r="12" fill="#fff9c4" stroke="#f57c00" stroke-width="3"/>
    <text x="140" y="145" fill="#ffffff" font-size="20" font-weight="bold">무게 4kg ~ 5kg</text>
    <!-- 하단: 기와집 몇 채 값인 1억 원 상당의 금은보화 및 엽전 산 -->
    <rect x="40" y="210" width="320" height="70" fill="#795548" stroke="#3e2723" stroke-width="5" rx="10"/>
    <circle cx="100" cy="200" r="25" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <rect x="92" y="192" width="16" height="16" fill="#3e2723"/>
    <circle cx="160" cy="190" r="25" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <rect x="152" y="182" width="16" height="16" fill="#3e2723"/>
    <circle cx="220" cy="195" r="25" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <rect x="212" y="187" width="16" height="16" fill="#3e2723"/>
    <circle cx="280" cy="205" r="25" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <rect x="272" y="197" width="16" height="16" fill="#3e2723"/>
    <text x="70" y="260" fill="#ffffff" font-size="22" font-weight="bold">가격 은 1,000냥 (현대 1억 원 값!)</text>
  </g>
</svg>
```

### S2. 4kg 무게에 목뼈가 꺾인 13세 신부와 영조 임금의 가체금지령 교지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-broken-neck-bride-ban">
    <!-- 오른편: 사치와 비극에 분노한 영조 임금의 가체금지령 교지 (두리마리 교지) -->
    <rect x="220" y="40" width="160" height="220" fill="#fff9c4" stroke="#8d6e63" stroke-width="6" rx="5"/>
    <rect x="230" y="50" width="140" height="200" fill="#ffffff" stroke="#d7ccc8" stroke-width="2"/>
    <text x="245" y="90" fill="#b71c1c" font-size="22" font-weight="bold" font-family="serif">加髢禁止令</text>
    <text x="250" y="130" fill="#3e2723" font-size="16" font-weight="bold">가체를 전면 금하고</text>
    <text x="245" y="160" fill="#3e2723" font-size="16" font-weight="bold">족두리만 착용하라!</text>
    <rect x="260" y="180" width="70" height="50" fill="#d32f2f" rx="5"/>
    <text x="270" y="213" fill="#ffffff" font-size="20" font-weight="bold">英祖</text>
    <!-- 왼편: 4kg 가체 무게를 못 이겨 목뼈가 꺾이며 눈물 흘리는 13세 어린 신부 -->
    <!-- 거대 가체 가발이 옆으로 기우는 모습 -->
    <path d="M 40 100 Q 80 40 160 70 Z" fill="#212121" stroke="#000000" stroke-width="4"/>
    <!-- 신부 얼굴 (무게로 고통받으며 목이 꺾임) -->
    <circle cx="100" cy="140" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4" transform="rotate(25 100 140)"/>
    <!-- 눈물 흘리는 표정 -->
    <path d="M 85 130 L 95 135" stroke="#5d4037" stroke-width="3" fill="none"/>
    <path d="M 115 135 L 125 140" stroke="#5d4037" stroke-width="3" fill="none"/>
    <circle cx="90" cy="145" r="5" fill="#00b0ff"/>
    <circle cx="120" cy="150" r="5" fill="#00b0ff"/>
    <!-- 꺾인 목과 활옷 (신부 의상) -->
    <path d="M 90 170 L 110 175" stroke="#d32f2f" stroke-width="8"/>
    <rect x="50" y="180" width="100" height="100" fill="#d32f2f" stroke="#880e4f" stroke-width="5" rx="10"/>
    <text x="30" y="285" fill="#212121" font-size="16" font-weight="bold">13세 어린 신부 목뼈 경추 골절 참극</text>
  </g>
</svg>
```
