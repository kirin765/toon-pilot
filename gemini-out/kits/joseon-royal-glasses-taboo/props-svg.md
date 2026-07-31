# [소품 목록 + 컷아웃 SVG 초안] 조선 궁중 안경 착용의 절대 금기와 임금 앞에서 안경 썼다가 파직당한 사연

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 왕실 고급 대모(거북 등껍질) 뿔테 수정 안경 (Joseon Tortoiseshell Glasses)**: 동그랗고 맑은 투명 수정 알을 감싼 검붉은 거북 등껍질(대모) 두꺼운 뿔테와, 귀걸이 대신 귀 옆을 지나 관모 뒤로 묶는 비단끈.
2. **어전 안경 착용 불경죄 파직 탄핵 상소문과 분노의 호통 (Impeachment Scroll & Royal Wrath)**: 임금을 멸시했다는 붉은색 한자 '불경(不敬)'과 '파직(罷職)'이 적힌 족자형 상소문과 왕의 벼락같은 호통 효과.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 동그란 수정 알과 거북 등껍질로 만든 조선 대모 뿔테 안경
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-joseon-glasses">
    <!-- 좌우 동그란 투명 수정 안경 알 -->
    <circle cx="130" cy="150" r="55" fill="#e0f7fa" stroke="#3e2723" stroke-width="12" opacity="0.9"/>
    <circle cx="270" cy="150" r="55" fill="#e0f7fa" stroke="#3e2723" stroke-width="12" opacity="0.9"/>
    <!-- 거북 등껍질 대모 뿔테 질감 효과 (무늬) -->
    <circle cx="130" cy="150" r="55" fill="none" stroke="#8d6e63" stroke-width="4" stroke-dasharray="15,10"/>
    <circle cx="270" cy="150" r="55" fill="none" stroke="#8d6e63" stroke-width="4" stroke-dasharray="15,10"/>
    <!-- 수정 알 광택 흰색 반사 빛 -->
    <polygon points="100,120 110,110 120,130 110,140" fill="#ffffff" opacity="0.8"/>
    <polygon points="240,120 250,110 260,130 250,140" fill="#ffffff" opacity="0.8"/>
    <!-- 중앙 코걸이 연결 뿔테 브릿지 -->
    <path d="M 185 150 Q 200 130 215 150" stroke="#3e2723" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M 188 148 Q 200 133 212 148" stroke="#8d6e63" stroke-width="4" fill="none" stroke-linecap="round"/>
    <!-- 좌우 관모 뒤로 묶는 비단 줄 (안경끈) -->
    <path d="M 75 150 Q 40 140 20 180 Q 10 210 30 240" stroke="#c2185b" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M 325 150 Q 360 140 380 180 Q 390 210 370 240" stroke="#c2185b" stroke-width="6" fill="none" stroke-linecap="round"/>
    <text x="65" y="280" fill="#3e2723" font-size="18" font-weight="bold">임금 앞에서 쓰면 절대 불경죄 (애체)</text>
  </g>
</svg>
```

### S2. 임금 앞 안경 착용 불경죄 탄핵 파직 상소문과 호통
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-impeachment-scroll">
    <!-- 펼쳐진 한지 상소문 족자 배경 -->
    <rect x="80" y="50" width="240" height="200" fill="#fff9c4" stroke="#8d6e63" stroke-width="6"/>
    <!-- 상·하단 비단 족자 축 (나무봉) -->
    <rect x="70" y="40" width="260" height="15" fill="#5d4037" rx="5"/>
    <rect x="70" y="245" width="260" height="15" fill="#5d4037" rx="5"/>
    <!-- 붉은색 충격적 한자 탄핵 명문 (불경 파직) -->
    <text x="130" y="130" fill="#d32f2f" font-size="42" font-weight="bold" font-family="serif">不敬</text>
    <text x="130" y="210" fill="#d32f2f" font-size="42" font-weight="bold" font-family="serif">罷職</text>
    <!-- 왕의 호통과 분노 호통 번개 스파크 효과 -->
    <polygon points="50,90 80,100 65,115" fill="#ff6d00"/>
    <polygon points="350,160 320,150 335,135" fill="#ff6d00"/>
    <path d="M 270 90 Q 310 70 330 100" stroke="#d32f2f" stroke-width="5" fill="none"/>
    <path d="M 270 180 Q 310 200 340 180" stroke="#d32f2f" stroke-width="5" fill="none"/>
    <text x="95" y="285" fill="#212121" font-size="16" font-weight="bold">어전 안경 착용은 왕에 대한 오만방자</text>
  </g>
</svg>
```
