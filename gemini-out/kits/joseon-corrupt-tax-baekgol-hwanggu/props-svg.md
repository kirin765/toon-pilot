# [소품 목록 + 컷아웃 SVG 초안] 조선 후기 죽은 백골과 갓난아기에게까지 군포를 수탈한 삼정의 문란 백골징수와 황구첨정의 잔혹사

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **백골징수 해골과 황구첨정 갓난아기 군포 통지서 (Skeleton & Baby Tax Document)**: 무덤에서 파낸 으스스한 백골 해골과 노란 공갈 젖꼭지를 문 갓난아기에게 동시 발부된 붉은 세금(포목) 독촉 문서.
2. **부패한 아전 매질 몽둥이와 정약용 목민심서 애절양 (Clerk Whip & Mokminsimseo Scroll)**: 가난한 백성의 소를 강탈하고 매질하는 탐관오리 아전의 무서운 곤장 몽둥이와, 농민의 피눈물을 고발한 정약용의 저서 『목민심서』 서책.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 무덤 속 백골 해골과 노란 입술 갓난아기에게 떨어진 세금 문서
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-baekgol-hwanggu-tax">
    <!-- 왼편: 10년 전 죽은 조상의 으스스한 백골 해골 (백골징수) -->
    <circle cx="100" cy="130" r="45" fill="#eceff1" stroke="#37474f" stroke-width="5"/>
    <ellipse cx="85" cy="120" rx="10" ry="12" fill="#263238"/>
    <ellipse cx="115" cy="120" rx="10" ry="12" fill="#263238"/>
    <polygon points="100,135 93,150 107,150" fill="#37474f"/>
    <rect x="80" y="160" width="40" height="20" fill="#cfd8dc" stroke="#37474f" stroke-width="3"/>
    <line x1="90" y1="160" x2="90" y2="180" stroke="#37474f" stroke-width="3"/>
    <line x1="100" y1="160" x2="100" y2="180" stroke="#37474f" stroke-width="3"/>
    <line x1="110" y1="160" x2="110" y2="180" stroke="#37474f" stroke-width="3"/>
    <text x="50" y="210" fill="#37474f" font-size="16" font-weight="bold">죽은 자 군포 (백골징수)</text>
    <!-- 오른편: 태어난 지 사흘 된 노란 입술 갓난아기 (황구첨정) -->
    <circle cx="280" cy="140" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <circle cx="265" cy="130" r="6" fill="#5d4037"/>
    <circle cx="295" cy="130" r="6" fill="#5d4037"/>
    <!-- 노란 부리 (공갈 입술) -->
    <ellipse cx="280" cy="150" rx="12" ry="8" fill="#ffd54f" stroke="#f57c00" stroke-width="3"/>
    <!-- 아기 배냇저고리 -->
    <path d="M 235 185 L 325 185 L 340 240 L 220 240 Z" fill="#ffffff" stroke="#90a4ae" stroke-width="4"/>
    <text x="220" y="265" fill="#e65100" font-size="16" font-weight="bold">사흘 갓난아기 (황구첨정)</text>
    <!-- 중앙 상단: 붉은색 관아 군포 징수 세금 통지서 (징세) -->
    <rect x="150" y="30" width="80" height="100" fill="#ffcdd2" stroke="#b71c1c" stroke-width="4" rx="5"/>
    <text x="170" y="70" fill="#b71c1c" font-size="22" font-weight="bold">軍</text>
    <text x="170" y="105" fill="#b71c1c" font-size="22" font-weight="bold">布</text>
    <text x="70" y="290" fill="#b71c1c" font-size="18" font-weight="bold">시체와 아기에게 물린 지옥 세금</text>
  </g>
</svg>
```

### S2. 탐관오리 아전의 매질 몽둥이와 정약용 목민심서 책
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-mokminsimseo-whip">
    <!-- 왼편: 백성을 매질하고 소를 뺏는 아전의 붉은 곤장 몽둥이 -->
    <path d="M 50 240 L 140 40 L 170 55 L 80 255 Z" fill="#8d6e63" stroke="#3e2723" stroke-width="5"/>
    <line x1="75" y1="185" x2="155" y2="215" stroke="#3e2723" stroke-width="4"/>
    <line x1="105" y1="120" x2="165" y2="150" stroke="#3e2723" stroke-width="4"/>
    <text x="40" y="280" fill="#3e2723" font-size="16" font-weight="bold">가혹한 가산 수탈 매질</text>
    <!-- 오른편: 정약용이 백성의 피눈물을 고발한 서책 목민심서 (목민) -->
    <rect x="200" y="70" width="160" height="180" fill="#1e88e5" stroke="#0d47a1" stroke-width="6" rx="6"/>
    <!-- 책 표지 전통 문양 및 제본 선 -->
    <line x1="230" y1="70" x2="230" y2="250" stroke="#ffffff" stroke-width="3" stroke-dasharray="10,10"/>
    <rect x="250" y="90" width="80" height="130" fill="#ffffff" stroke="#0d47a1" stroke-width="3"/>
    <text x="270" y="130" fill="#0d47a1" font-size="24" font-weight="bold" font-family="serif">牧</text>
    <text x="270" y="165" fill="#0d47a1" font-size="24" font-weight="bold" font-family="serif">民</text>
    <text x="270" y="200" fill="#0d47a1" font-size="24" font-weight="bold" font-family="serif">書</text>
    <!-- 눈물 방울 (정약용의 애절양 슬픔) -->
    <path d="M 180 150 Q 170 170 180 185 Q 190 170 180 150" fill="#00acc1"/>
    <text x="200" y="280" fill="#0d47a1" font-size="16" font-weight="bold">정약용 애절양 눈물의 기록</text>
  </g>
</svg>
```
