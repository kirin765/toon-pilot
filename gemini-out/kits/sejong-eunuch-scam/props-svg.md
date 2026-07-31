# [소품 목록 + 컷아웃 SVG 초안] 세종대왕 시절의 전대미문 내시 사기 사건 (조생의 가짜 왕명)

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조생이 위조한 가짜 세종 교지 (Forged Sejong Decree)**: 어설프게 흉내 낸 세종의 친필 어압(서명)과 몰래 훔쳐 찍어 약간 삐뚤어지고 번진 붉은 왕의 도장 문서.
2. **몰래 훔친 국왕 어보와 뇌물 비단 (Stolen Royal Seal & Bribe Silks)**: 거대한 조선 국왕의 금속 옥새 인장과, 관직을 위조해 팔고 받은 화려한 뇌물 비단 꾸러미.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 환관 조생이 위조한 가짜 세종대왕 왕명 교지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-forged-decree">
    <!-- 가짜 교지 두루마리 (약간 구겨지고 수상한 한지) -->
    <rect x="60" y="50" width="280" height="200" rx="12" fill="#fff9c4" stroke="#5d4037" stroke-width="8"/>
    <path d="M 60 90 L 340 90 M 60 210 L 340 210" stroke="#8d6e63" stroke-width="3" stroke-dasharray="10,5"/>
    <!-- 왕명 위조 붓글씨 요약 -->
    <line x1="100" y1="120" x2="100" y2="180" stroke="#212121" stroke-width="8" stroke-linecap="round"/>
    <line x1="140" y1="110" x2="140" y2="190" stroke="#212121" stroke-width="8" stroke-linecap="round"/>
    <line x1="180" y1="130" x2="180" y2="170" stroke="#212121" stroke-width="8" stroke-linecap="round"/>
    <!-- 어설프게 붓으로 따라 그린 가짜 세종 어압(서명 화압) -->
    <path d="M 220 120 Q 240 100 260 140 T 250 180 Q 230 190 220 160" fill="none" stroke="#b71c1c" stroke-width="6" stroke-linecap="round" stroke-dasharray="12,3"/>
    <!-- 몰래 밤에 찍어 삐뚤어지고 번진 가짜 국왕 옥새 인장 -->
    <rect x="230" y="125" width="75" height="75" rx="4" fill="#d32f2f" fill-opacity="0.8" stroke="#b71c1c" stroke-width="6" transform="rotate(-15 230 125)"/>
    <!-- 도장 속 왕(王)자 문양 위조 느낌 -->
    <path d="M 245 145 L 285 135 M 250 165 L 290 155 M 255 185 L 295 175 M 265 140 L 275 180" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    <!-- 위조 적발 붉은 X 표시 (세종의 분노) -->
    <line x1="80" y1="70" x2="320" y2="230" stroke="#d32f2f" stroke-width="12" stroke-linecap="round"/>
    <line x1="320" y1="70" x2="80" y2="230" stroke="#d32f2f" stroke-width="12" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 몰래 빼돌린 국왕 금속 어보와 관직 매관매직 뇌물 비단
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-stolen-seal">
    <!-- 뒤쪽 화려한 매관매직 뇌물 비단 꾸러미들 -->
    <rect x="60" y="150" width="120" height="80" rx="15" fill="#7b1fa2" stroke="#4a148c" stroke-width="6"/>
    <rect x="90" y="130" width="110" height="70" rx="15" fill="#1976d2" stroke="#0d47a1" stroke-width="6" transform="rotate(-10 90 130)"/>
    <rect x="120" y="170" width="130" height="70" rx="15" fill="#388e3c" stroke="#1b5e20" stroke-width="6" transform="rotate(5 120 170)"/>
    <!-- 비단 금박 띠 장식 -->
    <line x1="70" y1="190" x2="170" y2="190" stroke="#ffd54f" stroke-width="6" stroke-dasharray="10,5"/>
    <line x1="130" y1="205" x2="240" y2="215" stroke="#ffd54f" stroke-width="6" stroke-dasharray="10,5"/>
    <!-- 오른편 앞쪽 국왕의 금속 어보 (옥새 인장) -->
    <rect x="230" y="160" width="110" height="70" rx="8" fill="#ffd54f" stroke="#f57f17" stroke-width="8"/>
    <!-- 어보 상단 거북이(귀뉴) 손잡이 장식 요약 -->
    <path d="M 260 160 Q 285 120 310 160" fill="#fbc02d" stroke="#f57f17" stroke-width="7"/>
    <circle cx="295" cy="140" r="8" fill="#212121"/>
    <!-- 붉은 인주 묻은 바닥 부분 -->
    <rect x="228" y="220" width="114" height="15" rx="3" fill="#d32f2f" stroke="#b71c1c" stroke-width="4"/>
    <!-- 도둑질 긴장감 땀방울 / 충격 효과선 -->
    <line x1="210" y1="120" x2="190" y2="105" stroke="#ffeb3b" stroke-width="6" stroke-linecap="round"/>
    <line x1="330" y1="120" x2="350" y2="105" stroke="#ffeb3b" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```
