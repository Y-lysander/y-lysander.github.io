/* ============================================
   八珍录 · 页面主逻辑
   路由 / 渲染 / 搜索 / 收藏(localStorage)
   ============================================ */
"use strict";

/* 八大菜系元信息 */
const CUISINES = [
  { key: "chuan", name: "川菜", en: "Sichuan",  motto: "一菜一格，百菜百味", color: "#b03a2e" },
  { key: "lu",    name: "鲁菜", en: "Shandong", motto: "咸鲜为本，火候见功", color: "#9a6b3f" },
  { key: "yue",   name: "粤菜", en: "Cantonese",motto: "清而不淡，鲜而不俗", color: "#6f8a5e" },
  { key: "su",    name: "苏菜", en: "Jiangsu",  motto: "刀工精细，味道平和", color: "#c19a5b" },
  { key: "zhe",   name: "浙菜", en: "Zhejiang", motto: "清鲜爽脆，咸香合一", color: "#8a8a5c" },
  { key: "min",   name: "闽菜", en: "Fujian",   motto: "汤鲜味醇，善用海味", color: "#a35d4a" },
  { key: "xiang", name: "湘菜", en: "Hunan",    motto: "香辣咸鲜，味重油亮", color: "#cf5a3b" },
  { key: "hui",   name: "徽菜", en: "Anhui",    motto: "巧用火功，咸鲜重色", color: "#5f6b4a" }
];

const CUISINE_MAP = Object.fromEntries(CUISINES.map(c => [c.key, c]));
const FAV_KEY = "bazhenlu:favorites";
// 移动端简要 nav 断点（与 CSS `@media (max-width:640px)` 保持一致）
const MOBILE_Q = window.matchMedia("(max-width: 640px)");

/* ---------- 工具 ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, m => ({
  "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
}[m]));

function allRecipes() {
  const list = [];
  for (const c of CUISINES) {
    (window.RECIPES[c.key] || []).forEach(r => list.push({ ...r, cuisine: c.key }));
  }
  return list;
}
function getRecipe(id) { return allRecipes().find(r => r.id === id); }

/* ---------- 收藏 ---------- */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch { return []; }
}
function isFav(id) { return getFavorites().includes(id); }
function toggleFav(id) {
  const favs = getFavorites();
  const i = favs.indexOf(id);
  if (i >= 0) favs.splice(i, 1); else favs.push(id);
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  updateFavBadge();
}
function updateFavBadge() {
  const n = getFavorites().length;
  const badge = $("#favoriteCount");
  badge.textContent = n;
  badge.hidden = n === 0;
}
/* 收藏涉及到的菜系（按 CUISINES 顺序） */
function favoriteCuisines() {
  const fav = new Set(getFavorites());
  return CUISINES.filter(c => allRecipes().some(r => r.cuisine === c.key && fav.has(r.id)));
}

/* ---------- 图标 ---------- */
const HEART_SVG = (filled) =>
  `<svg class="heart${filled ? " filled" : ""}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
     <path d="M12 21s-7.5-4.7-10-9C.6 8.3 2.5 4 6.3 4c2.4 0 3.8 1.2 5.7 3.4C13.9 5.2 15.3 4 17.7 4c3.8 0 5.7 4.3 3.7 8-2.5 4.3-9.4 9-9.4 9z"
       fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
   </svg>`;

/* 底部导航（移动端简要版）线性图标 */
const TAB_ICONS = {
  home: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M4 11 12 4l8 7"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/></svg>`,
  cuisine: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/>
    <rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,
  search: `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="6.5"/><line x1="16" y1="16" x2="20" y2="20"/></svg>`
};

/* 祥云纹（中国元素点缀，inline SVG 便于铺色/镜像） */
const SWIRL_SVG = `
  <svg viewBox="0 0 60 38" width="54" height="34" fill="none" stroke="currentColor"
       stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="20" cy="25" r="11"/>
    <circle cx="36" cy="18" r="14"/>
    <circle cx="50" cy="26" r="9"/>
    <path d="M7 25a6.5 6.5 0 0 0 6 6.5h34a6.5 6.5 0 0 0 6-6.5" opacity=".8"/>
    <path d="M36 18c-4-4 1-9 5-7" opacity=".55"/>
  </svg>`;

