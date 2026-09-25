# Otevřené body — palc-web

Stav k 25. 9. 2026 (kostra 16. 8., obsah od klienta 24. 9.). Web je postavený jako kompletní kostra podle zadání a design
systému „PALC Design System" (claude.ai/design). Před spuštěním je potřeba doplnit:

## Blokuje obsah (vstupy od klienta)

1. ~~Seznam služeb~~ **VYŘEŠENO 24. 9.** — zdravotechnika (vč. podtlakového
   odvodnění střech), vytápění, plyn, jádrové vrtání; rozsahy dodávek podle
   klienta. Vzduchotechnika, rekuperace a chlazení z nabídky vyřazeny.
   Ceník jádrového vrtání se nezveřejňuje (cena na poptávku).
2. **Fotky** — 30 skutečných referencí doplněno 24. 9. (`src/data/projects.js`),
   ale fotky mají jen dvě (vizualizace Rezidence Elišky Přemyslovny a Dvojdomy
   Předboř z PDF klienta, v textu označené jako vizualizace). Ostatní reference
   jsou bez fotky. **Hero slider (`public/img/hero/`) je pořád DEMO z Unsplash**
   — před spuštěním nahradit reálnou stavbou PALČ. Soubory `p1–p3.jpg`
   v `public/img/realizace/` už nic nepoužívá (mrtvé demo, k odstranění).
3. ~~Tvrdá čísla~~ **VYŘEŠENO 24. 9.** — 6 let, 52+ realizací, 16 odborníků,
   12 montážních týmů (homepage i O společnosti). Zbývá: loga klientů se souhlasem.
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
10. ~~Deploy~~ **VYŘEŠENO** — Vercel napojený (https://palc-web.vercel.app/),
    push na main = deploy. Pushovat dávkově (každý push = deploy).
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
