// Blog post thumbnail mapping — slug → original WordPress featured image
const thumbnailMap: Record<string, string> = {
  'como-processar-um-plano-de-saude': '/assets/blog/processar-plano-3.jpg',
  'processar-o-plano-de-saude-2': '/assets/blog/processar-plano-14.jpg',
  'negativa-de-plano-de-saude': '/assets/blog/negativa-plano-13.jpg',
  'tratamento-home-care-pelo-sus': '/assets/blog/home-care-sus-16.jpg',
  'tratamento-home-care-pelo-plano-de-saude': '/assets/blog/home-care-plano-15.jpg',
  'cirurgia-reparadora-pelo-plano-de-saude': '/assets/blog/cirurgia-reparadora-10.jpg',
  'imunoterapia-pelo-plano-de-saude': '/assets/blog/imunoterapia-plano-12.jpg',
  'imunoterapia-pelo-sus': '/assets/blog/imunoterapia-sus-11.jpg',
  'doencas-autoimunes': '/assets/blog/doencas-autoimunes-20.jpg',
  'negativa-de-home-care': '/assets/blog/negativa-home-care-21.jpg',
  'cobertura-de-medicamentos-de-alto-custo-pelo-plano-de-saude': '/assets/blog/medicamentos-alto-custo-19.jpg',
  'home-care-pelo-plano-de-saude': '/assets/blog/home-care-plano-18.jpg',
  'tratamento-para-trombofilia': '/assets/blog/trombofilia-enox.jpg',
  'imunoterapia': '/assets/blog/imunoterapia.jpg',
  'tratamento-com-canabidiol': '/assets/blog/canabidiol-qualidade.jpg',
  'tratamento-de-atrofia-muscular-espinhal': '/assets/blog/atrofia-muscular-remedio.jpg',
  'negativa-de-plano-de-saude-para-tratamento-de-cancer-de-mama': '/assets/blog/cancer-mama-plano.jpg',
  'tratamento-para-cancer-de-mama': '/assets/blog/cancer-mama-tratamento.jpg',
  'processar-o-plano-de-saude': '/assets/blog/processar-plano-indenizacao.jpg',
  'garanta-sua-saude-sem-gastar-nada-descubra-como-obter-seu-medicamento-gratuitamente-pelo-sus': '/assets/blog/medicamento-sus-garanta.jpg',
  'realize-a-cirurgia-bariatrica-tendo-todo-o-apoio-do-seu-plano-de-saude': '/assets/blog/bariatrica.jpg',
  'como-gerenciar-os-desafios-da-diabetes-tipo-1-estrategias-completas-e-apoio': '/assets/blog/diabetes.jpg',
  'defenda-os-seus-direitos-apos-uma-negativa-indevida-dos-planos': '/assets/blog/negado.jpg',
  'tratamento-para-cancer-entenda-seus-direitos': '/assets/blog/tratamento-cancer.jpg',
  'transforme-erros-medicos-em-indenizacoes': '/assets/blog/erro-medico.jpg',
  'medico-e-hospital-terao-que-indenizar-paciente-por-cirurgia-malsucedida': '/assets/blog/cirurgia-malsucedida.jpg',
}

const defaultThumbnail = '/assets/blog/negado.jpg'

export function getBlogThumbnail(slug: string, categories?: string[]): string {
  if (thumbnailMap[slug]) return thumbnailMap[slug]
  return defaultThumbnail
}