/* ---------- 渲染：菜谱网格 ---------- */
function recipeTileHTML(r, { showCuisine = true } = {}) {
  const c = CUISINE_MAP[r.cuisine];
  const fav = isFav(r.id);
  const badge = showCuisine ? `<span class="badge-cuisine">${c.name}</span>` : "";
  return `
    <article class="recipe-tile" data-route="/recipe/${r.id}" style="--cuisine-color:${c.color}">
      <div class="thumb">
        ${badge}
        <img src="${r.image}" alt="${esc(r.name)}" loading="lazy">
      </div>
      <div class="tile-body">
        <h4>${esc(r.name)}</h4>
        <p class="tile-sub">${esc(r.time)} · ${esc(r.difficulty)}</p>
        <button class="tile-fav" data-fav="${r.id}" aria-label="收藏 ${esc(r.name)}">
          ${HEART_SVG(fav)}
        </button>
      </div>
    </article>`;
}

/* ---------- 视图：主界面 ---------- */
function renderHome() {
  patchDockActive(null);
  const hasSearch = $("#searchInput").value.trim();
  if (hasSearch) {
    $("#viewRoot").innerHTML = renderSearch(hasSearch);
    return;
  }
  // 移动端首页：封面 + 收藏中的菜系；其余屏幕：原有八大菜系横幅首页
  const inner = MOBILE_Q.matches ? renderMobileHome() : renderDesktopHome();
  $("#viewRoot").innerHTML = inner;
}

/* 桌面/宽屏首页（原有构图，含四角点缀） */
function renderDesktopHome() {
  const tiles = CUISINES.map(c => {
    const count = (window.RECIPES[c.key] || []).length;
    return `
      <button class="cuisine-item" data-route="/cuisine/${c.key}" style="--cuisine-color:${c.color}">
        <span class="cuisine-seal">${c.name[0]}</span>
        <h3>${c.name}</h3>
        <span class="en">${c.en}</span>
        <span class="count">${count} 道佳肴</span>
      </button>`;
  }).join("");
  return `
    <div class="view home">
      ${(() => {
        const deco = ["chuan-gongbaojiding", "zhe-dongporou", "su-songshuguaiyu", "min-fotiaoqiang"]
          .map(id => getRecipe(id))
          .filter(Boolean)
          .map((r, i) => `<img class="deco-dish d${i + 1}" src="${r.image}" alt="" loading="lazy">`)
          .join("");
        return `<div class="home-deco" aria-hidden="true">${deco}</div>`;
      })()}
      <div class="section-head">
        <div class="auspice" aria-hidden="true">
          <span class="swirl">${SWIRL_SVG}</span>
          <span class="kicker">华夏百味 · 一系一味</span>
          <span class="swirl mirror">${SWIRL_SVG}</span>
        </div>
        <p class="lead">山川风物，尽在一方烟火</p>
        <div class="rule"><span class="gem"></span></div>
      </div>
      <div class="cuisine-strip">${tiles}</div>
      <p class="footer-note">选一道称心的菜，为今日添一味温暖</p>
    </div>`;
}

