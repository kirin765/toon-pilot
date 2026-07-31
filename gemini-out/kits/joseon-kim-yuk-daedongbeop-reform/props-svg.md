# [소품 목록 + 컷아웃 SVG 초안] 백성 세금을 1000배로 뜯어낸 방납 악당과 지주들? 대동법 100년 저항과 김육의 죽음 앞 집념

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **임종 직전 대동법 유차(遺箚)를 바치는 79세 김육 (Dying Kim Yuk & Petition)**: 79세로 병석에 누워 눈물을 흘리며 효종에게 "대동법을 지켜주옵소서!"라고 쓴 피눈물의 유차(임종 상소)를 바치는 잠곡 김육.
2. **백성을 착취하는 방납 악당과 저항하는 양반 지주 (Bangnap Merchant & Landowner)**: 산촌 백성에게 산호초를 바치라며 1000배 폭리를 취하는 비열한 방납 상인과, "내 땅에 왜 쌀 세금을 매기냐!"며 대동법을 결사 반대하는 탐욕스러운 양반 지주.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 병석에서 임종 직전 대동법 유차를 바치는 79세 김육
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-kim-yuk-dying-petition">
    <!-- 배경: 1658년 효종 9년 영의정 잠곡 김육의 병실 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#212121" stroke-width="5" rx="5"/>
    <rect x="50" y="160" width="300" height="100" fill="#fff9c4" stroke="#8d6e63" stroke-width="4" rx="10"/>
    <!-- 병상에 누워 수척하지만 눈빛은 빛나는 79세 개혁가 김육 -->
    <circle cx="140" cy="140" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 115 115 Q 140 95 165 115" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="3"/>
    <!-- 백발 흰 수염과 간절한 눈물 -->
    <path d="M 120 155 Q 140 185 160 155" fill="#e0e0e0"/>
    <circle cx="130" cy="140" r="4" fill="#000000"/>
    <circle cx="150" cy="140" r="4" fill="#000000"/>
    <line x1="130" y1="145" x2="130" y2="165" stroke="#00e5ff" stroke-width="3"/>
    <line x1="150" y1="145" x2="150" y2="165" stroke="#00e5ff" stroke-width="3"/>
    <path d="M 135 155 L 145 155" stroke="#212121" stroke-width="3"/>
    <!-- 오른편: 김육이 마지막 남은 힘으로 바치는 대동법 임종 유차 (遺箚) -->
    <rect x="190" y="80" width="160" height="150" fill="#ffffff" stroke="#d32f2f" stroke-width="4" rx="5"/>
    <text x="210" y="115" fill="#d32f2f" font-size="18" font-weight="bold">大同法 遺箚</text>
    <text x="205" y="145" fill="#212121" font-size="14" font-weight="bold">"제가 죽은 뒤에도</text>
    <text x="205" y="170" fill="#212121" font-size="14" font-weight="bold">대동법을 절대</text>
    <text x="205" y="195" fill="#1b5e20" font-size="15" font-weight="bold">폐지하지 마옵소서!"</text>
    <text x="210" y="215" fill="#b71c1c" font-size="13" font-weight="bold">79세 김육의 유언</text>
    <!-- 떨리는 손으로 상소를 내미는 모습 -->
    <circle cx="180" cy="170" r="15" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <text x="45" y="285" fill="#ffd54f" font-size="15" font-weight="bold">1658년 효종 9년: 기득권에 맞선 목숨 건 개혁 집념</text>
  </g>
</svg>
```

### S2. 1000배 폭리 뜯는 방납 악당과 대동법 결사 반대하는 양반 지주
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-bangnap-yangban-resistance">
    <!-- 왼편: 중간에서 세금을 가로채 1000배 폭리 뜯어내는 비열한 방납 상인 -->
    <rect x="30" y="150" width="130" height="120" fill="#4e342e" stroke="#212121" stroke-width="4" rx="5"/>
    <circle cx="95" cy="100" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 탐욕스러운 미소와 돈주머니 -->
    <path d="M 70 75 L 120 75 L 110 50 L 80 50 Z" fill="#212121"/>
    <circle cx="85" cy="95" r="5" fill="#000000"/>
    <circle cx="105" cy="95" r="5" fill="#000000"/>
    <path d="M 80 115 Q 95 130 110 115" stroke="#b71c1c" stroke-width="4" fill="none"/>
    <circle cx="135" cy="180" r="25" fill="#ffd54f" stroke="#ff8f00" stroke-width="4"/>
    <text x="120" y="185" fill="#d32f2f" font-size="16" font-weight="bold">千倍</text>
    <text x="45" y="240" fill="#ffffff" font-size="14" font-weight="bold">방납 악당 (1000배 폭리)</text>
    <!-- 오른편: 대동법 시행을 결사 반대하며 저항하는 탐욕스러운 양반 지주 -->
    <rect x="220" y="150" width="140" height="120" fill="#1b5e20" stroke="#000000" stroke-width="4" rx="5"/>
    <circle cx="290" cy="100" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 정자관과 분노하며 항의하는 지주 -->
    <path d="M 265 65 L 315 65 L 305 35 L 275 35 Z" fill="#000000" stroke="#424242" stroke-width="2"/>
    <path d="M 275 90 L 290 95" stroke="#212121" stroke-width="4"/>
    <path d="M 305 90 L 290 95" stroke="#212121" stroke-width="4"/>
    <ellipse cx="290" cy="115" rx="10" ry="12" fill="#b71c1c"/>
    <rect x="230" y="30" width="150" height="35" fill="#ffffff" stroke="#d32f2f" stroke-width="3" rx="5"/>
    <text x="240" y="53" fill="#d32f2f" font-size="13" font-weight="bold">"지주 쌀 세금 결사반대!"</text>
    <text x="235" y="240" fill="#fff9c4" font-size="15" font-weight="bold">양반 지주 (100년 저항)</text>
    <text x="40" y="285" fill="#b71c1c" font-size="15" font-weight="bold">1608년~1708년: 기득권의 100년 저항과 백성의 승리</text>
  </g>
</svg>
```
