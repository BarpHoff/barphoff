import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do site Barp.Hoff.Costa Advogados (barphoff.com). Saiba como tratamos seus dados pessoais conforme a LGPD.',
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Política de Privacidade | Barp.Hoff.',
    description: 'Política de privacidade do site Barp.Hoff.Costa Advogados conforme a LGPD.',
    url: 'https://barphoff.com/politica-de-privacidade',
    images: [{ url: '/assets/images/og-cover.jpg', width: 1200, height: 630, alt: 'Barp.Hoff.Costa Advogados' }],
  },
  alternates: { canonical: 'https://barphoff.com/politica-de-privacidade' },
}

/* ================================================================== */
/*  POL\u00cdTICA DE PRIVACIDADE (PRIVACY POLICY) PAGE                     */
/* ================================================================== */
export default function PoliticaDePrivacidadePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO BANNER                                               */}
      {/* ============================================================ */}
      <section className="flex h-[300px] items-center justify-center bg-brand">
        <h1 className="px-4 text-center font-heading text-4xl font-bold text-white md:text-5xl">
          Pol&iacute;tica de Privacidade
        </h1>
      </section>

      {/* ============================================================ */}
      {/* 2. CONTENT                                                   */}
      {/* ============================================================ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Quem somos */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Quem somos
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            O nosso endere&ccedil;o do site &eacute;:{' '}
            <a
              href="https://barphoff.com"
              className="text-brand underline hover:text-brand-dark"
            >
              https://barphoff.com
            </a>
            .
          </p>

          {/* Coment&aacute;rios */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Coment&aacute;rios
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Quando os visitantes deixam coment&aacute;rios no site, coletamos os
            dados mostrados no formul&aacute;rio de coment&aacute;rios,
            al&eacute;m do endere&ccedil;o de IP e do user agent do navegador do
            visitante, para auxiliar na detec&ccedil;&atilde;o de spam.
          </p>

          {/* M&iacute;dia */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            M&iacute;dia
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Se voc&ecirc; enviar imagens para o site, evite enviar as que
            contenham dados de localiza&ccedil;&atilde;o incorporados (EXIF GPS).
            Visitantes do site podem fazer o download e extrair quaisquer dados
            de localiza&ccedil;&atilde;o de imagens do site.
          </p>

          {/* Cookies */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Cookies
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Se voc&ecirc; deixar um coment&aacute;rio no nosso site,
            poder&aacute; optar por salvar seu nome, endere&ccedil;o de e-mail e
            site nos cookies. Estes s&atilde;o para sua conveni&ecirc;ncia para
            que voc&ecirc; n&atilde;o precise preencher seus dados novamente
            quando deixar outro coment&aacute;rio. Esses cookies ir&atilde;o
            durar um ano.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            Se voc&ecirc; visitar nossa p&aacute;gina de login, definiremos um
            cookie tempor&aacute;rio para determinar se seu navegador aceita
            cookies. Este cookie n&atilde;o cont&eacute;m dados pessoais e
            &eacute; descartado quando voc&ecirc; fecha o navegador.
          </p>

          {/* Conte&uacute;do incorporado de outros sites */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Conte&uacute;do incorporado de outros sites
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Artigos neste site podem incluir conte&uacute;do incorporado como,
            por exemplo, v&iacute;deos, imagens, artigos, etc. Conte&uacute;do
            incorporado de outros sites se comporta da mesma forma como se o
            visitante estivesse visitando o outro site.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            Esses sites podem coletar dados sobre voc&ecirc;, usar cookies,
            incorporar rastreamento adicional de terceiros e monitorar sua
            intera&ccedil;&atilde;o com esse conte&uacute;do incorporado,
            incluindo o rastreamento de sua intera&ccedil;&atilde;o com o
            conte&uacute;do incorporado se voc&ecirc; tiver uma conta e estiver
            conectado ao site.
          </p>

          {/* Com quem compartilhamos seus dados */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Com quem compartilhamos seus dados
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Se voc&ecirc; solicitar uma redefini&ccedil;&atilde;o de senha, seu
            endere&ccedil;o de IP ser&aacute; inclu&iacute;do no e-mail de
            redefini&ccedil;&atilde;o.
          </p>

          {/* Por quanto tempo mantemos os seus dados */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Por quanto tempo mantemos os seus dados
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Se voc&ecirc; deixar um coment&aacute;rio, o coment&aacute;rio e
            seus metadados s&atilde;o retidos indefinidamente. Isso &eacute;
            para que possamos reconhecer e aprovar quaisquer coment&aacute;rios
            de acompanhamento automaticamente ao inv&eacute;s de mant&ecirc;-los
            em uma fila de modera&ccedil;&atilde;o.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            Para usu&aacute;rios que se registram no nosso site, tamb&eacute;m
            armazenamos as informa&ccedil;&otilde;es pessoais que eles fornecem
            em seus perfis de usu&aacute;rio. Todos os usu&aacute;rios podem
            ver, editar ou excluir suas informa&ccedil;&otilde;es pessoais a
            qualquer momento (exceto que n&atilde;o podem alterar o nome de
            usu&aacute;rio). Os administradores do site tamb&eacute;m podem ver
            e editar essas informa&ccedil;&otilde;es.
          </p>

          {/* Quais os seus direitos sobre seus dados */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Quais os seus direitos sobre seus dados
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Se voc&ecirc; tiver uma conta neste site ou deixou coment&aacute;rios,
            pode solicitar um arquivo exportado dos dados pessoais que mantemos
            sobre voc&ecirc;, incluindo quaisquer dados que nos tenha fornecido.
            Voc&ecirc; tamb&eacute;m pode solicitar que apaguemos qualquer dado
            pessoal que mantemos sobre voc&ecirc;. Isso n&atilde;o inclui nenhum
            dado que somos obrigados a manter para fins administrativos, legais
            ou de seguran&ccedil;a.
          </p>

          {/* Para onde enviamos seus dados */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Para onde enviamos seus dados
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Coment&aacute;rios dos visitantes podem ser verificados por meio de
            um servi&ccedil;o autom&aacute;tico de detec&ccedil;&atilde;o de
            spam.
          </p>
        </div>
      </section>
    </>
  )
}
