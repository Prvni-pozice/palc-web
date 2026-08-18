# Otevřené body — palc-web

Stav k 16. 8. 2026. Web je postavený jako kompletní kostra podle zadání a design
systému „PALC Design System" (claude.ai/design). Před spuštěním je potřeba doplnit:

## Blokuje obsah (vstupy od klienta)

1. **Seznam služeb/profesí** — jistě doloženo jen: kompletní TZB, podtlakové
   odvodnění střech, jádrové vrtání; voda, odpad, topení, klimatizace.
   MaR a Elektro zatím NEJSOU na webu (nevíme, jestli PALČ dodává).
   → `src/data/services.js`
2. **Reference s fotografiemi** — všech 6 realizací jsou UKÁZKOVÁ DATA.
   Potřebujeme skutečné stavby: název, lokalita, rok, typ, profese, rozsah,
   investor/GD (pokud lze zveřejnit), fotky (celá budova!).
   → `src/data/projects.js`
   **POZOR:** hero slider (`public/img/hero/`) a fotky u p1–p3
   (`public/img/realizace/`) jsou DEMO snímky z Unsplash (volná licence) na
   přání Zdeňka, aby web nevypadal prázdně. Před spuštěním NUTNO nahradit
   reálnými stavbami PALČ — cizí budovy nesmí zůstat vydávané za reference.
3. **Tvrdá čísla** — doplněno 18. 8.: 7 let zkušeností, 35 realizací,
   18 odborníků (homepage i O společnosti). Zbývá: počet montážních týmů
   (na `/o-spolecnosti/` pořád „X") a loga klientů se souhlasem.
4. **Kontakty** — e-mail `poptavky@palc.cz` a telefon jsou PLACEHOLDER.
   Sídlo Praha 9 vs. provozovna Rudná čeká potvrzení. → `src/data/site.js`
5. ~~Doména~~ **VYŘEŠENO 18. 8.** — ostrá doména je `palc-instalace.cz`,
   kanonická varianta s `www`: `https://www.palc-instalace.cz` (doplněno do
   `astro.config.mjs` kvůli sitemap + canonical). Zbývá DNS na Vercel a ve
   Vercel project settings nastavit `www` jako primary, apex → 301 na `www`.

## Technické

6. ~~Ostrá loga~~ **VYŘEŠENO 17. 8.** — `logo-white.png` přenesen z design
   projektu (persisted tool-result na disku, CRC ověřeno), `logo-primary.png`
   z něj vygenerován přebarvením (PIL), favicon = ořez písmene C.
   Zbývá: až budou vektorové zdroje (PDF/SVG), nahradit PNG za SVG.
7. **Odeslání poptávky** — formulář `/poptavka/` není napojený (statický web).
   Možnosti: Vercel serverless funkce + SMTP, nebo služba typu Formspree.
   Upload souborů do 100 MB bude chtít úložiště (S3/R2) — rozmyslet.
8. **Originální font logotypu** — Jost + Barlow jsou substituce (viz DS readme).
   Až budou licencované řezy, vyměnit v `src/layouts/Base.astro` + tokens.
9. **Výkon** — fonty přes @fontsource (8 řezů). Před ostrým spuštěním zvážit
   vlastní subset + načtení po `load` (viz postup z web-1P, PSI 100 na mobilu).
10. **Deploy** — Vercel zatím nenapojený. Po napojení pushovat dávkově
    (každý push = deploy).
11. ~~Náhledovky při sdílení~~ **VYŘEŠENO 18. 8.** — `Base.astro` posílá
    `og:url` (= canonical), `og:image`, `og:site_name`, `og:locale`
    a `twitter:card`. Výchozí náhledovka `public/img/og-default.jpg`
    (1200×630, bílé logo na navy, generováno PIL z `logo-white.png`).
    Stránka s vlastní fotkou ji přebije přes prop `image` — dnes to dělá
    jen detail realizace (`image={p.image}`).
    **Pozor:** u p1–p3 tím pádem jde do náhledovky DEMO fotka z Unsplash;
    padá to spolu s bodem 2. Reálné fotky dodat na šířku, min. 1200 px
    (p3 je dnes na výšku 1200×1600 — pro sdílení špatný poměr).
    `og:type` je všude `website` — správně, web nemá články.

## Etapa 2 (připraveno v IA, zatím nestavět)

- `/sortiment/` — B2B poptávkový katalog (kategorie → výpis → detail,
  poptávkový košík). Design system s tím počítá, menu se rozšíří až to bude.

## Zpětný push do design systému

Po dodání obsahu pushnout zpět komponenty, které DS nemá (postup viz
/data/bot/DESIGN-CODE-PIPELINE.md): mobilní menu (SiteHeader), filtry realizací,
stavy formuláře.
