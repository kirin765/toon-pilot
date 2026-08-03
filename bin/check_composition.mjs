#!/usr/bin/env node
// index.html + scenes.js + captions-data.js 정적 게이트.
//
// `npm run check`(hyperframes lint/validate/inspect)가 못 잡는, 이 프로젝트에서
// 실제로 밟은 지뢰만 기계로 검사한다. 렌더 전에 반드시 통과시킨다.
//
// Usage: node bin/check_composition.mjs [--dir .]
// Exit 0 = 통과(경고 있을 수 있음), 1 = 불합격.

import { readFileSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const argDir = process.argv.indexOf("--dir");
const DIR = argDir > -1 ? resolve(process.argv[argDir + 1]) : ROOT;

const fails = [];
const warns = [];
const fail = (m) => fails.push(m);
const warn = (m) => warns.push(m);

const read = (f) => readFileSync(join(DIR, f), "utf8");
const has = (f) => existsSync(join(DIR, f));

if (!has("index.html")) {
  console.error("✗ index.html 없음");
  process.exit(1);
}
const html = read("index.html");

// ─────────────────────────────────────────────────────────────────────────────
// 사이드카 JS를 vm으로 실제 로드 (정규식 파싱보다 정확)
// ─────────────────────────────────────────────────────────────────────────────
function loadGlobals(file, names) {
  if (!has(file)) return {};
  const ctx = vm.createContext({ window: {}, document: { querySelectorAll: () => [] } });
  try {
    vm.runInContext(read(file), ctx, { filename: file });
  } catch (e) {
    fail(`${file} 파싱 실패 — ${e.message}`);
    return {};
  }
  const out = {};
  for (const n of names) {
    try {
      out[n] = vm.runInContext(`typeof ${n} !== "undefined" ? ${n} : undefined`, ctx);
    } catch {
      out[n] = undefined;
    }
  }
  return out;
}

const { SCENES, TRANSITION } = loadGlobals("scenes.js", ["SCENES", "TRANSITION"]);
const { WORDS, CAPTION_GROUPS } = loadGlobals("captions-data.js", ["WORDS", "CAPTION_GROUPS"]);
const { CHAR_TUNING } = loadGlobals("char-tuning.js", ["CHAR_TUNING"]);
const TRANS = typeof TRANSITION === "number" ? TRANSITION : 0.45;

// ─────────────────────────────────────────────────────────────────────────────
// A. 스크립트 로드 순서 (지뢰 #54 — 빠져도 lint/validate/inspect는 0에러로 통과한다)
// ─────────────────────────────────────────────────────────────────────────────
const REQUIRED_SRC = ["char-tuning.js", "characters.js", "scenes.js", "captions-data.js", "layout-overrides.js"];
const srcOrder = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map((m) => m[1]);
for (const f of REQUIRED_SRC) {
  if (!srcOrder.includes(f)) fail(`<script src="${f}"> 누락 — 이게 빠져도 npm run check는 통과한다(지뢰 #54)`);
}
if (srcOrder.includes("char-tuning.js") && srcOrder.includes("characters.js") &&
    srcOrder.indexOf("char-tuning.js") > srcOrder.indexOf("characters.js")) {
  fail("char-tuning.js는 characters.js보다 먼저 로드해야 한다");
}
if (!/window\.__layout\s*=/.test(html)) {
  warn("window.__layout 훅 블록이 없다 — S6.5 레이아웃 튜너가 동작하지 않는다");
}
if (!has("layout-overrides.js")) fail("layout-overrides.js 파일 없음");

// ─────────────────────────────────────────────────────────────────────────────
// B. 결정론 / 프레임워크 금지 패턴
// ─────────────────────────────────────────────────────────────────────────────
for (const [re, msg] of [
  [/Math\.random\s*\(/, "Math.random() — 결정론 렌더 불가"],
  [/Date\.now\s*\(/, "Date.now() — 결정론 렌더 불가"],
  [/new Date\s*\(/, "new Date() — 결정론 렌더 불가"],
  [/\bfetch\s*\(/, "fetch() — 네트워크 호출 금지"],
  [/repeat\s*:\s*-1/, "GSAP repeat:-1 — 무한 반복은 렌더와 비호환(지뢰 #15)"],
]) {
  if (re.test(html)) fail(msg);
}
for (const sel of [":last-child", ":nth-child", ":first-child"]) {
  if (html.includes(sel)) {
    warn(`위치 기반 선택자 ${sel} 사용 — 나중에 요소를 끼워 넣으면 조용히 대상이 바뀐다(지뢰 #14)`);
  }
}
if (/transform-origin/.test(html)) {
  warn("transform-origin 사용 — SVG <g>에 CSS transform-origin을 쓰면 피벗이 틀어진다. " +
       "회전은 GSAP svgOrigin으로(지뢰 #1)");
}
// 팔 회전 트윈에 svgOrigin이 붙었는지 (지뢰 #1)
for (const m of html.matchAll(/rotation/g)) {
  const win = html.slice(Math.max(0, m.index - 400), m.index + 400);
  if (/arm-[lr]/.test(win) && !/svgOrigin/.test(win)) {
    warn("팔(arm-l/arm-r) rotation 트윈 근처에 svgOrigin이 없다 — 팔이 몸에서 분리된다(지뢰 #1)");
    break;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// C. 씬 타이밍 — index.html ↔ scenes.js 드리프트
// ─────────────────────────────────────────────────────────────────────────────
const sceneRe = /<div\s+id="(s\d+)"\s+class="clip scene"\s+data-start="([\d.]+)"\s+data-duration="([\d.]+)"\s+data-track-index="(\d+)"/g;
const scenes = [...html.matchAll(sceneRe)].map((m) => ({
  id: m[1], start: +m[2], dur: +m[3], track: +m[4],
}));
if (!scenes.length) fail("씬 div를 하나도 찾지 못했다 — id/class/data-* 속성 형식을 확인할 것");

const rootM = html.match(/id="root"[^>]*data-duration="([\d.]+)"/);
const rootDur = rootM ? +rootM[1] : null;
if (rootDur === null) fail("#root data-duration 없음");

for (let i = 0; i < scenes.length; i++) {
  const s = scenes[i];
  if (s.track !== i % 2) {
    fail(`${s.id} track=${s.track} — 씬은 track 0/1 교대여야 한다(같은 트랙 클립은 겹칠 수 없음)`);
  }
  const next = scenes[i + 1];
  if (next) {
    const overlap = +(s.start + s.dur - next.start).toFixed(2);
    if (Math.abs(overlap - TRANS) > 0.1) {
      warn(`${s.id}→${next.id} 겹침 ${overlap}s (TRANSITION ${TRANS}s 기대)`);
    }
  }
}
const lastEnd = scenes.length ? +(scenes.at(-1).start + scenes.at(-1).dur).toFixed(2) : 0;
if (rootDur !== null && Math.abs(rootDur - lastEnd) > 0.05) {
  fail(`#root data-duration ${rootDur} ≠ 마지막 씬 끝 ${lastEnd}`);
}

const overlayM = html.match(/id="overlay"[^>]*data-start="([\d.]+)"\s+data-duration="([\d.]+)"/);
if (!overlayM) fail("#overlay 클립 없음(브랜드 배지·자막 래퍼가 얹히는 트랙)");
else if (rootDur !== null && Math.abs(+overlayM[2] - rootDur) > 0.05) {
  fail(`#overlay data-duration ${overlayM[2]} ≠ root ${rootDur}`);
}

const audioM = html.match(/<audio[^>]*data-duration="([\d.]+)"/);
if (!audioM) fail("<audio> 내레이션 클립 없음");
else if (rootDur !== null && +audioM[1] > rootDur + 0.05) {
  fail(`audio data-duration ${audioM[1]} > root ${rootDur} — 오디오가 잘린다`);
}

if (Array.isArray(SCENES)) {
  if (SCENES.length !== scenes.length) {
    fail(`scenes.js 씬 ${SCENES.length}개 ≠ index.html 씬 ${scenes.length}개`);
  }
  for (const s of scenes) {
    const d = SCENES.find((x) => x.id === s.id);
    if (!d) { fail(`scenes.js에 ${s.id} 없음`); continue; }
    if (Math.abs(d.start - s.start) > 0.01 || Math.abs(d.dur - s.dur) > 0.01) {
      fail(`${s.id} 타이밍 불일치 — index.html(${s.start}/${s.dur}) vs scenes.js(${d.start}/${d.dur})`);
    }
  }
} else fail("scenes.js에서 SCENES를 읽지 못했다");

if (!Array.isArray(WORDS) || !WORDS.length) fail("captions-data.js WORDS 비어 있음 — 립싱크가 죽는다");
if (!Array.isArray(CAPTION_GROUPS) || !CAPTION_GROUPS.length) fail("captions-data.js CAPTION_GROUPS 비어 있음");
else if (rootDur !== null) {
  const capEnd = Math.max(...CAPTION_GROUPS.map((g) => g.end ?? 0));
  if (capEnd > rootDur + 0.05) fail(`마지막 자막 end ${capEnd} > root ${rootDur} — 자막이 잘린다`);
}
if (!CHAR_TUNING) warn("char-tuning.js에서 CHAR_TUNING을 읽지 못했다");

// ─────────────────────────────────────────────────────────────────────────────
// D. z-index 상승 (씬 전환은 트랙 교대 + z 상승으로 만든다)
// ─────────────────────────────────────────────────────────────────────────────
const zmap = new Map();
for (const m of html.matchAll(/#(s\d+)\s*\{[^}]*z-index:\s*(\d+)/g)) zmap.set(m[1], +m[2]);
let prevZ = -Infinity;
for (const s of scenes) {
  const z = zmap.get(s.id);
  if (z === undefined) { warn(`${s.id} z-index 미지정`); continue; }
  if (z <= prevZ) fail(`${s.id} z-index ${z} — 씬 z-index는 단조 증가해야 전환이 덮인다`);
  prevZ = Math.max(prevZ, z);
}
const zOverlay = (html.match(/#overlay\s*\{[^}]*z-index:\s*(\d+)/) || [])[1];
if (zOverlay !== undefined && +zOverlay <= prevZ) {
  fail(`#overlay z-index ${zOverlay} ≤ 마지막 씬 ${prevZ} — 자막·배지가 씬에 가려진다`);
}

// ─────────────────────────────────────────────────────────────────────────────
// E. 자막 안전존
// ─────────────────────────────────────────────────────────────────────────────
const capBottom = (html.match(/\.cap-wrap\s*\{[^}]*bottom:\s*(\d+)px/) || [])[1];
if (capBottom === undefined) warn(".cap-wrap bottom 규칙을 찾지 못했다");
else if (+capBottom < 380) fail(`.cap-wrap bottom ${capBottom}px < 380px — Shorts 하단 UI(제목·채널)에 자막이 가린다`);

// ─────────────────────────────────────────────────────────────────────────────
// F. 배경 다양성 (지뢰 #62 — 게이트가 없으면 씬 7개가 같은 방이 된다)
// ─────────────────────────────────────────────────────────────────────────────
const stageRe = /<div class="stage"([^>]*)>/g;
const stages = [...html.matchAll(stageRe)].map((m) => m[1]);
const bgKeys = stages.map((attrs) => {
  const bg = (attrs.match(/data-(\w+)-bg="/) || [])[1];
  if (!bg) return null; // 아웃트로 등 인젝터 없는 씬
  const tone = (attrs.match(/data-\w+-tone="([^"]+)"/) || [])[1] || "";
  return tone ? `${bg}:${tone}` : bg;
});
const named = bgKeys.filter(Boolean);
const distinct = new Set(named);
if (distinct.size < 3) {
  fail(`distinct 배경 ${distinct.size}종 — 아웃트로 제외 3종 이상 필요(같은 서사도 방/마당/문밖으로 쪼갠다)`);
}
let runBg = 1;
for (let i = 1; i < named.length; i++) {
  runBg = named[i] === named[i - 1] ? runBg + 1 : 1;
  if (runBg === 4) fail(`배경 '${named[i]}' 4씬 연속 — 3씬을 넘기지 말 것(줌·시간대·다른 벽면으로 변주)`);
}

// ─────────────────────────────────────────────────────────────────────────────
// G. 배경 인젝터 내부 — emit 순서(지뢰 #69) · 색 동화(지뢰 #70) · 프리미티브 수
// ─────────────────────────────────────────────────────────────────────────────
function bodyOf(src, startIdx) {
  // 문자열 리터럴 안의 중괄호를 건너뛰며 함수 본문을 잘라낸다.
  let depth = 0, i = startIdx, quote = null;
  for (; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === "\\") i++;
      else if (c === quote) quote = null;
    } else if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "{") depth++;
    else if (c === "}") { depth--; if (!depth) return src.slice(startIdx, i + 1); }
  }
  return src.slice(startIdx);
}

const STAGE_H = 1920;
const PRIMITIVE = /<(rect|path|circle|ellipse|polygon|polyline|line|text)\b/g;

// 인젝터가 emit하는 .prop 하나를 { y0, y1, w, fullBleed }로 환산한다.
// left/top/bottom/width/height가 리터럴 px일 때만 판정한다(문자열 결합은 건너뜀).
function parseProps(body) {
  const out = [];
  const re = /<(div|svg) class="prop"([\s\S]*?)style="([^"]*)"/g;
  for (const m of body.matchAll(re)) {
    const [tag, attrs, style] = [m[1], m[2], m[3]];
    const px = (k) => {
      const v = style.match(new RegExp(`${k}\\s*:\\s*(-?\\d+)px`));
      return v ? +v[1] : null;
    };
    const w = px("width"), h = px("height"), top = px("top"), bottom = px("bottom");
    if (w === null || h === null) continue;
    const y0 = top !== null ? top : bottom !== null ? STAGE_H - bottom - h : null;
    if (y0 === null) continue;
    const adj = (attrs.match(/-([\w-]+)"/) || [])[1] || `${tag}@${m.index}`;
    // 밴드 = 배경색만 깐 풀폭 div. <svg> 구조물(단·기둥·전각)은 아무리 넓어도 밴드가 아니다.
    const band = tag === "div" && /background\s*:/.test(style) && w >= 1080 && h >= 300;
    out.push({ adj, tag, start: m.index, y0, y1: y0 + h, w, h, band });
  }
  for (let i = 0; i < out.length; i++) out[i].end = out[i + 1] ? out[i + 1].start : Infinity;
  return out;
}

const propsOf = new Map();
const injectors = [];
for (const m of html.matchAll(/function\s+(\w*BgSVG)\s*\([^)]*\)\s*(?=\{)/g)) {
  injectors.push({ name: m[1], body: bodyOf(html, m.index + m[0].length) });
}

for (const { name, body } of injectors) {
  const prims = [...body.matchAll(PRIMITIVE)];
  if (prims.length < 20) {
    warn(`${name}: SVG 프리미티브 ${prims.length}개 — 배경 인젝터 하한 20개(3레이어·2톤 명암이 안 들어간 신호)`);
  }

  // emit 순서: 풀블리드 밴드는 그 위에 서는 구조물보다 먼저 나와야 한다(지뢰 #69).
  const props = parseProps(body);
  for (let i = 0; i < props.length; i++) {
    if (!props[i].band) continue;
    const covered = props.slice(0, i).find((e) => !e.band && e.y0 < props[i].y1 && e.y1 > props[i].y0);
    if (covered) {
      warn(`${name}: 풀블리드 밴드 '${props[i].adj}'(y ${props[i].y0}~${props[i].y1})가 먼저 그린 ` +
           `'${covered.adj}'(y ${covered.y0}~${covered.y1})의 y구간을 삼킨다 — 밴드를 앞으로 옮길 것(지뢰 #69). ` +
           `권장 순서: 하늘 → 지면 → 지면 디테일 → 원경 → 중경 건물 → 전경 소품`);
      break;
    }
  }
  propsOf.set(name, props);
}

// 색 동화(지뢰 #70): 씬 stage 배경색과 똑같은 리터럴 색이 그 씬 인젝터의 소품에 쓰이면
// 소품이 "묻히는" 게 아니라 통째로 사라지고 라벨·제첨 같은 부속만 허공에 뜬다.
const stageBg = new Map();
for (const m of html.matchAll(/#(s\d+)\s+\.stage\s*\{[^}]*background:\s*(#[0-9a-fA-F]{3,8})/g)) {
  stageBg.set(m[1], m[2].toLowerCase());
}
const injectorOf = new Map(); // 씬 id → 인젝터 이름
for (const m of html.matchAll(/<div class="stage"([^>]*)>/g)) {
  const bg = (m[1].match(/data-(\w+)-bg="(s\d+)"/) || []);
  if (bg[1]) injectorOf.set(bg[2], `${bg[1]}BgSVG`);
}
for (const [sceneId, injName] of injectorOf) {
  const bg = stageBg.get(sceneId);
  const inj = injectors.find((x) => x.name === injName);
  if (!bg || !inj) continue;
  const re = new RegExp(`(?:fill|background)\\s*[:=]\\s*["']?${bg}\\b`, "gi");
  const hit = new Set();
  for (const m of inj.body.matchAll(re)) {
    // 배경 밴드가 stage 색과 같은 건 의도된 것. 밴드 밖 소품에 같은 색이 쓰였을 때만 문제.
    const owner = (propsOf.get(injName) || []).find((p) => m.index >= p.start && m.index < p.end);
    if (owner && !owner.band) hit.add(owner.adj);
  }
  for (const adj of hit) {
    warn(`${sceneId}: 소품 '${adj}'에 stage 배경색 ${bg}이 그대로 쓰였다 — 배경 위에 직접 놓이면 ` +
         `소품이 "묻히는" 게 아니라 통째로 사라지고 부속만 뜬다(지뢰 #70). 다른 소품 위라면 무시`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// H. 캐스팅 · 배치 (scenes.js)
// ─────────────────────────────────────────────────────────────────────────────
const VARIANTS = ["host", "king", "admiral", "militia", "lady", "kid"];
const HATS = ["myeonryu", "samo", "paeraengi", "gulgeon"];
if (Array.isArray(SCENES)) {
  const outroId = scenes.at(-1)?.id;
  let emptyRun = 0;
  for (const sc of SCENES) {
    const chars = sc.chars || [];
    if (sc.id !== outroId) {
      emptyRun = chars.length === 0 ? emptyRun + 1 : 0;
      if (emptyRun > 2) fail(`${sc.id}: 무인(캐릭터 0명) 씬 3연속 — 행위 주체가 있는 문장은 rig를 세운다`);
    }
    for (const c of chars) {
      if (!VARIANTS.includes(c.variant)) {
        fail(`${sc.id}/${c.id}: variant "${c.variant}"는 rig 6종(${VARIANTS.join("·")}) 밖 — 신규 파츠는 별도 아트 세션`);
      }
      if (c.hat && !HATS.includes(c.hat)) {
        fail(`${sc.id}/${c.id}: hat "${c.hat}" 미지원(${HATS.join("·")})`);
      }
      if (sc.id !== outroId) {
        if (c.bottom !== undefined && (c.bottom < 500 || c.bottom > 700)) {
          warn(`${sc.id}/${c.id}: bottom ${c.bottom} — 검증 프리셋 560~660 밖(지면선 규칙)`);
        }
        if (c.w !== undefined && (c.w < 340 || c.w > 480) && c.variant !== "kid") {
          warn(`${sc.id}/${c.id}: w ${c.w} — 검증 프리셋 360~440 밖(kid는 예외)`);
        }
      }
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 리포트
// ─────────────────────────────────────────────────────────────────────────────
console.log(`컴포지션  ${DIR}`);
console.log(`  씬 ${scenes.length} · 길이 ${rootDur}s · distinct 배경 ${distinct.size}종 · 자막 그룹 ${CAPTION_GROUPS?.length ?? 0}`);
if (stageBg.size) console.log(`  stage 배경색 ${[...new Set(stageBg.values())].length}종`);
console.log();
for (const w of warns) console.log(`  ⚠ ${w}`);
for (const f of fails) console.log(`  ✗ ${f}`);
console.log();
if (fails.length) {
  console.log(`불합격 — 오류 ${fails.length}건, 경고 ${warns.length}건. 고치고 다시 돌린다.`);
  process.exit(1);
}
console.log(`통과 — 경고 ${warns.length}건. (경고는 판단해서 처리)`);
