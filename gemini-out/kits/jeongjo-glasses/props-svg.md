# [소품 목록 + 컷아웃 SVG 초안] 정조의 콤플렉스, 안경

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 정조 대모 안경과 안경집 (Joseon Tortoiseshell Glasses & Case)**: 거북 등껍질(대모)로 만든 동그란 뿔테와 수정 렌즈, 화려한 왕실 비단 안경집.
2. **어찰 문집과 돋보기 수정 (Royal Manuscript & Lens)**: 시력이 떨어진 정조가 촛불 아래서 읽던 빽빽한 비밀 어찰 문집과 단안 돋보기.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 정조 대왕의 대모 뿔테 안경과 비단 안경집
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-royal-glasses">
    <!-- 비단 안경집 (배경 소품) -->
    <path d="M 50 180 C 50 120 100 100 130 100 C 160 100 210 120 210 180 C 210 240 160 260 130 260 C 100 260 50 240 50 180 Z" fill="#1565c0" stroke="#0d47a1" stroke-width="8"/>
    <path d="M 80 150 Q 130 130 180 150 Q 130 170 80 150" fill="#64b5f6" stroke="#0d47a1" stroke-width="4"/>
    <!-- 대모 뿔테 안경 (거북 등껍질 문양 테) -->
    <!-- 왼쪽 렌즈 테 -->
    <circle cx="210" cy="150" r="45" fill="#e0f7fa" stroke="#5d4037" stroke-width="12" opacity="0.95"/>
    <circle cx="210" cy="150" r="45" fill="none" stroke="#8d6e63" stroke-width="6" stroke-dasharray="15,5"/>
    <!-- 오른쪽 렌즈 테 -->
    <circle cx="320" cy="150" r="45" fill="#e0f7fa" stroke="#5d4037" stroke-width="12" opacity="0.95"/>
    <circle cx="320" cy="150" r="45" fill="none" stroke="#8d6e63" stroke-width="6" stroke-dasharray="15,5"/>
    <!-- 중앙 미간 연결 테 (콧등 다리) -->
    <path d="M 255 150 Q 265 125 275 150" fill="none" stroke="#5d4037" stroke-width="10" stroke-linecap="round"/>
    <!-- 안경알 수정 반사광 하이라이트 -->
    <line x1="190" y1="130" x2="220" y2="160" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    <line x1="300" y1="130" x2="330" y2="160" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  </g>
</svg>
```

### S2. 어찰 문집과 수정 단안 돋보기
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-manuscript-magnifier">
    <!-- 펼쳐진 상소문 서책 -->
    <path d="M 50 240 L 190 260 L 190 80 L 50 60 Z" fill="#fff9c4" stroke="#5d4037" stroke-width="7" stroke-linejoin="round"/>
    <path d="M 350 240 L 210 260 L 210 80 L 350 60 Z" fill="#fff9c4" stroke="#5d4037" stroke-width="7" stroke-linejoin="round"/>
    <line x1="200" y1="75" x2="200" y2="265" stroke="#3e2723" stroke-width="8" stroke-linecap="round"/>
    <!-- 서책 본문 빽빽한 한자 붓선 요약 -->
    <line x1="80" y1="100" x2="160" y2="110" stroke="#3e2723" stroke-width="5"/>
    <line x1="80" y1="130" x2="160" y2="140" stroke="#3e2723" stroke-width="5"/>
    <line x1="80" y1="160" x2="160" y2="170" stroke="#3e2723" stroke-width="5"/>
    <line x1="240" y1="110" x2="320" y2="100" stroke="#3e2723" stroke-width="5"/>
    <line x1="240" y1="140" x2="320" y2="130" stroke="#3e2723" stroke-width="5"/>
    <line x1="240" y1="170" x2="320" y2="160" stroke="#3e2723" stroke-width="5"/>
    <!-- 수정 돋보기 (확대 렌즈) -->
    <circle cx="260" cy="160" r="50" fill="#e0f7fa" stroke="#3e2723" stroke-width="10" opacity="0.85"/>
    <line x1="295" y1="195" x2="360" y2="260" stroke="#3e2723" stroke-width="16" stroke-linecap="round"/>
    <!-- 돋보기에 비친 확대된 글자 -->
    <path d="M 245 145 L 275 145 M 260 135 L 260 175" stroke="#b71c1c" stroke-width="8" stroke-linecap="round"/>
  </g>
</svg>
```
