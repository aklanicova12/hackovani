const fs = require('fs');

const worlds = [
    {id: "chrismas", icon: "🎄", title: "Vánoce", desc: "Vánoční zázrak a zimní postavičky."},
    {id: "easter", icon: "🐣", title: "Velikonoce", desc: "Jarní zajíčci a velikonoční nálada."},
    {id: "fruit", icon: "🍓", title: "Ovocní skřítci", desc: "Sladké plody v podobě roztomilých skřítků."},
    {id: "piigy", icon: "🐷", title: "Prasátka", desc: "Roztomilá prasátka na každý den."},
    {id: "princess", icon: "👑", title: "Princezny", desc: "Kouzelné princezny z pohádek."},
    {id: "sea", icon: "🌊", title: "Mořský svět", desc: "Tajemství hlubin a mořské bytosti."},
    {id: "spring", icon: "🌸", title: "Jarní probuzení", desc: "Květiny a jarní víly."},
    {id: "yellow summer", icon: "🌻", title: "Žluté léto", desc: "Sluncem zalitá letní louka."},
    {id: "yellowchick", icon: "🐥", title: "Farma kuřátek", desc: "Žlutá kuřátka a zvířátka z farmy."},
    {id: "zelenejaro", icon: "🌿", title: "Zelené jaro", desc: "Žabky, skřítci a probouzející se příroda."}
];

const indexHtml = fs.readFileSync('index.html', 'utf-8');

const startDonation = indexHtml.indexOf('<!-- 6. SEKCE: "KUP MI KLUBÍČKO"');
const endHtml = indexHtml.indexOf('</html>') + 7;
let bottomPart = indexHtml.substring(startDonation, endHtml);

bottomPart = bottomPart.replace(/href="#svety"/g, 'href="index.html#svety"');
bottomPart = bottomPart.replace(/href="#filozofie"/g, 'href="index.html#filozofie"');
bottomPart = bottomPart.replace(/href="#panacci"/g, 'href="index.html#panacci"');

const template = (w, bottomPart) => `<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${w.title} – Bavlaková</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${w.icon}</text></svg>">
  <link rel="stylesheet" href="styles.css">
</head>
<body data-page="${w.id}">

  <div class="ambient-bubble bubble-1"></div>
  <div class="ambient-bubble bubble-2"></div>

  <header class="site-header" id="site-header">
    <div class="container header-container">
      <a href="index.html" class="logo" id="header-logo">
        Bavlaková<span class="logo-dot"></span>
      </a>
      <nav>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="index.html#svety" class="nav-link">Světy</a></li>
          <li><a href="index.html#filozofie" class="nav-link">Příběh</a></li>
          <li><a href="#panacci" class="nav-link">Panáčci</a></li>
          <li><a href="#klubicko" class="nav-link">Koupit klubíčko</a></li>
          <li><a href="#kontakt" class="nav-link">Kontakt & Vzkazy</a></li>
        </ul>
      </nav>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Otevřít menu">☰</button>
    </div>
  </header>

  <main>
    <section class="worlds-section section-spacing" style="padding-bottom: 2rem; padding-top: 10rem;">
      <div class="container text-center">
        <span class="world-icon" style="font-size: 3.5rem; display:block; margin-bottom:1rem;">${w.icon}</span>
        <h1 style="font-family: var(--font-heading); margin-bottom: 1rem;">${w.title}</h1>
        <p style="font-size: 1.15rem; color: var(--text-muted); max-width: 600px; margin: 0 auto;">${w.desc}</p>
        <a href="index.html#svety" class="btn btn-secondary" style="margin-top: 2rem;">← Zpět do všech světů</a>
      </div>
    </section>

    <section class="products-section section-spacing" id="panacci" style="padding-top: 2rem;">
      <div class="container">
        <div class="products-header text-center">
          <h2 id="products-heading">Osobnosti tohoto světa</h2>
        </div>
        <div class="products-grid" id="products-grid"></div>
      </div>
    </section>

    <section class="products-section section-spacing" style="background: var(--bg-soft-rose); margin-top: 2rem; border-top: 1px solid rgba(232, 213, 213, 0.5);">
      <div class="container">
        <div class="products-header text-center">
          <h2 class="font-heading">Doporučujeme k objevování</h2>
          <p>Další kouzelné osobnosti z jiných světů, které by se vám mohly líbit.</p>
        </div>
        <div class="products-grid" id="recommended-grid"></div>
      </div>
    </section>

${bottomPart}
`;

worlds.forEach(w => {
    fs.writeFileSync(w.id + '.html', template(w, bottomPart), 'utf-8');
});

console.log(`Created ${worlds.length} HTML files.`);
