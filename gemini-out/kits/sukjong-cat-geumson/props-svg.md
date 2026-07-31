# [소품 목록 + 컷아웃 SVG 초안] 조선 숙종 시대의 반려묘 극성 집사 대왕, 금손(노랑고양이)과 왕실 동물 애호 비록

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **황금빛 털의 궁중 반려묘 금손이와 고기반찬 수라상 (Royal Cat Geumson & Meat Table)**: 숙종 대왕의 곁에서 겸상을 하며 귀한 고기를 얻어먹는 황금빛 노랑 고양이와 붉은 칠기 수라상.
2. **숙종대왕 익선관과 비단 수의 왕릉 묘 (King Sukjong Crown & Silk Tomb)**: 국왕의 권위를 상징하는 익선관과, 주인을 따라 죽어 비단에 싸여 명릉 길목에 안장된 금손이의 특별한 비단 수의 묘.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 황금빛 털의 궁중 반려묘 금손이와 고기반찬 수라상
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-geumson-table">
    <!-- 궁중 붉은 칠기 수라상 탁자 (하단 중앙) -->
    <rect x="80" y="200" width="240" height="40" rx="6" fill="#b71c1c" stroke="#7f0000" stroke-width="5"/>
    <rect x="100" y="240" width="30" height="40" fill="#7f0000"/>
    <rect x="270" y="240" width="30" height="40" fill="#7f0000"/>
    <!-- 수라상 위 귀한 고기반찬 접시 및 소고기 덩어리 -->
    <ellipse cx="200" cy="190" rx="50" ry="15" fill="#eeeeee" stroke="#424242" stroke-width="4"/>
    <path d="M 180 185 Q 200 170 220 185 Z" fill="#8d6e63" stroke="#4e342e" stroke-width="3"/>
    <rect x="185" y="178" width="30" height="12" rx="4" fill="#d32f2f"/>
    <!-- 황금빛 노랑 고양이 금손이 (탁자 위에서 엎드려 꼬리를 흔듬) -->
    <ellipse cx="200" cy="130" rx="55" ry="35" fill="#ffd54f" stroke="#f57c00" stroke-width="5"/>
    <circle cx="160" cy="100" r="25" fill="#ffd54f" stroke="#f57c00" stroke-width="5"/>
    <!-- 고양이 귀 두 개 -->
    <path d="M 140 90 L 145 60 L 160 80 Z" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <path d="M 160 80 L 175 60 L 180 90 Z" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <!-- 고양이 얼굴 눈 코 털 -->
    <ellipse cx="150" cy="98" rx="4" ry="6" fill="#000000"/>
    <ellipse cx="170" cy="98" rx="4" ry="6" fill="#000000"/>
    <polygon points="160,105 156,110 164,110" fill="#f48fb1"/>
    <!-- 왕실 상징 푸른 비단 리본 목걸이 -->
    <rect x="150" y="120" width="20" height="8" rx="3" fill="#1565c0" stroke="#0d47a1" stroke-width="2"/>
    <text x="210" y="125" fill="#bf360c" font-size="18" font-weight="bold">金孫(금손)</text>
  </g>
</svg>
```

### S2. 숙종대왕의 곤룡포 익선관과 비단 수의 왕릉 매장 묘
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-sukjong-tomb">
    <!-- 명릉 푸른 잔디 봉분 무덤 배경 (하단) -->
    <path d="M 50 280 C 50 180 350 180 350 280 Z" fill="#4caf50" stroke="#2e7d32" stroke-width="6"/>
    <!-- 비단에 싸여 묻힌 금손이 추모 묘비 석 표지판 -->
    <rect x="175" y="160" width="50" height="90" rx="5" fill="#e0e0e0" stroke="#616161" stroke-width="4"/>
    <text x="195" y="210" fill="#212121" font-size="16" font-weight="bold" writing-mode="tb">金孫之墓</text>
    <!-- 국왕 숙종의 위엄 상징 흑색 익선관 (좌측 상단 하늘에 띄움) -->
    <path d="M 60 110 Q 60 70 100 70 Q 140 70 140 110 Z" fill="#212121" stroke="#000000" stroke-width="5"/>
    <rect x="50" y="110" width="100" height="18" rx="4" fill="#212121" stroke="#000000" stroke-width="5"/>
    <rect x="90" y="45" width="20" height="25" rx="5" fill="#212121" stroke="#000000" stroke-width="4"/>
    <text x="55" y="150" fill="#b71c1c" font-size="18" font-weight="bold">肅宗 大王</text>
    <!-- 왕릉 곁 비단 포대기 묘사 (우측 상단) -->
    <path d="M 260 100 Q 280 70 320 90 Q 340 110 310 130 Q 280 140 260 100 Z" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <text x="260" y="160" fill="#e65100" font-size="16" font-weight="bold">비단 수의 예우</text>
  </g>
</svg>
```
