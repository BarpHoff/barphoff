import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: 'Áreas de Atuação',
  description:
    'Conheça as áreas de atuação do escritório BARP.HOFF. em Direito da Saúde: negativas do SUS e planos de saúde, tratamento home care, oncologia, cirurgias reparadoras e restituição de valores.',
}

/* ------------------------------------------------------------------ */
/*  Practice area data                                                */
/* ------------------------------------------------------------------ */
const practiceAreas = [
  {
    title: 'Negativa do SUS',
    description:
      'Atuamos para assegurar acesso a medicamentos de alto custo, exames, cirurgias e tratamentos negados pela rede pública, garantindo seus direitos constitucionais à saúde. O direito à saúde é garantido pela Constituição Federal, e o SUS tem a obrigação de fornecer os tratamentos necessários.',
    href: '/negativa-do-sus',
    image: '/assets/areas/negado.jpg',
  },
  {
    title: 'Negativa de Planos de Saúde',
    description:
      'Revertemos negativas de cobertura de tratamentos, cirurgias, internações e medicamentos essenciais, garantindo que seu plano cumpra com as obrigações contratuais. Atuamos contra negativas de home care, tratamentos, cirurgias, internações, exames e medicamentos fora da lista da ANS.',
    href: '/negativa-plano-de-saude',
    image: '/assets/areas/plano-de-saude.jpg',
  },
  {
    title: 'Tratamentos Home Care',
    description:
      'Ajudamos a garantir que pacientes que necessitam de atendimento domiciliar tenham esse direito respeitado, seja pelo SUS ou pelos planos de saúde. Isso inclui enfermagem, fisioterapia, medicação, equipamentos, suporte ventilatório e mais.',
    href: '/home-care',
    image: '/assets/areas/home-care.jpg',
  },
  {
    title: 'Tratamento de Câncer',
    description:
      'Apoiamos pacientes que enfrentam negativas de quimioterapia, radioterapia, imunoterapia e medicamentos essenciais, agindo rapidamente para garantir o tratamento necessário. Cada dia conta na luta contra o câncer.',
    href: '/tratamento-oncologico',
    image: '/assets/areas/tratamento-cancer.jpg',
  },
  {
    title: 'Cirurgias Reparadoras',
    description:
      'Através da nossa assessoria jurídica notificamos planos de saúde ou SUS para resolver o problema rapidamente e, se necessário, entramos com ação judicial com pedido de liminar. Atuamos em casos pós-mastectomia, queimaduras, traumas, defeitos congênitos e pós-bariátrica.',
    href: '/negativa-cirurgia',
    image: '/assets/areas/cirurgia-reparadora.jpg',
  },
  {
    title: 'Medicamentos de Alto Custo',
    description:
      'Garantimos seu acesso a medicamentos caros e de alto custo negados pelo SUS ou plano de saúde. Através da nossa assessoria jurídica notificamos e, se necessário, entramos com ação judicial com pedido de liminar.',
    href: '/medicamento-alto-custo',
    image: '/assets/areas/revisao-valores.jpg',
  },
]

/* ------------------------------------------------------------------ */
/*  WhatsApp SVG icon                                                 */
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
/*  Medical cross icon for card accent                                */
/* ------------------------------------------------------------------ */
function MedicalCrossIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      />
    </svg>
  )
}

/* ================================================================== */
/*  ÁREAS DE ATUAÇÃO PAGE                                             */
/* ================================================================== */
export default function AreasDeAtuacaoPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="relative flex h-[400px] items-center overflow-hidden bg-hero">
        <Image
          src="/assets/images/banner-areas.jpg"
          alt="Áreas de Atuação do escritório Barp.Hoff."
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/60" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Nossas
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Áreas de Atuação
          </h1>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. INTRODUCTION                                              */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-heading text-xl leading-relaxed text-gray-700">
            O BARP.HOFF. é referência em Direito da Saúde, com mais de 17 anos
            de experiência ajudando pacientes em todo o Brasil a terem seus
            direitos respeitados.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. PRACTICE AREAS GRID                                       */}
      {/* ============================================================ */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {practiceAreas.map((area, i) => (
              <div
                key={i}
                className="animate-on-scroll group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
                data-delay={String(i * 100)}
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="border-l-4 border-brand p-8">
                  <h2 className="font-heading text-xl font-bold text-brand">
                    {area.title}
                  </h2>

                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    {area.description}
                  </p>

                  <Link
                    href={area.href}
                    className="mt-5 inline-flex items-center gap-1 font-semibold text-brand transition-colors hover:underline"
                  >
                    Saiba mais
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CTA SECTION                                               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-brand-dark py-16">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'url("/assets/images/pattern.png")', backgroundRepeat: 'repeat', backgroundSize: '300px' }} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="font-heading text-xl font-bold leading-snug text-white md:text-2xl lg:text-3xl">
            Não aceite negativas injustas! Fale com nossos especialistas.
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
