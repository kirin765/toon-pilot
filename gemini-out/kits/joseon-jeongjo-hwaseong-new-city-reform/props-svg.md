# [소품 목록 + 컷아웃 SVG 초안] 역적의 아들이 왕이 되었다? 정조가 거중기로 수원 화성 신도시를 세운 진짜 이유

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **"과인은 사도세자의 아들이다" 선언하는 늠름한 정조 (Jeongjo Declaring Lineage)**: 붉은 곤룡포와 익선관을 갖추고 왕위에 올라 당당하고 개혁적인 눈빛으로 "나는 사도세자의 아들이다!"라며 호통치듯 선언하는 정조.
2. **거중기로 화성 돌 쌓고 품삯 엽전 받는 일꾼과 정약용 (Jeong Yagyong, Geojunggi & Paid Worker)**: 도르래 원리의 기계 거중기로 거대한 화성 성벽 돌을 들어 올리고, 정약용 앞에서 엽전 꾸러미 임금을 받고 활짝 웃는 석공 일꾼.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. "과인은 사도세자의 아들이다" 당당히 선언하는 개혁 군주 정조
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-jeongjo-declaring-lineage">
    <!-- 배경: 화려하고 웅장한 경복궁 편전 어좌와 일월오봉도 -->
    <rect x="30" y="30" width="340" height="240" fill="#1a237e" stroke="#ffd54f" stroke-width="5" rx="5"/>
    <path d="M 50 150 Q 90 100 130 150 Q 170 100 210 150" fill="#00796b" opacity="0.6"/>
    <!-- 중앙: 붉은 곤룡포를 입은 당당하고 총명한 표정의 정조 임금 -->
    <rect x="130" y="140" width="140" height="130" fill="#b71c1c" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="200" cy="90" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 익선관과 굳센 개혁 의지의 눈빛 -->
    <path d="M 165 55 L 235 55 L 220 20 L 180 20 Z" fill="#000000" stroke="#212121" stroke-width="2"/>
    <circle cx="225" cy="40" r="12" fill="#000000"/>
    <path d="M 178 80 L 193 83" stroke="#000000" stroke-width="4"/>
    <path d="M 222 80 L 207 83" stroke="#000000" stroke-width="4"/>
    <circle cx="188" cy="88" r="5" fill="#000000"/>
    <circle cx="212" cy="88" r="5" fill="#000000"/>
    <path d="M 190 110 Q 200 120 210 110" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 가슴의 흉배 (오조룡 용무늬 장식) -->
    <circle cx="200" cy="180" r="25" fill="#ffd54f" stroke="#ffffff" stroke-width="3"/>
    <text x="187" y="187" fill="#b71c1c" font-size="20" font-weight="bold">龍</text>
    <!-- 즉위 일성 사도세자 아들 선언 말풍선 -->
    <rect x="50" y="50" width="300" height="40" fill="#ffffff" stroke="#d32f2f" stroke-width="4" rx="5"/>
    <text x="65" y="77" fill="#d32f2f" font-size="18" font-weight="bold">"과인은 사도세자의 아들이다!"</text>
    <text x="45" y="285" fill="#ffd54f" font-size="15" font-weight="bold">1776년 정조 1년: 노론을 전율케 한 개혁 군주의 위대한 선언</text>
  </g>
</svg>
```

### S2. 거중기로 돌 쌓고 품삯 엽전 받고 기뻐하는 일꾼과 정약용
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-yagyong-geojunggi-worker">
    <!-- 배경: 수원 화성(華城) 성벽 공사 현장 -->
    <rect x="30" y="30" width="340" height="240" fill="#8d6e63" stroke="#3e2723" stroke-width="5" rx="5"/>
    <!-- 쌓아 올라가는 웅장한 화성 석조 성벽 -->
    <rect x="30" y="180" width="340" height="90" fill="#bcaaa4" stroke="#4e342e" stroke-width="3"/>
    <line x1="30" y1="210" x2="370" y2="210" stroke="#4e342e" stroke-width="2"/>
    <line x1="30" y1="240" x2="370" y2="240" stroke="#4e342e" stroke-width="2"/>
    <!-- 왼편: 도르래 원리의 첨단 건설 기계 거중기(擧重機) -->
    <rect x="60" y="60" width="20" height="120" fill="#5d4037" stroke="#212121" stroke-width="2"/>
    <circle cx="70" cy="65" r="15" fill="#424242" stroke="#ffffff" stroke-width="2"/>
    <line x1="70" y1="65" x2="140" y2="120" stroke="#212121" stroke-width="4" stroke-dasharray="4 2"/>
    <rect x="120" y="120" width="40" height="30" fill="#757575" stroke="#000000" stroke-width="2"/>
    <text x="125" y="140" fill="#ffffff" font-size="14" font-weight="bold">石</text>
    <text x="50" y="50" fill="#ffffff" font-size="16" font-weight="bold">거중기 (정약용)</text>
    <!-- 중앙: 관복을 입고 거중기 공사를 지휘하는 젊은 실학자 정약용 -->
    <rect x="170" y="100" width="80" height="80" fill="#00796b" stroke="#ffffff" stroke-width="3" rx="5"/>
    <circle cx="210" cy="75" r="25" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <path d="M 195 50 L 225 50 L 220 30 L 200 30 Z" fill="#000000"/>
    <text x="180" y="195" fill="#ffd54f" font-size="14" font-weight="bold">정약용</text>
    <!-- 오른편: 강제 부역이 아니라 엽전 임금을 받고 활짝 웃는 석공 일꾼 -->
    <rect x="270" y="110" width="70" height="70" fill="#f5f5f5" stroke="#424242" stroke-width="3" rx="5"/>
    <circle cx="305" cy="85" r="25" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <rect x="285" y="65" width="40" height="10" fill="#ffffff" stroke="#000000" stroke-width="2"/>
    <!-- 손에 쥔 유급 임금 엽전 꾸러미 -->
    <circle cx="280" cy="130" r="15" fill="#fbc02d" stroke="#f57f17" stroke-width="3"/>
    <rect x="275" y="125" width="10" height="10" fill="#3e2723"/>
    <text x="260" y="210" fill="#ffffff" font-size="14" font-weight="bold">유급 일꾼 (품삯)</text>
    <rect x="230" y="35" width="130" height="30" fill="#fff9c4" stroke="#d32f2f" stroke-width="2" rx="5"/>
    <text x="235" y="55" fill="#d32f2f" font-size="13" font-weight="bold">"월급 주니 힘 난다!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">수원 화성: 첨단 기계와 공정한 임금이 만든 문화 유산</text>
  </g>
</svg>
```
