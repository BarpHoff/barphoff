import type { Metadata } from 'next'
import Image from 'next/image'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com o escritório BARP.HOFF. Atendimento online em todo o Brasil. Telefone: (45) 3027-3100. Email: advogados.bhc@gmail.com',
}

/* ================================================================== */
/*  CONTATO (CONTACT) PAGE                                             */
/* ================================================================== */
export default function ContatoPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="relative flex h-[350px] items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/banner-barphoff.jpg"
          alt="Contato Barp.Hoff. Advogados"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Brand overlay */}
        <div className="absolute inset-0 bg-brand/60" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Contact person icon */}
          <svg
            className="mb-4 h-16 w-16 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            FALE CONOSCO
          </h1>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PHOTO STRIP                                               */}
      {/* ============================================================ */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/assets/contato/contato-1.png"
                alt="Equipe Barp.Hoff - Atendimento especializado"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/assets/contato/contato-2.png"
                alt="Consulta jurídica online"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src="/assets/contato/contato-3.png"
                alt="Atendimento personalizado"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
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
      {/* 5. GOOGLE MAPS EMBED                                         */}
      {/* ============================================================ */}
      <section>
        <iframe
          title="Localização Barp.Hoff. Advogados"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2!2d-54.588!3d-25.509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f690a7a4e7e6d1%3A0x3baa0f9a2f4e4b84!2sBarp.%20Hoff.%20%7C%20Advogadas%20da%20Sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1"
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
