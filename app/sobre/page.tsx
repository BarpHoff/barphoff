import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Quem Somos | Barp.Hoff.Costa Advogados',
  description:
    'Com mais de 17 anos de experiência em Direito da Saúde, o Barp.Hoff.Costa tem uma equipe dedicada a oferecer atendimento personalizado e humanizado em todo o Brasil.',
  openGraph: {
    title: 'Quem Somos | Barp.Hoff.Costa Advogados',
    description: 'Conheça o escritório referência em Direito da Saúde com mais de 17 anos de experiência.',
    url: 'https://barphoff.com/sobre',
    images: [{ url: '/assets/images/og-cover.jpg', width: 1200, height: 630, alt: 'Barp.Hoff.Costa Advogados' }],
  },
  alternates: { canonical: 'https://barphoff.com/sobre' },
  keywords: [
    'quem somos Barp Hoff',
    'advogados direito da saúde Foz do Iguaçu',
    'escritório advocacia saúde Brasil',
    'Dra Alexandra Barp',
    'Dra Jessica Hoff',
  ],
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
/*  Instagram SVG icon                                                 */
/* ------------------------------------------------------------------ */
function InstagramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

/* ================================================================== */
/*  Gallery image data                                                 */
/* ================================================================== */
const galleryImages = [
  { src: '/assets/01 (1).jpg', alt: 'Interior do escritório Barp.Hoff. - Recepção' },
  { src: '/assets/01 (2).jpg', alt: 'Interior do escritório Barp.Hoff. - Sala de reuniões' },
  { src: '/assets/01 (3).jpg', alt: 'Interior do escritório Barp.Hoff. - Corredor' },
  { src: '/assets/01 (4).jpg', alt: 'Interior do escritório Barp.Hoff. - Ambiente de trabalho' },
  { src: '/assets/01 (5).jpg', alt: 'Interior do escritório Barp.Hoff. - Detalhe' },
  { src: '/assets/01 (6).jpg', alt: 'Interior do escritório Barp.Hoff. - Fachada' },
  { src: '/assets/images/escritorio.jpg', alt: 'Escritório Barp.Hoff.' },
]

/* ================================================================== */
/*  SOBRE (ABOUT) PAGE                                                 */
/* ================================================================== */
const sobreBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://barphoff.com' },
    { '@type': 'ListItem', position: 2, name: 'Quem Somos', item: 'https://barphoff.com/sobre' },
  ],
}

const sobreFaqs = [
  {
    q: 'Há quanto tempo o escritório atua em Direito da Saúde?',
    a: 'O Barp.Hoff.Costa Advogados atua há mais de 17 anos com especialização exclusiva em Direito da Saúde, acumulando milhares de casos favoráveis envolvendo negativas de planos de saúde e do SUS em todo o Brasil.',
  },
  {
    q: 'O escritório atende apenas em Foz do Iguaçu?',
    a: 'Não. A sede física fica em Foz do Iguaçu/PR, mas o atendimento é 100% online e nossos advogados atuam em processos em todos os estados do Brasil.',
  },
  {
    q: 'Quem são as advogadas responsáveis?',
    a: 'As sócias Dra. Alexandra Barp e Dra. Jessica Hoff, ambas inscritas na OAB/PR, são especialistas em Direito da Saúde e conduzem pessoalmente os casos, com apoio de equipe dedicada.',
  },
  {
    q: 'Quais áreas o escritório domina?',
    a: 'Negativa de plano de saúde, medicamentos de alto custo pelo SUS, tratamento home care, imunoterapia, cirurgias reparadoras, tratamento oncológico e revisão e restituição de mensalidades de planos.',
  },
]

const sobreFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sobreFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreFaqSchema) }}
      />
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/equipe.jpg"
          alt="Equipe Barp.Hoff. Advogados"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
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

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          {/* Top ornamental divider with diamond */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D5BE9F]/60" />
            <svg className="h-3 w-3 text-[#D5BE9F]" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0l3 6-3 6-3-6z" />
            </svg>
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D5BE9F]/60" />
          </div>

          <span className="mt-4 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-[#D5BE9F]">
            Escrit&oacute;rio de Advocacia
          </span>

          {/* Main title — dramatic split layout */}
          <h1 className="mt-3 font-heading uppercase leading-[0.95]">
            <span className="block text-sm font-light tracking-[0.3em] text-white/80 md:text-base">
              A
            </span>
            <span
              className="gradient-text-hero mt-1 block text-6xl font-extrabold tracking-wide md:text-7xl lg:text-8xl"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.85)',
                paintOrder: 'stroke fill',
              }}
            >
              Barp.Hoff.
            </span>
          </h1>

          {/* Bottom ornamental divider */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#D5BE9F]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D5BE9F]">Costa Advogados</span>
            <span className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#D5BE9F]" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Defendemos o seu direito &agrave; sa&uacute;de com empatia,
            efici&ecirc;ncia e atendimento humanizado em todo o Brasil.
          </p>

          {/* Stats row */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-white/90">
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-[#D5BE9F]">17+</span>
              <span className="text-xs uppercase tracking-wider">anos de atua&ccedil;&atilde;o</span>
            </div>
            <span className="hidden h-6 w-[1px] bg-white/20 md:block" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-[#D5BE9F]">100%</span>
              <span className="text-xs uppercase tracking-wider">atendimento online</span>
            </div>
            <span className="hidden h-6 w-[1px] bg-white/20 md:block" />
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-[#D5BE9F]">Brasil</span>
              <span className="text-xs uppercase tracking-wider">atua&ccedil;&atilde;o nacional</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT TEXT SECTION                                        */}
      {/* ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">

          {/* Intro centrado */}
          <p className="mx-auto max-w-4xl text-center font-heading text-xl font-bold leading-relaxed text-gray-900 md:text-2xl">
            Com mais de 17 anos de experi&ecirc;ncia em direito especializado
            &agrave; sa&uacute;de, o BARP. HOFF. tem uma equipe dedicada a
            oferecer um atendimento personalizado e humanizado em todo o Brasil.
          </p>

          {/* 3 cards de diferenciais */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Card 1 — Linguagem Clara */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">
                Linguagem que Voc&ecirc; Entende
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Al&eacute;m de solucionar os seus problemas, n&oacute;s te
                explicamos a situa&ccedil;&atilde;o usando a linguagem que
                voc&ecirc; entende — sem juridiqu&ecirc;s.
              </p>
            </div>

            {/* Card 2 — Atendimento Imediato */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">
                Atendimento Imediato
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Reconhecemos a urg&ecirc;ncia. Iniciamos o atendimento online
                sem agendamento, de qualquer lugar do Brasil. Com prazo real
                e equipe altamente qualificada.
              </p>
            </div>

            {/* Card 3 — Equipe Empática */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-taupe/10">
                <svg className="h-6 w-6 text-taupe" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">
                Equipe Emp&aacute;tica
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Nossos advogados se atualizam diariamente e sentem empatia
                pelos clientes, oferecendo o melhor direcionamento, efic&aacute;cia
                e solu&ccedil;&atilde;o poss&iacute;vel.
              </p>
            </div>
          </div>

          {/* Seção da História — fundo escuro com pattern */}
          <div className="relative mt-16 overflow-hidden rounded-3xl bg-brand-dark">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'url(/assets/images/pattern.png)', backgroundRepeat: 'repeat' }}
            />
            {/* Gold top accent */}
            <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #D5BE9F, transparent)' }} />

            <div className="relative z-10 px-8 py-12 md:px-16">
              <span className="text-xs font-normal uppercase tracking-[0.25em] text-gold/70">
                NOSSA HIST&Oacute;RIA
              </span>
              <blockquote className="mt-4 font-heading text-xl leading-relaxed text-white md:text-2xl">
                &ldquo;A especializa&ccedil;&atilde;o em Direito &agrave; Sa&uacute;de
                em nosso escrit&oacute;rio surgiu quando uma m&atilde;e nos procurou
                para obter um medicamento de alto custo para sua filha de apenas dois
                anos, portadora de Displasia Fibrosa Poliost&oacute;tica — uma
                doen&ccedil;a rara nos ossos.&rdquo;
              </blockquote>
              <p className="mt-5 leading-relaxed text-white/70">
                Aquela situa&ccedil;&atilde;o nos sensibilizou. Ap&oacute;s seis anos
                da conquista do medicamento, ver a crian&ccedil;a se desenvolvendo com
                qualidade de vida &eacute; — e sempre ser&aacute; — nosso maior
                combust&iacute;vel.
              </p>
            </div>
          </div>

          {/* Closing */}
          <p className="mx-auto mt-14 max-w-4xl text-center font-heading text-lg font-bold leading-relaxed text-brand md:text-xl">
            Queremos proporcionar o mesmo para voc&ecirc;! O atendimento &eacute;
            100% personalizado e tudo o que queremos &eacute; te ver feliz e
            com qualidade de vida.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. MISSION / VALUES SECTION                                  */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Missao */}
            <div className="rounded-2xl border-t-4 border-brand bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900">
                Miss&atilde;o
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Garantir o acesso &agrave; sa&uacute;de como direito
                fundamental, atuando com excel&ecirc;ncia e empatia.
              </p>
            </div>

            {/* Visao */}
            <div className="rounded-2xl border-t-4 border-gold bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900">
                Vis&atilde;o
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Ser refer&ecirc;ncia nacional em Direito da Sa&uacute;de,
                promovendo justi&ccedil;a e dignidade.
              </p>
            </div>

            {/* Valores */}
            <div className="rounded-2xl border-t-4 border-taupe bg-white p-8 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-taupe/10">
                <svg className="h-6 w-6 text-taupe" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900">
                Valores
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Empatia, transpar&ecirc;ncia, dedica&ccedil;&atilde;o e
                resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TEAM SECTION                                              */}
      {/* ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <span className="section-label">CONHE&Ccedil;A</span>
          <h2 className="section-title mt-2">Nossa Equipe</h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
            {/* Card 1 – Dra. Alexandra Barp */}
            <div id="alexandra-barp" className="group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-shadow hover:shadow-xl">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/assets/team/dra-alexandra.jpg"
                  alt="Dra. Alexandra Barp"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900">
                  Dra. Alexandra Barp
                </h3>
                <p className="mt-1 text-sm font-medium text-brand">
                  Advogada | Especialista em Direito da Sa&uacute;de
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  OAB/PR &mdash; Atua&ccedil;&atilde;o em todo o territ&oacute;rio nacional
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/saudebhc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white"
                    aria-label="Instagram de Dra. Alexandra Barp"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                    aria-label="WhatsApp de Dra. Alexandra Barp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 – Dra. Jessica Hoff */}
            <div
              id="jessica-hoff"
              className="group overflow-hidden rounded-2xl bg-gray-50 shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/assets/team/dra-jessica.jpg"
                  alt="Dra. Jessica Hoff"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900">
                  Dra. Jessica Hoff
                </h3>
                <p className="mt-1 text-sm font-medium text-brand">
                  Advogada | Especialista em Direito da Sa&uacute;de
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  OAB/PR &mdash; Atua&ccedil;&atilde;o em todo o territ&oacute;rio nacional
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/saudebhc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand hover:text-white"
                    aria-label="Instagram de Dra. Jessica Hoff"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                    aria-label="WhatsApp de Dra. Jessica Hoff"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. OFFICE GALLERY                                            */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <span className="section-label">NOSSO</span>
            <h2 className="section-title mt-2">
              <span className="relative inline-block">
                Escrit&oacute;rio
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded bg-gradient-to-r from-brand to-gold" />
              </span>
            </h2>
          </div>

          {/* Masonry-style asymmetric grid */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {/* Row 1 — large left (col-span-2) + standard right */}
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>

            {/* Row 2 — three equal images */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>

            {/* Row 3 — standard left + large right (col-span-2) */}
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5b. PERGUNTAS FREQUENTES                                     */}
      {/* ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="section-title mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {sobreFaqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-5 open:bg-white open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-heading text-base font-bold text-gray-900">
                  {item.q}
                  <span className="ml-4 text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. WHATSAPP CTA                                              */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-brand-dark py-16">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("/assets/images/pattern.png")', backgroundRepeat: 'repeat', backgroundSize: '300px' }} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="font-heading text-xl font-bold text-white md:text-2xl">
            Precisa de ajuda? Fale conosco agora!
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
    </>
  )
}
