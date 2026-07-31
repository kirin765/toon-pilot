#!/usr/bin/env python3
"""transcript.json + script.txt -> captions-data.js (WORDS + CAPTION_GROUPS).

Whisper mishears/merges Korean words, so timings are transferred onto the
authoritative script.txt text via char-level alignment:
  1. Build a char->time map from whisper words (each word's chars span its window).
  2. SequenceMatcher aligns normalized whisper chars vs script chars.
  3. Each script word gets start/end interpolated through that map.

Usage:
  python3 bin/sync_timing.py                       # writes captions-data.js
  python3 bin/sync_timing.py --hi 이순신,23번       # mark accent words
  python3 bin/sync_timing.py --dry                 # stdout only, no file write
Prints a sentence table (scene-boundary planning) + audio duration suggestions.
"""
import argparse, difflib, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def norm(s):
    return re.sub(r"[^\w가-힣]", "", s)


def load(root):
    tj = json.loads((root / "transcript.json").read_text())
    lines = [l.strip() for l in (root / "script.txt").read_text().splitlines() if l.strip()]
    return tj, lines


def char_time_map(whisper_words):
    """Per normalized char of the whisper stream: (start, end) linear within its word."""
    chars, spans = [], []
    for w in whisper_words:
        t = norm(w["text"])
        if not t:
            continue
        dur = max(w["end"] - w["start"], 0.01)
        step = dur / len(t)
        for i, c in enumerate(t):
            chars.append(c)
            spans.append((w["start"] + i * step, w["start"] + (i + 1) * step))
    return "".join(chars), spans


def align(script_words, wchars, wspans):
    """Assign (start, end) to each script word via char alignment."""
    schars, sword_of_char = [], []
    for wi, w in enumerate(script_words):
        for c in norm(w):
            schars.append(c)
            sword_of_char.append(wi)
    schars = "".join(schars)

    # map: script char index -> time span (None if unmatched)
    char_time = [None] * len(schars)
    sm = difflib.SequenceMatcher(None, schars, wchars, autojunk=False)
    for a, b, size in sm.get_matching_blocks():
        for k in range(size):
            char_time[a + k] = wspans[b + k]

    # interpolate gaps between matched anchors
    last = None
    anchors = [(i, t) for i, t in enumerate(char_time) if t]
    if not anchors:
        sys.exit("alignment failed: no matching chars between script and transcript")
    for i in range(len(char_time)):
        if char_time[i] is None:
            prev = next((a for a in reversed(anchors) if a[0] < i), None)
            nxt = next((a for a in anchors if a[0] > i), None)
            if prev and nxt:
                t0, t1 = prev[1][1], nxt[1][0]
                frac = (i - prev[0]) / (nxt[0] - prev[0])
                mid = t0 + (t1 - t0) * frac
                char_time[i] = (mid, mid)
            else:
                char_time[i] = prev[1] if prev else nxt[1]

    words = []
    for wi, w in enumerate(script_words):
        idxs = [i for i, owner in enumerate(sword_of_char) if owner == wi]
        if not idxs:  # punctuation-only token
            continue
        start = round(char_time[idxs[0]][0], 2)
        end = round(char_time[idxs[-1]][1], 2)
        words.append({"text": w, "start": start, "end": max(end, start + 0.05)})
    # enforce monotonic
    for i in range(1, len(words)):
        if words[i]["start"] < words[i - 1]["start"]:
            words[i]["start"] = words[i - 1]["start"] + 0.01
        if words[i]["end"] <= words[i]["start"]:
            words[i]["end"] = words[i]["start"] + 0.05
    return words


