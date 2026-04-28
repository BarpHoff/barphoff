import Image from 'next/image'
import Link from 'next/link'

const menuLinks = [
  { label: 'Início', href: '/' },
  { label: 'Quem Somos', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

const areaLinks = [
  { label: 'Tratamento Home Care', href: '/home-care' },
  { label: 'Tratamento de Câncer', href: '/tratamento-oncologico' },
  { label: 'Cirurgias Reparadoras', href: '/negativa-cirurgia' },
  { label: 'Negativa de Plano de Saúde', href: '/negativa-plano-de-saude' },
  { label: 'Negativa do SUS', href: '/negativa-do-sus' },
]

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.523.993 4.088 4.088 0 01.993 1.523c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.372 4.372 0 01-2.516 2.516c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 01-1.523-.993 4.088 4.088 0 01-.993-1.523c-.163-.46-.35-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 01.993-1.523A4.088 4.088 0 015.152 2.636c.46-.163 1.26-.35 2.43-.403C8.846 2.175 9.226 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a6.21 6.21 0 00-2.244 1.46A6.21 6.21 0 00.436 4.34C.139 5.102-.064 5.975.006 7.253.014 8.533 0 8.941 0 12.2s.014 3.668.072 4.948c.058 1.278.261 2.15.558 2.913a6.21 6.21 0 001.46 2.244 6.21 6.21 0 002.25 1.46c.762.297 1.636.5 2.913.558C8.533 23.986 8.941 24 12 24s3.468-.014 4.748-.072c1.278-.058 2.15-.261 2.913-.558a6.474 6.474 0 003.704-3.704c.297-.762.5-1.636.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.278-.261-2.15-.558-2.913a6.21 6.21 0 00-1.46-2.244A6.21 6.21 0 0019.66.63C18.898.333 18.025.13 16.748.072 15.468.014 15.06 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61550826945465', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/saudebhc/', icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/barp-hoff-costa-advocacia-especializada/', icon: LinkedInIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@Barphoffcosta.advocacia', icon: YouTubeIcon },
]

// -----------------------------------------------------------------------
//  Bloco institucional (OAB / CNPJ).
//  TO-REVIEW: preencher os tres valores abaixo e trocar SHOW_INSTITUTIONAL
//  para true antes do push. Enquanto false, o bloco nao renderiza --
//  evita exibir "OAB/PR ___" em producao. Os mesmos dados devem ser
//  refletidos no JSON-LD em app/layout.tsx (constantes OAB_ALEXANDRA,
//  OAB_JESSICA, CNPJ_BARPHOFF).
// -----------------------------------------------------------------------
const SHOW_INSTITUTIONAL = true
const INSTITUTIONAL = {
  cnpj: '48.808.073/0001-30',
  oabAlexandra: 'OAB/PR 56.903-N',
  oabJessica: 'OAB/PR 99.905',
}

export function Footer() {
  return (
    <footer className="relative bg-brand text-white">
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="space-y-5">
            <div>
              <Image
                src="/assets/images/logo-white.png"
                alt="Barp.Hoff. Advocacia"
                width={180}
                height={60}
              />
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Advogados especialistas em Direito da Saúde com mais de 17 anos de experiência, o BARP. HOFF. tem uma equipe dedicada a oferecer um atendimento personalizado e humanizado em todo o Brasil.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Menu */}
          <div>
            <h3 className="text-lg font-bold mb-5">MENU</h3>
            <ul className="space-y-3">
              {menuLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
                  >
                    <CheckIcon />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Areas */}
          <div>
            <h3 className="text-lg font-bold mb-5">&Aacute;REAS</h3>
            <ul className="space-y-3">
              {areaLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
                  >
                    <CheckIcon />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-5">CONTATO</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+554530273100"
                  className="flex items-start gap-3 text-sm text-white/90 hover:text-white transition-colors"
                >
                  <PhoneIcon />
                  <span>(45) 3027-3100</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/554530273100?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/90 hover:text-white transition-colors"
                >
                  <WhatsAppIcon />
                  <span>(45) 3027-3100</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:advogados.bhc@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/90 hover:text-white transition-colors"
                >
                  <EmailIcon />
                  <span>advogados.bhc@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/90">
                  <PinIcon />
                  <span>
                    R. Mal. Floriano Peixoto, 1756 - sala 02 - Centro, Foz do
                    Iguaçu - PR, 85851-020
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer etico (OAB Provimento 205/2021) */}
      {/* TO-REVIEW: revisar texto com advogado responsavel antes do push */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs leading-relaxed text-white/70">
          <p>
            Este conte&uacute;do tem car&aacute;ter exclusivamente informativo e n&atilde;o
            constitui aconselhamento jur&iacute;dico. A an&aacute;lise de casos espec&iacute;ficos
            requer consulta profissional individualizada. Nenhum resultado jur&iacute;dico pode
            ser garantido previamente; cada caso &eacute; avaliado conforme contrato, laudos
            m&eacute;dicos e jurisprud&ecirc;ncia aplic&aacute;vel.
          </p>
          {SHOW_INSTITUTIONAL && (
            <p className="mt-3 text-white/60">
              Dra. Alexandra Barp Salgado &mdash; {INSTITUTIONAL.oabAlexandra}
              {' · '}
              Dra. Jessica Cristina Hoff Bueno Garcia &mdash; {INSTITUTIONAL.oabJessica}
              {' · '}
              CNPJ {INSTITUTIONAL.cnpj}
            </p>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/80">
          <p>&copy; BARP.HOFF Advocacia Especializada | Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <span aria-hidden="true" className="text-white/40">·</span>
            <Link href="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5521977266062"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Feito por &quot;Edu Santana Soluções Web e Marketing LTDA&quot;
          </a>
        </div>
      </div>
    </footer>
  )
}
