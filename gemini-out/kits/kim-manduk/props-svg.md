# [소품 목록 + 컷아웃 SVG 초안] 제주도를 구한 흙수저 CEO, 김만덕

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **김만덕의 제주 무역 장부와 엽전 (Manduk Trade Ledger & Coins)**: 표지에 '萬德客主(만덕객주)'라 쓰인 상업 계산 장부와 산처럼 쌓인 상평통보 엽전 꾸러미.
2. **구휼 쌀가마니와 따뜻한 쌀죽 (Relief Rice Sacks & Porridge Bowl)**: 육지에서 배로 실어 온 황갈색 짚 쌀가마니들과 굶주린 백성에게 베푼 흰 쌀죽 김 모락모락 그릇.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 만덕객주 상업 장부와 상평통보 엽전 산
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-ledger-coins">
    <!-- 객주 장부 서책 (왼편) -->
    <rect x="50" y="80" width="160" height="180" rx="8" fill="#fff9c4" stroke="#5d4037" stroke-width="8"/>
    <rect x="70" y="100" width="40" height="100" fill="#ffffff" stroke="#212121" stroke-width="4"/>
    <!-- 한자 '萬德(만덕)' 요약 컷아웃 -->
    <path d="M 80 115 L 100 115 M 85 125 L 95 125 M 80 135 L 100 135" stroke="#212121" stroke-width="4" stroke-linecap="round"/>
    <path d="M 80 155 L 100 155 M 85 165 L 95 165 M 80 175 L 100 175 M 90 150 L 90 185" stroke="#212121" stroke-width="4" stroke-linecap="round"/>
    <line x1="120" y1="120" x2="190" y2="120" stroke="#8d6e63" stroke-width="5"/>
    <line x1="120" y1="150" x2="190" y2="150" stroke="#8d6e63" stroke-width="5"/>
    <line x1="120" y1="180" x2="190" y2="180" stroke="#8d6e63" stroke-width="5"/>
    <!-- 오른편 산더미처럼 쌓인 상평통보 엽전 묶음 -->
    <circle cx="270" cy="230" r="35" fill="#fbc02d" stroke="#f57f17" stroke-width="6"/>
    <rect x="258" y="218" width="24" height="24" fill="#ffffff" stroke="#f57f17" stroke-width="4"/>
    <circle cx="330" cy="220" r="35" fill="#ffd54f" stroke="#f57f17" stroke-width="6"/>
    <rect x="318" y="208" width="24" height="24" fill="#ffffff" stroke="#f57f17" stroke-width="4"/>
    <circle cx="300" cy="170" r="35" fill="#fbc02d" stroke="#f57f17" stroke-width="6"/>
    <rect x="288" y="158" width="24" height="24" fill="#ffffff" stroke="#f57f17" stroke-width="4"/>
    <circle cx="260" cy="130" r="35" fill="#ffd54f" stroke="#f57f17" stroke-width="6"/>
    <rect x="248" y="118" width="24" height="24" fill="#ffffff" stroke="#f57f17" stroke-width="4"/>
    <!-- 엽전 묶음 붉은 끈 -->
    <path d="M 270 230 C 290 200 300 170 260 130" fill="none" stroke="#d32f2f" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 구휼 쌀가마니와 김 모락모락 쌀죽 그릇
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-rice-porridge">
    <!-- 짚 쌀가마니 2가마니 (배경 및 받침) -->
    <rect x="50" y="150" width="180" height="110" rx="20" fill="#d7ccc8" stroke="#5d4037" stroke-width="8"/>
    <path d="M 50 180 L 230 180 M 50 210 L 230 210 M 80 150 L 80 260 M 200 150 L 200 260" stroke="#8d6e63" stroke-width="5" stroke-dasharray="10,5"/>
    <rect x="80" y="90" width="160" height="90" rx="18" fill="#efebe9" stroke="#5d4037" stroke-width="7" transform="rotate(-10 80 90)"/>
    <path d="M 90 120 L 220 100 M 100 150 L 230 130" stroke="#8d6e63" stroke-width="5" stroke-dasharray="8,4"/>
    <!-- 흰 쌀 입자 넘쳐흐름 표현 -->
    <circle cx="150" cy="80" r="8" fill="#ffffff" stroke="#bcaaa4" stroke-width="2"/>
    <circle cx="170" cy="75" r="8" fill="#ffffff" stroke="#bcaaa4" stroke-width="2"/>
    <circle cx="190" cy="82" r="8" fill="#ffffff" stroke="#bcaaa4" stroke-width="2"/>
    <!-- 오른편 앞쪽 따뜻한 구휼 쌀죽 옹기 그릇 -->
    <path d="M 230 200 C 230 250 370 250 370 200 Z" fill="#4e342e" stroke="#212121" stroke-width="7"/>
    <ellipse cx="300" cy="200" rx="70" ry="20" fill="#ffffff" stroke="#212121" stroke-width="6"/>
    <ellipse cx="300" cy="202" rx="60" ry="12" fill="#fff9c4"/>
    <!-- 죽 그릇 받침 -->
    <path d="M 260 250 L 340 250 L 330 270 L 270 270 Z" fill="#3e2723" stroke="#212121" stroke-width="6"/>
    <!-- 김 모락모락 효과 -->
    <path d="M 280 170 Q 270 140 290 110" fill="none" stroke="#eceff1" stroke-width="6" stroke-linecap="round"/>
    <path d="M 320 170 Q 330 140 310 110" fill="none" stroke="#cfd8dc" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```
