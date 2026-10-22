/* Portfólio de cases.
   Tudo que aparece na tela vem de cases.json e de cases/<id>/case.md.
   Para adicionar um case: crie a pasta, escreva o case.md, suba as imagens e
   acrescente um bloco em cases.json. Este arquivo não precisa mudar. */

(async function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const data = window.CASES;
  if (!data) {
    document.querySelector("main").insertAdjacentHTML("afterbegin", '<p style="color:#f2a65a">Não consegui ler o cases.js. Confira se o arquivo está na raiz e se não falta vírgula ou aspas.</p>');
    return;
  }

  const autor = data.autor || {};

  // ---------- Som de interface (opcional, desligado por padrão) ----------
  // Tudo gerado pelo navegador com Web Audio: sem arquivo de áudio, sem licença.
  const snd = (() => {
    const btn = $("snd"); if (!btn) return null;
    let on = false, ctx = null;
    try { on = localStorage.getItem("som") === "1"; } catch (e) {}
    const paint = () => { btn.setAttribute("aria-pressed", String(on)); btn.title = on ? "Som de interface (ligado)" : "Som de interface (desligado)"; };
    const play = (freq, dur, gain, type) => {
      if (!on) return;
      try {
        ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === "suspended") ctx.resume();
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = type || "triangle"; o.frequency.setValueAtTime(freq, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(freq * 0.6, ctx.currentTime + dur);
        g.gain.setValueAtTime(gain, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
        o.connect(g); g.connect(ctx.destination); o.start(); o.stop(ctx.currentTime + dur);
      } catch (e) {}
    };
    const api = { hover: () => play(1400, 0.05, 0.025), click: () => play(620, 0.11, 0.05, "sine") };
    btn.addEventListener("click", () => { on = !on; try { localStorage.setItem("som", on ? "1" : "0"); } catch (e) {} paint(); if (on) api.click(); });
    paint();
    let last = null;
    document.addEventListener("mouseover", (e) => { const t = e.target.closest(".case-btn, .topnav a, .links a, .case .go, .back"); if (t && t !== last) api.hover(); last = t; });
    document.addEventListener("click", (e) => { if (e.target.closest(".case-btn, .topnav a, .links a, .case .go, .back")) api.click(); });
    return api;
  })();
  if ($("foot-nome")) $("foot-nome").textContent = autor.nome || "";

  // ---------- Página inicial ----------
  if ($("cols")) {
    document.title = `${autor.nome || "Portfólio"} · Cases`;
    $("nome").textContent = autor.nome || "";
    $("brand").textContent = autor.nome || "";
    $("cargo").textContent = autor.cargo || "";
    $("desc").textContent = autor.descricao || "";
    $("links").innerHTML = (autor.links || []).map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.rotulo)}</a>`).join("");

    const cats = data.categorias || [];
    $("topnav").innerHTML = cats.map((cat) => `<a href="#cat-${esc(cat.id)}" data-cat="${esc(cat.id)}">${esc(cat.titulo)}</a>`).join("");

    $("cols").innerHTML = cats.map((cat, ci) => {
      const itens = (data.cases || []).filter((c) => (c.categorias || []).includes(cat.id));
      const lis = itens.map((c) => {
        // Card de uma categoria secundária: abre direto o arquivo (link_<cat>) ou só aquela seção do case (ancora_<cat>).
        const href = c[`link_${cat.id}`] ? c[`link_${cat.id}`]
          : c[`ancora_${cat.id}`] ? `case.html?c=${encodeURIComponent(c.id)}&sec=${encodeURIComponent(c[`ancora_${cat.id}`])}`
          : `case.html?c=${encodeURIComponent(c.id)}`;
        const capaArq = c[`capa_${cat.id}`] || c.capa;
        const capa = capaArq ? `<img class="capa" src="cases/${encodeURIComponent(c.id)}/${esc(capaArq)}" alt="" loading="lazy">` : "";
        return `<li class="case" data-href="${esc(href)}">
          <button type="button" class="case-btn" aria-expanded="false">
            <span class="t">${esc(c.curto || c.titulo)}</span>
            <span class="m">${esc(c.empresa || "")}</span>
          </button>
          <div class="drawer"><div class="drawer-in">
            ${capa}
            <p class="r">${esc(c.resumo || "")}</p>
            ${c.destaque ? `<span class="d">${esc(c.destaque)}</span>` : ""}
            <a class="go" href="${esc(href)}">Abrir case</a>
          </div></div>
        </li>`;
      }).join("");
      return `<section class="col" id="cat-${esc(cat.id)}" data-cat="${esc(cat.id)}" style="--i:${ci}">
        <div class="col-head"><h2>${esc(cat.titulo)}</h2>
        <p class="sub">${esc(cat.sub || "")}</p></div>
        ${lis ? `<ul>${lis}</ul>` : `<p class="vazio">Em breve.</p>`}
      </section>`;
    }).join("");

    // Gaveta: 1º clique abre, 2º clique no título abre a página do case.
    $("cols").addEventListener("click", (e) => {
      const btn = e.target.closest(".case-btn"); if (!btn) return;
      const li = btn.closest(".case");
      if (li.classList.contains("open")) { location.href = li.dataset.href; return; }
      document.querySelectorAll(".case.open").forEach((o) => { o.classList.remove("open"); o.querySelector(".case-btn").setAttribute("aria-expanded", "false"); });
      li.classList.add("open"); btn.setAttribute("aria-expanded", "true");
    });
    // Fecha ao clicar fora de qualquer card
    document.addEventListener("click", (e) => {
      if (e.target.closest(".case")) return;
      document.querySelectorAll(".case.open").forEach((li) => { li.classList.remove("open"); li.querySelector(".case-btn").setAttribute("aria-expanded", "false"); });
    });

    // Marca na barra a categoria que está na tela
    const links = [...document.querySelectorAll("#topnav a")];
    const setActive = (id) => links.forEach((a) => a.classList.toggle("on", a.dataset.cat === id));
    let lock = 0; // depois de um clique na barra, o observador espera o scroll terminar
    if ("IntersectionObserver" in window) {
      const vis = new Map();
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => vis.set(en.target.dataset.cat, en.intersectionRatio));
        if (Date.now() < lock || !matchMedia("(max-width: 860px)").matches) return; // lado a lado: todas visíveis, nada a marcar
        const best = [...vis.entries()].sort((a, b) => b[1] - a[1])[0];
        if (best && best[1] > 0) setActive(best[0]);
      }, { rootMargin: "-56px 0px -40% 0px", threshold: [0, .25, .5, .75, 1] });
      document.querySelectorAll(".col").forEach((el) => io.observe(el));
    }
    links.forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const el = document.getElementById("cat-" + a.dataset.cat); if (!el) return;
      el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      lock = Date.now() + 1200;
      setActive(a.dataset.cat);
      el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
    }));
    return;
  }

  // ---------- Página de case ----------
  const id = new URLSearchParams(location.search).get("c");
  const c = (data.cases || []).find((x) => x.id === id);
  if (!c) {
    $("c-titulo").textContent = "Case não encontrado";
    $("md").innerHTML = `<p>Não existe um case com o identificador <code>${esc(id)}</code> no cases.json.</p>`;
    return;
  }
  if ($("brand")) $("brand").textContent = autor.nome || "";
  const secOnly = new URLSearchParams(location.search).get("sec");
  if ($("topnav")) {
    const cats = c.categorias || [];
    // Só as categorias do case. Primeira = topo do case; outras = arquivo próprio (link_<cat>) ou a seção (ancora_<cat>).
    const links = (data.categorias || []).filter((k) => cats.includes(k.id)).map((k) => {
      if (k.id === cats[0]) return `<a href="#topo" data-cat="${esc(k.id)}" data-dentro="1" class="${secOnly ? "" : "on"}">${esc(k.titulo)}</a>`;
      if (c[`link_${k.id}`]) return `<a href="${esc(c[`link_${k.id}`])}" data-cat="${esc(k.id)}" data-dentro="0">${esc(k.titulo)}</a>`;
      const anc = c[`ancora_${k.id}`] || "topo";
      return `<a href="#${esc(anc)}" data-cat="${esc(k.id)}" data-dentro="1" class="${secOnly === anc ? "on" : ""}">${esc(k.titulo)}</a>`;
    });
    $("topnav").innerHTML = `<a href="index.html" class="nav-ico" title="Página inicial" aria-label="Página inicial">⌂</a><a href="index.html#cat-${esc(cats[0] || "planilhas")}" class="nav-ico" id="nav-back" title="Voltar aos cases" aria-label="Voltar aos cases">←</a>` + links.join("");
    $("nav-back").addEventListener("click", (e) => { if (history.length > 1 && document.referrer && document.referrer.split("#")[0].endsWith("index.html")) { e.preventDefault(); history.back(); } });
    $("topnav").addEventListener("click", (e) => {
      const a = e.target.closest("a[data-dentro='1']"); if (!a) return;
      e.preventDefault();
      const el = document.getElementById(a.getAttribute("href").slice(1)); if (!el) return;
      el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      $("topnav").querySelectorAll("a").forEach((x) => x.classList.toggle("on", x === a));
    });
  }
  const catId = (c.categorias || [])[0] || "planilhas";
  const cat = (data.categorias || []).find((k) => k.id === catId) || {};
  $("topo").style.setProperty("--c", `var(--${catId})`);
  $("md").style.setProperty("--c", `var(--${catId})`);
  $("c-cat").textContent = (c.categorias || []).map((k) => ((data.categorias || []).find((x) => x.id === k) || {}).titulo || k).join(" · ") || cat.titulo || "";
  $("c-titulo").textContent = c.titulo;
  document.title = `${c.curto || c.titulo} · ${autor.nome || ""}`;
  $("c-meta").innerHTML = `${c.empresa ? `<b>${esc(c.empresa)}</b>` : ""}${c.ferramentas ? ` · ${esc(c.ferramentas)}` : ""}`;
  if (c.destaque) { $("c-destaque").textContent = c.destaque; $("c-destaque").hidden = false; }

  // O texto do case vem de cases/<id>/case.js (Markdown dentro de um script, pra funcionar aberto local).
  const md = await new Promise((resolve) => {
    const sc = document.createElement("script");
    sc.src = `cases/${encodeURIComponent(c.id)}/case.js`;
    sc.onload = () => resolve((window.CASE_MD || {})[c.id] || "");
    sc.onerror = () => resolve(null);
    document.head.appendChild(sc);
  });
  if (md === null || !md.trim()) {
    $("md").innerHTML = `<p>O arquivo <code>cases/${esc(c.id)}/case.js</code> ainda não existe ou está vazio.</p>`;
    return;
  }

  // Imagens: caminho relativo à pasta do case, legenda vira figcaption, clique amplia.
  const renderer = new marked.Renderer();
  renderer.image = function (href, title, text) {
    const h = typeof href === "object" ? href.href : href;
    const t = typeof href === "object" ? href.text : text;
    const src = /^(https?:)?\/\//.test(h) ? h : `cases/${encodeURIComponent(c.id)}/${h}`;
    return `<figure class="md-wide"><img src="${esc(src)}" alt="${esc(t)}" loading="lazy" data-zoom>${t ? `<figcaption>${esc(t)}</figcaption>` : ""}</figure>`;
  };
  // Títulos ganham id pra âncora (#dashboard, #resultado...)
  renderer.heading = function (text, level) {
    const txt = typeof text === "object" ? text.text : text;
    const lvl = typeof text === "object" ? text.depth : level;
    const slug = String(txt).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `<h${lvl} id="${slug}">${typeof text === "object" ? marked.parseInline(txt) : txt}</h${lvl}>`;
  };
  marked.use({ renderer, gfm: true, breaks: false });
  // Parágrafo só com imagem não deve ficar dentro de <p>
  $("md").innerHTML = marked.parse(md).replace(/<p>(<figure[\s\S]*?<\/figure>)<\/p>/g, "$1");
  (function agrupar() {
    const root = $("md"); const nodes = [...root.childNodes]; root.innerHTML = "";
    let sec = null;
    nodes.forEach((n) => {
      if (n.nodeType === 1 && n.tagName === "H2") { sec = document.createElement("section"); sec.className = "sec"; sec.id = "sec-" + n.id; sec.appendChild(n); root.appendChild(sec); return; }
      if (!sec) { sec = document.createElement("section"); sec.className = "sec"; root.appendChild(sec); }
      sec.appendChild(n);
    });
  })();
  // Modo "só uma seção" (case.html?c=psat&sec=dashboard): mostra o cabeçalho e aquela seção, com link pro case completo.
  if (secOnly) {
    const alvo = document.getElementById("sec-" + secOnly);
    if (alvo) {
      document.querySelectorAll("#md .sec").forEach((x) => { if (x !== alvo) x.hidden = true; });
      const mais = document.createElement("p"); mais.className = "ver-mais";
      const a = document.createElement("a"); a.href = `case.html?c=${encodeURIComponent(c.id)}`; a.textContent = "Ver o case completo →"; mais.appendChild(a); $("md").appendChild(mais);
      const k = (c.categorias || []).find((x) => c[`ancora_${x}`] === secOnly); if (k) { $("topo").style.setProperty("--c", `var(--${k})`); $("md").style.setProperty("--c", `var(--${k})`); }
    }
  }
  // Seção ligada a outra categoria (ex.: Dashboard) fica na cor dela
  (c.categorias || []).forEach((k) => { const h = c[`ancora_${k}`] && document.getElementById(c[`ancora_${k}`]); if (h) h.style.setProperty("--c", `var(--${k})`); });
  // Marca na barra a categoria da seção visível (ex.: ao chegar no Dashboard)
  (function spy() {
    const links = [...document.querySelectorAll("#topnav a[data-dentro='1']")];
    const alvos = links.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    if (!("IntersectionObserver" in window) || alvos.length < 2) return;
    const io = new IntersectionObserver((ents) => {
      const topo = ents.filter((e) => e.isIntersecting).sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top)[0];
      if (!topo) return;
      links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + topo.target.id));
    }, { rootMargin: "-60px 0px -70% 0px" });
    alvos.forEach((el) => io.observe(el));
  })();

  // Lightbox
  const lb = $("lb"), lbImg = $("lb-img");
  $("md").addEventListener("click", (e) => {
    const img = e.target.closest("img[data-zoom]"); if (!img) return;
    lbImg.src = img.src; lbImg.alt = img.alt; lb.classList.add("on");
  });
  lb.addEventListener("click", () => lb.classList.remove("on"));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("on"); });

  // Âncora na URL (ex.: case.html?c=psat#dashboard)
  if (location.hash) {
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el) setTimeout(() => el.scrollIntoView({ block: "start" }), 50);
  }
})();
