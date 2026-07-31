# [소품 목록 + 컷아웃 SVG 초안] 계모가 웃으며 건넨 떡을 먹고 피를 토하며 죽었다? 재위 8개월 조선 인종 단명과 문정왕후 독살설

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **웃으며 독떡 건네는 섬뜩한 계모 문정왕후 (Smiling Stepmother & Poison Cake)**: 겉으로는 가식적으로 환하게 웃지만 눈빛엔 서늘한 살기가 도는 채로, 녹색 독기가 모락모락 피어나는 떡 접시를 건네는 문정왕후.
2. **독떡 먹고 피 토하며 쓰러진 30세 인종 (Injong Vomiting Blood)**: 계모의 떡을 의심 없이 먹고 배를 부여잡고 피를 토하며 쓰러진 뼈만 남은 수척하고 비극적인 모습의 인종 임금.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 가식적인 미소로 녹색 독떡 건네는 계모 문정왕후
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-munjeong-poison-cake">
    <!-- 배경: 어둡고 비밀스러운 화려한 궁중 교태전 -->
    <rect x="30" y="30" width="340" height="240" fill="#212121" stroke="#3e2723" stroke-width="5" rx="5"/>
    <rect x="50" y="160" width="300" height="100" fill="#3e2723" stroke="#1b1b1b" stroke-width="4"/>
    <!-- 왼편: 화려한 궁중 대례복을 입고 입은 웃지만 눈은 서늘한 문정왕후 -->
    <rect x="60" y="150" width="120" height="110" fill="#b71c1c" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="120" cy="100" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 가체와 화려한 비녀 장식 -->
    <path d="M 85 75 Q 120 40 155 75" fill="#000000" stroke="#212121" stroke-width="3"/>
    <circle cx="100" cy="65" r="8" fill="#ffd54f"/>
    <circle cx="140" cy="65" r="8" fill="#ffd54f"/>
    <!-- 섬뜩한 가식적 웃음과 차가운 눈빛 -->
    <path d="M 100 90 L 115 95" stroke="#000000" stroke-width="3"/>
    <path d="M 140 90 L 125 95" stroke="#000000" stroke-width="3"/>
    <circle cx="108" cy="95" r="4" fill="#000000"/>
    <circle cx="132" cy="95" r="4" fill="#000000"/>
    <path d="M 105 115 Q 120 130 135 115" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <text x="65" y="220" fill="#ffd54f" font-size="15" font-weight="bold">계모 문정왕후</text>
    <!-- 오른편: 녹색 독기가 모락모락 피어나는 떡 (毒餠) 접시 -->
    <ellipse cx="230" cy="170" rx="35" ry="15" fill="#ffffff" stroke="#9e9e9e" stroke-width="3"/>
    <circle cx="220" cy="160" r="12" fill="#fff59d" stroke="#fbc02d" stroke-width="2"/>
    <circle cx="240" cy="160" r="12" fill="#a5d6a7" stroke="#388e3c" stroke-width="2"/>
    <circle cx="230" cy="150" r="12" fill="#ffab91" stroke="#f4511e" stroke-width="2"/>
    <!-- 녹색 독기 연기 -->
    <path d="M 225 135 Q 215 115 225 95 Q 235 75 225 55" stroke="#00e676" stroke-width="4" fill="none" stroke-dasharray="5 5"/>
    <path d="M 235 135 Q 245 115 235 95" stroke="#00e676" stroke-width="3" fill="none" stroke-dasharray="4 4"/>
    <text x="255" y="140" fill="#00e676" font-size="18" font-weight="bold">毒氣 (독떡!)</text>
    <text x="210" y="220" fill="#ffffff" font-size="14" font-weight="bold">"어서 먹어라 아들아^^"</text>
    <text x="45" y="285" fill="#ff8f00" font-size="15" font-weight="bold">1545년 인종 1년: 야사에 전해지는 소름 돋는 독살 비화</text>
  </g>
</svg>
```

### S2. 독떡 먹고 배 쥐어잡고 피 토하며 쓰러진 30세 인종
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-injong-vomiting-blood">
    <!-- 배경: 쓸쓸한 왕의 침전 병상 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#212121" stroke-width="5" rx="5"/>
    <!-- 쓰러져 배를 쥐어잡고 피를 토하는 효자 임금 인종 -->
    <rect x="100" y="160" width="180" height="80" fill="#d32f2f" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="160" cy="120" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 삐뚤어진 익선관과 극심한 고통 표정 -->
    <path d="M 125 85 L 195 85 L 180 45 L 135 45 Z" fill="#212121" transform="rotate(-15, 160, 85)"/>
    <path d="M 140 105 L 155 110" stroke="#000000" stroke-width="4"/>
    <path d="M 180 105 L 165 110" stroke="#000000" stroke-width="4"/>
    <line x1="145" y1="115" x2="155" y2="115" stroke="#000000" stroke-width="3"/>
    <line x1="165" y1="115" x2="175" y2="115" stroke="#000000" stroke-width="3"/>
    <!-- 입에서 쏟아지는 붉은 피와 이질 탈수 고통 -->
    <path d="M 160 130 Q 180 160 220 155" stroke="#b71c1c" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="225" cy="155" r="8" fill="#b71c1c"/>
    <circle cx="210" cy="170" r="5" fill="#b71c1c"/>
    <!-- 고통스럽게 배를 움켜쥔 떨리는 손 -->
    <circle cx="130" cy="170" r="15" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <text x="50" y="220" fill="#ffffff" font-size="15" font-weight="bold">제12대 인종 (30세)</text>
    <!-- 재위 8개월 최단기 단명 비극 말풍선 -->
    <rect x="200" y="50" width="150" height="80" fill="#ffffff" stroke="#b71c1c" stroke-width="4" rx="5"/>
    <text x="215" y="75" fill="#d32f2f" font-size="16" font-weight="bold">재위 8개월 단명</text>
    <text x="210" y="100" fill="#212121" font-size="13" font-weight="bold">"어머니가 주신 떡인데.."</text>
    <text x="215" y="120" fill="#212121" font-size="13" font-weight="bold">"어찌 이리 배가..."</text>
    <text x="45" y="285" fill="#ffd54f" font-size="15" font-weight="bold">조선 역대 최단기 재위: 고부 갈등이 부른 왕실 비극</text>
  </g>
</svg>
```
