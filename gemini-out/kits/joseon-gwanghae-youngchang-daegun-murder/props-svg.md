# [소품 목록 + 컷아웃 SVG 초안] 아홉 살 왕자 방 아궁이에 불을 때어 타 죽게 만들었다? 광해군 시대 영창대군 증살 비극

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **불타는 온돌방 창살에 매달려 울부짖는 아홉 살 영창대군 (Burning Room & Young Prince)**: 빨갛게 달아오르는 끓는 온돌 방바닥의 열기를 피해 눈물 흘리며 창문의 창살을 잡고 매달린 9세 어린 영창대군.
2. **방 밖에서 아궁이에 장작불 때는 정항과 광해군 폐모살제 교지 (Stoking Magistrate & Edict)**: 방 밖에서 악마 같은 표정으로 아궁이에 장작을 마구 쑤셔 넣는 강화부사 정항과, '폐모살제'를 적은 대북파 광해군 정권의 교지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 불타는 온돌방 창살에 매달려 울부짖는 9세 영창대군
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-youngchang-burning-room">
    <!-- 배경: 펄펄 끓어오르는 빨간 온돌방 바닥 (증살 - 蒸殺) -->
    <rect x="40" y="180" width="320" height="90" fill="#bf360c" stroke="#5d4037" stroke-width="5" rx="5"/>
    <path d="M 50 200 Q 100 190 150 200 T 250 200 T 350 200" stroke="#ff6d00" stroke-width="4" fill="none"/>
    <path d="M 60 230 Q 110 220 160 230 T 260 230 T 360 230" stroke="#ffd54f" stroke-width="4" fill="none"/>
    <text x="130" y="260" fill="#ffffff" font-size="16" font-weight="bold">펄펄 끓는 온돌 방바닥 (蒸殺)</text>
    <!-- 상단: 굳게 닫힌 좁은 방의 나무 창문과 창살 -->
    <rect x="130" y="40" width="140" height="120" fill="#8d6e63" stroke="#3e2723" stroke-width="5"/>
    <line x1="165" y1="40" x2="165" y2="160" stroke="#3e2723" stroke-width="4"/>
    <line x1="200" y1="40" x2="200" y2="160" stroke="#3e2723" stroke-width="4"/>
    <line x1="235" y1="40" x2="235" y2="160" stroke="#3e2723" stroke-width="4"/>
    <line x1="130" y1="100" x2="270" y2="100" stroke="#3e2723" stroke-width="4"/>
    <!-- 창살을 붙잡고 매달려 엉엉 우는 아홉 살 어린 영창대군 -->
    <circle cx="200" cy="110" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 어린 왕자의 댕기머리와 눈물 흐르는 비극적 표정 -->
    <path d="M 175 90 Q 200 70 225 90 Z" fill="#212121"/>
    <circle cx="185" cy="110" r="5" fill="#000000"/>
    <circle cx="215" cy="110" r="5" fill="#000000"/>
    <!-- 줄줄 흐르는 눈물과 절규하는 입 -->
    <line x1="185" y1="115" x2="185" y2="135" stroke="#00e5ff" stroke-width="4" stroke-linecap="round"/>
    <line x1="215" y1="115" x2="215" y2="135" stroke="#00e5ff" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="200" cy="125" rx="8" ry="10" fill="#b71c1c"/>
    <!-- 창살을 필사적으로 쥔 어린 두 손 -->
    <circle cx="165" cy="120" r="10" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <circle cx="235" cy="120" r="10" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <text x="40" y="290" fill="#b71c1c" font-size="16" font-weight="bold">1614년 광해군 6년: 9세 어린 왕자의 비극적 최후</text>
  </g>
</svg>
```

### S2. 아궁이에 장작불 때는 강화부사 정항과 폐모살제 교지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-stoking-furnace-edict">
    <!-- 왼편 하단: 방 밖에서 온돌 아궁이에 불을 마구 때는 강화부사 정항 -->
    <rect x="30" y="160" width="140" height="110" fill="#5d4037" stroke="#3e2723" stroke-width="5" rx="5"/>
    <path d="M 60 210 Q 100 170 140 210 L 140 270 L 60 270 Z" fill="#212121"/>
    <!-- 아궁이 속 맹렬히 타오르는 불길과 장작 -->
    <polygon points="80,260 100,210 120,260" fill="#ff6d00"/>
    <polygon points="90,260 100,225 110,260" fill="#ffd54f"/>
    <line x1="70" y1="260" x2="130" y2="245" stroke="#3e2723" stroke-width="8"/>
    <!-- 장작 쑤셔 넣는 정항 -->
    <circle cx="90" cy="120" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <path d="M 65 95 L 115 95 L 105 70 L 75 70 Z" fill="#212121"/>
    <path d="M 80 115 L 90 120 M 100 115 L 90 120" stroke="#212121" stroke-width="3"/>
    <text x="35" y="55" fill="#b71c1c" font-size="15" font-weight="bold">강화부사 정항 (증살 만행)</text>
    <!-- 오른편: 광해군 정권의 폐모살제(廢母殺弟) 및 인조반정 명분 교지 -->
    <rect x="200" y="50" width="170" height="200" fill="#fff9c4" stroke="#8d6e63" stroke-width="5" rx="5"/>
    <text x="220" y="90" fill="#b71c1c" font-size="20" font-weight="bold" font-family="serif">廢母殺弟</text>
    <text x="215" y="125" fill="#212121" font-size="15" font-weight="bold">어머니를 가두고</text>
    <text x="215" y="155" fill="#d32f2f" font-size="16" font-weight="bold">아홉 살 동생을 죽임!</text>
    <text x="215" y="190" fill="#3e2723" font-size="14" font-weight="bold">1623년 인조반정 명분</text>
    <rect x="230" y="210" width="110" height="30" fill="#d32f2f" rx="5"/>
    <text x="245" y="230" fill="#ffffff" font-size="14" font-weight="bold">천륜 파괴 폭군</text>
    <text x="40" y="290" fill="#212121" font-size="14" font-weight="bold">광해군을 파멸로 이끈 한국사 최대 인륜 비극</text>
  </g>
</svg>
```
