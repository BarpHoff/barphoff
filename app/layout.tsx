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
  metadataBase: new URL('https://barphoff.com'),
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
    url: 'https://barphoff.com',
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
    canonical: 'https://barphoff.com',
  },
  // Google Search Console verificado via DNS TXT record
}

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data — Organization + LegalService              */
/* ------------------------------------------------------------------ */
const siteSchema = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'Organization'],
  '@id': 'https://barphoff.com/#organization',
  name: 'Barp.Hoff.Costa Advogados',
  alternateName: 'BARP.HOFF.',
  url: 'https://barphoff.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://barphoff.com/assets/images/logo-branco-full.png',
    width: 300,
    height: 60,
  },
  image: 'https://barphoff.com/assets/images/equipe.jpg',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} ${prata.variable}`}>
      <body className={`${inter.className} bg-white`}>
        {/* Organization + LegalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
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
