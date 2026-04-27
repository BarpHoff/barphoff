import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de uso do site Barp.Hoff.Costa Advogados (barphoff.com). Conteudo informativo, direitos autorais, limitacao de responsabilidade e foro de eleicao.',
  openGraph: {
    title: 'Termos de Uso | Barp.Hoff.',
    description:
      'Termos de uso do site Barp.Hoff.Costa Advogados: caráter informativo, direitos autorais e responsabilidades.',
    url: 'https://www.barphoff.com/termos-de-uso',
    images: [
      { url: '/assets/images/og-cover.jpg', width: 1200, height: 630, alt: 'Barp.Hoff.Costa Advogados' },
    ],
  },
  alternates: { canonical: 'https://www.barphoff.com/termos-de-uso' },
}

/* ================================================================== */
/*  TERMOS DE USO PAGE                                                  */
/*  TO-REVIEW: revisar texto integralmente com advogado responsavel    */
/*  antes do push (Provimento OAB 205/2021 + LGPD).                    */
/* ================================================================== */
export default function TermosDeUsoPage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="flex h-[300px] items-center justify-center bg-brand">
        <h1 className="px-4 text-center font-heading text-4xl font-bold text-white md:text-5xl">
          Termos de Uso
        </h1>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-6 text-sm italic leading-relaxed text-gray-500">
            &Uacute;ltima atualiza&ccedil;&atilde;o: abril de 2026.
          </p>

          {/* 1. Apresentacao */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            1. Apresenta&ccedil;&atilde;o
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Este site (
            <a
              href="https://www.barphoff.com"
              className="text-brand underline hover:text-brand-dark"
            >
              https://www.barphoff.com
            </a>
            ) &eacute; mantido pela <strong>Barp.Hoff.Costa Advocacia Especializada</strong>,
            sociedade de advogados regularmente inscrita na Ordem dos Advogados do Brasil
            (OAB/PR). O acesso e a navega&ccedil;&atilde;o no site implicam a aceita&ccedil;&atilde;o
            integral destes Termos de Uso e da{' '}
            <Link href="/politica-de-privacidade" className="text-brand underline hover:text-brand-dark">
              Pol&iacute;tica de Privacidade
            </Link>
            .
          </p>

          {/* 2. Carater informativo */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            2. Car&aacute;ter informativo do conte&uacute;do
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Todo o conte&uacute;do publicado neste site &mdash; incluindo artigos,
            p&aacute;ginas, materiais educativos, perguntas frequentes e respostas
            &mdash; tem <strong>finalidade exclusivamente informativa</strong> e n&atilde;o
            constitui aconselhamento jur&iacute;dico, parecer, consulta ou opini&atilde;o
            legal sobre casos concretos.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            A an&aacute;lise de cada situa&ccedil;&atilde;o requer estudo individualizado
            do contrato de plano de sa&uacute;de, da documenta&ccedil;&atilde;o m&eacute;dica,
            da jurisprud&ecirc;ncia aplic&aacute;vel e das particularidades f&aacute;ticas
            do caso. <strong>Nenhum resultado jur&iacute;dico pode ser garantido
            previamente</strong> (Provimento OAB n&ordm; 205/2021).
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            Decis&otilde;es jur&iacute;dicas tomadas exclusivamente com base no conte&uacute;do
            deste site, sem consulta profissional, s&atilde;o de responsabilidade integral
            do usu&aacute;rio. Para orienta&ccedil;&atilde;o personalizada, entre em contato
            pelos canais oficiais.
          </p>

          {/* 3. Propriedade intelectual */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            3. Propriedade intelectual
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Todo o conte&uacute;do deste site &mdash; textos, imagens, v&iacute;deos,
            logotipos, layout, c&oacute;digo-fonte e elementos gr&aacute;ficos &mdash;
            &eacute; de propriedade da Barp.Hoff.Costa Advocacia Especializada ou
            licenciado a ela e est&aacute; protegido pela Lei n&ordm; 9.610/1998 (Lei de
            Direitos Autorais) e pela Lei n&ordm; 9.279/1996 (Lei da Propriedade Industrial).
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            &Eacute; permitida a leitura, o compartilhamento de links e a cita&ccedil;&atilde;o
            breve com indica&ccedil;&atilde;o expl&iacute;cita da fonte. <strong>&Eacute;
            vedada</strong> a reprodu&ccedil;&atilde;o integral, a c&oacute;pia, a
            redistribui&ccedil;&atilde;o em outros canais ou o uso comercial sem
            autoriza&ccedil;&atilde;o pr&eacute;via, escrita e expressa.
          </p>

          {/* 4. Limitacao de responsabilidade */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            4. Limita&ccedil;&atilde;o de responsabilidade
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            O site &eacute; disponibilizado &ldquo;como est&aacute;&rdquo;. A
            Barp.Hoff.Costa empenha-se em manter o conte&uacute;do correto e atualizado,
            mas <strong>n&atilde;o garante</strong> que esteja livre de erros, omiss&otilde;es
            ou desatualiza&ccedil;&otilde;es decorrentes de mudan&ccedil;as legislativas,
            jurisprudenciais ou regulat&oacute;rias posteriores &agrave; publica&ccedil;&atilde;o.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            A Barp.Hoff.Costa <strong>n&atilde;o se responsabiliza</strong> por:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-2 leading-relaxed text-gray-700">
            <li>
              decis&otilde;es jur&iacute;dicas, financeiras ou pessoais tomadas com
              base no conte&uacute;do informativo do site, sem consulta profissional;
            </li>
            <li>
              danos diretos, indiretos, lucros cessantes ou perda de chance decorrentes
              de uso, mau uso ou impossibilidade de acesso ao site;
            </li>
            <li>
              conte&uacute;dos de sites de terceiros vinculados por hyperlinks;
            </li>
            <li>
              indisponibilidade tempor&aacute;ria do site por manuten&ccedil;&atilde;o,
              falhas de conex&atilde;o ou eventos de for&ccedil;a maior.
            </li>
          </ul>

          {/* 5. Atendimento e contato */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            5. Atendimento e canais oficiais
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            O atendimento jur&iacute;dico &eacute; prestado <strong>somente</strong> ap&oacute;s
            an&aacute;lise da situa&ccedil;&atilde;o concreta e celebra&ccedil;&atilde;o de
            contrato escrito de presta&ccedil;&atilde;o de servi&ccedil;os. Mensagens
            enviadas via formul&aacute;rio, e-mail ou WhatsApp <strong>n&atilde;o estabelecem
            rela&ccedil;&atilde;o cliente-advogado</strong> at&eacute; a forma&ccedil;&atilde;o
            do contrato.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            Os canais oficiais de contato s&atilde;o aqueles indicados no rodap&eacute; do
            site e na p&aacute;gina{' '}
            <Link href="/contato" className="text-brand underline hover:text-brand-dark">
              Contato
            </Link>
            . N&atilde;o nos responsabilizamos por contatos efetuados em canais n&atilde;o
            oficiais que utilizem indevidamente nossa marca.
          </p>

          {/* 6. Prote&ccedil;&atilde;o de dados */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            6. Prote&ccedil;&atilde;o de dados pessoais (LGPD)
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            O tratamento de dados pessoais coletados por meio do site observa a Lei
            n&ordm; 13.709/2018 (Lei Geral de Prote&ccedil;&atilde;o de Dados Pessoais &ndash;
            LGPD) e est&aacute; descrito de forma detalhada na nossa{' '}
            <Link href="/politica-de-privacidade" className="text-brand underline hover:text-brand-dark">
              Pol&iacute;tica de Privacidade
            </Link>
            , que integra estes Termos de Uso para todos os fins.
          </p>

          {/* 7. Altera&ccedil;&otilde;es */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            7. Altera&ccedil;&otilde;es destes Termos
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            A Barp.Hoff.Costa pode revisar estes Termos de Uso a qualquer tempo, com
            a devida indica&ccedil;&atilde;o da data da &uacute;ltima atualiza&ccedil;&atilde;o.
            A continuidade do uso do site ap&oacute;s a publica&ccedil;&atilde;o de
            altera&ccedil;&otilde;es implica concord&acirc;ncia com a vers&atilde;o
            vigente.
          </p>

          {/* 8. Foro e legisla&ccedil;&atilde;o aplic&aacute;vel */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            8. Foro e legisla&ccedil;&atilde;o aplic&aacute;vel
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Estes Termos s&atilde;o regidos pelas leis da Rep&uacute;blica Federativa do
            Brasil. Fica eleito o foro da Comarca de Foz do Igua&ccedil;u/PR para dirimir
            quaisquer controv&eacute;rsias decorrentes do uso deste site, salvo nos casos
            em que a lei estabelecer foro privilegiado em favor do consumidor.
          </p>

          {/* Contato */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            9. Contato
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            D&uacute;vidas sobre estes Termos de Uso podem ser encaminhadas para{' '}
            <a
              href="mailto:advogados.bhc@gmail.com"
              className="text-brand underline hover:text-brand-dark"
            >
              advogados.bhc@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
