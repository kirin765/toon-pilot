# PROJECT-NOTES — 삼십초 역사 (toon-pilot)

2026-07-04 세션 핸드오프. 사우스파크풍 종이 컷아웃 애니메이션을 코드로 빠르게 찍어내는 파일럿.
목표 채널: 유튜브 역사/영화/시사 30초~ 요약 (오리지널 캐릭터, South Park 디자인 복제 금지).

## 완성물

- `renders/imjin-30s-pilot.mp4` — 35.5s, 1920×1080, h264+aac. "임진왜란 편" 파일럿 완성본.
- `renders/imjin-30s-pilot-v2.mp4` — 동일 에피소드, 파츠 일러스트 업그레이드 버전 (2026-07-05).
- 스타일 스펙은 `design.md` (팔레트·폰트·모션 규칙·금지사항).

## 아키텍처 (3-레이어 분리가 핵심)

| 파일 | 역할 |
| --- | --- |
| `characters.js` | **rig 팩토리.** `makeCharacter({variant, skin, shirt, pants})` 하나로 모든 캐릭터 생성. variant = host/king/admiral/militia (모자·머리만 교체). `EXPRESSIONS` 5종(neutral/happy/proud/shocked/angry) = 눈·입·눈썹 가시성/변형 조합. `POSES` 4종(down/point/raised/shrug) = 팔 회전각. |
| `scenes.js` | **디렉터 장면 JSON.** 장면별 start/dur/talker/chars(위치·표정·포즈)/changes(중간 연출 변경). LLM이 생성하는 레이어가 여기 + 대본. `TRANSITION=0.45` 겹침 포함. |
| `captions-data.js` | whisper 타이밍 + 원문 보정된 `WORDS`(립싱크 구동) & `CAPTION_GROUPS`(자막, hi=강조어). |
| `index.html` | 조립. 장면 DOM/배경, 캐릭터 마운트, 타임라인 빌드(입 플랩·깜빡임·바운스·전환·자막·스탬프). |

## 에피소드 제작 파이프라인

```bash
# 1. 대본 (자연 발화 ~2.5w/s, 숫자는 한글 표기 — TTS가 읽는 대로)
vim script.txt
# 2. 한국어 TTS — 내장 Kokoro는 한국어 미지원, edge-tts 사용
uvx edge-tts --voice ko-KR-InJoonNeural --rate=+6% --file script.txt --write-media narration.mp3
# 3. 단어 타임스탬프 (.en 모델 금지)
npx hyperframes transcribe narration.mp3 --model small --language ko
# 4. transcript.json 타이밍으로 captions-data.js(WORDS/GROUPS) + scenes.js(장면 경계=문장 경계) 갱신
#    index.html의 각 씬 data-start/duration, audio data-duration, root data-duration도 동기화
# 5. 검증 → 렌더
npm run check
npx hyperframes render --quality standard --output renders/<name>.mp4
# 프레임 눈검증: ffmpeg -ss <t> -i renders/x.mp4 -frames:v 1 f.png
```

첫 편 기준 렌더 ~34초. 대본→완성 몇 분 수준.

## 세션에서 밟은 지뢰 (재발 방지)