/* 移动端首页：封面 + 收藏中的菜系 */
function renderMobileHome() {
  const mainDish = getRecipe("su-songshuguaiyu");
  const sideDish = getRecipe("chuan-gongbaojiding");
  const favs = getFavorites();
  const favCuisines = favoriteCuisines();

  const tiles = favCuisines.map(c => {
    const count = allRecipes().filter(r => r.cuisine === c.key && favs.includes(r.id)).length;
    return `
      <button class="cuisine-item" data-route="/cuisine/${c.key}/fav" style="--cuisine-color:${c.color}">
        <span class="cuisine-seal">${c.name[0]}</span>
        <h3>${c.name}</h3>
        <span class="en">${c.en}</span>
        <span class="count">已藏 ${count} 道</span>
      </button>`;
  }).join("");

  const favSection = favCuisines.length ? `
    <section class="fav-cuisines">
      <div class="mobile-sect-head">
        <h3>收藏中的菜系</h3>
        <span class="sect-sub">共收藏 ${favs.length} 道佳肴</span>
      </div>
      <div class="cuisine-strip">${tiles}</div>
    </section>` : `
    <section class="fav-cuisines">
      <div class="mobile-sect-head"><h3>收藏中的菜系</h3></div>
      <div class="fav-empty">
        <div class="empty-seal">藏</div>
        <p>还没有收藏，去菜系里寻一道合口味的菜，点击 ♥ 收好。</p>
        <button class="btn-back" data-route="/cuisine">浏览八大菜系</button>
      </div>
    </section>`;

  return `
    <div class="view mobile-home">
      <section class="home-cover">
        ${mainDish ? `<img class="cover-bg" src="${mainDish.image}" alt="" loading="lazy">` : ""}
        ${sideDish ? `<img class="cover-dish" src="${sideDish.image}" alt="" loading="lazy">` : ""}
        <div class="cover-body">
          <span class="cover-kicker">山之味 · 海之鲜 · 一器一味</span>
          <div class="cover-seal">八</div>
          <h2 class="cover-title">八珍录</h2>
          <p class="cover-sub">中国八大菜系 · 食谱典藏</p>
          <div class="cover-divider"><span class="line"></span><span class="gem"></span><span class="line"></span></div>
        </div>
      </section>
      ${favSection}
      <p class="footer-note">山河风味，逐一收藏</p>
    </div>`;
}

/* 视图：八大菜系索引（移动端「菜系」标签） */
function renderCuisineIndex() {
  const tiles = CUISINES.map(c => {
    const count = (window.RECIPES[c.key] || []).length;
    return `
      <button class="cuisine-item" data-route="/cuisine/${c.key}" style="--cuisine-color:${c.color}">
        <span class="cuisine-seal">${c.name[0]}</span>
        <h3>${c.name}</h3>
        <span class="en">${c.en}</span>
        <span class="count">${count} 道佳肴</span>
      </button>`;
  }).join("");
  $("#viewRoot").innerHTML = `
    <div class="view cuisine-index">
      <div class="section-head">
        <span class="kicker">The Eight Schools</span>
        <h1>八大菜系</h1>
        <p class="lead">一方水土，养一方味</p>
        <div class="rule"><span class="gem"></span></div>
      </div>
      <div class="cuisine-strip">${tiles}</div>
      <p class="footer-note">共 ${allRecipes().length} 道佳肴，静待品尝</p>
    </div>`;
  patchDockActive(null);
}

/* 视图：某菜系下「我收藏的菜」（移动端首页菜系入口） */
function renderFavCuisine(key) {
  const c = CUISINE_MAP[key];
  if (!c) { renderHome(); return; }
  const favs = new Set(getFavorites());
  const items = (window.RECIPES[key] || []).filter(r => favs.has(r.id));
  const body = items.length ? `
    <div class="recipe-grid">${items.map(r => recipeTileHTML({ ...r, cuisine: key }, { showCuisine: false })).join("")}</div>
    <p class="footer-note">已收藏 ${items.length} 道${c.name}佳肴</p>` : `
    <div class="empty">
      <div class="empty-seal">藏</div>
      <h3>此菜系还未收藏</h3>
      <p>去${c.name}里挑一道合口味的菜，点击 ♥ 收藏。</p>
      <button class="btn-back" data-route="/cuisine/${key}" style="margin:12px auto 0;display:block">浏览${c.name}菜谱</button>
    </div>`;
  $("#viewRoot").innerHTML = `
    <div class="view">
      <button class="btn-back" data-route="/home">← 返回首页</button>
      <div class="cuisine-hero" style="--cuisine-color:${c.color}">
        <span class="seal-lg">${c.name[0]}</span>
        <div>
          <h1>${c.name} · 我的收藏</h1>
          <p class="motto">${c.motto}</p>
        </div>
      </div>
      ${body}
    </div>`;
  patchDockActive(key);
}

