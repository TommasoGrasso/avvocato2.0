/**
 * Genera public/og-image.jpg (1200×630) per i social.
 * Richiede: npm install canvas
 * Esegui: node scripts/generate-og-image.mjs
 *
 * In alternativa puoi creare l'immagine manualmente con qualsiasi
 * editor grafico rispettando le dimensioni 1200×630px e salvarla
 * come public/og-image.jpg
 */
import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const OUT   = join(__dir, '..', 'public', 'og-image.jpg');

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx    = canvas.getContext('2d');

// Sfondo scuro
ctx.fillStyle = '#1a1510';
ctx.fillRect(0, 0, W, H);

// Banda terra a sinistra
ctx.fillStyle = '#b85c38';
ctx.fillRect(0, 0, 8, H);

// Testo principale
ctx.fillStyle = '#f5f0e8';
ctx.font = 'bold 72px serif';
ctx.fillText('Studio Legale', 80, 200);
ctx.font = 'bold 72px serif';
ctx.fillStyle = '#d4795a';
ctx.fillText('Avv. Roberto Orsini', 80, 290);

// Sottotitolo
ctx.fillStyle = '#c8bfad';
ctx.font = '28px serif';
ctx.fillText('Diritto Civile · Penale · Tributario · Famiglia', 80, 380);
ctx.fillText('Foro di Brindisi — San Pietro Vernotico (BR)', 80, 430);

// Logo (se disponibile)
try {
  const logo = await loadImage(join(__dir, '..', 'public', 'logo.webp'));
  ctx.drawImage(logo, W - 280, H/2 - 120, 220, 220);
} catch {}

writeFileSync(OUT, canvas.toBuffer('image/jpeg', { quality: 0.92 }));
console.log('✓ og-image.jpg generato in public/');
