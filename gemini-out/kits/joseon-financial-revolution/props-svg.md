# [소품 목록 + 컷아웃 SVG 초안] 조선의 금융 혁명, 객주와 사금융 어음(어음/환전) 시스템

## 1. 필요 소품 목록 (props-catalog.md 중복 제외)
1. **조선 객주의 어음 종이 증서와 환전 송금 어험 (Joseon Promissory Note Eoeum)**: 거액 결제를 위해 발행한 한지 약속어음 증서와 상인 붉은 인장 도장.
2. **개성상인의 복식부기 장부와 주판(수판) (Double-entry Ledger & Abacus)**: 단 한 푼도 틀리지 않게 계산한 송도 사개 치부법 복식부기 장부와 목제 주판.

---

## 2. 사우스파크풍 컷아웃 SVG 초안

### S1. 조선 객주가 발행한 종기 약속어음(어험)과 붉은 신용 도장
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-eoeum-note">
    <!-- 조선의 어음 종이 증서 펼쳐진 한지 (중앙) -->
    <rect x="50" y="50" width="280" height="200" rx="4" fill="#fff8e1" stroke="#5d4037" stroke-width="6"/>
    <!-- 한지 위쪽 '於音(어음)' 한자 및 결제 금액 표기 -->
    <text x="160" y="100" fill="#1a237e" font-size="28" font-weight="bold">於音 (어음)</text>
    <text x="140" y="140" fill="#3e2723" font-size="20" font-weight="bold">壹萬兩 (일만 냥)</text>
    <!-- 신용 거래를 상징하는 붉은색 객주 상인 옥새 도장 쾅! -->
    <circle cx="230" cy="180" r="35" fill="#b71c1c" fill-opacity="0.85" stroke="#7f0000" stroke-width="4"/>
    <text x="207" y="187" fill="#ffffff" font-size="18" font-weight="bold">客主信用</text>
    <!-- 장부 기재를 위한 세로 줄무늬 장식 -->
    <line x1="80" y1="50" x2="80" y2="250" stroke="#d7ccc8" stroke-width="3"/>
    <line x1="300" y1="50" x2="300" y2="250" stroke="#d7ccc8" stroke-width="3"/>
    <!-- 수표처럼 위조를 방지한 좌측 첨인 절취선 -->
    <path d="M 50 120 Q 60 125 50 130 Q 60 135 50 140" stroke="#3e2723" stroke-width="3" fill="none"/>
  </g>
</svg>
```

### S2. 개성상인의 복식부기 치부책 장부와 계산기 주판(수판)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <g id="prop-ledger-abacus">
    <!-- 송도 사개 치부법 복식부기 장부 (왼편 뒤쪽) -->
    <rect x="30" y="60" width="180" height="200" rx="6" fill="#1b5e20" stroke="#000000" stroke-width="6"/>
    <rect x="45" y="80" width="50" height="150" fill="#ffffff" stroke="#000000" stroke-width="3"/>
    <text x="60" y="125" fill="#1b5e20" font-size="20" font-weight="bold" writing-mode="tb">松都治簿</text>
    <!-- 붉은색 결산 첨삭과 복식부기 표기 -->
    <text x="120" y="150" fill="#ffd54f" font-size="18" font-weight="bold">四介法(복식)</text>
    <!-- 조선 상인의 계산기 목제 주판(수판) (오른편 앞쪽 가로지름) -->
    <rect x="180" y="150" width="200" height="110" rx="6" fill="#6d4c41" stroke="#3e2723" stroke-width="6"/>
    <!-- 주판 가로대 및 가름대 -->
    <line x1="180" y1="185" x2="380" y2="185" stroke="#3e2723" stroke-width="6"/>
    <!-- 주판알 꼬챙이 세로선 -->
    <line x1="210" y1="150" x2="210" y2="260" stroke="#4e342e" stroke-width="4"/>
    <line x1="250" y1="150" x2="250" y2="260" stroke="#4e342e" stroke-width="4"/>
    <line x1="290" y1="150" x2="290" y2="260" stroke="#4e342e" stroke-width="4"/>
    <line x1="330" y1="150" x2="330" y2="260" stroke="#4e342e" stroke-width="4"/>
    <!-- 목재 주판알 (위 1알, 아래 4알 중 일부 계산 묘사) -->
    <circle cx="210" cy="168" r="8" fill="#ffb300" stroke="#3e2723" stroke-width="2"/>
    <circle cx="250" cy="205" r="8" fill="#ffb300" stroke="#3e2723" stroke-width="2"/>
    <circle cx="250" cy="225" r="8" fill="#ffb300" stroke="#3e2723" stroke-width="2"/>
    <circle cx="290" cy="168" r="8" fill="#ffb300" stroke="#3e2723" stroke-width="2"/>
    <circle cx="330" cy="245" r="8" fill="#ffb300" stroke="#3e2723" stroke-width="2"/>
  </g>
</svg>
```
