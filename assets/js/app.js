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

/* ---------- 图标 ---------- */
const HEART_SVG = (filled) =>
  `<svg class="heart${filled ? " filled" : ""}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
     <path d="M12 21s-7.5-4.7-10-9C.6 8.3 2.5 4 6.3 4c2.4 0 3.8 1.2 5.7 3.4C13.9 5.2 15.3 4 17.7 4c3.8 0 5.7 4.3 3.7 8-2.5 4.3-9.4 9-9.4 9z"
       fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
   </svg>`;

/* ---------- 渲染：菜谱网格 ---------- */
function recipeTileHTML(r, { showCuisine = true } = {}) {
  const c = CUISINE_MAP[r.cuisine];
  const fav = isFav(r.id);
  const badge = showCuisine ? `<span class="badge-cuisine">${c.name}</span>` : "";
  return `
    <article class="recipe-tile" data-route="/recipe/${r.id}">
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
  let inner;
  if (hasSearch) {
    inner = renderSearch(hasSearch);
  } else {
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
    inner = `
      <div class="view">
        <div class="section-head">
          <span class="kicker">Eight Cuisines</span>
          <h1>八大菜系</h1>
          <p>山川风物，尽在一方烟火</p>
          <div class="rule"></div>
        </div>
        <div class="cuisine-strip">${tiles}</div>
        <p class="footer-note">选一道称心的菜，为今日添一味温暖</p>
      </div>`;
  }
  $("#viewRoot").innerHTML = inner;
}

/* ---------- 视图：菜系页 ---------- */
function renderCuisine(key) {
  const c = CUISINE_MAP[key];
  if (!c) { renderHome(); return; }
  const recipes = window.RECIPES[key] || [];
  const tiles = recipes.map(r => recipeTileHTML(r, { showCuisine: false })).join("");
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
      <div class="recipe-grid">${tiles}</div>
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
            ${HEART_SVG(fav)} ${fav ? "已收藏" : "收藏菜谱"}
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

/* ---------- 搜索（返回结构化 HTML，供 renderHome 使用） ---------- */
function renderSearch(q) {
  const kw = q.trim().toLowerCase();
  const results = allRecipes().filter(r => r.name.toLowerCase().includes(kw));
  if (!results.length) {
    return `
      <div class="section-head">
        <span class="kicker">Search</span>
        <h1>“${esc(q)}”</h1>
        <div class="rule"></div>
      </div>
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
  return `
    <div class="section-head">
      <span class="kicker">Search</span>
      <h1>“${esc(q)}”</h1>
      <p>共找到 ${results.length} 道菜谱</p>
      <div class="rule"></div>
    </div>
    ${groups}`;
}

/* ---------- 路由 ---------- */
function parseRoute() {
  return location.hash.replace(/^#/, "") || "/home";
}
function navigate() {
  const route = parseRoute();
  const parts = route.split("/").filter(Boolean);
  if (parts[0] === "recipe" && parts[1]) renderRecipe(decodeURIComponent(parts[1]));
  else if (parts[0] === "cuisine" && parts[1]) renderCuisine(parts[1]);
  else if (parts[0] === "favorites") renderFavorites();
  else renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- 菜系底栏 ---------- */
function buildDock() {
  $("#cuisineDock").innerHTML = CUISINES.map(c =>
    `<button class="dock-item" data-route="/cuisine/${c.key}">${c.name}<small>${c.en}</small></button>`
  ).join("");
}
function patchDockActive(activeKey) {
  document.querySelectorAll(".dock-item").forEach(b => {
    b.classList.toggle("active", b.dataset.route === `/cuisine/${activeKey}`);
  });
}

/* ---------- 事件 ---------- */
function bindEvents() {
  document.body.addEventListener("click", (e) => {
    // 路由跳转
    const navEl = e.target.closest("[data-route]");
    if (navEl) { location.hash = navEl.dataset.route; return; }

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
        const textNode = [...favBtn.childNodes].find(n => n.nodeType === 3);
        if (textNode) textNode.textContent = active ? " 已收藏" : " 收藏菜谱";
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
  navigate();
})();