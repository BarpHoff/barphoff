import type { Metadata } from 'next'
import { Inter, Outfit, Prata } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ScrollAnimations from '@/components/ScrollAnimations'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['500', '600', '700', '800'],
})

const prata = Prata({
  subsets: ['latin'],
  variable: '--font-prata',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    default: 'Barp.Hoff. | Advogados Especialistas em Direito da Saúde',
    template: '%s | Barp.Hoff.',
  },
  description:
    'Advogados especialistas em Direito da Saúde! Há 17 anos garantindo o seu acesso a tratamentos, medicamentos e procedimentos negados pelo SUS ou plano de saúde. Atendemos em todo o Brasil.',
  metadataBase: new URL('https://www.barphoff.com'),
  keywords: [
    'advogado direito da saúde',
    'negativa plano de saúde',
    'negativa SUS',
    'medicamento alto custo',
    'tratamento home care',
    'erro médico',
    'cirurgia reparadora',
    'imunoterapia',
    'advogado saúde Foz do Iguaçu',
  ],
  authors: [{ name: 'Barp.Hoff.Costa Advogados' }],
  creator: 'Barp.Hoff.Costa Advogados',
  publisher: 'Barp.Hoff.Costa Advogados',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.barphoff.com',
    siteName: 'Barp.Hoff. Advocacia Especializada',
    title: 'Barp.Hoff. | Advogados Especialistas em Direito da Saúde',
    description: 'Há 17 anos garantindo o seu acesso a tratamentos, medicamentos e procedimentos negados pelo SUS ou plano de saúde. Atendemos em todo o Brasil.',
    images: [{ url: '/assets/images/og-cover.jpg', width: 1200, height: 630, alt: 'Barp.Hoff.Costa Advogados — Especialistas em Direito da Saúde' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barp.Hoff. | Advogados Especialistas em Direito da Saúde',
    description: 'Há 17 anos garantindo o seu acesso a tratamentos, medicamentos e procedimentos negados pelo SUS ou plano de saúde.',
    images: ['/assets/images/og-cover.jpg'],
  },
  alternates: {
    canonical: 'https://www.barphoff.com',
  },
  // Google Search Console verificado via DNS TXT record
}

/* ------------------------------------------------------------------ */
/*  JSON-LD — WebSite (habilita Sitelinks Searchbox no SERP)           */
/* ------------------------------------------------------------------ */
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.barphoff.com/#website',
  url: 'https://www.barphoff.com',
  name: 'Barp.Hoff.Costa Advogados',
  description: 'Advogados especialistas em Direito da Saúde',
  inLanguage: 'pt-BR',
  publisher: { '@id': 'https://www.barphoff.com/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.barphoff.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data — Organization + LegalService              */
/* ------------------------------------------------------------------ */
const siteSchema = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'Organization'],
  '@id': 'https://www.barphoff.com/#organization',
  name: 'Barp.Hoff.Costa Advogados',
  alternateName: 'BARP.HOFF.',
  url: 'https://www.barphoff.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.barphoff.com/assets/images/logo-branco-full.png',
    width: 300,
    height: 60,
  },
  image: 'https://www.barphoff.com/assets/images/equipe.jpg',
  description:
    'Advogados especialistas em Direito da Saúde. Há 17 anos garantindo acesso a tratamentos, medicamentos e procedimentos negados pelo SUS ou plano de saúde.',
  telephone: '+55-45-3027-3100',
  email: 'advogados.bhc@gmail.com',
  foundingDate: '2009',
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Mal. Floriano Peixoto, 1756 - sala 02',
    addressLocality: 'Foz do Iguaçu',
    addressRegion: 'PR',
    postalCode: '85851-020',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.5163,
    longitude: -54.5854,
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  // aggregateRating removido: Trustindex foi desativado e não há fonte verificável
  // de reviews agregados. Reintegrar apenas com dados reais (Google Business Profile
  // API ou widget Trustindex ativo), nunca com valores estáticos.
  sameAs: [
    'https://www.instagram.com/saudebhc/',
    'https://www.facebook.com/barphoff',
    'https://www.linkedin.com/company/barphoff',
    'https://www.youtube.com/@barphoff',
  ],
  knowsAbout: [
    'Direito da Saúde',
    'Negativa de Plano de Saúde',
    'Negativa do SUS',
    'Tratamento Home Care',
    'Imunoterapia',
    'Medicamentos de Alto Custo',
    'Cirurgias Reparadoras',
    'Erro Médico',
    'Tratamento de Câncer',
    'Canabidiol',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Jurídicos em Direito da Saúde',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Negativa de Plano de Saúde', description: 'Reversão de negativas de cobertura de tratamentos, cirurgias e medicamentos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Negativa do SUS', description: 'Acesso a medicamentos de alto custo e tratamentos negados pela rede pública' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tratamento Home Care', description: 'Garantia de atendimento domiciliar pelo SUS ou planos de saúde' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tratamento Oncológico', description: 'Acesso a quimioterapia, radioterapia, imunoterapia e medicamentos essenciais' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cirurgias Reparadoras', description: 'Garantia de cobertura de cirurgias reparadoras pelos planos de saúde' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medicamentos de Alto Custo', description: 'Acesso a medicamentos de alto custo pelo SUS ou plano de saúde' } },
    ],
  },
  founder: [
    { '@id': 'https://www.barphoff.com/sobre#alexandra-barp' },
    { '@id': 'https://www.barphoff.com/sobre#jessica-hoff' },
  ],
  employee: [
    { '@id': 'https://www.barphoff.com/sobre#alexandra-barp' },
    { '@id': 'https://www.barphoff.com/sobre#jessica-hoff' },
  ],
}

