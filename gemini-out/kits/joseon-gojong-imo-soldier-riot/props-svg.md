# [소품 목록 + 컷아웃 SVG 초안] 월급 13개월 체불하고 모래와 돌 섞은 쌀을 줬다? 구식군대의 분노가 폭발한 조선 임오군란

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **모래·돌 섞은 쌀 던져주는 선혜청 관리 (Corrupt Granary Official & Sand Rice)**: 13개월 체불 월급이라며 모래와 돌, 썩은 겨가 가득한 쌀주머니를 던져주며 비웃는 얍삽한 선혜청 창고 관리.
2. **모래 쌀을 엎고 분노로 봉기한 구식군인 (Enraged Traditional Soldier Rioter)**: 받은 쌀에 모래가 가득한 것을 확인하고 쌀주머니를 엎어버린 채 극대노하여 창과 총을 들고 선혜청으로 돌격하는 구식군인.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 13개월 체불 급료라며 모래·돌 섞은 쌀 던져주는 선혜청 관리
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-corrupt-granary-official">
    <!-- 배경: 선혜청(宣惠廳) 관청 창고 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#1b1b1b" stroke-width="5" rx="5"/>
    <rect x="50" y="50" width="300" height="40" fill="#1b1b1b"/>
    <text x="140" y="77" fill="#ffffff" font-size="20" font-weight="bold">宣惠廳 (선혜청)</text>
    <!-- 왼편: 모래 섞은 쌀을 배급하며 비웃는 탐관 관리 -->
    <rect x="60" y="140" width="120" height="120" fill="#1b5e20" stroke="#000000" stroke-width="4" rx="5"/>
    <circle cx="120" cy="100" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 관리 사모와 탐욕스럽고 비열한 표정 -->
    <path d="M 95 75 L 145 75 L 135 45 L 105 45 Z" fill="#000000"/>
    <circle cx="110" cy="95" r="5" fill="#000000"/>
    <circle cx="130" cy="95" r="5" fill="#000000"/>
    <path d="M 105 115 Q 120 125 135 115" stroke="#b71c1c" stroke-width="4" fill="none"/>
    <!-- 손에 든 착복한 엽전 뭉치 -->
    <circle cx="70" cy="170" r="15" fill="#fbc02d" stroke="#f57f17" stroke-width="3"/>
    <rect x="65" y="165" width="10" height="10" fill="#3e2723"/>
    <text x="50" y="240" fill="#ffd54f" font-size="14" font-weight="bold">선혜청 아전 (횡령)</text>
    <!-- 오른편: 13개월 만에 지급된 모래+돌+겨가 반인 썩은 월급 쌀 포대 -->
    <ellipse cx="250" cy="190" rx="60" ry="40" fill="#d7ccc8" stroke="#5d4037" stroke-width="4"/>
    <path d="M 210 180 Q 250 160 290 180" stroke="#5d4037" stroke-width="3" fill="none"/>
    <!-- 흘러내리는 쌀 속의 돌과 모래, 썩은 겨 -->
    <circle cx="230" cy="185" r="6" fill="#424242"/>
    <circle cx="250" cy="180" r="7" fill="#424242"/>
    <circle cx="270" cy="190" r="5" fill="#424242"/>
    <circle cx="240" cy="200" r="6" fill="#795548"/>
    <circle cx="260" cy="195" r="8" fill="#424242"/>
    <text x="220" y="170" fill="#d32f2f" font-size="18" font-weight="bold">모래 · 썩은 겨</text>
    <rect x="210" y="110" width="150" height="35" fill="#fff9c4" stroke="#d32f2f" stroke-width="3" rx="5"/>
    <text x="218" y="133" fill="#d32f2f" font-size="14" font-weight="bold">"13개월 월급 옛다!"</text>
    <text x="45" y="285" fill="#ff8f00" font-size="15" font-weight="bold">1882년 고종시대: 군대 월급 13개월 체불과 희대의 모래쌀 횡령</text>
  </g>
</svg>
```

### S2. 모래 쌀 엎어버리고 총과 창을 들어 궁궐로 진격하는 구식군인
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-enraged-soldier-riot">
    <!-- 배경: 붉은 분노의 불길과 항쟁의 거리 -->
    <rect x="30" y="30" width="340" height="240" fill="#b71c1c" stroke="#000000" stroke-width="5" rx="5"/>
    <!-- 불타오르는 봉기 배경 -->
    <path d="M 50 270 L 80 150 L 110 270 Z" fill="#ff8f00" opacity="0.8"/>
    <path d="M 250 270 L 290 130 L 330 270 Z" fill="#ff8f00" opacity="0.8"/>
    <!-- 중앙: 모래 쌀 포대를 발로 걷어차고 극대노한 구식 군인 (무위영 병사) -->
    <rect x="130" y="140" width="140" height="120" fill="#0d47a1" stroke="#ffffff" stroke-width="4" rx="5"/>
    <circle cx="200" cy="90" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 벙거지(구식군인 모자)와 핏발 선 분노 표정 -->
    <ellipse cx="200" cy="55" rx="45" ry="10" fill="#212121"/>
    <path d="M 175 55 L 225 55 L 210 25 L 190 25 Z" fill="#212121"/>
    <path d="M 180 80 L 195 85" stroke="#000000" stroke-width="4"/>
    <path d="M 220 80 L 205 85" stroke="#000000" stroke-width="4"/>
    <circle cx="190" cy="90" r="5" fill="#000000"/>
    <circle cx="210" cy="90" r="5" fill="#000000"/>
    <rect x="190" y="105" width="20" height="15" fill="#424242" rx="3"/>
    <text x="193" y="117" fill="#ffffff" font-size="12" font-weight="bold">으악</text>
    <!-- 손에 쥔 장총 (조총)과 날카로운 창 -->
    <line x1="130" y1="200" x2="60" y2="60" stroke="#424242" stroke-width="10" stroke-linecap="round"/>
    <line x1="270" y1="200" x2="340" y2="60" stroke="#8d6e63" stroke-width="8" stroke-linecap="round"/>
    <polygon points="340,60 330,45 350,45" fill="#ffffff"/>
    <!-- 발아래 엎어진 모래 쌀주머니 -->
    <ellipse cx="200" cy="250" rx="40" ry="15" fill="#d7ccc8"/>
    <text x="175" y="255" fill="#b71c1c" font-size="14" font-weight="bold">모래쌀 엎음</text>
    <rect x="110" y="10" width="180" height="30" fill="#ffffff" stroke="#000000" stroke-width="3" rx="5"/>
    <text x="120" y="30" fill="#d32f2f" font-size="15" font-weight="bold">"모래를 먹으라고?! 쳐라!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">1882년 임오군란: 척족 정권을 붕괴시킨 구식군대의 대폭발</text>
  </g>
</svg>
```
