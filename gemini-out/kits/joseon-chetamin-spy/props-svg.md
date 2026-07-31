# [소품 목록 + 컷아웃 SVG 초안] 조선의 첩보 기관 '체탐인(遞探人)'과 북방의 그림자 전쟁

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **체탐인의 검은 잠입 복면과 암살용 환도 (Black-Ops Mask & Dagger)**: 야간 침투 시 얼굴을 가리는 어두운 남색/검은 복면 띠와 적을 조용히 제압하는 짧고 날카로운 조선 환도 단검.
2. **세종대왕의 북방 여진족 정찰 지도와 암호 지령서 (Recon Map & Cipher)**: 압록강·두만강 국경 너머 여진족 부족의 배치가 적힌 비밀 군사 정찰 지도와 붉은 왕실 암호문.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 체탐인의 야간 침투용 검은 복면과 암살 단문 환도
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-spy-gear">
    <!-- 암살용 단문 환도 (오른편 아래로 가로지름) -->
    <path d="M 120 220 L 320 80" stroke="#b0bec5" stroke-width="14" stroke-linecap="round"/>
    <path d="M 120 220 L 320 80" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    <!-- 칼끝 날카로운 섬광 -->
    <polygon points="310,70 335,75 320,95" fill="#e0f7fa"/>
    <!-- 환도 칼자루 및 코등이 -->
    <rect x="90" y="210" width="40" height="18" rx="4" fill="#3e2723" stroke="#ffd54f" stroke-width="4" transform="rotate(-35 90 210)"/>
    <ellipse cx="125" cy="215" rx="12" ry="6" fill="#ffd54f" stroke="#3e2723" stroke-width="3" transform="rotate(-35 125 215)"/>
    <!-- 야간 잠입용 검은/남색 복면 천 (왼편) -->
    <path d="M 60 100 C 100 80 180 80 220 100 C 230 130 220 170 180 190 C 140 200 100 190 70 170 Z" fill="#1a237e" stroke="#000000" stroke-width="6"/>
    <!-- 복면 눈구멍 2개 (날카로운 첩보원의 눈빛) -->
    <ellipse cx="110" cy="135" rx="20" ry="12" fill="#ffffff" stroke="#000000" stroke-width="4" transform="rotate(-5 110 135)"/>
    <circle cx="115" cy="135" r="5" fill="#d32f2f"/>
    <ellipse cx="170" cy="135" rx="20" ry="12" fill="#ffffff" stroke="#000000" stroke-width="4" transform="rotate(5 170 135)"/>
    <circle cx="165" cy="135" r="5" fill="#d32f2f"/>
    <!-- 복면 뒤쪽 매듭 끈 -->
    <path d="M 60 120 Q 30 140 20 180 M 65 140 Q 40 160 35 200" fill="none" stroke="#1a237e" stroke-width="10" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 북방 여진족 정찰 군사 지도와 왕실 비밀 암호 지령서
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-recon-map">
    <!-- 북방 군사 지도 두루마리 바닥 -->
    <rect x="50" y="60" width="300" height="200" rx="8" fill="#fff8e1" stroke="#5d4037" stroke-width="6"/>
    <path d="M 50 80 L 350 80 M 50 240 L 350 240" stroke="#8d6e63" stroke-width="4"/>
    <!-- 압록강/두만강 국경 물줄기 지도 표시 -->
    <path d="M 70 180 Q 150 140 230 160 T 330 120" fill="none" stroke="#0288d1" stroke-width="12" stroke-linecap="round"/>
    <text x="180" y="150" fill="#01579b" font-size="14" font-weight="bold">압록·두만강</text>
    <!-- 여진족 막사 적진 거점 표시 (붉은 깃발/X 표시) -->
    <polygon points="120,110 110,125 130,125" fill="#d32f2f" stroke="#3e2723" stroke-width="2"/>
    <line x1="120" y1="125" x2="120" y2="140" stroke="#3e2723" stroke-width="3"/>
    <polygon points="270,90 260,105 280,105" fill="#d32f2f" stroke="#3e2723" stroke-width="2"/>
    <line x1="270" y1="105" x2="270" y2="120" stroke="#3e2723" stroke-width="3"/>
    <!-- 체탐인 침투 경로 화살표 -->
    <path d="M 150 210 Q 170 180 200 170 T 260 130" fill="none" stroke="#d32f2f" stroke-width="5" stroke-dasharray="8,6"/>
    <polygon points="260,130 250,135 255,145" fill="#d32f2f"/>
    <!-- 비밀 암호문 한지 지령서 (오른편 아래 중첩) -->
    <rect x="200" y="160" width="160" height="110" rx="4" fill="#ffecb3" stroke="#4e342e" stroke-width="5" transform="rotate(-8 200 160)"/>
    <!-- '밀(密)' 및 왕실 암호 붉은 스탬프 -->
    <circle cx="280" cy="215" r="28" fill="#b71c1c" fill-opacity="0.85" stroke="#7f0000" stroke-width="4"/>
    <text x="265" y="223" fill="#ffffff" font-size="22" font-weight="bold">密令</text>
  </g>
</svg>
```
