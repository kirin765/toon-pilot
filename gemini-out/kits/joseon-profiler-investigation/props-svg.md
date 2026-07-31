# [소품 목록 + 컷아웃 SVG 초안] 조선의 프로파일러 심리 수사 기법과 '흠휼전칙'

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **정조의 형사 수사 지침서 흠휼전칙과 부검 은침 (Heumhyuljeonchik Book & Needle)**: 고문 자백 방지와 심리 수사 규정이 새겨진 흠휼전칙 고서와 과학 검시용 은침.
2. **조선 프로파일러 수사 일지와 곤장 금지 표지판 (Profiler Log & No-Torture Sign)**: 용의자의 진술 모순과 심리를 기록한 한지 수사 일지와 관아의 붉은 곤장 금지 푯말.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 정조의 형사 수사 지침서 '흠휼전칙' 고서와 검시 은침
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-profiler-book">
    <!-- 흠휼전칙 수사 지침 고서 (중앙 왼쪽) -->
    <rect x="50" y="60" width="180" height="200" rx="6" fill="#1a237e" stroke="#000000" stroke-width="6"/>
    <rect x="65" y="80" width="50" height="150" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <text x="80" y="125" fill="#1a237e" font-size="20" font-weight="bold" writing-mode="tb">欽恤則例</text>
    <line x1="140" y1="80" x2="140" y2="230" stroke="#ffd54f" stroke-width="4" stroke-dasharray="8,6"/>
    <line x1="180" y1="80" x2="180" y2="230" stroke="#ffd54f" stroke-width="4" stroke-dasharray="8,6"/>
    <!-- 과학 부검 검시용 은침 및 은가루 도구 (오른편) -->
    <path d="M 220 220 L 350 70" stroke="#cfd8dc" stroke-width="12" stroke-linecap="round"/>
    <path d="M 220 220 L 350 70" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    <!-- 은침 끝의 과학적 화학 반응 묘사 (초록/푸른 반응 빛) -->
    <circle cx="350" cy="70" r="14" fill="#00e676" fill-opacity="0.8" stroke="#00c853" stroke-width="3"/>
    <path d="M 335 55 L 365 85 M 365 55 L 335 85" stroke="#ffffff" stroke-width="3"/>
    <rect x="200" y="210" width="40" height="25" rx="4" fill="#3e2723" stroke="#ffd54f" stroke-width="4" transform="rotate(-45 200 210)"/>
  </g>
</svg>
```

### S2. 조선 프로파일러 심문 일지와 고문/곤장 금지 관아 푯말
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-no-torture">
    <!-- 조선 프로파일러 수사관의 심리 분석 일지 한지 (왼편 아래 가로지름) -->
    <rect x="30" y="140" width="200" height="130" rx="4" fill="#fff9c4" stroke="#5d4037" stroke-width="6" transform="rotate(-6 30 140)"/>
    <!-- '진술 모순 / 심리 분석' 붉은 첨삭 붓글씨 -->
    <text x="50" y="190" fill="#d32f2f" font-size="18" font-weight="bold" transform="rotate(-6 50 190)">陳述矛盾 (모순)</text>
    <path d="M 50 210 L 190 210 M 50 230 L 170 230" stroke="#37474f" stroke-width="4" transform="rotate(-6 50 210)"/>
    <!-- 관아 형장의 '곤장/고문 금지(嚴禁)' 붉은 표지판 (오른편 위로 솟음) -->
    <rect x="230" y="50" width="130" height="120" rx="8" fill="#b71c1c" stroke="#3e2723" stroke-width="6"/>
    <line x1="295" y1="170" x2="295" y2="280" stroke="#4e342e" stroke-width="14" stroke-linecap="round"/>
    <text x="250" y="105" fill="#ffffff" font-size="24" font-weight="bold">拷問嚴禁</text>
    <text x="255" y="140" fill="#ffd54f" font-size="16" font-weight="bold">(고문 금지)</text>
    <!-- 곤장 몽둥이에 부러진 X 표시 (과학·심리 수사 강조) -->
    <path d="M 235 60 L 355 160 M 355 60 L 235 160" stroke="#ffd54f" stroke-width="8" stroke-linecap="round"/>
  </g>
</svg>
```
