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
          <p className="mb-4 leading-relaxed text-gray-700">
            Uma sequ&ecirc;ncia anonimizada de caracteres criada a partir do seu
            e-mail (tamb&eacute;m chamada de <em>hash</em>) poder&aacute; ser
            enviada para o Gravatar para verificar se voc&ecirc; usa o
            servi&ccedil;o. A pol&iacute;tica de privacidade do Gravatar est&aacute;
            dispon&iacute;vel em{' '}
            <a
              href="https://automattic.com/privacy/"
              target="_blank"
              rel="noopener nofollow"
              className="text-brand underline hover:text-brand-dark"
            >
              automattic.com/privacy
            </a>
            . Depois da aprova&ccedil;&atilde;o do seu coment&aacute;rio, a foto
            do seu perfil fica vis&iacute;vel publicamente junto de seu
            coment&aacute;rio.
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
          <p className="mb-4 leading-relaxed text-gray-700">
            Quando voc&ecirc; acessa sua conta no site, tamb&eacute;m criamos
            v&aacute;rios cookies para salvar os dados da sua conta e suas
            escolhas de exibi&ccedil;&atilde;o de tela. Cookies de login
            s&atilde;o mantidos por dois dias e cookies de op&ccedil;&otilde;es
            de tela por um ano. Se voc&ecirc; selecionar &ldquo;Lembrar-me&rdquo;,
            seu acesso ser&aacute; mantido por duas semanas. Se voc&ecirc; se
            desconectar da sua conta, os cookies de login ser&atilde;o removidos.
          </p>
          <p className="mb-4 leading-relaxed text-gray-700">
            Se voc&ecirc; editar ou publicar um artigo, um cookie adicional
            ser&aacute; salvo no seu navegador. Este cookie n&atilde;o inclui
            nenhum dado pessoal e simplesmente indica o ID do post referente ao
            artigo que voc&ecirc; acabou de editar. Ele expira depois de 1 dia.
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

          {/* Seus direitos sob a LGPD */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Seus direitos sob a LGPD
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            A Lei Geral de Prote&ccedil;&atilde;o de Dados Pessoais (Lei
            n&ordm; 13.709/2018) assegura a voc&ecirc;, titular de dados
            pessoais, o direito de:
          </p>
          <ul className="mb-4 ml-6 list-disc space-y-2 leading-relaxed text-gray-700">
            <li>confirmar a exist&ecirc;ncia de tratamento dos seus dados;</li>
            <li>acessar os seus dados pessoais;</li>
            <li>
              corrigir dados incompletos, inexatos ou desatualizados;
            </li>
            <li>
              anonimizar, bloquear ou eliminar dados desnecess&aacute;rios ou
              excessivos;
            </li>
            <li>solicitar a portabilidade dos seus dados;</li>
            <li>eliminar dados tratados com base no seu consentimento;</li>
            <li>
              obter informa&ccedil;&atilde;o sobre com quem seus dados s&atilde;o
              compartilhados;
            </li>
            <li>revogar o consentimento a qualquer momento.</li>
          </ul>
          <p className="mb-4 leading-relaxed text-gray-700">
            Para exercer qualquer um desses direitos, entre em contato pelo
            e-mail indicado abaixo.
          </p>

          {/* Contato para quest&otilde;es de privacidade */}
          <h2 className="mt-10 mb-4 font-heading text-2xl font-bold text-brand">
            Contato para quest&otilde;es de privacidade
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            D&uacute;vidas, solicita&ccedil;&otilde;es ou reclama&ccedil;&otilde;es
            sobre o tratamento de dados pessoais podem ser encaminhadas para{' '}
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
