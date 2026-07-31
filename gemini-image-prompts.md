# Gemini 이미지 생성 요청 목록 (Antigravity)

우선순위 순서. 각 프롬프트는 그대로 복사해서 넘기면 된다.
결과물 저장 위치: 텍스처 → `assets/textures/`, 레퍼런스 → `assets/refs/` (레퍼런스는 트레이스/고증 참고용 — **영상에 직접 넣지 않는다**).

공통 주의:
- 실물 유물 인서트(해례본·대동여지도류)는 AI 생성 금지 — 진짜 박물관 사진만 사용.
- 레퍼런스는 최종물이 아니다. 최종 소품은 전부 수작업 SVG 컷아웃.

---

## 1. 한지 텍스처 세트 (전 에피소드 공통 배경 오버레이 + 썸네일)

seamless(이어붙임 가능) 여부가 핵심. 4장을 각각 요청.

### 1-1. 크림 한지 (기본 낮 씬)

```
Seamless tileable texture of traditional Korean hanji mulberry paper, warm cream color, subtle visible long fibers and slight mottling, soft even lighting, flat top-down scan, no objects, no shadows, no text, no wrinkles, uniform tone suitable as a subtle background overlay. 2048x2048, photorealistic scan quality.
```

### 1-2. 황변 고지(古紙) 톤 (회상·사료·옛 문서 씬)

```
Seamless tileable texture of aged antique Korean hanji paper, yellowed ivory-tan color with faint age spots and uneven toning at low contrast, visible mulberry fibers, flat top-down scan, no objects, no text, no tears, no burned edges, gentle and subtle so illustrations remain readable on top. 2048x2048.
```

### 1-3. 남색 야간 톤 (밤하늘·밤 씬)

```
Seamless tileable texture of deep indigo dyed traditional Korean hanji paper, dark navy blue with subtle lighter fiber strands visible, flat top-down scan, even tone, no objects, no stars, no text, low contrast so it works as a dark night-scene background layer. 2048x2048.
```

### 1-4. 판지/골판지 톤 (컷아웃 소품용 두꺼운 종이 느낌)

```
Seamless tileable texture of thick craft cardboard paper, light kraft brown, subtle fiber grain and slight speckle, flat top-down scan, matte, no corrugation lines, no objects, no text, low contrast. 2048x2048.
```

> 사용 시 주의: 씬 위에 저투명(10~20%)으로만 깐다. 진하게 깔면 블라인드 판독 QA에 노이즈.

---

## 2. 코끼리 컷아웃 레퍼런스 (후보 EP: 조선의 코끼리 1411 — 신규 rig 트레이스용)

기존 동물 문법(말 sp6: 측면 실루엣+시그니처 1개)과 맞추기 위해 플랫 측면 컷아웃으로 요청.

### 2-1. 측면 기본 포즈

```
Flat paper cutout style illustration of an Asian elephant in full side view, facing left, simple bold silhouette with long curved trunk hanging down and one large rounded ear, solid muted gray color with minimal darker gray shading shapes, thick clean outlines, construction-paper collage aesthetic like South Park, plain white background, no texture, no gradient, whole body visible including all four legs and tail.
```

### 2-2. 코 든 포즈 (변주)

```
Flat paper cutout style illustration of an Asian elephant in full side view, facing left, trunk raised upward in an S-curve, one large rounded ear, simple bold silhouette, solid muted gray with minimal flat shading, thick clean outlines, construction-paper collage aesthetic like South Park, plain white background, no texture, whole body visible.
```

> 트레이스 시 시그니처: 긴 코 + 큰 귀. 벤치 1회 돌려 haiku 블라인드 "코끼리" 판독 확인 후 등재.

---

## 3. 외국인 복식 고증 레퍼런스 (스프린트 3 후보 — 왜군·명 사신 rig)

카탈로그 ❌ 항목. 등장 시 고증 오독이 최대 리스크라 **정확한 복식 레퍼런스**를 먼저 확보해 두는 용도. 이건 컷아웃이 아니라 고증 일러스트로 요청.

### 3-1. 임진왜란 왜군 아시가루(足軽) 병졸

```
Historically accurate reference illustration of a Japanese ashigaru foot soldier from the 1590s Imo-Japanese War (Sengoku period), full body side view and front view on one sheet, wearing a simple conical jingasa hat, lamellar do cuirass over plain clothing, carrying an arquebus matchlock gun, muted colors, clean educational illustration style like a museum reference plate, plain background, labeled silhouette clarity, no fantasy elements, no anime style.
```

### 3-2. 왜군 무장(사무라이 지휘관)

```
Historically accurate reference illustration of a Sengoku period Japanese samurai commander circa 1592, full body side view, wearing kabuto helmet with crescent maedate crest, full tosei-gusoku armor with sode shoulder guards, katana at waist, muted realistic colors, clean museum reference plate style, plain background, no fantasy elements, no anime style.
```

### 3-3. 명나라 사신 (문관 관복)

```
Historically accurate reference illustration of a Ming dynasty Chinese civil official envoy in formal court dress, full body front view and side view on one sheet, wearing black wushamao hat with rounded side wings, red round-collar robe with rank badge (buzi) on chest, black boots, holding a ceremonial tablet, clean museum reference plate style, plain background, no fantasy elements.
```

> ⚠ 조선 사모·단령과 실루엣이 비슷해 오독 리스크가 카탈로그에 명기돼 있음. 트레이스 시 구분 시그니처(명: 오사모 날개가 아래로 처짐/둥긂, 조선: 매미날개 수평)를 별도 검수할 것.

---

## 4. 수라상 레퍼런스 (카탈로그 ❌ — 궁중 식사 씬 대비)

```
Historically accurate reference illustration of a Joseon dynasty Korean royal dining table (surasang), viewed from a slightly elevated three-quarter angle, low round lacquered table with many small white porcelain and brass bowls with lids arranged in a formal pattern, rice, soup and side dishes, muted realistic colors, clean museum reference plate style, plain background, no people, no fantasy elements.
```

> 트레이스 포인트: 다리 낮은 원반 + 뚜껑 있는 유기/백자 그릇 다수. 소반(sp2)과의 구분 시그니처 = 그릇 개수·원형 상판.

---

## 5. 계곡·폭포 배경 레퍼런스 (배경 레이어 ❌ 잔여분)

```
Flat paper cutout style landscape of a Korean mountain valley with a tall waterfall, layered construction-paper collage aesthetic, two-tone rocks in muted gray-blue, simple white waterfall band with three stepped cascades, pine trees on cliff edges, flat shapes with thick clean edges, no gradients, no texture, no people, plain composition suitable as an animation background, 16:9.
```

> 폭포는 흰 세로 밴드+단(段) 구분이 시그니처. 결과물이 좋아도 직접 쓰지 말고 SVG로 재작화.

---

## 6. 상복(喪服) 일습 레퍼런스 (카탈로그 잔여 — 굴건만 보유)

```
Historically accurate reference illustration of Joseon dynasty Korean mourning dress (sangbok), full body front and side view of a male mourner, coarse undyed hemp robe, hemp headband and gulgeon mourning cap, hemp waist rope belt, wooden staff, muted beige-tan colors, clean museum reference plate style, plain background, no fantasy elements.
```

> 기존 굴건(militia `hat:"gulgeon"`)에 삼베 도포+요질(허리 새끼줄)+상장(지팡이)을 더하는 확장용.
