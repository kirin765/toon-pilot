# [소품 목록 + 컷아웃 SVG 초안] 조선의 부동산 투기꾼과 복부인 (한양 땅 투기 열풍)

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **한양 기와집 가옥 매매 문서와 중개 장부 (Property Deed & Ledger)**: 땅값이 천정부지로 적힌 한성부 기와집 가옥 매매 문서(문기/입안)와 거간꾼(집주름)의 거래 내역 장부.
2. **복부인의 사치스러운 가채머리와 은화 상자 (Speculator's Gachae & Silver Chest)**: 땅 투기로 벼락부자가 된 부인의 거대한 가채(가발) 머리와 집 사재기에 쓴 은화/엽전 가득한 상자.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 한양 노른자위 기와집 가옥 매매 문서(문기)와 집주름 장부
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-property-deed">
    <!-- 밑에 깔린 거간꾼(집주름) 투기 중개 장부 -->
    <rect x="50" y="80" width="220" height="180" rx="6" fill="#8d6e63" stroke="#3e2723" stroke-width="6" transform="rotate(-5 50 80)"/>
    <rect x="60" y="90" width="200" height="160" rx="4" fill="#d7ccc8" stroke="#5d4037" stroke-width="4" transform="rotate(-5 60 90)"/>
    <line x1="80" y1="130" x2="240" y2="120" stroke="#3e2723" stroke-width="4" transform="rotate(-5 80 130)"/>
    <line x1="80" y1="170" x2="240" y2="160" stroke="#3e2723" stroke-width="4" transform="rotate(-5 80 170)"/>
    <!-- 위에 놓인 한성부 기와집 가옥 매매 문서 (문기/입안) -->
    <rect x="120" y="50" width="230" height="210" rx="8" fill="#fff9c4" stroke="#5d4037" stroke-width="8" transform="rotate(8 120 50)"/>
    <!-- 문서 상단 '가옥 매매(家屋賣買)' 또는 기와집 아이콘 요약 -->
    <path d="M 160 85 L 200 65 L 240 85 Z" fill="#4e342e" stroke="#212121" stroke-width="5" transform="rotate(8 160 85)"/>
    <rect x="175" y="85" width="50" height="30" fill="#a1887f" stroke="#212121" stroke-width="4" transform="rotate(8 175 85)"/>
    <!-- 폭등 가격 붓글씨 요약 (붉은 화살표 치솟음 효과) -->
    <line x1="160" y1="140" x2="310" y2="160" stroke="#212121" stroke-width="8" stroke-linecap="round" transform="rotate(8 160 140)"/>
    <line x1="160" y1="180" x2="300" y2="200" stroke="#212121" stroke-width="8" stroke-linecap="round" transform="rotate(8 160 180)"/>
    <!-- 한성부 관아 승인 붉은 인장 (관인) -->
    <rect x="250" y="160" width="65" height="65" rx="4" fill="#d32f2f" fill-opacity="0.85" stroke="#b71c1c" stroke-width="5" transform="rotate(15 250 160)"/>
    <path d="M 265 180 L 295 180 M 280 170 L 280 210" stroke="#ffffff" stroke-width="6" transform="rotate(15 265 180)"/>
    <!-- 집값 폭등 화살표 아이콘 -->
    <path d="M 290 110 L 330 60 L 350 90 M 330 60 L 300 55" fill="none" stroke="#d32f2f" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>
```

### S2. 부동산 투기 복부인의 사치 가채머리와 매점매석 은화 엽전 상자
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-speculator-chest">
    <!-- 왼편: 투기로 돈 번 복부인의 거대한 가채머리 (가발) 컷아웃 -->
    <ellipse cx="120" cy="140" rx="75" ry="65" fill="#212121" stroke="#000000" stroke-width="8"/>
    <ellipse cx="120" cy="140" rx="55" ry="45" fill="#424242" stroke="#212121" stroke-width="4"/>
    <!-- 사치스러운 금비녀와 옥 장식 -->
    <line x1="30" y1="130" x2="210" y2="150" stroke="#ffd54f" stroke-width="10" stroke-linecap="round"/>
    <circle cx="50" cy="128" r="10" fill="#e040fb" stroke="#7b1fa2" stroke-width="4"/>
    <circle cx="190" cy="148" r="12" fill="#00e676" stroke="#00b0ff" stroke-width="4"/>
    <!-- 오른편: 매점매석에 쓰인 거대한 은화/엽전 상자 -->
    <rect x="200" y="150" width="160" height="110" rx="8" fill="#5d4037" stroke="#3e2723" stroke-width="8"/>
    <!-- 상자 철제 장식 띠 -->
    <line x1="200" y1="180" x2="360" y2="180" stroke="#37474f" stroke-width="8"/>
    <line x1="200" y1="230" x2="360" y2="230" stroke="#37474f" stroke-width="8"/>
    <rect x="265" y="190" width="30" height="30" rx="4" fill="#ffd54f" stroke="#f57f17" stroke-width="4"/>
    <!-- 넘쳐흐르는 상통의 은화(은괴) 및 상평통보 엽전들 -->
    <ellipse cx="280" cy="150" rx="70" ry="20" fill="#ffd54f" stroke="#f57f17" stroke-width="6"/>
    <circle cx="240" cy="145" r="15" fill="#ffd54f" stroke="#f57f17" stroke-width="4"/>
    <rect x="235" y="140" width="10" height="10" fill="#5d4037"/>
    <circle cx="280" cy="135" r="16" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="4"/>
    <circle cx="315" cy="145" r="15" fill="#ffd54f" stroke="#f57f17" stroke-width="4"/>
    <rect x="310" y="140" width="10" height="10" fill="#5d4037"/>
    <!-- 반짝이는 탐욕의 황금빛 효과 -->
    <path d="M 280 100 L 280 115 M 260 105 L 270 118 M 300 105 L 290 118" stroke="#ffeb3b" stroke-width="5" stroke-linecap="round"/>
  </g>
</svg>
```
