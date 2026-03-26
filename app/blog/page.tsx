import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { getBlogThumbnail } from '@/lib/blog-thumbnails'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos e noticias sobre Direito da Saude. Acompanhe nosso blog e fique por dentro dos seus direitos.',
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

/* ================================================================== */
/*  BLOG LISTING PAGE                                                  */
/* ================================================================== */
export default function BlogPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="relative flex h-[350px] items-center justify-center overflow-hidden bg-brand">
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-wider text-white md:text-5xl">
            Artigos e Noticias
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Acompanhe nosso blog e fique por dentro dos seus direitos de saude
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. BLOG POSTS GRID                                           */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="animate-on-scroll group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                data-delay={String((i % 6) * 100)}
              >
                {/* Post thumbnail with category badges */}
                <div className="relative flex h-44 items-end overflow-hidden p-4">
                  <Image
                    src={getBlogThumbnail(post.slug, post.categories)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {post.categories.map((cat) => (
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
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-gray-400">
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WHATSAPP CTA                                              */}
      {/* ============================================================ */}
      <section className="bg-brand py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
            Tem duvidas sobre seus direitos? Fale conosco!
          </h2>
          <a
            href="https://wa.me/554530273100"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8 inline-flex"
          >
            <WhatsAppIcon />
            Fale agora com nossos advogados
          </a>
        </div>
      </section>
    </>
  )
}
