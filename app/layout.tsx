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
  metadataBase: new URL('https://barphoff.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Barp.Hoff. Advocacia Especializada',
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
