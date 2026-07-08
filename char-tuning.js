// 캐릭터 얼굴 장식(모자/갓/수염) 미세조정값. studio.html에서 슬라이더로 편집.
// makeCharacter가 이 값으로 hat/beard 그룹을 translate/scale/rotate 변형한다(모양은 그대로, 앉음새만 조정).
//   x,y = px 이동(viewBox 200×240 기준), s = 배율, r = 회전(도). 기본 0/1/0 = 원본.
var CHAR_TUNING = {
  host:    { hat: { x: 0, y: 0, s: 1, r: 0 }, beard: { x: 0, y: 0, s: 1, r: 0 } },
  king:    { hat: { x: 0, y: 0, s: 1, r: 0 }, beard: { x: 0, y: 0, s: 1, r: 0 } },
  admiral: { hat: { x: 0, y: 0, s: 1, r: 0 }, beard: { x: 0, y: 0, s: 1, r: 0 } },
  militia: { hat: { x: 0, y: 0, s: 1, r: 0 }, beard: { x: 0, y: 0, s: 1, r: 0 } },
};
if (typeof window !== "undefined") window.CHAR_TUNING = CHAR_TUNING;
