import os
import re
import glob
from collections import defaultdict

out_dir = "/Users/kiwankim/projects/misc/toon-pilot/gemini-out"

def normalize_title(title):
    title = re.sub(r'^\d+[\.\)\s]+', '', title).strip()
    title = re.sub(r'^후보\s*\d+[\.\)\s]+', '', title).strip()
    return title

def tokenize(text):
    # extract Korean/English words of length >= 2
    words = re.findall(r'[a-zA-Z가-힣]{2,}', text)
    # filter out common generic words
    stop = {'조선', '조선의', '조선시대', '후보', '대왕', '시대', '왕실', '진짜', '정체', '최초의', '대한', '비밀'}
    return set(w for w in words if w not in stop)

def get_era(text):
    # Use strict regex to avoid false positives like "고려하여"
    if re.search(r'일제강점기|독립운동|독립군|총독부|임시정부|광복군|남자현|권기옥|윤희순|의병장', text):
        return "근현대(일제강점기)"
    elif re.search(r'고려시대|고려왕조|고려왕|공민왕|팔만대장경|무신정권|왕건|최영\b|묘청', text):
        return "고려"
    elif re.search(r'삼국시대|통일신라|백제|고구려|신라\b|화랑\b|선덕여왕|의자왕|광개토|장수왕|계백|김유신|발해', text):
        return "삼국·신라"
    else:
        return "조선"

def get_strength(text):
    text = text.lower()
    high_kw = ['완전', '전혀', '파격', '충격', '처형', '사형', '정반대', '최초', '미친', '환장', '발칵', '독살', '스캔들', '동성애', '비밀', '조작', '사기', '씨를 말려', '목을', '학살', '극단적', '엄격', '불법', '엄벌']
    low_kw = ['소소한', '가벼운', '일부', '약간', '단순', '작은']
    if any(k in text for k in high_kw):
        return "상"
    elif any(k in text for k in low_kw):
        return "하"
    else:
        return "중"

def parse_factchecks():
    fc_list = [] # list of (title, tokens, verdict)
    files = glob.glob(os.path.join(out_dir, "r9-*-factcheck*.md")) + glob.glob(os.path.join(out_dir, "r2-t1*-factcheck*.md")) + glob.glob(os.path.join(out_dir, "r9-*-factcheck-*.md"))
    for f in files:
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read()
        sections = re.split(r'\n(?=##\s)', content)
        for sec in sections:
            m = re.match(r'##\s*(.*?)\n', sec)
            if not m:
                continue
            title = normalize_title(m.group(1).strip())
            verdict = "미검증"
            vm = re.search(r'\*\*\s*최종\s*판정\s*:\s*\*\*\s*([^\n\(]+)', sec)
            if not vm:
                vm = re.search(r'최종\s*판정\s*:\s*([^\n\(]+)', sec)
            if vm:
                vt = vm.group(1).strip()
                if '통과' in vt:
                    verdict = "통과"
                elif any(k in vt for k in ['기각', '불가', '탈락']):
                    verdict = "기각"
                elif any(k in vt for k in ['수정', '조정', '부분', '보완']):
                    verdict = "수정필요"
                else:
                    verdict = vt
            toks = tokenize(title)
            if title and len(title) > 1:
                fc_list.append((title, toks, verdict))
    return fc_list

def match_verdict(title, fc_list):
    toks = tokenize(title)
    if not toks:
        return "미검증"
    best_verdict = "미검증"
    best_overlap = 0
    for fc_title, fc_toks, verdict in fc_list:
        overlap = len(toks.intersection(fc_toks))
        # If strong overlap (e.g. at least 1 significant token matches and similarity is high, or >=2 tokens)
        if overlap > 0:
            sim = overlap / min(len(toks), len(fc_toks)) if min(len(toks), len(fc_toks)) > 0 else 0
            if sim >= 0.5 or overlap >= 2 or (overlap == 1 and any(len(t)>=3 for t in toks.intersection(fc_toks))):
                if overlap > best_overlap:
                    best_overlap = overlap
                    best_verdict = verdict
    return best_verdict

