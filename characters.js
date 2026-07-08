// Paper-cutout character rig factory.
// One rig, parametrized: hat/hair variant + colors = new character.
// Parts carry classes so the timeline can toggle expression/mouth/eye states.
// Timeline contract: viewBox 200x240, arm pivots svgOrigin "60 152" / "140 152",
// head origin 100px 120px — part class names must not change.

var CHAR_PALETTE = {
  skin: "#f2c99b",
  ink: "#26221c",
  mouthDark: "#6b3226",
};

// flat cutout shading: derive a darker paper tone from any part color
function shade(hex, amt) {
  var n = parseInt(hex.slice(1), 16);
  var r = Math.round(((n >> 16) & 255) * (1 - amt));
  var g = Math.round(((n >> 8) & 255) * (1 - amt));
  var b = Math.round((n & 255) * (1 - amt));
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

function makeCharacter(cfg) {
  var skin = cfg.skin || CHAR_PALETTE.skin;
  var shirt = cfg.shirt || "#3a7ca5";
  var pants = cfg.pants || "#1f2d45";
  var ink = CHAR_PALETTE.ink;
  var skinSh = shade(skin, 0.12);
  var shirtSh = shade(shirt, 0.2);
  var pantsSh = shade(pants, 0.25);

  var hat = "";
  var beard = "";
  var torsoDetail = "";
  var cuff = shirtSh;

  // studio.html에서 조정한 앉음새 변형 적용(모양 불변, 위치/크기/회전만). 값 없으면 원본.
  var TU = (typeof CHAR_TUNING !== "undefined" && CHAR_TUNING[cfg.variant]) || null;
  function wrapTf(inner, t, pivotY) {
    if (!t) return inner;
    var dx = t.x || 0, dy = t.y || 0, s = t.s == null ? 1 : t.s, r = t.r || 0;
    if (dx === 0 && dy === 0 && s === 1 && r === 0) return inner;
    var tf = "translate(" + dx + " " + dy + ") translate(100 " + pivotY +
      ") scale(" + s + ") rotate(" + r + ") translate(-100 " + (-pivotY) + ")";
    return '<g transform="' + tf + '">' + inner + "</g>";
  }

  if (cfg.variant === "king") {
    cuff = "#e8b74a";
    // 익선관: 위로 솟은 소각(뿔)은 둥근 만화 머리에서 무조건 '토끼 귀'로 읽힘(참고이미지 2회 확인)
    // → 뿔 제거. 머리 상단 덮는 둥근 검정 관 + 뒤 높은 이중단으로 익선관 실루엣만 암시.
    // 세종 식별은 곤룡포(빨강+금색 용 흉배+옥대)가 담당.
    hat =
      '<g class="hat">' +
      '<path d="M 60 58 Q 58 24 100 24 Q 142 24 140 58 Q 100 50 60 58 Z" fill="#171412"/>' +
      '<path d="M 74 30 Q 74 13 100 13 Q 126 13 126 30 Q 100 24 74 30 Z" fill="#221d18"/>' +
      '<path d="M 58 62 Q 58 50 100 50 Q 142 50 142 62 L 142 66 Q 100 56 58 66 Z" fill="#26221c"/>' +
      "</g>";
    // 곤룡포: 옥대 + 흉배(보)
    torsoDetail =
      '<path d="M 53 184 L 147 184 L 148 193 L 52 193 Z" fill="' + shade(shirt, 0.35) + '"/>' +
      '<rect x="93" y="182" width="14" height="12" rx="3" fill="#e8b74a"/>' +
      '<circle cx="100" cy="164" r="15" fill="#e8b74a"/>' +
      '<circle cx="100" cy="164" r="11.5" fill="' + shade("#e8b74a", 0.3) + '"/>' +
      '<path d="M 92 166 Q 96 158 101 163 Q 105 167 108 161" stroke="#e8b74a" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
  } else if (cfg.variant === "admiral") {
    cuff = "#31353c";
    // 전립(조선 무관): 넓고 평평한 챙 + 낮은 펠트 크라운. 붉은 상모·금구슬 정자 제거
    // — 돔+금구슬+붉은술 조합은 청 만주족 관모로 오독됨(블라인드 검수 2/2 지적). 넓은 평챙이 조선 전립의 식별자.
    hat =
      '<g class="hat">' +
      '<ellipse cx="100" cy="58" rx="60" ry="7" fill="' + shade(skin, 0.15) + '"/>' +
      '<ellipse cx="100" cy="54" rx="76" ry="11" fill="#2b2f36"/>' +
      '<ellipse cx="100" cy="51" rx="70" ry="8" fill="#31353c"/>' +
      '<path d="M 74 52 Q 74 30 100 30 Q 126 30 126 52 Q 100 45 74 52 Z" fill="#4a4f57"/>' +
      '<path d="M 110 33 Q 123 40 126 51 L 118 49 Q 116 40 108 34 Z" fill="#3a3e45"/>' +
      '<ellipse cx="100" cy="30" rx="9" ry="5" fill="#3a3e45"/>' +
      '<circle cx="100" cy="27" r="3.5" fill="#26221c"/>' +
      "</g>";
    // 수염: 턱을 감싸는 얇은 밴드형(입 아래). 두꺼운 말굽=검은 덩어리로 보임(참고이미지) → 얇게+밝게.
    beard =
      '<path d="M 64 116 Q 68 140 88 150 Q 100 155 112 150 Q 132 140 136 116 Q 131 137 117 149 Q 100 159 83 149 Q 69 137 64 116 Z" fill="#4a4034"/>';
    // 두정갑: 금징 3단 + 요대 + 갑찰 자락
    var studs = "";
    for (var r = 0; r < 3; r++) {
      for (var i = 0; i < 6; i++) {
        studs += '<circle cx="' + (70 + i * 12) + '" cy="' + (150 + r * 11) + '" r="1.8" fill="#e8b74a"/>';
      }
    }
    var scales = "";
    for (var s = 0; s < 7; s++) {
      scales += '<rect x="' + (57 + s * 12.5) + '" y="188" width="10" height="13" rx="3" fill="' + shade(shirt, 0.3) + '"/>';
    }
    torsoDetail =
      studs +
      '<path d="M 53 178 L 147 178 L 148 186 L 52 186 Z" fill="#26221c"/>' +
      '<circle cx="100" cy="182" r="6" fill="#e8b74a"/>' +
      scales;
  } else if (cfg.variant === "militia") {
    // 갓: 넓은 양태(챙) + 낮은 절두원뿔 대우(크라운). 높은 원통 크라운=서양 실크햇으로 오독(참고이미지).
    hat =
      '<g class="hat">' +
      '<ellipse cx="100" cy="56" rx="60" ry="7" fill="' + shade(skin, 0.15) + '"/>' +
      '<path d="M 56 60 Q 52 82 57 100 L 62 99 Q 58 82 61 60 Z" fill="#221c16"/>' +
      '<path d="M 144 60 Q 148 82 143 100 L 138 99 Q 142 82 139 60 Z" fill="#221c16"/>' +
      '<ellipse cx="100" cy="52" rx="68" ry="9" fill="#221c16"/>' +
      '<path d="M 79 52 L 85 30 Q 100 25 115 30 L 121 52 Q 100 46 79 52 Z" fill="#171412"/>' +
      '<ellipse cx="100" cy="29" rx="15" ry="4" fill="#221c16"/>' +
      "</g>";
    // 도포: 교차 깃(동정) + 옷고름
    torsoDetail =
      '<path d="M 124 136 L 106 162 L 110 166 L 128 138 Z" fill="' + shade("#f6efe3", 0.15) + '"/>' +
      '<path d="M 76 136 L 98 172 L 106 165 L 86 134 Z" fill="#f6efe3"/>' +
      '<path d="M 92 168 L 106 168 L 105 177 L 93 177 Z" fill="#d94f37"/>' +
      '<path d="M 94 177 Q 91 188 94 199 L 100 199 Q 98 188 99 177 Z" fill="#d94f37"/>' +
      '<path d="M 101 177 Q 103 186 108 194 L 113 191 Q 108 184 106 177 Z" fill="' + shade("#d94f37", 0.2) + '"/>';
  } else {
    // host: modern fringe + jacket
    hat =
      '<g class="hat">' +
      '<path d="M 42 82 Q 38 36 76 26 Q 100 18 126 27 Q 161 40 158 82 Q 150 64 142 72 Q 138 56 126 66 Q 118 52 106 62 Q 96 50 86 62 Q 76 52 66 68 Q 58 58 52 74 Q 46 66 42 82 Z" fill="#3b2b20"/>' +
      "</g>";
    // 재킷 문법: 네이비 칼라 + 고대비 지퍼 + 밑단 시보리 + 포켓 (shirt색 셰이드만으론 안 읽힘)
    torsoDetail =
      '<path d="M 64 140 Q 74 134 84 138 L 74 152 Z" fill="#1f2d45"/>' +
      '<path d="M 136 140 Q 126 134 116 138 L 126 152 Z" fill="#1f2d45"/>' +
      '<path d="M 98 136 L 102 136 L 103 196 L 97 196 Z" fill="' + shade(shirt, 0.45) + '"/>' +
      '<rect x="62" y="178" width="19" height="7" rx="3.5" fill="' + shade(shirt, 0.45) + '"/>' +
      '<rect x="119" y="178" width="19" height="7" rx="3.5" fill="' + shade(shirt, 0.45) + '"/>' +
      '<path d="M 52 195 L 148 195 Q 149 202 140 202 L 60 202 Q 51 202 52 195 Z" fill="' + shirtSh + '"/>';
  }

  return (
    '<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">' +
    '<ellipse cx="100" cy="232" rx="52" ry="7" fill="#1f2d45" opacity="0.12"/>' +
    // legs (slight hem flare) + inner shade + paper shoes
    '<path d="M 71 188 Q 68 206 70 224 L 94 224 Q 96 206 93 188 Z" fill="' + pants + '"/>' +
    '<path d="M 85 188 Q 86 206 87 224 L 94 224 Q 96 206 93 188 Z" fill="' + pantsSh + '"/>' +
    '<path d="M 107 188 Q 104 206 106 224 L 130 224 Q 132 206 129 188 Z" fill="' + pants + '"/>' +
    '<path d="M 107 188 Q 104 206 106 224 L 113 224 Q 114 206 115 188 Z" fill="' + pantsSh + '"/>' +
    '<path d="M 64 227 Q 64 233 71 234 L 92 234 Q 98 233 97 226 Q 95 219 87 220 L 73 221 Q 65 221 64 227 Z" fill="#171412"/>' +
    '<path d="M 136 227 Q 136 233 129 234 L 108 234 Q 102 233 103 226 Q 105 219 113 220 L 127 221 Q 135 221 136 227 Z" fill="#171412"/>' +
    // arms (rotate at shoulder — cap stays round around the pivot)
    '<g class="arm-l">' +
    '<path d="M 52 149 Q 51 143 60 142 Q 69 143 68 149 L 70 183 Q 70 189 60 190 Q 51 189 51 183 Z" fill="' + shirt + '"/>' +
    '<path d="M 63 143 Q 68 145 68 150 L 70 183 Q 70 187 66 188 Q 67 165 63 143 Z" fill="' + shirtSh + '"/>' +
    '<path d="M 51 181 L 70 181 L 70 184 Q 70 190 60 190 Q 51 190 51 184 Z" fill="' + cuff + '"/>' +
    '<path d="M 49 198 Q 48 207 55 211 Q 62 214 68 209 Q 72 204 70 197 Q 67 189 59 189 Q 51 190 49 198 Z" fill="' + skin + '"/>' +
    "</g>" +
    '<g class="arm-r">' +
    '<path d="M 148 149 Q 149 143 140 142 Q 131 143 132 149 L 130 183 Q 130 189 140 190 Q 149 189 149 183 Z" fill="' + shirt + '"/>' +
    '<path d="M 137 143 Q 132 145 132 150 L 130 183 Q 130 187 134 188 Q 133 165 137 143 Z" fill="' + shirtSh + '"/>' +
    '<path d="M 149 181 L 130 181 L 130 184 Q 130 190 140 190 Q 149 190 149 184 Z" fill="' + cuff + '"/>' +
    '<path d="M 151 198 Q 152 207 145 211 Q 138 214 132 209 Q 128 204 130 197 Q 133 189 141 189 Q 149 190 151 198 Z" fill="' + skin + '"/>' +
    "</g>" +
    // body: sloped shoulders, flared hem + side shade + variant costume
    '<path d="M 64 143 Q 76 134 100 134 Q 124 134 136 143 Q 144 149 145 163 L 148 194 Q 149 202 140 202 L 60 202 Q 51 202 52 194 L 55 163 Q 56 149 64 143 Z" fill="' + shirt + '"/>' +
    '<path d="M 128 137 Q 140 146 142 162 L 145 202 L 135 202 Q 138 168 128 137 Z" fill="' + shirtSh + '"/>' +
    torsoDetail +
    // head
    '<g class="head" style="transform-origin:100px 120px">' +
    '<circle cx="100" cy="82" r="58" fill="' + skin + '"/>' +
    '<path d="M 56 120 A 58 58 0 0 0 144 120 Q 122 133 100 133 Q 78 133 56 120 Z" fill="' + skinSh + '"/>' +
    wrapTf(hat, TU && TU.hat, 48) +
    wrapTf(beard, TU && TU.beard, 130) +
    // eyes
    '<g class="eye-open">' +
    '<ellipse cx="82" cy="84" rx="13" ry="15" fill="#ffffff"/>' +
    '<ellipse cx="118" cy="84" rx="13" ry="15" fill="#ffffff"/>' +
    '<circle class="pupil-l" cx="85" cy="87" r="4" fill="' + ink + '"/>' +
    '<circle class="pupil-r" cx="115" cy="87" r="4" fill="' + ink + '"/>' +
    "</g>" +
    '<g class="eye-wide" visibility="hidden">' +
    '<ellipse cx="82" cy="83" rx="15" ry="18" fill="#ffffff"/>' +
    '<ellipse cx="118" cy="83" rx="15" ry="18" fill="#ffffff"/>' +
    '<circle cx="82" cy="86" r="3" fill="' + ink + '"/>' +
    '<circle cx="118" cy="86" r="3" fill="' + ink + '"/>' +
    "</g>" +
    '<g class="eye-closed" visibility="hidden">' +
    '<path d="M 70 86 Q 82 92 94 86" stroke="' + ink + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
    '<path d="M 106 86 Q 118 92 130 86" stroke="' + ink + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
    "</g>" +
    // brows
    '<g class="brows">' +
    '<rect class="brow-l" x="70" y="62" width="24" height="5" rx="2.5" fill="' + ink + '" style="transform-origin:82px 64px"/>' +
    '<rect class="brow-r" x="106" y="62" width="24" height="5" rx="2.5" fill="' + ink + '" style="transform-origin:118px 64px"/>' +
    "</g>" +
    // mouths (one visible at a time; .m-open reserved for talk flaps)
    '<g class="m-closed"><path d="M 90 116 Q 100 120 110 116" stroke="' + ink + '" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>' +
    '<g class="m-smile" visibility="hidden"><path d="M 84 112 Q 100 126 116 112" stroke="' + ink + '" stroke-width="4" fill="none" stroke-linecap="round"/></g>' +
    '<g class="m-frown" visibility="hidden"><path d="M 86 120 Q 100 110 114 120" stroke="' + ink + '" stroke-width="4" fill="none" stroke-linecap="round"/></g>' +
    '<g class="m-shock" visibility="hidden"><ellipse cx="100" cy="117" rx="8" ry="10" fill="' + CHAR_PALETTE.mouthDark + '"/></g>' +
    '<g class="m-open" visibility="hidden"><ellipse cx="100" cy="117" rx="11" ry="13" fill="' + CHAR_PALETTE.mouthDark + '"/><ellipse cx="100" cy="123" rx="6" ry="4" fill="#d97362"/></g>' +
    "</g>" +
    "</svg>"
  );
}

// expression → which face parts are visible / how brows sit
var EXPRESSIONS = {
  neutral: { eye: "eye-open", mouth: "m-closed", browY: 0, browRotL: 0, browRotR: 0 },
  happy: { eye: "eye-closed", mouth: "m-smile", browY: -4, browRotL: 0, browRotR: 0 },
  proud: { eye: "eye-open", mouth: "m-smile", browY: -2, browRotL: -8, browRotR: 8 },
  shocked: { eye: "eye-wide", mouth: "m-shock", browY: -9, browRotL: 0, browRotR: 0 },
  angry: { eye: "eye-open", mouth: "m-frown", browY: 6, browRotL: 16, browRotR: -16 },
};

var MOUTH_CLASSES = ["m-closed", "m-smile", "m-frown", "m-shock", "m-open"];
var EYE_CLASSES = ["eye-open", "eye-wide", "eye-closed"];

// pose → arm rotations (deg). Applied with gsap on .arm-l/.arm-r
var POSES = {
  down: { l: 4, r: -4 },
  point: { l: 6, r: -102 },
  raised: { l: 148, r: -148 },
  shrug: { l: 42, r: -42 },
};
