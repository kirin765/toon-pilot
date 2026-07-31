# [소품 목록 + 컷아웃 SVG 초안] 영조의 숨겨진 트라우마, 경종 독살설

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **경종 독살설 게장과 생감 소반 (Soy Sauce Crab & Persimmon Tray)**: 조선 궁중 목재 소반 위에 놓인 짭조름한 옹기 게장 그릇과 주황빛으로 붉게 익은 생감(홍시/감) 접시.
2. **이인좌의 난 반란 격문 대자보 (Rebel Placard against Yeongjo)**: '게장과 생감으로 형을 죽인 영조를 처단하자'는 붓글씨가 거칠게 적혀 벽에 붙은 거사 격문 문서.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 상극 음식: 옹기 간장게장과 주황빛 생감 접시
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-crab-persimmon">
    <!-- 궁중 원형 자개 목재 소반 -->
    <ellipse cx="200" cy="230" rx="150" ry="40" fill="#5d4037" stroke="#3e2723" stroke-width="8"/>
    <ellipse cx="200" cy="220" rx="130" ry="30" fill="#6d4c41" stroke="#8d6e63" stroke-width="4"/>
    <!-- 왼편 간장게장 옹기 사발 -->
    <path d="M 90 180 C 90 230 210 230 210 180 Z" fill="#3e2723" stroke="#212121" stroke-width="7"/>
    <ellipse cx="150" cy="180" rx="60" ry="18" fill="#212121" stroke="#3e2723" stroke-width="5"/>
    <!-- 간장게장 게딱지와 집게발 요약 -->
    <ellipse cx="150" cy="180" rx="35" ry="20" fill="#bf360c" stroke="#5d4037" stroke-width="4"/>
    <path d="M 120 175 C 100 150 85 160 100 185" fill="none" stroke="#d84315" stroke-width="8" stroke-linecap="round"/>
    <path d="M 180 175 C 200 150 215 160 200 185" fill="none" stroke="#d84315" stroke-width="8" stroke-linecap="round"/>
    <circle cx="140" cy="175" r="4" fill="#fff9c4"/>
    <circle cx="160" cy="175" r="4" fill="#fff9c4"/>
    <!-- 오른편 주황빛 생감(홍시) 접시 -->
    <ellipse cx="280" cy="200" rx="50" ry="15" fill="#eceff1" stroke="#37474f" stroke-width="5"/>
    <circle cx="270" cy="175" r="22" fill="#e65100" stroke="#bf360c" stroke-width="4"/>
    <path d="M 265 155 L 275 155 M 270 150 L 270 160" stroke="#33691e" stroke-width="5"/>
    <circle cx="300" cy="185" r="18" fill="#ef6c00" stroke="#bf360c" stroke-width="4"/>
    <!-- 상극 충격 독 기운 효과 (컷아웃 연기) -->
    <path d="M 180 150 Q 210 100 240 140" fill="none" stroke="#9c27b0" stroke-width="6" stroke-linecap="round" stroke-dasharray="8,6"/>
  </g>
</svg>
```

### S2. 영조 독살설 고발 이인좌의 난 반란 격문 대자보
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-rebel-placard">
    <!-- 성벽 돌담 배경 요약 -->
    <rect x="20" y="20" width="360" height="260" fill="#78909c" stroke="#37474f" stroke-width="6"/>
    <line x1="20" y1="100" x2="380" y2="100" stroke="#546e7a" stroke-width="4"/>
    <line x1="20" y1="180" x2="380" y2="180" stroke="#546e7a" stroke-width="4"/>
    <line x1="180" y1="20" x2="180" y2="100" stroke="#546e7a" stroke-width="4"/>
    <line x1="280" y1="100" x2="280" y2="180" stroke="#546e7a" stroke-width="4"/>
    <line x1="120" y1="180" x2="120" y2="280" stroke="#546e7a" stroke-width="4"/>
    <!-- 벽에 거칠게 붙은 반란 격문 대자보 한지 -->
    <polygon points="60,50 340,40 330,250 70,260" fill="#fff9c4" stroke="#5d4037" stroke-width="8"/>
    <!-- 거친 붓글씨 '독살(毒殺)' 및 고발 문구 요약 컷아웃 -->
    <!-- '毒(독 독)' 느낌 요약 -->
    <path d="M 110 90 L 150 90 M 130 75 L 130 115 M 105 115 L 155 115 M 120 125 L 140 125 M 115 140 C 130 155 145 155 150 140" stroke="#b71c1c" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- '殺(죽일 살)' 느낌 요약 -->
    <path d="M 170 85 L 205 85 M 185 70 L 185 150 M 175 120 C 190 135 200 135 210 120 M 220 75 L 250 145 M 250 75 L 220 145" stroke="#b71c1c" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- 세로 붓글씨 고발 줄들 -->
    <line x1="120" y1="170" x2="120" y2="230" stroke="#212121" stroke-width="7" stroke-dasharray="15,10"/>
    <line x1="170" y1="170" x2="170" y2="240" stroke="#212121" stroke-width="7" stroke-dasharray="20,8"/>
    <line x1="220" y1="160" x2="220" y2="230" stroke="#212121" stroke-width="7" stroke-dasharray="12,12"/>
    <line x1="270" y1="100" x2="270" y2="220" stroke="#212121" stroke-width="8" stroke-dasharray="25,10"/>
    <!-- 붉은 핏자국 또는 손바닥 날인 강조 -->
    <circle cx="280" cy="220" r="18" fill="#d32f2f" fill-opacity="0.8"/>
  </g>
</svg>
```
