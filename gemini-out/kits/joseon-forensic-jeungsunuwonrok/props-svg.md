# [소품 목록 + 컷아웃 SVG 초안] 조선의 프로파일러와 과학 수사 2탄, 조선 후기 법의학 비결서 『증수무원록』과 은비녀·초산 검시법

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **증수무원록 법의학 비결서 책과 독살 검시 은비녀(은채) (Jeungsumuwonrok Book & Silver Hairpin)**: 영조 시대 구윤명이 편찬한 실전 검시 비결서 증수무원록 서책과 흑색 화학 반응을 검사하는 긴 은비녀.
2. **혈흔 탐지용 고초(식초) 항아리와 파백 술병 (Vinegar Jar & Alcohol Bottle)**: 은폐된 타살 상흔과 방바닥 핏자국을 태양광 아래에서 뚜렷이 떠오르게 하는 고농도 식초 단지와 파 뿌리 술병.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 법의학 비결서 『증수무원록』 서책과 화학 변색 은비녀(은채)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-jeungsumuwonrok">
    <!-- 조선 법의학 비결서 증수무원록 파란 표지 책 (왼편 중앙) -->
    <rect x="50" y="60" width="170" height="200" rx="6" fill="#1565c0" stroke="#0d47a1" stroke-width="6"/>
    <rect x="65" y="80" width="45" height="150" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <text x="80" y="125" fill="#0d47a1" font-size="20" font-weight="bold" writing-mode="tb">增修無寃</text>
    <!-- 제본 제본선 붉은 끈 표기 -->
    <circle cx="60" cy="90" r="4" fill="#b71c1c"/>
    <circle cx="60" cy="160" r="4" fill="#b71c1c"/>
    <circle cx="60" cy="230" r="4" fill="#b71c1c"/>
    <!-- 독살 탐지용 긴 은비녀 은채 (오른편 위에서 가로지름) -->
    <rect x="180" y="140" width="180" height="16" rx="8" fill="#e0e0e0" stroke="#424242" stroke-width="4" transform="rotate(-15 180 140)"/>
    <circle cx="360" cy="92" r="14" fill="#eeeeee" stroke="#424242" stroke-width="4"/>
    <!-- 은비녀 끝부분에 검게 나타난 독성 화학 변색 반응 (검은색/보라색) -->
    <path d="M 180 140 L 220 129 L 223 145 L 183 156 Z" fill="#311b92" stroke="#1a237e" stroke-width="2"/>
    <text x="210" y="180" fill="#d32f2f" font-size="16" font-weight="bold">銀釵 반응(독살)</text>
  </g>
</svg>
```

### S2. 혈흔 광학 검시용 고초(식초) 항아리와 파백(파총백) 술병
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-vinegar-reagent">
    <!-- 고농도 식초(고초)를 담은 검은 항아리 (왼편 아래쪽) -->
    <path d="M 60 160 C 60 250 180 250 180 160 C 180 120 60 120 60 160 Z" fill="#37474f" stroke="#263238" stroke-width="6"/>
    <rect x="95" y="100" width="50" height="30" rx="4" fill="#546e7a" stroke="#263238" stroke-width="4"/>
    <text x="98" y="200" fill="#fff59d" font-size="18" font-weight="bold">苦醋(식초)</text>
    <!-- 파총백(파 뿌리 술) 담은 흰 백자 주병 (오른편 중앙) -->
    <path d="M 240 160 Q 240 250 320 250 Q 400 250 400 160 Q 380 110 320 100 Q 260 110 240 160 Z" fill="#f5f5f5" stroke="#455a64" stroke-width="6"/>
    <rect x="305" y="60" width="30" height="45" fill="#eeeeee" stroke="#455a64" stroke-width="5"/>
    <text x="295" y="195" fill="#1b5e20" font-size="18" font-weight="bold">蔥白(술)</text>
    <!-- 바닥에 뿌려져 햇빛에 형광처럼 빛나는 숨겨진 핏자국(혈흔) 반응 묘사 -->
    <ellipse cx="230" cy="265" rx="80" ry="18" fill="#ff1744" fill-opacity="0.8" stroke="#b71c1c" stroke-width="3"/>
    <text x="180" y="270" fill="#ffffff" font-size="14" font-weight="bold">태양광 혈흔 탐지</text>
    <path d="M 230 265 Q 240 240 250 265" stroke="#ffff00" stroke-width="4" fill="none"/>
  </g>
</svg>
```
