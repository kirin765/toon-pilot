#!/usr/bin/env python3
# EP.8 명량 — index.html 생성기.
# 판옥선(sp9 검증 자산)을 씬마다 키만 바꿔 재사용하므로 손복붙 대신 조립한다.
from pathlib import Path

ROOT = Path("/Users/kiwankim/projects/misc/toon-pilot")


def ship(key, style, w=970, h=1280, sail=True, flag=None, flip=False):
    """판옥선 — bench/sp9 검증 자산. 개방 상갑판 + 장대 누각 + 방패판 띠.
    거북선 시그니처(철갑 지붕·용두) 없음 — 명량 거북선 참전은 우리역사넷이 부정(factcheck §S6-1)."""
    tf = ' transform="scale(-1,1) translate(-970,0)"' if flip else ""
    sail_g = f'''
    <g data-obj="{key}-sail">
      <rect x="0" y="130" width="272" height="16" rx="6" fill="#4a2f19"/>
      <path d="M 12 150 L 260 150 L 278 358 L 2 358 Z" fill="#e3d8c0"/>
      <path d="M 226 150 L 260 150 L 278 358 L 240 358 Q 240 250 226 150 Z" fill="#c2b795"/>
      <path d="M 8 198 L 266 198" stroke="#8a7048" stroke-width="5"/>
      <path d="M 6 244 L 270 244" stroke="#8a7048" stroke-width="5"/>
      <path d="M 4 290 L 273 290" stroke="#8a7048" stroke-width="5"/>
      <path d="M 3 334 L 276 334" stroke="#8a7048" stroke-width="5"/>
    </g>
    <g data-obj="{key}-mast">
      <rect x="102" y="118" width="18" height="590" fill="#4a2f19"/>
      <rect x="112" y="118" width="6" height="590" fill="#33200f"/>
      <ellipse cx="111" cy="116" rx="14" ry="7" fill="#33200f"/>
    </g>''' if sail else ""

    flag_g = ""
    if flag:
        flag_g = f'''
    <g data-obj="{key}-flag">
      <rect x="479" y="90" width="12" height="146" fill="#4a2f19"/>
      <circle cx="485" cy="86" r="8" fill="#33200f"/>
      <path d="M 491 96 Q 600 88 704 104 L 699 208 Q 596 194 491 202 Z" fill="#f6efe3"/>
      <path d="M 682 101 L 704 104 L 699 208 L 677 205 Q 684 154 682 101 Z" fill="#d94f37"/>
      <path d="M 491 96 Q 496 150 491 202 L 503 201 Q 507 149 503 97 Z" fill="#d9cfc0"/>
      <text x="585" y="182" text-anchor="middle" font-family="Jua, serif" font-size="86" fill="#26221c">{flag}</text>
    </g>'''

    panels = "\n      ".join(
        f'<rect x="{44 + i * 56}" y="750" width="46" height="124" fill="{"#8a5a33" if i % 2 == 0 else "#7c5230"}"/>'
        for i in range(16)
    )
    oar_holes = "\n      ".join(
        f'<rect x="{262 + i * 140}" y="878" width="34" height="18" rx="6" fill="#33200f"/>' for i in range(5)
    )
    oar_shafts = "\n      ".join(
        f'<path d="M {272 + i * 140} 886 L {138 + i * 140} 1136 L {152 + i * 140} 1146 L {288 + i * 140} 894 Z" fill="#8a5a33"/>'
        for i in range(5)
    )
    oar_blades = "\n      ".join(
        f'<ellipse cx="{138 + i * 140}" cy="1152" rx="30" ry="14" transform="rotate(-32 {138 + i * 140} 1152)" fill="#6d4526"/>'
        for i in range(5)
    )

    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 970 1280">
    <g{tf}>{sail_g}
    <g data-obj="{key}-back-rail">
      <rect x="60" y="648" width="850" height="52" fill="#7c5230"/>
      <rect x="60" y="640" width="850" height="12" fill="#4a2f19"/>
      <rect x="140" y="652" width="8" height="48" fill="#5a3a20"/>
      <rect x="300" y="652" width="8" height="48" fill="#5a3a20"/>
      <rect x="460" y="652" width="8" height="48" fill="#5a3a20"/>
      <rect x="700" y="652" width="8" height="48" fill="#5a3a20"/>
      <rect x="860" y="652" width="8" height="48" fill="#5a3a20"/>
    </g>
    <g data-obj="{key}-tower">
      <g data-obj="{key}-tower-posts">
        <rect x="405" y="392" width="22" height="313" fill="#4a2f19"/>
        <rect x="545" y="392" width="22" height="313" fill="#4a2f19"/>
        <rect x="415" y="392" width="6" height="313" fill="#33200f"/>
        <rect x="555" y="392" width="6" height="313" fill="#33200f"/>
      </g>
      <g data-obj="{key}-tower-platform">
        <rect x="370" y="368" width="230" height="26" fill="#8a5a33"/>
        <rect x="370" y="384" width="230" height="10" fill="#4a2f19"/>
      </g>
      <g data-obj="{key}-tower-rail">
        <rect x="372" y="322" width="226" height="12" fill="#6d4526"/>
        <rect x="384" y="332" width="8" height="38" fill="#5a3a20"/>
        <rect x="446" y="332" width="8" height="38" fill="#5a3a20"/>
        <rect x="516" y="332" width="8" height="38" fill="#5a3a20"/>
        <rect x="578" y="332" width="8" height="38" fill="#5a3a20"/>
      </g>
      <g data-obj="{key}-tower-roof">
        <path d="M 337 320 Q 348 310 362 306 L 442 240 L 528 240 L 608 306 Q 622 310 633 320 Q 570 306 485 305 Q 400 306 337 320 Z" fill="#3f4652"/>
        <rect x="428" y="230" width="114" height="16" rx="7" fill="#2b303a"/>
        <path d="M 348 314 Q 485 298 622 314 L 620 320 Q 485 306 350 320 Z" fill="#2b303a"/>
      </g>
    </g>{flag_g}
    <g data-obj="{key}-deck">
      <path d="M 30 744 L 30 704 Q 480 686 940 704 L 940 744 Q 480 726 30 744 Z" fill="#a8804a"/>
      <path d="M 30 704 Q 480 686 940 704 L 940 712 Q 480 694 30 712 Z" fill="#c9ad7c"/>
      <path d="M 30 736 Q 480 718 940 736 L 940 744 Q 480 726 30 744 Z" fill="#6d4f26"/>
    </g>
    <g data-obj="{key}-shield-band">
      <rect x="30" y="740" width="910" height="140" fill="#4a2f19"/>
      <rect x="30" y="738" width="910" height="14" fill="#6d4526"/>
      {panels}
    </g>
    <g data-obj="{key}-hull">
      <path d="M 34 876 L 936 876 L 946 906 Q 938 1000 880 1090 Q 830 1140 700 1152 Q 480 1162 300 1150 Q 170 1138 115 1080 Q 45 990 30 906 Z" fill="#6d4526"/>
      <path d="M 34 876 L 936 876 L 941 894 L 38 894 Z" fill="#8a5a33"/>
      <path d="M 44 950 Q 480 976 932 948" stroke="#4a2f19" stroke-width="7" fill="none" opacity="0.8"/>
      <path d="M 70 1020 Q 480 1050 908 1018" stroke="#4a2f19" stroke-width="7" fill="none" opacity="0.8"/>
      <path d="M 120 1090 Q 480 1122 858 1088" stroke="#4a2f19" stroke-width="6" fill="none" opacity="0.7"/>
    </g>
    <g data-obj="{key}-bow-stem">
      <rect x="38" y="648" width="24" height="234" fill="#8a5a33"/>
      <rect x="52" y="648" width="10" height="234" fill="#5a3a20"/>
      <ellipse cx="50" cy="646" rx="16" ry="8" fill="#4a2f19"/>
      <rect x="908" y="648" width="24" height="234" fill="#8a5a33"/>
      <rect x="908" y="648" width="10" height="234" fill="#5a3a20"/>
      <ellipse cx="920" cy="646" rx="16" ry="8" fill="#4a2f19"/>
    </g>
    <g data-obj="{key}-oars">
      {oar_holes}
      {oar_shafts}
      {oar_blades}
    </g>
    </g>
  </svg>'''


def enemy_fleet(key, style, vb_w, vb_h, ships, dark="#2f4356", light="#3f5870"):
    """적 함대(세키부네) 실루엣 — 판옥선보다 '작고 낮게'(F10).
    왜군 인물은 그리지 않는다(외국인 복식 카탈로그 ❌ — factcheck §S6-4).
    세키부네 시그니처: 낮고 긴 선체 + 단일 사각돛 + 얕은 흘수. 판옥선의 장대 누각·방패판 띠 없음."""
    parts = []
    for i, (x, y, s) in enumerate(ships):
        parts.append(f'''    <g data-obj="{key}-{i}" transform="translate({x} {y}) scale({s})">
      <rect x="30" y="4" width="7" height="56" fill="{dark}"/>
      <path d="M 37 10 L 84 14 L 84 54 L 37 58 Z" fill="{light}"/>
      <path d="M 0 60 L 108 60 L 100 84 Q 54 92 8 84 Z" fill="{dark}"/>
      <path d="M 0 60 L 108 60 L 106 67 L 2 67 Z" fill="{light}"/>
    </g>''')
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 {vb_w} {vb_h}">
{chr(10).join(parts)}
  </svg>'''


