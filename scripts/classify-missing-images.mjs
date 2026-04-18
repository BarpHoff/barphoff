/**
 * Classifica as imagens do WP que a auditoria (wp-audit.mjs) marcou como "missing"
 * (foundInPublic === false) por nivel de criticidade para o site Next.js.
 *
 * Saida: estatisticas por categoria + lista das criticas reais (as que aparecem
 * referenciadas por basename/stem dentro do codigo fonte do site novo).
 *
 * Uso: node scripts/classify-missing-images.mjs
 *
 * Categorias:
 *   - variant     : -\\d+x\\d+.ext (Next gera via sharp a partir do master; ignorar)
 *   - decorative  : background/hero-bg/overlay/cropped artifacts do Elementor (ignorar)
 *   - wpOnlyPage  : referenciadas apenas por paginas WP que nao foram reproduzidas
 *   - trulyUsed   : basename aparece em public/ app/ components/ com delimitador
 *                   (esta e a unica categoria que exige acao/download)
 */
import fs from 'node:fs';
import path from 'node:path';

const REPORT_PATH = 'scripts/audit-report.json';
const LIVE_SLUGS = new Set([
  'negativa-cirurgia',
  'negativa-plano-de-saude',
  'negativa-do-sus',
  'negativa-de-tratamento',
  'home-care',
  'tratamento-oncologico',
  'medicamento-alto-custo',
  'direito-a-saude',
  'revisao-restituicao',
  'sobre',
  'contato',
  'blog',
  'politica-de-privacidade',
  'pagina-principal-teste',
]);

const VARIANT_RX = /-\d+x\d+\.(jpg|jpeg|png|webp|avif|gif)$/i;
const DECORATIVE_KW = ['-bg.', 'background', 'hero-bg', 'pattern-', 'overlay-', 'cropped-'];
const ELEMENTOR_KW = ['elementor', 'ele_hover', '-wallp'];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.next' || e.name === '.git') continue;
    if (e.name.startsWith('.') && e.isDirectory()) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function loadSourceCorpus() {
  const roots = ['app', 'components', 'public', 'lib', 'content', 'data'].filter((d) => fs.existsSync(d));
  const files = roots.flatMap((r) => walk(r));
  const textExts = new Set(['.html', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.css', '.scss', '.md', '.mdx', '.json']);
  const textFiles = files.filter((f) => textExts.has(path.extname(f)));
  return textFiles.map((f) => ({ f, content: fs.readFileSync(f, 'utf8') }));
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function main() {
  if (!fs.existsSync(REPORT_PATH)) {
    console.error('ERRO: execute primeiro `node scripts/wp-audit.mjs` para gerar', REPORT_PATH);
    process.exit(1);
  }
  const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
  const imgs = report.images || [];
  const missing = imgs.filter((i) => !i.foundInPublic);

  const cats = { variant: [], decorative: [], wpOnlyPage: [], trulyUsed: [] };
  const corpus = loadSourceCorpus();

  for (const m of missing) {
    const basename = path.basename(m.url);
    const low = basename.toLowerCase();

    if (VARIANT_RX.test(basename)) {
      cats.variant.push(m);
      continue;
    }
    if (DECORATIVE_KW.some((k) => low.includes(k)) || ELEMENTOR_KW.some((k) => low.includes(k))) {
      cats.decorative.push(m);
      continue;
    }

    // Word-bound match to avoid partials (e.g. "4.jpg" matching "v4.jpg")
    const re = new RegExp('[/"\'\\s]' + escRe(basename), 'g');
    const hitFiles = corpus.filter((c) => re.test(c.content)).map((c) => c.f);

    if (hitFiles.length) {
      cats.trulyUsed.push({ ...m, hitFiles });
    } else if (!LIVE_SLUGS.has(m.referencedBy) && m.referencedBy !== 'pagina-inicial') {
      cats.wpOnlyPage.push(m);
    } else {
      // referenced by live page in audit, but live HTML doesn't actually use it (new design)
      cats.wpOnlyPage.push(m);
    }
  }

  console.log('=== classify-missing-images ===');
  console.log('total WP imagens:', imgs.length);
  console.log('missing (foundInPublic=false):', missing.length);
  console.log('');
  console.log('  variant (Next gera via sharp):          ', cats.variant.length);
  console.log('  decorative / elementor artifacts:       ', cats.decorative.length);
  console.log('  wp-only page (design nao reproduzido):  ', cats.wpOnlyPage.length);
  console.log('  TRULY USED no site novo (agir):         ', cats.trulyUsed.length);

  if (cats.trulyUsed.length) {
    console.log('\nDetalhes das criticas reais:');
    for (const t of cats.trulyUsed) {
      console.log('  -', path.basename(t.url));
      console.log('    WP url :', t.url);
      console.log('    WP page:', t.referencedBy);
      console.log('    usadas em:', t.hitFiles.join(', '));
    }
  } else {
    console.log('\nOK: nenhuma imagem ausente e efetivamente referenciada pelo site novo.');
    console.log('Baixar qualquer imagem seria desperdicio; o audit report contem apenas falsos positivos.');
  }
}

main();
