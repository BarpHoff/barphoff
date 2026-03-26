import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'
import { ReviewsCarousel } from '@/components/ReviewsCarousel'
import { getBlogThumbnail } from '@/lib/blog-thumbnails'

/* ------------------------------------------------------------------ */
/*  Practice area card data                                           */
/* ------------------------------------------------------------------ */
const practiceAreas = [
  {
    title: 'Negativa do SUS',
    description:
      'Atuamos para assegurar acesso a medicamentos de alto custo, exames, cirurgias e tratamentos negados pela rede pública, garantindo seus direitos.',
    href: '/negativa-do-sus',
    image: '/assets/areas/negado.jpg',
  },
  {
    title: 'Negativa de planos de saúde',
    description:
      'Revertemos negativas de cobertura de tratamentos, cirurgias, internações e medicamentos essenciais, garantindo que seu plano cumpra com as obrigações contratuais.',
    href: '/negativas-de-plano-de-saude',
    image: '/assets/areas/plano-de-saude.jpg',
  },
  {
    title: 'Tratamentos Home Care',
    description:
      'Ajudamos a garantir que pacientes que necessitam de atendimento domiciliar tenham esse direito respeitado, seja pelo SUS ou pelos planos de saúde.',
    href: '/tratamento-home-care',
    image: '/assets/areas/home-care.jpg',
  },
  {
    title: 'Tratamento de câncer',
    description:
      'Apoiamos pacientes que enfrentam negativas de quimioterapia, radioterapia, imunoterapia e medicamentos essenciais, agindo rapidamente para garantir o tratamento necessário.',
    href: '/tratamento-de-cancer',
    image: '/assets/areas/tratamento-cancer.jpg',
  },
  {
    title: 'Cirurgias reparadoras',
    description:
      'Através da nossa assessoria jurídica notificamos planos de saúde ou SUS para resolver o problema rapidamente e, se necessário, entramos com ação judicial com pedido de liminar.',
    href: '/cirurgias-reparadoras',
    image: '/assets/areas/cirurgia-reparadora.jpg',
  },
  {
    title: 'Revisão e restituição de valores pagos indevidamente',
    description:
      'Através da nossa assessoria jurídica notificamos planos de saúde ou SUS para resolver o problema rapidamente e, se necessário, entramos com ação judicial com pedido de liminar.',
    href: '/revisao-e-restituicao-de-valores-pagos-indevidamente',
    image: '/assets/areas/revisao-valores.jpg',
  },
]

