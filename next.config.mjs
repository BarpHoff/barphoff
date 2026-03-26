/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
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
    ]
  },
}

export default nextConfig
