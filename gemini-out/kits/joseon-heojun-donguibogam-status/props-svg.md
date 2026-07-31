# [소품 목록 + 컷아웃 SVG 초안] 임금이 죽자 참수당할 뻔하고 유배지에서 피를 토하며 썼다? 천민 서얼 허준의 동의보감 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **유배지 방안에서 동의보감을 집필하는 70세 허준 (Exiled Heo Jun Writing)**: 춥고 초라한 유배지 방에서 촛불을 켜고, 늙고 수척한 얼굴로 붓을 쥐어 25권 『동의보감(東醫寶鑑)』을 써내려가는 70세 백발의 허준.
2. **허준 처형 탄핵 상소문과 유네스코 세계기록유산 인장 (Petition & UNESCO Seal)**: '서자 허준을 참수하라'고 적힌 사간원의 살벌한 탄핵 상소문과, 400년 뒤 세계 의학사 최초로 인정받은 금빛 'UNESCO 세계기록유산' 공식 인장.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 춥고 열악한 유배지에서 붓을 들고 동의보감 25권을 쓰는 70세 허준
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-heojun-exile-writing">
    <!-- 배경: 어둡고 초라한 유배지 온돌방과 호롱불 -->
    <rect x="30" y="30" width="340" height="240" fill="#3e2723" stroke="#212121" stroke-width="5" rx="5"/>
    <rect x="50" y="180" width="300" height="80" fill="#8d6e63" stroke="#5d4037" stroke-width="4"/>
    <!-- 촛불과 불빛 -->
    <rect x="70" y="140" width="10" height="40" fill="#ffffff"/>
    <ellipse cx="75" cy="130" rx="8" ry="12" fill="#ff6d00"/>
    <ellipse cx="75" cy="130" rx="4" ry="7" fill="#ffd54f"/>
    <!-- 중앙: 붓을 쥐고 의서를 쓰는 백발 수척한 70세 어의 허준 -->
    <circle cx="210" cy="110" r="35" fill="#ffcc80" stroke="#5d4037" stroke-width="4"/>
    <!-- 백발 상투와 수척한 주름, 흰 수염 -->
    <path d="M 185 85 Q 210 65 235 85" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="3"/>
    <circle cx="210" cy="75" r="12" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="2"/>
    <path d="M 190 120 Q 210 150 230 120" fill="#e0e0e0"/>
    <circle cx="195" cy="110" r="4" fill="#000000"/>
    <circle cx="225" cy="110" r="4" fill="#000000"/>
    <path d="M 200 125 L 220 125" stroke="#212121" stroke-width="3"/>
    <!-- 소박하고 낡은 의관 의복 -->
    <path d="M 160 145 L 260 145 L 250 240 L 170 240 Z" fill="#546e7a" stroke="#37474f" stroke-width="4"/>
    <!-- 책상 위에 펼쳐진 25권 동의보감 (東醫寶鑑) -->
    <rect x="180" y="190" width="120" height="60" fill="#fff9c4" stroke="#8d6e63" stroke-width="4" rx="3"/>
    <text x="195" y="215" fill="#1a237e" font-size="16" font-weight="bold" font-family="serif">東醫寶鑑</text>
    <text x="190" y="240" fill="#2e7d32" font-size="13" font-weight="bold">조선 향약·백성의 의서</text>
    <!-- 붓을 쥔 손 -->
    <circle cx="260" cy="180" r="12" fill="#ffcc80" stroke="#5d4037" stroke-width="3"/>
    <line x1="260" y1="170" x2="240" y2="200" stroke="#212121" stroke-width="5"/>
    <text x="45" y="285" fill="#ffd54f" font-size="15" font-weight="bold">70세 유배지 집념: 인류 최초 유네스코 의학 유산</text>
  </g>
</svg>
```

### S2. 허준 참수 탄핵 상소문과 유네스코(UNESCO) 세계기록유산 금빛 인장
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-petition-unesco-seal">
    <!-- 왼편: 1608년 선조 승하 직후 날아든 사대부들의 허준 참수 상소문 -->
    <rect x="30" y="50" width="160" height="200" fill="#eeeeee" stroke="#616161" stroke-width="5" rx="5"/>
    <rect x="45" y="65" width="130" height="35" fill="#d32f2f" rx="3"/>
    <text x="60" y="88" fill="#ffffff" font-size="16" font-weight="bold">斬首上疏 (참수!)</text>
    <text x="45" y="125" fill="#212121" font-size="14" font-weight="bold">"천한 서자 의관이</text>
    <text x="45" y="150" fill="#212121" font-size="14" font-weight="bold">약을 잘못 써서</text>
    <text x="45" y="175" fill="#d32f2f" font-size="15" font-weight="bold">성상을 숨지게 했다!"</text>
    <text x="50" y="210" fill="#424242" font-size="13" font-weight="bold">사헌부·사간원 탄핵</text>
    <text x="65" y="235" fill="#b71c1c" font-size="14" font-weight="bold">1608년 유배 처분</text>
    <!-- 오른편: 400년 뒤 세계 의학사 최초로 등재된 유네스코 세계기록유산 금빛 인장 -->
    <circle cx="280" cy="150" r="75" fill="#ffd54f" stroke="#ff6d00" stroke-width="8"/>
    <circle cx="280" cy="150" r="60" fill="#fff9c4" stroke="#ff8f00" stroke-width="3" stroke-dasharray="6,6"/>
    <text x="235" y="115" fill="#1b5e20" font-size="18" font-weight="bold">UNESCO</text>
    <text x="225" y="145" fill="#d32f2f" font-size="15" font-weight="bold">세계기록유산</text>
    <text x="230" y="170" fill="#212121" font-size="13" font-weight="bold">Memory of the World</text>
    <text x="235" y="195" fill="#1b5e20" font-size="16" font-weight="bold">2009년 등재</text>
    <text x="40" y="285" fill="#1a237e" font-size="15" font-weight="bold">서얼의 차별과 사형 위기를 딛고 세운 의학 기적</text>
  </g>
</svg>
```
