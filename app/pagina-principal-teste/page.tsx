import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { blogPostsMeta as blogPosts } from '@/lib/blog-meta'
import { ReviewsCarousel } from '@/components/ReviewsCarousel'
import { getBlogThumbnail } from '@/lib/blog-thumbnails'
import { FooterWatermark } from '@/components/FooterWatermark'

export const metadata: Metadata = {
  title: 'Advogados Especialistas em Direito da Saúde | Barp.Hoff.',
  description:
    'Advogados especialistas em Direito da Saúde há 17 anos. Revertemos negativas de plano de saúde e SUS, garantimos acesso a medicamentos, home care, imunoterapia e tratamentos negados. Atendemos todo o Brasil.',
  keywords: [
    'advogado direito da saúde',
    'negativa plano de saúde advogado',
    'negativa SUS advogado',
    'medicamento alto custo SUS',
    'home care plano de saúde',
    'advogado saúde Foz do Iguaçu',
    'advogado plano de saúde',
    'erro médico advogado',
  ],
  openGraph: {
    title: 'Barp.Hoff.Costa Advogados — Especialistas em Direito da Saúde',
    description: 'Há 17 anos revertendo negativas de plano de saúde e SUS. Medicamentos, tratamentos, home care e cirurgias. Atendemos todo o Brasil.',
    type: 'website',
    url: 'https://barphoff.com/pagina-principal-teste',
    images: [{ url: '/assets/images/og-cover.jpg', width: 1200, height: 630, alt: 'Barp.Hoff.Costa Advogados' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barp.Hoff. | Advogados Especialistas em Direito da Saúde',
    description: 'Há 17 anos garantindo seu acesso a tratamentos negados pelo SUS e planos de saúde.',
    images: ['/assets/images/og-cover.jpg'],
  },
  alternates: {
    canonical: 'https://barphoff.com/pagina-principal-teste',
  },
}

/* ------------------------------------------------------------------ */
/*  Practice area card data                                           */
/* ------------------------------------------------------------------ */
const practiceAreas = [
  {
    title: 'Negativa do SUS',
    description:
      'Atuamos para assegurar acesso a medicamentos de alto custo, exames, cirurgias e tratamentos negados pela rede pública, garantindo seus direitos.',
    href: '/negativa-do-sus',
    image: '/assets/areas/negativa-sus-orig.jpg',
  },
  {
    title: 'Negativa de planos de saúde',
    description:
      'Revertemos negativas de cobertura de tratamentos, cirurgias, internações e medicamentos essenciais, garantindo que seu plano cumpra com as obrigações contratuais.',
    href: '/negativa-plano-de-saude',
    image: '/assets/areas/plano-saude-orig.jpg',
  },
  {
    title: 'Tratamentos Home Care',
    description:
      'Ajudamos a garantir que pacientes que necessitam de atendimento domiciliar tenham esse direito respeitado, seja pelo SUS ou pelos planos de saúde.',
    href: '/home-care',
    image: '/assets/areas/home-care-orig.jpg',
  },
  {
    title: 'Tratamento de câncer',
    description:
      'Apoiamos pacientes que enfrentam negativas de quimioterapia, radioterapia, imunoterapia e medicamentos essenciais, agindo rapidamente para garantir o tratamento necessário.',
    href: '/tratamento-oncologico',
    image: '/assets/areas/tratamento-cancer-orig.jpg',
  },
  {
    title: 'Cirurgias reparadoras',
    description:
      'Através da nossa assessoria jurídica notificamos planos de saúde ou SUS para resolver o problema rapidamente e, se necessário, entramos com ação judicial com pedido de liminar.',
    href: '/negativa-cirurgia',
    image: '/assets/areas/cirurgia-reparadora-orig.jpg',
  },
  {
    title: 'Revisão e restituição de valores pagos indevidamente',
    description:
      'Através da nossa assessoria jurídica notificamos planos de saúde ou SUS para resolver o problema rapidamente e, se necessário, entramos com ação judicial com pedido de liminar.',
    href: '/medicamento-alto-custo',
    image: '/assets/areas/revisao-valores-orig.jpg',
  },
]

/* ------------------------------------------------------------------ */
/*  WhatsApp SVG icon (reused in several CTAs)                        */
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
/*  HOME PAGE                                                          */
/* ================================================================== */
export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <FooterWatermark />
      {/* ============================================================ */}
      {/* 1. HERO SECTION — Two-column with team photo                 */}
      {/* ============================================================ */}
      {/* ---- MOBILE HERO (visible < md) ---- */}
      <section className="md:hidden relative" style={{ background: '#1e1010' }}>
        {/* Team photo fills hero */}
        <div className="relative w-full">
          <Image
            src="/assets/foto_equipe.webp"
            alt="Dra. Alexandra Barp e Dra. Jessica Hoff — advogadas especialistas em Direito da Saúde"
            width={720}
            height={860}
            className="w-full h-auto object-contain"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay: bottom fades to dark */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0"
            style={{ height: '60%', background: 'linear-gradient(to bottom, transparent 0%, rgba(30,16,16,0.75) 40%, #1e1010 80%)' }}
          />
          {/* Pattern overlay (same as desktop hero) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'url(/assets/images/pattern.png)', backgroundRepeat: 'repeat' }}
          />
          {/* Title overlaid lower in photo */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-3 text-center">
            <h1
              className="gradient-text-gold font-heading text-[28px] font-bold leading-[1.2] sm:text-[36px]"
              style={{ WebkitFontSmoothing: 'antialiased' }}
            >
              Advogados especialistas em Direito da Saúde
            </h1>
          </div>
        </div>

        {/* Subtitle + CTA below photo */}
        <div className="px-6 pb-10 pt-4 text-center">
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            Há 17 anos garantindo o seu acesso a tratamentos, medicamentos e
            procedimentos negados pelo SUS ou plano de saúde.
          </p>

          <p className="mt-3 text-base font-bold sm:text-lg" style={{ color: '#EFBF78' }}>
            Atendemos em todo o Brasil.
          </p>

          <a
            href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp btn-pulse mt-6 inline-flex"
            style={{ padding: '12px 24px', fontSize: '15px' }}
          >
            <WhatsAppIcon />
            Fale agora com nossos advogados
          </a>
        </div>
      </section>

      {/* ---- DESKTOP HERO (visible >= md) ---- */}
      <section
        className="relative hidden md:block bg-brand"
        style={{ minHeight: 'calc(100vh - 7.125rem)', backgroundColor: '#994B4B' }}
      >
        {/* Hexagon background image */}
        <Image
          src="/assets/images/hero-hexagons.jpg"
          alt=""
          fill
          className="object-cover opacity-80"
          sizes="100vw"
          priority
        />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url(/assets/images/pattern.png)', backgroundRepeat: 'repeat' }}
        />
        {/* Gold glow behind text */}
        <div className="hero-glow" />

        {/* Text block — vertically centered, left half */}
        <div className="relative z-10 flex min-h-full items-center" style={{ minHeight: 'calc(100vh - 7.125rem)' }}>
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="max-w-xl py-32 text-left">
              <h1
                className="font-heading text-[42px] font-bold leading-[1.15] lg:text-[47px]"
                style={{ WebkitFontSmoothing: 'antialiased' }}
              >
                <span className="gradient-text-hero">
                  Advogados especialistas em Direito da Saúde
                </span>
              </h1>

              <p className="mt-6 text-xl leading-relaxed text-white/90">
                Há 17 anos garantindo o seu acesso a tratamentos, medicamentos e
                procedimentos negados pelo SUS ou plano de saúde.
              </p>

              <p className="mt-3 text-xl font-bold text-[#D5BE9F]">
                Atendemos em todo o Brasil.
              </p>

              <a
                href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-pulse mt-8 inline-flex"
              >
                <WhatsAppIcon />
                Fale agora com nossos advogados
              </a>
            </div>
          </div>
        </div>

        {/* Team photo — absolute bottom-right */}
        <div className="absolute bottom-0 right-0 w-[46%] lg:w-[50%] xl:w-[52%] pointer-events-none">
          <Image
            src="/assets/foto_equipe.webp"
            alt="Dra. Alexandra Barp e Dra. Jessica Hoff — advogadas especialistas em Direito da Saúde"
            width={720}
            height={860}
            className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
            style={{ display: 'block' }}
            priority
            sizes="(max-width: 1024px) 46vw, 52vw"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. VALUE PROPS MARQUEE / TICKER                              */}
      {/* ============================================================ */}
      <div className="overflow-hidden bg-brand py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="mx-4 inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-white"
            >
              <span>Resultados Comprovados</span>
              <span className="text-white/50" aria-hidden="true">&middot;</span>
              <span>Atendimento Personalizado</span>
              <span className="text-white/50" aria-hidden="true">&middot;</span>
              <span>Respostas Rápidas</span>
              <span className="text-white/50" aria-hidden="true">&middot;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. VIDEO SECTION                                             */}
      {/* ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: text */}
            <div className="animate-on-scroll text-center md:text-left">
              <span className="section-label">ASSISTA O VÍDEO</span>
              <h2 className="section-title mt-2">
                <span className="gradient-text">
                  Entenda como funciona nosso trabalho.
                </span>
              </h2>
            </div>

            {/* Right: YouTube embed */}
            <div className="animate-on-scroll" data-delay="200">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/RkTuFa4PDgM"
                    title="Como funciona o trabalho do Barp.Hoff."
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PRACTICE AREAS GRID                                       */}
      {/* ============================================================ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundColor: '#994B4B',
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(196,169,125,0.06)' stroke-width='1'/%3E%3Cpath d='M30 10 L50 20 L50 40 L30 50 L10 40 L10 20 Z' fill='none' stroke='rgba(196,169,125,0.04)' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      >
        {/* Radial glow — bottom left, same as LP hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(0,0,0,0.2) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Principais áreas de atuação em{' '}
              <span className="gradient-text-gold">Direito da Saúde</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <a
                key={i}
                href={area.href}
                className="animate-on-scroll group overflow-hidden rounded-2xl border border-[#D5BE9F]/60 transition-all duration-300 hover:-translate-y-2 hover:border-[#D5BE9F] hover:shadow-[0_12px_36px_rgba(153,75,75,0.25)]"
                style={{ background: 'rgba(0, 0, 0, 0.2)' }}
                data-delay={String(i * 100)}
              >
                {/* Card image */}
                <div className="relative h-56 sm:h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card body */}
                <div className="p-6 text-center">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {area.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#D5BE9F]">
                    Saiba mais
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CTA STRIP                                                 */}
      {/* ============================================================ */}
      <section
        className="relative overflow-hidden py-16"
        style={{
          backgroundColor: '#994B4B',
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(196,169,125,0.06)' stroke-width='1'/%3E%3Cpath d='M30 10 L50 20 L50 40 L30 50 L10 40 L10 20 Z' fill='none' stroke='rgba(196,169,125,0.04)' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(0,0,0,0.2) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="font-heading text-xl font-bold uppercase leading-snug tracking-wide text-white md:text-2xl lg:text-3xl">
            Não aceite negativas injustas! Fale com nossos especialistas e
            defenda seu direito à saúde.
          </p>
          <a
            href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8 inline-flex"
          >
            <WhatsAppIcon />
            Fale com um especialista
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. ABOUT SECTION                                             */}
      {/* ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Top label + heading */}
          <div className="mb-14 text-center">
            <span className="section-label">MUITO MAIS QUE UM ESCRITÓRIO</span>
            <h2 className="section-title mt-2">
              O BARP.HOFF. É UMA ADVOCACIA ESPECIALIZADA PARA ATENDER VOCÊ
            </h2>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left: office photo */}
            <div className="animate-on-scroll">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/images/escritorio.jpg"
                  alt="Escritório Barp.Hoff. Advogados"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right: text */}
            <div className="animate-on-scroll" data-delay="200">
              <h3 className="font-heading text-2xl font-bold text-gray-900">
                SOBRE NÓS
              </h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                O escritório jurídico <strong>BARP. HOFF.</strong> é{' '}
                <strong>
                  referência no atendimento de processos relacionados ao direito
                  da saúde
                </strong>
                , seja no SUS ou pelo Plano de Saúde. Nossos advogados
                especialistas prestam serviço individualizado, com atendimento
                rápido,{' '}
                <strong>
                  com foco em resultados concretos
                </strong>
                .
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Sabemos da angústia das pessoas que precisam de um tratamento
                médico ou de um medicamento e recebem a negativa do plano de
                saúde ou do SUS. É por isso que a nossa equipe está preparada
                para agir de forma rápida e eficiente.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Nossa equipe está treinada para auxiliar na esfera
                administrativa e na esfera judicial, trabalhando de forma ágil
                para garantir o seu direito à saúde. Para nós,{' '}
                <strong>a saúde não espera!</strong>
              </p>
              <Link
                href="/sobre"
                className="mt-6 inline-flex items-center gap-1 font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                Saiba mais
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. TESTIMONIALS SECTION                                      */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-20">
        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #D5BE9F, transparent)' }} />

        {/* Diamond texture background */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/testimonials-texture.jpg"
            alt=""
            fill
            className="object-cover opacity-70"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="section-title">
              O QUE DIZEM SOBRE O{' '}
              <strong className="gradient-text">BARP.HOFF.COSTA ADVOGADOS</strong>
            </h2>
          </div>

          <ReviewsCarousel />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. BLOG SECTION                                              */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <span className="section-label">ARTIGOS E NOTÍCIAS</span>
            <h2 className="section-title mt-2">
              Acompanhe nosso blog e fique por dentro dos seus direitos de saúde
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="animate-on-scroll group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border hover:border-[#D5BE9F]/40 hover:shadow-[0_12px_36px_rgba(153,75,75,0.15)]"
                data-delay={String(i * 100)}
              >
                {/* Post thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={getBlogThumbnail(post.slug, post.categories)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Categories */}
                  {post.categories.length > 0 && (
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand">
                      <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                      {post.categories.join(', ')}
                    </p>
                  )}
                  <h3 className="font-heading text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Acessar nosso blog
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
