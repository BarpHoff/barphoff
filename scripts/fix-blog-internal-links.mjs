/**
 * Reescreve hrefs quebrados em lib/blog-data.ts:
 *   - href="https://barphoff.com/<slug>/"  ->  href="/blog/<slug>"
 *     (somente quando <slug> corresponde a um blog post real)
 *   - href="https://barphoff.com/quem-somos/"  ->  href="/sobre"
 *     (evita cadeia 308 /quem-somos -> /sobre)
 *
 * NUNCA toca em:
 *   - href="https://barphoff.com/"  (home — redirect / -> /negativa-cirurgia e intencional)
 *   - URLs externas (gov.br, tjdft, who.int etc.)
 *   - anchors, tel:, mailto:, whatsapp
 *
 * Uso: node scripts/fix-blog-internal-links.mjs
 */
import fs from 'node:fs';

const FILE = 'lib/blog-data.ts';
let raw = fs.readFileSync(FILE, 'utf8');
const before = raw;

// Coleta TODOS os slugs reais (auto-gerados no arquivo)
const slugSet = new Set();
const slugRe = /"slug":\s*"([^"]+)"/g;
let sm;
while ((sm = slugRe.exec(raw))) slugSet.add(sm[1]);

// Padrao escapado no TS: href=\"https://barphoff.com/<path>/\"
// Substituir SOMENTE se <path> e um slug de blog conhecido
const hrefRe = /href=\\"https:\/\/barphoff\.com\/([a-z0-9-]+)\/\\"/g;

let replacedBlog = 0;
let replacedSobre = 0;
const touchedUrls = new Set();

raw = raw.replace(hrefRe, (match, slug) => {
  if (slug === 'quem-somos') {
    replacedSobre++;
    touchedUrls.add('/quem-somos/ -> /sobre');
    return 'href=\\"/sobre\\"';
  }
  if (slugSet.has(slug)) {
    replacedBlog++;
    touchedUrls.add(`/${slug}/ -> /blog/${slug}`);
    return `href=\\"/blog/${slug}\\"`;
  }
  // Nao e slug de blog nem /quem-somos/. Deixar como esta (pode ser um path valido
  // que precisa de outra investigacao — relatar depois).
  return match;
});

if (raw === before) {
  console.log('Nada para fazer. Arquivo ja esta consistente.');
  process.exit(0);
}

fs.writeFileSync(FILE, raw, 'utf8');
console.log(`=== FIX BLOG INTERNAL LINKS ===`);
console.log(`Arquivo: ${FILE}`);
console.log(`Substituicoes /blog/<slug>:  ${replacedBlog}`);
console.log(`Substituicoes /sobre (ex-/quem-somos/): ${replacedSobre}`);
console.log(`\nPadroes tocados (unicos):`);
[...touchedUrls].sort().forEach(u => console.log('  ' + u));
console.log(`\nOK. Rode: node scripts/audit-blog-links.mjs para validar.`);