def waves(key, bottom, color="#215973", width=9, opacity=0.85, h=100):
    d = ("M 0 50 Q 60 22 120 50 Q 180 78 240 50 Q 300 22 360 50 Q 420 78 480 50 "
         "Q 540 22 600 50 Q 660 78 720 50 Q 780 22 840 50 Q 900 78 960 50 "
         "Q 1020 22 1080 50 Q 1140 78 1200 50")
    return (f'<svg class="prop" data-adj="{key}" style="left:-60px; bottom:{bottom}px; width:1200px; height:{h}px;" '
            f'viewBox="0 0 1200 100">\n'
            f'    <path d="{d}" stroke="{color}" stroke-width="{width}" fill="none" opacity="{opacity}"/>\n  </svg>')


def cloud(key, style, big=True):
    d = ("M 16 64 Q 0 34 37 26 Q 44 6 76 14 Q 98 -4 122 14 Q 156 8 156 36 Q 176 42 164 62 "
         "Q 170 76 148 76 L 32 76 Q 4 76 16 64 Z") if big else (
        "M 10 50 Q 0 24 27 20 Q 34 4 55 10 Q 72 -4 90 10 Q 118 4 118 26 Q 136 32 124 48 "
        "Q 128 58 108 58 L 24 58 Q 2 58 10 50 Z")
    vb = "0 0 180 85" if big else "0 0 140 65"
    return (f'<svg class="prop" data-adj="{key}" style="{style}" viewBox="{vb}">\n'
            f'    <g data-obj="{key}-body"><path d="{d}" fill="#f6efe3"/></g>\n  </svg>')


def gull(key, style):
    return (f'<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 40 14">\n'
            f'    <path d="M 0 14 Q 10 0 20 14 Q 30 0 40 14" stroke="#26221c" stroke-width="3" fill="none" stroke-linecap="round"/>\n  </svg>')


def headland(key, style, side, fill="#3f5648", shade="#2b3d31"):
    """울돌목 곶 — 최협부 300m의 좁은 수로를 만드는 양쪽 육지(F2). 2톤 + 소나무."""
    if side == "left":
        body = ('<path d="M 0 300 L 0 60 Q 90 20 170 74 Q 240 120 300 190 L 300 300 Z" fill="%s"/>'
                '<path d="M 0 300 L 0 200 Q 130 210 300 262 L 300 300 Z" fill="%s"/>' % (fill, shade))
        pines = ('<polygon points="70,66 56,116 86,116" fill="#24352a"/>'
                 '<polygon points="120,88 107,132 134,132" fill="#24352a"/>')
    else:
        body = ('<path d="M 300 300 L 300 60 Q 210 20 130 74 Q 60 120 0 190 L 0 300 Z" fill="%s"/>'
                '<path d="M 300 300 L 300 200 Q 170 210 0 262 L 0 300 Z" fill="%s"/>' % (fill, shade))
        pines = ('<polygon points="230,66 216,116 246,116" fill="#24352a"/>'
                 '<polygon points="180,88 167,132 194,132" fill="#24352a"/>')
    return (f'<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 300 300">\n'
            f'    <g data-obj="{key}-body">{body}</g>\n'
            f'    <g data-obj="{key}-pines">{pines}</g>\n  </svg>')


