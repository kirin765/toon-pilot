# [소품 목록 + 컷아웃 SVG 초안] 정조 독살한 철천지원수 심환지? 299통 비밀 편지로 조정 여론 조종한 막후 밀담 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **밤마다 심환지에게 비밀어찰 쓰며 조정을 지휘하는 정조 (King Jeongjo Writing Secret Letters)**: 편복 차림으로 촛불 아래서 "읽고 즉시 불태우라"는 비밀 편지를 쓰며 호탕하게 웃거나 여론을 조율하는 천재 군주 정조.
2. **왕의 비밀 각본을 받고 다음 날 조정에서 반대 연기하는 심환지 (Sim Hwanji Acting Out scripted Opposition)**: 밤에 받은 정조의 비밀 편지를 숨겨두고, 다음 날 어전회의에서 왕의 각본대로 거칠게 반대 상소를 올리는 연기파 노론 영수 심환지.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 밤마다 심환지에게 비밀어찰 쓰며 조정 여론을 조작하는 국왕 정조
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-king-jeongjo-writing-secret-letters">
    <!-- 배경: 밤늦은 정조의 침전과 은은한 촛불 -->
    <rect x="30" y="30" width="340" height="240" fill="#263238" stroke="#ffd54f" stroke-width="5" rx="5"/>
    <!-- 밤의 창문과 촛대 -->
    <rect x="50" y="50" width="80" height="90" fill="#11171a" stroke="#455a64" stroke-width="4"/>
    <circle cx="80" cy="80" r="15" fill="#fff9c4" opacity="0.8"/>
    <rect x="300" y="100" width="15" height="40" fill="#ffd54f"/>
    <path d="M 307 85 Q 315 95 307 100 Q 299 95 307 85 Z" fill="#ff5722"/>
    <!-- 중앙: 곤룡포 편복을 입고 여유 있고 노련하게 웃는 정조 -->
    <rect x="150" y="130" width="130" height="140" fill="#b71c1c" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="215" cy="85" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 익선관과 호탕하고 총명한 미소 -->
    <path d="M 185 55 L 245 55 L 235 25 L 195 25 Z" fill="#212121"/>
    <circle cx="200" cy="80" r="6" fill="#000000"/>
    <circle cx="230" cy="80" r="6" fill="#000000"/>
    <path d="M 200 105 Q 215 120 230 105" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 손에 든 붓과 작성 중인 비밀어찰 (299통) -->
    <rect x="90" y="170" width="110" height="80" fill="#fff9c4" stroke="#5d4037" stroke-width="3" rx="5" transform="rotate(-5 90 170)"/>
    <text x="105" y="195" fill="#d32f2f" font-size="15" font-weight="bold">秘密御札 (밀서)</text>
    <text x="100" y="215" fill="#000000" font-size="12" font-weight="bold">"내일 반대 상소 올려라!"</text>
    <text x="105" y="235" fill="#d32f2f" font-size="13" font-weight="bold">읽고 즉시 불태워라(洗化)</text>
    <line x1="210" y1="160" x2="160" y2="190" stroke="#3e2723" stroke-width="5" stroke-linecap="round"/>
    <text x="215" y="255" fill="#ffd54f" font-size="16" font-weight="bold">국왕 정조</text>
    <rect x="70" y="10" width="260" height="30" fill="#ffffff" stroke="#b71c1c" stroke-width="2" rx="5"/>
    <text x="78" y="30" fill="#b71c1c" font-size="13" font-weight="bold">"심환지 경, 내일 조정에서 내가 짠대로 연기하시오!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">2009년 발굴: 299통의 비밀 편지로 조정을 지휘한 막후 정치극</text>
  </g>
</svg>
```

### S2. 밤에 받은 밀서를 숨기고 낮 조정 회의에서 반대 연기하는 심환지
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-sim-hwanji-scripted-acting">
    <!-- 배경: 낮의 조선 궁궐 조정 어전회의장 -->
    <rect x="30" y="30" width="340" height="240" fill="#eceff1" stroke="#455a64" stroke-width="5" rx="5"/>
    <!-- 상부 기둥과 조정 회의 표식 -->
    <line x1="100" y1="30" x2="100" y2="270" stroke="#b0bec5" stroke-width="8"/>
    <line x1="300" y1="30" x2="300" y2="270" stroke="#b0bec5" stroke-width="8"/>
    <rect x="130" y="45" width="140" height="35" fill="#37474f" rx="5"/>
    <text x="145" y="68" fill="#ffffff" font-size="16" font-weight="bold">어전회의 (각본 연기)</text>
    <!-- 중앙: 푸른 관복을 입고 겉으로만 열변을 토하는 노론 영수 심환지 -->
    <rect x="150" y="130" width="120" height="140" fill="#0d47a1" stroke="#ffffff" stroke-width="3" rx="10"/>
    <circle cx="210" cy="90" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 사모 관모와 열정적인 연기 표정 -->
    <path d="M 185 60 L 235 60 L 225 35 L 195 35 Z" fill="#212121"/>
    <circle cx="195" cy="85" r="5" fill="#000000"/>
    <circle cx="225" cy="85" r="5" fill="#000000"/>
    <!-- 연기파 상소 입모양 -->
    <path d="M 200 105 Q 210 115 220 105" stroke="#000000" stroke-width="3" fill="#ff5252"/>
    <!-- 오른손: 겉으로 외치는 반대 상소문 -->
    <rect x="250" y="140" width="75" height="90" fill="#ffffff" stroke="#000000" stroke-width="2" rx="3"/>
    <text x="260" y="165" fill="#d32f2f" font-size="14" font-weight="bold">反對上疏</text>
    <text x="260" y="185" fill="#000000" font-size="11" font-weight="bold">(각본 상소)</text>
    <!-- 왼손 소매 몰래 숨겨둔 불태우지 않은 정조 비밀어찰 -->
    <rect x="70" y="180" width="80" height="60" fill="#fff9c4" stroke="#d32f2f" stroke-width="3" rx="3" transform="rotate(-15 70 180)"/>
    <text x="80" y="205" fill="#d32f2f" font-size="13" font-weight="bold">몰래 보관</text>
    <text x="78" y="222" fill="#000000" font-size="11" font-weight="bold">(299통 밀서)</text>
    <text x="175" y="255" fill="#ffffff" font-size="16" font-weight="bold">노론 심환지</text>
    <rect x="60" y="10" width="280" height="30" fill="#ffffff" stroke="#0d47a1" stroke-width="2" rx="5"/>
    <text x="68" y="30" fill="#0d47a1" font-size="13" font-weight="bold">"전하! 불가하옵니다! (속마음: 편지 지시대로 연기 중)"</text>
    <text x="45" y="285" fill="#263238" font-size="15" font-weight="bold">독살설 파괴: 왕의 지시를 받고 조정을 움직인 연기파 파트너</text>
  </g>
</svg>
```
