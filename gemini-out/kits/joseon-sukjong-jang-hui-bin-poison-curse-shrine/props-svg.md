# [소품 목록 + 컷아웃 SVG 초안] 희빈 장씨는 사랑 식어서 사약 받았다? 취선당에 신당 차리고 중전 저주한 흑마술 옥사 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **취선당 신당에서 저주 인형 찌르며 흑마술 부리는 장희빈 (Jang Hui Bin in Curse Shrine)**: 화려한 당의를 입고 거처 취선당 비밀 신당에서 인현왕후 초상화와 저주 인형에 화살과 침을 꽂으며 광기 어린 굿판을 벌이는 장희빈.
2. **저주 굿 발각에 극대노해 사약 내리는 숙종 (King Sukjong Ordering Poison)**: 저주 인형 증거들을 마주하고 극대노해, 울고 있는 세자를 뿌리친 채 사약 그릇과 후궁 승격 금지 교지를 내리치는 국왕 숙종.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 취선당 비밀 신당에서 흉측한 저주 인형을 찌르는 희빈 장씨
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-jang-hui-bin-curse-shrine">
    <!-- 배경: 어둡고 음산한 취선당 비밀 신당(무당 굿판) -->
    <rect x="30" y="30" width="340" height="240" fill="#1b1b1b" stroke="#9c27b0" stroke-width="5" rx="5"/>
    <!-- 무당 굿 깃발과 촛불 -->
    <rect x="60" y="50" width="280" height="40" fill="#212121"/>
    <text x="100" y="77" fill="#ea80fc" font-size="20" font-weight="bold">就善堂 秘密 神堂 (저주 굿)</text>
    <!-- 오른편: 화려한 남색/적색 당의를 입고 광기에 찬 장희빈 -->
    <rect x="200" y="140" width="130" height="130" fill="#311b92" stroke="#ea80fc" stroke-width="3" rx="10"/>
    <circle cx="265" cy="95" r="36" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 가채 머리와 독기 있고 섬뜩한 미소 -->
    <path d="M 230 65 Q 265 50 300 65 L 295 105 L 235 105 Z" fill="#000000"/>
    <circle cx="250" cy="90" r="6" fill="#d32f2f"/>
    <circle cx="280" cy="90" r="6" fill="#d32f2f"/>
    <path d="M 255 110 Q 265 120 275 110" stroke="#d32f2f" stroke-width="3" fill="none"/>
    <!-- 손에 든 저주 침과 인현왕후 초상화 -->
    <rect x="70" y="150" width="90" height="110" fill="#fff9c4" stroke="#d32f2f" stroke-width="3" rx="5"/>
    <circle cx="115" cy="180" r="20" fill="#ffcc80" stroke="#000000" stroke-width="2"/>
    <text x="85" y="245" fill="#d32f2f" font-size="14" font-weight="bold">인현왕후 (저주)</text>
    <!-- 인형에 꽂힌 화살과 침 -->
    <line x1="160" y1="130" x2="115" y2="180" stroke="#ff5252" stroke-width="5" stroke-linecap="round"/>
    <circle cx="160" cy="130" r="6" fill="#ff5252"/>
    <text x="215" y="255" fill="#ea80fc" font-size="16" font-weight="bold">희빈 장씨</text>
    <rect x="50" y="10" width="300" height="30" fill="#ffffff" stroke="#9c27b0" stroke-width="2" rx="5"/>
    <text x="58" y="30" fill="#9c27b0" font-size="13" font-weight="bold">"중전만 죽으면 내가 다시 국모가 되리라! 더 저주해라!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">1701년: 왕궁 내부에 신당 차리고 왕비를 흑마술로 저주한 무고의 옥</text>
  </g>
</svg>
```

### S2. 저주 굿 발각에 극대노해 사약 그릇 내리는 국왕 숙종
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-king-sukjong-ordering-poison">
    <!-- 배경: 분노의 사약 집행 궁궐 편전 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#d32f2f" stroke-width="5" rx="5"/>
    <!-- 중앙: 곤룡포를 입고 극대노한 숙종 -->
    <rect x="140" y="130" width="130" height="140" fill="#b71c1c" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="205" cy="85" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 익선관과 극대노해 불타는 왕의 분노 -->
    <path d="M 175 55 L 235 55 L 225 25 L 185 25 Z" fill="#212121"/>
    <circle cx="190" cy="80" r="6" fill="#000000"/>
    <circle cx="220" cy="80" r="6" fill="#000000"/>
    <path d="M 180 70 L 200 75" stroke="#000000" stroke-width="3"/>
    <path d="M 230 70 L 210 75" stroke="#000000" stroke-width="3"/>
    <path d="M 190 105 Q 205 95 220 105" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 왼편 하단: 검은 사약 그릇 (賜藥) -->
    <rect x="70" y="190" width="60" height="50" fill="#212121" stroke="#ff5252" stroke-width="3" rx="5"/>
    <ellipse cx="100" cy="190" rx="30" ry="10" fill="#d32f2f"/>
    <text x="82" y="222" fill="#ffffff" font-size="16" font-weight="bold">賜藥</text>
    <text x="65" y="255" fill="#ffd54f" font-size="13" font-weight="bold">사약 집행 (1701)</text>
    <!-- 오른편 하단: 후궁 승격 금지 국법 교지 -->
    <rect x="260" y="160" width="90" height="70" fill="#fff9c4" stroke="#d32f2f" stroke-width="3" rx="3" transform="rotate(-10 260 160)"/>
    <text x="275" y="185" fill="#d32f2f" font-size="14" font-weight="bold">後宮陞后</text>
    <text x="275" y="205" fill="#d32f2f" font-size="14" font-weight="bold">永久禁止</text>
    <text x="270" y="222" fill="#000000" font-size="11" font-weight="bold">(왕비 승격 금지)</text>
    <text x="160" y="255" fill="#ffd54f" font-size="16" font-weight="bold">국왕 숙종</text>
    <rect x="50" y="10" width="300" height="30" fill="#ffffff" stroke="#d32f2f" stroke-width="2" rx="5"/>
    <text x="58" y="30" fill="#d32f2f" font-size="13" font-weight="bold">"궁중에서 흑마술을 부려? 당장 사약을 내리고 국법에 박아라!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">무고의 옥: 170명 처벌과 함께 사약 받고 후궁 승격 금지된 장희빈</text>
  </g>
</svg>
```
