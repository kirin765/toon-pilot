#!/usr/bin/env python3
"""script.txt 게이트 — 대본을 TTS에 넘기기 전에 기계로 검사한다.

산문 규칙(docs/EPISODE-PIPELINE.md S2)을 셀 수 있는 것만 골라 PASS/FAIL로 바꾼 것.
어떤 모델이 대본을 썼든 이 스크립트가 통과해야 S4(TTS)로 간다.

Usage:
  python3 bin/check_script.py                    # 정보량 '중간'(기본)으로 판정
  python3 bin/check_script.py --density 간단     # 간단 | 중간 | 상세
  python3 bin/check_script.py --file script.txt
  python3 bin/check_script.py --transcript       # transcript.json 끝단어 대조까지

Exit 0 = 통과(경고는 있을 수 있음), 1 = 불합격.
"""
import argparse, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# 길이 예측식 (PROJECT-NOTES 지뢰 #55·#74, 4점 검증 오차 ±1.4s)
W_COEF, S_COEF = 0.49, 1.18
TOL = 5.0  # 예측식 자체 오차 + 목표 범위 경계의 여유. 이보다 크게 벗어나면 대본을 고친다.

# docs/EPISODE-PIPELINE.md 「정보량」 표
DENSITY = {
    "간단": {"words": (65, 80),   "sents": (14, 17), "secs": (45, 55)},
    "중간": {"words": (90, 110),  "sents": (19, 23), "secs": (65, 80)},
    "상세": {"words": (125, 150), "sents": (26, 30), "secs": (85, 100)},
}

SENT_END = re.compile(r"[.!?]")
BAD_HOOK = re.compile(r"(오늘은|이번에는).*(알아보|살펴보|소개)|에 대해 알아")
ARABIC = re.compile(r"\d")
FORMAL_END = re.compile(r"습니다[.!?]?$")

fails, warns = [], []


def fail(msg):
    fails.append(msg)


def warn(msg):
    warns.append(msg)


def split_sentences(lines):
    """문장 = 종결부호 단위. edge-tts 묵음은 줄바꿈이 아니라 마침표에 붙는다(지뢰 #34 정정)."""
    out = []
    for ln, text in lines:
        parts = [p.strip() for p in re.split(r"(?<=[.!?])\s+", text) if p.strip()]
        for p in parts:
            out.append((ln, p))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", default="script.txt")
    ap.add_argument("--density", default="중간", choices=list(DENSITY))
    ap.add_argument("--transcript", action="store_true",
                    help="transcript.json 마지막 단어가 대본 마지막 어절과 맞는지 대조")
    args = ap.parse_args()

    path = ROOT / args.file if not Path(args.file).is_absolute() else Path(args.file)
    if not path.exists():
        print(f"✗ {path} 없음")
        return 1

    lines = [(i + 1, l.strip()) for i, l in enumerate(path.read_text().splitlines()) if l.strip()]
    if not lines:
        print("✗ 대본이 비어 있다")
        return 1

    sents = split_sentences(lines)
    words = [w for _, t in sents for w in t.split()]
    n_w, n_s = len(words), len(sents)
    pred = n_w * W_COEF + n_s * S_COEF
    spec = DENSITY[args.density]

    # ── 1. 분량 ──────────────────────────────────────────────────────────
    lo, hi = spec["words"]
    if not lo <= n_w <= hi:
        warn(f"어절 {n_w} — '{args.density}' 목표 {lo}~{hi} 밖")
    lo, hi = spec["sents"]
    if not lo <= n_s <= hi:
        warn(f"문장 {n_s} — '{args.density}' 목표 {lo}~{hi} 밖")
    lo, hi = spec["secs"]
    if not lo - TOL <= pred <= hi + TOL:
        fail(f"예측 길이 {pred:.1f}s — '{args.density}' 목표 {lo}~{hi}s에서 {TOL}s 이상 벗어남. "
             f"압축하지 말고 사료 항목을 통째로 넣거나 빼서 맞춘다")
    elif not lo <= pred <= hi:
        warn(f"예측 길이 {pred:.1f}s — '{args.density}' 목표 {lo}~{hi}s 밖(허용 오차 {TOL}s 안)")

    # ── 2. 문장 단위 청취 가독성 ─────────────────────────────────────────
    for ln, t in sents:
        n = len(t.split())
        if n > 15:
            fail(f"L{ln} {n}어절(>15) — 쪼갤 것: {t}")
        elif n > 12:
            warn(f"L{ln} {n}어절(>12 권장선) — 쪼개는 쪽을 권함: {t}")
        commas = t.count(",")
        if commas >= 1 and n >= 10:
            warn(f"L{ln} 쉼표{commas}+{n}어절 — 한 문장에 정보 2개일 가능성: {t}")
        if commas >= 2:
            warn(f"L{ln} 쉼표 {commas}개 — 정보를 잇지 말고 문장을 나눌 것: {t}")

    # ── 3. 훅·아웃트로 ───────────────────────────────────────────────────
    first = sents[0][1]
    if BAD_HOOK.search(first):
        fail(f"훅이 '오늘은 ~ 알아보겠습니다' 형: {first}")
    last_line = lines[-1][1]
    if "구독" not in last_line:
        fail(f"마지막 줄에 고정 아웃트로(구독)가 없다: {last_line}")
    if "삼십 초 역사" not in last_line and "삼십초 역사" not in last_line:
        warn(f"마지막 줄에 채널명이 없다: {last_line}")

    # ── 4. TTS 표기 ──────────────────────────────────────────────────────
    for ln, t in lines:
        if ARABIC.search(t):
            fail(f"L{ln} 아라비아 숫자 — TTS가 읽을 한글로 쓸 것(15만→십오만): {t}")

    # ── 5. 종결어미 다양화 ───────────────────────────────────────────────
    run, run_start = 0, None
    for ln, t in sents:
        if FORMAL_END.search(t):
            run += 1
            run_start = run_start or ln
            if run >= 3:
                fail(f"L{run_start}~L{ln} '~습니다' {run}연속 — 종결어미를 섞을 것")
        else:
            run, run_start = 0, None

    # ── 6. transcript 대조(옵션) ─────────────────────────────────────────
    if args.transcript:
        tj = ROOT / "transcript.json"
        if not tj.exists():
            warn("transcript.json 없음 — 대조 생략")
        else:
            data = json.loads(tj.read_text())
            last_t = re.sub(r"[^\w가-힣]", "", data[-1]["text"]) if data else ""
            last_s = re.sub(r"[^\w가-힣]", "", words[-1])
            if last_t != last_s:
                fail(f"전사 마지막 단어 '{data[-1]['text']}' ≠ 대본 마지막 어절 '{words[-1]}' — "
                     f"vad_filter로 아웃트로가 잘렸을 수 있다(S4)")

    # ── 리포트 ───────────────────────────────────────────────────────────
    print(f"대본  {path.name}  ·  정보량 '{args.density}'")
    print(f"  줄 {len(lines)} / 문장 {n_s} / 어절 {n_w}")
    print(f"  예측 길이 {pred:.1f}s  (어절×{W_COEF} + 문장×{S_COEF})")
    print()
    for w in warns:
        print(f"  ⚠ {w}")
    for f in fails:
        print(f"  ✗ {f}")
    print()
    if fails:
        print(f"불합격 — 오류 {len(fails)}건, 경고 {len(warns)}건. S2로 되돌아간다.")
        return 1
    print(f"통과 — 경고 {len(warns)}건. (경고는 판단해서 처리)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