/* 视图：菜系页 */
function renderCuisine(key) {
  const c = CUISINE_MAP[key];
  if (!c) { renderHome(); return; }
  const recipes = window.RECIPES[key] || [];
  const tiles = recipes.map(r => recipeTileHTML({ ...r, cuisine: key }, { showCuisine: false })).join("");
  $("#viewRoot").innerHTML = `
    <div class="view">
      <button class="btn-back" data-route="/home">← 返回首页</button>
      <div class="cuisine-hero" style="--cuisine-color:${c.color}">
        <span class="seal-lg">${c.name[0]}</span>
        <div>
          <h1>${c.name}</h1>
          <p class="motto">${c.motto} · ${c.en}</p>
        </div>
      </div>
      <div class="cuisine-rule" aria-hidden="true">
        <span class="swirl">${SWIRL_SVG}</span>
        <span class="rule"><span class="gem"></span></span>
        <span class="swirl mirror">${SWIRL_SVG}</span>
      </div>
      <div class="recipe-grid">${tiles}</div>
      <div class="dock-connect">
        <span class="rule-sm"></span>
        <p>浏览完这 ${recipes.length} 道${c.name}，可在底部导航切换其他菜系</p>
      </div>
    </div>`;
  patchDockActive(key);
}

/* ---------- 视图：菜谱详情 ---------- */
function renderRecipe(id) {
  const r = getRecipe(id);
  if (!r) { renderHome(); return; }
  const c = CUISINE_MAP[r.cuisine];
  const fav = isFav(id);
  const ingList = r.ingredients.map(i =>
    `<li><span>${esc(i.name)}</span><span class="amount">${formatAmount(i)}</span></li>`).join("");
  const seasList = r.seasonings.map(i =>
    `<li><span>${esc(i.name)}</span><span class="amount">${formatAmount(i)}</span></li>`).join("");
  const steps = r.steps.map((s, i) =>
    `<div class="step">
       <span class="step-num">${i + 1}</span>
       <div class="step-body"><p>${esc(s)}</p></div>
     </div>`).join("");
  $("#viewRoot").innerHTML = `
    <div class="view detail">
      <button class="btn-back" data-route="/cuisine/${r.cuisine}">← 返回${c.name}</button>
      <div class="detail-head">
        <div class="detail-img" data-lightbox="${r.image}">
          <span class="detail-cuisine-tag" style="background:${c.color}">${c.name}</span>
          <img src="${r.image}" alt="${esc(r.name)}">
        </div>
        <div class="detail-info">
          <h1>${esc(r.name)}</h1>
          <p class="detail-desc">${esc(r.desc)}</p>
          <div class="detail-meta">
            <span class="m"><b>${esc(r.time)}</b><span>烹饪时间</span></span>
            <span class="m"><b>${esc(r.difficulty)}</b><span>难度</span></span>
            <span class="m"><b>${esc(r.serves)}</b><span>分量</span></span>
          </div>
          <button class="btn-fav${fav ? " active" : ""}" data-fav="${r.id}">
            ${HEART_SVG(fav)}<span>${fav ? "已收藏" : "收藏菜谱"}</span>
          </button>
        </div>
      </div>

      <div class="material-block">
        <div class="panel">
          <div class="panel-title">所需食材</div>
          <ul class="ing-list">${ingList}</ul>
        </div>
        <div class="panel">
          <div class="panel-title">所需调料</div>
          <ul class="ing-list">${seasList}</ul>
        </div>
      </div>

      <div class="steps">
        <h2 class="steps-title">做法步骤</h2>
        ${steps}
      </div>
      ${r.tips ? `<div class="note">小贴士：${esc(r.tips)}</div>` : ""}
    </div>`;
  patchDockActive(r.cuisine);
}
function formatAmount(item) { return item.unit ? `${item.amount} ${item.unit}` : String(item.amount); }