def diary(key, style, lines_right, lines_left, accent=None):
    """난중일기 — 펼친 한국 서책(선장본). 좌우 면 + 가운데 접힘 + 세로 붓글씨 획.
    시그니처: 세로쓰기 획 + 오침안정법 실 매듭(우측 등). 서양 책(가로쓰기·양장)과의 갈림선."""
    def strokes(x0, n, tone="#4a5560"):
        out = []
        for i in range(n):
            x = x0 + i * 46
            out.append(f'<rect x="{x}" y="60" width="7" height="{200 + (i % 3) * 40}" rx="3" fill="{tone}"/>')
            out.append(f'<rect x="{x - 9}" y="{96 + (i % 4) * 34}" width="25" height="6" rx="3" fill="{tone}"/>')
            out.append(f'<rect x="{x - 7}" y="{188 + (i % 3) * 46}" width="21" height="6" rx="3" fill="{tone}"/>')
        return "".join(out)

    acc = ""
    if accent:
        acc = (f'<rect x="{accent}" y="52" width="86" height="300" rx="10" fill="#f4e2b8" opacity="0.9"/>')

    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 760 420">
    <g data-obj="{key}-pages">
      <path d="M 12 24 Q 380 6 748 24 L 748 396 Q 380 414 12 396 Z" fill="#f0e6d2"/>
      <path d="M 12 24 Q 380 6 748 24 L 748 40 Q 380 22 12 40 Z" fill="#fdf7e8"/>
      <path d="M 12 380 Q 380 398 748 380 L 748 396 Q 380 414 12 396 Z" fill="#d8caae"/>
    </g>
    <g data-obj="{key}-spine">
      <rect x="372" y="14" width="16" height="392" fill="#c9b895"/>
      <rect x="378" y="14" width="5" height="392" fill="#a8946e"/>
    </g>
    <g data-obj="{key}-accent">{acc}</g>
    <g data-obj="{key}-text-r">{strokes(430, lines_right)}</g>
    <g data-obj="{key}-text-l">{strokes(60, lines_left)}</g>
    <g data-obj="{key}-binding">
      <rect x="716" y="30" width="6" height="360" fill="#8a7048"/>
      <circle cx="719" cy="80" r="7" fill="#4a2f19"/>
      <circle cx="719" cy="170" r="7" fill="#4a2f19"/>
      <circle cx="719" cy="260" r="7" fill="#4a2f19"/>
      <circle cx="719" cy="350" r="7" fill="#4a2f19"/>
    </g>
  </svg>'''


print("helpers loaded")


def deck(key, top_y=1360, rail=True):
    """전경 = 대장선 갑판. 바다 씬의 인물은 전부 이 위에 선다.
    물 밴드 위에 인물을 세우면 '물에 빠진 사람'으로 읽힌다(bench it3 모내기 참사) — 구조적 차단."""
    h = 1920 - top_y
    panels = "".join(
        f'<rect x="{20 + i * 100}" y="6" width="80" height="76" fill="{"#8a5a33" if i % 2 == 0 else "#7c5230"}"/>'
        for i in range(11)
    )
    planks = "".join(f'<path d="M 0 {150 + i * 78} L 1080 {150 + i * 78}" stroke="#8a6a3c" stroke-width="5" opacity="0.6"/>'
                     for i in range(5))
    rail_g = f'''<g data-obj="{key}-rail">
      <rect x="0" y="0" width="1080" height="10" fill="#4a2f19"/>
      {panels}
      <rect x="0" y="82" width="1080" height="14" fill="#4a2f19"/>
    </g>''' if rail else ""
    return f'''<svg class="prop" data-adj="{key}" style="left:0; bottom:0; width:1080px; height:{h}px;" viewBox="0 0 1080 {h}">
    {rail_g}
    <g data-obj="{key}-floor">
      <rect x="0" y="96" width="1080" height="{h - 96}" fill="#a8804a"/>
      <rect x="0" y="96" width="1080" height="18" fill="#c9ad7c"/>
      {planks}
    </g>
  </svg>'''


def shore(key, top_y=1360):
    """전경 = 바위 곶(뭍). 해설(host) 씬에서 시청자가 울돌목을 바라보는 자리."""
    h = 1920 - top_y
    rocks = "".join(
        f'<ellipse cx="{70 + i * 155}" cy="{26 + (i % 3) * 12}" rx="{62 + (i % 2) * 18}" ry="26" fill="#5c6b5a"/>'
        for i in range(8)
    )
    return f'''<svg class="prop" data-adj="{key}" style="left:0; bottom:0; width:1080px; height:{h}px;" viewBox="0 0 1080 {h}">
    <g data-obj="{key}-edge">{rocks}</g>
    <g data-obj="{key}-body">
      <rect x="0" y="24" width="1080" height="{h - 24}" fill="#4a5748"/>
      <rect x="0" y="24" width="1080" height="16" fill="#6b7a67"/>
      <path d="M 0 120 Q 300 104 620 124 Q 860 138 1080 118" stroke="#3a4639" stroke-width="7" fill="none"/>
      <path d="M 0 240 Q 340 226 700 246 Q 900 256 1080 240" stroke="#3a4639" stroke-width="6" fill="none" opacity="0.8"/>
    </g>
  </svg>'''


def sea_stack(prefix, haze_b=1150, far_b=880, far_h=270, near_b=560, near_h=320,
              haze="#c9e6ef", far="#6f9fc0", near="#3a7ca5"):
    """수평선 헤이즈 + 바다 원경/근경 2톤. sp9 검증 배색."""
    return f'''<div class="prop" data-adj="{prefix}-haze" style="left:0; bottom:{haze_b}px; width:1080px; height:110px; background:{haze};"></div>
  <div class="prop" data-adj="{prefix}-water-far" style="left:0; bottom:{far_b}px; width:1080px; height:{far_h}px; background:{far};"></div>
  <div class="prop" data-adj="{prefix}-water-near" style="left:0; bottom:{near_b}px; width:1080px; height:{near_h}px; background:{near};"></div>'''


def cannon_blast(key, style):
    """총통 화염 + 연기 — 화포 발사. 회오리 금지(영화 창작), 화염은 포구에서만."""
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 420 260">
    <g data-obj="{key}-smoke">
      <ellipse cx="120" cy="140" rx="86" ry="62" fill="#e8eef2" opacity="0.92"/>
      <ellipse cx="216" cy="112" rx="66" ry="50" fill="#e8eef2" opacity="0.85"/>
      <ellipse cx="292" cy="146" rx="52" ry="40" fill="#dbe4ea" opacity="0.78"/>
      <ellipse cx="60" cy="176" rx="48" ry="34" fill="#dbe4ea" opacity="0.7"/>
    </g>
    <g data-obj="{key}-flame">
      <path d="M 0 140 L 96 96 L 78 140 L 122 132 L 70 190 L 84 148 Z" fill="#e8b74a"/>
      <path d="M 8 142 L 74 112 L 62 142 L 92 138 L 56 176 L 66 148 Z" fill="#d94f37"/>
    </g>
  </svg>'''


def cannon(key, style):
    """조선 총통(화포) — 청동 + 녹청(카탈로그 표: 갈색 단색 금지).
    시그니처 = **죽절(竹節) 마디** — 대나무 마디처럼 포신을 감는 융기 밴드. 조선 총통의 결정적 식별자이고
    서양 대포·통나무와의 갈림선이다. 포신이 포가보다 확실히 길고 굵어야 한다 —
    포신과 포가가 같은 길이면 '통나무 실은 수레'로 읽힌다(S6.4 1차 적발)."""
    # 죽절 5개 — 포미(굵음) → 포구(가늘음)로 테이퍼
    nodes = "".join(
        f'<rect x="{104 + i * 62}" y="{44 - i * 2}" width="17" height="{62 + (4 - i) * 4}" rx="6" fill="#7c6430"/>'
        f'<rect x="{104 + i * 62}" y="{44 - i * 2}" width="17" height="9" rx="4" fill="#c2a24e"/>'
        for i in range(5)
    )
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 460 200">
    <g data-obj="{key}-carriage">
      <path d="M 96 132 L 268 132 L 280 172 L 84 172 Z" fill="#6d4526"/>
      <path d="M 96 132 L 268 132 L 270 143 L 94 143 Z" fill="#8a5a33"/>
      <rect x="84" y="168" width="196" height="14" rx="6" fill="#4a2f19"/>
      <path d="M 120 132 L 150 96 L 168 96 L 138 132 Z" fill="#5a3a20"/>
      <path d="M 236 132 L 206 96 L 224 96 L 254 132 Z" fill="#5a3a20"/>
    </g>
    <g data-obj="{key}-barrel">
      <path d="M 62 40 L 404 58 L 404 106 L 62 124 Z" fill="#9a7d3c"/>
      <path d="M 62 40 L 404 58 L 404 70 L 62 56 Z" fill="#c2a24e"/>
      <path d="M 62 112 L 404 98 L 404 106 L 62 124 Z" fill="#7c6430"/>
      {nodes}
      <path d="M 62 34 Q 34 82 62 130 Q 84 82 62 34 Z" fill="#7c6430"/>
      <circle cx="52" cy="82" r="13" fill="#5f4d24"/>
      <path d="M 400 52 L 436 56 L 436 108 L 400 112 Z" fill="#7c6430"/>
      <ellipse cx="436" cy="82" rx="9" ry="26" fill="#2b2e36"/>
      <path d="M 96 66 Q 240 84 396 74" stroke="#4f8f7a" stroke-width="7" fill="none" opacity="0.85"/>
      <ellipse cx="150" cy="108" rx="20" ry="8" fill="#4f8f7a" opacity="0.7"/>
      <ellipse cx="308" cy="98" rx="15" ry="6" fill="#4f8f7a" opacity="0.6"/>
    </g>
  </svg>'''


def signal_flag(key, style, glyph):
    """초요기(招搖旗) — 장수 호출 신호기. sp9 수자기 형태 재사용, 글자만 교체."""
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 320 620">
    <g data-obj="{key}-pole">
      <rect x="18" y="40" width="16" height="580" fill="#4a2f19"/>
      <rect x="28" y="40" width="6" height="580" fill="#33200f"/>
      <circle cx="26" cy="34" r="12" fill="#33200f"/>
    </g>
    <g data-obj="{key}-cloth">
      <path d="M 34 56 Q 168 46 300 66 L 294 226 Q 164 208 34 218 Z" fill="#f6efe3"/>
      <path d="M 276 63 L 300 66 L 294 226 L 270 223 Q 279 143 276 63 Z" fill="#d94f37"/>
      <path d="M 34 56 Q 40 137 34 218 L 48 217 Q 54 136 48 58 Z" fill="#d9cfc0"/>
      <text x="166" y="176" text-anchor="middle" font-family="Jua, serif" font-size="118" fill="#26221c">{glyph}</text>
    </g>
  </svg>'''


