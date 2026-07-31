# [소품 목록 + 컷아웃 SVG 초안] 세계 최초의 유네스코 의학책, 동의보감

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **동의보감 목판 선장본 (Donguibogam Medical Encyclopedia)**: 전통 붉은/푸른색 표지에 '東醫寶鑑(동의보감)'이라는 힘찬 한자 붓글씨 제첨이 붙은 조선 고서 책첩.
2. **조선 약탕기와 한약재 (Herbal Medicine Pot & Herbs)**: 숯불 화로 위에 올려진 흑갈색 옹기 약탕기와 인삼, 감초 등이 담긴 한약 첩지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 동의보감 25책 목판본 고서
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-donguibogam">
    <!-- 책 묶음 받침 (아래에 겹쳐진 책들) -->
    <rect x="70" y="160" width="260" height="50" rx="6" fill="#4e342e" stroke="#263238" stroke-width="7"/>
    <rect x="60" y="120" width="260" height="50" rx="6" fill="#3e2723" stroke="#263238" stroke-width="7"/>
    <line x1="60" y1="145" x2="320" y2="145" stroke="#fff9c4" stroke-width="4"/>
    <!-- 상단 메인 동의보감 책 (황갈색/비단 표지) -->
    <rect x="80" y="60" width="240" height="150" rx="8" fill="#1565c0" stroke="#0d47a1" stroke-width="8"/>
    <!-- 제본 제첨 (흰색 한지 상표) -->
    <rect x="110" y="80" width="55" height="110" fill="#fff9c4" stroke="#263238" stroke-width="5"/>
    <!-- 붓글씨 '東醫寶鑑(동의보감)' 요약 컷아웃 -->
    <!-- 東(동역 동) -->
    <path d="M 125 90 L 150 90 M 120 100 L 155 100 M 130 95 L 130 115 M 125 115 L 150 115 M 137 85 L 137 125" stroke="#212121" stroke-width="5" stroke-linecap="round"/>
    <!-- 醫(의원 의) -->
    <path d="M 120 135 L 155 135 M 125 145 L 150 145 M 130 130 L 130 155 M 125 155 L 150 155" stroke="#212121" stroke-width="5" stroke-linecap="round"/>
    <!-- 寶鑑(보감 - 하단 약선) -->
    <path d="M 125 165 L 150 165 M 130 175 L 145 175 M 125 180 L 150 180" stroke="#212121" stroke-width="5" stroke-linecap="round"/>
    <!-- 붉은 왕실 관인 (내의원 인장) -->
    <rect x="230" y="120" width="60" height="60" fill="#d32f2f" stroke="#b71c1c" stroke-width="4" opacity="0.85"/>
    <!-- 전통 오침제본 끈 표현 -->
    <circle cx="295" cy="80" r="5" fill="#ffffff"/>
    <circle cx="295" cy="110" r="5" fill="#ffffff"/>
    <circle cx="295" cy="140" r="5" fill="#ffffff"/>
    <circle cx="295" cy="170" r="5" fill="#ffffff"/>
    <circle cx="295" cy="200" r="5" fill="#ffffff"/>
  </g>
</svg>
```

### S2. 약탕기와 전통 한약첩 (인삼, 감초)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-herbal-pot">
    <!-- 풍로 화로 받침 -->
    <path d="M 80 260 L 260 260 L 240 190 L 100 190 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="8" stroke-linejoin="round"/>
    <!-- 숯불 불꽃 -->
    <path d="M 130 190 Q 170 150 210 190" fill="#ff5722" stroke="#bf360c" stroke-width="4"/>
    <!-- 흑갈색 옹기 약탕기 -->
    <path d="M 110 170 C 90 140 100 100 130 100 L 210 100 C 240 100 250 140 230 170 C 220 190 120 190 110 170 Z" fill="#3e2723" stroke="#212121" stroke-width="8" stroke-linejoin="round"/>
    <!-- 약탕기 손잡이 및 주둥이 -->
    <path d="M 230 130 L 290 110 L 285 95 L 225 115 Z" fill="#5d4037" stroke="#212121" stroke-width="6"/>
    <!-- 흰 김 올라오는 효과 -->
    <path d="M 150 90 C 140 60 170 50 160 30" fill="none" stroke="#eceff1" stroke-width="6" stroke-linecap="round"/>
    <path d="M 190 90 C 180 70 210 60 200 40" fill="none" stroke="#cfd8dc" stroke-width="6" stroke-linecap="round"/>
    <!-- 오른쪽 한약첩지와 인삼 -->
    <rect x="270" y="180" width="90" height="70" rx="4" fill="#fff9c4" stroke="#795548" stroke-width="6" transform="rotate(15 270 180)"/>
    <line x1="285" y1="210" x2="355" y2="210" stroke="#d4af37" stroke-width="8" transform="rotate(15 270 180)"/>
    <!-- 인삼 뿌리 컷아웃 -->
    <path d="M 310 140 C 320 130 335 130 340 150 C 345 170 330 190 320 190 L 310 210 M 330 185 L 345 205" fill="none" stroke="#d7ccc8" stroke-width="10" stroke-linecap="round"/>
  </g>
</svg>
```
