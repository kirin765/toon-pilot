# [소품 목록 + 컷아웃 SVG 초안] 사람이 죽으면 귀신도 영혼도 사라진다? 조선을 발칵 뒤집은 화담 서경덕의 이단 성리학

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **기 일원론과 영혼 소멸을 설파하는 화담 서경덕 (Hwadam Seo Gyeongdeok Preaching Ki)**: 개성 송악산 계곡(화담)에서 "우주는 기(氣)의 순환이고 귀신은 소멸한다!"며 우주의 에너지를 설명하는 서경덕.
2. **충격받고 이단이라며 비판하는 정통 성리학자들 (Shocked Orthodox Scholars)**: "귀신이 사라지면 제사는 왜 지내냐! 이단 사상이다!"라며 경악하고 서경덕의 철학책을 비판하는 보수 주자학파 학자들.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 기 일원론과 사후 귀신 소멸을 설파하는 화담 서경덕
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-seogyeongdeok-preaching-ki">
    <!-- 배경: 개성 송악산 화담(花潭) 계곡과 자연의 폭포 -->
    <rect x="30" y="30" width="340" height="240" fill="#1b5e20" stroke="#000000" stroke-width="5" rx="5"/>
    <path d="M 280 30 L 320 30 L 330 270 L 270 270 Z" fill="#4dd0e1" opacity="0.6"/>
    <!-- 왼편: 포의(布衣)를 입고 앉아 기(氣)의 순환을 가르치는 화담 서경덕 -->
    <rect x="60" y="150" width="120" height="110" fill="#f5f5f5" stroke="#424242" stroke-width="4" rx="10"/>
    <circle cx="120" cy="100" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 유학자 정자관과 인자하고 초연한 미소 -->
    <path d="M 95 65 L 145 65 L 135 30 L 105 30 Z" fill="#000000" stroke="#212121" stroke-width="2"/>
    <path d="M 105 95 Q 120 100 135 95" stroke="#000000" stroke-width="3" fill="none"/>
    <circle cx="108" cy="90" r="4" fill="#000000"/>
    <circle cx="132" cy="90" r="4" fill="#000000"/>
    <path d="M 110 120 Q 120 135 130 120" fill="#e0e0e0"/>
    <text x="75" y="220" fill="#212121" font-size="16" font-weight="bold">화담 서경덕</text>
    <!-- 오른편: 서경덕이 주창하는 기(氣)의 소용돌이와 귀신 소멸의 이치 -->
    <circle cx="230" cy="120" r="45" fill="none" stroke="#00e5ff" stroke-width="5" stroke-dasharray="10 5"/>
    <circle cx="230" cy="120" r="25" fill="none" stroke="#ffff00" stroke-width="4"/>
    <text x="218" y="126" fill="#ffffff" font-size="20" font-weight="bold">氣</text>
    <path d="M 230 75 Q 260 50 280 80" stroke="#ff8f00" stroke-width="4" fill="none"/>
    <text x="170" y="195" fill="#fff9c4" font-size="15" font-weight="bold">"우주는 기(氣)의 순환!"</text>
    <text x="170" y="220" fill="#d32f2f" font-size="15" font-weight="bold">"죽으면 귀신도 흩어진다!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">16세기 조선: 유물론적 기 일원론과 사학 논쟁</text>
  </g>
</svg>
```

### S2. 충격받고 이단이라며 경악하는 정통 주자학파 성리학자들
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-shocked-orthodox-scholars">
    <!-- 왼편: 귀신이 소멸한다는 말에 제사상을 지키며 분노하는 보수 성리학자 -->
    <rect x="40" y="140" width="130" height="120" fill="#0d47a1" stroke="#000000" stroke-width="4" rx="5"/>
    <circle cx="105" cy="90" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <path d="M 80 55 L 130 55 L 120 20 L 90 20 Z" fill="#000000"/>
    <!-- 경악하여 입을 벌리고 분노하는 표정 -->
    <path d="M 90 80 L 105 85" stroke="#000000" stroke-width="4"/>
    <path d="M 120 80 L 105 85" stroke="#000000" stroke-width="4"/>
    <circle cx="95" cy="90" r="5" fill="#000000"/>
    <circle cx="115" cy="90" r="5" fill="#000000"/>
    <ellipse cx="105" cy="110" rx="10" ry="12" fill="#b71c1c"/>
    <!-- 손에 든 제사 위패 (神位) -->
    <rect x="150" y="80" width="30" height="70" fill="#5d4037" stroke="#212121" stroke-width="2"/>
    <text x="155" y="120" fill="#ffffff" font-size="12" font-weight="bold">神位</text>
    <text x="50" y="235" fill="#ffffff" font-size="14" font-weight="bold">정통 주자학파</text>
    <!-- 오른편: 화담의 사상을 이단(異端)이라 규정하고 비판하는 말풍선 -->
    <rect x="190" y="50" width="180" height="150" fill="#fff9c4" stroke="#d32f2f" stroke-width="5" rx="10"/>
    <text x="230" y="85" fill="#d32f2f" font-size="22" font-weight="bold">異端 (이단!)</text>
    <text x="205" y="120" fill="#212121" font-size="14" font-weight="bold">"귀신이 사라진다면</text>
    <text x="205" y="145" fill="#212121" font-size="14" font-weight="bold">조상 제사는 왜 지내냐!</text>
    <text x="205" y="170" fill="#b71c1c" font-size="14" font-weight="bold">유학을 망치는 사문난적!"</text>
    <text x="40" y="285" fill="#ffd54f" font-size="15" font-weight="bold">퇴계 이황의 비판: 도덕 이(理) vs 물질 기(氣)의 격돌</text>
  </g>
</svg>
```
