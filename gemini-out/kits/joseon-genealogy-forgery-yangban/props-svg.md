# [소품 목록 + 컷아웃 SVG 초안] 전체 인구 70%가 양반이 된 기적, 조선 후기 돈으로 산 공명첩과 족보 위조의 실체

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **이름 칸 비어있는 벼슬 임명장 공명첩과 엽전 상자 (Blank Title Gongmyeongcheop & Coin Chest)**: 임금의 붉은 옥새가 찍혀 있고 성명 칸은 텅 비어있어 돈을 내고 이름을 써 넣는 합법 신분 매매 임명장 공명첩과 산더미 같은 상평통보 엽전.
2. **조상 가짜로 끼워 넣는 위조 족보책과 갓 쓴 벼락 양반 (Forged Genealogy & Nouveau Riche Yangban)**: 붓으로 조상 이름을 몰락 가문에 조작해 써 넣는 가짜 족보와, 돈으로 샀지만 어색하게 갓을 쓰고 도포를 입은 채 으스대는 벼락 양반 상인.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 이름 칸이 비어있어 돈을 내고 구매하는 조선의 벼슬 임명장 공명첩과 엽전
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-gongmyeongcheop-coins">
    <!-- 오른편: 왕실의 붉은 도장이 찍힌 벼슬 임명장 공명첩 (한지 문서) -->
    <rect x="180" y="40" width="200" height="220" fill="#fff9c4" stroke="#8d6e63" stroke-width="6" rx="5"/>
    <text x="220" y="80" fill="#3e2723" font-size="24" font-weight="bold" font-family="serif">空名帖 (공명첩)</text>
    <!-- 왕실 붉은색 어보 (옥새) 도장 표식 -->
    <rect x="270" y="100" width="60" height="60" fill="#d32f2f" opacity="0.8" rx="5"/>
    <text x="280" y="140" fill="#ffffff" font-size="24" font-weight="bold">御寶</text>
    <!-- 이름이 들어갈 빈칸 점선 박스 (이름 칸) -->
    <rect x="200" y="170" width="160" height="40" fill="#ffffff" stroke="#d32f2f" stroke-width="3" stroke-dasharray="8,8"/>
    <text x="210" y="195" fill="#d32f2f" font-size="16" font-weight="bold">[ 돈 낸 사람 이름 쓰는 칸 ]</text>
    <!-- 왼편: 공명첩을 사기 위해 바친 산더미 같은 상평통보 엽전 꾸러미 -->
    <rect x="20" y="180" width="140" height="80" fill="#795548" stroke="#3e2723" stroke-width="5" rx="5"/>
    <!-- 쏟아지는 골드 코인 엽전들 -->
    <circle cx="50" cy="160" r="20" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <rect x="43" y="153" width="14" height="14" fill="#3e2723"/>
    <circle cx="90" cy="150" r="20" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <rect x="83" y="143" width="14" height="14" fill="#3e2723"/>
    <circle cx="130" cy="165" r="20" fill="#ffd54f" stroke="#f57c00" stroke-width="4"/>
    <rect x="123" y="158" width="14" height="14" fill="#3e2723"/>
    <text x="35" y="275" fill="#3e2723" font-size="16" font-weight="bold">돈만 내면 합법적 신분 세탁</text>
  </g>
</svg>
```

### S2. 족보를 조작해 써 넣는 위조 족보 서책과 거들먹거리는 벼락 양반
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-forged-genealogy-yangban">
    <!-- 오른편: 돈으로 신분을 사서 어색하게 갓 쓰고 거들먹거리는 벼락 양반 -->
    <circle cx="280" cy="120" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <!-- 어색하게 큰 흑립 (갓) -->
    <path d="M 220 80 L 340 80 L 300 30 L 260 30 Z" fill="#212121"/>
    <!-- 거들먹거리는 거만한 표정 (돈으로 산 자만심) -->
    <path d="M 260 110 Q 270 105 280 110" stroke="#5d4037" stroke-width="4" fill="none"/>
    <path d="M 290 110 Q 300 105 310 110" stroke="#5d4037" stroke-width="4" fill="none"/>
    <path d="M 270 145 Q 285 135 300 145" stroke="#d32f2f" stroke-width="4" fill="none"/>
    <!-- 비단 도포 및 부채 -->
    <rect x="230" y="165" width="100" height="115" fill="#e0f7fa" stroke="#00838f" stroke-width="5" rx="10"/>
    <path d="M 180 200 L 230 180 L 230 220 Z" fill="#ffd54f" stroke="#f57c00" stroke-width="3"/>
    <!-- 왼편: 몰락 양반 가문의 족보에 붓으로 가짜 이름을 끼워 넣는 위조 족보 (족보) -->
    <rect x="30" y="80" width="150" height="180" fill="#efebe9" stroke="#5d4037" stroke-width="6" rx="5"/>
    <text x="60" y="120" fill="#3e2723" font-size="24" font-weight="bold" font-family="serif">族譜 (족보)</text>
    <!-- 가짜로 빨간색 붓글씨로 조작 편입한 이름 표기 -->
    <rect x="50" y="150" width="110" height="40" fill="#ffcdd2" stroke="#b71c1c" stroke-width="3"/>
    <text x="60" y="175" fill="#b71c1c" font-size="16" font-weight="bold">가짜 조상 위조 편입</text>
    <path d="M 120 230 L 150 180" stroke="#212121" stroke-width="8" stroke-linecap="round"/>
    <text x="35" y="285" fill="#d32f2f" font-size="16" font-weight="bold">전 인구 70%가 가짜 양반 신분 상승</text>
  </g>
</svg>
```
