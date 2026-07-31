# [소품 목록 + 컷아웃 SVG 초안] 조선 숙종 시대의 궁중 뷰티 스캔들, 화장품 납 중독과 메이크업 문화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 궁중 연백분(납 화장품) 도자기 합과 털 분첩 (Yeonbaekbun Lead Powder Box)**: 극단적 미백을 위해 납(鉛)을 산화시켜 만든 흰 분가루가 담긴 고급 백자 상자와 메이크업 파우더 붓.
2. **홍화 연지 합과 납 중독 치아 변색 거울 (Honghwa Rouge & Mirror with Poisoning Effect)**: 새빨간 입술을 위한 홍화 연지 도자기와, 납 중독으로 이빨이 검게 변하고 피부 트러블이 생긴 상태를 비추는 청동 손거울.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 조선 궁중의 치명적인 미백 아이템 '연백분(납분)' 백합과 분첩
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-yeonbaekbun">
    <!-- 조선 백자 분합 뚜껑 열린 모습 (중앙 앞쪽) -->
    <ellipse cx="200" cy="220" rx="90" ry="35" fill="#f5f5f5" stroke="#37474f" stroke-width="6"/>
    <path d="M 110 220 L 110 180 Q 200 150 290 180 L 290 220 Z" fill="#eeeeee" stroke="#37474f" stroke-width="6"/>
    <!-- 분합 안에 소복이 쌓인 하얀 연백분(납 산화물 흰 분가루) -->
    <ellipse cx="200" cy="180" rx="75" ry="20" fill="#ffffff" stroke="#b0bec5" stroke-width="4"/>
    <path d="M 160 175 Q 200 155 240 175" fill="#ffffff" stroke="#90a4ae" stroke-width="3"/>
    <!-- 분합 겉면에 새겨진 경고성 붉은 글씨 '鉛白粉(연백분-납)' -->
    <text x="145" y="210" fill="#c62828" font-size="20" font-weight="bold">鉛白粉(납분)</text>
    <!-- 백자 뚜껑 (왼편 뒤쪽에 기대어 놓임) -->
    <ellipse cx="100" cy="120" rx="50" ry="20" fill="#f5f5f5" stroke="#37474f" stroke-width="5" transform="rotate(-20 100 120)"/>
    <!-- 화장용 털 분첩 붓 파우더 퍼프 (오른편 위쪽 가로지름) -->
    <rect x="250" y="70" width="120" height="20" rx="10" fill="#8d6e63" stroke="#3e2723" stroke-width="4" transform="rotate(-30 250 70)"/>
    <circle cx="250" cy="70" r="28" fill="#fff9c4" stroke="#fbc02d" stroke-width="4"/>
    <!-- 털 분첩에 묻은 하얀 납 가루 입자들 -->
    <circle cx="240" cy="65" r="5" fill="#ffffff"/>
    <circle cx="255" cy="75" r="6" fill="#ffffff"/>
    <circle cx="260" cy="60" r="4" fill="#ffffff"/>
  </g>
</svg>
```

### S2. 홍화 연지 합과 납 중독 부작용을 비추는 궁중 거울
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-rouge-mirror">
    <!-- 새빨간 홍화 연지합 (왼편 아래쪽) -->
    <ellipse cx="90" cy="230" rx="50" ry="20" fill="#ffffff" stroke="#455a64" stroke-width="5"/>
    <ellipse cx="90" cy="220" rx="40" ry="12" fill="#d32f2f" stroke="#b71c1c" stroke-width="3"/>
    <text x="65" y="255" fill="#b71c1c" font-size="16" font-weight="bold">紅花연지</text>
    <!-- 조선 궁중 청동 손거울 (오른편 중앙 세워짐) -->
    <circle cx="260" cy="140" r="80" fill="#cfd8dc" stroke="#455a64" stroke-width="8"/>
    <rect x="250" y="220" width="20" height="70" rx="5" fill="#5d4037" stroke="#3e2723" stroke-width="5"/>
    <!-- 거울 속 비친 납 중독 여인의 얼굴 묘사 (극단적 하얀 피부 + 흑색 치아) -->
    <circle cx="260" cy="140" r="65" fill="#ffffff" stroke="#b0bec5" stroke-width="2"/>
    <!-- 여인의 눈 및 미간 붉은 화전 점 -->
    <circle cx="240" cy="125" r="6" fill="#000000"/>
    <circle cx="280" cy="125" r="6" fill="#000000"/>
    <circle cx="260" cy="115" r="5" fill="#d32f2f"/>
    <!-- 붉은 연지 입술과 그 사이에 노출된 납 중독 검은 치아(흑치) -->
    <path d="M 240 160 Q 260 175 280 160" fill="#d32f2f" stroke="#b71c1c" stroke-width="3"/>
    <!-- 검게 변색된 이빨 3개 묘사 -->
    <rect x="252" y="162" width="5" height="8" fill="#212121"/>
    <rect x="258" y="162" width="5" height="8" fill="#212121"/>
    <rect x="264" y="162" width="5" height="8" fill="#212121"/>
    <!-- 납 중독 부작용 경고 표시 (보라색 피부 트러블 점들) -->
    <circle cx="225" cy="145" r="4" fill="#7b1fa2"/>
    <circle cx="295" cy="150" r="5" fill="#7b1fa2"/>
  </g>
</svg>
```