def current_arrows(key, style):
    """조류 유향 — 화살표 + 물결. 회오리(영화 창작) 금지, 방향만 표시(F25 조류 반전)."""
    rows = []
    for i, (y, o) in enumerate([(24, 0.95), (76, 0.8), (128, 0.65)]):
        rows.append(f'''<g data-obj="{key}-{i}">
      <rect x="0" y="{y}" width="300" height="12" rx="6" fill="#c9e6ef" opacity="{o}"/>
      <path d="M 300 {y - 14} L 356 {y + 6} L 300 {y + 26} Z" fill="#c9e6ef" opacity="{o}"/>
    </g>''')
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 360 160">
    {"".join(rows)}
  </svg>'''


def moon(key, style):
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 140 140">
    <circle cx="70" cy="70" r="62" fill="#f4ecc8"/>
    <path d="M 98 19 A 62 62 0 0 1 98 121 A 80 80 0 0 0 98 19 Z" fill="#ddd2a4"/>
    <circle cx="52" cy="54" r="9" fill="#e6dcb2"/>
    <circle cx="82" cy="92" r="7" fill="#e6dcb2"/>
  </svg>'''


print("part2 loaded")


def retreat_fleet(key, style, vb_w, vb_h, ships, dark="#4a5f70", light="#5f7686"):
    """멀리 물러나 관망하는 아군 판옥선 무리 — 「退在遠海觀望不進」(F9).
    판옥선 시그니처(장대 누각)를 실루엣으로만 남겨 적선(세키부네)과 구분한다."""
    parts = []
    for i, (x, y, s) in enumerate(ships):
        parts.append(f'''    <g data-obj="{key}-{i}" transform="translate({x} {y}) scale({s})">
      <rect x="52" y="0" width="6" height="30" fill="{dark}"/>
      <path d="M 30 30 L 82 30 L 74 12 L 38 12 Z" fill="{dark}"/>
      <rect x="24" y="30" width="64" height="10" fill="{light}"/>
      <rect x="6" y="40" width="100" height="26" fill="{dark}"/>
      <rect x="6" y="40" width="100" height="7" fill="{light}"/>
      <path d="M 6 66 L 106 66 L 96 88 Q 56 96 16 88 Z" fill="{dark}"/>
    </g>''')
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 {vb_w} {vb_h}">
{chr(10).join(parts)}
  </svg>'''


def wreck(key, style):
    """칠천량 잔해 — 기울어 가라앉는 판옥선 + 부러진 돛대 + 표류 널판.
    '조선 수군이 통째로 무너진'(F15)의 시각 언어. 배는 물에 잠기므로 물 밴드와 겹치는 게 정상."""
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 620 420">
    <g data-obj="{key}-mast" transform="rotate(-64 300 300)">
      <rect x="292" y="60" width="16" height="250" fill="#4a2f19"/>
      <path d="M 292 60 L 308 60 L 312 96 L 288 96 Z" fill="#33200f"/>
      <path d="M 292 310 L 308 310 L 302 330 L 310 348 L 290 336 L 296 322 Z" fill="#33200f"/>
    </g>
    <g data-obj="{key}-hull" transform="rotate(34 320 300)">
      <path d="M 120 262 L 520 262 L 528 286 Q 512 350 430 366 Q 320 380 220 366 Q 142 350 114 286 Z" fill="#5a3a20"/>
      <rect x="120" y="240" width="400" height="26" fill="#4a2f19"/>
      <rect x="140" y="246" width="34" height="18" fill="#7c5230"/>
      <rect x="216" y="246" width="34" height="18" fill="#7c5230"/>
      <rect x="292" y="246" width="34" height="18" fill="#7c5230"/>
      <rect x="368" y="246" width="34" height="18" fill="#7c5230"/>
      <rect x="444" y="246" width="34" height="18" fill="#7c5230"/>
      <path d="M 134 300 Q 320 326 512 296" stroke="#33200f" stroke-width="6" fill="none" opacity="0.8"/>
    </g>
    <g data-obj="{key}-debris">
      <rect x="24" y="352" width="120" height="15" rx="7" transform="rotate(-9 84 360)" fill="#6d4526"/>
      <rect x="486" y="372" width="96" height="13" rx="6" transform="rotate(7 534 378)" fill="#6d4526"/>
      <rect x="176" y="392" width="76" height="12" rx="6" transform="rotate(-4 214 398)" fill="#5a3a20"/>
    </g>
  </svg>'''


def smoke_column(key, style, tone="#8fa2ae"):
    return f'''<svg class="prop" data-adj="{key}" style="{style}" viewBox="0 0 240 320">
    <g data-obj="{key}-puffs">
      <ellipse cx="120" cy="270" rx="72" ry="44" fill="{tone}" opacity="0.9"/>
      <ellipse cx="96" cy="196" rx="58" ry="42" fill="{tone}" opacity="0.78"/>
      <ellipse cx="140" cy="126" rx="48" ry="38" fill="{tone}" opacity="0.62"/>
      <ellipse cx="106" cy="62" rx="36" ry="30" fill="{tone}" opacity="0.45"/>
    </g>
  </svg>'''


# ============================ 씬 조립 ============================
# 프레이밍: s1·s2·s8 = 뭍(바위 곶)에서 울돌목을 바라봄(host 해설) / s3~s7 = 대장선 갑판 위(이순신).
# 인물은 예외 없이 전경(곶·갑판) 위에 선다 — 물 밴드 위에 세우면 '물에 빠진 사람'이 된다(bench it3).

SKY_DAY, SKY_DUSK, SKY_NIGHT = "#8ec9e8", "#7b8fa6", "#2c3d5c"

s1 = f'''
        <!-- 환경: 하늘 -->
        {cloud("s1-cloud-a", "top:120px; left:400px; width:260px; height:123px;", big=False)}
        {cloud("s1-cloud-b", "top:430px; right:90px; width:230px; height:107px;", big=False)}
        {gull("s1-gull-a", "top:352px; left:430px; width:52px; height:19px;")}
        {gull("s1-gull-b", "top:308px; left:236px; width:44px; height:16px;")}
        <!-- 배경 실루엣: 울돌목 곶(좌우) — 최협부 300m의 좁은 수로(F2) -->
        <!-- 환경: 바다 2톤 (곶보다 먼저 그려 곶이 물 위에 앉게 한다) -->
        {sea_stack("s1")}
        {waves("s1-wave-far", 1000, color="#8fb9d1", width=6, opacity=0.75, h=70)}
        <!-- 배경 실루엣: 울돌목 곶 — 밑동을 수평선(far-water 상단 1150)에 붙여 물과 연결 -->
        {headland("s1-cape-l", "left:-20px; bottom:1130px; width:260px; height:230px;", "left")}
        {headland("s1-cape-r", "right:-20px; bottom:1130px; width:260px; height:230px;", "right")}
        <!-- 보조 소품: 적 함대(세키부네) — 판옥선보다 작고 낮게(F10) -->
        {enemy_fleet("s1-fleet", "left:520px; bottom:1040px; width:520px; height:110px;", 620, 100,
                     [(0, 18, 0.72), (108, 8, 0.86), (240, 22, 0.66), (330, 4, 0.94), (470, 20, 0.7)])}
        {waves("s1-wave-near", 640, width=7, opacity=0.6, h=80)}
        <!-- 주 소품(앵커): 판옥선 1척 -->
        {ship("s1-ship", "left:10px; bottom:590px; width:620px; height:818px;", sail=False)}
        {waves("s1-wave-front", 560)}
        <!-- 전경: 바위 곶 — host가 서는 뭍 -->
        {shore("s1-shore")}
        <div class="num-pop s1-num-a" data-adj="s1-num-a"><em>13</em><small>조선 전선</small></div>
        <div class="num-pop s1-num-b" data-adj="s1-num-b"><em>133</em><small>적선</small></div>
        <div class="s1-slash" data-adj="s1-slash"></div>
        <div class="num-pop s1-num-c" data-adj="s1-num-c"><em>1</em><small>한동안</small></div>
'''

