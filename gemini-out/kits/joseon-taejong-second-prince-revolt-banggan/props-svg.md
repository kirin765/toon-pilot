# [소품 목록 + 컷아웃 SVG 초안] 이복동생 벤 이방원, 이번엔 친형이랑 한양에서 칼부림했다? 2차 왕자의 난 이방간 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **박포의 이간질에 속아 칼을 든 친형 회안대군 이방간 (Prince Banggan Leading Revolt)**: 화려한 장군 갑옷을 입고 칼을 치켜든 채, 공신 박포의 꼬드김에 넘어가 동생 이방원을 치기 위해 도성에 사병을 이끌고 진격하는 야망 넘치는 넷째 형 이방간.
2. **친형 제압하고 박포 목을 벤 채 왕세제 오르는 이방원 (Yi Bangwon Victorious in Second Revolt)**: 시가전에서 형의 군대를 대파하고 반란 주모자 박포의 목을 벤 채, 왕위 계승권(왕세제)을 확정 짓고 태종 즉위를 준비하는 압도적 승부사 이방원.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 박포의 충동질에 넘어가 도성에 사병을 이끌고 나서는 친형 이방간
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-prince-banggan-revolt">
    <!-- 배경: 1400년 개경 도성 한복판 시가전 전장 -->
    <rect x="30" y="30" width="340" height="240" fill="#37474f" stroke="#ffb74d" stroke-width="5" rx="5"/>
    <rect x="60" y="50" width="280" height="40" fill="#1b1b1b"/>
    <text x="95" y="77" fill="#ffb74d" font-size="19" font-weight="bold">第2次 王者의 亂 (박포의 난)</text>
    <!-- 왼편: 반란을 이간질하고 충동질하는 무장 박포 -->
    <rect x="60" y="160" width="90" height="110" fill="#4e342e" stroke="#212121" stroke-width="3" rx="10"/>
    <circle cx="105" cy="120" r="28" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <path d="M 80 95 L 130 95 L 120 65 L 90 65 Z" fill="#212121"/>
    <circle cx="95" cy="115" r="4" fill="#000000"/>
    <circle cx="115" cy="115" r="4" fill="#000000"/>
    <path d="M 100 130 Q 105 135 110 130" stroke="#b71c1c" stroke-width="2" fill="none"/>
    <text x="75" y="240" fill="#ffd54f" font-size="13" font-weight="bold">이간질 박포</text>
    <!-- 오른편: 칼을 치켜들고 진격하는 넷째 형 회안대군 이방간 -->
    <rect x="180" y="140" width="130" height="130" fill="#b71c1c" stroke="#ffb74d" stroke-width="4" rx="10"/>
    <circle cx="245" cy="95" r="36" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 장군 갑옷 투구와 욕망에 가득 찬 흥분된 눈빛 -->
    <path d="M 210 65 L 280 65 L 270 25 L 220 25 Z" fill="#212121" stroke="#ffb74d" stroke-width="2"/>
    <circle cx="235" cy="90" r="6" fill="#000000"/>
    <circle cx="260" cy="90" r="6" fill="#000000"/>
    <path d="M 225 78 L 245 83" stroke="#000000" stroke-width="3"/>
    <path d="M 270 78 L 250 83" stroke="#000000" stroke-width="3"/>
    <path d="M 235 115 L 260 115" stroke="#ffffff" stroke-width="4"/>
    <!-- 손에 든 검과 화살 -->
    <path d="M 270 160 L 360 70" stroke="#9e9e9e" stroke-width="10" stroke-linecap="round"/>
    <text x="195" y="255" fill="#ffffff" font-size="16" font-weight="bold">넷째 형 이방간</text>
    <rect x="130" y="10" width="230" height="30" fill="#ffffff" stroke="#d32f2f" stroke-width="2" rx="5"/>
    <text x="138" y="30" fill="#d32f2f" font-size="13" font-weight="bold">"방원이를 치자! 내가 왕위에 오르리라!"</text>
    <text x="40" y="285" fill="#ffffff" font-size="15" font-weight="bold">1400년: 이간질에 넘어간 친형이 사병을 풀어 일으킨 대규모 시가전</text>
  </g>
</svg>
```

### S2. 친형의 군대를 대파하고 박포를 베어 왕세제에 오르는 이방원
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-yi-bangwon-victorious-second">
    <!-- 배경: 도성 시가전 승리와 왕위 계승 편전 -->
    <rect x="30" y="30" width="340" height="240" fill="#1b1b1b" stroke="#ffd54f" stroke-width="5" rx="5"/>
    <!-- 중앙: 화려한 금장 철갑옷을 입은 압도적 승부사 이방원 -->
    <rect x="130" y="140" width="140" height="130" fill="#212121" stroke="#ffd54f" stroke-width="4" rx="10"/>
    <circle cx="200" cy="95" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 왕세제 투구와 냉혹하지만 확신에 찬 승자의 미소 -->
    <path d="M 155 65 L 245 65 L 235 20 L 165 20 Z" fill="#ffd54f" stroke="#b71c1c" stroke-width="3"/>
    <circle cx="185" cy="90" r="5" fill="#000000"/>
    <circle cx="215" cy="90" r="5" fill="#000000"/>
    <path d="M 185 115 Q 200 125 215 115" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 손에 든 정종의 왕세제 책봉 교지 -->
    <rect x="230" y="160" width="85" height="65" fill="#fff9c4" stroke="#d32f2f" stroke-width="3" rx="3" transform="rotate(-10 230 160)"/>
    <text x="245" y="185" fill="#d32f2f" font-size="15" font-weight="bold">王世弟 冊封</text>
    <text x="245" y="205" fill="#000000" font-size="13" font-weight="bold">(태종 즉위)</text>
    <!-- 왼편 하단: 참수된 반란 주모자 박포의 수급과 유배 교지 -->
    <circle cx="80" cy="220" r="22" fill="#ffcc80" stroke="#b71c1c" stroke-width="3"/>
    <path d="M 70 215 L 75 220 L 70 225" stroke="#000000" stroke-width="2"/>
    <path d="M 90 215 L 85 220 L 90 225" stroke="#000000" stroke-width="2"/>
    <text x="50" y="260" fill="#d32f2f" font-size="14" font-weight="bold">박포 참수 / 방간 유배</text>
    <text x="145" y="250" fill="#ffd54f" font-size="16" font-weight="bold">왕세제 이방원</text>
    <rect x="130" y="10" width="240" height="30" fill="#ffffff" stroke="#b71c1c" stroke-width="3" rx="5"/>
    <text x="138" y="30" fill="#b71c1c" font-size="13" font-weight="bold">"형님 목숨은 살려주마! 이제 내가 왕이다!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">2차 왕자의 난: 동복 친형까지 제압하고 권좌에 오른 철혈 군주</text>
  </g>
</svg>
```
