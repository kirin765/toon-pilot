# [소품 목록 + 컷아웃 SVG 초안] 천민 스님에게 정2품 벼슬을 줬다가 성균관이 텅 비었다? 조선 유학자들을 경악시킨 문정왕후와 요승 보우

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **정2품 당상관 예우받는 보우 스님과 문정왕후 (Monk Bowoo in Official Robe & Queen Munjeong)**: 삭발한 승복 위에 정2품 당상관 관띠(관복 흉배)를 두르고 불경과 염주를 든 스님 보우와 그를 비호하는 문정왕후.
2. **성균관을 텅 비운 유생들의 파업과 400통 참수 상소 (Empty Sungkyunkwan & Petitions)**: "요승 보우의 목을 쳐라!"라며 기숙사를 비워버린 텅 빈 성균관 건물과 피켓(상소문) 들고 파업하는 유생들.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 정2품 당상관 관띠를 두르고 불경을 든 보우 스님과 문정왕후
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-bowoo-munjeong">
    <!-- 왼편: 삭발한 승복 위에 정2품 당상관 관복 관띠를 두른 스님 보우 -->
    <circle cx="120" cy="110" r="40" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 삭발한 머리와 염주 -->
    <circle cx="120" cy="110" r="38" fill="#ffb74d" opacity="0.5"/>
    <circle cx="105" cy="105" r="5" fill="#000000"/>
    <circle cx="135" cy="105" r="5" fill="#000000"/>
    <path d="M 115 130 L 125 130" stroke="#5d4037" stroke-width="3"/>
    <rect x="80" y="150" width="80" height="120" fill="#795548" stroke="#3e2723" stroke-width="4" rx="5"/>
    <!-- 승복 위에 두른 정2품 당상관 가선대부 흉배 및 금띠 -->
    <rect x="75" y="180" width="90" height="25" fill="#ffd54f" stroke="#f57c00" stroke-width="3" rx="3"/>
    <text x="82" y="198" fill="#b71c1c" font-size="14" font-weight="bold">正二品 當上官</text>
    <!-- 오른편 상단: 불교를 맹신하며 보호하는 수렴청정 문정왕후 -->
    <circle cx="280" cy="100" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 235 80 Q 280 20 325 80 Z" fill="#212121"/>
    <circle cx="250" cy="70" r="10" fill="#ffd54f"/>
    <circle cx="310" cy="70" r="10" fill="#ffd54f"/>
    <text x="245" y="165" fill="#b71c1c" font-size="16" font-weight="bold">文定王后 (불교 중흥)</text>
    <!-- 하단 불경과 염주 -->
    <rect x="180" y="210" width="70" height="60" fill="#fff9c4" stroke="#f57c00" stroke-width="3"/>
    <text x="195" y="245" fill="#3e2723" font-size="16" font-weight="bold">佛經</text>
    <text x="40" y="285" fill="#b71c1c" font-size="16" font-weight="bold">천민 스님이 재상 급 예우를 받은 16세기의 충격</text>
  </g>
</svg>
```

### S2. 성균관을 텅 비운 유생들 파업(권당)과 400통 참수 상소문
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-empty-sungkyunkwan-petition">
    <!-- 배경 상단: 텅 비어버린 조선 최고 학부 성균관 (권당 - 동맹휴학) -->
    <rect x="30" y="40" width="340" height="100" fill="#efebe9" stroke="#5d4037" stroke-width="5" rx="5"/>
    <polygon points="20,40 200,10 380,40" fill="#3e2723" stroke="#212121" stroke-width="3"/>
    <text x="140" y="80" fill="#b71c1c" font-size="22" font-weight="bold" font-family="serif">成均館 (텅 빈 학교)</text>
    <text x="95" y="115" fill="#5d4037" font-size="15" font-weight="bold">유생들 전원 동맹휴학 (捲堂 - 권당)</text>
    <!-- 하단 왼편: 분노하여 피켓과 상소문 든 성균관 유생들 -->
    <circle cx="80" cy="180" r="30" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <path d="M 55 155 Q 80 135 105 155 Z" fill="#212121"/>
    <rect x="50" y="210" width="60" height="70" fill="#ffffff" stroke="#90a4ae" stroke-width="3"/>
    <circle cx="70" cy="180" r="5" fill="#000000"/>
    <circle cx="90" cy="180" r="5" fill="#000000"/>
    <path d="M 70 195 Q 80 185 90 195" stroke="#d32f2f" stroke-width="3" fill="none"/>
    <!-- 오른편 하단: 빗발치는 400통 참수 상소문 -->
    <rect x="170" y="160" width="200" height="110" fill="#fff9c4" stroke="#f57c00" stroke-width="4" rx="5"/>
    <text x="185" y="195" fill="#d32f2f" font-size="18" font-weight="bold">妖僧 (요승) 보우 참수령!</text>
    <text x="185" y="225" fill="#212121" font-size="15" font-weight="bold">400통 넘는 상소문 폭동</text>
    <text x="185" y="255" fill="#b71c1c" font-size="14" font-weight="bold">불교를 폐지하고 요승을 쳐라!</text>
    <text x="40" y="290" fill="#3e2723" font-size="14" font-weight="bold">조선 유학자들을 경악케 한 사상 최대의 성경 충돌</text>
  </g>
</svg>
```