s2 = f'''
        {smoke_column("s2-smoke-a", "top:150px; left:120px; width:240px; height:320px;")}
        {smoke_column("s2-smoke-b", "top:250px; left:420px; width:180px; height:240px;", tone="#a3b3bd")}
        {sea_stack("s2", haze="#a8bdc9", far="#5a7f9c", near="#2f6285")}
        {waves("s2-wave-far", 1000, color="#7d9db4", width=6, opacity=0.7, h=70)}
        <!-- 주 소품(앵커): 칠천량 잔해 — 기울어 가라앉는 판옥선 -->
        {wreck("s2-wreck", "left:30px; bottom:620px; width:760px; height:515px;")}
        {waves("s2-wave-near", 620, color="#1d4a66", width=8, opacity=0.75, h=80)}
        {waves("s2-wave-front", 560, color="#1d4a66")}
        {shore("s2-shore")}
        <div class="stamp s2-stamp" data-adj="s2-stamp">칠천량<small>1597년 7월 · 조선 수군 유일한 패전</small></div>
'''

s3 = f'''
        {cloud("s3-cloud-a", "top:90px; left:390px; width:250px; height:118px;", big=False)}
        {gull("s3-gull", "top:300px; left:700px; width:48px; height:17px;")}
        <!-- 배경 실루엣: 울돌목 곶 — 안쪽으로 크게. 사이 통로 ≈ 320px = '좁은 울돌목' -->
        {sea_stack("s3", haze_b=1150, far_b=880, far_h=270, near_b=560, near_h=320)}
        {waves("s3-wave-far", 1000, color="#8fb9d1", width=6, opacity=0.75, h=70)}
        <!-- 울돌목 곶 — 안쪽으로 크게(좁은 수로). 밑동을 수평선에 붙임 -->
        {headland("s3-cape-l", "left:-40px; bottom:1130px; width:360px; height:320px;", "left")}
        {headland("s3-cape-r", "right:-40px; bottom:1130px; width:360px; height:320px;", "right")}
        <!-- 보조: 먼 바다로 물러나 관망하는 아군 판옥선 무리 (F9 「退在遠海觀望不進」) -->
        {retreat_fleet("s3-retreat", "left:400px; bottom:1010px; width:300px; height:90px;", 340, 100,
                       [(0, 10, 0.6), (86, 2, 0.72), (186, 14, 0.55), (250, 6, 0.66)])}
        {waves("s3-wave-near", 640, width=7, opacity=0.6, h=80)}
        {waves("s3-wave-front", 560)}
        <!-- 전경: 대장선 갑판 — 이순신이 '돌아보는' 자리 -->
        {deck("s3-deck")}
        <!-- 주 소품(앵커): 난중일기 (펼친 선장본) -->
        {diary("s3-diary", "left:520px; bottom:1000px; width:520px; height:287px;", 6, 5)}
        <div class="stamp s3-stamp" data-adj="s3-stamp">난중일기<small>정유년 9월 16일 · 이순신 친필</small></div>
'''

s4 = f'''
        {cloud("s4-cloud-a", "top:120px; left:80px; width:260px; height:123px;", big=False)}
        {sea_stack("s4")}
        {waves("s4-wave-far", 1000, color="#8fb9d1", width=6, opacity=0.75, h=70)}
        {headland("s4-cape-l", "left:-60px; bottom:1130px; width:300px; height:250px;", "left")}
        {headland("s4-cape-r", "right:-60px; bottom:1130px; width:300px; height:250px;", "right")}
        <!-- 보조: 멀리 물러나 지켜보는 아군 배 무리 — 화면 상단 원경 -->
        {retreat_fleet("s4-retreat", "left:330px; bottom:1030px; width:420px; height:110px;", 460, 100,
                       [(0, 12, 0.62), (92, 4, 0.7), (196, 16, 0.56), (284, 8, 0.64), (376, 18, 0.5)])}
        <!-- 적선: 대장선 앞으로 밀려드는 세키부네 -->
        {enemy_fleet("s4-fleet", "left:600px; bottom:760px; width:520px; height:150px;", 620, 100,
                     [(0, 10, 1.0), (150, 24, 0.84), (300, 2, 1.12), (450, 20, 0.9)])}
        {waves("s4-wave-near", 660, width=7, opacity=0.6, h=80)}
        {waves("s4-wave-front", 580)}
        <!-- 주 소품: 총통(화포) — 갑판 방패판 너머로 발사. 청동 + 녹청(카탈로그 표) -->
        {cannon("s4-cannon", "left:500px; bottom:545px; width:560px; height:243px;")}
        {deck("s4-deck")}
        {cannon_blast("s4-blast", "left:990px; bottom:600px; width:460px; height:285px;")}
        <div class="num-pop s4-num" data-adj="s4-num"><em>12</em><small>물러나 구경</small></div>
'''

s5 = f'''
        {cloud("s5-cloud-a", "top:150px; right:110px; width:240px; height:113px;", big=False)}
        {sea_stack("s5")}
        {waves("s5-wave-far", 1000, color="#8fb9d1", width=6, opacity=0.75, h=70)}
        {headland("s5-cape-l", "left:-70px; bottom:1130px; width:280px; height:240px;", "left")}
        {headland("s5-cape-r", "right:-70px; bottom:1130px; width:280px; height:240px;", "right")}
        {retreat_fleet("s5-retreat", "left:380px; bottom:1030px; width:320px; height:90px;", 360, 100,
                       [(0, 12, 0.58), (100, 4, 0.66), (206, 14, 0.54)])}
        {waves("s5-wave-near", 660, width=7, opacity=0.6, h=80)}
        {waves("s5-wave-front", 580)}
        <!-- 주 소품(앵커): 초요기 — 장수 호출 신호기. 갑판에서 솟는다 -->
        {signal_flag("s5-flag", "left:452px; bottom:560px; width:300px; height:582px;", "招")}
        {deck("s5-deck")}
        <div class="stamp s5-stamp" data-adj="s5-stamp">초요기 招搖旗<small>장수를 불러들이는 신호기</small></div>
        <div class="stamp s5-stamp2" data-adj="s5-stamp2">안위야,<small>거제현령 안위 · 난중일기 원문</small></div>
'''

s6 = f'''
        {cloud("s6-cloud-a", "top:110px; left:110px; width:250px; height:118px;", big=False)}
        {sea_stack("s6")}
        {waves("s6-wave-far", 1000, color="#8fb9d1", width=6, opacity=0.75, h=70)}
        {headland("s6-cape-l", "left:-70px; bottom:1130px; width:280px; height:240px;", "left")}
        {headland("s6-cape-r", "right:-70px; bottom:1130px; width:280px; height:240px;", "right")}
        <!-- 합류한 아군 판옥선 — 이제 가까이 -->
        {retreat_fleet("s6-join", "left:60px; bottom:900px; width:460px; height:150px;", 400, 100,
                       [(0, 8, 1.0), (150, 20, 0.86), (280, 2, 1.1)], dark="#3f5b48", light="#587a62")}
        <!-- 적선: 부서지는 세키부네 (기울어짐) -->
        {enemy_fleet("s6-fleet", "left:620px; bottom:820px; width:460px; height:150px;", 560, 100,
                     [(0, 26, 0.9), (170, 6, 1.0), (330, 30, 0.78)])}
        {smoke_column("s6-smoke", "top:700px; left:700px; width:200px; height:260px;", tone="#cfd9df")}
        <!-- 조류 반전 — 유향 화살표. 회오리(영화 창작) 금지 -->
        {current_arrows("s6-current", "left:120px; bottom:700px; width:360px; height:160px;")}
        {waves("s6-wave-near", 660, width=7, opacity=0.6, h=80)}
        {waves("s6-wave-front", 580)}
        {deck("s6-deck")}
        <div class="num-pop s6-num" data-adj="s6-num"><em>31</em><small>적선 격침</small></div>
'''

