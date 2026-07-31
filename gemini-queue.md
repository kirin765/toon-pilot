# Gemini 자율 루프 작업 큐 (Antigravity — 5h 한도까지 연속 소모용)

## 마스터 루프 프롬프트 (Antigravity에 이것 하나만 붙여넣기)

```
이 워크스페이스의 gemini-queue.md에서 "작업 큐 R5" 섹션을 위에서부터 순서대로 처리하라. ([x] 표시된 줄과 R1~R4 섹션은 건너뛴다.)

규칙:
1. 태스크 하나를 끝낼 때마다 결과를 지정된 위치에 파일로 저장하라 (기본 규칙: gemini-out/README.md). 채팅에는 파일명만 남겨라.
2. 저장 후 사용자에게 묻지 말고 즉시 다음 태스크로 넘어가라. 확인 요청 금지.
3. 팩트체크·검증류는 반드시 구글 검색으로 근거를 확인하고 출처 URL을 남겨라. 실록 인용은 기사 날짜(왕·년·월·일)까지 특정하라.
4. 처리한 태스크는 gemini-queue.md의 해당 줄 앞에 [x]를 표기하라.
5. 큐를 모두 소진하면 "반복 생산 규칙 v3" 섹션을 따르라. 스스로 새 유형의 작업을 발명하는 것은 금지다.
6. 절대 금지 (수확 체감 한계 도달): 신규 제작 준비 키트 생산, 신규 후보 발굴, 신규 언어 자막, 훅 리라이트 세트. gemini-out/kits/에 새 폴더를 만들지 마라.
7. 사용량 한도에 도달하거나 반복 규칙 v3가 소진될 때까지 멈추지 마라.
```

## 작업 큐 R5 (위에서부터 순서대로) — 생산 중단, 검증·선별 라운드

**배경**: R4에서 제작 준비 키트가 71개 쌓였다(gemini-out/kits/). 주 1편 기준 1년치가 넘는다. 이번 라운드는 **새 키트를 만들지 않는다**. 71개를 감사→선별→심층 검증→제작 순서 확정하는 깔때기다. 각 키트의 factcheck.md는 대본을 쓴 모델이 직접 쓴 셀프 검증이라 독립 재검증이 필요하다.

