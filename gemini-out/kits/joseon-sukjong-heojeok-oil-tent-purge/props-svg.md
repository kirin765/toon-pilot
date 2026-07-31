# [소품 목록 + 컷아웃 SVG 초안] 비 오는 날 왕의 기름 천막을 무단으로 가져갔다가 가문이 멸문당했다? 숙종 19세 경신환국 유악(油幄) 사건 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **왕의 기름 천막(유악) 무단 반출해 잔치 여는 영의정 허적 (Heo Jeok with Royal Oil Tent)**: 쏟아지는 폭우 속에서 왕실을 상징하는 황색 용무늬 기름 방수 천막(유악)을 무단으로 쳐놓고 거만하게 기생과 잔치를 즐기는 남인 영의정 허적.
2. **유악 반출 보고 받고 어좌 걷어차는 19세 숙종 (19-year-old King Sukjong Furious)**: 환관에게 왕실 천막 무단 반출을 보고받고 굳은 표정으로 분노하며 남인 군대 대장들을 파직하는 교지를 던지는 19세의 냉혹하고 결단력 있는 어린 왕 숙종.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 폭우 속에서 왕실 기름 천막(유악) 무단 쳐놓고 잔치 여는 영의정 허적
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-heo-jeok-oil-tent">
    <!-- 배경: 비가 내리는 허적 대감집 마당과 성대한 잔치 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#ffd54f" stroke-width="5" rx="5"/>
    <!-- 쏟아지는 폭우 (Rain) 효과 -->
    <line x1="50" y1="40" x2="40" y2="70" stroke="#90caf9" stroke-width="2"/>
    <line x1="100" y1="50" x2="90" y2="80" stroke="#90caf9" stroke-width="2"/>
    <line x1="320" y1="40" x2="310" y2="70" stroke="#90caf9" stroke-width="2"/>
    <line x1="350" y1="60" x2="340" y2="90" stroke="#90caf9" stroke-width="2"/>
    <!-- 상단: 무단 반출한 왕실 황색 기름 천막 (유악 - 油幄) -->
    <path d="M 40 70 L 360 70 L 340 130 L 60 130 Z" fill="#fbc02d" stroke="#f57f17" stroke-width="4"/>
    <text x="135" y="105" fill="#d32f2f" font-size="20" font-weight="bold">王室 油幄 (왕실 유악)</text>
    <!-- 중앙: 거만하게 술잔 든 남인 영의정 허적 -->
    <rect x="140" y="150" width="120" height="120" fill="#1b5e20" stroke="#ffffff" stroke-width="3" rx="10"/>
    <circle cx="200" cy="110" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 화려한 영의정 사모와 오만하고 탐욕스러운 미소 -->
    <path d="M 170 80 L 230 80 L 220 45 L 180 45 Z" fill="#000000"/>
    <circle cx="190" cy="105" r="5" fill="#000000"/>
    <circle cx="210" cy="105" r="5" fill="#000000"/>
    <path d="M 185 125 Q 200 135 215 125" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 손에 든 술잔과 술상 -->
    <rect x="100" y="210" width="200" height="50" fill="#8d6e63" stroke="#3e2723" stroke-width="3"/>
    <circle cx="170" cy="200" r="12" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"/>
    <rect x="220" y="185" width="25" height="25" fill="#ffffff" stroke="#424242" stroke-width="2"/>
    <text x="110" y="240" fill="#ffffff" font-size="15" font-weight="bold">남인 영수 허적 (잔치)</text>
    <rect x="110" y="15" width="180" height="30" fill="#ffffff" stroke="#d32f2f" stroke-width="2" rx="5"/>
    <text x="118" y="35" fill="#d32f2f" font-size="13" font-weight="bold">"왕의 천막 내 집 마당에 쳐라!"</text>
    <text x="45" y="285" fill="#ffd54f" font-size="15" font-weight="bold">1680년: 왕 허락 없이 왕실 방수 천막 무단으로 쓴 남인 정권</text>
  </g>
</svg>
```

### S2. 유악 무단 반출 보고를 받고 분노하여 남인 숙청 교지 내리는 19세 숙종
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-young-sukjong-furious">
    <!-- 배경: 엄숙하고 살벌한 궁궐 편전 (어좌) -->
    <rect x="30" y="30" width="340" height="240" fill="#b71c1c" stroke="#ffd54f" stroke-width="5" rx="5"/>
    <rect x="60" y="50" width="280" height="50" fill="#212121"/>
    <text x="110" y="82" fill="#ffd54f" font-size="22" font-weight="bold">日月五峰圖 (편전 어좌)</text>
    <!-- 중앙: 눈을 부릅뜬 19세의 승부사 군주 숙종 -->
    <rect x="130" y="140" width="140" height="130" fill="#d32f2f" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="200" cy="95" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 익선관과 날카롭고 카리스마 넘치는 19세 왕의 눈빛 -->
    <path d="M 165 65 L 235 65 L 225 25 L 175 25 Z" fill="#212121"/>
    <polygon points="195,25 205,25 200,10" fill="#212121"/>
    <circle cx="185" cy="90" r="6" fill="#000000"/>
    <circle cx="215" cy="90" r="6" fill="#000000"/>
    <path d="M 175 80 L 195 85" stroke="#000000" stroke-width="3"/>
    <path d="M 225 80 L 205 85" stroke="#000000" stroke-width="3"/>
    <path d="M 185 115 L 215 115" stroke="#b71c1c" stroke-width="4"/>
    <!-- 손에 들고 던지는 파직 및 숙청 교지 (경신환국) -->
    <rect x="230" y="160" width="100" height="70" fill="#fff9c4" stroke="#000000" stroke-width="2" rx="3" transform="rotate(10 230 160)"/>
    <text x="245" y="185" fill="#d32f2f" font-size="15" font-weight="bold">南人 罷職</text>
    <text x="245" y="210" fill="#000000" font-size="14" font-weight="bold">(경신환국)</text>
    <!-- 왼편: 엎드려 보고하는 땀 흘리는 환관 -->
    <circle cx="80" cy="200" r="25" fill="#ffcc80" stroke="#5d4037" stroke-width="2"/>
    <path d="M 50 225 L 110 225 L 100 270 L 60 270 Z" fill="#4e342e"/>
    <text x="50" y="180" fill="#fff9c4" font-size="12">"허적이 유악을..."</text>
    <text x="140" y="250" fill="#ffd54f" font-size="16" font-weight="bold">19세 군주 숙종</text>
    <rect x="140" y="10" width="220" height="30" fill="#ffffff" stroke="#b71c1c" stroke-width="3" rx="5"/>
    <text x="148" y="30" fill="#b71c1c" font-size="13" font-weight="bold">"내 천막을 훔쳐? 남인을 전원 숙청하라!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">경신환국: 천막 도용에 분노한 19세 왕의 냉혹한 정권 교체</text>
  </g>
</svg>
```
