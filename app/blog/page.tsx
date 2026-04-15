import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPostsMeta as blogPosts } from '@/lib/blog-meta'
import { getBlogThumbnail } from '@/lib/blog-thumbnails'

export const metadata: Metadata = {
  title: 'Blog | Artigos sobre Direito da Saúde',
  description:
    'Artigos e notícias sobre Direito da Saúde: negativa de plano de saúde, medicamentos pelo SUS, home care, imunoterapia e mais. Conheça seus direitos com advogados especialistas.',
  keywords: ['blog direito da saúde', 'artigos plano de saúde', 'negativa plano de saúde', 'direitos do paciente', 'medicamento SUS', 'home care direitos'],
  openGraph: {
    title: 'Blog | Barp.Hoff. Advogados — Direito da Saúde',
    description: 'Artigos e notícias sobre seus direitos em Direito da Saúde.',
    type: 'website',
    url: 'https://barphoff.com/blog',
    images: [{ url: '/assets/images/og-cover.jpg', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://barphoff.com/blog' },
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
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://barphoff.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://barphoff.com/blog' },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://barphoff.com/blog#itemlist',
  name: 'Artigos do blog Barp.Hoff.',
  numberOfItems: blogPosts.length,
  itemListElement: blogPosts.map((post, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://barphoff.com/blog/${post.slug}`,
    name: post.title,
  })),
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* ============================================================ */}
      {/* 1. HERO — Real image background + layered overlays            */}
      {/* ============================================================ */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
        {/* Background image — stethoscope */}
        <Image
          src="/assets/images/stethoscope-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#994B4B]/85 via-[#994B4B]/75 to-[#994B4B]/90" />
        {/* Hexagon pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(196,169,125,0.3)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Gold radial glow */}
        <div className="hero-glow" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#994B4B]/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#D5BE9F]/30 bg-[#D5BE9F]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D5BE9F] backdrop-blur-sm">
            Blog
          </span>
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-wider md:text-5xl lg:text-6xl">
            <span className="gradient-text-hero">Artigos e Notícias</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Acompanhe nosso blog e fique por dentro dos seus direitos de saúde
          </p>
          {/* Decorative gold line */}
          <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D5BE9F] to-transparent" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. BLOG GRID — Textured background with depth                */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-20">
        {/* Subtle warm gradient (replaces heavy paper-texture image) */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        {/* Subtle paper grain via inline SVG noise filter */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.6 0 0 0 0 0.55 0 0 0 0 0.45 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Hexagon pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(153,75,75,0.5)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D5BE9F]/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Section header */}
          <div className="mb-14 text-center">
            <span className="section-label">Todos os artigos</span>
            <h2 className="section-title mt-2">
              Conheça seus direitos em{' '}
              <span className="gradient-text-2">Direito da Saúde</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D5BE9F]/50 hover:shadow-[0_16px_48px_rgba(153,75,75,0.18)]"
              >
                {/* Post thumbnail — full image, no crop, card adapts */}
                <div className="overflow-hidden">
                  <Image
                    src={getBlogThumbnail(post.slug, post.categories)}
                    alt={post.title}
                    width={600}
                    height={600}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 3}
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                    <p className="text-xs font-medium text-gray-400">
                      {formatDate(post.date)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand transition-colors group-hover:text-brand-dark">
                      Leia mais
                      <svg
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Top accent bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand via-[#D5BE9F] to-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CTA — Rich layered dark section                            */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-20">
        {/* Background image — waves texture */}
        <Image
          src="/assets/images/hero-waves.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark maroon overlay */}
        <div className="absolute inset-0 bg-[#994B4B]/88" />
        {/* Hexagon SVG pattern */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(196,169,125,0.4)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Radial glow — bottom left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(153,75,75,0.4) 0%, transparent 60%)' }}
        />
        {/* Radial glow — top right (gold) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(196,169,125,0.12) 0%, transparent 50%)' }}
        />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D5BE9F]/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl font-bold leading-snug text-white md:text-3xl lg:text-4xl">
            Tem dúvidas sobre seus direitos?{' '}
            <span className="gradient-text">Fale conosco!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
            Nossa equipe de advogados especialistas está pronta para ajudar você.
            Atendimento personalizado e humanizado em todo o Brasil.
          </p>
          <a
            href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-pulse mt-10 inline-flex"
          >
            <WhatsAppIcon />
            Fale agora com nossos advogados
          </a>
        </div>
      </section>
    </>
  )
}
