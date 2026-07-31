# [소품 목록 + 컷아웃 SVG 초안] 인종 독살설, 문정왕후의 저주받은 인절미(떡)

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **문정왕후의 저주받은 떡상 (Queen Munjeong Poisoned Tteok Tray)**: 화려한 붉은 칠기 자개 접시 위에 놓인, 쫀득해 보이지만 보라색/녹색 독 기운이 올라오는 떡.
2. **어의 탕약과 변색된 은침 (Royal Bowl & Blackened Silver Needle)**: 궁중 탕약 사발과, 독성(비소/부자 등)에 반응하여 끝부분이 새까맣게 변색된 검은 은비녀.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 문정왕후의 저주받은 인절미 접시
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-poison-tteok">
    <!-- 궁중 붉은 자개 받침 접시 -->
    <ellipse cx="200" cy="220" rx="140" ry="40" fill="#b71c1c" stroke="#5d4037" stroke-width="8"/>
    <ellipse cx="200" cy="210" rx="120" ry="30" fill="#d32f2f" stroke="#ff8a80" stroke-width="4"/>
    <!-- 자개 무늬 요약 -->
    <circle cx="120" cy="215" r="5" fill="#fff9c4"/>
    <circle cx="280" cy="215" r="5" fill="#fff9c4"/>
    <!-- 인절미 / 화전 떡 묶음 (노란 콩고물 떡) -->
    <rect x="130" y="140" width="70" height="50" rx="12" fill="#fff59d" stroke="#fbc02d" stroke-width="6"/>
    <rect x="190" y="130" width="75" height="55" rx="12" fill="#fff59d" stroke="#fbc02d" stroke-width="6"/>
    <rect x="160" y="160" width="80" height="50" rx="12" fill="#fff59d" stroke="#fbc02d" stroke-width="6"/>
    <!-- 콩고물 가루 표현 -->
    <circle cx="150" cy="155" r="3" fill="#f57f17"/>
    <circle cx="220" cy="150" r="3" fill="#f57f17"/>
    <circle cx="180" cy="180" r="3" fill="#f57f17"/>
    <!-- 치명적인 보랏빛/녹색 독 기운 연기 (컷아웃 스타일) -->
    <path d="M 160 130 Q 140 90 170 50" fill="none" stroke="#9c27b0" stroke-width="7" stroke-linecap="round"/>
    <path d="M 220 120 Q 240 80 210 40" fill="none" stroke="#7cb342" stroke-width="7" stroke-linecap="round"/>
    <!-- 해골 모양 미니 독 마크 -->
    <circle cx="190" cy="80" r="14" fill="#9c27b0" stroke="#ffffff" stroke-width="3"/>
    <circle cx="185" cy="78" r="3" fill="#ffffff"/>
    <circle cx="195" cy="78" r="3" fill="#ffffff"/>
  </g>
</svg>
```

### S2. 궁중 탕약 사발과 까맣게 변색된 은침
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-black-needle">
    <!-- 궁중 백자 시탕 찻잔 -->
    <path d="M 110 180 C 110 240 250 240 250 180 Z" fill="#eceff1" stroke="#37474f" stroke-width="8"/>
    <ellipse cx="180" cy="180" rx="70" ry="20" fill="#cfd8dc" stroke="#37474f" stroke-width="6"/>
    <ellipse cx="180" cy="183" rx="60" ry="12" fill="#4e342e"/>
    <!-- 찻잔 받침대 -->
    <path d="M 90 235 L 270 235 L 250 260 L 110 260 Z" fill="#8d6e63" stroke="#3e2723" stroke-width="6" stroke-linejoin="round"/>
    <!-- 기미용 은침 (은비녀 / 침) -->
    <line x1="280" y1="60" x2="160" y2="190" stroke="#cfd8dc" stroke-width="12" stroke-linecap="round"/>
    <line x1="280" y1="60" x2="160" y2="190" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    <!-- 은침 손잡이 화려한 장식 -->
    <circle cx="290" cy="50" r="16" fill="#ffd54f" stroke="#f57f17" stroke-width="5"/>
    <!-- 탕약에 닿아 새까맣게 변색된 독 반응 은침 끝 -->
    <line x1="190" y1="158" x2="155" y2="195" stroke="#212121" stroke-width="14" stroke-linecap="round"/>
    <!-- 변색 충격 효과선 -->
    <line x1="130" y1="170" x2="110" y2="160" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
    <line x1="140" y1="210" x2="120" y2="225" stroke="#d32f2f" stroke-width="5" stroke-linecap="round"/>
  </g>
</svg>
```