/* ---------- 视图：收藏页 ---------- */
function renderFavorites() {
  const favs = getFavorites();
  const recipes = allRecipes().filter(r => favs.includes(r.id));
  let body;
  if (!recipes.length) {
    body = `
      <div class="empty">
        <div class="empty-seal">藏</div>
        <h3>还没有收藏</h3>
        <p>遇到喜欢的菜，点击 ♥ 收藏，这里会替你好好收着。</p>
        ${!favs.length ? `<button class="btn-back" data-route="/home" style="margin:12px auto 0;display:block">去逛逛菜谱</button>` : ""}
      </div>`;
  } else {
    const tiles = recipes.map(r => recipeTileHTML(r, { showCuisine: true })).join("");
    body = `
      <div class="recipe-grid">${tiles}</div>
      <p class="footer-note">已收藏 ${recipes.length} 道佳肴</p>`;
  }
  $("#viewRoot").innerHTML = `
    <div class="view">
      <div class="section-head">
        <span class="kicker">Favorites</span>
        <h1>我的收藏</h1>
        <div class="rule"></div>
      </div>
      ${body}
    </div>`;
  patchDockActive(null);
}

/* ---------- 搜索（返回结构化 HTML） ---------- */
function renderSearch(q) {
  const kw = q.trim().toLowerCase();
  const results = allRecipes().filter(r => r.name.toLowerCase().includes(kw));
  return `
    <div class="section-head">
      <span class="kicker">Search</span>
      <h1>“${esc(q)}”</h1>
      <p>共找到 ${results.length} 道菜谱</p>
      <div class="rule"></div>
    </div>
    ${renderSearchResults(kw, results)}`;
}

/* 搜索结果的正文部分（菜系分组 / 空态），可被首页搜索与移动端搜索页复用 */
function renderSearchResults(kw, results) {
  if (!results.length) {
    return `
      <div class="empty">
        <div class="empty-seal">寻</div>
        <h3>未能找到相关菜谱</h3>
        <p>换个菜名再试试吧，比如「宫保鸡丁」「鱼香肉丝」。</p>
      </div>`;
  }
  const groups = CUISINES.map(c => {
    const hits = results.filter(r => r.cuisine === c.key);
    if (!hits.length) return "";
    return `
      <div class="search-group">
        <div class="search-group-title">
          <span class="tag" style="background:${c.color}">${c.name}</span>
          ${c.name} · ${hits.length} 道
        </div>
        <div class="recipe-grid">${hits.map(r => recipeTileHTML(r, { showCuisine: false })).join("")}</div>
      </div>`;
  }).join("");
  return groups;
}

/* 视图：移动端搜索页（仅搜索框 + 下方结果） */
function renderMobileSearch() {
  $("#viewRoot").innerHTML = `
    <div class="view search-page">
      <div class="search-hero">
        <span class="kicker">Search</span>
        <h1>搜寻珍味</h1>
        <div class="m-search-box">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <line x1="16" y1="16" x2="20" y2="20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
          <input id="mobileSearchInput" placeholder="搜索菜名，如「宫保鸡丁」「鱼香肉丝」…" autocomplete="off">
          <button class="clear-btn" id="mobileSearchClear" aria-label="清空" hidden>×</button>
        </div>
      </div>
      <div class="search-results" id="mobileSearchResults"></div>
    </div>`;
  patchDockActive(null);
  const input = $("#mobileSearchInput");
  const clearBtn = $("#mobileSearchClear");
  const rerender = () => {
    const v = input.value;
    clearBtn.hidden = !v;
    mobileSearchResults(v);
  };
  input.addEventListener("input", rerender);
  clearBtn.addEventListener("click", () => {
    input.value = "";
    rerender();
    input.focus();
  });
  requestAnimationFrame(() => input.focus());
}
function mobileSearchResults(q) {
  const box = $("#mobileSearchResults");
  if (!box) return;
  const kw = q.trim();
  if (!kw) {
    box.innerHTML = `
      <div class="search-hint">
        <div class="hint-seal">寻</div>
        <p>输入一道菜名，即刻开启寻味之旅</p>
      </div>`;
    return;
  }
  const lower = kw.toLowerCase();
  const matches = allRecipes().filter(r => r.name.toLowerCase().includes(lower));
  box.innerHTML = renderSearchResults(lower, matches);
}