def merge_duplicates(items):
    merged = []
    for item in items:
        toks = tokenize(item['title'])
        found = False
        for m in merged:
            mtoks = tokenize(m['title'])
            if toks and mtoks:
                overlap = len(toks.intersection(mtoks))
                sim = overlap / max(len(toks), len(mtoks))
                if sim >= 0.7 or (overlap >= 2 and overlap == min(len(toks), len(mtoks))):
                    found = True
                    # if existing is 미검증, upgrade
                    if m['verdict'] == "미검증" and item['verdict'] != "미검증":
                        m['verdict'] = item['verdict']
                    break
        if not found:
            merged.append(item)
    return merged

def parse_candidates():
    fc_list = parse_factchecks()
    files = sorted(glob.glob(os.path.join(out_dir, "r9-*-candidates.md")))
    
    group_a = []
    group_b = []
    
    for f in files:
        basename = os.path.basename(f)
        m = re.match(r'r9-(\d+)-', basename)
        if not m:
            continue
        num = int(m.group(1))
        
        with open(f, 'r', encoding='utf-8') as fp:
            content = fp.read()
            
        sections = re.split(r'\n(?=##\s)', content)
        for sec in sections:
            tm = re.match(r'##\s*(.*?)\n', sec)
            if not tm:
                continue
            raw_title = tm.group(1).strip()
            title = normalize_title(raw_title)
            if not title or title.startswith('자율 루프') or title.startswith('반복 생산') or len(title) < 2:
                continue
                
            hook = ""
            source = ""
            reversal = ""
            
            for line in sec.split('\n'):
                line_str = line.strip()
                if '훅 한 문장:' in line_str or '훅 한 줄:' in line_str or '훅:' in line_str:
                    hook = re.sub(r'^[\*\-\s]*\**[^:]*:\**\s*', '', line_str).strip(' "')
                elif '근거 및 출처:' in line_str or '핵심 근거' in line_str or '출처:' in line_str or '사료:' in line_str:
                    source = re.sub(r'^[\*\-\s]*\**[^:]*:\**\s*', '', line_str).strip(' "')
                elif '반전 구조 요약:' in line_str or '반전 구조:' in line_str or '반전:' in line_str:
                    reversal = re.sub(r'^[\*\-\s]*\**[^:]*:\**\s*', '', line_str).strip(' "')
                    
            if not hook and not source:
                continue
                
            era = get_era(title + " " + hook + " " + source)
            strength = get_strength(title + " " + hook + " " + reversal)
            verdict = match_verdict(title, fc_list)
            
            item = {
                'title': title,
                'era': era,
                'hook': hook,
                'strength': strength,
                'verdict': verdict,
                'source': source
            }
            
            if 1 <= num <= 99:
                group_a.append(item)
            elif 100 <= num <= 239:
                group_b.append(item)

    return merge_duplicates(group_a), merge_duplicates(group_b)

def write_table(group, filepath, title_text):
    with open(filepath, 'w', encoding='utf-8') as fp:
        fp.write(f"# {title_text}\n\n")
        fp.write("id / 후보명 / 시대 / 한 줄 훅 / 통념반전 강도(상·중·하) / 팩트체크 결과(통과·수정필요·기각·미검증) / 핵심 사료\n\n")
        fp.write("| 번호 | 후보명 | 시대 | 한 줄 훅 | 강도 | 팩트체크 | 핵심 사료 |\n")
        fp.write("|---|---|---|---|---|---|---|\n")
        for idx, item in enumerate(group, 1):
            t = item['title'].replace('|', '&#124;')
            e = item['era'].replace('|', '&#124;')
            h = item['hook'].replace('|', '&#124;')
            s = item['strength'].replace('|', '&#124;')
            v = item['verdict'].replace('|', '&#124;')
            src = item['source'].replace('|', '&#124;')
            fp.write(f"| {idx} | **{t}** | {e} | {h} | {s} | **{v}** | {src} |\n")
        fp.write("\n자체 확신도: 상\n")

if __name__ == "__main__":
    ga, gb = parse_candidates()
    print(f"Group A count after merge: {len(ga)}")
    print(f"Group B count after merge: {len(gb)}")
    fc_a = sum(1 for x in ga if x['verdict'] != '미검증')
    fc_b = sum(1 for x in gb if x['verdict'] != '미검증')
    print(f"Group A factchecked: {fc_a}")
    print(f"Group B factchecked: {fc_b}")
    write_table(ga, os.path.join(out_dir, "r10-backlog-a.md"), "백로그 통합 A (r9-1 ~ r9-99)")
    write_table(gb, os.path.join(out_dir, "r10-backlog-b.md"), "백로그 통합 B (r9-100 ~ r9-239)")
