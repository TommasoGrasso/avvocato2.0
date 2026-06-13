# Checklist SEO — Studio Legale Orsini

## ✅ Già implementato nel codice

- `<title>` e `<meta description>` ottimizzati con keyword locali Brindisi
- Schema.org `LegalService` completo (indirizzo, telefono, email, aree servite)
- Open Graph e Twitter Card
- `canonical`, `geo.region`, `geo.placename`, `ICBM`
- `robots.txt` e `sitemap.xml` in `public/`
- `<meta name="theme-color">` per browser mobile
- `<link rel="preload">` per logo (riduce LCP)
- Struttura HTML semantica (`<header>`, `<main>`, `<footer>`, `<nav>`, `<address>`)
- Un solo `<h1>` per pagina
- `apple-touch-icon`

---

## ⚙️ Da completare dopo il deploy

### 1. Font self-hosted (migliora LCP e Core Web Vitals)
```bash
node scripts/download-fonts.mjs
```
Scarica i font in `public/fonts/`. Da fare una sola volta.

### 2. OG Image (obbligatorio per i social)
```bash
npm install canvas
node scripts/generate-og-image.mjs
```
Oppure crea manualmente un'immagine **1200×630px** e salvala come `public/og-image.jpg`.

### 3. Google Search Console
- Vai su https://search.google.com/search-console
- Aggiungi la proprietà `https://www.studioorsini.it`
- Verifica con il meta tag HTML o DNS TXT
- Invia `https://www.studioorsini.it/sitemap.xml`

### 4. Google Business Profile
- Crea o rivendica il profilo su https://business.google.com
- Inserisci indirizzo, telefono, orari, categoria "Studio legale"
- È il fattore più importante per le ricerche locali "avvocato Brindisi"

### 5. Aggiorna la sitemap dopo ogni modifica
Modifica la data `<lastmod>` in `public/sitemap.xml` ad ogni aggiornamento
del sito e reinvia la sitemap in Google Search Console.

### 6. SSR / Pre-rendering (opzionale, porta il punteggio a 95+)
Per risolvere il problema React SPA considera:
- Migrare a **Next.js** (consigliato per future espansioni)
- Oppure aggiungere `vite-plugin-ssr` o `@vite/plugin-react-router`

---

## 📊 Punteggi attesi dopo il setup completo

| Voce                  | Prima | Dopo |
|-----------------------|-------|------|
| SEO tecnico           | 75    | 92   |
| Core Web Vitals (LCP) | ~3s   | <2s  |
| Schema.org            | ✅    | ✅   |
| Google Business       | ❌    | ✅   |