- [x] R5-1. **키트 감사**: gemini-out/kits/의 71개 폴더를 전수 점검하라. ① 5종 파일(factcheck/scripts-3an/props-svg/packaging-5an/sim-defense) 완비 여부 ② 이미 제작된 편(episodes/의 22개 슬러그: chakhogapsa, cheugugi, gansong, gwanghaegun, hangeul, hwarang, janga-yeongsil, jeong-yakyong, jeongjo-eochal, kim-jeongho, kim-siseup, kokkiri-1411, munjong-hwacha, myeongnyang, nanjangpan, nobi-chulsan, pihwi, simhwanji, sin-saimdang, sinju-muwonrok, sinmungo, yeonsangun)과 주제가 겹치는 킷 → [중복] 표기 ③ 킷끼리 사실상 같은 주제인 것 그룹핑(예: 독살설 계열, 장희빈 계열, 정도전/왕자의난 계열) ④ 채널 톤에 위험한 소재(성 스캔들·잔혹 서사 등) → [톤 리스크] 표기. → `gemini-out/r11-kit-audit.md`
- [x] R5-2. **1차 서류심사**: r11-kit-audit.md에서 [중복] 제외한 킷 전부에 대해, scripts-3an.md의 훅과 factcheck.md의 결론만 보고 상·중·하 등급을 매겨라. 기준: ①"몰랐던 사실+통념 반전"의 강도 ②실록 등 1차 사료로 방어 가능성 ③30~80초 영상으로 압축 가능성. 상위 15개를 shortlist로 선정하고 선정/탈락 사유 한 줄씩. → `gemini-out/r11-kit-shortlist.md`
- [x] R5-3. **심층 적대적 검증 ①**: shortlist 1~2위 킷. 절차: 해당 킷의 scripts-3an.md만 먼저 읽고, 대본 속 모든 사실 주장을 뽑아 **반박을 목표로** 구글 검색·실록 원문(sillok.history.go.kr)과 대조하라. 킷의 factcheck.md는 검증을 마친 뒤에만 열어 차이점을 기록하라. 주장별 판정 [생존/수정필요(수정문안 포함)/치명결함] + 출처 URL. 결과는 각 킷 폴더에 `verify.md`로 저장.
- [x] R5-4. **심층 적대적 검증 ②**: shortlist 3~4위, 같은 절차.
- [ ] R5-5. **심층 적대적 검증 ③**: shortlist 5~6위, 같은 절차.
- [ ] R5-6. **심층 적대적 검증 ④**: shortlist 7~8위, 같은 절차.
- [ ] R5-7. **심층 적대적 검증 ⑤**: shortlist 9~10위, 같은 절차.
- [ ] R5-8. **심층 적대적 검증 ⑥**: shortlist 11~12위, 같은 절차.
- [ ] R5-9. **심층 적대적 검증 ⑦**: shortlist 13~15위, 같은 절차.
- [ ] R5-10. **제작 순서 확정**: verify.md들의 생존율을 반영해 Top 10 제작 추천 순서를 확정하라. 편별로: 추천 훅 1개 / 반드시 고칠 것 / 남은 리스크 / 필요 소품 중 props-catalog.md에 없는 것. → `gemini-out/r11-production-order.md`
- [ ] R5-11. **확장 대본 ①**: r11-production-order.md 1~3위 킷에 대해, 채널 현행 포맷의 확장 대본을 1안씩 써라. 규격: 65~80초 분량(한국어 나레이션 기준 380~470자), 핵심 사실 2~3개 + 통념 반전 1개, 첫 청취 이해 우선(압축·생략으로 난해해지는 것 금지), verify.md에서 [생존] 판정된 사실만 사용, 마지막 문장은 다음 편 예고 없이 여운형 마무리. 각 킷 폴더에 `script-80s.md`로 저장.
- [ ] R5-12. **확장 대본 ②**: 4~6위 킷, 같은 규격.
- [ ] R5-13. **확장 대본 ③**: 7~10위 킷, 같은 규격.

## 반복 생산 규칙 v3 (R5 큐 소진 후 — 아래 순서로만, 소진되면 중단)

1. shortlist 밖 킷 중 r11-kit-shortlist.md에서 '상' 등급이었으나 15위에 못 든 킷을 순서대로 심층 검증(R5-3 절차) → verify.md.
2. 1이 소진되면: 검증 생존율 70% 이상인 킷에 확장 대본(R5-11 규격) → script-80s.md.
3. 2까지 소진되면 **새 작업을 발명하지 말고** `gemini-out/r11-DONE.md`에 완료 요약을 쓰고 중단하라.

## 작업 큐 R4 (전량 완료 — 건너뛸 것)

