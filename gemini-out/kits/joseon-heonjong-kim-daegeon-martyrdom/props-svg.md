# [소품 목록 + 컷아웃 SVG 초안] 감옥에서 세계지도를 그렸는데 서양 첩자로 몰렸다? 25세 한국 최초 김대건 신부의 순교 비극

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **옥중에서 세계지도 그리는 청년 김대건 신부 (Fr. Kim Daegeon Drawing World Map)**: 포승줄과 옥중 칼을 찬 상태에서도 빛나는 눈빛으로 붓을 들어 조선 관리들에게 서구 세계지도와 라틴어 책을 설명하는 스물다섯 살 김대건 신부.
2. **서양 첩자라며 칼 휘두르는 새남터 망나니 (Saenamteo Executioner & Treason Verdict)**: 바다 멀리 프랑스 군함이 떠 있는 배경 아래, 서양 첩자 사형 선고문을 걸어놓고 한강 새남터 형장에서 처형 대검을 치켜든 조선 망나니.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 옥중에서 형틀을 차고도 세계지도를 그리는 청년 김대건 신부
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-kim-daegeon-drawing-map">
    <!-- 배경: 어두운 포도청 감옥 (옥사) -->
    <rect x="30" y="30" width="340" height="240" fill="#263238" stroke="#111111" stroke-width="5" rx="5"/>
    <line x1="80" y1="30" x2="80" y2="270" stroke="#37474f" stroke-width="6"/>
    <line x1="320" y1="30" x2="320" y2="270" stroke="#37474f" stroke-width="6"/>
    <!-- 중앙: 옥중에서 빛나는 눈빛의 25세 김대건 안드레아 신부 -->
    <rect x="140" y="140" width="120" height="130" fill="#f5f5f5" stroke="#424242" stroke-width="3" rx="10"/>
    <circle cx="200" cy="90" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 상투 갓 대신 단정한 조선 사대부 유학자 복식과 영명한 표정 -->
    <path d="M 175 60 L 225 60 L 215 35 L 185 35 Z" fill="#212121"/>
    <circle cx="190" cy="85" r="5" fill="#000000"/>
    <circle cx="210" cy="85" r="5" fill="#000000"/>
    <path d="M 193 105 Q 200 112 207 105" stroke="#000000" stroke-width="2" fill="none"/>
    <!-- 목에 찬 무거운 나무 형틀 (칼) -->
    <rect x="130" y="125" width="140" height="25" fill="#8d6e63" stroke="#3e2723" stroke-width="3" rx="5" transform="rotate(-5 200 135)"/>
    <circle cx="200" cy="135" r="18" fill="#263238"/>
    <!-- 손에 붓을 들고 바닥에 펼친 서구 세계지도 (World Map) -->
    <rect x="70" y="180" width="130" height="80" fill="#fff9c4" stroke="#8d6e63" stroke-width="2" rx="3" transform="rotate(-10 70 180)"/>
    <circle cx="110" cy="210" r="25" fill="#80deea" stroke="#00838f" stroke-width="1"/>
    <path d="M 95 205 Q 110 195 125 215" fill="#a5d6a7"/>
    <circle cx="150" cy="220" r="20" fill="#80deea" stroke="#00838f" stroke-width="1"/>
    <path d="M 140 215 Q 150 210 160 225" fill="#a5d6a7"/>
    <text x="80" y="250" fill="#d32f2f" font-size="13" font-weight="bold">세계지도 (6개국어)</text>
    <!-- 오른편: 놀란 조선 관리가 보는 라틴어 책 -->
    <rect x="250" y="190" width="70" height="50" fill="#795548" stroke="#3e2723" stroke-width="2" rx="3"/>
    <text x="260" y="220" fill="#ffffff" font-size="14" font-weight="bold">LATIN</text>
    <rect x="140" y="10" width="230" height="30" fill="#ffffff" stroke="#000000" stroke-width="2" rx="5"/>
    <text x="148" y="30" fill="#00796b" font-size="13" font-weight="bold">"세계는 넓습니다! 눈을 떠야 합니다!"</text>
    <text x="40" y="285" fill="#ffd54f" font-size="15" font-weight="bold">1846년 옥중: 조선을 위해 세계지도를 그렸던 25세 사제</text>
  </g>
</svg>
```

### S2. 프랑스 군함 출몰 속에 서양 첩자라며 칼 치켜든 새남터 형장
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-saenamteo-executioner">
    <!-- 배경: 한강 새남터 형장과 바다 멀리 출몰한 프랑스 군함 -->
    <rect x="30" y="30" width="340" height="240" fill="#efebe9" stroke="#5d4037" stroke-width="5" rx="5"/>
    <!-- 바다와 프랑스 군함 3척 출몰 배경 -->
    <rect x="30" y="30" width="340" height="80" fill="#90caf9"/>
    <polygon points="80,70 110,70 95,40" fill="#424242"/>
    <rect x="85" y="65" width="20" height="10" fill="#212121"/>
    <polygon points="280,65 310,65 295,35" fill="#424242"/>
    <rect x="285" y="60" width="20" height="10" fill="#212121"/>
    <text x="120" y="55" fill="#d32f2f" font-size="14" font-weight="bold">프랑스 군함 출몰 위협</text>
    <!-- 중앙: 사형 선고문 (서양 간첩 이적죄) -->
    <rect x="50" y="120" width="100" height="90" fill="#fff9c4" stroke="#b71c1c" stroke-width="3" rx="5"/>
    <text x="60" y="145" fill="#b71c1c" font-size="16" font-weight="bold">邪學 · 敵探</text>
    <text x="55" y="170" fill="#000000" font-size="14" font-weight="bold">서양 첩자 죄</text>
    <text x="60" y="195" fill="#d32f2f" font-size="14" font-weight="bold">(새남터 참살)</text>
    <!-- 오른편: 참수 대검을 치켜든 잔혹한 망나니 -->
    <rect x="210" y="140" width="110" height="120" fill="#d32f2f" stroke="#000000" stroke-width="4" rx="10"/>
    <circle cx="265" cy="95" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 245 75 Q 265 85 285 75" stroke="#000000" stroke-width="4" fill="none"/>
    <circle cx="255" cy="95" r="5" fill="#000000"/>
    <circle cx="275" cy="95" r="5" fill="#000000"/>
    <path d="M 255 115 Q 265 105 275 115" stroke="#b71c1c" stroke-width="4" fill="none"/>
    <!-- 치켜든 무시무시한 참수 칼 (대검) -->
    <path d="M 290 160 L 370 60" stroke="#9e9e9e" stroke-width="12" stroke-linecap="round"/>
    <path d="M 370 60 L 350 45 L 360 40" fill="#ffffff" stroke="#424242" stroke-width="2"/>
    <text x="210" y="240" fill="#ffffff" font-size="15" font-weight="bold">새남터 망나니</text>
    <rect x="150" y="90" width="190" height="30" fill="#ffffff" stroke="#b71c1c" stroke-width="3" rx="5"/>
    <text x="158" y="110" fill="#b71c1c" font-size="13" font-weight="bold">"군함을 끌어들인 첩자다! 쳐라!"</text>
    <text x="45" y="285" fill="#b71c1c" font-size="15" font-weight="bold">1846년 병오박해: 25세 청년 사제가 겪은 비극의 군문효수</text>
  </g>
</svg>
```
