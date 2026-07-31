# [소품 목록 + 컷아웃 SVG 초안] 죽은 조상과 갓난아기에게 군포를 물리고 모래 쌀을 강매했다? 진주 농민 민란과 안핵사 박규수의 사이다 판결

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **모래 쌀 강매하는 악덕 아전과 봉기한 진주 농민 (Corrupt Official & Peasant)**: 모래 섞인 환곡 쌀주머니를 들이밀며 고리대 세금을 뜯는 탐욕스러운 관아 아전과, 머리에 흰 띠(백건)를 두르고 죽창을 쥐고 분노하며 분연히 일어난 진주 농민.
2. **탐관오리를 처결하고 농민을 구제하는 안핵사 박규수 (Anhaeksa Park Gyusu)**: 사신 관복을 입고 "농민은 무죄! 탐관오리를 엄벌하라!"고 명하는 올곧은 표정의 안핵사 박규수와 부패 관리 처결 명령서.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 모래 쌀 강매하는 악덕 아전과 죽창 들고 봉기한 진주 농민
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-corrupt-official-peasant">
    <!-- 왼편: 모래 섞인 썩은 환곡 쌀을 강매하며 세금 뜯는 악질 관아 아전 -->
    <rect x="30" y="150" width="130" height="120" fill="#4e342e" stroke="#000000" stroke-width="4" rx="5"/>
    <circle cx="95" cy="100" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 아전 방립 모자와 얍삽하고 잔인한 미소 -->
    <path d="M 70 75 L 120 75 L 110 45 L 80 45 Z" fill="#000000"/>
    <circle cx="85" cy="95" r="5" fill="#000000"/>
    <circle cx="105" cy="95" r="5" fill="#000000"/>
    <path d="M 80 115 Q 95 130 110 115" stroke="#b71c1c" stroke-width="4" fill="none"/>
    <!-- 모래와 돌이 섞인 환곡 쌀주머니 -->
    <ellipse cx="130" cy="180" rx="25" ry="30" fill="#d7ccc8" stroke="#5d4037" stroke-width="3"/>
    <circle cx="125" cy="175" r="3" fill="#424242"/>
    <circle cx="135" cy="185" r="4" fill="#424242"/>
    <circle cx="120" cy="190" r="3" fill="#424242"/>
    <text x="110" y="180" fill="#d32f2f" font-size="14" font-weight="bold">모래쌀</text>
    <text x="40" y="240" fill="#ffd54f" font-size="14" font-weight="bold">악덕 아전 (백골징수)</text>
    <!-- 오른편: 머리에 흰 띠를 두르고 죽창을 들고 분노로 봉기한 진주 농민 -->
    <rect x="230" y="150" width="130" height="120" fill="#f5f5f5" stroke="#424242" stroke-width="4" rx="5"/>
    <circle cx="295" cy="100" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 머리에 두른 흰 띠 (백건)와 극대노한 표정 -->
    <rect x="255" y="75" width="80" height="15" fill="#ffffff" stroke="#b71c1c" stroke-width="3"/>
    <path d="M 280 90 L 295 95" stroke="#000000" stroke-width="4"/>
    <path d="M 310 90 L 295 95" stroke="#000000" stroke-width="4"/>
    <ellipse cx="295" cy="115" rx="10" ry="12" fill="#b71c1c"/>
    <!-- 손에 굳게 쥔 날카로운 죽창 (竹槍) -->
    <line x1="210" y1="230" x2="170" y2="70" stroke="#8d6e63" stroke-width="8" stroke-linecap="round"/>
    <polygon points="170,70 165,55 175,55" fill="#d32f2f"/>
    <rect x="240" y="30" width="130" height="35" fill="#ffffff" stroke="#d32f2f" stroke-width="3" rx="5"/>
    <text x="245" y="53" fill="#d32f2f" font-size="14" font-weight="bold">"더 못 참는다!"</text>
    <text x="245" y="240" fill="#212121" font-size="15" font-weight="bold">진주 봉기 농민</text>
    <text x="45" y="285" fill="#d32f2f" font-size="15" font-weight="bold">1862년 철종시대: 삼정의 문란과 수만 명의 농민 항쟁</text>
  </g>
</svg>
```

### S2. 탐관오리를 엄벌하고 농민을 구제하는 안핵사 박규수
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-anhaeksa-park-gyusu">
    <!-- 왼편: 안핵사(특수 조사 사신) 관복을 입은 올곧은 표정의 박규수 -->
    <rect x="40" y="140" width="140" height="130" fill="#1a237e" stroke="#ff8f00" stroke-width="4" rx="5"/>
    <circle cx="110" cy="90" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 사모(사신 모자)와 공정하고 결연한 눈빛 -->
    <path d="M 80 55 L 140 55 L 130 20 L 90 20 Z" fill="#000000" stroke="#212121" stroke-width="2"/>
    <circle cx="135" cy="40" r="12" fill="#000000"/>
    <circle cx="98" cy="90" r="4" fill="#000000"/>
    <circle cx="122" cy="90" r="4" fill="#000000"/>
    <line x1="93" y1="83" x2="105" y2="85" stroke="#000000" stroke-width="3"/>
    <line x1="127" y1="83" x2="115" y2="85" stroke="#000000" stroke-width="3"/>
    <path d="M 103 110 L 117 110" stroke="#212121" stroke-width="4"/>
    <!-- 흉배 (학무늬 관복 장식) -->
    <rect x="90" y="160" width="40" height="40" fill="#ff8f00" stroke="#ffffff" stroke-width="2"/>
    <text x="50" y="240" fill="#ffd54f" font-size="16" font-weight="bold">안핵사 박규수</text>
    <!-- 오른편: 농민 무죄와 탐관오리 처벌을 선언하는 판결문 -->
    <rect x="200" y="60" width="170" height="190" fill="#fff9c4" stroke="#d32f2f" stroke-width="5" rx="10"/>
    <rect x="220" y="80" width="130" height="35" fill="#d32f2f" rx="5"/>
    <text x="240" y="103" fill="#ffffff" font-size="16" font-weight="bold">按覈使 判決</text>
    <text x="215" y="140" fill="#1b5e20" font-size="15" font-weight="bold">"농민은 무죄다!"</text>
    <text x="215" y="165" fill="#212121" font-size="14" font-weight="bold">"백성을 착취한</text>
    <text x="215" y="190" fill="#d32f2f" font-size="15" font-weight="bold">탐관오리가 도적!"</text>
    <rect x="235" y="205" width="100" height="30" fill="#b71c1c" rx="5"/>
    <text x="250" y="225" fill="#ffffff" font-size="14" font-weight="bold">탐관 梟首 (효수)</text>
    <text x="40" y="285" fill="#1a237e" font-size="15" font-weight="bold">탐관오리 효수와 삼정 혁파: 조선을 구한 정의로운 사이다</text>
  </g>
</svg>
```
