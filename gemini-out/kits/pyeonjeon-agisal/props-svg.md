# [소품 목록 + 컷아웃 SVG 초안] 백발백중 조선의 비밀 병기, 편전(애기살)과 조총의 대결

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **통아+애기살 세트 (Tong-a & Short Arrow)**: 반으로 쪼갠 대나무 덧살(홈이 파인 반원통)에 반 토막 화살이 얹힌 발사 준비 상태 — 이 편의 히어로 소품. 일반 활·화살통(카탈로그 보유)과 확실히 구분되는 시그니처는 ①화살이 짧다 ②반원통 덧살이 있다.
2. **비행 중인 애기살 (속도선 잔상)**: 날아가는 짧은 화살 + 수평 속도선 3줄 — "보이지 않는 속도" 연출용. ⚠ 배경 글로우 타원 금지(지뢰 #47), 속도선은 화살 꼬리 쪽에만.

**재사용 (카탈로그 보유분)**: 활+화살통 ✅(일반 장전과 크기 대비 씬), 조총 ✅(bench sp9 — 대결 구도), 관혁 과녁 ✅(EP.14 — ⚠ 동심원 다색 표적 금지), 판옥선·총통(해전 배경 필요 시), 눈밭/막돌담(북방 국경 씬).

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 통아+애기살 세트 (발사 준비 상태)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-tonga-set">
    <!-- 통아: 반으로 쪼갠 대나무 덧살 (사선 배치, 홈 보이게) -->
    <g transform="rotate(-20 200 170)">
      <!-- 대나무 반원통 몸체 -->
      <rect x="60" y="155" width="280" height="30" rx="15" fill="#a5c46c" stroke="#33691e" stroke-width="6"/>
      <!-- 홈(안쪽 골) — 위쪽 개방부 -->
      <rect x="70" y="160" width="260" height="12" rx="6" fill="#e8f0d0" stroke="#7cb342" stroke-width="3"/>
      <!-- 대나무 마디 2개 -->
      <line x1="150" y1="155" x2="150" y2="185" stroke="#33691e" stroke-width="5"/>
      <line x1="250" y1="155" x2="250" y2="185" stroke="#33691e" stroke-width="5"/>
      <!-- 애기살: 통아 홈 위에 얹힌 반 토막 화살 (통아 길이의 절반 남짓) -->
      <line x1="180" y1="166" x2="330" y2="166" stroke="#5d4037" stroke-width="7" stroke-linecap="round"/>
      <!-- 화살촉 (뾰족, 진행 방향 오른쪽) -->
      <polygon points="330,158 352,166 330,174" fill="#78909c" stroke="#263238" stroke-width="4"/>
      <!-- 깃 (꼬리 2장) -->
      <polygon points="180,166 160,154 168,166" fill="#d32f2f" stroke="#7f0000" stroke-width="3"/>
      <polygon points="180,166 160,178 168,166" fill="#d32f2f" stroke="#7f0000" stroke-width="3"/>
      <!-- 통아 손목끈 -->
      <path d="M 70 185 Q 55 215 75 235" fill="none" stroke="#8d6e63" stroke-width="7" stroke-linecap="round"/>
    </g>
  </g>
</svg>
```

### S2. 비행 중인 애기살 (속도선 잔상)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-flying-agisal">
    <!-- 짧은 화살 몸체 (우상향 비행) -->
    <g transform="rotate(-12 200 150)">
      <line x1="150" y1="150" x2="280" y2="150" stroke="#5d4037" stroke-width="8" stroke-linecap="round"/>
      <!-- 화살촉 -->
      <polygon points="280,140 308,150 280,160" fill="#78909c" stroke="#263238" stroke-width="4"/>
      <!-- 깃 2장 -->
      <polygon points="150,150 126,136 136,150" fill="#d32f2f" stroke="#7f0000" stroke-width="3"/>
      <polygon points="150,150 126,164 136,150" fill="#d32f2f" stroke="#7f0000" stroke-width="3"/>
      <!-- 속도선 3줄 (꼬리 뒤쪽에만 — 배경 글로우 금지) -->
      <g stroke="#90a4ae" stroke-width="5" stroke-linecap="round" opacity="0.8">
        <line x1="60" y1="138" x2="115" y2="138"/>
        <line x1="45" y1="150" x2="112" y2="150"/>
        <line x1="60" y1="162" x2="115" y2="162"/>
      </g>
    </g>
  </g>
</svg>
```
