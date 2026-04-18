# TODO — Dados institucionais pendentes (cliente)

Este arquivo lista dados do escritório que ainda não foram confirmados e que
devem ser preenchidos pelo briefing do cliente. Hoje o site renderiza usando
valores plausíveis, mas não auditados. Itens marcados **CRÍTICO** afetam
schema.org/SEO; **MÉDIO** afeta fachada institucional; **BAIXO** é cosmético.

> **Política**: nada invertido ou inventado pela equipe de desenvolvimento.
> Quando em dúvida, o texto atual foi mantido (se já existia) ou removido
> (se era claim sem fonte, como "5 estrelas"/"47 reviews").

---

## 1. Estatísticas de marca

| Campo | Valor atual no site | Status |
|---|---|---|
| Anos de atuação | "17+ anos" / "mais de 17 anos" | **CONFIRMAR** — aparece em app/layout.tsx, components/Footer.tsx, app/sobre/page.tsx, e 9 LPs. Verificar se o marco real é 17 anos ou outro. |
| Casos atendidos | "5.137 casos atendidos em todo o Brasil" | **CONFIRMAR** — claim existe apenas em `public/negativa-plano-de-saude/index.html:193`. Se for inventado/desatualizado, remover ou ajustar para número real. |
| Fundação | `foundingDate: '2009'` | **CONFIRMAR** — em `app/layout.tsx:119`. |
| Nota Google (aggregate) | REMOVIDO (não há fonte) | Reintegrar apenas com Google Business Profile real. |

**Ação**: Quando o cliente confirmar, atualizar os 3 arquivos acima com os
números oficiais. Se forem mantidos os atuais, basta responder "ok".

---

## 2. Identificação legal (CRÍTICO p/ schema LegalService)

| Campo | Status atual | Arquivos |
|---|---|---|
| CNPJ | **AUSENTE** em todo o repo | `app/layout.tsx` schema + `components/Footer.tsx` rodapé |
| Razão social completa | "Barp.Hoff.Costa Advogados" — confirmar se é razão social ou nome fantasia | `app/layout.tsx`, `app/sobre/page.tsx` |
| OAB nº Dra. Alexandra Barp | Apenas "OAB/PR" (sem número) | `app/sobre/page.tsx:406`, `app/layout.tsx:218` schema Person |
| OAB nº Dra. Jessica Hoff | Apenas "OAB/PR" (sem número) | `app/sobre/page.tsx:453`, `app/layout.tsx:261` schema Person |
| OAB nº Dr(a). Costa | **AUSENTE** — o nome consta só no branding | investigar se há terceiro sócio a incluir em Person schema |
| Endereço completo (CEP, logradouro, bairro, cidade, UF) | **AUSENTE** em schema | `app/layout.tsx` (address JSON-LD), `components/Footer.tsx`, `app/contato/page.tsx` |

**Ação**: cliente envia briefing → preencher JSON-LD + rodapé + contato.

---

## 3. Contatos oficiais

### WhatsApp — inconsistência detectada

- `components/WhatsAppButton.tsx:23` → `+55 45 3027-3100` (Foz do Iguaçu)
- `components/Footer.tsx:193` → `+55 45 3027-3100` (bot. principal)
- `components/Footer.tsx:233` → `+55 21 97726-6062` (bot. secundário)
- Todas as 9 LPs em `public/` → `+55 45 3027-3100`
- `app/contato/page.tsx` — verificar

**CONFIRMAR** com cliente: qual é o WhatsApp oficial? O número do Rio
(21 97726-6062) é legítimo ou deve ser removido?

### Telefone fixo

- Não localizei número fixo específico. Verificar se há linha principal
  e se deve entrar no schema (`telephone`).

### E-mail

- Buscar ocorrências de `advogados.bhc@gmail.com`. Se presente em
  `politica-de-privacidade` como DPO/contato, **CONFIRMAR** que é
  o e-mail oficial para dados pessoais (LGPD).

