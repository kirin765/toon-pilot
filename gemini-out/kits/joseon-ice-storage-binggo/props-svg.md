# [소품 목록 + 컷아웃 SVG 초안] 조선 궁중의 거대한 냉장고 서빙고 얼음 보관 비밀과 왕실의 한여름 얼음 화채 파티

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 서빙고 지하 얼음 창고와 단열 짚더미 얼음 (Joseon Icehouse & Straw Ice Blocks)**: 한강 변 지하 석빙고의 아치형 돌 천장과 환기구, 그리고 노란 짚더미 단열재에 층층이 둘러싸여 하얀 냉기 김을 내뿜는 각진 대형 얼음 덩어리.
2. **왕실 한여름 오미자 얼음 화채 사발과 빙표 (Royal Summer Ice Punch & Ice Voucher)**: 붉고 투명한 오미자 국물 속에 빨간 앵두와 반짝이는 각설탕 모양 얼음 조각들이 동동 뜬 왕실 화채 사발과, 임금이 내린 얼음 교환권 빙표(氷票) 목패.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 지하 서빙고 창고 안에서 짚더미에 덮여 김을 내뿜는 대형 얼음 덩어리
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-seobinggo-ice-block">
    <!-- 지하 석빙고 돌문 아치 벽면 배경 -->
    <path d="M 40 260 L 40 100 Q 200 10 360 100 L 360 260 Z" fill="#455a64" stroke="#263238" stroke-width="8"/>
    <!-- 천장 더운 공기 배출용 환기구 굴뚝 -->
    <rect x="180" y="20" width="40" height="30" fill="#263238"/>
    <!-- 바닥에 깔린 노란색 단열 짚더미와 갈대 (아랫부분) -->
    <path d="M 60 250 Q 200 220 340 250 L 350 280 L 50 280 Z" fill="#fbc02d" stroke="#f57c00" stroke-width="5"/>
    <!-- 중앙에 놓인 거대하고 푸른 각진 겨울 한강 얼음 덩어리 (정) -->
    <polygon points="120,130 250,110 300,160 170,180" fill="#e0f7fa" stroke="#00acc1" stroke-width="5"/>
    <polygon points="120,130 170,180 170,240 120,190" fill="#80deea" stroke="#00acc1" stroke-width="5"/>
    <polygon points="170,180 300,160 300,220 170,240" fill="#b2ebf2" stroke="#00acc1" stroke-width="5"/>
    <!-- 얼음에서 피어오르는 시원한 흰색 하얀 냉기 김 (냉동 효과) -->
    <path d="M 150 110 Q 140 80 160 60" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M 220 95 Q 210 65 230 45" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <path d="M 260 140 Q 270 100 290 80" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <!-- 상단에 얹힌 짚더미 보온 단열재 조각들 -->
    <path d="M 130 135 Q 160 125 190 130" stroke="#f57c00" stroke-width="6" fill="none"/>
    <path d="M 230 125 Q 260 120 280 135" stroke="#f57c00" stroke-width="6" fill="none"/>
    <text x="85" y="290" fill="#ffffff" font-size="18" font-weight="bold">전기 없이 한여름까지 보존 (13만 정)</text>
  </g>
</svg>
```

### S2. 얼음 동동 띄운 시원한 궁중 오미자 얼음 화채 사발과 빙표 목패
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-royal-ice-punch-bowl">
    <!-- 하단에 놓인 고급 조선 왕실 백자 사기그릇 화채 사발 -->
    <ellipse cx="180" cy="200" rx="120" ry="35" fill="#f5f5f5" stroke="#37474f" stroke-width="6"/>
    <path d="M 60 200 C 60 260 300 260 300 200 Z" fill="#eeeeee" stroke="#37474f" stroke-width="6"/>
    <!-- 사발 내부에 담긴 붉고 시원한 오미자 화채 국물 -->
    <ellipse cx="180" cy="205" rx="105" ry="25" fill="#e91e63"/>
    <!-- 국물 위에 떠 있는 반짝이는 투명 각설탕 모양 얼음 조각들 (얼음 화채) -->
    <polygon points="130,195 150,185 160,200 140,210" fill="#e0f7fa" stroke="#00bcd4" stroke-width="2"/>
    <polygon points="190,190 215,185 220,205 195,210" fill="#e0f7fa" stroke="#00bcd4" stroke-width="2"/>
    <polygon points="230,200 250,195 255,210 235,215" fill="#e0f7fa" stroke="#00bcd4" stroke-width="2"/>
    <polygon points="110,205 125,200 130,212 115,217" fill="#e0f7fa" stroke="#00bcd4" stroke-width="2"/>
    <!-- 빨간 앵두 열매 고명과 Pine nut (잣) -->
    <circle cx="170" cy="205" r="8" fill="#d32f2f" stroke="#880e4f" stroke-width="2"/>
    <circle cx="210" cy="200" r="7" fill="#d32f2f" stroke="#880e4f" stroke-width="2"/>
    <circle cx="150" cy="210" r="3" fill="#fff9c4"/>
    <circle cx="230" cy="208" r="3" fill="#fff9c4"/>
    <!-- 오른편에 세워진 임금 하사 얼음 교환권 목패 (빙표 氷票) -->
    <rect x="310" y="100" width="60" height="130" rx="8" fill="#8d6e63" stroke="#3e2723" stroke-width="5"/>
    <rect x="320" y="110" width="40" height="110" fill="#bcaaa4"/>
    <text x="330" y="150" fill="#212121" font-size="22" font-weight="bold">氷</text>
    <text x="330" y="185" fill="#212121" font-size="22" font-weight="bold">票</text>
    <!-- 화채에서 피어오르는 냉기 효과 -->
    <path d="M 140 170 Q 130 150 145 135" stroke="#80deea" stroke-width="4" fill="none"/>
    <path d="M 210 165 Q 220 145 205 130" stroke="#80deea" stroke-width="4" fill="none"/>
    <text x="50" y="60" fill="#00838f" font-size="22" font-weight="bold">삼복더위 왕실 얼음 화채 파티</text>
  </g>
</svg>
```