s7 = f'''
        {moon("s7-moon", "top:120px; right:120px; width:150px; height:150px;")}
        {cloud("s7-cloud-a", "top:230px; left:90px; width:220px; height:104px;", big=False)}
        {sea_stack("s7", haze="#4a5f7e", far="#33486a", near="#22314e")}
        {waves("s7-wave-far", 1000, color="#4a5f7e", width=6, opacity=0.6, h=70)}
        {waves("s7-wave-near", 640, color="#16203a", width=7, opacity=0.7, h=80)}
        {waves("s7-wave-front", 560, color="#16203a")}
        {deck("s7-deck")}
        <!-- 주 소품(앵커): 난중일기 — s3의 풀서클 회수. 「此實天幸」 네 글자가 여기 적힌다 -->
        {diary("s7-diary", "left:60px; bottom:980px; width:560px; height:309px;", 6, 5, accent=452)}
        <div class="stamp s7-stamp" data-adj="s7-stamp">此實天幸<small>이것은 실로 천행이었다</small></div>
'''

s8 = f'''
        {moon("s8-moon", "top:140px; left:120px; width:150px; height:150px;")}
        {sea_stack("s8", haze="#4a5f7e", far="#33486a", near="#22314e")}
        <!-- 물이 빠진 갯벌 — "물이 빠졌다며"(F13-a). 낮은 물 + 드러난 바닥 -->
        <div class="prop" data-adj="s8-flat" style="left:0; bottom:560px; width:1080px; height:150px; background:#3c4a52;"></div>
        {waves("s8-wave-far", 1000, color="#4a5f7e", width=6, opacity=0.6, h=70)}
        <!-- 우측 곶 실루엣 — 야간, 밑동을 수평선에 붙임 -->
        {headland("s8-cape-r", "right:-40px; bottom:1130px; width:280px; height:230px;", "right", fill="#2b3a4e", shade="#1e2a3a")}
        <!-- 진을 옮기는 배 — 달빛 타고 당사도로. 원경 실루엣 -->
        {retreat_fleet("s8-move", "left:380px; bottom:770px; width:420px; height:130px;", 440, 100,
                       [(0, 10, 0.86), (150, 2, 1.0), (300, 14, 0.8)], dark="#1b2740", light="#2c3d5c")}
        {waves("s8-wave-near", 640, color="#16203a", width=7, opacity=0.7, h=80)}
        {shore("s8-shore", top_y=1360)}
        <div class="stamp s8-stamp" data-adj="s8-stamp">일기 끝<small>당사도로 진을 옮기고 밤을 지냈다</small></div>
'''

s9 = '''
        <div class="logo-big">삼십초<br><em>역사</em></div>
        <div class="s9-sub">다음 편이 궁금하면</div>
        <div class="subscribe">구독</div>
'''


# 하단 공용 기계부(캐릭터 마운트·립싱크·자막·레이아웃 훅)는 EP.7 index.html에서 그대로 이식한다.
prev = (ROOT / "index.html").read_text()
MACHINERY = prev[prev.index("      // ---------- mount characters from SCENES ----------"):prev.index("      // ---------- S1: hook")]
TAIL = prev[prev.index("      // ---------- captions ----------"):]

CSS = '''
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { margin: 0; width: 1080px; height: 1920px; overflow: hidden; background: #1f2d45; }
      @font-face { font-family: "Black Han Sans"; src: url("fonts/BlackHanSans.ttf") format("truetype"); font-weight: 400; }
      @font-face { font-family: "Jua"; src: url("fonts/Jua.ttf") format("truetype"); font-weight: 400; }
      @font-face { font-family: "Apple SD Gothic Neo"; src: local("Apple SD Gothic Neo"); }
      body { font-family: "Jua", "Apple SD Gothic Neo", sans-serif; color: #26221c; }

      .scene { position: absolute; inset: 0; overflow: hidden; }
      #s1 { z-index: 10; } #s2 { z-index: 20; } #s3 { z-index: 30; } #s4 { z-index: 40; }
      #s5 { z-index: 50; } #s6 { z-index: 60; } #s7 { z-index: 70; } #s8 { z-index: 80; } #s9 { z-index: 90; }
      .stage { position: absolute; inset: 0; }
      .char { position: absolute; }
      .char .bob { width: 100%; height: 100%; }
      .char.flip .bob { transform: scaleX(-1); }
      .prop { position: absolute; }

      .stamp {
        position: absolute; font-family: "Black Han Sans"; text-align: center;
        border: 9px solid; border-radius: 20px; padding: 14px 40px; line-height: 1.1;
        background: rgba(246, 239, 227, 0.94); visibility: hidden;
      }
      .stamp small { display: block; font-size: 34px; color: #1f2d45; font-family: "Jua", sans-serif; }

      .num-pop {
        position: absolute; font-family: "Black Han Sans"; color: #f6efe3;
        line-height: 0.9; visibility: hidden; text-shadow: 0 8px 0 rgba(15, 20, 30, 0.28);
      }
      .num-pop em { font-style: normal; color: #e8b74a; }
      .num-pop small { display: block; font-size: 38px; font-family: "Jua", sans-serif; color: #f6efe3; line-height: 1.5; }

      /* scene backdrops */
      #s1 .stage, #s3 .stage, #s4 .stage, #s5 .stage, #s6 .stage { background: ''' + SKY_DAY + '''; }
      #s2 .stage { background: ''' + SKY_DUSK + '''; }
      #s7 .stage, #s8 .stage { background: ''' + SKY_NIGHT + '''; }
      #s9 .stage { background: #f6efe3; }

      /* s1 — 13 : 133 매치업, 5.48s에 13이 그어지고 1이 뜬다 */
      .s1-num-a { top: 180px; left: 80px; font-size: 150px; text-align: left; }
      .s1-num-b { top: 180px; right: 80px; font-size: 150px; text-align: right; }
      .s1-slash {
        position: absolute; top: 258px; left: 56px; width: 240px; height: 20px;
        background: #d94f37; border-radius: 10px; transform: rotate(-8deg);
        box-shadow: 0 5px 0 rgba(38, 34, 28, 0.2); visibility: hidden;
      }
      .s1-num-c { top: 372px; left: 80px; font-size: 190px; text-align: left; }
      .s2-stamp { top: 210px; left: 60px; color: #d94f37; border-color: #d94f37; font-size: 84px; white-space: nowrap; transform: rotate(-4deg); }
      .s3-stamp { top: 190px; right: 55px; color: #1f2d45; border-color: #1f2d45; font-size: 62px; white-space: nowrap; transform: rotate(3deg); }
      .s4-num { top: 190px; right: 75px; font-size: 150px; text-align: right; }
      .s5-stamp { top: 170px; left: 55px; color: #1f2d45; border-color: #1f2d45; font-size: 56px; white-space: nowrap; transform: rotate(-3deg); }
      .s5-stamp2 { top: 400px; left: 55px; color: #d94f37; border-color: #d94f37; font-size: 76px; white-space: nowrap; transform: rotate(3deg); }
      .s6-num { top: 190px; right: 80px; font-size: 165px; text-align: right; }
      /* 펀치라인 — 네 글자. 이 에피소드의 착지점 */
      .s7-stamp { top: 190px; right: 55px; color: #d94f37; border-color: #d94f37; font-size: 92px; white-space: nowrap; transform: rotate(-3deg); letter-spacing: 0.04em; }
      .s8-stamp { top: 200px; right: 55px; color: #1f2d45; border-color: #1f2d45; font-size: 66px; white-space: nowrap; transform: rotate(3deg); }

      /* outro */
      .logo-big {
        position: absolute; top: 300px; left: 0; right: 0; text-align: center;
        font-family: "Black Han Sans"; font-size: 190px; color: #1f2d45; line-height: 1.02; letter-spacing: -0.03em;
      }
      .logo-big em { font-style: normal; color: #d94f37; }
      .s9-sub { position: absolute; top: 760px; left: 0; right: 0; text-align: center; font-size: 52px; color: #26221c; }
      /* 우측 정렬 + width:max-content — 중앙이면 host가 "구독" 첫 글자를 가리고(지뢰 #24),
         풀폭 박스에 scale 트윈을 걸면 back.out 오버슈트가 clipped_text 오검출을 낸다. */
      .subscribe {
        position: absolute; top: 900px; right: 80px; width: max-content;
        background: #d94f37; color: #f6efe3; font-family: "Black Han Sans"; font-size: 84px;
        padding: 26px 90px; border-radius: 999px; box-shadow: 10px 10px 0 #1f2d45;
      }

      /* overlay */
      #overlay { z-index: 100; }
      .brand-badge {
        position: absolute; top: 60px; left: 60px;
        background: #1f2d45; color: #f6efe3; font-family: "Black Han Sans";
        font-size: 44px; padding: 14px 34px; border-radius: 14px; box-shadow: 6px 6px 0 rgba(38,34,28,0.25);
      }
      .brand-badge em { font-style: normal; color: #e8b74a; }
      .cap-wrap { position: absolute; left: 0; right: 0; bottom: 380px; text-align: center; }
      .cap-group { position: absolute; left: 0; right: 0; bottom: 0; opacity: 0; visibility: hidden; }
      .cap-group .pill {
        display: inline-block; background: rgba(31, 45, 69, 0.9);
        padding: 22px 52px; border-radius: 26px; font-size: 74px; color: #f6efe3; line-height: 1.22; max-width: 900px;
        word-break: keep-all;
      }
      .cap-group .hi { color: #e8b74a; font-family: "Black Han Sans"; }
'''

