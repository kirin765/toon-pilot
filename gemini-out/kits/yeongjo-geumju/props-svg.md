# [소품 목록 + 컷아웃 SVG 초안] 영조의 살벌한 금주령

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **술 항아리와 주병 (Forbidden Liquor Pot)**: 전통 조선 백자/옹기 스타일의 술 항아리. 붉은색 '금(禁)' 자 붓글씨가 크게 적힌 봉인 딱지가 붙어 있음.
2. **참결 참수도 (Executioner Sword & Block)**: 망나니의 굵고 거친 넓적 칼과 나무 참수대. 핏자국 텍스처 없이 깔끔하고 굵은 컷아웃 실루엣.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 봉인된 금주 술 항아리
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-forbidden-liquor">
    <!-- 항아리 몸체 -->
    <path d="M 140 250 C 100 250 80 180 100 120 C 110 90 140 70 160 70 L 240 70 C 260 70 290 90 300 120 C 320 180 300 250 260 250 Z" fill="#6d4c41" stroke="#2c1b15" stroke-width="8" stroke-linejoin="round"/>
    <!-- 항아리 목과 입구 -->
    <rect x="150" y="50" width="100" height="25" rx="5" fill="#5d4037" stroke="#2c1b15" stroke-width="8"/>
    <ellipse cx="200" cy="50" rx="50" ry="10" fill="#3e2723" stroke="#2c1b15" stroke-width="6"/>
    <!-- 봉인 뚜껑 천 -->
    <path d="M 135 60 Q 200 40 265 60 L 275 85 Q 200 75 125 85 Z" fill="#f5f5dc" stroke="#2c1b15" stroke-width="6"/>
    <!-- 묶은 새끼줄 -->
    <rect x="140" y="75" width="120" height="12" rx="6" fill="#d4af37" stroke="#2c1b15" stroke-width="5"/>
    <!-- 붉은 봉인 딱지 (금주 부적) -->
    <rect x="170" y="110" width="60" height="100" fill="#b71c1c" stroke="#2c1b15" stroke-width="5" transform="rotate(-5 200 160)"/>
    <!-- 禁(금할 금) 한자 컷아웃 표현 (단순화된 붓선) -->
    <path d="M 185 130 L 215 130 M 190 145 L 210 145 M 200 120 L 200 160 M 180 175 L 220 175 M 190 175 L 180 200 M 210 175 L 220 200" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 참결 대도 (참수 칼과 망나니 칼집)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-execution-sword">
    <!-- 나무 참수대 받침 -->
    <path d="M 80 260 L 320 260 L 300 210 L 100 210 Z" fill="#8d6e63" stroke="#3e2723" stroke-width="8" stroke-linejoin="round"/>
    <!-- 칼날 (넓고 투박한 망나니 대도) -->
    <path d="M 150 190 L 330 60 C 350 45 365 55 355 75 L 220 210 Z" fill="#cfd8dc" stroke="#263238" stroke-width="8" stroke-linejoin="round"/>
    <!-- 칼날 하이라이트 면 -->
    <path d="M 165 185 L 325 70 L 225 200 Z" fill="#eceff1"/>
    <!-- 칼코등이 (손잡이 막이) -->
    <ellipse cx="145" cy="195" rx="15" ry="25" fill="#ffd54f" stroke="#263238" stroke-width="6" transform="rotate(-35 145 195)"/>
    <!-- 손잡이 (붉은 끈 추적) -->
    <path d="M 135 205 L 80 260" stroke="#b71c1c" stroke-width="22" stroke-linecap="round"/>
    <path d="M 135 205 L 80 260" stroke="#263238" stroke-width="22" stroke-dasharray="10,10" stroke-linecap="round"/>
  </g>
</svg>
```
