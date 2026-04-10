import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Barp.Hoff.Costa Advogados — Direito da Saúde',
    short_name: 'Barp.Hoff.',
    description:
      'Advogados especialistas em Direito da Saúde. Atendimento nacional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2a0a0f',
    icons: [
      {
        src: '/assets/logo-rosa.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
