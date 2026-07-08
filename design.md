# design.md — 삼십초 역사 (toon-pilot)

South Park풍 종이 컷아웃 히스토리 채널. 원작 모방이 아닌 오리지널 캐릭터 — 큰 머리, 작은 몸, 벙어리장갑 손, 플랫 컬러, 외곽선 없음.

## Palette (construction paper)

| Role | Hex |
| --- | --- |
| Sky / bg base | `#8ec9e8` |
| Paper cream (cards, captions bg) | `#f6efe3` |
| Grass green | `#7db95c` |
| Deep navy (밤/바다 장면, 텍스트) | `#1f2d45` |
| Accent red (타이틀 슬램, 강조) | `#d94f37` |
| Accent gold (왕/승리) | `#e8b74a` |
| Sea blue | `#3a7ca5` |
| Skin | `#f2c99b` |
| Ink (본문 텍스트) | `#26221c` |

## Typography

- **Display / 타이틀 / 캡션 강조**: Black Han Sans (900급 한글 디스플레이) — fonts/BlackHanSans.woff2
- **본문 / 캡션 / 라벨**: Jua (둥근 한글, 만화 톤) — fonts/Jua.woff2
- 캡션 56-72px, 타이틀 90-150px, 라벨 20-26px

## Motion

- 컷아웃 인형극 느낌: 요소가 "종이처럼" 툭툭 등장 — back.out, steps() 느낌의 빠른 등퇴장
- 캐릭터 idle: 위아래 2-4px 바운스, 눈 깜빡임(유한 반복)
- 전환: push slide(주) + circle iris(히어로 등장 액센트). 셰이더 없음.

## What NOT to do

- 그라디언트 배경 금지 — 플랫 컬러 + 종이 그레인만
- 외곽선/스트로크 금지 (컷아웃 스타일)
- 실사 이미지, 이모지 금지
- South Park 실제 캐릭터 디자인 복제 금지
