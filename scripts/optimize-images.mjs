#!/usr/bin/env node
/**
 * Image optimizer for Barp.Hoff site.
 *
 * Targets the heaviest assets and re-encodes them in place.
 * Filenames are preserved so HTML/JSX references still work.
 *
 * Strategy:
 *  - PNG photos → re-encoded as JPEG bytes wrapped in .png filename is risky,
 *    so we stay PNG but downsize and apply max compression. Acceptable for
 *    photos when paired with downscale.
 *  - JPEGs → mozjpeg, q72, progressive, downscale.
 *  - We always keep the original max width but cap to 1920px (desktop hero).
 *
 * Usage:  node scripts/optimize-images.mjs
 */
import sharp from 'sharp'
import { promises as fs } from 'fs'
import { resolve, dirname, basename, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const targets = [
  // [relative path, max width, format-specific opts]
  { path: 'public/assets/foto_equipe.png', maxW: 1600, format: 'png' },
  { path: 'public/assets/images/stethoscope-bg.jpg', maxW: 1920, format: 'jpeg' },
  { path: 'public/assets/images/hero-hexagons.jpg', maxW: 1920, format: 'jpeg' },
  { path: 'public/assets/images/hero-waves.jpg', maxW: 1920, format: 'jpeg' },
  { path: 'public/assets/images/testimonials-texture.jpg', maxW: 1920, format: 'jpeg' },
  { path: 'public/assets/blog/capa-recuperado-10.png', maxW: 1200, format: 'png' },
  { path: 'public/assets/blog/capa-recuperado-9.png', maxW: 1200, format: 'png' },
]

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB'
}

async function optimizeOne({ path, maxW, format }) {
  const abs = resolve(ROOT, path)
  let stat
  try {
    stat = await fs.stat(abs)
  } catch {
    console.log(`SKIP (missing): ${path}`)
    return null
  }
  const before = stat.size

  const buffer = await fs.readFile(abs)
  let pipeline = sharp(buffer, { failOn: 'none' }).rotate()
  const meta = await pipeline.metadata()

  if (meta.width && meta.width > maxW) {
    pipeline = pipeline.resize({ width: maxW, withoutEnlargement: true })
  }

  if (format === 'jpeg') {
    pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true, progressive: true })
  } else if (format === 'png') {
    // For photos saved as PNG, prefer palette+max compression.
    // Sharp's PNG compression is lossless; combined with downscale gives big wins.
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: false, // photo content — palette would degrade quality
      effort: 10,
    })
  } else if (format === 'webp') {
    pipeline = pipeline.webp({ quality: 78, effort: 6 })
  }

  const out = await pipeline.toBuffer()
  await fs.writeFile(abs, out)
  const after = out.length
  const ratio = ((1 - after / before) * 100).toFixed(1)
  console.log(`✔ ${path}`)
  console.log(`    ${fmtKB(before)} → ${fmtKB(after)}  (-${ratio}%)`)
  return { path, before, after }
}

async function main() {
  console.log('Optimizing images...\n')
  const results = []
  for (const t of targets) {
    const r = await optimizeOne(t)
    if (r) results.push(r)
  }
  const totalBefore = results.reduce((s, r) => s + r.before, 0)
  const totalAfter = results.reduce((s, r) => s + r.after, 0)
  const saved = totalBefore - totalAfter
  console.log(`\nTotal: ${fmtKB(totalBefore)} → ${fmtKB(totalAfter)}`)
  console.log(`Saved: ${fmtKB(saved)}  (${((saved / totalBefore) * 100).toFixed(1)}%)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