### Horário de atendimento

- Não está no schema `openingHours`. Se o cliente tem horário fixo
  (ex.: seg–sex 9h–18h), preencher em `app/layout.tsx` schema
  `LegalService.openingHoursSpecification`.

---

## 4. Redes sociais — inconsistência detectada

| Rede | `app/layout.tsx` | `components/Footer.tsx` | Status |
|---|---|---|---|
| Instagram | `instagram.com/saudebhc/` | `instagram.com/saudebhc/` | ✓ consistente |
| Facebook | `facebook.com/barphoff` | `facebook.com/profile.php?id=61550826945465` | **INCONSISTENTE** |
| LinkedIn | `linkedin.com/company/barphoff` | `linkedin.com/company/barp-hoff-costa-advocacia-especializada/` | **INCONSISTENTE** |
| YouTube | ausente | ausente | confirmar se existe |
| TikTok | ausente | ausente | confirmar se existe |

**Ação**: cliente confirma as URLs reais. Depois, uniformizar schema
(`sameAs`) e Footer para apontarem para o mesmo perfil.

---

## 5. Equipe / Pessoas (schema Person)

`app/layout.tsx` declara duas `Person`: Alexandra Barp e Jessica Hoff.

Campos faltando em ambas:
- `identifier` (OAB)
- `alumniOf` (graduação)
- `hasCredential` (pós-graduação, especializações)
- `sameAs` (LinkedIn pessoal, Lattes, Instagram pessoal distinto do @saudebhc)
- `image` (foto profissional oficial — verificar se `public/assets/BARP.jpg`
  e `public/assets/JESSICA.jpg` existem e têm autorização de uso)

**Ação**: briefing deve trazer CV resumido de cada sócia + fotos oficiais.

Também **CONFIRMAR**: há uma terceira sócia/sócio "Costa" (nome da marca
é Barp.Hoff.Costa) ou é só uma designação comercial herdada?

---

## 6. Endereço físico / Google Place

`app/contato/page.tsx` referencia mapa Google embutido (verificar se é
iframe direto ou componente dinâmico).

Campos faltando para schema `LegalService`:
- `address.streetAddress`
- `address.addressLocality`
- `address.addressRegion`
- `address.postalCode`
- `address.addressCountry` (ex.: "BR")
- `geo.latitude` / `geo.longitude` (lat/long reais)
- `hasMap` (URL do Google Maps com Place ID)

**Ação**: confirmar se é escritório único em Foz do Iguaçu ou multi-filial.

---

## 7. Itens dependentes de decisão do cliente

- [ ] Reintegrar Trustindex / Google Reviews ao vivo? (hoje removido)
- [ ] Adicionar vídeo institucional (YouTube) no hero de `/sobre`?
- [ ] Publicar depoimentos reais com consentimento escrito (LGPD)?
- [ ] Adicionar página de carreiras / faleconosco@?
- [ ] Ativar formulário de contato com backend (hoje só WhatsApp)?

---

## 8. Checklist de aplicação (após receber briefing)

Quando o cliente enviar os dados, aplicar em ordem:

1. `app/layout.tsx` — atualizar schema Organization/LegalService com
   CNPJ, endereço completo, telefone, horário, sameAs canônico.
2. `app/layout.tsx` — atualizar os 2 schema Person com OAB + credenciais.
3. `components/Footer.tsx` — uniformizar URLs sociais e WhatsApp.
4. `app/sobre/page.tsx` — OAB completo ao lado de cada nome.
5. `app/contato/page.tsx` — endereço com PlaceID, horário real.
6. 9 LPs em `public/` — se WhatsApp mudar, atualizar todas.
7. Re-rodar `node scripts/wp-audit.mjs` para conferir.
8. Build + deploy só após OK do cliente.

---

_Gerado automaticamente durante a Fase 7 do manual de paridade WP→Next._
_Política: não modificar valores sem autorização explícita do cliente._
