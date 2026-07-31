# [소품 목록 + 컷아웃 SVG 초안] 조선 임진왜란 세계 최초의 시한폭탄 비격진천뢰, 왜군이 쇠공 장난감인 줄 알고 굴리다 폭사한 사연

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 시한폭탄 비격진천뢰 철공과 목곡 도화선 (Bigyeokjincheonroe Time Bomb)**: 묵직한 무쇠로 만든 둥근 폭탄 본체와 폭발 시간을 지연시키는 핵심 장치인 나선 홈 목곡(나무 통), 그리고 타 들어가며 불꽃을 튀기는 도화선.
2. **비격진천뢰 대폭발 사방 비산 철편과 화염 구름 (Exploding Shrapnel & Flame)**: 천지를 진동하는 굉음을 상징하는 강렬한 오렌지색 폭발 화염과 왜군을 치명상 입힌 사방으로 뻗어 나가는 날카로운 무쇠 파편(철편).

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 도화선 불꽃이 튀며 타 들어가는 무쇠 쇠공 비격진천뢰
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-bigyeok-time-bomb">
    <!-- 묵직하고 거대한 흑철색 무쇠 둥근 폭탄 공 (중앙) -->
    <circle cx="180" cy="170" r="85" fill="#37474f" stroke="#1c313a" stroke-width="8"/>
    <!-- 무쇠 질감 입체 음영 -->
    <circle cx="150" cy="140" r="25" fill="#546e7a" opacity="0.5"/>
    <!-- 상단 폭발 시간 조절 나선 홈 나무 홈통 (목곡) -->
    <rect x="165" y="60" width="30" height="30" rx="4" fill="#6d4c41" stroke="#3e2723" stroke-width="4"/>
    <line x1="165" y1="70" x2="195" y2="70" stroke="#3e2723" stroke-width="3"/>
    <line x1="165" y1="80" x2="195" y2="80" stroke="#3e2723" stroke-width="3"/>
    <!-- 타 들어가는 빨간색·노란색 도화선과 불꽃 -->
    <path d="M 180 60 Q 210 30 240 50 Q 270 70 290 40" stroke="#d32f2f" stroke-width="6" fill="none" stroke-linecap="round"/>
    <!-- 도화선 끝 불꽃 스파크 -->
    <polygon points="290,40 280,25 295,20 305,30 315,25 305,45 315,55 295,50 285,60" fill="#ffab00" stroke="#e65100" stroke-width="2"/>
    <polygon points="292,38 287,30 295,28 300,35" fill="#ffffff"/>
    <text x="70" y="280" fill="#263238" font-size="18" font-weight="bold">세계 최초 시한폭탄 (시간 지연)</text>
  </g>
</svg>
```

### S2. 천지를 흔드는 굉음의 대폭발과 사방으로 날아가는 날카로운 쇠 파편
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-bomb-explosion-shrapnel">
    <!-- 거대한 폭발 화염 구름 바깥쪽 (빨간색·주황색) -->
    <path d="M 200 150 M 80 150 Q 50 80 120 70 Q 160 20 220 50 Q 300 30 330 90 Q 380 150 340 210 Q 300 270 220 260 Q 140 280 90 220 Q 40 190 80 150 Z" fill="#dd2c00" stroke="#bf360c" stroke-width="6"/>
    <!-- 폭발 화염 안쪽 (노란색·흰색) -->
    <path d="M 130 150 Q 110 100 160 90 Q 190 60 230 80 Q 280 70 290 120 Q 320 160 280 200 Q 250 230 190 210 Q 140 220 120 180 Z" fill="#ffd54f"/>
    <circle cx="200" cy="150" r="40" fill="#ffffff"/>
    <!-- 사방으로 비산하는 날카로운 흑철색 무쇠 파편 (철편 마름쇠) -->
    <polygon points="30,50 50,70 40,80" fill="#212121" stroke="#000000" stroke-width="2"/>
    <polygon points="360,40 340,70 370,80" fill="#212121" stroke="#000000" stroke-width="2"/>
    <polygon points="20,200 60,190 45,220" fill="#212121" stroke="#000000" stroke-width="2"/>
    <polygon points="370,220 340,240 380,260" fill="#212121" stroke="#000000" stroke-width="2"/>
    <polygon points="180,15 200,35 220,10" fill="#212121" stroke="#000000" stroke-width="2"/>
    <!-- 폭파 충격파 집중 선 -->
    <line x1="200" y1="150" x2="30" y2="30" stroke="#ffffff" stroke-width="4" stroke-dasharray="10,10"/>
    <line x1="200" y1="150" x2="370" y2="30" stroke="#ffffff" stroke-width="4" stroke-dasharray="10,10"/>
    <line x1="200" y1="150" x2="30" y2="270" stroke="#ffffff" stroke-width="4" stroke-dasharray="10,10"/>
    <line x1="200" y1="150" x2="370" y2="270" stroke="#ffffff" stroke-width="4" stroke-dasharray="10,10"/>
    <text x="65" y="290" fill="#b71c1c" font-size="20" font-weight="bold">장난감인 줄 알던 왜군 30여명 즉사</text>
  </g>
</svg>
```