def group_captions(sentences, hold=0.4, splits=None):
    """2-4 word groups, sentence-bounded, one visible at a time.

    splits: optional list (one entry per sentence) of explicit word counts per
    group. Auto-grouping breaks at particles/numerals (지뢰 #61), so any episode
    whose auto groups don't read as phrases supplies caption-splits.txt.
    """
    groups = []
    for si, sent in enumerate(sentences):
        ws = sent["words"]
        n = len(ws)
        if splits and si < len(splits) and splits[si]:
            sizes = splits[si]
            if sum(sizes) != n:
                sys.exit(f"caption-splits line {si+1}: sizes sum {sum(sizes)} != {n} words "
                         f"({' '.join(w['text'] for w in ws)})")
            chunks, off = [], 0
            for k in sizes:
                chunks.append(ws[off:off + k])
                off += k
            for ci, ch in enumerate(chunks):
                groups.append({"text": " ".join(w["text"] for w in ch),
                               "start": ch[0]["start"], "end": None, "words": ch})
            continue
        n_groups = max(1, round(n / 3))
        size = -(-n // n_groups)  # ceil
        chunks = [ws[i:i + size] for i in range(0, n, size)]
        for ci, ch in enumerate(chunks):
            g = {
                "text": " ".join(w["text"] for w in ch),
                "start": ch[0]["start"],
                "end": None,  # fill below
                "words": ch,
            }
            groups.append(g)
    for gi, g in enumerate(groups):
        if gi + 1 < len(groups):
            nxt = groups[gi + 1]["start"]
            g["end"] = round(max(g["words"][-1]["end"], min(g["words"][-1]["end"] + hold, nxt - 0.02)), 2)
        else:
            g["end"] = round(g["words"][-1]["end"] + 2 * hold, 2)
        del g["words"]
    return groups


def strip_punct_token(t):
    return t.strip(".,!?…“”\"'()")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--hi", default="", help="comma-separated accent words (substring match)")
    ap.add_argument("--dry", action="store_true")
    ap.add_argument("--root", default=str(ROOT))
    args = ap.parse_args()
    root = Path(args.root)

    tj, lines = load(root)
    wchars, wspans = char_time_map(tj)

    sentences = []
    for line in lines:
        toks = [strip_punct_token(t) for t in line.split()]
        toks = [t for t in toks if norm(t)]
        sentences.append({"text": line, "tokens": toks})

    all_tokens = [t for s in sentences for t in s["tokens"]]
    words = align(all_tokens, wchars, wspans)

    hi_terms = [h for h in args.hi.split(",") if h.strip()]
    for w in words:
        if any(h in w["text"] for h in hi_terms):
            w["hi"] = True

    # slice back into sentences
    i = 0
    for s in sentences:
        s["words"] = words[i:i + len(s["tokens"])]
        i += len(s["tokens"])

    sp_file = root / "caption-splits.txt"
    splits = None
    if sp_file.exists():
        splits = [[int(x) for x in ln.split()]
                  for ln in sp_file.read_text(encoding="utf-8").splitlines() if ln.strip()]
        if len(splits) != len(sentences):
            sys.exit(f"caption-splits.txt has {len(splits)} lines but script has {len(sentences)} sentences")
    groups = group_captions(sentences, splits=splits)
    for g in groups:
        g["hi"] = [w["text"] for w in words
                   if w.get("hi") and w["text"] in g["text"].split()]

    def js_obj(d, keys):
        parts = []
        for k in keys:
            if k not in d:
                continue
            v = d[k]
            if isinstance(v, str):
                parts.append(f'{k}: "{v}"')
            elif isinstance(v, bool):
                parts.append(f"{k}: true")
            elif isinstance(v, list):
                parts.append(f'{k}: [' + ", ".join(f'"{x}"' for x in v) + "]")
            else:
                parts.append(f"{k}: {v}")
        return "  { " + ", ".join(parts) + " },"

    out = ["// AUTO-GENERATED by bin/sync_timing.py — timings from transcript.json,",
           "// text corrected against script.txt. hi:true → caption accent.",
           "var WORDS = ["]
    out += [js_obj(w, ["text", "start", "end", "hi"]) for w in words]
    out += ["];", "", "// Caption groups: 2-4 words, sentence-bounded. One visible at a time.",
            "var CAPTION_GROUPS = ["]
    out += [js_obj(g, ["text", "start", "end", "hi"]) for g in groups]
    out += ["];", ""]
    js = "\n".join(out)

    if not args.dry:
        (root / "captions-data.js").write_text(js)

    audio_end = round(words[-1]["end"] + 0.7, 1)
    print(f"words={len(words)}  groups={len(groups)}  narration_end≈{words[-1]['end']}")
    print(f"suggest: <audio data-duration=\"{audio_end}\">  root/overlay data-duration=\"{audio_end + 1.4:.1f}\"")
    print("\nsentence table (scene boundaries = sentence boundaries):")
    for si, s in enumerate(sentences):
        w0, w1 = s["words"][0], s["words"][-1]
        print(f"  [{si + 1}] {w0['start']:>6.2f} – {w1['end']:>6.2f}  {s['text']}")
    if args.dry:
        print("\n--dry: captions-data.js NOT written")


if __name__ == "__main__":
    main()
