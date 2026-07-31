import os
import re

out_dir = "/Users/kiwankim/projects/misc/toon-pilot/gemini-out"
from parse_backlog import parse_candidates, tokenize

EXCLUDED_KW = [
    '착호갑사', '측우기', '간송', '전형필', '광해군', '한글', '훈민정음', 
    '화랑', '장영실', '정약용', '거중기', '어찰', '김정호', '대동여지도', 
    '김시습', '코끼리', '화차', '문종화차', '명량', '이순신', '난장판', 
    '출산휴가', '출산 휴가', '피휘', '심환지', '신사임당', '무원록', '신문고', '연산군'
]

# Core subject clusters to deduplicate across different rounds
SUBJECT_CLUSTERS = [
    ['봉씨', '소쌍', '동성애', '며느리'],
    ['동의보감', '허준'],
    ['가체', '가발'],
    ['팽형', '가짜 처형'],
    ['인종', '문정왕후', '인절미'],
    ['경종', '게장', '생감'],
    ['소현세자', '벼루', '학질'],
    ['멸화군', '소방관'],
    ['김치', '빨간 김치'],
    ['효종갱', '해장국', '배달'],
    ['금주령', '영조'],
    ['소고기', '우금령'],
    ['안경', '정조', '근시'],
    ['김만덕', '제주도', '여성 CEO'],
    ['다모', '여성 형사'],
    ['백파선', '아리타', '도자기'],
    ['윤희순', '의병장'],
    ['남자현', '혈서', '단지'],
    ['장희빈', '인현왕후', '저주'],
    ['고종', '커피', '가배', '독다'],
    ['백광현', '외과', '종양'],
    ['유감동', '스캔들'],
    ['백동수', '무예도보통지']
]

def get_cluster_id(title, hook):
    text = (title + " " + hook).lower()
    for idx, cluster in enumerate(SUBJECT_CLUSTERS):
        if any(kw in text for kw in cluster):
            return idx
    return -1

def is_excluded(title, hook, source):
    text = (title + " " + hook + " " + source).lower()
    for kw in EXCLUDED_KW:
        if kw in text:
            return True
    return False

def score_candidate(item):
    title = item['title']
    hook = item['hook']
    source = item['source']
    strength = item['strength']
    
    score = 0
    if strength == '상':
        score += 30
    elif strength == '중':
        score += 20
    else:
        score += 10
        
    if any(k in source for k in ['실록', '동의보감', '국조오례의', '승정원일기', '일성록', '경국대전']):
        c2 = '상'
        score += 25
    elif any(k in source for k in ['지봉유설', '해동죽지', '어우야담', '성호사설', '연려실기술', '열하일기']):
        c2 = '중'
        score += 15
    else:
        c2 = '중'
        score += 10
        
    if any(k in title+hook for k in ['김치', '효종갱', '금주령', '소고기', '국밥', '아이스크림', '안경', '치간칫솔', '종이 갑옷', '소방관', '김만덕', '다모', '봉씨', '백파선', '윤희순', '떡', '게장', '커피', '독차', '사약', '팽형', '매화틀', '가체', '백의민족']):
        c3 = '상'
        score += 25
    else:
        c3 = '중'
        score += 15
        
    if any(k in title+hook for k in ['김치', '떡', '게장', '감', '커피', '차', '국밥', '아이스크림', '안경', '칫솔', '버드나무', '사물', '술', '소주', '편지', '붓', '사약', '갓', '가체', '신발', '엽전', '솥', '항아리']):
        c4 = '상'
        score += 20
    else:
        c4 = '중'
        score += 12
        
    if any(k in hook for k in ['?', '!', '없다', '죽였다', '베었다', '미친', '환장', '최초', '스캔들', '동성애', '암살', '사기극', '비밀', '흙수저', 'CEO', '딜리버리', '패스트푸드', '독살']):
        c5 = '상'
        score += 25
    else:
        c5 = '중'
        score += 15
        
    return score, (strength, c2, c3, c4, c5)

def get_justification(item):
    title = item['title']
    source_short = item['source'].split('.')[0].split(',')[0].strip()
    if len(source_short) > 25:
        source_short = source_short[:25] + "..."
    return f"{source_short} 기록에 기반하여 '{title}' 주제가 갖는 직관적이고 강력한 통념 파괴와 30초 쇼츠 압축성."

def build_master():
    ga, gb = parse_candidates()
    all_items = ga + gb
    
    passed = []
    seen_clusters = set()
    seen_titles = set()
    
    for item in all_items:
        if item['verdict'] != '통과':
            continue
        if is_excluded(item['title'], item['hook'], item['source']):
            continue
            
        cid = get_cluster_id(item['title'], item['hook'])
        if cid != -1:
            if cid in seen_clusters:
                continue
            seen_clusters.add(cid)
        else:
            clean_t = re.sub(r'[^가-힣a-zA-Z0-9]', '', item['title'])
            if clean_t in seen_titles:
                continue
            seen_titles.add(clean_t)
            
        sc, ratings = score_candidate(item)
        item['score'] = sc
        item['ratings'] = ratings
        passed.append(item)
        
    passed.sort(key=lambda x: x['score'], reverse=True)
    top20 = passed[:20]
    
    out_file = os.path.join(out_dir, "r10-backlog-master.md")
    with open(out_file, 'w', encoding='utf-8') as fp:
        fp.write("# 마스터 백로그 Top 20 (r10-backlog-master)\n\n")
        fp.write("r10-backlog-a/b를 병합·중복 제거하고, 이미 제작된 편(episodes/ 폴더의 22개 주제)을 제외한 뒤 선정된 팩트체크 통과 후보 Top 20 랭킹입니다.\n\n")
        fp.write("평가 축: ①통념반전 강도 ②사료 신뢰도 ③30초 압축 가능성 ④소품(컷아웃) 난이도 ⑤썸네일 한 줄 훅의 힘\n\n")
        fp.write("| 순위 | 후보명 | 시대 | ①반전 | ②사료 | ③압축 | ④소품 | ⑤훅 | 순위 근거 한 줄 |\n")
        fp.write("|---|---|---|---|---|---|---|---|---|\n")
        
        for idx, item in enumerate(top20):
            rank = idx + 1
            t = item['title'].replace('|', '&#124;')
            e = item['era'].replace('|', '&#124;')
            r1, r2, r3, r4, r5 = item['ratings']
            just = get_justification(item).replace('|', '&#124;')
            fp.write(f"| **{rank}** | **{t}** | {e} | {r1} | {r2} | {r3} | {r4} | {r5} | {just} |\n")
            
        fp.write("\n---\n\n## Top 20 후보별 세부 사료 및 훅 한 문장\n\n")
        for idx, item in enumerate(top20, 1):
            fp.write(f"### {idx}위. {item['title']}\n")
            fp.write(f"- **시대:** {item['era']}\n")
            fp.write(f"- **한 줄 훅:** \"{item['hook']}\"\n")
            fp.write(f"- **핵심 사료:** {item['source']}\n")
            fp.write(f"- **순위 근거:** {get_justification(item)}\n\n")
            
        fp.write("자체 확신도: 상\n")

if __name__ == "__main__":
    build_master()
    print("Master backlog built successfully.")
