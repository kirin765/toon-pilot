// 레이아웃 오프셋(위치/크기) — studio-layout.html에서 생성. 비면 원본 그대로.
var LAYOUT_OVERRIDES = {
  "s4-pole-l": {
    "dx": 0,
    "dy": -2.5,
    "s": 1,
    "ox": 135,
    "oy": 1340
  },
  "s4-pole-r": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 945,
    "oy": 1340
  },
  "s1-weapon-rack": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 930,
    "oy": 1030.671875
  },
  "s1-title": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 540,
    "oy": 439.234375
  },
  "s2-tent": {
    "dx": -1,
    "dy": 222,
    "s": 1,
    "ox": 540,
    "oy": 736.15625
  },
  "s2-tents-far": {
    "dx": 0,
    "dy": 316,
    "s": 1,
    "ox": 540,
    "oy": 845
  },
  "s3-hill-r": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 950,
    "oy": 555
  },
  "s3-palace": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 540,
    "oy": 1010
  },
  "s4-hill-l": {
    "dx": 0,
    "dy": 358,
    "s": 1,
    "ox": 230,
    "oy": 520
  },
  "s4-hill-r": {
    "dx": 0,
    "dy": 360,
    "s": 1,
    "ox": 850,
    "oy": 520
  },
  "s4-balance-rig": {
    "dx": 2.5,
    "dy": -312.5,
    "s": 1,
    "ox": 540,
    "oy": 1085
  },
  "s4-label": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 540,
    "oy": 341.5
  },
  "s4-king": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 540,
    "oy": 1020
  },
  "s4-ground": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 540,
    "oy": 1770
  },
  "s5-sconce": {
    "dx": 0,
    "dy": 277,
    "s": 1.51,
    "ox": 915,
    "oy": 730
  },
  "s5-cage-window": {
    "dx": 112,
    "dy": 61,
    "s": 1,
    "ox": 180,
    "oy": 640
  },
  "s6-sea": {
    "dx": 1,
    "dy": 500,
    "s": 1,
    "ox": 540,
    "oy": 595
  },
  "s6-gulls": {
    "dx": -7,
    "dy": 330,
    "s": 1.65,
    "ox": 590,
    "oy": 285
  },
  "s6-cloud-2": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 135,
    "oy": 256
  },
  "s6-ground-shade": {
    "dx": 0,
    "dy": -122,
    "s": 1.26,
    "ox": 540,
    "oy": 1300
  },
  "s6-ground": {
    "dx": 0,
    "dy": 0,
    "s": 1.27,
    "ox": 540,
    "oy": 1600
  },
  "s7-exile": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 691.1875,
    "oy": 1060
  },
  "s7-dais": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "ox": 540,
    "oy": 1024
  }
};
var OBJECT_OVERRIDES = {
  "pole-l-flag": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "cx": 132,
    "cy": 108
  },
  "pole-l-flag-detail": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "cx": 122,
    "cy": 108
  },
  "palace-wing-r": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "cx": 715,
    "cy": 260.5
  },
  "balance-pan-l": {
    "dx": -99.5,
    "dy": 349,
    "s": 3,
    "cx": 460,
    "cy": 117.75
  },
  "balance-string": {
    "dx": 1,
    "dy": 319,
    "s": 2.5,
    "cx": 540,
    "cy": 75
  },
  "balance-beam": {
    "dx": -2.5,
    "dy": 329,
    "s": 2.31,
    "cx": 540,
    "cy": 100
  },
  "balance-pan-r": {
    "dx": 93.5,
    "dy": 352,
    "s": 3,
    "cx": 620,
    "cy": 117.75
  },
  "rope": {
    "dx": 2.5,
    "dy": 314.5,
    "s": 1.15,
    "cx": 540,
    "cy": 23.5
  },
  "pole-l": {
    "dx": -47,
    "dy": 0,
    "s": 1,
    "cx": 158,
    "cy": 562.5
  },
  "banner-l": {
    "dx": 32.5,
    "dy": 12.5,
    "s": 2.5,
    "cx": 236,
    "cy": 70
  },
  "pole-r": {
    "dx": 49,
    "dy": 0,
    "s": 1,
    "cx": 922,
    "cy": 562.5
  },
  "banner-r": {
    "dx": -27.5,
    "dy": 27.5,
    "s": 2.5,
    "cx": 844,
    "cy": 70
  },
  "throne-seat": {
    "dx": 0,
    "dy": 0,
    "s": 1,
    "cx": 340,
    "cy": 168
  }
};
if (typeof window !== "undefined") { window.LAYOUT_OVERRIDES = LAYOUT_OVERRIDES; window.OBJECT_OVERRIDES = OBJECT_OVERRIDES; }
