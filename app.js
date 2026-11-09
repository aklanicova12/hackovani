/**
 * BAVLAKOVÁ - INTERACTIVE FRONTEND LOGIC
 * Handcrafted 1-of-1 product management, filtering, touch fallbacks, modals, and guestbook
 */

// ==========================================
// 1. PRODUCT DATASET
// ==========================================
const PRODUCTS_DATA = [
  // VÁNOCE (chrismas)
  {
    id: "vanocni-venecek",
    name: "Vánoční věneček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "chrismas",
    worldName: "Vánoce",
    plainImg: "images/chrismas/chrismaswreathfront_2K_202607061204.jpeg",
    lifestyleImg: "images/chrismas/chrismaswreathlaying_2K_202607061204.jpeg",
    shortDesc: "Krásný háčkovaný vánoční věneček s medvídkem a mašlí.",
    fullStory: "Tento malý věneček přináší zimní pohodu do každého domova. Zdobí ho měkký medvídek připravený na Vánoce.",
    material: "Bavlněná příze",
    height: "15 cm"
  },
  {
    id: "pudinkova-holcicka",
    name: "Pudinková holčička",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "chrismas",
    worldName: "Vánoce",
    plainImg: "images/chrismas/puddinggirlfront.jpeg",
    lifestyleImg: "images/chrismas/puddinggirlside_2K_202607061202.jpeg",
    shortDesc: "Roztomilá panenka v pudinkovém oblečku.",
    fullStory: "Nejsladší panenka pod sluncem. Má ráda vánoční cukroví a vůni vanilky.",
    material: "Směsová příze",
    height: "25 cm"
  },
  {
    id: "maly-sobik",
    name: "Malý sobík",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "chrismas",
    worldName: "Vánoce",
    plainImg: "images/chrismas/reindeersmallfront_2K_202607061203.jpeg",
    lifestyleImg: "images/chrismas/reindeersmalldiagonal_2K_202607061203.jpeg",
    shortDesc: "Vánoční sobík s hřejivým svetříkem.",
    fullStory: "Tento sobík se už nemůže dočkat, až začne pomáhat se saněmi. Zatím ale trénuje v bezpečí domova.",
    material: "Hřejivá bavlna",
    height: "22 cm"
  },
  {
    id: "snehulacek",
    name: "Sněhuláček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "chrismas",
    worldName: "Vánoce",
    plainImg: "images/chrismas/snowmanfront_2K_202607061204.jpeg",
    lifestyleImg: "images/chrismas/snowmanside_2K_202607061204.jpeg",
    shortDesc: "Usměvavý sněhulák s šálou.",
    fullStory: "Nikdy neroztaje, i když ho vezmete k rodinnému krbu. Jeho úsměv zahřeje každé srdce.",
    material: "Akrylová příze",
    height: "18 cm"
  },

  // VELIKONOCE (easter)
  {
    id: "zajeci-venecek",
    name: "Zaječí věneček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "easter",
    worldName: "Velikonoce",
    plainImg: "images/easter/bunnywreathfront_2K_202607061202.jpeg",
    lifestyleImg: "images/easter/bunnywreathdiagonal_2K_202607061202.jpeg",
    shortDesc: "Něžný velikonoční věneček se zajíčkem.",
    fullStory: "Zaječí věneček byl upleten s prvními paprsky jarního slunce, přesně k přivítání Velikonoc.",
    material: "100% bavlna",
    height: "22 cm"
  },
  {
    id: "bily-zajicek",
    name: "Bílý zajíček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "easter",
    worldName: "Velikonoce",
    plainImg: "images/easter/White_crocheted_bunny_front.jpeg",
    lifestyleImg: "images/easter/White_crocheted_bunny_diagonal.jpeg",
    shortDesc: "Sněhově bílý králíček s dlouhýma ušima.",
    fullStory: "Roztomilý zajíček, co nosí radost a jarní náladu ve svém košíčku.",
    material: "Plyšová příze",
    height: "28 cm"
  },

  // OVOCNÍ SKŘÍTCI (fruit)
  {
    id: "jahudkovy-skritek",
    name: "Jahůdkový skřítek",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "fruit",
    worldName: "Ovocní skřítci",
    plainImg: "images/fruit/strawberrygnomefront_2K_202607061201.jpeg",
    lifestyleImg: "images/fruit/strawberrygnomediagonal_2K_202607061201.jpeg",
    shortDesc: "Skřítek s čepičkou zralé jahody.",
    fullStory: "Vůně lesních jahod ho vždy prozradí. Tento skřítek se stará o všechny letní plody.",
    material: "Bavlněná příze",
    height: "16 cm"
  },
  {
    id: "kropici-skritek",
    name: "Skřítek s konvičkou",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "fruit",
    worldName: "Ovocní skřítci",
    plainImg: "images/fruit/wateringcangnome.jpeg",
    lifestyleImg: "images/fruit/wateringcangnomeside_2K_202607061202.jpeg",
    shortDesc: "Zahradníčkův pomocník s kropicí konvičkou.",
    fullStory: "Zalévá všetky malé rostlinky v lese, aby rostly do krásy. Nejraději má borůvčí.",
    material: "Bavlněná příze",
    height: "17 cm"
  },

  // PRASÁTKA (piigy)
  {
    id: "male-prasatko",
    name: "Malé prasátko",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "piigy",
    worldName: "Prasátka",
    plainImg: "images/pigy/littlepigfront_2K_202607061201.jpeg",
    lifestyleImg: "images/pigy/littlepigdiagonal_2K_202607061201.jpeg",
    shortDesc: "Rozkošné prasátko pro štěstí.",
    fullStory: "Prasátko pro štěstí do kapsy, které vás bude doprovázet na každém kroku.",
    material: "Růžová bavlna",
    height: "12 cm"
  },
  {
    id: "prasatko-baletka",
    name: "Prasátko baletka",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "piigy",
    worldName: "Prasátka",
    plainImg: "images/pigy/piggybalerina_2K_20260914150915.jpeg",
    lifestyleImg: "images/pigy/piggybalerinaside_2K_20260914150929.jpeg",
    shortDesc: "Prasátko s velkým snem o tanci.",
    fullStory: "I když jí říkali, že prasátka netančí, ona si oblékla sukýnku a tančí po louce.",
    material: "Bavlna a tyl",
    height: "19 cm"
  },

  // PRINCEZNY (princess)
  {
    id: "princezna-bella",
    name: "Princezna Bella",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "princess",
    worldName: "Princezny",
    plainImg: "images/princess/bella_princess.jpg_2K_20260914141643.jpeg",
    lifestyleImg: "images/princess/bella_princess.jpg_2K_20260914141643.jpeg",
    shortDesc: "Krásná princezna v žlutých šatech.",
    fullStory: "Princezna, která miluje knihy a tanec. Své dny tráví na zámku čtením příběhů.",
    material: "Bavlněná příze",
    height: "22 cm"
  },
  {
    id: "ruzova-princezna",
    name: "Růžová princezna",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "princess",
    worldName: "Princezny",
    plainImg: "images/princess/pinkprincess_2K_20260912203416.jpeg",
    lifestyleImg: "images/princess/pinkprincess_2K_20260912203526.jpeg",
    shortDesc: "Kouzelná princezna v růžovém.",
    fullStory: "Něžná princezna, která přináší sladké sny do každého dětského pokojíčku.",
    material: "Bavlněná příze",
    height: "22 cm"
  },
  {
    id: "princezna-mulan",
    name: "Princezna Mulan",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "princess",
    worldName: "Princezny",
    plainImg: "images/princess/mulanfront_2K_202607061204.jpeg",
    lifestyleImg: "images/princess/mulanside_2K_202607061204.jpeg",
    shortDesc: "Odvážná princezna s květem ve vlasech.",
    fullStory: "Hrdinská panenka, která přináší odvahu a moudrost do každého dětského pokojíčku.",
    material: "Bavlněná příze",
    height: "22 cm"
  },

  // JARNÍ PROBUZENÍ (spring)
  {
    id: "modry-skritek",
    name: "Modrý skřítek",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "spring",
    worldName: "Jarní probuzení",
    plainImg: "images/spring/bluegnome.jpg_2K_20260914143428.jpeg",
    lifestyleImg: "images/spring/bluegnomeside.jpg_2K_20260914143436.jpeg",
    shortDesc: "Jarní skřítek v modrém.",
    fullStory: "Skřítek, který probouzí jarní oblohu ze zimního spánku a dává jí sytě modrou barvu.",
    material: "Bavlněná příze",
    height: "16 cm"
  },
  {
    id: "skritek-modre-pivonky",
    name: "Skřítek modré pivoňky",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "spring",
    worldName: "Jarní probuzení",
    plainImg: "images/spring/bluepeonygnome.jpg_2K_20260914142706.jpeg",
    lifestyleImg: "images/spring/bluepeonygnomeside.jpg_2K_20260914142745.jpeg",
    shortDesc: "Ochránce prvních jarních květů.",
    fullStory: "Tento skřítek pečuje o vzácné modré pivoňky, které rozkvétají jen za jarního úsvitu.",
    material: "Bavlněná příze",
    height: "17 cm"
  },
  {
    id: "kvetinovy-zajicek",
    name: "Květinový zajíček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "spring",
    worldName: "Jarní probuzení",
    plainImg: "images/spring/flowerbunny.jpg_2K_20260914142548.jpeg",
    lifestyleImg: "images/spring/flowerbunnyside.jpg_2K_20260914142602.jpeg",
    shortDesc: "Jarní zajíček s květy.",
    fullStory: "Malý zajíček, který poskakuje po rozkvetlé jarní louce a na krku nosí kytičky.",
    material: "Bavlněná příze",
    height: "15 cm"
  },
  {
    id: "lesni-duch",
    name: "Lesní duch",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "spring",
    worldName: "Jarní probuzení",
    plainImg: "images/spring/forestghost.jpeg",
    lifestyleImg: "images/spring/forestghostside.jpeg",
    shortDesc: "Drobný strážce lesních tajemství.",
    fullStory: "Tento duch lesa je plachý, ale dobrý přítel všech rostlin a mechů.",
    material: "Měkká alpaková příze",
    height: "14 cm"
  },
  {
    id: "konvalinkova-vila",
    name: "Konvalinková víla",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "spring",
    worldName: "Jarní probuzení",
    plainImg: "images/spring/lily of the valley.jpeg",
    lifestyleImg: "images/spring/lily of valley gnome.jpeg",
    shortDesc: "Víla vonící po rozkvetlých konvalinkách.",
    fullStory: "Své bílé kvítky střeží jako poklad. Přivolává s nimi teplejší dny.",
    material: "Bavlna",
    height: "16 cm"
  },
  {
    id: "ruzovy-ptacek",
    name: "Růžový ptáček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "spring",
    worldName: "Jarní probuzení",
    plainImg: "images/spring/pinkbird.jpeg",
    lifestyleImg: "images/spring/pinkbirdside.jpeg",
    shortDesc: "Jarní zpěváček s růžovými pírky.",
    fullStory: "Jeho zpěv probouzí stromy ze zimního spánku. Nejraději sedí na rozkvetlé jabloni.",
    material: "Žinylková příze",
    height: "11 cm"
  },

  // ŽLUTÉ LÉTO (yellow summer)
  {
    id: "vceli-kralovnicka",
    name: "Včelí královnička",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellow summer",
    worldName: "Žluté léto",
    plainImg: "images/yellow summer/beewithcrownfront_2K_202607061204.jpeg",
    lifestyleImg: "images/yellow summer/beewithcrownside_2K_202607061204.jpeg",
    shortDesc: "Pilná včelka se zlatou korunkou.",
    fullStory: "Včelí královnička neúnavně poletuje nad letní loukou a přináší sladkost.",
    material: "Bavlněná příze",
    height: "14 cm"
  },
  {
    id: "kopretinovy-skritek",
    name: "Kopretinový skřítek",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellow summer",
    worldName: "Žluté léto",
    plainImg: "images/yellow summer/daisy_gnome_front.jpeg",
    lifestyleImg: "images/yellow summer/daisy_gnome_diagonal.jpeg",
    shortDesc: "Veselý skřítek schovaný pod kopretinou.",
    fullStory: "Tento skřítek miluje letní odpoledne na prosluněné louce a nosí kopretinu jako klobouk.",
    material: "Bavlněná příze",
    height: "20 cm"
  },
  {
    id: "malinkaty-kopretinovy-skritek",
    name: "Maličký kopretinový skřítek",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellow summer",
    worldName: "Žluté léto",
    plainImg: "images/yellow summer/daisygnome.jpeg",
    lifestyleImg: "images/yellow summer/daisygnomeside_2K_20260914151820.jpeg",
    shortDesc: "Droboučký kopretinový panáček.",
    fullStory: "Jeho kopretinová čepička z něj dělá experta na letní schovávanou v trávě.",
    material: "Bavlněná příze",
    height: "15 cm"
  },

  // ZELENÉ JARO (zelenejaro)
  {
    id: "mensi-zabka",
    name: "Malá žabka",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "zelenejaro",
    worldName: "Zelené jaro",
    plainImg: "images/zelenejaro/babyfrog.jpeg",
    lifestyleImg: "images/zelenejaro/babyfrogside.jpeg",
    shortDesc: "Zelená roztomilá žabka.",
    fullStory: "Tahle malá žabka hledá svoji oblíbenou tůňku a teplé jarní sluníčko.",
    material: "Bavlněná příze",
    height: "12 cm"
  },
  {
    id: "mrkvickovy-skritek",
    name: "Mrkvičkový skřítek",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "zelenejaro",
    worldName: "Zelené jaro",
    plainImg: "images/zelenejaro/carrotgnomefront_2K_202607061200.jpeg",
    lifestyleImg: "images/zelenejaro/carrotgnomediagonal_2K_202607061200.jpeg",
    shortDesc: "Pomocník s mrkvičkovou čepicí.",
    fullStory: "Je neuvěřitelně pracovitý a občas usne přímo na hromadě čerstvé zeleniny.",
    material: "Bavlněná příze",
    height: "21 cm"
  },
  {
    id: "zabak-s-muchomurkou",
    name: "Žabák s muchomůrkou",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "zelenejaro",
    worldName: "Zelené jaro",
    plainImg: "images/zelenejaro/frogmoshroom.jpeg",
    lifestyleImg: "images/zelenejaro/frogmoshroomside.jpg_2K_20260914150620.jpeg",
    shortDesc: "Veselý zelený žabák s muchomůrkou na hlavičce.",
    fullStory: "Našel dokonalý klobouček v podobě červené puntíkaté muchomůrky a nosí ji hrdě všude s sebou.",
    material: "Bavlněná příze",
    height: "17 cm"
  },
  {
    id: "skritek-ruzoveho-kvitku",
    name: "Skřítek růžového kvítku",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "zelenejaro",
    worldName: "Zelené jaro",
    plainImg: "images/zelenejaro/pinkflowergnomefront_2K_202607061201.jpeg",
    lifestyleImg: "images/zelenejaro/pinkflowergnome_2K_202607061201.jpeg",
    shortDesc: "Skřítek posetý růžovými lístky.",
    fullStory: "V noci potichu probouzí spící poupata a pečuje o první jarní květy.",
    material: "Hebká směsová příze",
    height: "18 cm"
  },
  {
    id: "ruzova-muchomurka",
    name: "Růžová muchomůrka",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "zelenejaro",
    worldName: "Zelené jaro",
    plainImg: "images/zelenejaro/pinkmusrhoom.jpeg",
    lifestyleImg: "images/zelenejaro/pinkmusrhoomside.jpeg",
    shortDesc: "Netradiční růžová muchomůrka.",
    fullStory: "Vyrostla na tajném místě na jaře a proto získala nádhernou růžovou barvu.",
    material: "Bavlna",
    height: "15 cm"
  },
  // FARMA KUŘÁTEK (yellowchick)
  {
    id: "male-kuratko",
    name: "Malé kuřátko",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellowchick",
    worldName: "Farma kuřátek",
    plainImg: "images/yellowchick/babychick.jpg_2K_20260914140932.jpeg",
    lifestyleImg: "images/yellowchick/babychick.jpg_2K_20260914140932.jpeg",
    shortDesc: "Malé roztomilé kuřátko.",
    fullStory: "Zvědavé kuřátko, které právě objevuje svět.",
    material: "Žinylková příze",
    height: "10 cm"
  },
  {
    id: "vesele-kuratko",
    name: "Veselé kuřátko",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellowchick",
    worldName: "Farma kuřátek",
    plainImg: "images/yellowchick/chick.jpg_2K_20260914140958.jpeg",
    lifestyleImg: "images/yellowchick/chickside.jpg_2K_20260914140944.jpeg",
    shortDesc: "Usměvavé žluté kuřátko.",
    fullStory: "Nejraději pobíhá po dvoře a hledá zrníčka.",
    material: "Bavlněná příze",
    height: "12 cm"
  },
  {
    id: "kuratko-a-zajicek",
    name: "Kuřátko a zajíček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellowchick",
    worldName: "Farma kuřátek",
    plainImg: "images/yellowchick/chickandbunny.jpg_2K_20260914141847.jpeg",
    lifestyleImg: "images/yellowchick/chickandbunnyside.jpg_2K_20260914142043.jpeg",
    shortDesc: "Nerozluční přátelé z farmy.",
    fullStory: "Tihle dva spolu tráví každý den a vymýšlejí nová dobrodružství.",
    material: "Bavlněná příze",
    height: "14 cm"
  },
  {
    id: "kuratkova-panenka",
    name: "Kuřátková panenka",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellowchick",
    worldName: "Farma kuřátek",
    plainImg: "images/yellowchick/chickdoll.jpg_2K_20260914142133.jpeg",
    lifestyleImg: "images/yellowchick/chickdollside.jpg_2K_20260914142148.jpeg",
    shortDesc: "Panenka v kuřátkovém kostýmu.",
    fullStory: "Holčička, která se převlékla za kuřátko, aby si mohla hrát s ostatními.",
    material: "Směsová příze",
    height: "20 cm"
  },
  {
    id: "maly-usacek",
    name: "Malý ušáček",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellowchick",
    worldName: "Farma kuřátek",
    plainImg: "images/yellowchick/little_bunny.jpg_2K_20260914140925.jpeg",
    lifestyleImg: "images/yellowchick/little_bunnyside.jpg_2K_20260914143034.jpeg",
    shortDesc: "Roztomilý malý zajíček.",
    fullStory: "Rád se schovává ve vysoké trávě a pozoruje okolí.",
    material: "Měkká příze",
    height: "13 cm"
  },
  {
    id: "kohoutek",
    name: "Kohoutek",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellowchick",
    worldName: "Farma kuřátek",
    plainImg: "images/yellowchick/rooster.jpg_2K_20260914142312.jpeg",
    lifestyleImg: "images/yellowchick/roosterside.jpg_2K_20260914142319.jpeg",
    shortDesc: "Pyšný vládce dvorku.",
    fullStory: "Každé ráno probouzí celou farmu svým zakokrháním.",
    material: "Bavlněná příze",
    height: "18 cm"
  },
  {
    id: "ovecka",
    name: "Ovečka",
    status: "available",
    statusText: "Jediný originál na světě",
    world: "yellowchick",
    worldName: "Farma kuřátek",
    plainImg: "images/yellowchick/sheep.jpg_2K_20260914140919.jpeg",
    lifestyleImg: "images/yellowchick/sheep_side.jpg_2K_20260914143350.jpeg",
    shortDesc: "Chundelatá malá ovečka.",
    fullStory: "Nejjemnější stvoření z celé farmy, které miluje pohlazení.",
    material: "Žinylková příze",
    height: "15 cm"
  }
];

