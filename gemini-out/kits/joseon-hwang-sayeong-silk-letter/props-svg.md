# [소품 목록 + 컷아웃 SVG 초안] 서구 군함 수백 척과 병사 5만 명으로 조선을 쳐달라? 천주교 박해와 황사영 백서 사건

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **황사영의 비단 편지 백서와 서구 군함 (Silk Letter & Western Warship)**: 1만 3천 자 밀서가 붓글씨로 적힌 명주 비단(황사영 백서)을 쥐고 토굴에서 글을 쓰는 황사영과, 그가 편지에서 파병을 요청한 대포 쏘는 서양 군함.
2. **백서 밀서를 뺏은 조선 포졸과 능지처참 교지 (Arresting Officer & Edict)**: 국경에서 하얀 비단 밀서를 빼앗아 들고 경악하는 포도청 포졸과, 이를 대역죄로 규정해 능지처참을 명한 『순조실록』 1801년 처벌 교지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 비단에 1만 3천 자 밀서를 쓰는 황사영과 요청된 서구 군함
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-silk-letter-warship">
    <!-- 오른편: 배론 토굴에서 하얀 명주 비단에 붓글씨로 밀서를 쓰는 황사영 -->
    <circle cx="280" cy="130" r="40" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 상투와 천주교 유학자 복장 -->
    <path d="M 250 100 Q 280 70 310 100 Z" fill="#212121"/>
    <rect x="240" y="170" width="80" height="100" fill="#efebe9" stroke="#5d4037" stroke-width="4" rx="5"/>
    <path d="M 265 135 L 295 135" stroke="#5d4037" stroke-width="3"/>
    <!-- 손에 쥔 붓과 1만 3천 자 적힌 하얀 비단 편지 (황사영 백서) -->
    <rect x="180" y="160" width="80" height="110" fill="#ffffff" stroke="#d7ccc8" stroke-width="4" rx="3"/>
    <line x1="190" y1="180" x2="250" y2="180" stroke="#212121" stroke-width="2"/>
    <line x1="190" y1="200" x2="250" y2="200" stroke="#212121" stroke-width="2"/>
    <line x1="190" y1="220" x2="250" y2="220" stroke="#212121" stroke-width="2"/>
    <text x="185" y="250" fill="#d32f2f" font-size="14" font-weight="bold">帛書 (군사 5만 요청)</text>
    <!-- 왼편 상단: 편지 속에서 요청한 대포 쏘는 서구 군함 (프랑스/서양 함선) -->
    <path d="M 30 110 L 140 110 L 120 150 L 50 150 Z" fill="#5d4037" stroke="#3e2723" stroke-width="4"/>
    <rect x="75" y="50" width="10" height="60" fill="#3e2723"/>
    <!-- 펄럭이는 돛과 군사들 -->
    <polygon points="85,60 130,85 85,105" fill="#ffffff" stroke="#90a4ae" stroke-width="2"/>
    <circle cx="60" cy="130" r="8" fill="#212121"/>
    <line x1="60" y1="130" x2="20" y2="120" stroke="#ff6d00" stroke-width="4"/>
    <text x="35" y="40" fill="#d32f2f" font-size="16" font-weight="bold">서양 군함과 5만 정예병 파병 요청</text>
    <text x="50" y="285" fill="#212121" font-size="15" font-weight="bold">1801년 신유박해: 황사영 백서 비밀 편지</text>
  </g>
</svg>
```

### S2. 국경에서 밀서 비단을 뺏은 조선 포졸과 순조실록 능지처참 교지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-arrest-edict-sillyu">
    <!-- 왼편: 국경 의주에서 비밀 비단 편지를 빼앗아 들고 눈 부릅뜬 포도청 포졸 -->
    <circle cx="110" cy="110" r="40" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 포졸 전립(벙거지 모자) 및 복장 -->
    <ellipse cx="110" cy="80" rx="45" ry="10" fill="#212121"/>
    <path d="M 90 80 L 130 80 L 120 50 L 100 50 Z" fill="#212121"/>
    <circle cx="95" cy="110" r="6" fill="#000000"/>
    <circle cx="125" cy="110" r="6" fill="#000000"/>
    <rect x="70" y="150" width="80" height="110" fill="#1565c0" stroke="#0d47a1" stroke-width="4" rx="5"/>
    <!-- 포졸이 뺏어 든 하얀 명주 백서 밀서 -->
    <rect x="140" y="120" width="70" height="90" fill="#ffffff" stroke="#d32f2f" stroke-width="3" transform="rotate(10 140 120)"/>
    <text x="145" y="160" fill="#d32f2f" font-size="16" font-weight="bold">大逆罪 (밀서 적발)</text>
    <!-- 오른편: 순조실록 황사영 능지처참 및 박해 교지 -->
    <rect x="230" y="40" width="150" height="210" fill="#fff9c4" stroke="#8d6e63" stroke-width="5" rx="5"/>
    <text x="250" y="80" fill="#b71c1c" font-size="20" font-weight="bold" font-family="serif">純祖實錄</text>
    <text x="245" y="120" fill="#212121" font-size="15" font-weight="bold">외세 군대를 부른 죄</text>
    <text x="245" y="150" fill="#d32f2f" font-size="16" font-weight="bold">황사영 능지처참!</text>
    <text x="245" y="180" fill="#3e2723" font-size="14" font-weight="bold">천주교 탄압 명분화</text>
    <circle cx="305" cy="215" r="20" fill="#d32f2f" opacity="0.8"/>
    <text x="292" y="222" fill="#ffffff" font-size="14" font-weight="bold">斬 (참)</text>
    <text x="40" y="280" fill="#b71c1c" font-size="16" font-weight="bold">외세 출병 기도로 각인된 조선 천주교 비극</text>
  </g>
</svg>
```
