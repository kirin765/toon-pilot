# [소품 목록 + 컷아웃 SVG 초안] 소고기에 미친 조선

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **난로회 불판 및 꼬치구이 (Grilled Beef & Brazier Plate)**: 벙거짓골(철모 모양 철판) 위에 숯불이 피어오르고, 간장 양념이 밴 소고기 꼬치(설하멱)가 올려진 미식 소품.
2. **우금령 포고문 (Beef Prohibition Decree)**: 두꺼운 한지에 왕실 관인(붉은 도장)이 찍히고 '우금(牛禁)'이라는 굵은 붓글씨가 명기된 포고장.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 난로회 벙거짓골 불판과 설하멱 (소고기 꼬치)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-nanrohoe-beef">
    <!-- 화로 받침 (황동 화로) -->
    <path d="M 100 240 Q 200 270 300 240 L 280 180 Q 200 200 120 180 Z" fill="#d4af37" stroke="#3e2723" stroke-width="8" stroke-linejoin="round"/>
    <rect x="80" y="235" width="240" height="20" rx="10" fill="#b7950b" stroke="#3e2723" stroke-width="6"/>
    <!-- 숯불과 불꽃 -->
    <path d="M 140 180 C 160 140 180 160 200 130 C 220 160 240 140 260 180 Z" fill="#ff5722" stroke="#bf360c" stroke-width="5"/>
    <path d="M 160 180 C 180 150 200 170 220 145 C 240 170 250 160 250 180 Z" fill="#ffeb3b"/>
    <!-- 벙거짓골 철판 (전립 모양 주철 불판) -->
    <path d="M 70 170 C 120 150 280 150 330 170 L 310 145 C 260 120 140 120 90 145 Z" fill="#37474f" stroke="#263238" stroke-width="8" stroke-linejoin="round"/>
    <ellipse cx="200" cy="135" rx="60" ry="25" fill="#455a64" stroke="#263238" stroke-width="6"/>
    <!-- 설하멱 (양념 소고기 꼬치 2개) -->
    <!-- 꼬치 1 -->
    <line x1="110" y1="90" x2="270" y2="150" stroke="#795548" stroke-width="6" stroke-linecap="round"/>
    <path d="M 150 110 C 160 100 180 110 190 125 C 180 135 160 130 150 110 Z" fill="#5d4037" stroke="#263238" stroke-width="5"/>
    <path d="M 190 125 C 200 115 220 125 230 140 C 220 150 200 145 190 125 Z" fill="#5d4037" stroke="#263238" stroke-width="5"/>
    <!-- 꼬치 2 -->
    <line x1="130" y1="70" x2="290" y2="130" stroke="#795548" stroke-width="6" stroke-linecap="round"/>
    <path d="M 170 90 C 180 80 200 90 210 105 C 200 115 180 110 170 90 Z" fill="#6d4c41" stroke="#263238" stroke-width="5"/>
    <path d="M 210 105 C 220 95 240 105 250 120 C 240 130 220 125 210 105 Z" fill="#6d4c41" stroke="#263238" stroke-width="5"/>
  </g>
</svg>
```

### S2. 우금령 포고문 (소 도살 금지 방포문)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-beef-decree">
    <!-- 나무 게시판 (방포 벽) -->
    <rect x="70" y="30" width="260" height="240" rx="10" fill="#a1887f" stroke="#3e2723" stroke-width="8"/>
    <!-- 한지 공문서 -->
    <rect x="90" y="50" width="220" height="200" fill="#fff9c4" stroke="#5d4037" stroke-width="6"/>
    <!-- 왕실 관인 (붉은 도장 국왕지보) -->
    <rect x="160" y="70" width="80" height="80" fill="#d32f2f" stroke="#b71c1c" stroke-width="5" opacity="0.85"/>
    <circle cx="200" cy="110" r="30" fill="none" stroke="#ffffff" stroke-width="4" stroke-dasharray="8,4"/>
    <!-- 붓글씨 '牛禁(우금)' 컷아웃 표현 -->
    <!-- 牛(소 우) -->
    <path d="M 120 90 L 150 90 M 110 110 L 155 110 M 130 80 L 130 140 M 120 120 L 110 140 M 140 120 L 150 140" stroke="#212121" stroke-width="7" stroke-linecap="round"/>
    <!-- 禁(금할 금) -->
    <path d="M 245 90 L 275 90 M 250 105 L 270 105 M 260 80 L 260 120 M 240 135 L 280 135 M 250 135 L 240 160 M 270 135 L 280 160" stroke="#212121" stroke-width="7" stroke-linecap="round"/>
    <!-- 본문 내용 붓선 요약 -->
    <line x1="110" y1="180" x2="290" y2="180" stroke="#5d4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="200" x2="270" y2="200" stroke="#5d4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="110" y1="220" x2="230" y2="220" stroke="#5d4037" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```
