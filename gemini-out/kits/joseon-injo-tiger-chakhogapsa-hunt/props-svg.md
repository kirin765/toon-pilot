# [소품 목록 + 컷아웃 SVG 초안] 궁궐 담장을 넘고 성문 앞에서 사람을 물어갔다? 조선 인조 혜음령 호환과 특수부대 착호갑사

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **궁궐 붉은 담장 넘어 난입하는 거대 식인 호랑이 (Palace Invading Tiger)**: 창덕궁의 기와 담장을 뛰어넘어 이빨과 발톱을 드러내며 궁녀를 위협하는 날카로운 눈빛의 거대 시베리아 호랑이.
2. **조총과 호창 들고 사냥하는 정예 특수부대 착호갑사 (Chakhogapsa Hunter)**: 화승총(조총)을 겨누고 끝이 두 갈래로 갈라진 호창을 굳게 쥐고 식인 맹수에 맞서는 패기 넘치는 착호갑사 특수부대원.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 궁궐 붉은 담장 넘어 궁녀를 위협하는 거대 식인 호랑이
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-palace-invading-tiger">
    <!-- 배경: 어두운 한양 궁궐 후원과 기와 붉은 담장 -->
    <rect x="30" y="30" width="340" height="240" fill="#1b1b1b" stroke="#3e2723" stroke-width="5" rx="5"/>
    <rect x="30" y="150" width="340" height="60" fill="#b71c1c" stroke="#5d4037" stroke-width="4"/>
    <path d="M 30 150 L 370 150 L 370 135 L 30 135 Z" fill="#424242"/>
    <!-- 왼편: 담장을 넘어오는 거대 시베리아 식인 호랑이 -->
    <ellipse cx="140" cy="110" rx="65" ry="45" fill="#ff8f00" stroke="#000000" stroke-width="4"/>
    <circle cx="180" cy="90" r="35" fill="#ff8f00" stroke="#000000" stroke-width="4"/>
    <!-- 검은 줄무늬와 이빨 드러낸 호랑이 표정 -->
    <path d="M 160 60 Q 180 80 160 100" stroke="#000000" stroke-width="4" fill="none"/>
    <path d="M 130 70 Q 150 90 130 110" stroke="#000000" stroke-width="4" fill="none"/>
    <circle cx="190" cy="80" r="6" fill="#ffd54f"/>
    <circle cx="190" cy="80" r="2" fill="#000000"/>
    <!-- 날카로운 송곳니와 붉은 입 -->
    <path d="M 185 100 L 210 100 L 195 120 Z" fill="#b71c1c" stroke="#000000" stroke-width="3"/>
    <polygon points="190,100 193,112 196,100" fill="#ffffff"/>
    <polygon points="200,100 203,112 206,100" fill="#ffffff"/>
    <path d="M 180 120 Q 220 140 210 90" stroke="#ff8f00" stroke-width="12" fill="none" stroke-linecap="round"/>
    <circle cx="210" cy="90" r="10" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <!-- 오른편: 공포에 질려 달아나는 궁녀 -->
    <circle cx="290" cy="170" r="25" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <path d="M 275 195 Q 290 230 305 195" fill="#00838f" stroke="#004d40" stroke-width="3"/>
    <path d="M 285 165 L 295 165" stroke="#000000" stroke-width="3"/>
    <ellipse cx="290" cy="180" rx="6" ry="8" fill="#000000"/>
    <text x="265" y="130" fill="#ffffff" font-size="16" font-weight="bold">"호랑이다!"</text>
    <text x="50" y="250" fill="#ff8f00" font-size="16" font-weight="bold">창덕궁 후원 난입 식인 호랑이</text>
    <text x="45" y="285" fill="#ffffff" font-size="14" font-weight="bold">1624년 인조시대: 한양 도성을 덮친 사상 최악의 호환(虎患)</text>
  </g>
</svg>
```

### S2. 조총과 호창으로 무장하고 맹수 소탕하는 특수부대 착호갑사
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-chakhogapsa-hunter">
    <!-- 왼편: 호랑이 사냥 전용 특수 창(호창)을 든 용맹한 착호갑사 무사 -->
    <rect x="40" y="140" width="120" height="130" fill="#263238" stroke="#000000" stroke-width="4" rx="5"/>
    <circle cx="100" cy="90" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 전립(무관 모자)과 날카로운 눈빛 -->
    <path d="M 65 60 L 135 60 L 110 25 L 90 25 Z" fill="#000000" stroke="#d32f2f" stroke-width="2"/>
    <polygon points="100,10 95,25 105,25" fill="#d32f2f"/>
    <path d="M 85 85 L 100 90" stroke="#000000" stroke-width="4"/>
    <path d="M 115 85 L 100 90" stroke="#000000" stroke-width="4"/>
    <circle cx="90" cy="95" r="4" fill="#000000"/>
    <circle cx="110" cy="95" r="4" fill="#000000"/>
    <!-- 끝이 두 갈래로 갈라진 특수 호창 (虎槍) -->
    <line x1="130" y1="200" x2="220" y2="100" stroke="#5d4037" stroke-width="8" stroke-linecap="round"/>
    <path d="M 220 100 L 240 85 L 230 105 Z" fill="#e0e0e0" stroke="#424242" stroke-width="2"/>
    <path d="M 220 100 L 235 110 L 225 120 Z" fill="#e0e0e0" stroke="#424242" stroke-width="2"/>
    <text x="45" y="240" fill="#ffd54f" font-size="15" font-weight="bold">착호갑사 (호창)</text>
    <!-- 오른편: 화승총(조총)을 불 뿜으며 발사하는 스나이퍼 착호갑사 -->
    <rect x="230" y="140" width="120" height="130" fill="#1b5e20" stroke="#000000" stroke-width="4" rx="5"/>
    <circle cx="290" cy="90" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 255 60 L 325 60 L 300 25 L 280 25 Z" fill="#000000" stroke="#ffd54f" stroke-width="2"/>
    <circle cx="280" cy="95" r="4" fill="#000000"/>
    <circle cx="300" cy="95" r="4" fill="#000000"/>
    <!-- 길고 거대한 화승총 (조총) 발사 -->
    <rect x="180" y="130" width="120" height="15" fill="#3e2723" stroke="#000000" stroke-width="2"/>
    <polygon points="160,130 180,120 180,150" fill="#ff6f00"/>
    <polygon points="150,135 165,125 165,145" fill="#ffd54f"/>
    <text x="235" y="240" fill="#ffffff" font-size="15" font-weight="bold">착호갑사 (조총)</text>
    <text x="40" y="285" fill="#00e5ff" font-size="15" font-weight="bold">500명 동원령: 국가 비상 소탕 작전과 맹수 헌팅</text>
  </g>
</svg>
```
