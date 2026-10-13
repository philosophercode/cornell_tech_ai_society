// Shared site nav. Include on every page with <script src="/assets/nav.js"></script> right after <body>.
// Pages can tint it with the CSS variable --nav-bg.
(function () {
  const LINKS = [
    { href: "/workshop/", label: "Workshop" },
    { href: "/#about", label: "About" },
    { href: "/#join", label: "Join" },
  ];

  const style = document.createElement("style");
  style.textContent = `
    .site-nav{position:sticky;top:0;z-index:50;border-bottom:1px solid #e5e5e5;background:var(--nav-bg,rgba(255,255,255,.9));-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-family:Inter,system-ui,sans-serif}
    .site-nav .in{max-width:64rem;margin:0 auto;padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
    .site-nav .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
    .site-nav .brand img:first-child{height:32px;width:auto}
    .site-nav .brand img:last-child{height:20px;width:auto}
    .site-nav .links{display:flex;gap:24px;font-size:14px}
    .site-nav .links a{color:#525252;text-decoration:none}
    .site-nav .links a:hover,.site-nav .links a[aria-current]{color:#171717;text-decoration:none}
    @media(max-width:480px){.site-nav .brand img:last-child{display:none}.site-nav .links{gap:16px}}
  `;
  document.head.appendChild(style);

  const here = location.pathname.replace(/index\.html$/, "");
  const nav = document.createElement("div"); // not <header>: /workshop/ styles bare header elements
  nav.setAttribute("role", "banner");
  nav.className = "site-nav";
  nav.innerHTML = `
    <div class="in">
      <a href="/" class="brand">
        <img src="/assets/CTAIS logo.png" alt="">
        <img src="/assets/Cornell Tech AI Society TEXT.png" alt="Cornell Tech AI Society">
      </a>
      <nav class="links" aria-label="Main">
        ${LINKS.map(l => `<a href="${l.href}"${l.href === here ? ' aria-current="page"' : ""}>${l.label}</a>`).join("")}
      </nav>
    </div>`;
  document.body.prepend(nav);
})();
