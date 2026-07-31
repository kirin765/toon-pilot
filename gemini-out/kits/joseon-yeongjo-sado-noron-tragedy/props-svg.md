# [소품 목록 + 컷아웃 SVG 초안] 무수리 아들 콤플렉스와 형 독살설 원죄! 영조가 친아들 사도세자를 뒤주에 죽인 진짜 이유

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **무수리 콤플렉스와 노론 결탁으로 호통치는 영조 (Paranoid King Yeongjo & Noron)**: 무수리 출신 열등감과 게장 독살설 원죄 속에서 노론 대신들을 배경으로 세자를 향해 냉혹하고 깐깐하게 호통치는 영조 임금.
2. **한여름 뙤약볕 뒤주 속에 가친 채 울부짖는 사도세자 (Crown Prince Sado in Rice Chest)**: 1762년 7월 뜨거운 태양 아래 굳게 못 칠해진 나무 뒤주 틈새로 손을 뻗으며 굶주림과 갈증으로 울부짖는 비운의 사도세자.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 무수리 콤플렉스와 노론 결탁으로 냉혹하게 호통치는 영조
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-yeongjo-complex-noron">
    <!-- 배경: 어둡고 냉기 흐르는 경복궁 편전 -->
    <rect x="30" y="30" width="340" height="240" fill="#212121" stroke="#b71c1c" stroke-width="5" rx="5"/>
    <!-- 왼편: 깐깐하고 완벽주의적인 냉혹한 표정의 영조 임금 -->
    <rect x="50" y="140" width="130" height="130" fill="#b71c1c" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="115" cy="90" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 익선관과 날카롭고 신경질적인 눈빛 -->
    <path d="M 85 55 L 145 55 L 135 20 L 95 20 Z" fill="#000000" stroke="#212121" stroke-width="2"/>
    <circle cx="140" cy="40" r="12" fill="#000000"/>
    <path d="M 93 80 L 108 85" stroke="#000000" stroke-width="4"/>
    <path d="M 137 80 L 122 85" stroke="#000000" stroke-width="4"/>
    <circle cx="102" cy="88" r="4" fill="#000000"/>
    <circle cx="128" cy="88" r="4" fill="#000000"/>
    <!-- 깐깐한 입모양과 호통 -->
    <path d="M 105 110 Q 115 100 125 110" stroke="#000000" stroke-width="3" fill="none"/>
    <text x="60" y="240" fill="#ffd54f" font-size="16" font-weight="bold">제21대 영조</text>
    <!-- 오른편: 무수리 콤플렉스와 노론 당쟁 압박 말풍선 -->
    <rect x="190" y="50" width="170" height="200" fill="#fff9c4" stroke="#d32f2f" stroke-width="5" rx="10"/>
    <rect x="205" y="70" width="140" height="30" fill="#212121" rx="5"/>
    <text x="215" y="90" fill="#ffffff" font-size="14" font-weight="bold">무수리 천인 출신 콤플렉스</text>
    <rect x="205" y="110" width="140" height="30" fill="#b71c1c" rx="5"/>
    <text x="215" y="130" fill="#ffffff" font-size="14" font-weight="bold">경종 독살설 원죄 의식</text>
    <text x="205" y="170" fill="#d32f2f" font-size="16" font-weight="bold">"노론을 비판하다니!</text>
    <text x="205" y="195" fill="#d32f2f" font-size="16" font-weight="bold">넌 내 아들이 아니다!"</text>
    <text x="215" y="230" fill="#212121" font-size="14" font-weight="bold">(노론 세력과의 정치 결탁)</text>
    <text x="40" y="285" fill="#ffd54f" font-size="15" font-weight="bold">1762년 영조: 왕권 콤플렉스와 당쟁이 부른 비정한 아버지</text>
  </g>
</svg>
```

### S2. 한여름 뙤약볕 뒤주 속에 갇힌 채 울부짖는 사도세자
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-sado-in-rice-chest">
    <!-- 배경: 1762년 7월 한여름 뙤약볕이 내리쬐는 궁궐 마당 -->
    <rect x="30" y="30" width="340" height="240" fill="#ffecb3" stroke="#e65100" stroke-width="5" rx="5"/>
    <!-- 뜨겁게 이글거리는 한여름 태양 -->
    <circle cx="80" cy="80" r="35" fill="#ff6f00" opacity="0.8"/>
    <line x1="80" y1="35" x2="80" y2="15" stroke="#ff6f00" stroke-width="4"/>
    <line x1="80" y1="125" x2="80" y2="145" stroke="#ff6f00" stroke-width="4"/>
    <line x1="35" y1="80" x2="15" y2="80" stroke="#ff6f00" stroke-width="4"/>
    <line x1="125" y1="80" x2="145" y2="80" stroke="#ff6f00" stroke-width="4"/>
    <text x="50" y="145" fill="#d32f2f" font-size="14" font-weight="bold">뙤약볕 35℃</text>
    <!-- 중앙: 굳게 못이 박히고 꽁꽁 묶인 거대한 나무 뒤주 (米櫃) -->
    <rect x="130" y="130" width="150" height="140" fill="#5d4037" stroke="#212121" stroke-width="6" rx="5"/>
    <line x1="130" y1="175" x2="280" y2="175" stroke="#3e2723" stroke-width="4"/>
    <line x1="130" y1="220" x2="280" y2="220" stroke="#3e2723" stroke-width="4"/>
    <!-- 꽁꽁 묶은 거대한 밧줄 -->
    <path d="M 130 150 Q 205 160 280 150" stroke="#d7ccc8" stroke-width="8" fill="none"/>
    <path d="M 130 240 Q 205 250 280 240" stroke="#d7ccc8" stroke-width="8" fill="none"/>
    <path d="M 205 130 L 205 270" stroke="#d7ccc8" stroke-width="8"/>
    <!-- 뒤주 틈새로 뻗어 나온 사도세자의 손과 절규 -->
    <path d="M 240 135 L 260 110" stroke="#ffcc80" stroke-width="8" stroke-linecap="round"/>
    <circle cx="262" cy="108" r="6" fill="#ffcc80"/>
    <rect x="230" y="50" width="140" height="60" fill="#ffffff" stroke="#b71c1c" stroke-width="3" rx="5"/>
    <text x="240" y="73" fill="#d32f2f" font-size="14" font-weight="bold">"아바마마! 살려주오!"</text>
    <text x="245" y="95" fill="#212121" font-size="13" font-weight="bold">"물이 마시고 싶소.."</text>
    <text x="160" y="200" fill="#ffd54f" font-size="22" font-weight="bold">米櫃 (뒤주)</text>
    <text x="45" y="285" fill="#b71c1c" font-size="15" font-weight="bold">1762년 임오화변: 뒤주 속에 갇혀 8일 만에 숨진 사도세자</text>
  </g>
</svg>
```
