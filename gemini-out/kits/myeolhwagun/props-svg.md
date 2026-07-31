# [소품 목록 + 컷아웃 SVG 초안] 최초의 전문 소방관, 멸화군

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **멸화군 철갈고리와 도끼 (Firefighter Iron Hook & Axe)**: 불이 번지는 초가집 기둥과 지붕을 찍어 당기는 굵고 긴 쇠갈고리(철구)와 파괴용 소방 도끼.
2. **금화 경보종 및 완구 (Fire Alarm Bell & Hand Pump)**: 화재 급보를 알리던 청동 핸드벨(금화종)과 물을 뿜어내던 수동 펌프 완구.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 멸화군 대형 철갈고리(철구)와 소방 도끼
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-fire-tools">
    <!-- 대형 철갈고리 (철구) -->
    <line x1="50" y1="260" x2="280" y2="70" stroke="#5d4037" stroke-width="14" stroke-linecap="round"/>
    <path d="M 280 70 L 330 30 C 350 15 370 25 365 50 C 360 70 330 90 310 85 L 275 75 Z" fill="#78909c" stroke="#263238" stroke-width="8" stroke-linejoin="round"/>
    <!-- 갈고리 날카로운 끝 -->
    <path d="M 330 30 C 355 15 365 40 330 70" fill="none" stroke="#cfd8dc" stroke-width="6"/>
    <!-- 소방 파괴 도끼 -->
    <line x1="160" y1="270" x2="310" y2="120" stroke="#4e342e" stroke-width="12" stroke-linecap="round"/>
    <path d="M 290 140 L 320 110 L 370 140 C 390 160 360 190 330 170 L 290 140 Z" fill="#90a4ae" stroke="#263238" stroke-width="8" stroke-linejoin="round"/>
    <path d="M 290 140 L 270 120 L 290 100 L 310 120 Z" fill="#607d8b" stroke="#263238" stroke-width="6"/>
  </g>
</svg>
```

### S2. 금화 경보종(화재종)과 완구(물총 펌프)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-fire-bell-pump">
    <!-- 청동 경보종 (금화종) -->
    <path d="M 90 180 C 90 100 130 80 160 80 Q 160 60 180 60 Q 200 60 200 80 C 230 80 270 100 270 180 L 290 200 L 70 200 L 90 180 Z" fill="#d4af37" stroke="#3e2723" stroke-width="8" stroke-linejoin="round"/>
    <!-- 종 추 (내부 방울) -->
    <circle cx="180" cy="210" r="15" fill="#5d4037" stroke="#212121" stroke-width="5"/>
    <line x1="180" y1="180" x2="180" y2="195" stroke="#3e2723" stroke-width="6"/>
    <!-- 조선 수동 완구 (대나무/놋쇠 펌프 물총) -->
    <rect x="220" y="150" width="150" height="35" rx="8" fill="#8d6e63" stroke="#263238" stroke-width="7" transform="rotate(-25 220 150)"/>
    <line x1="350" y1="90" x2="385" y2="73" stroke="#b0bec5" stroke-width="12" stroke-linecap="round"/>
    <!-- 물줄기 뿜어짐 효과 -->
    <path d="M 385 73 Q 410 60 420 80 Q 400 90 385 73" fill="#00acc1" stroke="#00838f" stroke-width="4"/>
  </g>
</svg>
```
