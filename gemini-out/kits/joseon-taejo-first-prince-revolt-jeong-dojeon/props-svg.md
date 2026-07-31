# [소품 목록 + 컷아웃 SVG 초안] 개국공신 아버지 돕고도 11세 아기한테 왕위 뺏길 뻔했다? 이방원 1차 왕자의 난 정도전 참살 비극

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **11세 아기 세자 방석 옹립하며 사병 혁파 외치는 정도전 (Jeong Dojeon with Baby Prince)**: 11세의 어린 세자 이방석을 호위하며 조선경국전과 사병 혁파 교지를 쥐고 재상 중심의 국가 체제를 역설하는 조선의 설계자 정도전.
2. **칼을 뽑아들고 밤의 습격 이끄는 철혈 야심가 이방원 (Yi Bangwon Launching Coup)**: 어둠이 깔린 밤, 칠흑 같은 철갑옷을 입고 사병들을 이끌며 정도전과 이복동생 세자를 참살하기 위해 피 묻은 대검을 치켜든 카리스마 넘치는 이방원.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 11세 아기 세자 방석을 호위하며 사병 혁파를 명하는 정도전
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-jeong-dojeon-baby-prince">
    <!-- 배경: 조선 건국 초기 한양 궁궐 편전 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#ffd54f" stroke-width="5" rx="5"/>
    <rect x="60" y="50" width="280" height="45" fill="#1b1b1b"/>
    <text x="110" y="79" fill="#ffd54f" font-size="20" font-weight="bold">朝鮮經國 (재상 중심 정치)</text>
    <!-- 왼편: 11세 막내 아기 세자 이방석 -->
    <rect x="70" y="160" width="90" height="110" fill="#d32f2f" stroke="#ffd54f" stroke-width="3" rx="10"/>
    <circle cx="115" cy="120" r="28" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 세자 익선관과 어리둥절한 어린 표정 -->
    <path d="M 90 95 L 140 95 L 130 65 L 100 65 Z" fill="#212121"/>
    <circle cx="105" cy="115" r="4" fill="#000000"/>
    <circle cx="125" cy="115" r="4" fill="#000000"/>
    <path d="M 110 130 Q 115 135 120 130" stroke="#000000" stroke-width="2" fill="none"/>
    <text x="75" y="240" fill="#ffffff" font-size="13" font-weight="bold">11세 세자 방석</text>
    <!-- 오른편: 사병 혁파를 든 위풍당당한 설계자 정도전 -->
    <rect x="200" y="140" width="120" height="130" fill="#1b5e20" stroke="#ffffff" stroke-width="3" rx="10"/>
    <circle cx="260" cy="95" r="36" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 사모와 위엄 있고 단호한 유학자 표정 -->
    <path d="M 230 65 L 290 65 L 280 30 L 240 30 Z" fill="#000000"/>
    <circle cx="250" cy="90" r="5" fill="#000000"/>
    <circle cx="270" cy="90" r="5" fill="#000000"/>
    <path d="M 255 110 Q 260 115 265 110" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 손에 든 왕자들 사병 혁파 교지 -->
    <rect x="280" y="160" width="80" height="60" fill="#fff9c4" stroke="#d32f2f" stroke-width="2" rx="3" transform="rotate(-10 280 160)"/>
    <text x="290" y="185" fill="#d32f2f" font-size="15" font-weight="bold">私兵 革罷</text>
    <text x="290" y="205" fill="#000000" font-size="13" font-weight="bold">(왕자 군사 해제)</text>
    <text x="215" y="255" fill="#ffd54f" font-size="15" font-weight="bold">재상 정도전</text>
    <rect x="130" y="15" width="230" height="30" fill="#ffffff" stroke="#d32f2f" stroke-width="2" rx="5"/>
    <text x="138" y="35" fill="#d32f2f" font-size="13" font-weight="bold">"왕자들의 모든 사병을 관군에 바쳐라!"</text>
    <text x="40" y="285" fill="#ffd54f" font-size="15" font-weight="bold">1398년: 11세 아기 세자를 세우고 장성한 왕자 군대를 뺏으려 한 비화</text>
  </g>
</svg>
```

### S2. 어둠 속에서 피 묻은 대검을 치켜들고 급습을 주도하는 야심가 이방원
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-yi-bangwon-prince-revolt">
    <!-- 배경: 밤의 반란 (무인정사) 피로 물든 송현과 궐문 -->
    <rect x="30" y="30" width="340" height="240" fill="#1b1b1b" stroke="#b71c1c" stroke-width="5" rx="5"/>
    <!-- 붉은 달과 밤의 쿠데타 분위기 -->
    <circle cx="80" cy="70" r="25" fill="#d32f2f" opacity="0.8"/>
    <!-- 중앙: 철갑옷을 입고 칼을 치켜든 카리스마 이방원 (후일 태종) -->
    <rect x="130" y="140" width="140" height="130" fill="#212121" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="200" cy="95" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 투구(전립)와 날카롭고 매서운 승부사 눈빛 -->
    <path d="M 160 65 L 240 65 L 230 25 L 170 25 Z" fill="#424242" stroke="#ffd54f" stroke-width="2"/>
    <circle cx="185" cy="90" r="6" fill="#b71c1c"/>
    <circle cx="215" cy="90" r="6" fill="#b71c1c"/>
    <path d="M 175 80 L 195 85" stroke="#000000" stroke-width="3"/>
    <path d="M 225 80 L 205 85" stroke="#000000" stroke-width="3"/>
    <path d="M 185 115 L 215 115" stroke="#ffffff" stroke-width="4"/>
    <!-- 손에 치켜든 피 묻은 거대한 참수 칼 (대검) -->
    <path d="M 230 160 L 350 50" stroke="#9e9e9e" stroke-width="12" stroke-linecap="round"/>
    <path d="M 350 50 L 330 40 L 340 35" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <circle cx="300" cy="95" r="8" fill="#d32f2f"/>
    <circle cx="270" cy="120" r="5" fill="#d32f2f"/>
    <!-- 깃발과 참살 선고 -->
    <rect x="50" y="140" width="70" height="90" fill="#b71c1c" stroke="#ffffff" stroke-width="2" rx="3"/>
    <text x="60" y="175" fill="#ffffff" font-size="16" font-weight="bold">戊寅靖社</text>
    <text x="60" y="205" fill="#ffd54f" font-size="14" font-weight="bold">(왕자의 난)</text>
    <text x="150" y="250" fill="#ffd54f" font-size="16" font-weight="bold">정안군 이방원</text>
    <rect x="140" y="10" width="220" height="30" fill="#ffffff" stroke="#b71c1c" stroke-width="3" rx="5"/>
    <text x="148" y="30" fill="#b71c1c" font-size="13" font-weight="bold">"내 칼을 뺏어? 정도전과 방석을 쳐라!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">1차 왕자의 난: 건국 공신의 피로 쓴 조선 초기 최대 유혈 쿠데타</text>
  </g>
</svg>
```