- [x] R4-1. **백로그 통합 A**: gemini-out/의 `r9-1` ~ `r9-99` 범위 중 `*-candidates.md`와 `*-factcheck-*.md`를 전수 읽고 후보를 하나의 표로 통합하라. 열: 후보명 / 시대 / 한 줄 훅 / 통념반전 강도(상·중·하) / 팩트체크 결과(통과·수정필요·기각·미검증) / 핵심 사료. 중복 후보는 병합. → `gemini-out/r10-backlog-a.md`
- [x] R4-2. **백로그 통합 B**: 같은 방식으로 `r9-100` ~ `r9-239` 범위. → `gemini-out/r10-backlog-b.md`
- [x] R4-3. **마스터 백로그**: r10-backlog-a/b를 병합·중복 제거하고, 이미 제작된 편(episodes/ 폴더의 22개 슬러그 주제)을 제외한 뒤 Top 20을 랭킹하라. 평가 축: ①통념반전 강도 ②사료 신뢰도 ③30초 압축 가능성 ④소품(컷아웃) 난이도 ⑤썸네일 한 줄 훅의 힘. 각 축 상·중·하 + 종합 순위 + 순위 근거 한 줄. → `gemini-out/r10-backlog-master.md`
- [x] R4-4. **고증 지적 시뮬레이션 ①**: episodes/cheugugi, kokkiri-1411, chakhogapsa, nobi-chulsan 각각의 facts.md·factcheck.md(있으면 script.txt)를 읽고, 한국사 전공자·실록 애호가 시청자가 달 법한 반박 댓글을 편당 5개 시뮬레이션하라. 각 댓글에 [타당함/부분타당/오해] 판정 + 방어 답변 초안 + 출처 URL. → `gemini-out/r10-sim-1.md`
- [x] R4-5. **고증 지적 시뮬레이션 ②**: 같은 방식 — episodes/jeongjo-eochal, sinju-muwonrok, simhwanji, sinmungo. → `gemini-out/r10-sim-2.md`
- [x] R4-6. **고증 지적 시뮬레이션 ③**: 같은 방식 — episodes/hwarang, pihwi. 이 두 편은 최신작이므로 특히 엄격하게. → `gemini-out/r10-sim-3.md`
- [x] R4-7. **패키징 감사**: korean_history_youtube_market_research.md와 episodes/*/meta.md를 읽고, 벤치마크 채널 대비 제목·설명·태그의 약점과 편별 개선안(제목 대안 2개씩)을 정리하라. 채널 차원 공통 개선 3가지 포함. → `gemini-out/r10-packaging-audit.md`
- [x] R4-8. **제작 준비 키트 #1**: r10-backlog-master.md의 1위 후보에 대해 아래 5종을 생산하라 (폴더 `gemini-out/kits/<후보-슬러그>/`에 개별 파일로):
  ① 심층 팩트체크 — gemini-text-tasks-2.md §1 공통 지시문 사용, 실록 기사 ID 특정
  ② 30초 대본 경쟁 3안 — gemini-text-tasks-2.md §2 측우기 형식 준용 (①이 [기각]이면 차순위 후보로 교체하고 그 사실을 명기)
  ③ 필요 소품 목록 + 컷아웃 SVG 초안 — gemini-text-tasks-2.md §3 공통 규격, props-catalog.md에 이미 있는 소품은 제외
  ④ 제목·썸네일 텍스트 5안 — r10-packaging-audit.md의 교훈 반영
  ⑤ 예상 고증 지적 5개 + 방어 답변
- [x] R4-9. **제작 준비 키트 #2**: 백로그 2위 후보로 R4-8과 동일.
- [x] R4-10. **제작 준비 키트 #3**: 백로그 3위 후보로 R4-8과 동일.

## ~~반복 생산 규칙 v2~~ (폐기 — 키트 71개로 과잉 생산됨. "반복 생산 규칙 v3"를 따를 것)

- [x] R4-11. **제작 준비 키트 #4**: 백로그 4위 후보('조선의 퀴어 스캔들, 순빈 봉씨')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/sunbin-bongssi/`).
- [x] R4-12. **제작 준비 키트 #5**: 백로그 5위 후보('정조의 콤플렉스, 안경')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/jeongjo-glasses/`).
- [x] R4-13. **제작 준비 키트 #6**: 백로그 6위 후보('세계 최초의 유네스코 의학책, 동의보감')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/donguibogam/`).
- [x] R4-14. **제작 준비 키트 #7**: 백로그 7위 후보('단종의 죽음 뒤에 숨겨진 소름 끼치는 암살 지시서')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/danjong-assassination/`).
- [x] R4-15. **제작 준비 키트 #8**: 백로그 8위 후보('인종 독살설, 문정왕후의 저주받은 인절미(떡)')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/injong-poison-tteok/`).
- [x] R4-16. **제작 준비 키트 #9**: 백로그 9위 후보('조선의 방탄복, 종이 갑옷(지갑)과 엄심갑')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-paper-armor/`).
- [x] R4-17. **제작 준비 키트 #10**: 백로그 10위 후보('제주도를 구한 흙수저 CEO, 김만덕')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/kim-manduk/`).
- [x] R4-18. **제작 준비 키트 #11**: 백로그 11위 후보('어우동의 진실, 희대의 스캔들인가 정치적 희생양인가')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/eoudong-scandal/`).
- [x] R4-19. **제작 준비 키트 #12**: 백로그 12위 후보('영조의 숨겨진 트라우마, 경종 독살설')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/yeongjo-gyeongjong-poison/`).
- [x] R4-20. **제작 준비 키트 #13**: 백로그 13위 후보('세종대왕 시절의 전대미문 내시 사기 사건 (조생의 가짜 왕명)')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/sejong-eunuch-scam/`).
- [x] R4-21. **제작 준비 키트 #14**: 백로그 14위 후보('조선의 부동산 투기꾼과 복부인 (한양 땅 투기 열풍)')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-real-estate-speculation/`).
- [x] R4-22. **제작 준비 키트 #15**: 백로그 15위 후보('흥선대원군의 당백전 발매와 조선 인플레이션 대참사')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/heungseon-dangbaekjeon-inflation/`).
- [x] R4-23. **제작 준비 키트 #16**: 백로그 16위 후보('현종 시대의 미스터리한 동전 위조 조직')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/hyeonjong-counterfeit-coins/`).
- [x] R4-24. **제작 준비 키트 #17**: 백로그 15위 후보('세종대왕의 형 양녕대군의 광적인 개 사랑과 매사냥')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/yangnyeong-hunting-dogs/`).
- [x] R4-25. **제작 준비 키트 #18**: 백로그 16위 후보('조선의 첩보 기관 체탐인(遞探人)과 북방의 그림자 전쟁')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-chetamin-spy/`).
- [x] R4-26. **제작 준비 키트 #19**: 백로그 17위 후보('조선의 아나키스트 정여립과 기축옥사')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/jeong-yeorip-rebellion/`).
- [x] R4-27. **제작 준비 키트 #20**: 백로그 18위 후보('조선의 궁중 코미디언 우인 공길과 연산군의 눈물')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-comedian-gonggil/`).
- [x] R4-28. **제작 준비 키트 #21**: 백로그 19위 후보('조선의 수학자 최석정과 세계 최초의 9x9 마법진 구수략')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/choi-seokjeong-magic-square/`).
- [x] R4-29. **제작 준비 키트 #22**: 백로그 20위 후보('조선의 프로파일러 심리 수사 기법과 흠휼전칙')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-profiler-investigation/`).
- [x] R4-30. **제작 준비 키트 #23**: 백로그 21위 후보('조선의 외과의사 백광현과 종기 수술 치종남지')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-surgeon-baek-gwanghyun/`).
- [x] R4-31. **제작 준비 키트 #24**: 백로그 22위 후보('조선의 배달 민족 18세기 한양 냉면 배달과 효종갱')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-delivery-service/`).
- [x] R4-32. **제작 준비 키트 #25**: 백로그 23위 후보('조선의 금융 혁명 객주와 사금융 어음 환전 시스템')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-financial-revolution/`).
- [x] R4-33. **제작 준비 키트 #26**: 백로그 24위 후보('조선 숙종 시대 궁중 뷰티 스캔들 화장품 납 중독')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-beauty-cosmetics/`).
- [x] R4-34. **제작 준비 키트 #27**: 백로그 25위 후보('조선 법의학 비결서 증수무원록과 은비녀 초산 검시법')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-forensic-jeungsunuwonrok/`).
- [x] R4-35. **제작 준비 키트 #28**: 백로그 26위 후보('조선 궁중 셰프 수라간 남성 대령숙수와 잔치 요리')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-male-chef-daeryeong-suksu/`).
- [x] R4-36. **제작 준비 키트 #29**: 백로그 27위 후보('조선 숙종 시대의 반려묘 극성 집사 대왕 금손')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/sukjong-cat-geumson/`).
- [x] R4-37. **제작 준비 키트 #30**: 백로그 28위 후보('조선 사약의 진실 즉사 독약이 아니라 온돌방 가열 VIP 형벌')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-royal-sayak-truth/`).
- [x] R4-38. **제작 준비 키트 #31**: 백로그 29위 후보('조선 영조 시대의 피의 금주령 남대문 앞 사령관 즉결 참수형')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/yeongjo-alcohol-ban-execution/`).
- [x] R4-39. **제작 준비 키트 #32**: 백로그 30위 후보('조선 임진왜란 세계 최초 시한폭탄 비격진천뢰 왜군 폭사')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-time-bomb-bigyeokjincheonroe/`).
- [x] R4-40. **제작 준비 키트 #33**: 백로그 31위 후보('조선 북벌 군주 효종 즉사시킨 수전증 어의 치명적 침')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/hyojong-acupuncture-death/`).
- [x] R4-41. **제작 준비 키트 #34**: 백로그 32위 후보('조선 궁중 얼음 창고 서빙고 왕실 한여름 얼음 화채')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-ice-storage-binggo/`).
- [x] R4-42. **제작 준비 키트 #35**: 백로그 33위 후보('조선 궁중 안경 착용 절대 금기 임금 앞 파직')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-royal-glasses-taboo/`).
- [x] R4-43. **제작 준비 키트 #36**: 백로그 34위 후보('조선 죽은 백골과 갓난아기 군포 수탈 백골징수 황구첨정')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-corrupt-tax-baekgol-hwanggu/`).
- [x] R4-44. **제작 준비 키트 #37**: 백로그 35위 후보('임진왜란 도자기 전쟁 일본 납치 조선 도공')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/imjin-war-potter-kidnapping/`).
- [x] R4-45. **제작 준비 키트 #38**: 백로그 36위 후보('조선 왕의 이동식 변기 매화틀 똥 맛보는 어의')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-royal-stool-maehwatseul/`).
- [x] R4-46. **제작 준비 키트 #39**: 백로그 37위 후보('조선 왕 앞 담배 예법과 정조 국민 흡연 권장')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-tobacco-king-jeongjo-praise/`).
- [x] R4-47. **제작 준비 키트 #40**: 백로그 38위 후보('조선 인구 70% 양반 신분 상승 공명첩 족보 위조')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-genealogy-forgery-yangban/`).
- [x] R4-48. **제작 준비 키트 #41**: 백로그 39위 후보('조선 가체금지령 4kg 가발 목뼈 부러진 신부')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-gache-wig-ban/`).
- [x] R4-49. **제작 준비 키트 #42**: 백로그 40위 후보('조선 태조 이성계 함흥차사 화살 야사와 실록의 진실')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-taejong-hamhung-chasa/`).
- [x] R4-50. **제작 준비 키트 #43**: 백로그 41위 후보('조선 장희빈 인현왕후 저주 인형과 신당 무고의 옥')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-jang-heebin-curse-shaman/`).
- [x] R4-51. **제작 준비 키트 #44**: 백로그 42위 후보('조선 건국 설계자 정도전 500년 무덤 없음 시신 유기 비극')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-jeong-dojeon-no-grave/`).
- [x] R4-52. **제작 준비 키트 #45**: 백로그 43위 후보('조선 인조 소현세자 독살 의혹과 서구 문명 아담 샬')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-sohyeon-crown-prince-poison/`).
- [x] R4-53. **제작 준비 키트 #46**: 백로그 44위 후보('조선 신유박해 천주교 황사영 백서 군함 5만 명 출병 요청')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-hwang-sayeong-silk-letter/`).
- [x] R4-54. **제작 준비 키트 #47**: 백로그 45위 후보('조선 순원왕후 안동 김씨 3대 왕비 싹쓸이 세도정치')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-sunwon-queen-maker-andong-kim/`).
- [x] R4-55. **제작 준비 키트 #48**: 백로그 46위 후보('조선 문정왕후 요승 보우 스님 정2품 벼슬 승과 복신 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-munjeong-buddhist-monk-bowoo/`).
- [x] R4-56. **제작 준비 키트 #49**: 백로그 47위 후보('조선 광해군 영창대군 아궁이 증살 계축옥사 비극')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-gwanghae-youngchang-daegun-murder/`).
- [x] R4-57. **제작 준비 키트 #50**: 백로그 48위 후보('조선 경종 영조 게장과 생감 인삼차 독살설 미스터리')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-gyeongjong-crab-persimmon-poison/`).
- [x] R4-58. **제작 준비 키트 #51**: 백로그 49위 후보('조선 허준 서얼 유배지 집필 동의보감 세계기록유산 비화')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-heojun-donguibogam-status/`).
- [x] R4-59. **제작 준비 키트 #52**: 백로그 50위 후보('조선 태종 이방원 원경왕후 처남 민무구 4형제 멸문 비극')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-taejong-min-brothers-purge/`).
- [x] R4-60. **제작 준비 키트 #53**: 백로그 51위 후보('조선 김육 대동법 100년 방납 지주 저항 개혁 집념')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-kim-yuk-daedongbeop-reform/`).
- [x] R4-61. **제작 준비 키트 #54**: 백로그 52위 후보('조선 인조 혜음령 호환 궁궐 난입 특수부대 착호갑사')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-injo-tiger-chakhogapsa-hunt/`).
- [x] R4-62. **제작 준비 키트 #55**: 백로그 53위 후보('조선 중종 화담 서경덕 기일원론 영혼 소멸 이단 논쟁')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-seogyeongdeok-philosophical-heresy/`).
- [x] R4-63. **제작 준비 키트 #56**: 백로그 54위 후보('조선 철종 삼정의 문란 진주 임술농민봉기 안핵사 박규수')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-cheoljong-imsul-peasant-revolt/`).
- [x] R4-64. **제작 준비 키트 #57**: 백로그 55위 후보('조선 인종 재위 8개월 단명 문정왕후 독떡 독살설')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-injong-munjeong-poison-mystery/`).
- [x] R4-65. **제작 준비 키트 #58**: 백로그 56위 후보('조선 고종 임오군란 구식군대 13개월 월급 체불 모래쌀 배급')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-gojong-imo-soldier-riot/`).
- [x] R4-66. **제작 준비 키트 #59**: 백로그 57위 후보('조선 영조 무수리 콤플렉스 노론 결탁 사도세자 뒤주 비극')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-yeongjo-sado-noron-tragedy/`).
- [x] R4-67. **제작 준비 키트 #60**: 백로그 58위 후보('조선 정조 사도세자 아들 극복 정약용 거중기 수원 화성 개혁')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-jeongjo-hwaseong-new-city-reform/`).
- [x] R4-68. **제작 준비 키트 #61**: 백로그 59위 후보('조선 순조 안동 김씨 세도정치 매관매직 백골징포')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-sunjo-sedo-andong-kim-corruption/`).
- [x] R4-69. **제작 준비 키트 #62**: 백로그 60위 후보('조선 헌종 한국 최초 김대건 신부 병오박해 세계지도 순교')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-heonjong-kim-daegeon-martyrdom/`).
- [x] R4-70. **제작 준비 키트 #63**: 백로그 61위 후보('조선 숙종 경신환국 허적 기름 천막 유악 무단 반출 멸문 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-sukjong-heojeok-oil-tent-purge/`).
- [x] R4-71. **제작 준비 키트 #64**: 백로그 62위 후보('조선 명종 문정왕후 불교 중흥 보우 대사 봉은사 승과 제주 장살 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-myeongjong-bou-monk-purge/`).
- [x] R4-72. **제작 준비 키트 #65**: 백로그 63위 후보('조선 태조 1차 왕자의 난 이방원 이방석 정도전 참살 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-taejo-first-prince-revolt-jeong-dojeon/`).
- [x] R4-73. **제작 준비 키트 #66**: 백로그 64위 후보('조선 태종 2차 왕자의 난 이방원 친형 이방간 박포 골육상쟁 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-taejong-second-prince-revolt-banggan/`).
- [x] R4-74. **제작 준비 키트 #67**: 백로그 65위 후보('조선 광해군 계모 인목대비 유폐 영창대군 증살 폐모살제 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-gwanghaegun-inmok-queen-dowager-imprisonment/`).
- [x] R4-75. **제작 준비 키트 #68**: 백로그 66위 후보('조선 숙종 희빈 장씨 취선당 신당 저주 사약 옥사 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-sukjong-jang-hui-bin-poison-curse-shrine/`).
- [ ] R4-76. **제작 준비 키트 #69**: 백로그 67위 후보('조선 정조 심환지 299통 비밀 편지 막후 밀담 발굴 사건')에 대해 R4-8과 동일하게 5종 세트를 생산하라 (폴더 `gemini-out/kits/joseon-jeongjo-sim-hwanji-secret-letters-discovery/`).

**유일한 반복 작업: 제작 준비 키트.** r10-backlog-master.md의 다음 순위 후보를 골라 R4-8과 동일한 5종 세트를 생산하라. 팩트체크에서 [기각]되면 그 후보는 백로그에 기각 사유를 표기하고 다음 순위로 넘어가라.

**생산 금지 (이미 수확 체감 한계 도달)**:
- 신규 후보 발굴 라운드 (이미 ~60회 축적)
- 신규 언어 자막 (이미 30개 언어 축적)
- 훅 리라이트 세트 (이미 59세트 축적)

⚠ 공통: 결과는 지정 위치에 저장, 검증은 Claude Code가 나중에 수행하므로 자체 확신도(상/중/하)를 파일 끝에 표기할 것.

## 작업 큐 R1~R3 (전량 완료 — 건너뛸 것)

- [x] Q1. gemini-text-tasks-2.md §1 후보 A(세종 출산휴가) 심층 팩트체크 → r2-t1a
- [x] Q2. 같은 파일 §1 후보 B(착호갑사) → r2-t1b
- [x] Q3. 같은 파일 §1 후보 C(정조어찰첩) → r2-t1c
- [x] Q4. 같은 파일 §1 후보 D(신주무원록) → r2-t1d
- [x] Q5. 같은 파일 §1 후보 E(화랑 화장) → r2-t1e
- [x] Q6. 같은 파일 §1 후보 F(문종화차) → r2-t1f
- [x] Q7. gemini-text-tasks-2.md §2 측우기 대본 경쟁 입찰 3안 → r2-t2
- [x] Q8. gemini-text-tasks-2.md §3 소품 SVG 3종(수라상·폭포·상복) → 개별 .svg
- [x] Q9. gemini-text-tasks-2.md §4 일본어 자막 11편 (대본은 gemini-text-tasks.md §3에서 읽기) → r2-t4
- [x] Q10. gemini-text-tasks-2.md §5 예상 고증 지적 시뮬레이션 — EP.1~4 (4편만) → r2-t5a
- [x] Q11. 같은 시뮬레이션 — EP.5~8 → r2-t5b
- [x] Q12. 같은 시뮬레이션 — EP.9~11 → r2-t5c
- [x] Q13. gemini-text-tasks-2.md §6 한국사 쇼츠 시장 벤치마크 → r2-t6
- [x] Q14. 1라운드 발굴 후보 #4(사도세자)·#10(명통시) 심층 팩트체크 — §1 공통 지시문 사용, 톤 리스크(살인 서사/장애인 표현) 완화 각도 포함 → r2-t1g
- [x] Q15. 스페인어 자막 11편 — gemini-text-tasks.md §3 대본, 원칙은 §4 일본어 편 준용(로마자 표기+동격 설명) → r2-t7
- [x] Q16. 코끼리 1411 에피소드 사전 리서치 — 태종·세종실록 코끼리 기사 전수 조사(기사 ID 특정), 30초 대본용 확정 사실 표 + 안전선 작성 → r3-t1
- [x] Q17. 착호갑사·출산휴가·정조어찰첩 중 팩트체크 통과분에 한해 측우기 §2 형식으로 대본 3안씩 → r3-t2*

## ~~반복 생산 규칙 v1~~ (폐기 — 위의 "반복 생산 규칙 v2"를 따를 것)

아래 유형을 돌아가며 새 태스크를 만들어 계속 처리하라. 결과 파일명은 r9-<번호>-<내용>.md:

1. **후보 발굴 확장**: gemini-text-tasks.md §5 조건으로 신규 후보 10개 발굴 — 단 매회 다른 각도 지정 (여성 인물 / 삼국·고려 시대 / 과학·기술 / 법·제도 / 음식·생활사 / 사건·재해). 이미 발굴한 후보와 중복 금지.
2. **발굴 후보 즉시 검증**: 방금 발굴한 후보 중 상위 3개를 §1 공통 지시문으로 심층 팩트체크.
3. **소품 SVG 확장**: 컷아웃 스타일 규격(gemini-text-tasks-2.md §3 공통 규격)으로 아직 없는 한국사 소품 SVG — 예: 가마솥, 절구, 연자방아, 홍살문 단독, 장승, 솟대, 탈(하회탈), 북·장구·꽹과리, 화로, 등롱.
4. **기존 편 다국어 확장**: 중국어(번체)·인도네시아어 등 다음 언어로 11편 자막.
5. **훅 리라이트 연습**: 기존 11편 각각에 대해 "지금 알고 있는 사실만으로 더 강한 첫 문장" 5안씩.

⚠ 전 유형 공통: 결과는 gemini-out/에 저장, 검증은 Claude Code가 나중에 수행하므로 자체 확신도(상/중/하)를 파일 끝에 표기할 것.

## Claude Code 보완 기록 (2026-07-26 16:10)

- [x] **키트 보완 A**: r10-backlog-master.md **원본 18위** '세종대왕, 조선 최초의 여론조사(공법 국민투표)' 5종 세트 → `gemini-out/kits/sejong-gongbeop-referendum/` (루프가 R4-27부터 백로그 순위를 자체 확장 목록으로 재정의하면서 원본 18·19위를 건너뛰어 Claude Code가 보완 생산. 실록 기사 ID kda_11208010_005 웹 검증 완료)
- [x] **키트 보완 B**: r10-backlog-master.md **원본 19위** '백 발 백 중, 편전(애기살)과 조총의 대결' 5종 세트 → `gemini-out/kits/pyeonjeon-agisal/` (세종 17·19년 기밀 관리 기록·지봉유설 병칭 웹 검증 완료)
- ⚠ **검수 플래그**: 루프 생산분 키트 #27(`joseon-forensic-jeungsunuwonrok`, 증수무원록)은 기존 에피소드 `episodes/sinju-muwonrok`(신주무원록)과 주제 계열이 겹침 — 제작 착수 전 차별화 각도(영조·정조대 증보판 + 은비녀 검시) 확인 필요. 원본 백로그 20위(체탐인 중복 후보)는 16위와 동일 주제라 생산 불필요.