SC = [("s1", 0, 8.25, 0, s1, "훅 — 13 대 133이 아니라 1 대 133"),
      ("s2", 7.84, 4.38, 1, s2, "칠천량 궤멸"),
      ("s3", 11.77, 10.52, 0, s3, "울돌목 + 난중일기 「顧見諸將船 則退在遠海觀望不進」"),
      ("s4", 21.84, 6.51, 1, s4, "대장선 단독 분전 + 총통"),
      ("s5", 27.90, 6.39, 0, s5, "초요기 + 「安衛 欲死軍法乎」"),
      ("s6", 33.84, 7.68, 1, s6, "합류 → 조류 반전 → 31척 격파"),
      ("s7", 41.07, 8.47, 0, s7, "「此實天幸」 — 네 글자"),
      ("s8", 49.09, 5.63, 1, s8, "펀치라인 — 물때 쓰고 일기 끝"),
      ("s9", 54.27, 7.03, 0, s9, "아웃트로")]

body = []
for sid, st, du, tr, dom, note in SC:
    body.append(f'''      <!-- ===================== Scene {sid[1:]} · {note} ===================== -->
      <div id="{sid}" class="clip scene" data-start="{st}" data-duration="{du}" data-track-index="{tr}">
        <div class="stage">{dom}        </div>
      </div>
''')

# ---------- 타임라인 ----------
# 스탬프/num-pop 슬램은 예외 없이 scale 0→1 + visibility set (지뢰 #2·#8).
def slam(sel, at, rot=None, dur=0.34, origin="50% 50%", ease="back.out(2.2)"):
    r = f", rotation: {rot}" if rot is not None else ""
    r2 = f", rotation: {rot}" if rot is not None else ""
    return (f'      tl.set("{sel}", {{ visibility: "visible" }}, {at});\n'
            f'      tl.fromTo("{sel}", {{ scale: 0, opacity: 0{r}, transformOrigin: "{origin}" }},\n'
            f'        {{ scale: 1, opacity: 1{r2}, duration: {dur}, ease: "{ease}" }}, {at});\n')

def pop(sel, at, dur=0.4):
    return (f'      tl.set("{sel}", {{ visibility: "visible" }}, {at});\n'
            f'      tl.fromTo("{sel}", {{ scale: 0, transformOrigin: "0% 50%" }}, '
            f'{{ scale: 1, duration: {dur}, ease: "back.out(2.4)" }}, {at});\n')

def enter(sel, at, y=280, dur=0.5, ease="back.out(1.3)"):
    return (f'      tl.fromTo("{sel}", {{ y: {y}, opacity: 0 }}, '
            f'{{ y: 0, opacity: 1, duration: {dur}, ease: "{ease}" }}, {at});\n')

def push(sid, at, frm):
    return (f'      tl.fromTo("#{sid} .stage", {{ x: {frm} }}, '
            f'{{ x: 0, duration: T, ease: "power3.out" }}, {at});\n')

TL = []
TL.append("      // ---------- S1: hook — 13 : 133 → 1 : 133 ----------\n")
TL.append('      tl.fromTo("#s1 .prop[data-adj=\'s1-cloud-a\'], #s1 .prop[data-adj=\'s1-cloud-b\']", { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.1 }, 0.2);\n')
TL.append('      tl.fromTo("#s1 .prop[data-adj=\'s1-cape-l\'], #s1 .prop[data-adj=\'s1-cape-r\']", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, 0.2);\n')
TL.append(enter("#s1 .prop[data-adj='s1-ship']", 0.35, y=160, ease="power2.out"))
TL.append(enter("#s1 .prop[data-adj='s1-fleet']", 0.9, y=-60, ease="power2.out"))
TL.append(enter("#s1 .char-s1-host", 0.45, y=300, dur=0.55, ease="back.out(1.4)"))
TL.append(pop("#s1 .s1-num-a", 0.72))
TL.append(pop("#s1 .s1-num-b", 1.18))
TL.append("      // 5.48s \"한 척이었습니다\" — 13에 붉은 취소선이 그어지고 1이 슬램된다. 훅의 착지\n")
TL.append('      tl.set("#s1 .s1-slash", { visibility: "visible" }, 5.48);\n')
TL.append('      tl.fromTo("#s1 .s1-slash", { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: 0.28, ease: "power3.out" }, 5.48);\n')
TL.append(pop("#s1 .s1-num-c", 5.72, dur=0.46))

TL.append("\n      // ---------- S2: 칠천량 궤멸 ----------\n")
TL.append(push("s2", 7.84, 1080))
TL.append(enter("#s2 .prop[data-adj='s2-wreck']", 8.1, y=60, ease="power2.out"))
TL.append('      tl.fromTo("#s2 .prop[data-adj=\'s2-smoke-a\'], #s2 .prop[data-adj=\'s2-smoke-b\']", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }, 8.2);\n')
TL.append(enter("#s2 .char-s2-host", 8.25))
TL.append(slam("#s2 .s2-stamp", 8.5, rot=-4))

TL.append("\n      // ---------- S3: 울돌목 + 난중일기 ----------\n")
TL.append(push("s3", 11.77, -1080))
TL.append('      tl.fromTo("#s3 .prop[data-adj=\'s3-cape-l\'], #s3 .prop[data-adj=\'s3-cape-r\']", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 12.0);\n')
TL.append(enter("#s3 .char-s3-yi", 12.1))
TL.append("      // 14.14s \"난중일기입니다\" — 일기가 뜬다. 이 인용이 에피소드의 사료적 근거\n")
TL.append(enter("#s3 .prop[data-adj='s3-diary']", 14.14, y=-70, dur=0.55, ease="back.out(1.4)"))
TL.append(slam("#s3 .s3-stamp", 14.5, rot=3))
TL.append("      // 18.97s \"물러나\" — 관망하던 배들이 뒤로 물러난다\n")
TL.append('      tl.fromTo("#s3 .prop[data-adj=\'s3-retreat\']", { x: -70, opacity: 0.25 }, { x: 40, opacity: 1, duration: 1.6, ease: "power1.inOut" }, 17.6);\n')

