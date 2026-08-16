# palc-web

Nový web společnosti **PALČ** — dodavatele kompletního technického zařízení
budov (TZB). Koncept: *„Vidíte budovu. My vidíme, co ji drží v chodu."* —
prezentace jako technický partner pro velké stavby, ne „instalatérská firma".

Astro 7 + Node 22, statický výstup, deploy Vercel (zatím nenapojeno).

## Vývoj

```bash
nvm use          # Node 22 (.nvmrc)
npm install
npm run dev      # http://116.203.103.27:4332/
npm run build    # výstup do dist/
```

## Zdroj designu

Design system: **PALC Design System** na claude.ai/design
(projekt `c0f7dec8-a1d7-4765-a025-dda083754eea`). Tokeny zkopírované doslova do
`src/styles/tokens.css`, komponenty přepsané z JSX do Astro podle šablon
`ui_kits/web/`. Pravidla předávky: `/data/bot/DESIGN-CODE-PIPELINE.md`.

- Barvy: navy `#133559`, červená `#FF464A` jen jako akcent
- Typografie: Jost (display) + Barlow (text) — substituce, čekáme originál
- Rohy ostré, bez dekorativních ikon, fotky = placeholdery do dodání od klienta

## Struktura

```
/                      homepage (hero → čísla → služby → realizace → proces → zázemí → CTA)
/sluzby/ + detaily     hlavní TZB profese, každá s vlastní URL
/realizace/ + detaily  reference jako case studies, filtr typ stavby × profese
/reseni-pro-budovy/    vstup podle typu budovy (segmenty s vlastní URL)
/o-spolecnosti/        kostra — čeká podklady
/kariera/              kostra — čeká pozice
/kontakt/              placeholder kontakty
/poptavka/             B2B formulář s uploadem podkladů (odeslání zatím nenapojeno)
```

Data webu (služby, reference, segmenty, proces, kontakty): `src/data/*.js` —
ukázková, viz **docs/otevrene-body.md** pro to, co musí dodat klient.
