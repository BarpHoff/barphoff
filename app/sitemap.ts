import type { MetadataRoute } from 'next'
import fs from 'node:fs'
import path from 'node:path'
import { blogPostsMeta } from '@/lib/blog-meta'

const baseUrl = 'https://barphoff.com'

function lpMtime(slug: string): Date {
  try {
    const p = path.join(process.cwd(), 'public', slug, 'index.html')
    return fs.statSync(p).mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const landingSlugs = [
    'negativa-cirurgia',
    'negativa-plano-de-saude',
    'negativa-do-sus',
    'negativa-de-tratamento',
    'home-care',
    'tratamento-oncologico',
    'medicamento-alto-custo',
    'direito-a-saude',
    'revisao-restituicao',
  ]

  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/pagina-principal-teste`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/areas-de-atuacao`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/sobre`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contato`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const lpPages: MetadataRoute.Sitemap = landingSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: lpMtime(slug),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPostsMeta.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...lpPages, ...blogPages]
}
