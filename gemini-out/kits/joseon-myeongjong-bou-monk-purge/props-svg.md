# [소품 목록 + 컷아웃 SVG 초안] 조선 시대 왕실에서 승려 과거 시험을 열었다가 제주도에서 맞아 죽었다? 명종 문정왕후 보우 대사 비극

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **왕실 승과 주관하며 최고 권력 누리는 보우 대사 (Grand Monk Bou Conducting Exam)**: 화려한 금란가사와 붉은 장삼을 입고 왕실 문정왕후 교지를 든 채 봉은사 승과를 주관하며 카리스마를 뿜어내는 승려 보우 대사.
2. **제주 유배지에서 보우 대사 매질하는 제주 목사 변협 (Jeju Magistrate Beating Bou)**: 문정왕후 승하 후 제주도로 유배 온 보우 대사를 곤장틀에 묶어놓고 사림의 보복 심리에 맞춰 무자비하게 곤장을 내려치는 냉혹한 제주 목사 변협.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 봉은사에서 왕실 승과 고시를 주관하는 권력자 보우 대사
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-monk-bou-state-exam">
    <!-- 배경: 화려하게 불교 깃발(단청)이 걸린 봉은사 대웅전 마당 -->
    <rect x="30" y="30" width="340" height="240" fill="#4e342e" stroke="#fbc02d" stroke-width="5" rx="5"/>
    <rect x="60" y="50" width="280" height="40" fill="#1b1b1b"/>
    <text x="110" y="77" fill="#fbc02d" font-size="20" font-weight="bold">奉恩寺 僧科 (왕실 승과)</text>
    <!-- 중앙: 화려한 금란가사 입은 도대선사 보우 -->
    <rect x="140" y="140" width="120" height="130" fill="#b71c1c" stroke="#fbc02d" stroke-width="4" rx="10"/>
    <circle cx="200" cy="95" r="38" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 민머리 (승려)와 카리스마 넘치고 평온한 표정 -->
    <path d="M 165 75 Q 200 60 235 75" stroke="#424242" stroke-width="2" fill="none"/>
    <circle cx="185" cy="90" r="5" fill="#000000"/>
    <circle cx="215" cy="90" r="5" fill="#000000"/>
    <path d="M 190 115 Q 200 122 210 115" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 어깨에 걸친 화려한 금란가사 무늬 -->
    <path d="M 140 160 L 220 270 L 170 270 L 140 200 Z" fill="#fbc02d" opacity="0.8"/>
    <!-- 손에 든 왕실 문정왕후 승과 부활 교지 -->
    <rect x="220" y="160" width="80" height="60" fill="#fff9c4" stroke="#d32f2f" stroke-width="2" rx="3" transform="rotate(-10 220 160)"/>
    <text x="235" y="185" fill="#d32f2f" font-size="14" font-weight="bold">文定王后</text>
    <text x="235" y="205" fill="#000000" font-size="13" font-weight="bold">僧科 復活</text>
    <text x="50" y="230" fill="#ffffff" font-size="14" font-weight="bold">응시자 4,000명</text>
    <text x="135" y="260" fill="#fbc02d" font-size="16" font-weight="bold">도대선사 보우</text>
    <rect x="130" y="10" width="230" height="30" fill="#ffffff" stroke="#d32f2f" stroke-width="2" rx="5"/>
    <text x="138" y="30" fill="#d32f2f" font-size="13" font-weight="bold">"조선 불교를 다시 일으키리라!"</text>
    <text x="45" y="285" fill="#ffd54f" font-size="15" font-weight="bold">1551년: 숭유억불을 깨고 국가 승려 고시를 열었던 명종 시대</text>
  </g>
</svg>
```

### S2. 문정왕후 승하 후 제주도에서 보우 대사 매질하는 제주 목사 변협
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-magistrate-beating-bou">
    <!-- 배경: 삭막한 제주도 유배지 관아 마당 -->
    <rect x="30" y="30" width="340" height="240" fill="#37474f" stroke="#212121" stroke-width="5" rx="5"/>
    <!-- 상단: 문정왕후 승하와 사림의 보복 교지 -->
    <rect x="50" y="45" width="300" height="35" fill="#b71c1c"/>
    <text x="75" y="68" fill="#ffffff" font-size="16" font-weight="bold">文定王后 昇遐 → 儒學者의 報復 (제주 유배)</text>
    <!-- 중앙 하단: 곤장틀에 묶여 피 흘리는 보우 대사 -->
    <rect x="120" y="200" width="160" height="40" fill="#8d6e63" stroke="#3e2723" stroke-width="3" rx="5"/>
    <circle cx="140" cy="195" r="25" fill="#ffcc80" stroke="#5d4037" stroke-width="2"/>
    <path d="M 130 195 Q 140 205 150 195" stroke="#b71c1c" stroke-width="3" fill="none"/>
    <line x1="160" y1="200" x2="260" y2="200" stroke="#b71c1c" stroke-width="5"/>
    <text x="130" y="230" fill="#ffffff" font-size="14" font-weight="bold">보우 대사 (장살)</text>
    <!-- 오른편: 곤장을 무자비하게 내려치는 제주 목사 변협 -->
    <rect x="250" y="120" width="100" height="110" fill="#1b5e20" stroke="#ffffff" stroke-width="3" rx="10"/>
    <circle cx="300" cy="80" r="32" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <!-- 무관 사모와 냉혹하고 살벌한 눈빛 -->
    <path d="M 270 55 L 330 55 L 320 25 L 280 25 Z" fill="#000000"/>
    <circle cx="290" cy="75" r="5" fill="#000000"/>
    <circle cx="310" cy="75" r="5" fill="#000000"/>
    <path d="M 290 95 Q 300 100 310 95" stroke="#000000" stroke-width="3" fill="none"/>
    <!-- 손에 높이 쳐든 두꺼운 매질 곤장 (장살 대나무) -->
    <path d="M 270 140 L 190 190" stroke="#ffb74d" stroke-width="10" stroke-linecap="round"/>
    <text x="250" y="225" fill="#ffd54f" font-size="14" font-weight="bold">제주 목사 변협</text>
    <rect x="50" y="90" width="200" height="30" fill="#ffffff" stroke="#000000" stroke-width="2" rx="5"/>
    <text x="58" y="110" fill="#d32f2f" font-size="13" font-weight="bold">"요승 보우를 쳐서 사림의 원수를 갚아라!"</text>
    <text x="45" y="285" fill="#ffffff" font-size="15" font-weight="bold">1565년: 유학자 관리의 무자비한 매질 속에 맞아 죽은 대사</text>
  </g>
</svg>
```
