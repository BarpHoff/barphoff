/**
 * Maps blog post categories to practice area pages for internal linking.
 */
export const categoryToArea: Record<string, { label: string; href: string }> = {
  'Planos de Saúde': { label: 'Negativa de Plano de Saúde', href: '/negativa-plano-de-saude' },
  'SUS': { label: 'Negativa do SUS', href: '/negativa-do-sus' },
  'Medicamentos': { label: 'Medicamento de Alto Custo', href: '/medicamento-alto-custo' },
  'Tratamentos': { label: 'Tratamento Oncológico', href: '/tratamento-oncologico' },
  'Cirurgias': { label: 'Negativa de Cirurgia', href: '/negativa-cirurgia' },
  'Home Care': { label: 'Home Care pelo Plano', href: '/home-care' },
  'Indenizações': { label: 'Negativa de Plano de Saúde', href: '/negativa-plano-de-saude' },
}