TL.append("\n      // ---------- S4: 대장선 단독 분전 ----------\n")
TL.append(push("s4", 21.84, 1080))
TL.append(enter("#s4 .prop[data-adj='s4-retreat']", 22.05, y=-50, ease="power2.out"))
TL.append(enter("#s4 .prop[data-adj='s4-fleet']", 22.1, y=-40, ease="power2.out"))
TL.append(enter("#s4 .prop[data-adj='s4-cannon']", 22.15, y=60, ease="power2.out"))
TL.append(enter("#s4 .char-s4-yi", 22.2))
TL.append(pop("#s4 .s4-num", 22.14))
TL.append("      // 25.96s \"총통을\" — 발사. 화염·연기는 포구에서만(회오리 금지)\n")
TL.append('      tl.set("#s4 .prop[data-adj=\'s4-blast\']", { visibility: "visible" }, 25.96);\n')
TL.append('      tl.fromTo("#s4 .prop[data-adj=\'s4-blast\']", { scale: 0.2, opacity: 0, transformOrigin: "0% 50%" }, { scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" }, 25.96);\n')
TL.append('      tl.to("#s4 .prop[data-adj=\'s4-blast\']", { scale: 1.12, opacity: 0.85, duration: 0.5, ease: "sine.inOut", repeat: 2, yoyo: true }, 26.3);\n')
TL.append('      tl.to("#s4 .char-s4-yi", { x: -14, duration: 0.09, ease: "power2.out", repeat: 3, yoyo: true }, 25.96);\n')

TL.append("\n      // ---------- S5: 초요기 + 군법 호통 ----------\n")
TL.append(push("s5", 27.90, -1080))
TL.append(enter("#s5 .char-s5-yi", 28.1))
TL.append(enter("#s5 .char-s5-jangsu", 28.25))
TL.append("      // 28.84s \"깃발을\" — 초요기가 갑판에서 솟아오른다\n")
TL.append('      tl.fromTo("#s5 .prop[data-adj=\'s5-flag\']", { y: 420 }, { y: 0, duration: 0.7, ease: "back.out(1.2)" }, 28.84);\n')
TL.append(slam("#s5 .s5-stamp", 29.5, rot=-3))
TL.append(slam("#s5 .s5-stamp2", 32.05, rot=3, dur=0.36))

TL.append("\n      // ---------- S6: 합류 → 조류 반전 → 31척 ----------\n")
TL.append(push("s6", 33.84, 1080))
TL.append(enter("#s6 .char-s6-yi", 34.1))
TL.append(enter("#s6 .char-s6-jangsu", 34.2))
TL.append("      // 34.54s \"배들이 달려들었고\" — 아군선이 좌측에서 진입\n")
TL.append('      tl.fromTo("#s6 .prop[data-adj=\'s6-join\']", { x: -260, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" }, 34.54);\n')
TL.append(enter("#s6 .prop[data-adj='s6-fleet']", 34.3, y=-40, ease="power2.out"))
TL.append("      // 36.14s \"물살까지 뒤집히면서\" — 조류 반전은 유향 화살표로만(F25)\n")
TL.append('      tl.set("#s6 .prop[data-adj=\'s6-current\']", { visibility: "visible" }, 36.14);\n')
TL.append('      tl.fromTo("#s6 .prop[data-adj=\'s6-current\']", { x: -120, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 36.14);\n')
TL.append('      tl.to("#s6 .prop[data-adj=\'s6-current\']", { x: 40, duration: 0.6, ease: "sine.inOut", repeat: 6, yoyo: true }, 36.7);\n')
TL.append("      // 38.47s \"서른한 척\" — 적선이 기울고 연기가 오른다\n")
TL.append(pop("#s6 .s6-num", 38.47, dur=0.44))
TL.append('      tl.to("#s6 .prop[data-adj=\'s6-fleet\']", { rotation: 16, y: 34, transformOrigin: "50% 100%", duration: 1.1, ease: "power1.in" }, 38.47);\n')
TL.append('      tl.set("#s6 .prop[data-adj=\'s6-smoke\']", { visibility: "visible" }, 38.6);\n')
TL.append('      tl.fromTo("#s6 .prop[data-adj=\'s6-smoke\']", { y: 60, opacity: 0 }, { y: -20, opacity: 1, duration: 1.2, ease: "power1.out" }, 38.6);\n')

TL.append("\n      // ---------- S7: 此實天幸 — 네 글자 ----------\n")
TL.append(push("s7", 41.07, -1080))
TL.append(enter("#s7 .char-s7-yi", 41.3))
TL.append(enter("#s7 .prop[data-adj='s7-diary']", 41.4, y=-60, dur=0.55, ease="back.out(1.4)"))
TL.append("      // 46.81s \"실로 천행이었다\" — 펀치라인. 이 네 글자가 승리의 자평 전부다\n")
TL.append(slam("#s7 .s7-stamp", 46.81, rot=-3, dur=0.42, ease="back.out(2.4)"))
TL.append('      tl.fromTo("#s7 .prop[data-adj=\'s7-diary\'] [data-obj=\'s7-diary-accent\']", { opacity: 0 }, { opacity: 1, duration: 0.3 }, 46.81);\n')

TL.append("\n      // ---------- S8: 물때 쓰고 일기 끝 ----------\n")
TL.append(push("s8", 49.09, 1080))
TL.append(enter("#s8 .char-s8-host", 49.35))
TL.append("      // 50.26s \"진을 옮겼고\" — 배들이 달빛 타고 당사도로 빠져나간다\n")
TL.append('      tl.fromTo("#s8 .prop[data-adj=\'s8-move\']", { x: 0 }, { x: -230, duration: 3.0, ease: "power1.inOut" }, 50.26);\n')
TL.append(slam("#s8 .s8-stamp", 52.49, rot=3, dur=0.38))

TL.append("\n      // ---------- S9: outro ----------\n")
TL.append(push("s9", 54.27, -1080))
TL.append('      tl.fromTo("#s9 .logo-big", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.5, ease: "back.out(2)" }, 54.6);\n')
TL.append('      tl.fromTo("#s9 .s9-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }, 55.2);\n')
TL.append(enter("#s9 .char-s9-host", 54.9, y=300, dur=0.5, ease="back.out(1.4)"))
TL.append('      tl.fromTo("#s9 .subscribe", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.5, ease: "back.out(2.2)" }, 57.4);\n')
TL.append('      tl.to("#s9 .subscribe", { scale: 1.08, duration: 0.4, ease: "sine.inOut", repeat: 3, yoyo: true }, 58.0);\n')

HTML = f'''<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1080, height=1920">
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <style>{CSS}    </style>
  </head>
  <body>
    <div id="root" data-composition-id="main" data-start="0" data-duration="61.3" data-width="1080" data-height="1920">

{"".join(body)}
      <!-- ===================== Overlay ===================== -->
      <div id="overlay" class="clip scene" data-start="0" data-duration="61.3" data-track-index="2">
        <div class="brand-badge">삼십초 <em>역사</em></div>
        <div class="cap-wrap"></div>
      </div>

      <audio id="narr" src="narration.mp3" data-start="0" data-duration="59.9" data-track-index="3" data-volume="1"></audio>
    </div>

    <script src="char-tuning.js"></script>
    <script src="characters.js"></script>
    <script src="scenes.js"></script>
    <script src="captions-data.js"></script>
    <script src="layout-overrides.js"></script>
    <script>
      window.__timelines = window.__timelines || {{}};
      var tl = gsap.timeline({{ paused: true }});
      var T = TRANSITION;

{MACHINERY}{"".join(TL)}
{TAIL}'''

(ROOT / "index.html").write_text(HTML)
print("index.html written:", len(HTML.splitlines()), "lines")
