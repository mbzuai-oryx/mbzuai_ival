/* Site-wide behaviour + homepage rendering. Content lives in assets/data/*.js */
(function () {
  const D = window.IVAL_DATA || {};
  const $ = (s, r = document) => r.querySelector(s);
  const h = (tag, props = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const k in props) {
      if (k === "class") n.className = props[k];
      else if (k === "text") n.textContent = props[k];
      else if (k === "style") n.setAttribute("style", props[k]);
      else n.setAttribute(k, props[k]);
    }
    kids.flat().forEach((c) => c != null && n.append(c));
    return n;
  };
  const svgIcon = (name, size = 18) => {
    const s = document.createElement("span");
    s.innerHTML = (window.IVAL_ICONS[name] || "").replace("<svg", `<svg width="${size}" height="${size}" aria-hidden="true"`);
    return s.firstChild;
  };
  const fmt = (n) => (n >= 10000 ? `${(n / 1000).toFixed(n >= 100000 ? 0 : 1).replace(/\.0$/, "")}K` : n.toLocaleString("en-US"));
  window.IVAL_UTIL = { h, svgIcon, fmt };

  /* ---------- theme toggle ---------- */
  const root = document.documentElement;
  try { const t = localStorage.getItem("ival-theme"); if (t) root.dataset.theme = t; } catch (e) {}
  const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  const tbtn = $(".theme-toggle");
  const paintToggle = () => { if (tbtn) { tbtn.replaceChildren(svgIcon(isDark() ? "sun" : "moon")); tbtn.setAttribute("aria-label", isDark() ? "Switch to light mode" : "Switch to dark mode"); } };
  tbtn && tbtn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("ival-theme", root.dataset.theme); } catch (e) {}
    paintToggle();
  });
  paintToggle();

  /* ---------- mobile menu ---------- */
  const mbtn = $(".menu-toggle"), links = $(".nav-links");
  if (mbtn) {
    mbtn.replaceChildren(svgIcon("menu", 20));
    mbtn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      mbtn.setAttribute("aria-expanded", open);
    });
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });
  }

  /* ---------- hero network (echoes the MBZUAI logo mark) ---------- */
  const cv = $(".hero canvas");
  if (cv) {
    const ctx = cv.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W, H, nodes = [], dpr = Math.min(2, window.devicePixelRatio || 1);
    const lerp = (a, b, t) => a + (b - a) * t;
    const color = (t, a) => {
      // cyan (0,209,228) -> blue (0,108,230) -> deep (15,42,224)
      const c = t < .5 ? [0, lerp(209, 108, t * 2), lerp(228, 230, t * 2)] : [lerp(0, 15, (t - .5) * 2), lerp(108, 42, (t - .5) * 2), lerp(230, 224, (t - .5) * 2)];
      return `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
    };
    const resize = () => {
      const r = cv.getBoundingClientRect();
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (W * H) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: W * (0.35 + Math.random() * 0.65), y: Math.random() * H,
        vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: 2 + Math.random() * 4.5,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const L = Math.min(170, W / 6);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < L) {
            ctx.strokeStyle = color(a.x / W, (1 - d / L) * .45);
            ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const fade = Math.min(1, Math.max(0, (n.x / W - .2) * 2.2));
        ctx.fillStyle = color(n.x / W, .85 * fade);
        ctx.beginPath(); ctx.ellipse(n.x, n.y, n.r * 1.25, n.r, -.6, 0, Math.PI * 2); ctx.fill();
      }
    };
    const step = () => {
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < W * .25 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      draw();
      if (!document.hidden) requestAnimationFrame(step);
    };
    resize(); draw();
    addEventListener("resize", () => { resize(); draw(); });
    if (!reduce) { requestAnimationFrame(step); document.addEventListener("visibilitychange", () => !document.hidden && requestAnimationFrame(step)); }
  }

  /* ---------- homepage sections ---------- */
  const themeBy = Object.fromEntries((D.themes || []).map((t) => [t.key, t]));

  const themesEl = $("#themes-grid");
  if (themesEl) {
    D.themes.forEach((t) => {
      // chips: the theme's hand-picked examples (by short name), else its four most-starred projects
      const byShort = Object.fromEntries((D.projects || []).map((p) => [p.short, p]));
      const ex = t.examples ? t.examples.map((s) => byShort[s]).filter(Boolean)
        : (D.projects || []).filter((p) => p.theme === t.key).sort((a, b) => (b.stars || 0) - (a.stars || 0)).slice(0, 4);
      themesEl.append(h("article", { class: "theme-card reveal", style: `--c: var(--${t.slot})` },
        h("div", { class: "head" }, h("div", { class: "icon" }, svgIcon(t.icon, 22)), h("h3", { text: t.name })),
        h("p", { text: t.desc }),
        h("div", { class: "examples" }, ex.map((p) => h("a", { class: "chip", href: p.links.github || p.links.project || p.links.arxiv || "#", target: "_blank", rel: "noopener", text: p.short }))),
        h("a", { class: "more", href: `publications.html?theme=${t.key}` }, "All papers in this theme", svgIcon("arrow", 14))
      ));
    });
  }

  const featEl = $("#featured-grid");
  if (featEl) {
    (D.projects || []).filter((p) => p.featured).forEach((p) => {
      const t = themeBy[p.theme];
      const links = [];
      if (p.links.arxiv) links.push(h("a", { href: p.links.arxiv, target: "_blank", rel: "noopener" }, svgIcon("paper", 14), "Paper"));
      if (p.links.github) links.push(h("a", { href: p.links.github, target: "_blank", rel: "noopener" }, svgIcon("github", 14), "Code"));
      if (p.links.project) links.push(h("a", { href: p.links.project, target: "_blank", rel: "noopener" }, svgIcon("globe", 14), "Project"));
      featEl.append(h("article", { class: "work reveal" },
        h("div", { class: "top" },
          h("span", { class: "venue", text: p.venue }),
          p.stars ? h("span", { class: "stars", title: "GitHub stars" }, svgIcon("star", 14), fmt(p.stars)) : null),
        h("h3", { text: p.short }),
        h("p", { class: "title", text: p.title }),
        h("div", { class: "top" },
          t ? h("span", { class: "chip", style: `--c: var(--${t.slot})` }, h("span", { class: "dot" }), t.short) : h("span")),
        h("div", { class: "links" }, links)
      ));
    });
  }

  const teamEl = $("#team-grid");
  if (teamEl) {
    D.faculty.forEach((f) => {
      const pl = [];
      if (f.links.homepage) pl.push(h("a", { href: f.links.homepage, target: "_blank", rel: "noopener", "aria-label": `${f.name} homepage`, title: "Homepage" }, svgIcon("globe")));
      if (f.links.scholar) pl.push(h("a", { href: f.links.scholar, target: "_blank", rel: "noopener", "aria-label": `${f.name} on Google Scholar`, title: "Google Scholar" }, svgIcon("scholar")));
      if (f.links.mbzuai) pl.push(h("a", { href: f.links.mbzuai, target: "_blank", rel: "noopener", "aria-label": `${f.name} MBZUAI profile`, title: "MBZUAI profile" }, svgIcon("building")));
      if (f.email) pl.push(h("a", { href: `mailto:${f.email}`, "aria-label": `Email ${f.name}`, title: f.email }, svgIcon("mail")));
      teamEl.append(h("article", { class: "person reveal" },
        h("div", { class: "head" },
          h("img", { class: "photo", src: f.photo, alt: f.name, loading: "lazy" }),
          h("div", {},
            h("h3", { text: f.name }),
            h("div", { class: "role", text: f.title }),
            h("div", { class: "plinks" }, pl))),
        h("p", { class: "bio", text: f.bio }),
        h("div", { class: "tags" }, (f.interests || []).map((t) => h("span", { class: "chip", text: t }))),
        f.honours && f.honours.length ? h("ul", { class: "honours" }, f.honours.map((x) => h("li", { text: x }))) : null
      ));
    });
  }

  const membersEl = $("#members-grid");
  if (membersEl) {
    const ROLE = { PD: "Postdoctoral Researcher", RS: "Research Scientist" };
    const initials = (n) => n.split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    (D.team || []).forEach((m) => {
      const l = [];
      if (m.links && m.links.scholar) l.push(h("a", { href: m.links.scholar, target: "_blank", rel: "noopener", "aria-label": `${m.name} on Google Scholar`, title: "Google Scholar" }, svgIcon("scholar", 15)));
      if (m.links && m.links.homepage) l.push(h("a", { href: m.links.homepage, target: "_blank", rel: "noopener", "aria-label": `${m.name} homepage`, title: "Homepage" }, svgIcon("globe", 15)));
      membersEl.append(h("article", { class: "member reveal" },
        m.photo ? h("img", { class: "photo", src: m.photo, alt: m.name, loading: "lazy" }) : h("div", { class: "photo initials", "aria-hidden": "true", text: initials(m.name) }),
        h("div", { class: "info" },
          h("div", { class: "name", text: m.name }),
          h("div", { class: "role", text: ROLE[m.role] || m.role }),
          l.length ? h("div", { class: "mlinks" }, l) : null)));
    });
  }

  const newsEl = $("#news-list");
  if (newsEl) {
    (D.news || []).forEach((n) => {
      const d = new Date(n.date + "-01T00:00:00");
      newsEl.append(h("li", { class: "reveal" },
        h("time", { datetime: n.date, text: d.toLocaleDateString("en-US", { month: "short", year: "numeric" }) }),
        h("div", { class: "txt" }, n.text, n.url ? h("a", { href: n.url, target: "_blank", rel: "noopener", text: "Read more →" }) : null)));
    });
  }

  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- reveal on scroll ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -40px 0px" }) : null;
  document.querySelectorAll(".reveal").forEach((n) => (io ? io.observe(n) : n.classList.add("in")));
})();