// Default initial guestbook messages if localStorage is empty
const INITIAL_GUESTBOOK = [
  {
    id: 1,
    author: "Marie K.",
    date: "06. 09. 2026",
    text: "Zaječí věneček už dorazil a je ještě krásnější než na fotkách! Ta péče a balení bylo jako rozbalovat pohádkový dárek. Děkuji!"
  },
  {
    author: "Tereza & Jonáš",
    date: "02. 09. 2026",
    text: "Lesní duch zdobí náš obývací pokoj a dělá nám radost každý den. Je úžasné vědět, že máme doma jediný originál na světě."
  }
];

// ==========================================
// 2. DOM ELEMENTS & APPLICATION STATE
// ==========================================
let activeWorldFilter = null;
let selectedDonationAmount = 50;

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initPageRendering();
  initDonationSection();
  initContactForm();
  initGuestbook();
  initModals();
  updateCurrentYear();
});

// Update current year in footer
function updateCurrentYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ==========================================
// 3. NAVBAR & MOBILE DRAWER LOGIC
// ==========================================
function initNavbar() {
  const header = document.getElementById("site-header");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");
    mobileToggle.innerHTML = isOpen ? "✕" : "☰";
    mobileToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileToggle.innerHTML = "☰";
    });
  });
}

// ==========================================
// 4. RENDER PRODUCTS GRID & MOBILE HOVER FALLBACK
// ==========================================
function renderProducts(products, containerId = "products-grid") {
  const gridContainer = document.getElementById(containerId);
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  if (products.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem;">V tomto světě zatím nemáme žádné volné postavičky.</p>
        <button class="btn btn-secondary" onclick="resetWorldFilter()">Zobrazit všechny světy</button>
      </div>
    `;
    return;
  }

  products.forEach(item => {
    const isAvailable = item.status === "available";
    const badgeClass = isAvailable ? "badge-original" : "badge-adopted";
    const cardClass = isAvailable ? "" : "adopted";

    const cardHTML = `
      <article class="product-card ${cardClass}" id="card-${item.id}">
        <div class="product-image-container" onclick="openStoryModal('${item.id}')">
          <!-- Plain Studio Image -->
          <img 
            src="${item.plainImg}" 
            alt="${item.name} na bílém pozadí" 
            class="product-img img-plain"
            onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\' viewBox=\'0 0 300 300\'><rect width=\'100%\' height=\'100%\' fill=\'%23F5EBE6\'/><text x=\'50%\' y=\'50%\' font-size=\'16\' fill=\'%237D6F6E\' text-anchor=\'middle\'>${item.name} Plain</text></svg>'"
          >
          
          <!-- Lifestyle Interior Image (Crossfades on hover / tap) if available -->
          ${item.lifestyleImg && item.lifestyleImg !== item.plainImg ? `
          <img 
            src="${item.lifestyleImg}" 
            alt="${item.name} v interiéru" 
            class="product-img img-lifestyle"
            onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\' viewBox=\'0 0 300 300\'><rect width=\'100%\' height=\'100%\' fill=\'%23EEF2EE\'/><text x=\'50%\' y=\'50%\' font-size=\'16\' fill=\'%237D6F6E\' text-anchor=\'middle\'>${item.name} Lifestyle</text></svg>'"
          >
          ` : ''}

          <div class="product-badge-overlay">
            <span class="badge ${badgeClass}">${item.statusText}</span>
          </div>

          <!-- Mobile touch fallback button -->
          ${item.lifestyleImg && item.lifestyleImg !== item.plainImg ? `
          <button 
            type="button" 
            class="mobile-image-toggle" 
            onclick="event.stopPropagation(); toggleMobilePhoto('${item.id}')"
            aria-label="Přepnout fotografii"
          >
            📷 Přepnout fotku
          </button>
          ` : ''}
        </div>

        <div class="product-body">
          <h3 class="product-name font-heading">${item.name}</h3>
          <p class="product-desc">${item.shortDesc}</p>

          <div class="product-footer">
            <button class="btn-detail" onclick="openStoryModal('${item.id}')">
              Příběh & Detaily →
            </button>

            ${isAvailable ? `
              <button class="btn btn-primary" onclick="adoptCharacter('${item.name}')">
                Adoptovat
              </button>
            ` : `
              <button class="btn btn-disabled" disabled>
                Má domov
              </button>
            `}
          </div>
        </div>
      </article>
    `;

    gridContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Mobile toggle photo switch handler
function toggleMobilePhoto(productId) {
  const card = document.getElementById(`card-${productId}`);
  if (card) {
    card.classList.toggle("show-lifestyle");
  }
}

// ==========================================
// 5. WORLDS FILTERING LOGIC
// ==========================================
function initPageRendering() {
  const pageType = document.body.getAttribute("data-page");
  
  if (pageType === "home") {
    // Select 4 random characters to feature on homepage
    const shuffled = [...PRODUCTS_DATA].sort(() => 0.5 - Math.random());
    renderProducts(shuffled.slice(0, 4));
  } else if (pageType) {
    // The pageType on subpages is the world key (e.g., 'spring', 'meadow')
    const worldProducts = PRODUCTS_DATA.filter(p => p.world === pageType);
    renderProducts(worldProducts);
    
    renderRecommendations(pageType);
  }
}

function renderRecommendations(currentWorld) {
  const otherProducts = PRODUCTS_DATA.filter(p => p.world !== currentWorld);
  const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
  const recommended = shuffled.slice(0, 4);
  
  renderProducts(recommended, "recommended-grid");
}

// ==========================================
// 6. STORY MODAL & ADOPTION TRIGGER
// ==========================================
function openStoryModal(productId) {
  const item = PRODUCTS_DATA.find(p => p.id === productId);
  if (!item) return;

  const modalBody = document.getElementById("modal-story-body");
  const modalOverlay = document.getElementById("story-modal");

  const isAvailable = item.status === "available";

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <span class="badge ${isAvailable ? 'badge-original' : 'badge-adopted'}">${item.statusText}</span>
      <h2 class="font-heading" style="font-size: 2.4rem; margin-top: 0.5rem;">${item.name}</h2>
      <p style="font-size: 0.9rem; color: var(--accent-sage-dark); font-weight: 700;">Světy: ${item.worldName}</p>
    </div>

    ${item.lifestyleImg && item.lifestyleImg !== item.plainImg ? `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
      <img src="${item.plainImg}" alt="${item.name}" style="width: 100%; border-radius: 12px; box-shadow: var(--shadow-sm);">
      <img src="${item.lifestyleImg}" alt="${item.name} z profilu" style="width: 100%; border-radius: 12px; box-shadow: var(--shadow-sm);">
    </div>
    ` : `
    <div style="display: flex; justify-content: center; margin-bottom: 1.5rem;">
      <img src="${item.plainImg}" alt="${item.name}" style="max-width: 340px; width: 100%; border-radius: 12px; box-shadow: var(--shadow-sm);">
    </div>
    `}

    <h4 class="font-heading" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Příběh panáčka:</h4>
    <p style="line-height: 1.7; color: var(--text-main); margin-bottom: 1.5rem;">${item.fullStory}</p>

    <div style="background: var(--bg-cream); padding: 1rem 1.2rem; border-radius: 12px; margin-bottom: 1.8rem; font-size: 0.9rem;">
      <p style="margin-bottom: 0.3rem;"><strong>Materiál:</strong> ${item.material}</p>
      <p style="margin-bottom: 0;"><strong>Výška:</strong> ${item.height}</p>
    </div>

    <div style="text-align: center;">
      ${isAvailable ? `
        <button class="btn btn-primary" onclick="adoptCharacter('${item.name}')">
          Adoptovat ${item.name} →
        </button>
      ` : `
        <p style="color: var(--text-muted); font-style: italic;">Tato postavička již dělá radost ve svém novém domově.</p>
      `}
    </div>
  `;

  modalOverlay.classList.add("active");
  modalOverlay.setAttribute("aria-hidden", "false");
}

function adoptCharacter(characterName) {
  // Close story modal
  closeModals();

  // Scroll to contact form
  const contactSection = document.getElementById("kontakt");
  const charSelect = document.getElementById("contact-character");
  const nameInput = document.getElementById("contact-name");

  if (charSelect) {
    // Select option or default to general
    let found = false;
    for (let i = 0; i < charSelect.options.length; i++) {
      if (charSelect.options[i].text.includes(characterName)) {
        charSelect.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      charSelect.value = "obecny";
    }
  }

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }

  setTimeout(() => {
    if (nameInput) nameInput.focus();
  }, 500);
}

// ==========================================
// 7. DONATION & SIMULATED QR PAYMENT
// ==========================================
function initDonationSection() {
  const tiles = document.querySelectorAll(".donation-tile");
  const donateBtn = document.getElementById("btn-donate");

  tiles.forEach(tile => {
    tile.addEventListener("click", () => {
      tiles.forEach(t => t.classList.remove("selected"));
      tile.classList.add("selected");
      selectedDonationAmount = parseInt(tile.getAttribute("data-amount"), 10);
    });
  });

  if (donateBtn) {
    donateBtn.addEventListener("click", () => {
      openQRModal(selectedDonationAmount);
    });
  }
}

function openQRModal(amount) {
  const qrOverlay = document.getElementById("qr-modal");
  const amountText = document.getElementById("qr-amount-text");

  if (amountText) amountText.textContent = `${amount} Kč`;
  if (qrOverlay) {
    qrOverlay.classList.add("active");
    qrOverlay.setAttribute("aria-hidden", "false");
  }
}

// ==========================================
// 8. CONTACT FORM & GUESTBOOK PERSISTENCE
// ==========================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value;
    const char = document.getElementById("contact-character").value;

    alert(`Děkuji za zprávu, ${name}! Ozvu se vám co nejdříve ohledně postavičky (${char}).`);
    form.reset();
  });
}

