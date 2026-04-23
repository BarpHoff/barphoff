/**
 * Audita todos os href="..." presentes em lib/blog-data.ts (armazenados como
 * strings escapadas de TS com \"). Categoriza em internos/relativos/externos,
 * lista quais URLs sao usadas, e valida internos contra a lista de rotas vivas.
 *
 * Uso: node scripts/audit-blog-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const FILE = 'lib/blog-data.ts';
const raw = fs.readFileSync(FILE, 'utf8');

// Rotas vivas conhecidas (App Router + rewrites + blog posts)
const liveStatic = new Set([
  '/',
  '/sobre',
  '/blog',
  '/contato',
  '/areas-de-atuacao',
  '/politica-de-privacidade',
  '/pagina-principal-teste',
  '/negativa-cirurgia',
  '/negativa-plano-de-saude',
  '/negativa-do-sus',
  '/negativa-de-tratamento',
  '/home-care',
  '/tratamento-oncologico',
  '/medicamento-alto-custo',
  '/direito-a-saude',
  '/revisao-restituicao',
]);

// Redirects 301 que cobrem slugs antigos
const redirects = new Map([
  ['/quem-somos', '/sobre'],
  ['/cirurgias-reparadoras', '/negativa-cirurgia'],
  ['/tratamento-home-care', '/home-care'],
  ['/negativas-de-plano-de-saude', '/negativa-plano-de-saude'],
  ['/tratamento-de-cancer', '/tratamento-oncologico'],
  ['/revisao-e-restituicao-de-valores-pagos-indevidamente', '/revisao-restituicao'],
]);

// Blog slugs reais (extraidos do proprio lib/blog-data.ts)
const blogSlugs = new Set();
// O objeto foi gerado como JSON-like: "slug": "valor"
const slugRe = /"slug":\s*"([^"]+)"/g;
let sm;
while ((sm = slugRe.exec(raw))) blogSlugs.add(sm[1]);

// Extrair hrefs do conteudo (strings com \" escapado)
const hrefRe = /href=\\"([^"\\]+)\\"/g;
const usages = []; // { url, postSlug }

// Mapear posts por posicao para sabermos qual post contem cada href
// Os blocos sao JSON-like: "slug": "X"
const postBlocks = [];
// Pega cada ocorrencia de "slug":"X" e assume o bloco vai ate a proxima
const slugPositions = [];
const sp = /"slug":\s*"([^"]+)"/g;
let spm;
while ((spm = sp.exec(raw))) slugPositions.push({ slug: spm[1], start: spm.index });
for (let i = 0; i < slugPositions.length; i++) {
  const end = i + 1 < slugPositions.length ? slugPositions[i+1].start : raw.length;
  postBlocks.push({ slug: slugPositions[i].slug, start: slugPositions[i].start, end });
}

function postForPosition(pos) {
  for (const b of postBlocks) if (pos >= b.start && pos < b.end) return b.slug;
  return '(unknown)';
}

let m;
while ((m = hrefRe.exec(raw))) {
  usages.push({ url: m[1], pos: m.index, postSlug: postForPosition(m.index) });
}

// Dedup por url
const unique = new Map();
for (const u of usages) {
  if (!unique.has(u.url)) unique.set(u.url, new Set());
  unique.get(u.url).add(u.postSlug);
}

function classify(u) {
  if (/^#/.test(u)) return 'anchor';
  if (/^mailto:/i.test(u)) return 'mailto';
  if (/^tel:/i.test(u)) return 'tel';
  if (/^(https?:\/\/)?(wa\.me|api\.whatsapp\.com)/i.test(u)) return 'whatsapp';
  if (/^https?:\/\/(www\.)?barphoff\.com(\.br)?/i.test(u)) return 'internal-absolute';
  if (/^\//.test(u)) return 'relative';
  if (/^https?:\/\//i.test(u)) return 'external';
  return 'other';
}

function resolveRelative(u) {
  // Normalize absolute barphoff.com to relative path
  let rel = u.replace(/^https?:\/\/(www\.)?barphoff\.com(\.br)?/i, '');
  if (!rel) rel = '/';
  // strip trailing slash (except root)
  rel = rel.replace(/\/$/, '') || '/';
  // strip query + fragment for existence check
  const bare = rel.split('?')[0].split('#')[0];
  return bare;
}

function checkInternal(u) {
  const p = resolveRelative(u);
  if (liveStatic.has(p)) return { ok: true, target: p };
  if (p.startsWith('/blog/')) {
    const slug = p.replace(/^\/blog\//, '');
    if (blogSlugs.has(slug)) return { ok: true, target: p };
    return { ok: false, reason: '404 (blog slug nao existe)', target: p };
  }
  if (redirects.has(p)) return { ok: 'redirect', target: redirects.get(p), via: p };
  return { ok: false, reason: '404 (rota nao existe)', target: p };
}

const report = { internalBroken: [], redirectChain: [], externalSuspect: [], okInternal: 0, ok: 0 };
for (const [url, postSet] of unique) {
  const kind = classify(url);
  if (kind === 'internal-absolute' || kind === 'relative') {
    const r = checkInternal(url);
    if (r.ok === true) { report.okInternal++; continue; }
    if (r.ok === 'redirect') {
      report.redirectChain.push({ url, target: r.target, via: r.via, posts: [...postSet] });
      continue;
    }
    report.internalBroken.push({ url, reason: r.reason, target: r.target, posts: [...postSet] });
  } else if (kind === 'external') {
    // Flag suspeitas conhecidas
    if (/google\.com\.br\/aclk|\/search\?/.test(url) || /\.who\.int\/pt\/about/.test(url)) {
      report.externalSuspect.push({ url, posts: [...postSet] });
    }
  }
}

console.log('=== BLOG INTERNAL LINK AUDIT ===');
console.log('Arquivo:', FILE, '\nPosts lidos:', postBlocks.length, '\nSlugs conhecidos:', blogSlugs.size);
console.log('Hrefs totais:', usages.length, '| unicos:', unique.size);
console.log('OK internos (apontam a rota viva):', report.okInternal);
console.log('');

if (report.internalBroken.length) {
  console.log('>>> QUEBRADOS (' + report.internalBroken.length + ') — apontam p/ rota 404:');
  for (const b of report.internalBroken) {
    console.log('  url:', b.url);
    console.log('   -> target:', b.target);
    console.log('   -> motivo:', b.reason);
    console.log('   -> em posts:', b.posts.join(', '));
    console.log();
  }
} else {
  console.log('>>> Nenhum link interno apontando para rota inexistente.');
}

if (report.redirectChain.length) {
  console.log('\n>>> EM CADEIA DE REDIRECT (' + report.redirectChain.length + ') — 308 -> rota correta:');
  for (const b of report.redirectChain) {
    console.log('  '+b.url+'  (via '+b.via+' -> '+b.target+')');
    console.log('    posts:', b.posts.join(', '));
  }
  console.log('\n  Nota: cadeia funciona mas custa SEO (HTTP 308 extra). Melhor\n  atualizar o href direto para o destino final.');
}

if (report.externalSuspect.length) {
  console.log('\n>>> EXTERNOS SUSPEITOS (' + report.externalSuspect.length + '):');
  report.externalSuspect.forEach(b => console.log('  '+b.url+'\n    em: '+b.posts.join(', ')));
}

// Top URLs por frequencia de uso (nao-ancora, nao-whatsapp)
const freq = [...unique.entries()]
  .filter(([u]) => !/^#/.test(u) && !/wa\.me/.test(u) && !/api\.whatsapp/.test(u))
  .map(([u, p]) => ({ u, count: p.size }))
  .sort((a,b) => b.count - a.count)
  .slice(0, 20);

console.log('\n=== TOP 20 URLS MAIS USADAS NO BLOG ===');
freq.forEach(f => console.log('  '+f.count+'x  '+f.u));
