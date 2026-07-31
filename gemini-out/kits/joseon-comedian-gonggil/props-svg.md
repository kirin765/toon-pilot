# [소품 목록 + 컷아웃 SVG 초안] 조선의 궁중 코미디언 '우인(優人)' 공길과 연산군의 눈물

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **광대 공길의 늙은 선비 풍자 연희 탈과 부채 (Satire Mask & Fan)**: 연산군 앞에서 부패하고 무능한 선비와 왕을 흉내 냈던 익살스러운 하회/산대극 연희 탈과 펼친 합죽선 부채.
2. **연산군의 금장 향락 술잔과 불경죄 사형 교지 (Tyrant Cup & Decree)**: 폭군의 궁중 연회를 상징하는 붉은 금장 술잔과 광대의 풍자에 극대노해 내린 불경죄 처벌 교지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 광대 공길의 늙은 선비 풍자 연희 탈과 춤사위 부채
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-jester-gear">
    <!-- 펼친 연희 부채 (합죽선 - 바탕 위쪽 가로지름) -->
    <path d="M 100 200 L 40 80 A 180 180 0 0 1 360 80 L 300 200 Z" fill="#fff9c4" stroke="#d32f2f" stroke-width="6"/>
    <path d="M 200 220 L 40 80 M 200 220 L 100 60 M 200 220 L 200 50 M 200 220 L 300 60 M 200 220 L 360 80" stroke="#8d6e63" stroke-width="4"/>
    <circle cx="200" cy="220" r="12" fill="#3e2723" stroke="#ffd54f" stroke-width="3"/>
    <!-- 풍자 연희 탈 (늙은 선비 흉내 익살 탈 - 중앙 앞쪽) -->
    <ellipse cx="200" cy="150" rx="70" ry="85" fill="#ffcc80" stroke="#5d4037" stroke-width="6"/>
    <!-- 탈 뚫린 눈구멍 (익살스럽고 날카로운 눈빛) -->
    <path d="M 160 130 Q 175 120 190 130" fill="none" stroke="#3e2723" stroke-width="6" stroke-linecap="round"/>
    <path d="M 210 130 Q 225 120 240 130" fill="none" stroke="#3e2723" stroke-width="6" stroke-linecap="round"/>
    <circle cx="175" cy="135" r="8" fill="#263238"/>
    <circle cx="225" cy="135" r="8" fill="#263238"/>
    <!-- 익살스러운 매부리코와 하회탈 비웃는 큰 입 -->
    <path d="M 195 135 Q 210 160 190 170" fill="none" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/>
    <path d="M 160 190 Q 200 230 240 190" fill="#b71c1c" stroke="#3e2723" stroke-width="6"/>
    <path d="M 170 195 Q 200 210 230 195" fill="#ffffff"/>
    <!-- 탈 양옆 붉은 끈 -->
    <path d="M 130 150 Q 90 170 80 220 M 270 150 Q 310 170 320 220" fill="none" stroke="#d32f2f" stroke-width="8" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 연산군의 향락 금장 붉은 술잔과 불경죄 처벌 교지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-tyrant-cup">
    <!-- 연산군의 궁중 향락 붉은 금장 옥잔 (왼편) -->
    <ellipse cx="120" cy="100" rx="45" ry="18" fill="#b71c1c" stroke="#ffd54f" stroke-width="6"/>
    <path d="M 75 100 C 75 160 165 160 165 100" fill="#d32f2f" stroke="#ffd54f" stroke-width="6"/>
    <rect x="110" y="148" width="20" height="40" fill="#ffd54f" stroke="#3e2723" stroke-width="4"/>
    <ellipse cx="120" cy="190" rx="35" ry="12" fill="#ffd54f" stroke="#3e2723" stroke-width="4"/>
    <!-- 술잔에서 넘쳐흐르는 술 (향락과 공포) -->
    <path d="M 80 105 Q 70 130 75 150" fill="none" stroke="#ff80ab" stroke-width="6" stroke-linecap="round"/>
    <!-- 불경죄 처벌 붉은 교지 문서 (오른편 아래 중첩) -->
    <rect x="170" y="120" width="190" height="130" rx="6" fill="#fff8e1" stroke="#4e342e" stroke-width="6" transform="rotate(8 170 120)"/>
    <!-- '불경(不敬) / 처벌' 붉은 붓글씨 및 옥새 찍힘 -->
    <rect x="280" y="150" width="55" height="55" rx="4" fill="#d32f2f" fill-opacity="0.85" stroke="#7f0000" stroke-width="4" transform="rotate(8 280 150)"/>
    <text x="290" y="185" fill="#ffffff" font-size="20" font-weight="bold" transform="rotate(8 290 185)">罪處</text>
    <path d="M 190 160 L 260 170 M 190 185 L 255 195 M 190 210 L 270 220" stroke="#3e2723" stroke-width="5" stroke-linecap="round" transform="rotate(8 190 160)"/>
  </g>
</svg>
```
