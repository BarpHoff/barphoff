// Lightweight blog post metadata for listing pages (no HTML content)
// Full content lives in blog-data.ts and is only loaded on individual post pages

export interface BlogPostMeta {
  title: string
  slug: string
  date: string
  categories: string[]
  excerpt: string
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    title: "Como Processar um Plano de Sa\u00fade? Saiba Como Agir!",
    slug: "como-processar-um-plano-de-saude",
    date: "2025-02-14",
    categories: ["Planos de Sa\u00fade"],
    excerpt: "Nada \u00e9 mais frustrante do que pagar um plano de sa\u00fade por anos e, no momento que mais precisa, ter um tratamento ou exame negado. Se voc\u00ea est\u00e1 enfrentando essa situa\u00e7\u00e3o, saiba que processar um plano d..."
  },
  {
    title: "Quando Posso Processar o Plano de Sa\u00fade? Descubra!",
    slug: "processar-o-plano-de-saude-2",
    date: "2025-02-14",
    categories: ["Blog", "Planos de Sa\u00fade"],
    excerpt: "Saiba que voc\u00ea pode processar o plano de sa\u00fade em alguns casos, neste artigo, iremos esclarecer quais s\u00e3o eles e como dar entrada no processo com a nossa ajuda. Continue lendo."
  },
  {
    title: "Negativa de Plano de Sa\u00fade: O Que Fazer Quando Seu Direito \u00e9 Recusado?",
    slug: "negativa-de-plano-de-saude",
    date: "2025-02-13",
    categories: ["Blog", "Planos de Sa\u00fade"],
    excerpt: "Voc\u00ea sabia que a negativa de plano de sa\u00fade pode colocar sua sa\u00fade em risco? Muitas pessoas enfrentam a frustra\u00e7\u00e3o de ter tratamentos, cirurgias ou medicamentos negados, mesmo ap\u00f3s pagarem regularment..."
  },
  {
    title: "Tratamento Home Care Pelo SUS? \u00c9 Poss\u00edvel?",
    slug: "tratamento-home-care-pelo-sus",
    date: "2025-02-10",
    categories: ["Blog", "SUS"],
    excerpt: "O servi\u00e7o de Home Care \u00e9 uma modalidade de assist\u00eancia m\u00e9dica prestada na resid\u00eancia do paciente, garantindo cuidados hospitalares sem a necessidade de interna\u00e7\u00e3o prolongada."
  },
  {
    title: "Tratamento Home Care Pelo Plano de Sa\u00fade! Voc\u00ea tem Direito SIM!",
    slug: "tratamento-home-care-pelo-plano-de-saude",
    date: "2025-02-10",
    categories: ["Blog", "Planos de Sa\u00fade", "Tratamentos"],
    excerpt: "O acesso ao tratamento Home Care pelo plano de sa\u00fade \u00e9 um direito essencial para pacientes que necessitam de cuidados m\u00e9dicos cont\u00ednuos sem precisar permanecer internados."
  },
  {
    title: "Cirurgia Reparadora pelo Plano de Sa\u00fade: \u00c9 Poss\u00edvel SIM!",
    slug: "cirurgia-reparadora-pelo-plano-de-saude",
    date: "2025-02-06",
    categories: ["Blog", "Cirurgias"],
    excerpt: "A cirurgia reparadora pelo plano de sa\u00fade \u00e9 poss\u00edvel, veja como proceder em caso de uma negativa do plano!"
  },
  {
    title: "Imunoterapia pelo SUS: Sim, Voc\u00ea Tem Direito!",
    slug: "imunoterapia-pelo-sus",
    date: "2025-02-05",
    categories: ["Blog", "SUS"],
    excerpt: "Imunoterapia pelo SUS \u00e9 a esperan\u00e7a de muitos pacientes que lutam contra o c\u00e2ncer, mas o acesso ao tratamento ainda gera d\u00favidas e frustra\u00e7\u00f5es."
  },
  {
    title: "Imunoterapia pelo Plano de Sa\u00fade: O Que Fazer Para Garantir Seu Direito?",
    slug: "imunoterapia-pelo-plano-de-saude",
    date: "2025-02-03",
    categories: ["Blog", "Planos de Sa\u00fade"],
    excerpt: "A imunoterapia pelo plano de sa\u00fade \u00e9 um direito do paciente! Caso seus direitos sejam negados, fale com o nosso escrit\u00f3rio, j\u00e1 ajudamos muitos pacientes!"
  },
  {
    title: "Home Care pelo Plano de Sa\u00fade? Voc\u00ea tem direito!",
    slug: "home-care-pelo-plano-de-saude",
    date: "2025-01-08",
    categories: ["Planos de Sa\u00fade"],
    excerpt: "Descubra como voc\u00ea pode solicitar Home Care atrav\u00e9s do seu plano de sa\u00fade. Aprenda sobre os direitos do paciente e como agir se o servi\u00e7o for negado. Inclui dicas pr\u00e1ticas para iniciar tratamentos dom..."
  },
  {
    title: "Tratamento para Trombofilia: Como conseguir o Enoxaparina?",
    slug: "tratamento-para-trombofilia",
    date: "2025-01-05",
    categories: ["Medicamentos", "Planos de Sa\u00fade", "SUS", "Tratamentos"],
    excerpt: "Saiba como a Enoxaparina \u00e9 utilizada no tratamento de trombofilia, incluindo informa\u00e7\u00f5es sobre a cobertura obrigat\u00f3ria pelo SUS e planos de sa\u00fade. Descubra seus direitos e como solicitar o medicamento..."
  },
  {
    title: "Tratamento com Canabidiol: Como conseguir?",
    slug: "tratamento-com-canabidiol",
    date: "2025-01-05",
    categories: ["Medicamentos", "Planos de Sa\u00fade", "Tratamentos"],
    excerpt: "Explore como a cannabis medicinal est\u00e1 transformando a gest\u00e3o de doen\u00e7as cr\u00f4nicas e neurol\u00f3gicas, incluindo o procedimento para obten\u00e7\u00e3o do tratamento via SUS ou plano de sa\u00fade."
  },
  {
    title: "Tratamento de Atrofia Muscular Espinhal: Receba o Rem\u00e9dio Mais Caro do Mundo!",
    slug: "tratamento-de-atrofia-muscular-espinhal",
    date: "2025-01-04",
    categories: ["Medicamentos", "Planos de Sa\u00fade", "Tratamentos"],
    excerpt: "Descubra como pacientes podem acessar Zolgensma, o tratamento mais caro do mundo para Atrofia Muscular Espinhal Tipo I, atrav\u00e9s de cobertura do SUS e planos de sa\u00fade. Inclui diretrizes para obten\u00e7\u00e3o d..."
  },
  {
    title: "Cobertura de Medicamentos de Alto Custo pelo Plano de Sa\u00fade? Como garantir?",
    slug: "cobertura-de-medicamentos-de-alto-custo-pelo-plano-de-saude",
    date: "2025-01-04",
    categories: ["Medicamentos", "Planos de Sa\u00fade"],
    excerpt: "Explore estrat\u00e9gias eficazes para obter cobertura de seu plano de sa\u00fade para medicamentos de alto custo. Saiba quais documentos voc\u00ea precisa e como proceder em caso de negativa."
  },
  {
    title: "Negativa de Home Care pelo Plano de Sa\u00fade: N\u00e3o aceitamos isso!",
    slug: "negativa-de-home-care",
    date: "2025-01-04",
    categories: ["Planos de Sa\u00fade", "Tratamentos"],
    excerpt: "Descubra passos eficazes para contestar a negativa do seu plano de sa\u00fade para cobertura de Home Care. Saiba quais documentos s\u00e3o necess\u00e1rios e como a assist\u00eancia legal pode ajudar."
  },
  {
    title: "Doen\u00e7as Autoimunes: O Plano de Sa\u00fade e o SUS Cobre?",
    slug: "doencas-autoimunes",
    date: "2025-01-04",
    categories: ["Planos de Sa\u00fade", "Tratamentos"],
    excerpt: "As doen\u00e7as autoimunes s\u00e3o aquelas em que o sistema imunol\u00f3gico ataca o pr\u00f3prio organismo. Ele passa a confundir algumas estruturas com agentes invasores e acaba produzindo anticorpos contra \u00f3rg\u00e3os e t..."
  },
  {
    title: "Imunoterapia \u00e9 Eficaz Contra o C\u00e2ncer? Saiba Tudo Aqui!",
    slug: "imunoterapia",
    date: "2025-01-02",
    categories: ["Planos de Sa\u00fade", "SUS", "Tratamentos"],
    excerpt: "O c\u00e2ncer \u00e9 uma das doen\u00e7as mais desafiadoras e devastadoras da atualidade. Durante d\u00e9cadas, os tratamentos tradicionais, como cirurgia, quimioterapia e radioterapia, t\u00eam sido a principal linha de defe..."
  },
  {
    title: "Como Processar o Plano de Sa\u00fade: Em que casos isso \u00e9 poss\u00edvel?",
    slug: "processar-o-plano-de-saude",
    date: "2024-06-03",
    categories: ["Indeniza\u00e7\u00f5es", "Planos de Sa\u00fade"],
    excerpt: "Seu direito \u00e0 indeniza\u00e7\u00e3o por danos morais \u00e9 uma ferramenta poderosa para proteger seus interesses quando seu plano de sa\u00fade nega exames essenciais."
  },
  {
    title: "Tratamento para C\u00e2ncer de Mama: Diagn\u00f3stico, Vit\u00f3ria e Esperan\u00e7a!",
    slug: "tratamento-para-cancer-de-mama",
    date: "2024-06-03",
    categories: ["Tratamentos"],
    excerpt: "Para muitas mulheres, esse diagn\u00f3stico \u00e9 o in\u00edcio de uma batalha que testar\u00e1 sua for\u00e7a e resili\u00eancia como nada mais. Neste artigo, mergulharemos na realidade do c\u00e2ncer de mama, explorando o diagn\u00f3stic..."
  },
  {
    title: "Negativa de Plano de Sa\u00fade para Tratamento de C\u00e2ncer de Mama: o que fazer?",
    slug: "negativa-de-plano-de-saude-para-tratamento-de-cancer-de-mama",
    date: "2024-06-03",
    categories: ["Planos de Sa\u00fade", "Tratamentos"],
    excerpt: "O c\u00e2ncer de mama \u00e9 algo que afeta milh\u00f5es de mulheres em todo o mundo. Um diagn\u00f3stico de c\u00e2ncer de mama pode ser avassalador, e a busca por tratamentos adequados \u00e9 uma prioridade fundamental."
  },
  {
    title: "Como Gerenciar os Desafios da Diabetes Tipo 1: Estrat\u00e9gias Completas e Apoio",
    slug: "como-gerenciar-os-desafios-da-diabetes-tipo-1-estrategias-completas-e-apoio",
    date: "2024-05-27",
    categories: ["Tratamentos"],
    excerpt: "Explore nosso guia abrangente para enfrentar os desafios di\u00e1rios da Diabetes Tipo 1, incluindo gerenciamento de insulina, dieta, exerc\u00edcios, e como acessar suporte m\u00e9dico e legal."
  },
  {
    title: "Defenda os seus direitos ap\u00f3s uma negativa indevida dos planos!",
    slug: "defenda-os-seus-direitos-apos-uma-negativa-indevida-dos-planos",
    date: "2024-05-27",
    categories: ["Planos de Sa\u00fade"],
    excerpt: "Voc\u00ea j\u00e1 sentiu como se estivessem \"jogando contra voc\u00ea\" no momento em que mais precisava de apoio m\u00e9dico? Infelizmente, essa situa\u00e7\u00e3o \u00e9 cada vez mais comum ao buscar exames ou tratamentos atrav\u00e9s dos ..."
  },
  {
    title: "Tratamento para C\u00e2ncer: Entenda seus direitos",
    slug: "tratamento-para-cancer-entenda-seus-direitos",
    date: "2024-05-27",
    categories: ["Tratamentos"],
    excerpt: "Uma doen\u00e7a que n\u00e3o conhece fronteiras, atingindo pessoas de todas as idades, ra\u00e7as e origens. Mas, ao lado dos avan\u00e7os cient\u00edficos e m\u00e9dicos, h\u00e1 uma hist\u00f3ria igualmente importante, a hist\u00f3ria dos caso..."
  },
  {
    title: "Transforme Erros M\u00e9dicos em Indeniza\u00e7\u00f5es",
    slug: "transforme-erros-medicos-em-indenizacoes",
    date: "2024-05-27",
    categories: ["Indeniza\u00e7\u00f5es"],
    excerpt: "Erros m\u00e9dicos ocorrem quando profissionais de sa\u00fade n\u00e3o seguem os padr\u00f5es esperados, causando danos aos pacientes."
  },
  {
    title: "M\u00e9dico e Hospital ter\u00e3o que Indenizar Paciente por Cirurgia Malsucedida",
    slug: "medico-e-hospital-terao-que-indenizar-paciente-por-cirurgia-malsucedida",
    date: "2024-05-27",
    categories: ["Indeniza\u00e7\u00f5es"],
    excerpt: "Neste artigo, discutiremos uma decis\u00e3o legal significativa que envolve um cirurgi\u00e3o pl\u00e1stico e um hospital que foram condenados a pagar indeniza\u00e7\u00e3o a uma paciente devido a erros em uma cirurgia est\u00e9ti..."
  },
  {
    title: "Garanta sua sa\u00fade sem gastar nada: Descubra como obter seu medicamento gratuitamente pelo SUS!",
    slug: "garanta-sua-saude-sem-gastar-nada-descubra-como-obter-seu-medicamento-gratuitamente-pelo-sus",
    date: "2024-05-15",
    categories: ["Medicamentos"],
    excerpt: "A medicina e a farm\u00e1cia evoluem constantemente para que as pessoas tenham acesso a tratamentos mais eficazes. Por isso, existe um aumento consider\u00e1vel de tratamentos e medicamentos que s\u00e3o oferecidos ..."
  },
  {
    title: "Realize a cirurgia Bari\u00e1trica tendo todo o apoio do seu plano de sa\u00fade!",
    slug: "realize-a-cirurgia-bariatrica-tendo-todo-o-apoio-do-seu-plano-de-saude",
    date: "2024-05-15",
    categories: ["Cirurgias"],
    excerpt: "A perda de peso \u00e9 uma das quest\u00f5es mais abordadas, j\u00e1 que muitas pessoas sofrem v\u00e1rios problemas em raz\u00e3o dessa situa\u00e7\u00e3o."
  },
]
