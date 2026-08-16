# palc-web

Web na Astro 7 + Node 22 (stejný stack jako web-1P).

## Vývoj

```bash
nvm use          # Node 22 (.nvmrc)
npm install
npm run dev      # http://116.203.103.27:4332/
```

## Build

```bash
npm run build    # výstup do dist/
npm run preview  # náhled buildu na portu 4332
```

## Stav

Kostra projektu — čeká na kompletní zadání (obsah, doména, design, deploy).

- `astro.config.mjs` → `site` je zatím placeholder `https://example.com`, doplnit ostrou doménu.
- Git: lokální repo, remote `github-palc-web:<org>/<repo>.git` (SSH alias, deploy klíč `~/.ssh/id_palc_web`).
