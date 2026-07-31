# [소품 목록 + 컷아웃 SVG 초안] 조선 임금의 이동식 변기 매화틀과 왕의 똥을 직접 맛보며 건강을 진찰했던 내의원 어의들의 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 왕실 붉은색 이동식 변기 매화틀 (Joseon Royal Stool Maehwatseul)**: 붉은 주칠을 하고 등받이와 팔걸이, 비단 푹신한 받침을 대어 왕이 편하게 앉는 목제 좌식 변기와 중앙의 구리 매화 그릇.
2. **왕의 매화(똥)를 맛보며 진찰하는 내의원 어의 (Royal Physician Tasting Feces)**: 왕의 대변(매화)을 막대기로 살짝 찍어 혀 끝에 대며 눈을 찌푸린 채 진지하게 위장 상태를 감별하는 초록색 관복의 조선 어의.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 붉은 주칠과 비단 쿠션이 깔린 왕의 이동식 좌식 변기 매화틀
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-royal-stool-maehwatseul">
    <!-- 매화틀 목제 프레임 배경 (주칠 붉은색) -->
    <path d="M 100 80 L 300 80 L 320 240 L 80 240 Z" fill="#b71c1c" stroke="#3e2723" stroke-width="6"/>
    <!-- 등받이 및 좌우 팔걸이 프레임 -->
    <rect x="110" y="40" width="180" height="40" fill="#d32f2f" stroke="#3e2723" stroke-width="5" rx="10"/>
    <rect x="70" y="90" width="30" height="80" fill="#d32f2f" stroke="#3e2723" stroke-width="5" rx="5"/>
    <rect x="300" y="90" width="30" height="80" fill="#d32f2f" stroke="#3e2723" stroke-width="5" rx="5"/>
    <!-- 푹신한 비단 방석 깔개 (노란 고달 보료) -->
    <ellipse cx="200" cy="120" rx="90" ry="30" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <!-- 중앙에 뚫린 구멍과 내부 구리 매화 그릇 -->
    <ellipse cx="200" cy="120" rx="40" ry="15" fill="#3e2723"/>
    <ellipse cx="200" cy="125" rx="35" ry="12" fill="#8d6e63" stroke="#ffd54f" stroke-width="2"/>
    <!-- 매화꽃 문양 장식 (왕의 대변 미화 상징) -->
    <circle cx="200" cy="190" r="18" fill="#f8bbd0" stroke="#c2185b" stroke-width="3"/>
    <circle cx="200" cy="190" r="6" fill="#ffd54f"/>
    <circle cx="150" cy="210" r="12" fill="#f8bbd0" stroke="#c2185b" stroke-width="2"/>
    <circle cx="250" cy="210" r="12" fill="#f8bbd0" stroke="#c2185b" stroke-width="2"/>
    <text x="120" y="275" fill="#b71c1c" font-size="18" font-weight="bold">임금의 이동식 변기 매화틀</text>
  </g>
</svg>
```

### S2. 왕의 매화를 젓가락으로 찍어 직접 혀로 맛보는 내의원 어의
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-physician-tasting-feces">
    <!-- 오른편: 초록색 관복을 입은 내의원 어의 얼굴 및 상반신 -->
    <circle cx="270" cy="120" r="50" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <rect x="220" y="170" width="100" height="110" fill="#2e7d32" stroke="#1b5e20" stroke-width="5" rx="10"/>
    <!-- 어의 사모 (검은 관모) -->
    <path d="M 230 80 L 310 80 L 300 40 L 240 40 Z" fill="#212121" stroke="#000000" stroke-width="4"/>
    <!-- 미각 진찰하는 어의의 표정 (곤혹스러움과 진지함) -->
    <ellipse cx="250" cy="115" rx="6" ry="4" fill="#5d4037"/>
    <ellipse cx="290" cy="115" rx="6" ry="4" fill="#5d4037"/>
    <path d="M 240 105 Q 250 110 260 105" stroke="#5d4037" stroke-width="3" fill="none"/>
    <path d="M 280 105 Q 290 110 300 105" stroke="#5d4037" stroke-width="3" fill="none"/>
    <!-- 내밀어 혀 끝에 맛을 보는 입 모양 -->
    <path d="M 260 145 Q 270 155 280 145" fill="#d32f2f" stroke="#b71c1c" stroke-width="2"/>
    <ellipse cx="265" cy="148" rx="5" ry="7" fill="#ff8a80"/>
    <!-- 왼편: 매화 그릇에 담긴 왕의 매화(대변)와 찍어 올린 막대기 -->
    <ellipse cx="100" cy="200" rx="50" ry="20" fill="#8d6e63" stroke="#3e2723" stroke-width="5"/>
    <ellipse cx="100" cy="195" rx="40" ry="12" fill="#6d4c41"/>
    <!-- 막대기 (어의의 손이 잡고 혀로 가져감) -->
    <line x1="100" y1="195" x2="260" y2="148" stroke="#ffd54f" stroke-width="5" stroke-linecap="round"/>
    <circle cx="255" cy="150" r="6" fill="#6d4c41"/>
    <text x="60" y="280" fill="#1b5e20" font-size="16" font-weight="bold">똥 맛으로 왕의 건강을 진찰 (상분)</text>
    <text x="50" y="40" fill="#d32f2f" font-size="20" font-weight="bold">조선 어의들의 충격 진료법</text>
  </g>
</svg>
```