1. **SVG 팔 회전 피벗**: `<g>`에 CSS `transform-origin: Npx Npx` 쓰면 피벗이 틀어져 팔이 몸에서 분리됨(스케일된 svg에서 단위 해석 문제). 반드시 GSAP `svgOrigin` 사용 — arm-l `"60 152"`, arm-r `"140 152"` (초기 포즈 `gsap.set` + 변경 `tl.to` 모두).
2. **inspector는 invisible도 측정**: `tl.fromTo`의 immediateRender가 등장 전 pre-state(거대 scale, opacity 0)를 만들고, inspector는 `visibility:hidden`이어도 잡음. 스탬프류 슬램은 **scale 0→1 back.out** + CSS `visibility:hidden` + 등장 시점 `tl.set visible`로.
3. **자식 오버플로가 부모 씬에 귀속됨**: 캔버스보다 큰 장식(드리프트용 2400px 파도)은 씬의 scrollWidth를 부풀려 `clipped_text` 에러 유발. `data-layout-ignore`를 자식에 달아도 소용없음 — **overflow:hidden 래퍼**(`.waves-clip`, data-layout-ignore) 안에 넣어야 함. 오프스크린 진입(거북선)도 동일 래퍼로 해결.
4. **잔여 inspect 경고 5건은 노이즈**: #s3 풀캔버스 rect에 스탬프 텍스트가 귀속돼 brand-badge/자막과 "겹침"으로 나옴. 렌더 프레임으로 실겹침 없음 확인(2026-07-04). 경고 카운트가 이 기준선에서 늘면 그때만 조사.
5. **transcript.json 한글이 깨져 보이는 것**은 터미널 출력 인코딩 문제일 수 있음 — 원문은 script.txt 기준으로 captions-data.js에 보정해 둠. whisper가 단어를 합치기도 함(예: "이십 일"→"20일") — 단어 수 대조로 매핑.
6. **장면 전환은 트랙 교대**: same-track 클립은 겹칠 수 없으므로 씬을 track 0/1 교대 배치 + 0.45s 겹침 + z-index 상승(#s1 10 → #s5 50, overlay 100). 진입 씬의 `.stage`(배경 포함 풀블리드)를 push/iris/blur로 덮어씌움. 퇴장 애니메이션 금지(마지막 씬 제외).
7. **preview 서버**: 프로젝트 루트가 아닌 세션에서는 `.claude/launch.json`의 `toon-pilot-preview`(port 3013) 사용. preview_eval로 `window.__timelines.main.seek(t)` 후 DOM 검사 가능 (overlay가 최상단이므로 `elementsFromPoint` 복수형).

## 룩 이슈 (2026-07-05 사용자 피드백 → 같은 날 전부 수정, v3 렌더 반영)

전 항목 수정 후 블라인드 readability 테스트 통과(무맥락 에이전트 4개가 지도·한옥·갓·갑주·거북선을 high confidence로 명명). 수정 요지: 지도=실제 해안선 트레이스, 갓 챙 rx68>머리 r58, 익선관 날개=기운 매미날개 잎, 전립 챙 rx62 + 수염 말굽형, 호스트=네이비 칼라+고대비 지퍼+시보리, 한옥=기단·기둥·창살문·처마반전·용마루·기와골.

**⚠ 미해결(모자/갓) — 2026-07-08 부분 해결.** EP.1(장영실) 블라인드 검수에서 **전립(admiral)이 청 만주족 관모로 오독**됨(2/2 검수자, "돔+금구슬 정자+붉은 상모" = Qing 시그니처)이 확인돼 `characters.js` 수정: 전립=넓은 평챙+낮은 펠트 크라운+작은 증자(붉은술·금구슬 제거), 갓(militia)=높은 원통 크라운. 재검수서 "조선 흑립/전립(KOREAN)"으로 판독 = 청 오독 해소. **2026-07-08 후속: 참고이미지 3종 문제 재작화** — ① 익선관 소각(뿔)이 '토끼 귀'로 오독(둥근 만화 머리에선 위로 솟은 뿔=무조건 귀) → **뿔 제거, 머리 덮는 둥근 관+뒤 높은 이중단**으로 실루엣만 암시(세종 식별=곤룡포 담당) ② 갓이 서양 실크햇으로 오독(크라운 원통·과높음) → **낮은 절두원뿔 대우+넓은 양태** ③ admiral 수염이 검은 덩어리 → **얇은 밴드형·밝은 톤**. **교훈: 위로 솟는 모자 장식(뿔·깃)은 원형 캐릭터 머리에서 귀로 읽힌다 — 실루엣은 머리를 덮는 매스로 표현, 돌기는 피할 것.** 잔여 폴리시(비차단): 세종 관이 다소 단조(중절모 느낌), 거북선 용두 방향, s3 이순신 수면 위.

### 원래 이슈 표 (기록용)

| # | 증상 | 근본 원인 |
| --- | --- | --- |
| 1 | s2 한반도 지도가 뭉게구름처럼 보임 | index.html 지도 패스가 볼록 Q커브만의 프리핸드 블롭. 실제 해안선 특징(오목한 만, 서해안 요철, 남해 다도해)이 없음 — 실루엣을 실제 지도에서 단순화 트레이스해야 함 |
| 2 | 모자-머리 크기 불일치: 익선관 날개가 귀/뿔처럼 읽힘(s2 왕), 갓이 "이마 스티커"처럼 보임(s4) | 챙·관모가 머리 원(r58)보다 좁게 그려짐. **규칙: 챙 있는 모자는 머리 폭보다 넓게(갓 챙 rx≥66), 모자 하단이 머리 실루엣을 확실히 감싸고 겹치게.** 익선관 날개는 옆이 아니라 뒤통수 위쪽에 세워 배치 |
| 3 | 전립·턱수염 정합 어긋남 (s3 이순신) | 모자 챙 라인·수염 시작선이 얼굴 랜드마크(눈·볼 라인)와 독립적으로 좌표 지정됨 — 얼굴 기준선에서 파생하도록 |
| 4 | 호스트 의상이 뭘 입은 건지 안 읽힘 | 지퍼·포켓이 shirt색 20% 셰이드라 대비 부족, 칼라·소매 등 "재킷 문법" 셰이프 부재 |
| 5 | s1 기와집이 거북선으로 오인됨 | 지붕 곡면+어두운 색 덩어리가 몸체와 분리돼 읽힘. 처마 끝 반전, 기와 골 라인, 주춧돌 등 "건물 문법" 디테일 필요 |

**재발 방지 프로세스 (아트 작업 시 필수):**
1. **캐릭터 시트 검수** — 파츠 수정 후 풀프레임 축소본이 아니라 대형 스케일(캐릭터 1개 ≥600px) 스크린샷으로 변형/정합 확인. 임시 charsheet 페이지를 만들어 variant × 표정 × 포즈 그리드로 볼 것.
2. **블라인드 readability 테스트** — 렌더 프레임을 컨텍스트 없는 서브에이전트에 보여주고 "이 화면의 오브젝트를 명명하라"만 시킴. 의도한 이름(한반도, 기와집, 갓)과 다르게 답하면 불합격. 작화자가 자기 그림을 검증하면 의도를 알기에 오독을 못 잡는다 — 이번 이슈 전부가 이 케이스.
3. **실물 기반 오브젝트는 레퍼런스 트레이스** — 지도·건물·기물처럼 "정답 실루엣"이 있는 것은 프리핸드 금지, 실제 형태를 단순화해서 옮길 것.

## 다음 단계 (합의된 방향)

1. ~~**파츠 일러스트 교체**~~ ✅ 2026-07-05 완료 — rig 계약(클래스·피벗·표정/포즈) 유지한 채 characters.js만 교체: `shade()` 헬퍼(파라미터 색에서 2톤 플랫 셰이딩 파생), 유기 실루엣, 의상 고증(곤룡포 흉배·옥대, 두정갑 징·갑찰·전립 상모, 갓·동정·옷고름, 호스트 재킷). 얼굴 파츠(눈·입·눈썹)는 의도적으로 무수정.
2. **BGM/SFX** — hyperframes-media / media-use 스킬 (스탬프 슬램 효과음, 잔잔한 국악풍 BGM).
3. ~~**원커맨드 에피소드 스킬**~~ ✅ 2026-07-08 구현 — `.claude/skills/episode/SKILL.md` (주제 → 사료 리서치 → 팩트체크 게이트 → 대본 → TTS 귀검증 → `bin/sync_timing.py` 타이밍 동기화 → 씬 연출 → 렌더 → 블라인드 readability+고증 이중 검수 → `episodes/<slug>/` 아카이브+업로드 메타). 악플 3종(사실 오류·어눌함·고증)이 각각 게이트로 매핑됨. **✅ EP.1 장영실 완성**: `renders/janga-yeongsil.mp4`(1080×1920, 38.3s), 아카이브 `episodes/janga-yeongsil/`. 실전에서 게이트 작동 실증: ① 팩트체크가 측우기=문종(장영실 아님)을 대본에서 제외 ② 블라인드 검수가 전립 청-오독을 잡아 rig 수정 유발. **세로 재배치 규칙 실검증: 캐릭터 진입은 x슬라이드 금지→y슬라이드**(좁은 캔버스서 좌우 오버플로가 clipped_text 에러 유발). 다음: EP.2 주제 선정(episodes/janga-yeongsil/meta.md 후보 참조).
4. 유의: 반복 재사용 애니 + AI 내레이션 조합은 YouTube 대량생산 콘텐츠 정책 심사 대상이 될 수 있음 — 대본의 관점/유머가 차별화 포인트.

## 세션 이력 요약 (2026-07-04)

리서치(기성 툴 조사: rhubarb-lip-sync, PyToon, synctoon, Adobe Character Animator 등) → "JSON 장면 스크립트 + hyperframes 렌더" 자체 파이프라인 결정 → 파일럿 구현·검증·렌더까지 한 세션에 완료. 립싱크는 rhubarb 대신 whisper 단어 타이밍 기반 0.1s 입 플랩(사우스파크식)으로 단순화 — 결과 충분.
