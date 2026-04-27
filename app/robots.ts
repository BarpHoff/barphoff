import type { MetadataRoute } from 'next'

// AdsBot-Google e variantes NAO seguem o wildcard `*` por padrao -- exigem
// declaracao nominal com `allow: '/'` para permitir crawl em LPs de Ads.
// Sem isso, o relatorio de LPE pode ficar "Nao avaliado" e degradar QS.
export default function robots(): MetadataRoute.Robots {
  const disallow = ['/api/', '/_next/', '/DOWNLOADS GERAL/']
  return {
    rules: [
      { userAgent: 'Googlebot', allow: '/', disallow },
      { userAgent: 'AdsBot-Google', allow: '/' },
      { userAgent: 'AdsBot-Google-Mobile', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: '*', allow: '/', disallow },
    ],
    sitemap: 'https://www.barphoff.com/sitemap.xml',
  }
}
