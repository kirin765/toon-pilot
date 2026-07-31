# [소품 목록 + 컷아웃 SVG 초안] 어우동의 진실, 희대의 스캔들인가 정치적 희생양인가

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **어우동의 너울 쓰개치마와 가야금 (Eoudong Veil & Gayageum)**: 조선 전기 양반 여성이 썼던 검붉은 너울(모자 달린 쓰개치마)과 그 옆에 놓인 고풍스러운 오동나무 가야금.
2. **성종의 사형 언도 의금부 판결문 (Royal Execution Decree)**: '교형(絞刑)'이라는 굵은 붓글씨와 붉은 국왕 옥새가 강렬하게 박힌 사극풍 판결 교지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 어우동의 너울 쓰개치마와 12현 가야금
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-veil-gayageum">
    <!-- 가야금 (바닥에 눕혀진 오동나무 재질감) -->
    <path d="M 60 220 L 340 180 L 350 210 L 70 250 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="7"/>
    <!-- 명주실 가야금 12현 및 안족(기러기발) 요약 -->
    <line x1="80" y1="215" x2="330" y2="185" stroke="#fff9c4" stroke-width="2"/>
    <line x1="80" y1="225" x2="330" y2="195" stroke="#fff9c4" stroke-width="2"/>
    <line x1="80" y1="235" x2="330" y2="205" stroke="#fff9c4" stroke-width="2"/>
    <polygon points="180,210 185,195 190,210" fill="#d7ccc8" stroke="#3e2723" stroke-width="2"/>
    <polygon points="230,205 235,190 240,205" fill="#d7ccc8" stroke="#3e2723" stroke-width="2"/>
    <!-- 갓 형태 챙이 달린 양반 여성 너울 쓰개치마 (붉은색/검은색 컷아웃) -->
    <ellipse cx="200" cy="80" rx="70" ry="20" fill="#212121" stroke="#000000" stroke-width="6"/>
    <path d="M 160 80 Q 200 40 240 80" fill="#424242" stroke="#212121" stroke-width="6"/>
    <!-- 베일 (치마막 흐르는 드레이프) -->
    <path d="M 130 80 C 110 150 130 200 160 210 L 240 210 C 270 200 290 150 270 80 Z" fill="#b71c1c" fill-opacity="0.85" stroke="#7f0000" stroke-width="6" stroke-linejoin="round"/>
    <!-- 쓰개치마 옷고름 장식 -->
    <path d="M 180 110 L 170 160 M 180 110 L 210 145" stroke="#ffd54f" stroke-width="7" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 성종의 붉은 옥새가 박힌 의금부 사형(교형) 판결문
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-execution-decree">
    <!-- 두루마리 한지 두리 봉함 -->
    <rect x="70" y="50" width="260" height="200" rx="10" fill="#fff9c4" stroke="#5d4037" stroke-width="8"/>
    <rect x="50" y="40" width="20" height="220" rx="6" fill="#8d6e63" stroke="#3e2723" stroke-width="6"/>
    <rect x="330" y="40" width="20" height="220" rx="6" fill="#8d6e63" stroke="#3e2723" stroke-width="6"/>
    <!-- 한자 '絞刑(교형)' 붓글씨 느낌 컷아웃 -->
    <!-- '絞(목맬 교)' 요약 -->
    <path d="M 110 90 L 140 90 M 125 70 L 125 120 M 110 120 L 140 100 M 150 80 L 180 80 M 165 70 L 165 120 M 150 110 C 160 130 180 130 190 110" stroke="#212121" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- '刑(형벌 형)' 요약 -->
    <path d="M 110 160 L 150 160 M 130 145 L 130 190 M 115 190 L 145 190 M 165 150 L 165 200 M 185 150 L 185 200 M 185 175 L 165 175" stroke="#212121" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- 성종 어보 (붉은 국왕 옥새 스탬프) -->
    <rect x="210" y="120" width="80" height="80" rx="6" fill="#d32f2f" fill-opacity="0.85" stroke="#b71c1c" stroke-width="6"/>
    <!-- 옥새 인장 내부 무늬 -->
    <path d="M 225 135 L 275 135 M 250 135 L 250 185 M 225 160 L 275 160 M 225 185 L 275 185" stroke="#ffffff" stroke-width="5"/>
    <!-- 비극적 결정 강조 붉은 핏방울 튐 효과 -->
    <circle cx="280" cy="90" r="6" fill="#d32f2f"/>
    <circle cx="295" cy="105" r="4" fill="#d32f2f"/>
    <circle cx="205" cy="215" r="5" fill="#d32f2f"/>
  </g>
</svg>
```
