# [소품 목록 + 컷아웃 SVG 초안] 세종대왕의 형 양녕대군의 광적인 개 사랑과 매사냥

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **양녕대군의 사냥개 목줄과 매사냥 가죽 장갑 (Dog Leash & Falconry Glove)**: 세자 시절 양녕대군이 궁궐에 숨겨 들여온 사냥개의 두꺼운 징 박힌 가죽 목줄과 매를 얹는 매사냥용 두꺼운 가죽 장갑.
2. **태종이 내다 버린 철창 우리와 자물쇠 (Discarded Animal Cage)**: 태종이 노하여 세자의 개와 매를 내쫓고 굳게 잠가버린 왕실 동물 우리 철창과 자물쇠.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 양녕대군의 사냥개 가죽 목줄과 매사냥(응사) 가죽 장갑
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-hunting-gear">
    <!-- 매사냥(응사)용 두꺼운 사냥 장갑 (오른편) -->
    <path d="M 220 220 L 250 120 C 255 100 270 95 285 110 C 295 120 300 130 295 150 L 315 130 C 325 120 340 125 340 140 C 340 160 330 180 320 200 L 290 250 Z" fill="#8d6e63" stroke="#4e342e" stroke-width="6"/>
    <!-- 장갑 손목 보호 가죽 덧대기 -->
    <path d="M 220 220 L 290 250 L 280 270 L 210 240 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="6"/>
    <!-- 매의 발톱을 막는 붉은 가죽 보강재 -->
    <ellipse cx="280" cy="150" rx="25" ry="35" fill="#a1887f" stroke="#4e342e" stroke-width="4" transform="rotate(-15 280 150)"/>
    <!-- 사냥개 두꺼운 징 박힌 목줄 (왼편) -->
    <path d="M 60 180 C 60 120 160 120 160 180 C 160 220 60 220 60 180 Z" fill="none" stroke="#3e2723" stroke-width="20" stroke-linecap="round"/>
    <path d="M 60 180 C 60 120 160 120 160 180 C 160 220 60 220 60 180 Z" fill="none" stroke="#d32f2f" stroke-width="12" stroke-linecap="round"/>
    <!-- 목줄의 금속 징(스파이크) 장식들 -->
    <polygon points="80,130 70,115 90,120" fill="#ffd54f" stroke="#3e2723" stroke-width="3"/>
    <polygon points="110,120 110,100 120,115" fill="#ffd54f" stroke="#3e2723" stroke-width="3"/>
    <polygon points="140,130 150,115 145,125" fill="#ffd54f" stroke="#3e2723" stroke-width="3"/>
    <!-- 연결된 긴 쇠사슬 끈 -->
    <path d="M 160 180 Q 200 200 190 260" fill="none" stroke="#607d8b" stroke-width="8" stroke-dasharray="12,6"/>
  </g>
</svg>
```

### S2. 태종이 내다 버린 사냥개 우리 철창과 자물쇠
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-discarded-cage">
    <!-- 무거운 나무/철제 사냥 우리 바닥과 천장 -->
    <rect x="60" y="220" width="280" height="30" fill="#4e342e" stroke="#263238" stroke-width="6"/>
    <rect x="60" y="60" width="280" height="25" fill="#4e342e" stroke="#263238" stroke-width="6"/>
    <!-- 철창 쇠창살들 (굳게 닫힘) -->
    <line x1="90" y1="85" x2="90" y2="220" stroke="#37474f" stroke-width="10"/>
    <line x1="130" y1="85" x2="130" y2="220" stroke="#37474f" stroke-width="10"/>
    <line x1="170" y1="85" x2="170" y2="220" stroke="#37474f" stroke-width="10"/>
    <line x1="210" y1="85" x2="210" y2="220" stroke="#37474f" stroke-width="10"/>
    <line x1="250" y1="85" x2="250" y2="220" stroke="#37474f" stroke-width="10"/>
    <line x1="290" y1="85" x2="290" y2="220" stroke="#37474f" stroke-width="10"/>
    <!-- 가로 철제 보강대 -->
    <rect x="70" y="140" width="260" height="15" fill="#546e7a" stroke="#263238" stroke-width="4"/>
    <!-- 중앙의 거대한 왕실 봉쇄 자물쇠 (태종의 분노) -->
    <rect x="175" y="125" width="50" height="45" rx="6" fill="#ffd54f" stroke="#3e2723" stroke-width="5"/>
    <path d="M 185 125 A 15 15 0 0 1 215 125" fill="none" stroke="#3e2723" stroke-width="6"/>
    <!-- 자물쇠 열쇠구멍 -->
    <circle cx="200" cy="145" r="5" fill="#3e2723"/>
    <polygon points="197,148 203,148 205,160 195,160" fill="#3e2723"/>
    <!-- 붉은 '폐(廢)' 봉인 딱지 -->
    <rect x="240" y="110" width="45" height="45" fill="#d32f2f" stroke="#b71c1c" stroke-width="4" transform="rotate(15 240 110)"/>
    <path d="M 255 120 L 275 140 M 275 120 L 255 140" stroke="#ffffff" stroke-width="5" transform="rotate(15 240 110)"/>
  </g>
</svg>
```
