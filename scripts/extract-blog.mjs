import { readFileSync, writeFileSync } from 'fs'

const xml = readFileSync(process.argv[2] || 'D:/Downloads/Meu Growth/barphoff.WordPress.2026-03-22.xml', 'utf-8')

const items = xml.split('<item>').slice(1)

const posts = []

for (const item of items) {
  const getCDATA = (tag) => {
    const m = item.match(new RegExp(`<${tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}>`))
    return m ? m[1].trim() : ''
  }

  const postType = getCDATA('wp:post_type')
  const status = getCDATA('wp:status')

  if (postType !== 'post' || status !== 'publish') continue

  const title = getCDATA('title')
  const slug = getCDATA('wp:post_name')
  const date = getCDATA('wp:post_date')
  const content = getCDATA('content:encoded')
  const excerpt = getCDATA('excerpt:encoded')

  // Extract categories
  const cats = []
  const catMatches = item.matchAll(/category\s+domain="category"[^>]*>\s*<!\[CDATA\[(.*?)\]\]>/g)
  for (const m of catMatches) cats.push(m[1])

  // Clean HTML to plain text for excerpt
  const plainText = (excerpt || content)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()

  const shortExcerpt = plainText.slice(0, 200) + (plainText.length > 200 ? '...' : '')

  // Clean HTML content
  const cleanContent = content
    .replace(/<!-- wp:[^>]*?-->/g, '')
    .replace(/<!-- \/wp:[^>]*?-->/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  if (!title || !slug || !cleanContent) continue

  posts.push({
    title,
    slug,
    date: date.split(' ')[0],
    categories: [...new Set(cats)],
    excerpt: shortExcerpt,
    content: cleanContent,
  })
}

// Sort by date descending
posts.sort((a, b) => b.date.localeCompare(a.date))

const output = `// Auto-generated from WordPress XML export
// ${posts.length} blog posts extracted on ${new Date().toISOString().split('T')[0]}

export interface BlogPost {
  title: string
  slug: string
  date: string
  categories: string[]
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = ${JSON.stringify(posts, null, 2)}
`

writeFileSync('lib/blog-data.ts', output, 'utf-8')
console.log(`Extracted ${posts.length} blog posts to lib/blog-data.ts`)
for (const p of posts) {
  console.log(`  - [${p.date}] ${p.title} (${p.slug}) [${p.categories.join(', ')}]`)
}
