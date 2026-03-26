// Blog post thumbnail mapping — slug → image path
const thumbnailMap: Record<string, string> = {
  'como-processar-um-plano-de-saude': '/assets/areas/plano-de-saude.jpg',
  'processar-o-plano-de-saude-2': '/assets/areas/garanta.jpg',
  'negativa-de-plano-de-saude': '/assets/areas/negado.jpg',
  'tratamento-home-care-pelo-sus': '/assets/areas/home-care.jpg',
  'tratamento-home-care-pelo-plano-de-saude': '/assets/areas/home-care.jpg',
  'cirurgia-reparadora-pelo-plano-de-saude': '/assets/areas/cirurgia-reparadora.jpg',
  'tratamento-de-atrofia-muscular-espinhal': '/assets/areas/remedio-mais-caro.jpg',
  'tratamento-com-canabidiol': '/assets/areas/enoxaparina.jpg',
  'medicamento-pelo-sus-saiba-seus-direitos': '/assets/blog/medicamento-sus.webp',
  'tratamento-de-trombofilia-pelo-plano-de-saude': '/assets/blog/thumb-trombofilia.webp',
  'direito-a-cirurgia-bariatrica': '/assets/areas/bariatrica.jpg',
  'tratamento-de-cancer-pelo-plano-de-saude': '/assets/areas/tratamento-cancer.jpg',
  'tratamento-de-cancer-pelo-sus': '/assets/areas/tratamento-cancer.jpg',
  'cancer-de-mama-e-direitos-das-mulheres': '/assets/blog/cancer-de-mama.jpg',
  'negativa-do-sus': '/assets/areas/negado.jpg',
  'como-conseguir-internacao-pelo-sus': '/assets/areas/internacao.jpg',
  'imunoterapia-pelo-plano-de-saude': '/assets/areas/imunoterapia.jpg',
  'erro-medico': '/assets/areas/erro-medico.jpg',
  'enoxaparina-pelo-sus-seus-direitos': '/assets/areas/enoxaparina.jpg',
  'tratamento-de-diabetes-pelo-plano-de-saude': '/assets/areas/diabetes.jpg',
  'autismo-e-plano-de-saude': '/assets/blog/thumb-autismo.webp',
  'revisao-e-restituicao-de-valores-pagos-indevidamente': '/assets/areas/revisao-valores.jpg',
}

// Default fallback images for categories
const categoryFallback: Record<string, string> = {
  'Planos de Saúde': '/assets/areas/plano-de-saude.jpg',
  'SUS': '/assets/areas/negado.jpg',
  'Blog': '/assets/areas/garanta.jpg',
  'Câncer': '/assets/areas/tratamento-cancer.jpg',
}

const defaultThumbnail = '/assets/areas/garanta.jpg'

export function getBlogThumbnail(slug: string, categories?: string[]): string {
  if (thumbnailMap[slug]) return thumbnailMap[slug]
  if (categories?.length) {
    for (const cat of categories) {
      if (categoryFallback[cat]) return categoryFallback[cat]
    }
  }
  return defaultThumbnail
}