/* ------------------------------------------------------------------ */
/*  JSON-LD — Person (advogadas)                                       */
/* ------------------------------------------------------------------ */
const alexandraSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.barphoff.com/sobre#alexandra-barp',
  name: 'Dra. Alexandra Barp',
  givenName: 'Alexandra',
  familyName: 'Barp',
  jobTitle: 'Advogada Especialista em Direito da Saúde',
  description:
    'Advogada sócia do escritório Barp.Hoff.Costa, especialista em Direito da Saúde, com atuação em todo o território nacional na defesa de pacientes contra negativas de planos de saúde e do SUS.',
  image: 'https://www.barphoff.com/assets/team/dra-alexandra.jpg',
  url: 'https://www.barphoff.com/sobre',
  telephone: '+55-45-3027-3100',
  email: 'advogados.bhc@gmail.com',
  knowsAbout: [
    'Direito da Saúde',
    'Negativa de Plano de Saúde',
    'Medicamentos de Alto Custo',
    'Tratamento Home Care',
    'Tratamento Oncológico',
  ],
  knowsLanguage: ['pt-BR'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Professional License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Ordem dos Advogados do Brasil - Seccional Paraná',
      alternateName: 'OAB/PR',
    },
  },
  worksFor: { '@id': 'https://www.barphoff.com/#organization' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Mal. Floriano Peixoto, 1756 - sala 02',
    addressLocality: 'Foz do Iguaçu',
    addressRegion: 'PR',
    postalCode: '85851-020',
    addressCountry: 'BR',
  },
  sameAs: ['https://www.instagram.com/saudebhc/'],
}

const jessicaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.barphoff.com/sobre#jessica-hoff',
  name: 'Dra. Jessica Hoff',
  givenName: 'Jessica',
  familyName: 'Hoff',
  jobTitle: 'Advogada Especialista em Direito da Saúde',
  description:
    'Advogada sócia do escritório Barp.Hoff.Costa, especialista em Direito da Saúde, com atuação em todo o território nacional na defesa de pacientes contra negativas de planos de saúde e do SUS.',
  image: 'https://www.barphoff.com/assets/team/dra-jessica.jpg',
  url: 'https://www.barphoff.com/sobre',
  telephone: '+55-45-3027-3100',
  email: 'advogados.bhc@gmail.com',
  knowsAbout: [
    'Direito da Saúde',
    'Negativa de Plano de Saúde',
    'Medicamentos de Alto Custo',
    'Tratamento Home Care',
    'Cirurgias Reparadoras',
  ],
  knowsLanguage: ['pt-BR'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Professional License',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Ordem dos Advogados do Brasil - Seccional Paraná',
      alternateName: 'OAB/PR',
    },
  },
  worksFor: { '@id': 'https://www.barphoff.com/#organization' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Mal. Floriano Peixoto, 1756 - sala 02',
    addressLocality: 'Foz do Iguaçu',
    addressRegion: 'PR',
    postalCode: '85851-020',
    addressCountry: 'BR',
  },
  sameAs: ['https://www.instagram.com/saudebhc/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} ${prata.variable}`}>
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
      </head>
      <body className={`${inter.className} bg-white`}>
        {/* WebSite Schema (Sitelinks Searchbox) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Organization + LegalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {/* Person Schema — Dra. Alexandra Barp */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(alexandraSchema) }}
        />
        {/* Person Schema — Dra. Jessica Hoff */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jessicaSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollAnimations />
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-552BWMC9');`}
        </Script>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V1HCE19K22"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-V1HCE19K22');`}
        </Script>
      </body>
    </html>
  )
}
