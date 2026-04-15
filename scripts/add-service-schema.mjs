#!/usr/bin/env node
// Idempotent: add specific `Service` schema entry to each LP's @graph.
// LPs already have LegalService (firm-scoped); this adds Service (offering-scoped)
// with provider: { @id: 'https://barphoff.com/#organization' } to link to the
// Organization defined in app/layout.tsx.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

const services = {
  'negativa-cirurgia': {
    name: 'Reversão de negativa de cirurgia pelo plano de saúde',
    description:
      'Ação judicial com pedido de liminar para garantir a realização de cirurgia negada pelo plano de saúde.',
    serviceType: 'Negativa de Cirurgia',
  },
  'negativa-plano-de-saude': {
    name: 'Ação contra negativa de plano de saúde',
    description:
      'Atuação jurídica contra recusa de cobertura de tratamentos, internações, cirurgias e medicamentos pelo plano de saúde.',
    serviceType: 'Negativa de Plano de Saúde',
  },
  'negativa-do-sus': {
    name: 'Ação contra negativa do SUS',
    description:
      'Ação judicial para garantir medicamentos, exames, cirurgias e tratamentos negados pela rede pública de saúde.',
    serviceType: 'Negativa do SUS',
  },
  'home-care': {
    name: 'Ação judicial para home care',
    description:
      'Garantia de atendimento domiciliar (home care) negado pelo plano de saúde ou SUS, com pedido de liminar.',
    serviceType: 'Tratamento Home Care',
  },
  'tratamento-oncologico': {
    name: 'Ação judicial para tratamento oncológico',
    description:
      'Garantia de acesso a quimioterapia, radioterapia, imunoterapia e medicamentos oncológicos negados pelo plano ou SUS.',
    serviceType: 'Tratamento Oncológico',
  },
  'medicamento-alto-custo': {
    name: 'Ação para medicamento de alto custo',
    description:
      'Ação judicial para obter medicamentos de alto custo negados pelo SUS ou plano de saúde, com pedido de liminar.',
    serviceType: 'Medicamentos de Alto Custo',
  },
  'direito-a-saude': {
    name: 'Consultoria em Direito da Saúde',
    description:
      'Atuação jurídica especializada em Direito da Saúde envolvendo plano de saúde, SUS, erros médicos e direitos do paciente.',
    serviceType: 'Direito da Saúde',
  },
  'revisao-restituicao': {
    name: 'Revisão e restituição de mensalidades de plano de saúde',
    description:
      'Ação judicial para revisão de reajustes abusivos e restituição de valores pagos a mais nas mensalidades de plano de saúde.',
    serviceType: 'Revisão e Restituição',
  },
}

let modified = 0

for (const [slug, meta] of Object.entries(services)) {
  const file = path.join(publicDir, slug, 'index.html')
  if (!fs.existsSync(file)) {
    console.warn(`skip: ${slug} (missing)`)
    continue
  }

  let html = fs.readFileSync(file, 'utf8')

  // Idempotency: skip if Service@id already exists
  const serviceId = `https://barphoff.com/${slug}#offer`
  if (html.includes(serviceId)) {
    console.log(`ok: ${slug} (already has Service)`)
    continue
  }

  const serviceEntry = {
    '@type': 'Service',
    '@id': serviceId,
    name: meta.name,
    description: meta.description,
    serviceType: meta.serviceType,
    provider: { '@id': 'https://barphoff.com/#organization' },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    url: `https://barphoff.com/${slug}`,
  }

  // Insert before the closing `]` of the @graph (handle CRLF or LF)
  const markerRegex = /      \]\r?\n    \}\r?\n    <\/script>/
  if (!markerRegex.test(html)) {
    console.warn(`skip: ${slug} (marker not found)`)
    continue
  }

  const pretty = JSON.stringify(serviceEntry, null, 2)
    .split('\n')
    .map((ln, i) => (i === 0 ? '        ' + ln : '        ' + ln))
    .join('\n')

  const replacement = `,\n${pretty}\n      ]\n    }\n    </script>`
  html = html.replace(markerRegex, replacement)

  fs.writeFileSync(file, html, 'utf8')
  console.log(`added: ${slug}`)
  modified++
}

console.log(`\nDone. ${modified} file(s) modified.`)
