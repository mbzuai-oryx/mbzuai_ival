/* Publications page: filterable list grouped by year. Data: window.IVAL_PUBS */
(function () {
  const D = window.IVAL_DATA, P = window.IVAL_PUBS || [];
  const { h, svgIcon } = window.IVAL_UTIL;
  const $ = (s) => document.querySelector(s);
  const themeBy = Object.fromEntries(D.themes.map((t) => [t.key, t]));
  const facBy = Object.fromEntries(D.faculty.map((f) => [f.key, f]));
  const facNames = new Set(D.faculty.flatMap((f) => f.aliases || [f.name]));

  const years = [...new Set(P.map((p) => p.year))].sort((a, b) => b - a);
  years.forEach((y) => $("#f-year").append(h("option", { value: y, text: y })));
  D.themes.forEach((t) => $("#f-theme").append(h("option", { value: t.key, text: t.name })));
  D.faculty.forEach((f) => $("#f-prof").append(h("option", { value: f.key, text: f.name })));

  // deep-linkable filters: publications.html?theme=earth&prof=salman
  const qs = new URLSearchParams(location.search);
  [["q", "#q"], ["year", "#f-year"], ["theme", "#f-theme"], ["prof", "#f-prof"], ["venue", "#f-venue"]].forEach(([k, s]) => { if (qs.get(k)) $(s).value = qs.get(k); });

  const authorLine = (authors) => {
    const parts = [];
    authors.forEach((a, i) => {
      if (i) parts.push(", ");
      parts.push(facNames.has(a) ? h("b", { text: a }) : a);
    });
    return parts;
  };

  function render() {
    const q = $("#q").value.trim().toLowerCase();
    const fy = $("#f-year").value, ft = $("#f-theme").value, fp = $("#f-prof").value, fv = $("#f-venue").value;
    const list = P.filter((p) =>
      (!fy || String(p.year) === fy) &&
      (!ft || p.theme === ft) &&
      (!fp || p.profs.includes(fp)) &&
      (!fv || p.top) &&
      (!q || (p.title + " " + p.authors.join(" ") + " " + p.venue).toLowerCase().includes(q)));

    const out = $("#pubs");
    out.replaceChildren();
    $("#count").textContent = `${list.length} of ${P.length} papers`;
    if (!list.length) { out.append(h("p", { class: "empty", text: "No papers match these filters." })); return; }

    const byYear = new Map();
    list.forEach((p) => { if (!byYear.has(p.year)) byYear.set(p.year, []); byYear.get(p.year).push(p); });
    [...byYear.keys()].sort((a, b) => b - a).forEach((y) => {
      const items = byYear.get(y).sort((a, b) => (b.top - a.top) || (b.cites || 0) - (a.cites || 0));
      const grp = h("section", { class: "year-group" }, h("h2", {}, String(y), h("span", { text: `${items.length} paper${items.length > 1 ? "s" : ""}` })));
      items.forEach((p) => {
        const t = themeBy[p.theme];
        grp.append(h("article", { class: "pub" },
          h("div", { class: "v", text: p.venue || "Preprint" }),
          h("div", {},
            h("div", { class: "pt" }, p.url ? h("a", { href: p.url, target: "_blank", rel: "noopener", text: p.title }) : p.title),
            h("div", { class: "pa" }, authorLine(p.authors), p.more ? ", …" : ""),
            h("div", { class: "pm" },
              t ? h("a", { class: "chip", href: `?theme=${t.key}`, style: `--c: var(--${t.slot})` }, h("span", { class: "dot" }), t.short) : null,
              p.code ? h("a", { class: "chip", href: p.code, target: "_blank", rel: "noopener" }, svgIcon("github", 12), "Code") : null,
              p.cites ? h("span", { class: "cit", text: `${p.cites.toLocaleString("en-US")} citations` }) : null))));
      });
      out.append(grp);
    });
  }

  let tmr;
  $("#q").addEventListener("input", () => { clearTimeout(tmr); tmr = setTimeout(render, 120); });
  ["#f-year", "#f-theme", "#f-prof", "#f-venue"].forEach((s) => $(s).addEventListener("change", render));
  render();
})();
