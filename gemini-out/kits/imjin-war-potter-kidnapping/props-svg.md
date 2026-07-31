# [소품 목록 + 컷아웃 SVG 초안] 임진왜란의 또 다른 이름 도자기 전쟁, 일본 국보와 아리타 자기의 시조가 된 조선 납치 도공들의 비화

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **일본 납치 조선 도공 이삼평과 하얀 백자 가마 (Abducted Potter Yi Sam-pyeong & Kiln)**: 사슬에 묶인 고난 속에서도 빚어낸 순백의 조선 백자 다완(찻종)과, 배경에서 붉게 타오르는 일본 아리타의 흙 장작 가마.
2. **유럽 수출 화려한 이마리 자기와 은화 보물상자 (Export Porcelain & Silver Chest)**: 네덜란드 동인도회사 선박을 타고 유럽 왕실로 수출된 푸르고 붉은 화려한 문양의 일본 아리타 이마리 자기와, 그 대가로 가득 쌓인 막대한 은화 보물상자.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 사슬에 묶여 일본으로 끌려가서도 순백의 백자를 빚어낸 조선 도공 이삼평
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-yi-sam-pyeong-potter">
    <!-- 배경: 붉은 불꽃이 타오르는 아리타 도자기 장작 가마 -->
    <path d="M 220 250 Q 250 150 340 160 L 360 250 Z" fill="#6d4c41" stroke="#3e2723" stroke-width="6"/>
    <path d="M 250 250 Q 270 200 310 250 Z" fill="#ff6d00"/>
    <polygon points="270,230 280,210 290,230" fill="#ffd54f"/>
    <!-- 중앙: 조선 도복을 입은 도공 이삼평의 두 손과 도예 물레 -->
    <ellipse cx="140" cy="240" rx="70" ry="20" fill="#8d6e63" stroke="#3e2723" stroke-width="6"/>
    <!-- 빚어내고 있는 눈부시게 하얀 조선풍 아리타 백자 찻종 (이도다완) -->
    <path d="M 100 220 C 90 170 190 170 180 220 Z" fill="#f5f5f5" stroke="#00838f" stroke-width="5"/>
    <ellipse cx="140" cy="180" rx="40" ry="12" fill="#ffffff" stroke="#00838f" stroke-width="4"/>
    <!-- 도공의 손 (양쪽에서 백자를 감싸 쥠) -->
    <path d="M 60 190 Q 90 180 105 200" stroke="#ffcc80" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M 220 190 Q 190 180 175 200" stroke="#ffcc80" stroke-width="12" fill="none" stroke-linecap="round"/>
    <!-- 강제 납치를 상징하는 손목의 철창 사슬 끊어짐 효과 -->
    <rect x="50" y="180" width="15" height="25" rx="5" fill="none" stroke="#37474f" stroke-width="4"/>
    <rect x="215" y="180" width="15" height="25" rx="5" fill="none" stroke="#37474f" stroke-width="4"/>
    <text x="60" y="50" fill="#3e2723" font-size="20" font-weight="bold">일본 도예의 시조 조선 도공 이삼평</text>
    <text x="75" y="285" fill="#00838f" font-size="16" font-weight="bold">성 한 채 값이었던 조선 도자기 기술</text>
  </g>
</svg>
```

### S2. 유럽 동인도회사로 수출된 화려한 아리타 자기와 일본의 은화 보물상자
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-export-porcelain-silver">
    <!-- 오른편: 유럽 왕실을 사로잡은 화려한 문양의 아리타 이마리 자기 (항아리) -->
    <path d="M 240 240 C 210 160 210 100 250 80 C 290 100 290 160 260 240 Z" fill="#ffffff" stroke="#1565c0" stroke-width="6"/>
    <ellipse cx="250" cy="80" rx="20" ry="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="4"/>
    <path d="M 230 240 L 270 240 L 275 255 L 225 255 Z" fill="#0d47a1"/>
    <!-- 조선 백자에 일본풍·유럽풍 화려한 코발트 블루 및 금채 문양 장식 -->
    <path d="M 235 150 Q 250 170 265 150 Q 250 130 235 150" fill="#1565c0"/>
    <circle cx="250" cy="190" r="12" fill="#d32f2f"/>
    <circle cx="250" cy="190" r="5" fill="#ffd54f"/>
    <!-- 왼편: 네덜란드 무역으로 벌어들인 막대한 양의 은화 보물상자 -->
    <rect x="50" y="150" width="140" height="100" fill="#795548" stroke="#3e2723" stroke-width="6" rx="5"/>
    <rect x="50" y="140" width="140" height="25" fill="#8d6e63" stroke="#3e2723" stroke-width="5" rx="3"/>
    <!-- 쇠 장식 밴드 -->
    <line x1="80" y1="140" x2="80" y2="250" stroke="#212121" stroke-width="6"/>
    <line x1="160" y1="140" x2="160" y2="250" stroke="#212121" stroke-width="6"/>
    <!-- 상자 위로 넘쳐흐르는 은화 동전 (은화 은) -->
    <circle cx="90" cy="130" r="15" fill="#cfd8dc" stroke="#455a64" stroke-width="3"/>
    <circle cx="120" cy="125" r="15" fill="#b0bec5" stroke="#455a64" stroke-width="3"/>
    <circle cx="145" cy="135" r="15" fill="#eceff1" stroke="#455a64" stroke-width="3"/>
    <text x="112" y="130" fill="#263238" font-size="14" font-weight="bold">銀</text>
    <text x="65" y="285" fill="#b71c1c" font-size="16" font-weight="bold">유럽 왕실 수출 막대한 은화 부 획득</text>
    <text x="45" y="40" fill="#1565c0" font-size="20" font-weight="bold">조선 도공이 낳은 도자 경제 기적</text>
  </g>
</svg>
```
