# [소품 목록 + 컷아웃 SVG 초안] 조선의 퀴어 스캔들, 순빈 봉씨

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **궁중 대식 연화 비단 베개 (Royal Silk Pillow)**: 원앙과 연꽃이 자수되어 있는 붉고 화려한 조선 왕실 여성 침소용 비단 베개.
2. **세종 폐빈 교지 (Decree of Deposing Crown Princess)**: 국왕지보가 찍히고 '폐빈(廢嬪)' 자가 크게 적힌 세종대왕의 왕실 교서.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 궁중 연화 문양 비단 베개
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-royal-pillow">
    <!-- 베개 본체 -->
    <rect x="60" y="80" width="280" height="140" rx="30" fill="#c62828" stroke="#3e2723" stroke-width="8"/>
    <!-- 금박 자수 테두리 -->
    <rect x="75" y="95" width="250" height="110" rx="20" fill="none" stroke="#ffd54f" stroke-width="5" stroke-dasharray="10,5"/>
    <!-- 양끝 골드 장식 (침소 장식 마개) -->
    <ellipse cx="60" cy="150" rx="15" ry="50" fill="#fbc02d" stroke="#3e2723" stroke-width="6"/>
    <ellipse cx="340" cy="150" rx="15" ry="50" fill="#fbc02d" stroke="#3e2723" stroke-width="6"/>
    <!-- 중앙 연꽃 자수 문양 (단순화된 컷아웃) -->
    <path d="M 200 120 Q 185 150 200 180 Q 215 150 200 120" fill="#f8bbd0" stroke="#880e4f" stroke-width="4"/>
    <path d="M 170 140 Q 185 160 200 170 Q 185 150 170 140" fill="#f48fb1" stroke="#880e4f" stroke-width="4"/>
    <path d="M 230 140 Q 215 160 200 170 Q 215 150 230 140" fill="#f48fb1" stroke="#880e4f" stroke-width="4"/>
    <circle cx="200" cy="150" r="10" fill="#ffeb3b" stroke="#880e4f" stroke-width="4"/>
  </g>
</svg>
```

### S2. 세종 폐빈 교지 (왕실 쫓겨남 교서)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-depose-decree">
    <!-- 족자 목봉 -->
    <rect x="50" y="40" width="300" height="20" rx="5" fill="#5d4037" stroke="#263238" stroke-width="6"/>
    <rect x="50" y="240" width="300" height="25" rx="5" fill="#5d4037" stroke="#263238" stroke-width="6"/>
    <!-- 비단 바탕 두루마리 -->
    <rect x="70" y="60" width="260" height="180" fill="#fff9c4" stroke="#5d4037" stroke-width="6"/>
    <!-- 붉은 국왕 인장 -->
    <rect x="160" y="80" width="80" height="80" fill="#d32f2f" stroke="#b71c1c" stroke-width="5" opacity="0.8"/>
    <!-- 붓글씨 '廢嬪(폐빈)' 컷아웃 요약 -->
    <!-- 廢(폐할 폐) -->
    <path d="M 110 90 L 145 90 M 110 105 L 145 105 M 115 120 L 140 120 M 127 80 L 127 150" stroke="#212121" stroke-width="7" stroke-linecap="round"/>
    <!-- 嬪(빈 빈) -->
    <path d="M 250 90 L 285 90 M 250 110 L 285 110 M 265 80 L 265 150 M 255 130 L 280 130" stroke="#212121" stroke-width="7" stroke-linecap="round"/>
    <!-- 하단 본문 붓선 요약 -->
    <line x1="100" y1="180" x2="300" y2="180" stroke="#5d4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="205" x2="260" y2="205" stroke="#5d4037" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```
