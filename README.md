# Serrande Meddy

Sito web one-page per Serrande Meddy: installazione, manutenzione e riparazione
di serrande avvolgibili per negozi e abitazioni a Bologna e provincia.

## Stack

- React 19
- Vite 8
- Oxlint

## Sviluppo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Struttura

- `src/data.js` — contenuti del sito (prodotti, servizi, gallery, contatti)
- `src/components/` — sezioni della pagina (Header, Hero, Products, Services, ...)
- `src/assets/` — immagini ottimizzate

## Deploy su Render

Il sito è una static site: Render deve servire la cartella `dist` generata
dalla build, non la root del repository.

- Build Command: `npm ci && npm run build`
- Publish Directory: `dist`

La configurazione è descritta anche in `render.yaml`.

## Contatti

- Telefono: 388 474 6201
- Email: info@serrandemeddy.it
- Zona: Bologna e provincia
