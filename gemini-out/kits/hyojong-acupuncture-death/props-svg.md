# [소품 목록 + 컷아웃 SVG 초안] 조선 북벌의 군주 효종을 한 방에 즉사시킨 수전증 어의 신가귀의 치명적 의료사고 침

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **수전증 어의 신가귀의 떨리는 손과 대형 은침 (Shaking Doctor Hand & Silver Needle)**: 파르르 떠는 움직임 선이 강조된 늙은 의원의 손끝과 종기 시술용으로 번뜩이는 길고 날카로운 왕실 대형 은침.
2. **혈관 관통 분수처럼 솟구치는 출혈과 왕실 사발 (Gushing Blood & Royal Bowl)**: 혈맥을 건드려 붉은 피가 폭포수처럼 쏟아져 나와 펄펄 넘치는 백자 사기 사발과 붉게 물든 곤룡포 소맷자락.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 덜덜 떨리는 수전증 손끝으로 쥐고 있는 날카로운 왕실 은침
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-shaking-needle-hand">
    <!-- 늙고 쭈글쭈글한 어의의 손 (오른편에서 왼편을 향함) -->
    <path d="M 280 180 Q 240 160 210 170 Q 180 180 170 160 Q 160 140 190 130 Q 220 120 260 130 L 340 140 L 340 220 Z" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <path d="M 170 160 Q 150 155 140 165 Q 130 175 150 185" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <!-- 손 떨림 수전증 진동 효과 선 (파르르 떠는 모션) -->
    <path d="M 130 140 Q 120 150 130 160" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <path d="M 115 135 Q 105 145 115 155" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <path d="M 230 100 Q 240 90 250 100" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <path d="M 245 95 Q 255 85 265 95" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <text x="200" y="80" fill="#d32f2f" font-size="18" font-weight="bold">손 덜덜 떠는 수전증 어의</text>
    <!-- 길고 날카로운 왕실 대형 시술용 은침 (대각선) -->
    <line x1="150" y1="170" x2="40" y2="240" stroke="#b0bec5" stroke-width="6" stroke-linecap="round"/>
    <polygon points="40,240 35,245 45,245" fill="#ffffff"/>
    <circle cx="155" cy="167" r="8" fill="#ffd54f" stroke="#f57c00" stroke-width="3"/>
    <text x="50" y="270" fill="#212121" font-size="16" font-weight="bold">종기 대신 굵은 혈관 찌른 은침</text>
  </g>
</svg>
```

### S2. 혈관을 잘못 찔러 피가 분수처럼 솟구치며 사발로 흘러넘치는 참사
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-gushing-blood-bowl">
    <!-- 하단에 놓인 조선 왕실 붉은 피가 고인 사기그릇 사발 -->
    <ellipse cx="200" cy="240" rx="90" ry="25" fill="#eceff1" stroke="#37474f" stroke-width="6"/>
    <path d="M 110 240 C 110 280 290 280 290 240 Z" fill="#cfd8dc" stroke="#37474f" stroke-width="6"/>
    <ellipse cx="200" cy="245" rx="80" ry="18" fill="#b71c1c"/>
    <!-- 상단 혈맥에서 분수처럼 뿜어져 내리는 폭포수 출혈 (혈붕) -->
    <path d="M 170 50 Q 150 120 170 240 Q 200 250 230 240 Q 250 120 230 50 Z" fill="#d32f2f" opacity="0.9"/>
    <!-- 피 튀기는 액체 물방울 입자들 -->
    <circle cx="140" cy="120" r="12" fill="#d32f2f"/>
    <circle cx="260" cy="140" r="15" fill="#d32f2f"/>
    <circle cx="110" cy="180" r="10" fill="#b71c1c"/>
    <circle cx="285" cy="200" r="12" fill="#b71c1c"/>
    <!-- 사발 밖으로 넘쳐흐르는 피 자국 -->
    <path d="M 120 255 Q 115 275 110 285" stroke="#b71c1c" stroke-width="8" stroke-linecap="round"/>
    <path d="M 275 255 Q 280 275 285 285" stroke="#b71c1c" stroke-width="8" stroke-linecap="round"/>
    <text x="80" y="35" fill="#b71c1c" font-size="20" font-weight="bold">지혈 불가능 쏟아진 과다출혈</text>
    <text x="115" y="290" fill="#212121" font-size="16" font-weight="bold">시술 몇 시간 만에 효종 승하</text>
  </g>
</svg>
```
