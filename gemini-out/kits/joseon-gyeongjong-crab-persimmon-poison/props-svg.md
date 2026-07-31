# [소품 목록 + 컷아웃 SVG 초안] 형님에게 상극인 게장과 생감을 바쳐 죽게 만들었다? 조선 최대 미스터리 영조의 경종 독살설

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **게장과 생감, 인삼차를 올리는 왕세제 연잉군 (Gejang, Persimmon & Yeaning)**: 간장 게장 접시와 붉은 생감, 그리고 김이 모락모락 나는 인삼차를 들고 형님 앞에 선 왕세제 연잉군(영조).
2. **배를 쥐어짜며 복통으로 절규하는 경종과 어의 (Suffering Gyeongjong & Physician)**: 상극 음식을 먹고 가슴과 배를 움켜쥔 채 식중독 복통으로 고통받는 37세 경종 임금과, "인삼차는 아니 되옵니다!"라며 엎드려 울부짖는 어의.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 간장 게장과 생감, 인삼차를 들고 선 왕세제 연잉군 (영조)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-gejang-persimmon-yeongjo">
    <!-- 중앙 오른쪽: 상극 음식 그릇을 든 왕세제 연잉군(영조) -->
    <circle cx="270" cy="110" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <path d="M 235 70 L 305 70 L 295 40 L 245 40 Z" fill="#1a237e"/>
    <circle cx="270" cy="65" r="12" fill="#ffd54f"/>
    <!-- 결연하고 날카로운 왕세제 눈빛 -->
    <path d="M 250 100 L 265 105" stroke="#212121" stroke-width="4"/>
    <path d="M 290 100 L 275 105" stroke="#212121" stroke-width="4"/>
    <circle cx="255" cy="110" r="5" fill="#000000"/>
    <circle cx="285" cy="110" r="5" fill="#000000"/>
    <line x1="260" y1="130" x2="280" y2="130" stroke="#5d4037" stroke-width="4"/>
    <rect x="220" y="155" width="100" height="115" fill="#1a237e" stroke="#0d47a1" stroke-width="5" rx="10"/>
    <!-- 손에 든 상극 음식 밥상 (간장 게장 + 붉은 생감 + 인삼차) -->
    <rect x="50" y="150" width="160" height="70" fill="#795548" stroke="#3e2723" stroke-width="5" rx="5"/>
    <!-- 간장 게장 그릇 -->
    <ellipse cx="90" cy="145" rx="25" ry="15" fill="#3e2723" stroke="#ffd54f" stroke-width="3"/>
    <circle cx="90" cy="145" r="12" fill="#d84315"/>
    <text x="75" y="148" fill="#ffffff" font-size="12" font-weight="bold">게장</text>
    <!-- 붉은 생감 접시 -->
    <circle cx="150" cy="145" r="15" fill="#ff6d00" stroke="#e65100" stroke-width="3"/>
    <path d="M 145 130 Q 150 125 155 130" fill="none" stroke="#2e7d32" stroke-width="3"/>
    <text x="138" y="150" fill="#ffffff" font-size="12" font-weight="bold">생감</text>
    <!-- 인삼차 찻잔 -->
    <rect x="110" y="170" width="30" height="30" fill="#ffffff" stroke="#f57c00" stroke-width="3" rx="3"/>
    <path d="M 120 165 Q 125 155 130 165" stroke="#9e9e9e" stroke-width="2" fill="none"/>
    <text x="112" y="190" fill="#d32f2f" font-size="12" font-weight="bold">人蔘</text>
    <text x="45" y="250" fill="#d32f2f" font-size="16" font-weight="bold">相剋 (상극) 조합: 치명적 복통과 식중독</text>
    <text x="40" y="285" fill="#212121" font-size="15" font-weight="bold">1724년 경종실록: 영조의 게장·생감·인삼차 바침</text>
  </g>
</svg>
```

### S2. 배를 쥐어짜며 고통받는 경종 임금과 결사반대하는 어의
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-gyeongjong-pain-doctor">
    <!-- 오른편 하단: 상극 음식을 먹고 가슴과 배를 움켜진 채 극심한 복통으로 고통받는 경종 -->
    <rect x="150" y="170" width="220" height="80" fill="#fff9c4" stroke="#f57c00" stroke-width="4" rx="10"/>
    <circle cx="210" cy="160" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 임금 익선관과 창백한 환자 표정 -->
    <path d="M 185 125 L 235 125 L 225 95 L 195 95 Z" fill="#212121"/>
    <!-- 복통 식중독 땀과 고통스러운 입 -->
    <circle cx="195" cy="150" r="5" fill="#000000"/>
    <circle cx="225" cy="150" r="5" fill="#000000"/>
    <circle cx="180" cy="155" r="6" fill="#00e5ff"/>
    <circle cx="240" cy="155" r="6" fill="#00e5ff"/>
    <path d="M 200 175 Q 210 165 220 175" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <!-- 배를 움켜쥔 두 손과 복통 묘사 -->
    <circle cx="260" cy="210" r="20" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <text x="280" y="215" fill="#d32f2f" font-size="16" font-weight="bold">극심한 腹痛 (복통!)</text>
    <!-- 왼편: 엎드려 인삼차 처방을 결사반대하는 어의 이진수 -->
    <circle cx="80" cy="140" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 50 110 L 110 110 L 100 85 L 60 85 Z" fill="#212121"/>
    <!-- 눈물 흘리며 절규하는 어의 -->
    <line x1="70" y1="145" x2="70" y2="165" stroke="#00e5ff" stroke-width="3"/>
    <line x1="90" y1="145" x2="90" y2="165" stroke="#00e5ff" stroke-width="3"/>
    <ellipse cx="80" cy="155" rx="8" ry="10" fill="#b71c1c"/>
    <rect x="45" y="175" width="70" height="95" fill="#2e7d32" stroke="#1b5e20" stroke-width="4" rx="5"/>
    <!-- 어의의 만류 말풍선 -->
    <rect x="20" y="30" width="160" height="50" fill="#ffffff" stroke="#d32f2f" stroke-width="3" rx="5"/>
    <text x="30" y="50" fill="#d32f2f" font-size="13" font-weight="bold">"인삼차는 아니 되옵니다!</text>
    <text x="30" y="70" fill="#d32f2f" font-size="13" font-weight="bold">열증에 치명적 독이옵니다!"</text>
    <text x="40" y="285" fill="#b71c1c" font-size="15" font-weight="bold">5일 만의 급사: 영조 통치를 흔든 독살설 주홍글씨</text>
  </g>
</svg>
```