/* ------------------------------------------------------------------ */
/*  "Como Funciona" steps data                                        */
/* ------------------------------------------------------------------ */
const workflowSteps = [
  {
    number: '01',
    title: 'Contato Inicial',
    icon: '/assets/icons/support.svg',
    description:
      'Entre em contato pelo WhatsApp ou telefone. Nossa equipe está pronta para ouvir seu caso.',
  },
  {
    number: '02',
    title: 'Análise do Caso',
    icon: '/assets/icons/reading.svg',
    description:
      'Nossos advogados analisam sua situação e identificam a melhor estratégia jurídica.',
  },
  {
    number: '03',
    title: 'Ação Jurídica',
    icon: '/assets/icons/document.svg',
    description:
      'Tomamos as medidas legais necessárias, incluindo notificações e pedidos de liminar.',
  },
  {
    number: '04',
    title: 'Resultado',
    icon: '/assets/icons/outcomes.svg',
    description:
      'Acompanhamos seu caso até a resolução, garantindo seus direitos.',
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
      {/* ============================================================ */}
      {/* 1. HERO SECTION — Two-column with team photo                 */}
      {/* ============================================================ */}
      <section
        className="relative bg-hero"
        style={{ minHeight: 'calc(100vh - 7.125rem)', backgroundColor: '#1A1A1A' }}
      >
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url(/assets/images/pattern.png)', backgroundRepeat: 'repeat' }}
        />

        {/* Text block — vertically centered, left half */}
        <div className="relative z-10 flex min-h-full items-center" style={{ minHeight: 'calc(100vh - 7.125rem)' }}>
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="max-w-xl py-32 text-center md:text-left">
              <h1
                className="font-heading text-[28px] font-bold leading-[1.15] sm:text-[36px] md:text-[42px] lg:text-[47px]"
                style={{ WebkitFontSmoothing: 'antialiased' }}
              >
                <span className="gradient-text">
                  Advogados especialistas em Direito da Saúde
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
                Há 17 anos garantindo o seu acesso a tratamentos, medicamentos e
                procedimentos negados pelo SUS ou plano de saúde.
              </p>

              <p className="mt-3 text-lg font-bold text-[#EFBF78] sm:text-xl">
                Atendemos em todo o Brasil.
              </p>

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
          </div>
        </div>

        {/* Team photo — absolute bottom-right, aligned to section bottom */}
        <div className="absolute bottom-0 right-0 hidden md:block w-[46%] lg:w-[50%] xl:w-[52%] pointer-events-none">
          <Image
            src="/assets/foto_equipe.png"
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
              <p className="mt-4 text-gray-600">
                Veja como ajudamos pacientes em todo o Brasil a garantirem seu
                direito à saúde de forma rápida e eficiente.
              </p>
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
      {/* 4. COMO FUNCIONA (How it works) SECTION                      */}
      {/* ============================================================ */}
      <section className="relative bg-gray-50 py-20 overflow-hidden">
        {/* Subtle pattern texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url("/assets/images/pattern.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '300px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="section-label">PASSO A PASSO</span>
            <h2 className="section-title mt-2">
              Como funciona nosso{' '}
              <span className="gradient-text">atendimento</span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, i) => (
              <div
                key={i}
                className="animate-on-scroll group relative rounded-2xl bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                data-delay={String(i * 150)}
              >
                {/* Step number (large, faded background) */}
                <span className="absolute -top-3 right-4 font-heading text-7xl font-black text-brand/10 select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-brand/10 transition-colors group-hover:bg-brand/20">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="h-10 w-10"
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>

                {/* Connector line (hidden on last card and mobile) */}
                {i < workflowSteps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-brand/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PRACTICE AREAS GRID                                       */}
      {/* ============================================================ */}
      <section className="bg-brand py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Principais áreas de atuação em{' '}
              <span className="gradient-text">Direito da Saúde</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <div
                key={i}
                className="animate-on-scroll group overflow-hidden rounded-2xl bg-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
                data-delay={String(i * 100)}
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-gray-900">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {area.description}
                  </p>
                  <Link
                    href={area.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                  >
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CTA STRIP                                                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-brand-dark py-16">
        {/* Pattern texture overlay */}
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("/assets/images/pattern.png")', backgroundRepeat: 'repeat', backgroundSize: '300px' }} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="font-heading text-xl font-bold uppercase leading-snug tracking-wide text-white md:text-2xl lg:text-3xl">
            Não aceite negativas injustas! Fale com nossos especialistas e
            defenda seu direito à saúde.
          </p>
          <a
            href="https://wa.me/554530273100"
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
                  à saúde
                </strong>
                , ajudando pacientes que enfrentam negativas de planos de saúde e
                do SUS. Com{' '}
                <strong>
                  atendimento online e 100% personalizado
                </strong>
                , atuamos em{' '}
                <strong>todo o Brasil</strong> para garantir o acesso a
                tratamentos, medicamentos e procedimentos essenciais. Avaliado
                pelos nossos clientes com{' '}
                <strong>5 estrelas no Google</strong>, nosso compromisso é atuar
                com eficiência e empatia para assegurar que cada paciente tenha
                seus direitos garantidos.
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
      {/* 8. STATS / NUMBERS BAR                                       */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-brand py-12">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("/assets/images/pattern.png")', backgroundRepeat: 'repeat', backgroundSize: '300px' }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '17+', label: 'Anos de experiência' },
              { value: 'Todo Brasil', label: 'Atendimento nacional' },
              { value: '5 estrelas', label: 'Avaliação no Google' },
              { value: 'Milhares', label: 'De clientes atendidos' },
            ].map((stat, i) => (
              <div key={i} className="animate-on-scroll" data-delay={String(i * 100)}>
                <p className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. TESTIMONIALS SECTION                                      */}
      {/* ============================================================ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="section-title">
              O QUE DIZEM SOBRE O{' '}
              <strong className="gradient-text">BARP.HOFF. ADVOGADOS</strong>
            </h2>
          </div>

          <ReviewsCarousel />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. TEAM PREVIEW SECTION                                     */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-hero py-20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-hero via-hero/95 to-hero" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="section-label">NOSSO TIME</span>
            <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-white md:text-4xl">
              Conheça as advogadas que lideram o{' '}
              <span className="gradient-text">BARP.HOFF.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Com mais de 17 anos de experiência em Direito da Saúde,
              nossa equipe é referência na defesa dos seus direitos.
            </p>
          </div>

          {/* Lawyer cards */}
          <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2">
            {[
              {
                name: 'Dra. Alexandra Barp',
                photo: '/assets/team/dra-alexandra-min.png',
              },
              {
                name: 'Dra. Jessica Hoff',
                photo: '/assets/team/dra-jessica-min.png',
              },
            ].map((lawyer, i) => (
              <div
                key={i}
                className="animate-on-scroll group flex flex-col items-center text-center"
                data-delay={String(i * 200)}
              >
                {/* Photo container */}
                <div className="relative mb-6 h-72 w-56 overflow-hidden rounded-2xl sm:h-80 sm:w-64">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand/30 via-transparent to-transparent" />
                  <Image
                    src={lawyer.photo}
                    alt={lawyer.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 224px, 256px"
                  />
                </div>

                {/* Name */}
                <h3 className="font-heading text-xl font-bold text-white">
                  {lawyer.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#EFBF78]">
                  Advogada especialista em Direito da Saúde
                </p>
              </div>
            ))}
          </div>

          {/* Link to about page */}
          <div className="mt-12 text-center">
            <Link
              href="/sobre"
              className="btn-brand inline-flex items-center gap-2"
            >
              Conheça nossa equipe
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

      {/* ============================================================ */}
      {/* 11. BLOG SECTION                                             */}
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
                className="animate-on-scroll group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                data-delay={String(i * 100)}
              >
                {/* Post thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={getBlogThumbnail(post.slug, post.categories)}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {post.categories[0] && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {post.categories[0]}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
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
