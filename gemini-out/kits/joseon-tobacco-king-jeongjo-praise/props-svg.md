# [소품 목록 + 컷아웃 SVG 초안] 왕 앞에서 피우면 사형이었던 담배와 온 국민 흡연을 권장한 조선 정조 임금의 담배 찬양 기서

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **정조 임금 비취 장죽 담뱃대와 홍재전서 남령초책 (King Jeongjo Long Pipe & Essay)**: 비취 옥으로 장식된 왕실 전용 길다란 장죽 담뱃대에서 피어오르는 하얀 담배 연기와, 담배를 신초(神草)라 찬양한 정조의 저서 『홍재전서』 남령초책 책문.
2. **광해군 앞 맞담배 사형선고 호통과 곰방대 숨기는 신하 (Gwanghaegun Wrath & Hiding Pipe)**: 왕 앞에서 담배 연기를 뿜었다가 벼락같은 호통과 사형 위기에 처해 깜짝 놀라 짧은 곰방대를 등 뒤로 숨기는 떨고 있는 조선 신하.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 정조 임금의 길다란 비취 장죽 담뱃대와 담배를 신초라 찬양한 책문
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-jeongjo-pipe-essay">
    <!-- 배경: 정조 임금의 서책 홍재전서 남령초책 (남령초) -->
    <rect x="80" y="60" width="240" height="180" fill="#fffde7" stroke="#8d6e63" stroke-width="6" rx="5"/>
    <rect x="100" y="80" width="200" height="140" fill="#ffffff" stroke="#d7ccc8" stroke-width="2"/>
    <text x="140" y="130" fill="#3e2723" font-size="28" font-weight="bold" font-family="serif">南령草策</text>
    <text x="120" y="180" fill="#1b5e20" font-size="20" font-weight="bold">담배는 마음 씻는 만물 신초 (神草)</text>
    <!-- 중앙 가로지르는 왕실 고급 비취 장죽 (긴 담뱃대) -->
    <path d="M 40 220 L 320 220" stroke="#8d6e63" stroke-width="12" stroke-linecap="round"/>
    <!-- 물부리 (입에 무는 옥 비취 마구리) -->
    <rect x="30" y="213" width="35" height="14" fill="#00838f" stroke="#004d40" stroke-width="3" rx="4"/>
    <!-- 담배통 (구리 담뱃통) -->
    <rect x="320" y="200" width="40" height="30" fill="#ffd54f" stroke="#f57c00" stroke-width="4" rx="5"/>
    <!-- 담배통에서 모락모락 피어오르는 하얀 연기 구름 -->
    <circle cx="350" cy="170" r="20" fill="#f5f5f5" stroke="#cfd8dc" stroke-width="3" opacity="0.9"/>
    <circle cx="365" cy="140" r="25" fill="#f5f5f5" stroke="#cfd8dc" stroke-width="3" opacity="0.8"/>
    <circle cx="340" cy="110" r="30" fill="#f5f5f5" stroke="#cfd8dc" stroke-width="3" opacity="0.7"/>
    <text x="60" y="280" fill="#d32f2f" font-size="16" font-weight="bold">정조 임금의 온 국민 남녀노소 흡연 권장</text>
  </g>
</svg>
```

### S2. 광해군 앞 맞담배 불경죄 사형 위기에 등 뒤로 곰방대 숨기는 신하
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-gwanghaegun-hiding-pipe">
    <!-- 왼편: 왕 앞 맞담배로 분노한 광해군의 호통 번개 스파크 -->
    <polygon points="40,80 80,95 60,115" fill="#ff6d00"/>
    <polygon points="150,50 170,80 140,70" fill="#ff6d00"/>
    <path d="M 50 60 Q 100 40 130 90" stroke="#d32f2f" stroke-width="6" fill="none"/>
    <text x="40" y="140" fill="#d32f2f" font-size="22" font-weight="bold">어전 맞담배는 사형!</text>
    <!-- 오른편: 깜짝 놀라 땀 흘리며 곰방대 숨기는 조선 관리 상반신 -->
    <circle cx="270" cy="130" r="45" fill="#ffcc80" stroke="#5d4037" stroke-width="5"/>
    <!-- 관리 사모 및 당황한 식은땀 -->
    <path d="M 230 90 L 310 90 L 300 50 L 240 50 Z" fill="#212121"/>
    <circle cx="220" cy="120" r="6" fill="#00b0ff"/>
    <circle cx="320" cy="135" r="8" fill="#00b0ff"/>
    <ellipse cx="255" cy="125" rx="6" ry="8" fill="#5d4037"/>
    <ellipse cx="285" cy="125" rx="6" ry="8" fill="#5d4037"/>
    <path d="M 260 155 Q 270 145 280 155" stroke="#5d4037" stroke-width="4" fill="none"/>
    <rect x="220" y="175" width="100" height="105" fill="#1565c0" stroke="#0d47a1" stroke-width="5" rx="10"/>
    <!-- 등 뒤로 감춘 짧은 곰방대 (담뱃대) 및 연기 -->
    <line x1="320" y1="200" x2="370" y2="230" stroke="#8d6e63" stroke-width="8" stroke-linecap="round"/>
    <rect x="365" y="225" width="20" height="15" fill="#ffd54f" stroke="#f57c00" stroke-width="2"/>
    <circle cx="380" cy="210" r="10" fill="#eceff1"/>
    <text x="80" y="285" fill="#212121" font-size="16" font-weight="bold">윗사람 앞에서 담뱃대 숨기는 예법 시작</text>
  </g>
</svg>
```
