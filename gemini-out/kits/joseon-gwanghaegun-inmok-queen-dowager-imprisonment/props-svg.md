# [소품 목록 + 컷아웃 SVG 초안] 중립외교 명군 광해군, 알고 보니 9세 동생 방에 불 때서 죽이고 계모 가뒀다? 폐모살제 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **서궁에 유폐되어 눈물 흘리는 인목대비 (Imprisoned Queen Dowager Inmok)**: 화려한 대비 왕관을 뺏긴 채 소박하고 초라한 소복을 입고, 굳게 잠긴 서궁(경운궁) 감옥 바닥에 앉아 억울함에 피눈물을 흘리며 계축일기를 쓰는 인목대비.
2. **아궁이에 불 때서 9세 영창대군 타 죽게 하는 강화 부사 정항 (Magistrate Burning 9yo Prince Yeongchang)**: 강화도 유배지 온돌방 안에 9세 어린 영창대군을 가둬놓고, 밑에 장작 아궁이에 맹렬한 장작불을 지펴 방바닥을 펄펄 끓게 만들어 증살시키는 잔혹한 관리 정항.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 굳게 닫힌 서궁에 유폐되어 피눈물 쏟아내는 왕모 인목대비
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-queen-dowager-inmok-imprisoned">
    <!-- 배경: 어둡고 차가운 서궁(경운궁) 유폐 감옥 벽과 창살 -->
    <rect x="30" y="30" width="340" height="240" fill="#263238" stroke="#37474f" stroke-width="5" rx="5"/>
    <!-- 감옥 나무 창살과 굳게 잠긴 자물쇠 -->
    <line x1="100" y1="30" x2="100" y2="270" stroke="#000000" stroke-width="8"/>
    <line x1="180" y1="30" x2="180" y2="270" stroke="#000000" stroke-width="8"/>
    <line x1="260" y1="30" x2="260" y2="270" stroke="#000000" stroke-width="8"/>
    <rect x="165" y="140" width="30" height="40" fill="#ffd54f" stroke="#000000" stroke-width="2" rx="5"/>
    <!-- 중앙: 초라한 흰색 소복을 입고 통곡하는 인목대비 -->
    <rect x="150" y="150" width="120" height="120" fill="#eceff1" stroke="#90a4ae" stroke-width="3" rx="10"/>
    <circle cx="210" cy="105" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 대비 첩지 머리와 비통하게 흐르는 눈물 -->
    <path d="M 180 80 Q 210 65 240 80 L 235 120 L 185 120 Z" fill="#212121"/>
    <circle cx="195" cy="100" r="4" fill="#000000"/>
    <circle cx="225" cy="100" r="4" fill="#000000"/>
    <!-- 피눈물 -->
    <path d="M 195 105 L 195 125" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/>
    <path d="M 225 105 L 225 125" stroke="#0288d1" stroke-width="3" stroke-linecap="round"/>
    <path d="M 200 120 Q 210 115 220 120" stroke="#000000" stroke-width="2" fill="none"/>
    <!-- 바닥에 놓인 계축일기 책 -->
    <rect x="250" y="210" width="70" height="50" fill="#fff9c4" stroke="#5d4037" stroke-width="2" rx="3" transform="rotate(-15 250 210)"/>
    <text x="260" y="235" fill="#d32f2f" font-size="14" font-weight="bold">癸丑日記</text>
    <text x="260" y="250" fill="#000000" font-size="11" font-weight="bold">(영창 비극)</text>
    <text x="60" y="60" fill="#ff5252" font-size="18" font-weight="bold">西宮 幽閉 (폐모살제)</text>
    <rect x="130" y="10" width="230" height="30" fill="#ffffff" stroke="#d32f2f" stroke-width="2" rx="5"/>
    <text x="138" y="30" fill="#d32f2f" font-size="13" font-weight="bold">"내 아들 영창을 죽이고 나까지 가두다니!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">1618년: 왕의 법적 어머니를 서인으로 강등해 감옥에 유폐한 비극</text>
  </g>
</svg>
```

### S2. 아궁이에 불을 때어 9세 어린 영창대군을 증살시키는 강화 부사 정항
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-magistrate-burning-yeongchang">
    <!-- 배경: 1614년 강화도 유배지 온돌방과 아궁이 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#d32f2f" stroke-width="5" rx="5"/>
    <!-- 하단: 펄펄 끓는 아궁이 맹렬한 장작불 (증살) -->
    <rect x="40" y="200" width="320" height="70" fill="#212121" stroke="#ff5722" stroke-width="3"/>
    <path d="M 60 270 Q 80 210 100 270 Q 140 190 180 270 Q 220 200 260 270 Q 300 220 330 270 Z" fill="#ff3d00" opacity="0.9"/>
    <path d="M 80 270 Q 100 230 120 270 Q 160 210 200 270 Q 240 220 280 270 Z" fill="#ffd54f"/>
    <text x="130" y="245" fill="#ffffff" font-size="16" font-weight="bold">아궁이 장작불 (蒸殺)</text>
    <!-- 상단 갇힌 온돌방 안: 울고 있는 9세 어린 영창대군 -->
    <rect x="80" y="70" width="110" height="110" fill="#ffc107" stroke="#d32f2f" stroke-width="3" rx="10"/>
    <circle cx="135" cy="110" r="28" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <path d="M 110 85 L 160 85 L 150 60 L 120 60 Z" fill="#212121"/>
    <circle cx="125" cy="105" r="4" fill="#000000"/>
    <circle cx="145" cy="105" r="4" fill="#000000"/>
    <!-- 뜨거워 눈물 흘리는 표정 -->
    <path d="M 125 110 L 125 125" stroke="#0288d1" stroke-width="2"/>
    <path d="M 145 110 L 145 125" stroke="#0288d1" stroke-width="2"/>
    <path d="M 130 120 Q 135 115 140 120" stroke="#000000" stroke-width="2" fill="none"/>
    <text x="85" y="165" fill="#d32f2f" font-size="14" font-weight="bold">9세 영창대군</text>
    <!-- 오른편: 잔혹하게 불을 때는 강화 부사 정항 -->
    <rect x="230" y="90" width="100" height="110" fill="#1b5e20" stroke="#ffffff" stroke-width="3" rx="10"/>
    <circle cx="280" cy="65" r="30" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <path d="M 255 45 L 305 45 L 295 15 L 265 15 Z" fill="#000000"/>
    <circle cx="270" cy="60" r="4" fill="#000000"/>
    <circle cx="290" cy="60" r="4" fill="#000000"/>
    <path d="M 275 75 Q 280 80 285 75" stroke="#000000" stroke-width="2" fill="none"/>
    <!-- 손에 든 불지팡이 부지깽이 -->
    <path d="M 260 120 L 180 210" stroke="#795548" stroke-width="8" stroke-linecap="round"/>
    <text x="235" y="185" fill="#ffd54f" font-size="14" font-weight="bold">강화 부사 정항</text>
    <rect x="50" y="10" width="300" height="30" fill="#ffffff" stroke="#000000" stroke-width="2" rx="5"/>
    <text x="58" y="30" fill="#d32f2f" font-size="13" font-weight="bold">"아궁이에 장작을 더 넣어라! 방을 가마솥으로 만들어라!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">1614년: 9세 어린 아우를 뜨거운 온돌방에서 타 죽게 한 잔극</text>
  </g>
</svg>
```
