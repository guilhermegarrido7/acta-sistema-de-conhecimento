/**
 * Skills de uso geral, mantidas por terceiros.
 *
 * Diferente do resto do catálogo, esta lista não é derivada do repositório: as
 * skills não são da ACTA e não vivem no nosso marketplace. É a única fonte
 * escrita à mão do portal, e está aqui em vez de dentro de uma página para que
 * o índice e as páginas de detalhe leiam a mesma coisa.
 *
 * Instalação: nenhuma delas entra por `claude plugin install`. Elas aparecem no
 * catálogo de habilidades do próprio Claude, em Personalizar, aba Habilidades.
 * Por isso nenhuma entrada aqui carrega comando de terminal.
 */

export const REPO = 'https://github.com/guilhermegarrido7/acta-sistema-de-conhecimento';

export const terceiros = [
  {
    slug: 'find-skills',
    nome: 'find-skills',
    grupo: 'Descoberta',
    resumo:
      'Procura skills instaláveis quando você descreve o que precisa fazer, em vez de exigir que você saiba o nome delas.',
    quando: [
      'Você desconfia que já existe ferramenta para um problema, mas não sabe como ela se chama.',
      'Está começando um tipo de trabalho novo e quer saber o que já está pronto antes de fazer na mão.',
    ],
    comoObter:
      'Vem no catálogo de habilidades do próprio Claude. Em Personalizar, aba Habilidades, procure pelo nome.',
    cuidado:
      'Ela sugere skills de terceiros. Antes de instalar qualquer coisa que ela indique, vale a mesma checagem de origem que se aplica a qualquer ferramenta que vai operar sobre arquivo de cliente.',
  },
  {
    slug: 'avoid-ai-writing',
    nome: 'avoid-ai-writing',
    grupo: 'Escrita e revisão',
    resumo:
      'Audita e reescreve texto para tirar os padrões que denunciam escrita de máquina, do travessão em excesso às conclusões genéricas.',
    quando: [
      'Antes de qualquer texto que vá ao cliente: relatório, proposta, e-mail de apresentação.',
      'Quando um trecho ficou correto no conteúdo mas soando impessoal.',
    ],
    comoObter:
      'Vem no catálogo de habilidades do Claude. O repositório guarda uma cópia do texto dela em evitar-escrita-de-IA/ apenas como referência de leitura; essa cópia não é instalável.',
    ligacao: { rotulo: 'Ver a cópia no repositório', href: `${REPO}/blob/master/evitar-escrita-de-IA/SKILL.md` },
    cuidado:
      'Ela edita texto, então rode antes da revisão final de conteúdo, nunca depois. O que ela reescreve precisa ser conferido por quem assina o documento.',
  },
  {
    slug: 'sabatina',
    nome: 'sabatina',
    grupo: 'Escrita e revisão',
    resumo:
      'Argumenta contra a versão mais forte da sua posição, não contra a mais fraca, para o número ou a tese chegarem testados na frente do cliente.',
    quando: [
      'Antes de travar uma projeção que parece otimista.',
      'Antes de defender uma recomendação em comitê, para ouvir a objeção difícil primeiro na sala fechada.',
    ],
    comoObter: 'Vem no catálogo de habilidades do Claude. Em Personalizar, aba Habilidades.',
    ligacao: {
      rotulo: 'A skill de valuation que usa esse processo',
      href: '/skills/projecao-de-mercado-e-equity-story',
    },
    cuidado:
      'O resultado é uma lista de objeções, não uma decisão. Quem decide se a objeção procede continua sendo o responsável pelo trabalho.',
  },
  {
    slug: 'formatos-office',
    nome: 'xlsx · docx · pptx · pdf',
    grupo: 'Formatos de arquivo',
    resumo:
      'Quatro skills da Anthropic que leem e geram planilha, documento, apresentação e PDF. São a base de quase todo entregável da firma.',
    quando: [
      'Ler uma base que o cliente mandou em Excel.',
      'Gerar o relatório em Word ou a apresentação em PowerPoint no fim do projeto.',
      'Extrair texto ou tabela de um PDF do data room.',
    ],
    comoObter:
      'Vêm no catálogo de habilidades do Claude, cada formato como uma skill separada. Em Personalizar, aba Habilidades.',
    cuidado:
      'Elas cuidam do formato, não do conteúdo nem da identidade visual. O padrão de cor, fonte e estrutura de slide da ACTA vem das skills de relatório dos nossos plugins, que precisam estar carregadas junto.',
  },
];

export const gruposDeTerceiros = [...new Set(terceiros.map((t) => t.grupo))].map((grupo) => ({
  grupo,
  itens: terceiros.filter((t) => t.grupo === grupo),
}));
