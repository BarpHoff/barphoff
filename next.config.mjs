/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 ano — otimizações de <Image> cacheadas
  },
  async headers() {
    return [
      {
        // Assets estáticos: AVIF/WebP/JPG/PNG/SVG/fonts — cache eterno + imutável
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Bundles do Next (já hasheados): cache eterno
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // LPs HTML estáticas: revalida no edge, serve rápido
        source: '/:path((?:home-care|medicamento-alto-custo|negativa-cirurgia|negativa-plano-de-saude|tratamento-oncologico|negativa-do-sus|direito-a-saude|revisao-restituicao|negativa-de-tratamento))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        // Security headers (bônus — o Google considera HTTPS + segurança como sinal)
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/negativa-cirurgia',
        permanent: true,
      },
      // Redirects 301 de slugs renomeados do WordPress (preservação de SEO)
      { source: '/quem-somos', destination: '/sobre', permanent: true },
      { source: '/cirurgias-reparadoras', destination: '/negativa-cirurgia', permanent: true },
      { source: '/tratamento-home-care', destination: '/home-care', permanent: true },
      { source: '/negativas-de-plano-de-saude', destination: '/negativa-plano-de-saude', permanent: true },
      { source: '/tratamento-de-cancer', destination: '/tratamento-oncologico', permanent: true },
      { source: '/revisao-e-restituicao-de-valores-pagos-indevidamente', destination: '/revisao-restituicao', permanent: true },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/home-care',
        destination: '/home-care/index.html',
      },
      {
        source: '/medicamento-alto-custo',
        destination: '/medicamento-alto-custo/index.html',
      },
      {
        source: '/negativa-cirurgia',
        destination: '/negativa-cirurgia/index.html',
      },
      {
        source: '/negativa-plano-de-saude',
        destination: '/negativa-plano-de-saude/index.html',
      },
      {
        source: '/tratamento-oncologico',
        destination: '/tratamento-oncologico/index.html',
      },
      {
        source: '/negativa-do-sus',
        destination: '/negativa-do-sus/index.html',
      },
      {
        source: '/direito-a-saude',
        destination: '/direito-a-saude/index.html',
      },
      {
        source: '/revisao-restituicao',
        destination: '/revisao-restituicao/index.html',
      },
      {
        source: '/negativa-de-tratamento',
        destination: '/negativa-de-tratamento/index.html',
      },
    ]
  },
}

export default nextConfig
