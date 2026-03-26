import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'
import { getBlogThumbnail } from '@/lib/blog-thumbnails'

/* ------------------------------------------------------------------ */
/*  Static params for all slugs                                        */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

/* ------------------------------------------------------------------ */
/*  Dynamic metadata                                                   */
/* ------------------------------------------------------------------ */
export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return { title: 'Post nao encontrado' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'pt_BR',
    },
  }
}

/* ------------------------------------------------------------------ */
/*  Portuguese date formatter                                          */
/* ------------------------------------------------------------------ */
function formatDate(dateStr: string): string {
  const months = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez',
  ]
  const [year, month, day] = dateStr.split('-')
  return `${parseInt(day)} de ${months[parseInt(month) - 1]}. ${year}`
}

/* ------------------------------------------------------------------ */
/*  WhatsApp SVG icon                                                  */
/* ------------------------------------------------------------------ */
function WhatsAppIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.29-.174-3.01.79.804-2.937-.191-.303A7.963 7.963 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Blog content styles (applied via className on the wrapper div)     */
/* ------------------------------------------------------------------ */
const blogContentStyles = `
  .blog-content h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #994B4B;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .blog-content h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  .blog-content p {
    color: #374151;
    line-height: 1.75;
    margin-bottom: 1rem;
  }
  .blog-content ul,
  .blog-content ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
  .blog-content ul {
    list-style-type: disc;
  }
  .blog-content ol {
    list-style-type: decimal;
  }
  .blog-content li {
    color: #374151;
    line-height: 1.75;
    margin-bottom: 0.5rem;
  }
  .blog-content a {
    color: #994B4B;
    text-decoration: underline;
  }
  .blog-content a:hover {
    color: #7a3a3a;
  }
  .blog-content strong {
    font-weight: 700;
  }
  .blog-content img {
    border-radius: 0.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    max-width: 100%;
    height: auto;
  }
  .blog-content blockquote {
    border-left: 4px solid #994B4B;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #4b5563;
  }
  .blog-content figure {
    margin: 1.5rem 0;
  }
  .blog-content .wp-block-buttons {
    margin: 1.5rem 0;
  }
  .blog-content .wp-block-button__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 0.5rem;
    padding: 0.875rem 2rem;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(90deg, #348011 0%, #6DC246 50%, #348011 100%);
    transition: all 0.2s;
    text-decoration: none;
  }
  .blog-content .wp-block-button__link:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`

/* ================================================================== */
/*  INDIVIDUAL BLOG POST PAGE                                          */
/* ================================================================== */
export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  /* ---------------------------------------------------------------- */
  /*  Related posts: same category first, then most recent            */
  /* ---------------------------------------------------------------- */
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aMatch = a.categories.some((c) => post.categories.includes(c))
      const bMatch = b.categories.some((c) => post.categories.includes(c))
      if (aMatch && !bMatch) return -1
      if (!aMatch && bMatch) return 1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)

  return (
    <>
      {/* Scoped styles for blog HTML content */}
      <style dangerouslySetInnerHTML={{ __html: blogContentStyles }} />

      {/* ============================================================ */}
      {/* 1. ARTICLE HEADER                                            */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Voltar para o blog
          </Link>

          {/* Category badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {post.title}
          </h1>

          {/* Date */}
          <p className="mt-4 text-sm text-gray-500">{formatDate(post.date)}</p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ARTICLE CONTENT                                           */}
      {/* ============================================================ */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CTA SECTION                                               */}
      {/* ============================================================ */}
      <section className="bg-white pb-12">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-xl bg-brand/5 p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-gray-900 md:text-2xl">
              Precisa de ajuda juridica? Fale com nossos especialistas!
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
              Nossa equipe esta pronta para esclarecer suas duvidas e garantir
              seus direitos de saude.
            </p>
            <a
              href="https://wa.me/554530273100"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 inline-flex"
            >
              <WhatsAppIcon />
              Fale agora com nossos advogados
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. RELATED POSTS                                             */}
      {/* ============================================================ */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center font-heading text-2xl font-bold text-gray-900 md:text-3xl">
              Artigos relacionados
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Post thumbnail with category badges */}
                  <div className="relative flex h-44 items-end overflow-hidden p-4">
                    <Image
                      src={getBlogThumbnail(related.slug, related.categories)}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {related.categories.map((cat) => (
                        <span
                          key={cat}
                          className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand">
                      {related.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {related.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-gray-400">
                      {formatDate(related.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
