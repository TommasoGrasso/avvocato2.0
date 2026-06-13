/**
 * Esegui UNA VOLTA in locale dopo aver clonato il progetto:
 *   node scripts/download-fonts.mjs
 *
 * Scarica i font Google in public/fonts/ eliminando la dipendenza
 * esterna e migliorando LCP / Core Web Vitals.
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const FONTS_DIR = join(__dir, '..', 'public', 'fonts');
if (!existsSync(FONTS_DIR)) mkdirSync(FONTS_DIR, { recursive: true });

const FONT_URLS = [
  { url: 'https://fonts.gstatic.com/s/cormorantgaramond/v22/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllvuQ.woff2', file: 'cg-300.woff2' },
  { url: 'https://fonts.gstatic.com/s/cormorantgaramond/v22/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQEl1v.woff2',   file: 'cg-400.woff2' },
  { url: 'https://fonts.gstatic.com/s/cormorantgaramond/v22/co3YmX5slCNuHLi8bLeY9MK7whWMhyjornlvuQ.woff2', file: 'cg-600.woff2' },
  { url: 'https://fonts.gstatic.com/s/cormorantgaramond/v22/co3YmX5slCNuHLi8bLeY9MK7whWMhyjYrnlvuQ.woff2', file: 'cg-700.woff2' },
  { url: 'https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2',  file: 'raleway-400.woff2' },
  { url: 'https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCkIT4ttDfA.woff2',  file: 'raleway-500.woff2' },
  { url: 'https://fonts.gstatic.com/s/raleway/v34/1Ptug8zYS_SKggPNyCEIT4ttDfA.woff2',  file: 'raleway-600.woff2' },
  { url: 'https://fonts.gstatic.com/s/librebaskerville/v14/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMICA.woff2',      file: 'lb-400.woff2' },
  { url: 'https://fonts.gstatic.com/s/librebaskerville/v14/kmKiZrc3Hgbbcjq75U4uslyuy4kn0pNeYRI4CN2V.woff2',    file: 'lb-700.woff2' },
];

for (const { url, file } of FONT_URLS) {
  try {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    writeFileSync(join(FONTS_DIR, file), Buffer.from(buf));
    console.log(`✓ ${file}`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}
console.log('\nFont scaricati. Ora il CSS locale è attivo automaticamente.');