/* ---------- 路由 ---------- */
function parseRoute() {
  return location.hash.replace(/^#/, "") || "/home";
}
function navigate() {
  const route = parseRoute();
  const parts = route.split("/").filter(Boolean);
  if (parts[0] === "recipe" && parts[1]) renderRecipe(decodeURIComponent(parts[1]));
  else if (parts[0] === "cuisine" && parts[1] && parts[2] === "fav") renderFavCuisine(parts[1]);
  else if (parts[0] === "cuisine" && parts[1]) renderCuisine(parts[1]);
  else if (parts[0] === "cuisine") { if (MOBILE_Q.matches) renderCuisineIndex(); else renderHome(); }
  else if (parts[0] === "search") { if (MOBILE_Q.matches) renderMobileSearch(); else renderHome(); }
  else if (parts[0] === "favorites") renderFavorites();
  else renderHome();
  updateDockVisibility(route);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* 底部导航可见性：桌面端首页/菜品界面隐藏，其余界面从下方飞入；移动端恒显示 */
function updateDockVisibility(route) {
  const dock = $("#cuisineDock");
  if (MOBILE_Q.matches) { dock.classList.remove("dock-hidden"); return; }
  const homeOnly = !route || route === "/home" || route === "/cuisine" || route === "/search" || route.startsWith("/recipe/");
  dock.classList.toggle("dock-hidden", homeOnly);
}

/* ---------- 底部全局导航 ---------- */
const BUBBLE_INSET = 7;
let lastBubbleRect = null;

function buildDock() {
  const dock = $("#cuisineDock");
  const desktopItems = CUISINES.map(c =>
    `<button class="dock-item" data-route="/cuisine/${c.key}">${c.name}<small>${c.en}</small></button>`
  ).join("");
  const mobileItems = [
    { route: "/home",      label: "首页", icon: TAB_ICONS.home },
    { route: "/cuisine",   label: "菜系", icon: TAB_ICONS.cuisine },
    { route: "/search",    label: "搜索", icon: TAB_ICONS.search },
    { route: "/favorites", label: "收藏", icon: HEART_SVG(false) }
  ].map(t => `<button class="dock-item" data-route="${t.route}">${t.icon}<span>${t.label}</span></button>`).join("");
  dock.innerHTML = `
    <div class="dock-bubble" id="dockBubble" aria-hidden="true"></div>
    <div class="dock-group dock-desktop">${desktopItems}</div>
    <div class="dock-group dock-mobile">${mobileItems}</div>`;
}

/* 气泡吸附到当前可见组中激活的导航项；跨项切换时以慢-快-慢曲线滑动 */
function moveDockBubble(instant = false) {
  const dock = $("#cuisineDock");
  const bubble = $("#dockBubble");
  if (!dock || !bubble) return;
  const active = [...dock.querySelectorAll(".dock-item.active")].find(it => it.offsetParent !== null);
  if (active) {
    const dockBox = dock.getBoundingClientRect();
    const box = active.getBoundingClientRect();
    // 四周对称内嵌：气泡圆端与底栏弧线自然贴合，不做边缘拉长
    const left = box.left - dockBox.left + BUBBLE_INSET;
    const width = box.width - BUBBLE_INSET * 2;
    if (instant) bubble.style.transition = "none";
    bubble.style.left = left + "px";
    bubble.style.width = width + "px";
    bubble.style.opacity = "1";
    lastBubbleRect = { left, width };
    if (instant) { void bubble.offsetWidth; bubble.style.transition = ""; }
  } else if (lastBubbleRect) {
    // 无激活项：原地淡出，保留上一位置，便于再次进入时从原位滑动
    bubble.style.opacity = "0";
  } else {
    // 首次无激活项：吸附到可见组首项位置（隐藏），后续切换从该处平滑滑动
    const first = [...dock.querySelectorAll(".dock-item")].find(it => it.offsetParent !== null);
    if (first) {
      const dockBox = dock.getBoundingClientRect();
      const box = first.getBoundingClientRect();
      const left = box.left - dockBox.left + BUBBLE_INSET;
      const width = box.width - BUBBLE_INSET * 2;
      bubble.style.transition = "none";
      bubble.style.left = left + "px";
      bubble.style.width = width + "px";
      bubble.style.opacity = "0";
      lastBubbleRect = { left, width };
      void bubble.offsetWidth;
      bubble.style.transition = "";
    }
  }
}

function patchDockActive(activeKey) {
  const route = parseRoute();
  document.querySelectorAll(".dock-item").forEach(b => {
    const r = b.dataset.route;
    let active;
    if (b.closest(".dock-desktop")) {
      active = r === `/cuisine/${activeKey}`;
    } else {
      active =
        r === "/home"      ? (route === "/home") :
        r === "/cuisine"   ? (route.startsWith("/cuisine") || route.startsWith("/recipe")) :
        r === "/search"    ? (route === "/search") :
        r === "/favorites" ? (route === "/favorites") : false;
    }
    b.classList.toggle("active", active);
  });
  moveDockBubble();
}

/* ---------- 事件 ---------- */
function bindEvents() {
  document.body.addEventListener("click", (e) => {
    // 路由跳转
    const navEl = e.target.closest("[data-route]");
    if (navEl) {
      const route = navEl.dataset.route;
      if (route === parseRoute()) {
        // 同路由点击：搜索态下点“首页”清空搜索，回到纯净首页
        if (route === "/home" && $("#searchInput").value.trim()) {
          $("#searchInput").value = "";
          $("#clearSearch").hidden = true;
          renderHome();
        }
        return;
      }
      location.hash = route;
      return;
    }

    // 收藏切换
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      const id = favBtn.dataset.fav;
      toggleFav(id);
      const active = isFav(id);
      // 更新按钮视觉
      const heartSvg = favBtn.querySelector(".heart");
      if (heartSvg) heartSvg.classList.toggle("filled", active);
      if (favBtn.classList.contains("btn-fav")) {
        favBtn.classList.toggle("active", active);
        const lbl = favBtn.querySelector("span");
        if (lbl) lbl.textContent = active ? "已收藏" : "收藏菜谱";
      }
      // 收藏页删除即淡出重渲
      if (parseRoute() === "/favorites" && !active) {
        const tile = favBtn.closest(".recipe-tile");
        if (tile) {
          tile.style.transition = "opacity .3s";
          tile.style.opacity = "0";
          setTimeout(() => renderFavorites(), 320);
        }
      }
      e.stopPropagation();
      return;
    }

    // 图片放大
    const zoomEl = e.target.closest("[data-lightbox]");
    if (zoomEl) {
      $("#lightboxImg").src = zoomEl.dataset.lightbox;
      $("#lightboxImg").onload = () => $("#lightbox").classList.add("open");
      $("#lightbox").classList.add("open");
    }
  });

  // 搜索
  let timer;
  $("#searchInput").addEventListener("input", (e) => {
    clearTimeout(timer);
    const v = e.target.value;
    $("#clearSearch").hidden = !v;
    timer = setTimeout(() => {
      // 回到首页视图并展示搜索结果
      if (parseRoute() !== "/home") location.hash = "/home";
      else renderHome();
    }, 140);
  });
  $("#clearSearch").addEventListener("click", () => {
    $("#searchInput").value = "";
    $("#clearSearch").hidden = true;
    if (parseRoute() !== "/home") location.hash = "/home";
    else renderHome();
    $("#searchInput").focus();
  });

  $("#lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox" || e.target.id === "lightboxClose") $("#lightbox").classList.remove("open");
  });
}

/* ---------- 启动 ---------- */
(function init() {
  buildDock();
  updateFavBadge();
  bindEvents();
  window.addEventListener("hashchange", navigate);
  // 视口跨断点（桌面/移动切换）时即时重排气泡位置，避免拉伸动画
  let dockResizeT;
  window.addEventListener("resize", () => {
    clearTimeout(dockResizeT);
    dockResizeT = setTimeout(() => { moveDockBubble(true); updateDockVisibility(parseRoute()); }, 80);
  });
  navigate();
})();