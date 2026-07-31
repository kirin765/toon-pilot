# [소품 목록 + 컷아웃 SVG 초안] 왕비 방 밑에 파묻은 저주 인형과 신당, 장희빈의 궁중 흑마술 무고의 옥

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **바늘 꽂힌 꼭두각시 저주 인형과 붉은 주서 부적 (Needle Puppet & Talisman)**: 인현왕후의 이름을 쓰고 가슴과 심장에 대바늘을 꽂은 섬뜩한 짚 인형(꼭두각시)과, 왕비 침실 마당 밑에 묻었던 붉은색 글씨의 주서 저주 부적.
2. **궁궐 신당에서 저주 굿하는 장희빈과 숙종의 사약 (Jang Heebin Ritual & Sayak)**: 취선당 비밀 당집에서 촛불을 켜고 주문을 외우며 저주 굿판을 벌이는 무녀와 장희빈, 그리고 극대노하여 사약 사발과 형벌을 내리는 숙종 임금.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 심장에 바늘이 꽂힌 꼭두각시 저주 인형과 왕비 방 밑 저주 부적
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-voodoo-puppet-talisman">
    <!-- 왼편: 붉은색 주서(경면주사)로 쓴 흉악한 저주 부적 (노란 한지 부적) -->
    <rect x="30" y="50" width="140" height="200" fill="#fff9c4" stroke="#f57c00" stroke-width="5" rx="5"/>
    <path d="M 50 80 L 150 80 M 100 80 L 100 220 M 60 120 Q 100 150 140 120 M 60 180 Q 100 210 140 180" stroke="#d32f2f" stroke-width="8" fill="none" stroke-linecap="round"/>
    <circle cx="100" cy="150" r="15" fill="#d32f2f"/>
    <text x="50" y="240" fill="#b71c1c" font-size="16" font-weight="bold">仁顯王后 (인현왕후 저주)</text>
    <!-- 오른편: 심장에 대바늘이 꽂힌 짚 인형 꼭두각시 (저주 인형) -->
    <!-- 인형 몸체 (황갈색 짚단 느낌) -->
    <circle cx="270" cy="90" r="35" fill="#d7ccc8" stroke="#5d4037" stroke-width="4"/>
    <rect x="240" y="125" width="60" height="90" fill="#d7ccc8" stroke="#5d4037" stroke-width="4" rx="10"/>
    <line x1="240" y1="140" x2="200" y2="170" stroke="#5d4037" stroke-width="12" stroke-linecap="round"/>
    <line x1="300" y1="140" x2="340" y2="170" stroke="#5d4037" stroke-width="12" stroke-linecap="round"/>
    <!-- 인형 얼굴 및 이름표 -->
    <line x1="255" y1="85" x2="265" y2="95" stroke="#3e2723" stroke-width="4"/>
    <line x1="265" y1="85" x2="255" y2="95" stroke="#3e2723" stroke-width="4"/>
    <line x1="275" y1="85" x2="285" y2="95" stroke="#3e2723" stroke-width="4"/>
    <line x1="285" y1="85" x2="275" y2="95" stroke="#3e2723" stroke-width="4"/>
    <rect x="250" y="140" width="40" height="50" fill="#ffffff" stroke="#d32f2f" stroke-width="2"/>
    <text x="255" y="170" fill="#d32f2f" font-size="16" font-weight="bold">死 (사)</text>
    <!-- 심장에 꽂힌 날카로운 은 바늘과 화살 -->
    <line x1="350" y1="100" x2="270" y2="160" stroke="#00e5ff" stroke-width="6" stroke-linecap="round"/>
    <polygon points="270,160 285,155 280,170" fill="#d32f2f"/>
    <circle cx="270" cy="160" r="8" fill="#d32f2f"/>
    <text x="45" y="280" fill="#d32f2f" font-size="16" font-weight="bold">왕비 침실 마당 밑에 파묻은 궁중 흑마술</text>
  </g>
</svg>
```

### S2. 비밀 신당에서 굿하는 장희빈과 숙종 임금의 사약 사발
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-shaman-ritual-sayak">
    <!-- 오른편: 분노한 숙종 임금의 사약 교지와 사상 사발 (사약) -->
    <rect x="240" y="40" width="140" height="200" fill="#ffffff" stroke="#d32f2f" stroke-width="5" rx="5"/>
    <text x="260" y="80" fill="#d32f2f" font-size="22" font-weight="bold" font-family="serif">巫蠱之獄</text>
    <text x="250" y="120" fill="#212121" font-size="15" font-weight="bold">저주 죄 장희빈에게</text>
    <text x="255" y="150" fill="#d32f2f" font-size="16" font-weight="bold">사약을 내린다!</text>
    <ellipse cx="310" cy="200" rx="35" ry="15" fill="#424242" stroke="#212121" stroke-width="3"/>
    <ellipse cx="310" cy="197" rx="25" ry="10" fill="#212121"/>
    <circle cx="310" cy="195" r="5" fill="#00e5ff" opacity="0.8"/>
    <!-- 왼편: 취선당 비밀 신당에서 촛불 켜고 저주 주문 외우는 장희빈 -->
    <circle cx="100" cy="120" r="40" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 사극 가채 장식 및 섬뜩한 표정 -->
    <path d="M 60 100 Q 100 40 140 100 Z" fill="#212121"/>
    <path d="M 80 120 L 95 125" stroke="#d32f2f" stroke-width="3"/>
    <path d="M 120 120 L 105 125" stroke="#d32f2f" stroke-width="3"/>
    <path d="M 90 140 Q 100 130 110 140" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <rect x="60" y="160" width="80" height="100" fill="#880e4f" stroke="#4a148c" stroke-width="5" rx="10"/>
    <!-- 신당 제단 촛불 (저주 굿불) -->
    <rect x="160" y="180" width="20" height="60" fill="#fff9c4" stroke="#f57c00" stroke-width="2"/>
    <polygon points="170,160 160,180 180,180" fill="#ff6d00"/>
    <polygon points="170,165 165,180 175,180" fill="#ffd54f"/>
    <text x="40" y="285" fill="#212121" font-size="16" font-weight="bold">1701년 숙종실록 무고의 옥 사형 팩트</text>
  </g>
</svg>
```
