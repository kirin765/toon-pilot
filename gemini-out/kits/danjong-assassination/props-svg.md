# [소품 목록 + 컷아웃 SVG 초안] 단종의 죽음 뒤에 숨겨진 소름 끼치는 암살 지시서

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **세조 비밀 암살 지시서 (Sejo Secret Order)**: 붉은색 관인이 찍히고 '賜死(사사)' 혹은 '處결(처결)'이라 적힌 음산하고 비밀스러운 밀서.
2. **사약사발과 영월 활줄 (Poison Bowl & Bowstring)**: 칠기 검은 사약 사발과 시살에 쓰인 팽팽하고 섬뜩한 국궁 활줄 묶음.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 세조 비밀 암살 지시서 (밀서)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-secret-order">
    <!-- 밀서 배경 (어두운 색감 한지) -->
    <rect x="70" y="50" width="260" height="200" rx="8" fill="#cfd8dc" stroke="#37474f" stroke-width="8"/>
    <!-- 붉은 비밀 도장 (관인) -->
    <rect x="160" y="80" width="80" height="80" fill="#b71c1c" stroke="#7f0000" stroke-width="5" opacity="0.9"/>
    <!-- 붓글씨 '賜死(사사 - 죽음을 내림)' 컷아웃 -->
    <!-- 賜(줄 사) -->
    <path d="M 110 90 L 145 90 M 110 110 L 145 110 M 120 130 L 140 130 M 127 80 L 127 150" stroke="#212121" stroke-width="6" stroke-linecap="round"/>
    <!-- 死(죽을 사) - 붉고 강렬하게 강조 -->
    <path d="M 245 90 L 285 90 M 250 110 L 280 140 M 280 110 L 250 140 M 265 80 L 265 150" stroke="#880e4f" stroke-width="8" stroke-linecap="round"/>
    <!-- 하단 은밀한 지시 내용 (검은 붓선) -->
    <line x1="100" y1="180" x2="300" y2="180" stroke="#263238" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="205" x2="250" y2="205" stroke="#263238" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="225" x2="190" y2="225" stroke="#880e4f" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 참살 사약 사발과 팽팽한 활줄
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-poison-bowstring">
    <!-- 목재 받침상 (소반) -->
    <path d="M 60 250 L 340 250 L 320 210 L 80 210 Z" fill="#4e342e" stroke="#263238" stroke-width="8" stroke-linejoin="round"/>
    <!-- 검은 칠기 사약 사발 -->
    <path d="M 120 200 C 120 150 200 150 200 200 Z" fill="#212121" stroke="#000000" stroke-width="7"/>
    <ellipse cx="160" cy="150" rx="40" ry="12" fill="#37474f" stroke="#000000" stroke-width="6"/>
    <!-- 사약 붉은 독 기운 효과 -->
    <path d="M 160 145 Q 170 115 150 90" fill="none" stroke="#880e4f" stroke-width="5" stroke-linecap="round"/>
    <!-- 오른편 팽팽히 당겨진 국궁 활과 시위(활줄) -->
    <path d="M 260 220 Q 380 150 280 60" fill="none" stroke="#5d4037" stroke-width="12" stroke-linecap="round"/>
    <!-- 시위 (섬뜩하게 직선으로 당겨진 활줄) -->
    <line x1="260" y1="220" x2="280" y2="60" stroke="#eceff1" stroke-width="6" stroke-linecap="round"/>
    <line x1="260" y1="220" x2="280" y2="60" stroke="#b71c1c" stroke-width="3" stroke-dasharray="10,10"/>
  </g>
</svg>
```
