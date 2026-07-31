# [소품 목록 + 컷아웃 SVG 초안] 현종 시대의 미스터리한 동전 위조 조직

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **사주전 조직의 상평통보 거푸집 모래틀 (Counterfeit Coin Mold)**: 지하 은신처에서 엽전을 주조하기 위해 구멍이 파여 있고 쇳물 자국이 흐르는 엽전 주틀 거푸집.
2. **조정의 사주전 위조단 포도청 체포령 (Arrest Warrant for Counterfeiters)**: '가짜 동전을 만드는 사주전 죄인을 잡으면 큰 상을 내린다'는 관아 붉은 방붙이.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 지하 위조 공장의 상평통보 동전 주물 거푸집 모래틀
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-coin-mold">
    <!-- 무거운 석제/모래주형 거푸집 바닥 틀 -->
    <rect x="60" y="80" width="280" height="180" rx="10" fill="#6d4c41" stroke="#3e2723" stroke-width="8"/>
    <rect x="75" y="95" width="250" height="150" rx="6" fill="#8d6e63" stroke="#4e342e" stroke-width="6"/>
    <!-- 거푸집 속 엽전(상평통보) 주형 구멍 4개 -->
    <circle cx="140" cy="140" r="30" fill="#3e2723" stroke="#ffd54f" stroke-width="5"/>
    <rect x="130" y="130" width="20" height="20" fill="#8d6e63"/>
    <circle cx="260" cy="140" r="30" fill="#3e2723" stroke="#ffd54f" stroke-width="5"/>
    <rect x="250" y="130" width="20" height="20" fill="#8d6e63"/>
    <circle cx="140" cy="210" r="30" fill="#3e2723" stroke="#ffd54f" stroke-width="5"/>
    <rect x="130" y="200" width="20" height="20" fill="#8d6e63"/>
    <circle cx="260" cy="210" r="30" fill="#3e2723" stroke="#ffd54f" stroke-width="5"/>
    <rect x="250" y="200" width="20" height="20" fill="#8d6e63"/>
    <!-- 동전 구멍들을 연결하는 쇳물 물길 (탕도) -->
    <line x1="140" y1="170" x2="140" y2="180" stroke="#ffab00" stroke-width="8" stroke-linecap="round"/>
    <line x1="260" y1="170" x2="260" y2="180" stroke="#ffab00" stroke-width="8" stroke-linecap="round"/>
    <line x1="170" y1="140" x2="230" y2="140" stroke="#ffab00" stroke-width="8" stroke-linecap="round"/>
    <line x1="170" y1="210" x2="230" y2="210" stroke="#ffab00" stroke-width="8" stroke-linecap="round"/>
    <!-- 갓 부은 뜨거운 쇳물 불꽃/연기 효과 -->
    <path d="M 200 60 C 180 80 220 80 200 95" fill="none" stroke="#ff5722" stroke-width="6" stroke-linecap="round"/>
    <path d="M 120 70 L 130 90 M 270 70 L 260 90" stroke="#ffeb3b" stroke-width="5" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 조정의 사주전 위조단 체포령 관아 방붙이
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-counterfeit-warrant">
    <!-- 나무 관아 벽면 배경 요약 -->
    <rect x="30" y="20" width="340" height="260" fill="#5d4037" stroke="#3e2723" stroke-width="6"/>
    <line x1="30" y1="80" x2="370" y2="80" stroke="#4e342e" stroke-width="4"/>
    <line x1="30" y1="160" x2="370" y2="160" stroke="#4e342e" stroke-width="4"/>
    <line x1="30" y1="240" x2="370" y2="240" stroke="#4e342e" stroke-width="4"/>
    <!-- 체포령 한지 방붙이 -->
    <rect x="80" y="50" width="240" height="200" rx="8" fill="#fff9c4" stroke="#8d6e63" stroke-width="8"/>
    <!-- '체포(捕)' 및 위조 동전 엄경 고발 붓글씨 컷아웃 -->
    <!-- '捕(잡을 포)' 느낌 요약 -->
    <path d="M 130 90 L 160 90 M 145 75 L 145 140 M 135 110 L 155 110 M 170 80 L 200 80 M 185 80 L 185 140 M 170 120 L 200 120 M 210 90 L 250 90 M 230 75 L 230 145" stroke="#b71c1c" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- 세로 포고문 줄 (엄벌 고지) -->
    <line x1="130" y1="160" x2="130" y2="220" stroke="#212121" stroke-width="7" stroke-dasharray="15,8"/>
    <line x1="180" y1="160" x2="180" y2="230" stroke="#212121" stroke-width="7" stroke-dasharray="20,10"/>
    <line x1="230" y1="170" x2="230" y2="220" stroke="#212121" stroke-width="7" stroke-dasharray="12,12"/>
    <!-- 포도청 관인 (붉은 스탬프) -->
    <rect x="235" y="180" width="60" height="60" rx="4" fill="#d32f2f" fill-opacity="0.85" stroke="#b71c1c" stroke-width="5" transform="rotate(-10 235 180)"/>
    <path d="M 250 195 L 280 195 M 265 190 L 265 220" stroke="#ffffff" stroke-width="5" transform="rotate(-10 250 195)"/>
  </g>
</svg>
```