function initGuestbook() {
  const gbForm = document.getElementById("guestbook-form");
  const commentsList = document.getElementById("comments-list");

  // Load comments from localStorage or defaults
  let comments = JSON.parse(localStorage.getItem("bavlakova_guestbook")) || INITIAL_GUESTBOOK;

  function renderComments() {
    if (!commentsList) return;
    commentsList.innerHTML = "";

    comments.forEach(item => {
      const initial = item.author.charAt(0).toUpperCase();
      const card = `
        <div class="comment-item">
          <div class="comment-header">
            <div class="comment-author">
              <span class="author-avatar">${initial}</span>
              <span>${escapeHtml(item.author)}</span>
            </div>
            <span class="comment-date">${item.date}</span>
          </div>
          <p class="comment-text">${escapeHtml(item.text)}</p>
        </div>
      `;
      commentsList.insertAdjacentHTML("beforeend", card);
    });
  }

  if (gbForm) {
    gbForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const authorInput = document.getElementById("gb-author");
      const textInput = document.getElementById("gb-text");

      const author = authorInput.value.trim();
      const text = textInput.value.trim();

      if (!author || !text) return;

      const today = new Date();
      const formattedDate = `${String(today.getDate()).padStart(2, '0')}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${today.getFullYear()}`;

      const newComment = { author, date: formattedDate, text };
      comments.unshift(newComment);

      localStorage.setItem("bavlakova_guestbook", JSON.stringify(comments));
      renderComments();

      gbForm.reset();
    });
  }

  renderComments();
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ==========================================
// 9. MODAL HANDLERS
// ==========================================
function initModals() {
  const closeStory = document.getElementById("modal-close-story");
  const closeQR = document.getElementById("modal-close-qr");
  const confirmQR = document.getElementById("btn-qr-confirm");
  const overlays = document.querySelectorAll(".modal-overlay");

  if (closeStory) closeStory.addEventListener("click", closeModals);
  if (closeQR) closeQR.addEventListener("click", closeModals);
  if (confirmQR) {
    confirmQR.addEventListener("click", () => {
      closeModals();
      alert("Děkuji moc za vaše srdečné klubíčko! ❤️");
    });
  }

  overlays.forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModals();
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });
}

function closeModals() {
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
  });
}
