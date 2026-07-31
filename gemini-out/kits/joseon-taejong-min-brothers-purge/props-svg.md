# [소품 목록 + 컷아웃 SVG 초안] 왕위를 세워준 처남 4형제를 트잡아 모두 사약 먹여 죽였다? 태종 이방원의 냉혹한 외척 사냥

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **사약 받고 피 토하는 민무구 형제와 원경왕후 (Min Brothers Poison & Queen)**: 태종이 내린 사약 사발을 마시며 피를 토하는 처남들과, 옆에서 가슴을 치며 피눈물 흘리는 원경왕후 민씨.
2. **냉혹한 철혈 군주 태종 이방원과 외척 멸문 교지 (Cold Taejong & Purge Edict)**: 차가운 눈빛으로 용상에 앉아 일등공신 처가의 숙청을 명하는 태종 이방원과, '처남 4형제 사약 처형'이 명기된 붉은 왕의 교지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 사약을 받고 죽어가는 민무구 형제와 피눈물 흘리는 원경왕후 민씨
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-min-brothers-queen">
    <!-- 배경: 어둡고 비극적인 유배지 형장 -->
    <rect x="30" y="30" width="340" height="240" fill="#212121" stroke="#3e2723" stroke-width="5" rx="5"/>
    <rect x="40" y="180" width="320" height="80" fill="#3e2723" stroke="#1b1b1b" stroke-width="3"/>
    <!-- 오른편: 사약을 마시고 피를 토하며 쓰러지는 처남 민무구 형제 -->
    <circle cx="260" cy="130" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 235 105 L 285 105 L 275 80 L 245 80 Z" fill="#212121"/>
    <!-- 고통스러운 표정과 토하는 피 -->
    <path d="M 245 125 L 255 130" stroke="#000000" stroke-width="3"/>
    <path d="M 275 125 L 265 130" stroke="#000000" stroke-width="3"/>
    <ellipse cx="260" cy="145" rx="8" ry="10" fill="#b71c1c"/>
    <path d="M 260 155 L 250 190 Q 260 210 280 195" fill="#d32f2f" stroke="#b71c1c" stroke-width="3"/>
    <rect x="220" y="170" width="80" height="90" fill="#4e342e" stroke="#263238" stroke-width="4" rx="5"/>
    <!-- 사약 사발 -->
    <ellipse cx="210" cy="170" rx="15" ry="8" fill="#212121" stroke="#d32f2f" stroke-width="3"/>
    <text x="215" y="240" fill="#ff8f00" font-size="14" font-weight="bold">처남 4형제 멸문</text>
    <!-- 왼편: 가슴을 쥐어뜯으며 피눈물 흘리며 절규하는 원경왕후 민씨 -->
    <circle cx="110" cy="120" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 85 85 Q 110 50 135 85" fill="#212121"/>
    <!-- 붉은 피눈물 (혈읍)과 절규 -->
    <line x1="95" y1="125" x2="95" y2="150" stroke="#d32f2f" stroke-width="4" stroke-linecap="round"/>
    <line x1="125" y1="125" x2="125" y2="150" stroke="#d32f2f" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="110" cy="140" rx="10" ry="12" fill="#b71c1c"/>
    <rect x="70" y="160" width="80" height="100" fill="#b71c1c" stroke="#5d4037" stroke-width="4" rx="5"/>
    <!-- 왕후의 절규 말풍선 -->
    <rect x="50" y="40" width="180" height="40" fill="#ffffff" stroke="#d32f2f" stroke-width="3" rx="5"/>
    <text x="60" y="65" fill="#d32f2f" font-size="14" font-weight="bold">"왕 만들어준 동생들을 다 죽이다니!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">1410년~1416년: 일등공신 처가 4형제의 잔혹한 사살</text>
  </g>
</svg>
```

### S2. 냉혹한 철혈 군주 태종 이방원과 외척 멸문 교지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-taejong-cold-edict">
    <!-- 왼편: 용상에 앉은 차갑고 냉혹한 표정의 철혈 군주 태종 이방원 -->
    <rect x="30" y="150" width="140" height="120" fill="#b71c1c" stroke="#ff8f00" stroke-width="5" rx="5"/>
    <circle cx="100" cy="100" r="40" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 왕의 익선관과 날카롭고 비정한 눈빛 -->
    <path d="M 65 65 L 135 65 L 125 35 L 75 35 Z" fill="#212121"/>
    <circle cx="100" cy="30" r="12" fill="#ffd54f"/>
    <path d="M 80 90 L 95 95" stroke="#212121" stroke-width="4"/>
    <path d="M 120 90 L 105 95" stroke="#212121" stroke-width="4"/>
    <circle cx="85" cy="100" r="5" fill="#000000"/>
    <circle cx="115" cy="100" r="5" fill="#000000"/>
    <line x1="90" y1="120" x2="110" y2="120" stroke="#212121" stroke-width="4"/>
    <text x="45" y="220" fill="#ffd54f" font-size="16" font-weight="bold">태종 이방원</text>
    <!-- 오른편: 처남 4형제 멸문지화를 명하는 왕의 붉은 교지 -->
    <rect x="200" y="50" width="170" height="200" fill="#fff9c4" stroke="#8d6e63" stroke-width="5" rx="5"/>
    <rect x="220" y="70" width="130" height="35" fill="#d32f2f" rx="5"/>
    <text x="240" y="93" fill="#ffffff" font-size="16" font-weight="bold">外戚 肅淸 (숙청!)</text>
    <text x="215" y="130" fill="#212121" font-size="15" font-weight="bold">"외척 민무구 4형제는</text>
    <text x="215" y="155" fill="#212121" font-size="15" font-weight="bold">왕권을 위협하니</text>
    <text x="215" y="180" fill="#d32f2f" font-size="16" font-weight="bold">모두 사약을 내린다!"</text>
    <rect x="240" y="200" width="90" height="35" fill="#d32f2f" rx="5"/>
    <text x="255" y="223" fill="#ffffff" font-size="15" font-weight="bold">賜藥 (사약)</text>
    <text x="40" y="285" fill="#1a237e" font-size="15" font-weight="bold">세종 시대의 안정을 위해 악역을 자처한 왕권의 그림자</text>
  </g>
</svg>
```
