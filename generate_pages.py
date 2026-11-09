import os

worlds = [
    {"id": "spring", "icon": "🌸", "title": "Jarní probuzení", "desc": "Jemné pastelové tóny, první sněženky a vůně rozkvetlých luk."},
    {"id": "meadow", "icon": "🌿", "title": "Luční snění", "desc": "Šalvějová zelená, luční kvítí a letní sluneční paprsky."},
    {"id": "autumn", "icon": "🍁", "title": "Podzimní čarování", "desc": "Teplé odstíny dřeva, medu, spadaného listí a horkého čaje."},
    {"id": "winter", "icon": "❄️", "title": "Vánoční zázrak", "desc": "Třpytivé nitky, zimní ticho a hřejivá náruč domova."}
]

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Extract the donation, contact, footer, modals from index.html
start_donation = index_html.find('<!-- 6. SEKCE: "KUP MI KLUBÍČKO"')
end_html = index_html.find('</html>') + 7
bottom_part = index_html[start_donation:end_html]

# Replace some links in the bottom part just in case (like #svety in footer)
bottom_part = bottom_part.replace('href="#svety"', 'href="index.html#svety"')
bottom_part = bottom_part.replace('href="#filozofie"', 'href="index.html#filozofie"')
bottom_part = bottom_part.replace('href="#panacci"', 'href="index.html#panacci"')

template = """<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} – Bavlaková</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{icon}</text></svg>">
  <link rel="stylesheet" href="styles.css">
</head>
<body data-page="{id}">

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
        <span class="world-icon" style="font-size: 3.5rem; display:block; margin-bottom:1rem;">{icon}</span>
        <h1 style="font-family: var(--font-heading); margin-bottom: 1rem;">{title}</h1>
        <p style="font-size: 1.15rem; color: var(--text-muted); max-width: 600px; margin: 0 auto;">{desc}</p>
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

{bottom_part}
"""

for w in worlds:
    html = template.format(id=w["id"], title=w["title"], desc=w["desc"], icon=w["icon"], bottom_part=bottom_part)
    with open(f'{w["id"]}.html', 'w', encoding='utf-8') as f:
        f.write(html)

print("Created 4 HTML files.")
