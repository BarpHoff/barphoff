#!/usr/bin/env node
/**
 * add-blog-post.mjs — Adiciona um novo post ao blog BARP.HOFF
 *
 * USO:
 *   node scripts/add-blog-post.mjs --json post.json
 *   node scripts/add-blog-post.mjs --dir posts/       (processa todos .json da pasta)
 *   echo '{ ... }' | node scripts/add-blog-post.mjs --stdin
 *
 * FORMATO DO JSON:
 * {
 *   "title": "Título do Post",
 *   "slug": "titulo-do-post",           // opcional — gerado do título
 *   "date": "2026-04-04",               // opcional — hoje
 *   "categories": ["Planos de Saúde"],
 *   "excerpt": "Resumo curto...",        // opcional — primeiros 200 chars do content
 *   "content": "<p>HTML do post...</p>",
 *   "thumbnail": "/assets/blog/img.jpg"  // opcional — adiciona ao thumbnails map
 * }
 *
 * Compatível com n8n (HTTP Request → arquivo JSON → este script)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { resolve, join } from 'path'

const ROOT = resolve(import.meta.dirname, '..')
const BLOG_DATA = join(ROOT, 'lib', 'blog-data.ts')
const BLOG_META = join(ROOT, 'lib', 'blog-meta.ts')
const BLOG_THUMBS = join(ROOT, 'lib', 'blog-thumbnails.ts')

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

function today() {
  return new Date().toISOString().split('T')[0]
}

function escapeForTS(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`')
}

/* ------------------------------------------------------------------ */
/*  Parse input                                                        */
/* ------------------------------------------------------------------ */
function getPostsFromArgs() {
  const args = process.argv.slice(2)
  const posts = []

  if (args.includes('--stdin')) {
    const input = readFileSync('/dev/stdin', 'utf-8')
    posts.push(JSON.parse(input))
  } else if (args.includes('--json')) {
    const file = args[args.indexOf('--json') + 1]
    posts.push(JSON.parse(readFileSync(file, 'utf-8')))
  } else if (args.includes('--dir')) {
    const dir = args[args.indexOf('--dir') + 1]
    for (const f of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      posts.push(JSON.parse(readFileSync(join(dir, f), 'utf-8')))
    }
  } else {
    console.error('Uso: node scripts/add-blog-post.mjs --json post.json')
    console.error('     node scripts/add-blog-post.mjs --dir posts/')
    console.error('     echo \'{"title":"...","content":"..."}\' | node scripts/add-blog-post.mjs --stdin')
    process.exit(1)
  }

  return posts.map((p) => ({
    title: p.title,
    slug: p.slug || slugify(p.title),
    date: p.date || today(),
    categories: p.categories || ['Blog'],
    excerpt: p.excerpt || stripHtml(p.content).slice(0, 200) + '...',
    content: p.content,
    thumbnail: p.thumbnail || null,
  }))
}

/* ------------------------------------------------------------------ */
/*  Check for duplicates                                               */
/* ------------------------------------------------------------------ */
function existingSlugs() {
  const meta = readFileSync(BLOG_META, 'utf-8')
  const slugs = new Set()
  for (const m of meta.matchAll(/slug:\s*['"]([^'"]+)['"]/g)) {
    slugs.add(m[1])
  }
  return slugs
}

/* ------------------------------------------------------------------ */
/*  Append to blog-data.ts                                             */
/* ------------------------------------------------------------------ */
function appendToData(post) {
  let file = readFileSync(BLOG_DATA, 'utf-8')

  const entry = `  {
    "title": ${JSON.stringify(post.title)},
    "slug": ${JSON.stringify(post.slug)},
    "date": ${JSON.stringify(post.date)},
    "categories": ${JSON.stringify(post.categories)},
    "excerpt": ${JSON.stringify(post.excerpt)},
    "content": ${JSON.stringify(post.content)}
  },`

  // Insert before the closing bracket of the array
  const lastBracket = file.lastIndexOf(']')
  file = file.slice(0, lastBracket) + entry + '\n' + file.slice(lastBracket)

  writeFileSync(BLOG_DATA, file, 'utf-8')
}

/* ------------------------------------------------------------------ */
/*  Append to blog-meta.ts                                             */
/* ------------------------------------------------------------------ */
function appendToMeta(post) {
  let file = readFileSync(BLOG_META, 'utf-8')

  const entry = `  {
    title: ${JSON.stringify(post.title)},
    slug: ${JSON.stringify(post.slug)},
    date: ${JSON.stringify(post.date)},
    categories: ${JSON.stringify(post.categories)},
    excerpt: ${JSON.stringify(post.excerpt)}
  },`

  const lastBracket = file.lastIndexOf(']')
  file = file.slice(0, lastBracket) + entry + '\n' + file.slice(lastBracket)

  writeFileSync(BLOG_META, file, 'utf-8')
}

/* ------------------------------------------------------------------ */
/*  Add thumbnail mapping (optional)                                   */
/* ------------------------------------------------------------------ */
function addThumbnail(slug, thumbPath) {
  if (!thumbPath) return

  let file = readFileSync(BLOG_THUMBS, 'utf-8')

  // Check if slug already mapped
  if (file.includes(`'${slug}'`)) return

  // Insert before the closing brace of thumbnailMap
  const closingBrace = file.indexOf('\n}\n')
  if (closingBrace === -1) return

  const entry = `  '${slug}': '${thumbPath}',\n`
  file = file.slice(0, closingBrace) + entry + file.slice(closingBrace)

  writeFileSync(BLOG_THUMBS, file, 'utf-8')
}

/* ------------------------------------------------------------------ */
/*  Update sitemap lastModified                                        */
/* ------------------------------------------------------------------ */
function touchSitemap() {
  const sitemapPath = join(ROOT, 'app', 'sitemap.ts')
  if (!existsSync(sitemapPath)) return

  let file = readFileSync(sitemapPath, 'utf-8')
  const todayStr = today()

  // Update the blog listing lastModified to today
  file = file.replace(
    /(url:\s*'https:\/\/barphoff\.com\/blog',[\s\S]*?lastModified:\s*new Date\(')([^']+)('\))/,
    `$1${todayStr}$3`
  )

  writeFileSync(sitemapPath, file, 'utf-8')
}

/* ------------------------------------------------------------------ */
/*  Main                                                               */
/* ------------------------------------------------------------------ */
const posts = getPostsFromArgs()
const existing = existingSlugs()
let added = 0

for (const post of posts) {
  if (existing.has(post.slug)) {
    console.log(`⏭  Slug já existe, pulando: ${post.slug}`)
    continue
  }

  appendToData(post)
  appendToMeta(post)
  addThumbnail(post.slug, post.thumbnail)

  console.log(`✅ Adicionado: "${post.title}" (${post.slug})`)
  added++
}

if (added > 0) {
  touchSitemap()
  console.log(`\n${added} post(s) adicionado(s). Rode 'npx next build' pra gerar as páginas.`)
} else {
  console.log('Nenhum post novo adicionado.')
}
