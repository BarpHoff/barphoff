import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contato | Fale com Advogados Especialistas em Saúde',
  description:
    'Entre em contato com o Barp.Hoff.Costa Advogados. Atendimento online em todo o Brasil. Telefone: (45) 3027-3100. Email: advogados.bhc@gmail.com. Especialistas em Direito da Saúde.',
  openGraph: {
    title: 'Contato | Barp.Hoff. Advogados',
    description: 'Fale com advogados especialistas em Direito da Saúde. Atendimento em todo o Brasil.',
    url: 'https://www.barphoff.com/contato',
    images: [{ url: '/assets/images/og-cover.jpg', width: 1200, height: 630, alt: 'Barp.Hoff.Costa Advogados' }],
  },
  alternates: { canonical: 'https://www.barphoff.com/contato' },
}

/* ================================================================== */
/*  CONTATO (CONTACT) PAGE                                             */
/* ================================================================== */
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.barphoff.com' },
    { '@type': 'ListItem', position: 2, name: 'Contato', item: 'https://www.barphoff.com/contato' },
  ],
}

const contatoFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vocês atendem em todo o Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Nosso atendimento é 100% online e atende clientes em todos os estados do Brasil. A sede fica em Foz do Iguaçu/PR, mas processos tramitam em qualquer Tribunal do país.',
      },
    },
    {
      '@type': 'Question',
      name: 'A consulta inicial é cobrada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A análise inicial do seu caso é gratuita. Você envia os documentos pelo WhatsApp ou e-mail e um dos advogados avalia a viabilidade sem compromisso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o prazo para uma resposta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Respondemos em horário comercial (seg a sex, 8h às 18h). Casos urgentes envolvendo negativa de cirurgia, medicamento ou internação têm prioridade e são respondidos no mesmo dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o atendimento online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Todo o contato ocorre por WhatsApp, e-mail e videochamada. Você envia a documentação digitalmente, assina contrato e procuração por link seguro, e acompanha o processo em tempo real.',
      },
    },
  ],
}

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contatoFaqSchema) }}
      />
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/escritorio.jpg"
          alt="Escritório Barp.Hoff. Advogados em Foz do Iguaçu"
          fill
          className="object-cover object-center"
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
        <div className="hero-glow" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#994B4B]/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#D5BE9F]/30 bg-[#D5BE9F]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D5BE9F] backdrop-blur-sm">
            Contato
          </span>
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-wider md:text-5xl lg:text-6xl">
            <span
              className="gradient-text-hero"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.85)',
                paintOrder: 'stroke fill',
              }}
            >
              Fale Conosco
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Resposta r&aacute;pida em hor&aacute;rio comercial. Atendimento
            100% online em todo o Brasil.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D5BE9F] to-transparent" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PHOTO STRIP — borderless                                  */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/contato/contato-1.png"
                alt="Equipe Barp.Hoff - Atendimento especializado"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 33vw, 300px"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/contato/contato-2.png"
                alt="Consulta jurídica online"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 33vw, 300px"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/contato/contato-3.png"
                alt="Atendimento personalizado"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 33vw, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CONTACT FORM + INFO                                       */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* ---- Left column: Form ---- */}
            <div className="lg:col-span-3">
              <h2 className="section-title mb-8">Mande sua mensagem</h2>
              <ContactForm />
            </div>

            {/* ---- Right column: Contact info ---- */}
            <div className="lg:col-span-2">
              {/* Telefones */}
              <div className="mb-8">
                <h3 className="mb-4 font-heading text-lg font-bold text-gray-900">
                  Telefones
                </h3>
                <div className="space-y-3">
                  {/* Phone */}
                  <a
                    href="tel:+554530273100"
                    className="flex items-center gap-3 text-gray-700 transition-colors hover:text-brand"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-brand"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    (45) 3027-3100
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 transition-colors hover:text-brand"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-brand"
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
                    (45) 3027-3100
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="mb-4 font-heading text-lg font-bold text-gray-900">
                  Email
                </h3>
                <a
                  href="mailto:advogados.bhc@gmail.com"
                  className="flex items-center gap-3 text-gray-700 transition-colors hover:text-brand"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  advogados.bhc@gmail.com
                </a>
              </div>

              {/* Endereço */}
              <div>
                <h3 className="mb-4 font-heading text-lg font-bold text-gray-900">
                  Endereço
                </h3>
                <div className="flex items-start gap-3 text-gray-700">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span>
                    R. Mal. Floriano Peixoto, 1756 - sala 02 - Centro,
                    <br />
                    Foz do Iguaçu - PR, 85851-020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ATENDIMENTO NACIONAL                                      */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* ---- Left column: Text ---- */}
            <div>
              <h2 className="section-title mb-6">
                Atendimento em todo o Brasil
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-gray-700">
                Nosso atendimento é 100% online. Não importa onde você esteja,
                nossos advogados estão prontos para ajudar.
              </p>
            </div>

            {/* ---- Right column: Map image ---- */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/assets/map_image.webp"
                alt="Mapa do Brasil - Atendimento nacional online"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4b. PERGUNTAS FREQUENTES                                     */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="section-title mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Vocês atendem em todo o Brasil?',
                a: 'Sim. Nosso atendimento é 100% online e atende clientes em todos os estados do Brasil. A sede fica em Foz do Iguaçu/PR, mas processos tramitam em qualquer Tribunal do país.',
              },
              {
                q: 'A consulta inicial é cobrada?',
                a: 'A análise inicial do seu caso é gratuita. Você envia os documentos pelo WhatsApp ou e-mail e um dos advogados avalia a viabilidade sem compromisso.',
              },
              {
                q: 'Qual o prazo para uma resposta?',
                a: 'Respondemos em horário comercial (seg a sex, 8h às 18h). Casos urgentes envolvendo negativa de cirurgia, medicamento ou internação têm prioridade e são respondidos no mesmo dia.',
              },
              {
                q: 'Como funciona o atendimento online?',
                a: 'Todo o contato ocorre por WhatsApp, e-mail e videochamada. Você envia a documentação digitalmente, assina contrato e procuração por link seguro, e acompanha o processo em tempo real.',
              },
            ].map((item) => (
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
      {/* 5. GOOGLE MAPS EMBED                                         */}
      {/* ============================================================ */}
      <section>
        <iframe
          title="Localização Barp.Hoff. Advogados — R. Mal. Floriano Peixoto, 1756, Foz do Iguaçu - PR"
          src="https://maps.google.com/maps?q=R.%20Mal.%20Floriano%20Peixoto%2C%201756%20-%20Centro%2C%20Foz%20do%20Igua%C3%A7u%20-%20PR%2C%2085851-020&t=m&z=16&output=embed&iwloc=near"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />
      </section>
    </>
  )
}
