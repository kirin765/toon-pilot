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
  var faceDetail = "";   // 얼굴 위 장식(분·연지 등) — .head 그룹 안에서 눈보다 먼저 깔린다
  var torsoDetail = "";
  var cuff = shirtSh;
  var legs = null;   // variant가 치마 등으로 교체 가능(null = 기본 바지+신)
  var body = null;   // variant가 저고리 등으로 교체 가능(null = 기본 상의)
  var armDetailL = "", armDetailR = ""; // 소매 위 장식(색동 등) — .arm-l/.arm-r 그룹 내부라 회전 동기

  // studio.html에서 조정한 앉음새 변형 적용(모양 불변, 위치/크기/회전만). 값 없으면 원본.
  // 삭발 승려는 militia+noHat이지만 별도 튜닝 키("monk")로 관리 — 갓 쓴 militia와 앉음새가 다름.
  var tuneKey = (cfg.variant === "militia" && cfg.noHat) ? "monk" : cfg.variant;
  var TU = (typeof CHAR_TUNING !== "undefined" && CHAR_TUNING[tuneKey]) || null;
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
    if (cfg.hat === "myeonryu") {
      // 면류관(즉위식·대례): 앞이 살짝 낮은 평천판 + 앞 주렴(구슬발) 5줄.
      // 구슬발은 이마까지만(y≤52) — 눈썹(62)·눈을 가리면 표정 파츠가 죽는다.
      var beadStrings = "";
      for (var bi = 0; bi < 5; bi++) {
        var bx = 58 + bi * 21;
        beadStrings +=
          '<path d="M ' + bx + ' 30 L ' + bx + ' 50" stroke="#8a7048" stroke-width="1.5"/>' +
          '<circle cx="' + bx + '" cy="36" r="3" fill="#e8b74a"/>' +
          '<circle cx="' + bx + '" cy="43" r="3" fill="#7db95c"/>' +
          '<circle cx="' + bx + '" cy="50" r="3" fill="#d94f37"/>';
      }
      hat =
        '<g class="hat">' +
        '<path d="M 70 58 Q 68 30 100 30 Q 132 30 130 58 Q 100 50 70 58 Z" fill="#171412"/>' +
        '<path d="M 48 28 L 152 21 L 156 31 L 52 38 Z" fill="#26221c"/>' +
        '<path d="M 48 28 L 152 21 L 151 16 L 49 23 Z" fill="#171412"/>' +
        beadStrings +
        "</g>";
    } else {
      // 익선관: 위로 솟은 소각(뿔)은 둥근 만화 머리에서 무조건 '토끼 귀'로 읽힘(참고이미지 2회 확인)
      // → 뿔 제거. 머리 상단 덮는 둥근 검정 관 + 뒤 높은 이중단으로 익선관 실루엣만 암시.
      // 세종 식별은 곤룡포(빨강+금색 용 흉배+옥대)가 담당.
      hat =
        '<g class="hat">' +
        '<path d="M 60 58 Q 58 24 100 24 Q 142 24 140 58 Q 100 50 60 58 Z" fill="#171412"/>' +
        '<path d="M 74 30 Q 74 13 100 13 Q 126 13 126 30 Q 100 24 74 30 Z" fill="#221d18"/>' +
        '<path d="M 58 62 Q 58 50 100 50 Q 142 50 142 62 L 142 66 Q 100 56 58 66 Z" fill="#26221c"/>' +
        "</g>";
    }
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
    // 수염: 턱을 채우는 풍성한 형(입 아래만, 마우스 플랩 가리지 않게). 너무 얇으면 안 보임(참고이미지).
    beard =
      '<path d="M 60 110 Q 62 146 86 157 Q 100 163 114 157 Q 138 146 140 110 Q 133 129 116 131 Q 100 135 84 131 Q 67 129 60 110 Z" fill="#3a322a"/>';
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
    if (cfg.hat === "samo") {
      // 사모(문신 관모): 낮은 앞단이 머리를 감싸고 뒷단이 높은 2단 + 좌우 '수평' 매미 날개.
      // 날개는 옆으로 수평 — 위로 솟는 쌍 돌기는 귀로 읽히는 지뢰라 금지.
      hat =
        '<g class="hat">' +
        // ⚠ 각(角)은 모체에 '붙어' 있어야 한다 — 초안이 x 16~52 / 148~184라 모체(58~142)와
        // 6단위 떠 있었고, S8 고증·블라인드 검수자가 독립적으로 "공중 부양"·"동그란 귀 장식"으로
        // 적발(2026-07-23, EP.16). 안쪽 끝을 모체에 겹치게 늘리고 주걱형으로.
        '<ellipse cx="38" cy="54" rx="25" ry="7.5" fill="#171412"/>' +
        '<ellipse cx="162" cy="54" rx="25" ry="7.5" fill="#171412"/>' +
        '<ellipse cx="34" cy="53" rx="18" ry="5" fill="#31353c"/>' +
        '<ellipse cx="166" cy="53" rx="18" ry="5" fill="#31353c"/>' +
        '<path d="M 80 42 Q 80 20 100 20 Q 120 20 120 42 Q 100 35 80 42 Z" fill="#171412"/>' +
        '<path d="M 58 58 Q 56 34 100 34 Q 144 34 142 58 Q 100 48 58 58 Z" fill="#221c16"/>' +
        '<path d="M 58 60 Q 100 50 142 60 L 142 65 Q 100 55 58 65 Z" fill="#2b2f36"/>' +
        "</g>";
    } else if (cfg.hat === "paeraengi") {
      // 패랭이(보부상 초립): 짚색 넓은 챙 + 낮은 둥근 크라운 + 엮음 라인 — 갓과 색·크라운으로 구분
      hat =
        '<g class="hat">' +
        '<ellipse cx="100" cy="56" rx="60" ry="7" fill="' + shade(skin, 0.15) + '"/>' +
        '<ellipse cx="100" cy="52" rx="72" ry="10" fill="#c9a86a"/>' +
        '<ellipse cx="100" cy="49" rx="66" ry="7.5" fill="#b98d54"/>' +
        '<path d="M 72 50 Q 72 28 100 28 Q 128 28 128 50 Q 100 43 72 50 Z" fill="#c9a86a"/>' +
        '<path d="M 74 44 Q 100 38 126 44" stroke="#a07840" stroke-width="2" fill="none"/>' +
        '<path d="M 76 37 Q 100 31 124 37" stroke="#a07840" stroke-width="2" fill="none"/>' +
        "</g>";
    } else if (cfg.hat === "gulgeon") {
      // 굴건(상주 상복 관): 삼베 톤 각진 관 + 세로 주름 + 수질(테). 중앙 단일 매스라 귀 오독 없음.
      hat =
        '<g class="hat">' +
        '<path d="M 74 54 L 79 20 L 121 20 L 126 54 Q 100 46 74 54 Z" fill="#d9c9a8"/>' +
        '<path d="M 88 20 L 91 50" stroke="#b9a888" stroke-width="3"/>' +
        '<path d="M 100 19 L 100 48" stroke="#b9a888" stroke-width="3"/>' +
        '<path d="M 112 20 L 109 50" stroke="#b9a888" stroke-width="3"/>' +
        '<path d="M 70 58 Q 100 48 130 58 L 130 64 Q 100 54 70 64 Z" fill="#b9a888"/>' +
        "</g>";
    } else if (cfg.noHat) {
      // 삭발 승려: 갓 없이 맨머리 + 파르스름한 삭발 음영(피부색보다 살짝 차가운 톤)
      hat =
        '<g class="hat">' +
        '<path d="M 46 78 A 54 54 0 0 1 154 78 Q 100 66 46 78 Z" fill="' + shade(skin, 0.22) + '" opacity="0.55"/>' +
        "</g>";
    } else {
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
    }
    if (cfg.hat === "samo") {
      // 단령 관복: 가슴 흉배(학 곡선 암시) + 각대. 도포 고름 문법과 구분.
      // ⚠ 문관 흉배 제도는 단종 2년(1454) 도입 — 그 이전 시대 인물은 cfg.noBadge로 흉배 제외(EP.10 최만리 1444).
      torsoDetail =
        (cfg.noBadge ? "" :
          '<rect x="84" y="148" width="32" height="26" rx="3" fill="' + shade(shirt, 0.35) + '"/>' +
          '<rect x="87" y="151" width="26" height="20" rx="2" fill="' + shade(shirt, 0.5) + '"/>' +
          '<path d="M 90 166 Q 95 156 100 162 Q 105 167 110 158" stroke="#e8b74a" stroke-width="2.5" fill="none" stroke-linecap="round"/>') +
        '<path d="M 53 182 L 147 182 L 148 190 L 52 190 Z" fill="#26221c"/>' +
        '<rect x="93" y="181" width="14" height="10" rx="3" fill="#e8b74a"/>';
    } else {
      // 도포: 교차 깃(동정) + 옷고름 — 여밈은 flip-인지형(EP.13 S8 고증: 우임 유지).
      // CSS flip(scaleX -1)이 여밈을 반전시키므로, flip 캐릭터는 원래 좌표(미러 후 우임),
      // unflip 캐릭터는 거울 좌표(그대로 우임 = 화면 오른쪽 어깨 → 왼쪽 허리)를 쓴다.
      torsoDetail = cfg.flip
        ? '<path d="M 124 136 L 106 162 L 110 166 L 128 138 Z" fill="' + shade("#f6efe3", 0.15) + '"/>' +
          '<path d="M 76 136 L 98 172 L 106 165 L 86 134 Z" fill="#f6efe3"/>' +
          '<path d="M 92 168 L 106 168 L 105 177 L 93 177 Z" fill="#d94f37"/>' +
          '<path d="M 94 177 Q 91 188 94 199 L 100 199 Q 98 188 99 177 Z" fill="#d94f37"/>' +
          '<path d="M 101 177 Q 103 186 108 194 L 113 191 Q 108 184 106 177 Z" fill="' + shade("#d94f37", 0.2) + '"/>'
        : '<path d="M 76 136 L 94 162 L 90 166 L 72 138 Z" fill="' + shade("#f6efe3", 0.15) + '"/>' +
          '<path d="M 124 136 L 102 172 L 94 165 L 114 134 Z" fill="#f6efe3"/>' +
          '<path d="M 94 168 L 108 168 L 107 177 L 95 177 Z" fill="#d94f37"/>' +
          '<path d="M 106 177 Q 109 188 106 199 L 100 199 Q 102 188 101 177 Z" fill="#d94f37"/>' +
          '<path d="M 99 177 Q 97 186 92 194 L 87 191 Q 92 184 94 177 Z" fill="' + shade("#d94f37", 0.2) + '"/>';
    }
  } else if (cfg.variant === "hwarang") {
    // 화랑(신라 청년): 상투 + 이마 머리띠 + 꽃 장식 + 분 바른 얼굴(볼연지).
    // ⚠ 갓·도포는 조선 문법이라 삼국 씬에 쓰지 않는다 — 복식은 삼국 저고리(엉덩이 길이)+허리띠+바지.
    // 상투는 정수리 '중앙 단일 매스'로 — 좌우 쌍 돌기는 귀로 읽히는 지뢰(사모 각 사례).
    var bandC = cfg.band || "#8e3b7a";
    hat =
      '<g class="hat">' +
      '<path d="M 44 84 Q 40 26 100 24 Q 160 26 156 84 Q 148 56 100 52 Q 52 56 44 84 Z" fill="#241c14"/>' +
      '<path d="M 84 40 Q 84 26 100 26 Q 116 26 116 40 Z" fill="#241c14"/>' +
      '<ellipse cx="100" cy="18" rx="22" ry="17" fill="#241c14"/>' +
      '<ellipse cx="100" cy="13" rx="13" ry="9" fill="#3a2c1f"/>' +
      // 머리띠(건) — 이마를 두르는 가로 밴드 + 아래 셰이드
      '<path d="M 44 62 Q 100 40 156 62 L 154 82 Q 100 58 46 82 Z" fill="' + bandC + '"/>' +
      '<path d="M 45 72 Q 100 48 155 72 L 154 82 Q 100 58 46 82 Z" fill="' + shade(bandC, 0.3) + '"/>' +
      // ⚠ 꽃 장식(花郞의 이름 반영 양식화)은 S8 블라인드 2회에서 '여성 오독'의 단일 원인으로
      // 지목돼 제거했다. 사료(粧飾之·傅粉)가 말하는 것은 '분과 단장'이지 머리 꽃이 아니다.
      // 곱게 꾸민 표현은 볼연지(faceDetail)+머리띠+화려한 저고리 색이 담당한다.
      "</g>";
    // 분(粉)을 바른 얼굴 — 볼연지 2점. 『신라국기』 傅粉粧飾之의 화면 근거
    faceDetail =
      '<ellipse cx="68" cy="102" rx="14" ry="9" fill="#e0806f" opacity="0.42"/>' +
      '<ellipse cx="132" cy="102" rx="14" ry="9" fill="#e0806f" opacity="0.42"/>';
    // 저고리 교차 깃(여밈은 flip-인지형 — 우임 유지, EP.13 S8) + 허리띠(대)
    torsoDetail =
      (cfg.flip
        ? '<path d="M 124 136 L 106 160 L 110 164 L 128 138 Z" fill="' + shade("#f6efe3", 0.15) + '"/>' +
          '<path d="M 76 136 L 98 170 L 106 163 L 86 134 Z" fill="#f6efe3"/>'
        : '<path d="M 76 136 L 94 160 L 90 164 L 72 138 Z" fill="' + shade("#f6efe3", 0.15) + '"/>' +
          '<path d="M 124 136 L 102 170 L 94 163 L 114 134 Z" fill="#f6efe3"/>') +
      '<path d="M 53 178 L 147 178 L 148 193 L 52 193 Z" fill="' + bandC + '"/>' +
      '<path d="M 53 178 L 147 178 L 147 184 L 53 184 Z" fill="' + shade(bandC, 0.32) + '"/>' +
      '<rect x="91" y="176" width="18" height="19" rx="3" fill="#e8b74a"/>';
    cuff = cfg.cuff || "#f2e6d0";
  } else if (cfg.variant === "lady") {
    // 여성(치마저고리): 쪽진머리+비녀+가르마, 짧은 저고리+긴 A라인 치마.
    // 위로 솟는 머리 장식은 귀로 읽히는 지뢰 — 쪽은 옆-아래에 낮게, 비녀는 수평.
    var hairC = "#241c14", hairLine = "#0f0b07";
    var skirtC = cfg.skirt || pants;
    var gorC = cfg.royal ? "#e8b74a" : "#d94f37";
    hat =
      '<g class="hat">' +
      '<path d="M 42 88 Q 38 26 100 24 Q 162 26 158 88 Q 154 56 100 50 Q 46 56 42 88 Z" fill="' + hairC + '"/>' +
      '<path d="M 100 25 L 100 50" stroke="' + hairLine + '" stroke-width="3"/>' +
      '<path d="M 42 88 Q 42 104 50 112 L 57 107 Q 50 98 49 84 Z" fill="' + hairC + '"/>' +
      '<path d="M 158 88 Q 158 104 150 112 L 143 107 Q 150 98 151 84 Z" fill="' + hairC + '"/>' +
      // 쪽(낮은 옆머리)만 — 비녀 돌출부는 flip 시 턱선에서 담뱃대로 오독돼 제거(EP.5 S8 검수). 쪽+한복으로 여성 판독 충분.
      '<ellipse cx="152" cy="116" rx="13" ry="10" fill="' + hairC + '"/>' +
      (cfg.royal
        ? '<path d="M 84 30 Q 100 20 116 30 L 112 44 Q 100 38 88 44 Z" fill="#171412"/>' +
          '<circle cx="100" cy="31" r="5" fill="#d94f37"/>' +
          '<path d="M 62 46 Q 100 34 138 46" stroke="#e8b74a" stroke-width="4" fill="none"/>'
        : "") +
      "</g>";
    // 저고리(짧음 — 허리 177에서 끝) + 옆 셰이드
    body =
      '<path d="M 64 143 Q 76 134 100 134 Q 124 134 136 143 Q 144 149 146 161 L 147 170 Q 148 177 139 177 L 61 177 Q 52 177 53 170 L 54 161 Q 56 149 64 143 Z" fill="' + shirt + '"/>' +
      '<path d="M 128 137 Q 140 146 142 160 L 144 177 L 134 177 Q 137 158 128 137 Z" fill="' + shirtSh + '"/>';
    // 동정(흰 V깃) + 옷고름 리본 (+왕비: 금박 단)
    torsoDetail =
      '<path d="M 120 137 L 102 156 L 98 152 L 112 135 Z" fill="' + shade("#f6efe3", 0.15) + '"/>' +
      '<path d="M 80 137 L 100 158 L 104 153 L 88 135 Z" fill="#f6efe3"/>' +
      '<path d="M 95 156 L 107 156 L 106 163 L 96 163 Z" fill="' + gorC + '"/>' +
      '<path d="M 97 163 Q 94 170 96 176 L 102 176 Q 100 169 101 163 Z" fill="' + gorC + '"/>' +
      '<path d="M 103 163 Q 106 168 110 173 L 114 170 Q 110 166 108 163 Z" fill="' + shade(gorC, 0.25) + '"/>' +
      (cfg.royal
        ? '<path d="M 53 170 L 147 170 L 147 177 L 53 177 Z" fill="#e8b74a"/>' +
          '<circle cx="72" cy="158" r="3" fill="#e8b74a"/><circle cx="128" cy="158" r="3" fill="#e8b74a"/>'
        : "");
    // 치마: A라인 풀기장(다리 대체) + 옆 셰이드 + 꽃신 코
    legs =
      '<path d="M 70 168 Q 62 200 55 226 Q 54 232 61 232 L 139 232 Q 146 232 145 226 Q 138 200 130 168 Z" fill="' + skirtC + '"/>' +
      '<path d="M 116 170 Q 123 200 133 231 L 144 231 Q 138 200 130 168 Z" fill="' + shade(skirtC, 0.25) + '"/>' +
      '<path d="M 84 231 Q 84 225 91 225 Q 98 225 98 231 Z" fill="#d94f37"/>' +
      '<path d="M 103 231 Q 103 225 110 225 Q 117 225 117 231 Z" fill="#d94f37"/>';
    cuff = cfg.royal ? "#e8b74a" : "#d94f37"; // 끝동
  } else if (cfg.variant === "kid") {
    // 아이: 바가지머리+가르마+댕기 땋은 머리(어깨 앞) + 색동 소매. 배치 시 w를 어른의 0.6~0.7배로.
    hat =
      '<g class="hat">' +
      '<path d="M 44 80 Q 40 28 100 26 Q 160 28 156 80 Q 148 54 100 52 Q 52 54 44 80 Z" fill="#241c14"/>' +
      '<path d="M 100 27 L 100 52" stroke="#0f0b07" stroke-width="3"/>' +
      '<ellipse cx="152" cy="100" rx="9" ry="12" fill="#241c14"/>' +
      '<ellipse cx="156" cy="122" rx="8" ry="11" fill="#241c14"/>' +
      '<ellipse cx="159" cy="142" rx="7" ry="10" fill="#241c14"/>' +
      '<path d="M 154 150 L 166 148 L 165 168 L 155 169 Z" fill="#d94f37"/>' +
      "</g>";
    // 색동 소매 띠 — .arm 그룹 내부라 팔 회전에 동기
    armDetailL =
      '<path d="M 52 150 L 68 150 L 68 158 L 52 158 Z" fill="#e8b74a"/>' +
      '<path d="M 52 160 L 69 160 L 69 168 L 52 168 Z" fill="#d94f37"/>' +
      '<path d="M 52 170 L 69 170 L 70 178 L 53 178 Z" fill="#3a7ca5"/>';
    armDetailR =
      '<path d="M 132 150 L 148 150 L 148 158 L 132 158 Z" fill="#e8b74a"/>' +
      '<path d="M 131 160 L 148 160 L 148 168 L 131 168 Z" fill="#d94f37"/>' +
      '<path d="M 130 170 L 148 170 L 147 178 L 130 178 Z" fill="#3a7ca5"/>';
    // 옷고름
    torsoDetail =
      '<path d="M 80 137 L 100 158 L 104 153 L 88 135 Z" fill="#f6efe3"/>' +
      '<path d="M 95 156 L 107 156 L 106 163 L 96 163 Z" fill="#d94f37"/>' +
      '<path d="M 97 163 Q 94 172 96 180 L 102 180 Q 100 171 101 163 Z" fill="#d94f37"/>';
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

  // 기본 하체(바지+신)·상체 — variant가 치마/저고리로 교체하지 않았을 때
  if (legs == null) {
    legs =
      '<path d="M 71 188 Q 68 206 70 224 L 94 224 Q 96 206 93 188 Z" fill="' + pants + '"/>' +
      '<path d="M 85 188 Q 86 206 87 224 L 94 224 Q 96 206 93 188 Z" fill="' + pantsSh + '"/>' +
      '<path d="M 107 188 Q 104 206 106 224 L 130 224 Q 132 206 129 188 Z" fill="' + pants + '"/>' +
      '<path d="M 107 188 Q 104 206 106 224 L 113 224 Q 114 206 115 188 Z" fill="' + pantsSh + '"/>' +
      '<path d="M 64 227 Q 64 233 71 234 L 92 234 Q 98 233 97 226 Q 95 219 87 220 L 73 221 Q 65 221 64 227 Z" fill="#171412"/>' +
      '<path d="M 136 227 Q 136 233 129 234 L 108 234 Q 102 233 103 226 Q 105 219 113 220 L 127 221 Q 135 221 136 227 Z" fill="#171412"/>';
  }
  if (body == null) {
    body =
      '<path d="M 64 143 Q 76 134 100 134 Q 124 134 136 143 Q 144 149 145 163 L 148 194 Q 149 202 140 202 L 60 202 Q 51 202 52 194 L 55 163 Q 56 149 64 143 Z" fill="' + shirt + '"/>' +
      '<path d="M 128 137 Q 140 146 142 162 L 145 202 L 135 202 Q 138 168 128 137 Z" fill="' + shirtSh + '"/>';
  }

  return (
    '<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">' +
    '<ellipse cx="100" cy="232" rx="52" ry="7" fill="#1f2d45" opacity="0.12"/>' +
    // legs (or 치마) — variant별
    legs +
    // arms (rotate at shoulder — cap stays round around the pivot)
    '<g class="arm-l">' +
    '<path d="M 52 149 Q 51 143 60 142 Q 69 143 68 149 L 70 183 Q 70 189 60 190 Q 51 189 51 183 Z" fill="' + shirt + '"/>' +
    '<path d="M 63 143 Q 68 145 68 150 L 70 183 Q 70 187 66 188 Q 67 165 63 143 Z" fill="' + shirtSh + '"/>' +
    armDetailL +
    '<path d="M 51 181 L 70 181 L 70 184 Q 70 190 60 190 Q 51 190 51 184 Z" fill="' + cuff + '"/>' +
    '<path d="M 49 198 Q 48 207 55 211 Q 62 214 68 209 Q 72 204 70 197 Q 67 189 59 189 Q 51 190 49 198 Z" fill="' + skin + '"/>' +
    "</g>" +
    '<g class="arm-r">' +
    '<path d="M 148 149 Q 149 143 140 142 Q 131 143 132 149 L 130 183 Q 130 189 140 190 Q 149 189 149 183 Z" fill="' + shirt + '"/>' +
    '<path d="M 137 143 Q 132 145 132 150 L 130 183 Q 130 187 134 188 Q 133 165 137 143 Z" fill="' + shirtSh + '"/>' +
    armDetailR +
    '<path d="M 149 181 L 130 181 L 130 184 Q 130 190 140 190 Q 149 190 149 184 Z" fill="' + cuff + '"/>' +
    '<path d="M 151 198 Q 152 207 145 211 Q 138 214 132 209 Q 128 204 130 197 Q 133 189 141 189 Q 149 190 151 198 Z" fill="' + skin + '"/>' +
    "</g>" +
    // body: sloped shoulders + side shade + variant costume
    body +
    torsoDetail +
    // head
    '<g class="head" style="transform-origin:100px 120px">' +
    '<circle cx="100" cy="82" r="58" fill="' + skin + '"/>' +
    '<path d="M 56 120 A 58 58 0 0 0 144 120 Q 122 133 100 133 Q 78 133 56 120 Z" fill="' + skinSh + '"/>' +
    faceDetail +
    (cfg.noHat ? wrapTf(hat, TU && TU.hat, 72) : wrapTf(hat, TU && TU.hat, 48)) +
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
  proud: { eye: "eye-open", mouth: "m-smile", browY: -4, browRotL: 0, browRotR: 0 },
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
