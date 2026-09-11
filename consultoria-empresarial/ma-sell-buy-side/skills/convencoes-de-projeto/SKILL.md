---
name: convencoes-de-projeto
description: Aplicar as convenções de um mandato de M&A — árvore de pastas pela ordem do processo, nomenclatura datada e versionada, quarentena de legado, codinome de projeto e propagação do entregável para o benchmarking do mandato seguinte. Acionar ao abrir mandato, ao nomear ou versionar arquivo, ou ao organizar a pasta do projeto.
---

# Convenções de um mandato de M&A

## Papel desta skill

Direciona a organização do mandato. Não move nem renomeia arquivo sem confirmação: a pasta de um
mandato em andamento é memória compartilhada da equipe, e reorganização silenciosa destrói rastro.

**O mecanismo genérico não vive aqui.** `CLAUDE.md`, `CHECKPOINT.md`, `Sessoes/` e `APRENDIZADOS.md`
são de `acta-way`, skill `checkpoint` — carregue-a para isso. Esta skill cobre apenas o que é próprio
de um mandato de M&A.

> Se `acta-way` não estiver instalado, **avise o usuário** em vez de improvisar o protocolo de
> checkpoint: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.

## O princípio: a pasta organiza o processo, não o organograma

A árvore de pastas de um mandato é numerada **pela ordem em que o trabalho acontece**. Não pela
estrutura societária do alvo.

Essa é a decisão estrutural que mais separa um mandato bem executado de um malconduzido. Organizar
por entidade jurídica (uma pasta por empresa do grupo, com o processo replicado dentro de cada uma)
parece natural quando o alvo é um grupo — e produz, na prática: contrato de mandato duplicado
byte-a-byte em duas pastas, estudos setoriais dispersos que nunca consolidam numa tese, pastas
`Versões anteriores` vazias porque ninguém sabe em qual delas mover, e nenhuma visão de em que etapa
o projeto está.

**Grupo empresarial com várias empresas não muda o eixo.** O eixo continua sendo a etapa; a
segmentação por empresa acontece *dentro* da pasta de data room e dentro do modelo financeiro
(ver plugin de valuation, e a análise por partes quando houver múltiplas entidades).

## A árvore

```
~~pasta de trabalho/
├── 0- Benchmarking/              material de referência: entregáveis de mandatos anteriores
├── 1- Solicitação de informações/  cartas e rodadas de pedido de dados ao alvo
├── 2- Data Room/                 documentação recebida do alvo
│   ├── 1- Informações contábeis/
│   ├── 2- Informações financeiras/
│   ├── 3- Informações institucionais/
│   ├── 4- Informações trabalhistas/
│   └── 5- Acompanhamento de contratos/
├── 3- Apresentações/             teaser, IM, decks
│   ├── Memórias/                 apoio de conteúdo: mapeamentos, notas
│   └── Versões anteriores/
├── 4- Análises Financeiras/      modelo de valuation e análises
│   └── Versões anteriores/
├── 5- Estudos e análises/        estudo setorial, transações precedentes, regulatório
├── 6- Imagens/                   logo e ativos visuais do alvo
├── Memórias/                     memória CENTRAL do mandato
│   └── checkpoint/
└── Diversos/                     apoio não classificado
```

Três regras que fazem a árvore funcionar:

1. **`0- Benchmarking` é a primeira pasta porque é a primeira etapa.** Ler o melhor entregável
   anterior antes de produzir qualquer coisa nova é o que mantém o padrão da casa. Ver a regra de
   propagação abaixo.
2. **Toda pasta de entregável tem sua própria `Versões anteriores/`.** Nunca sobrescrever nem apagar
   sem mover para lá primeiro.
3. **Crie a subpasta vazia antecipadamente.** Uma pasta `4- Análises Financeiras` vazia declara à
   equipe que aquela etapa existe e está pendente. É um sinal de processo, não desorganização.

### Legado e quarentena

Alvo com histórico anterior de consultoria, ou mandato que herda arquivos de projeto passado: tudo
vai para `Informações antigas/<ano>/`. **Nunca deletado, nunca no caminho.** O material de 2018 de
um projeto alheio pode importar em due diligence três meses depois, e ninguém lembra que existia.

## Nomenclatura

```
YYYYMMDD <Nome da atividade> v<N> <INICIAIS>.<ext>
```

Exemplo: `20260812 Mapeamento Conteúdo IM v1 GGF.md`

| Elemento | Regra |
|---|---|
| `YYYYMMDD` | Data absoluta, sem separador, sempre **prefixo** — ordena cronologicamente no explorador de arquivos. Nunca data relativa. |
| `<Nome da atividade>` | Curto e descritivo da atividade, não do arquivo. |
| `v<N>` | Sequencial **por documento**, não por dia nem por atividade. Um documento tem sua própria contagem v1, v2, v3. |
| `<INICIAIS>` | Iniciais do responsável. Em coautoria, as de quem produziu aquela versão. Autoria rastreável. |

**A data é a da criação da atividade, não da última edição.** Um IM criado em 06/05 e revisado em
01/06 mantém `20260506` no nome e sobe a versão. Isso preserva a identidade do documento ao longo do
mandato — o que se perde quando a data acompanha a edição.

**Ao revisar:** mova a versão antiga para `Versões anteriores/` e crie a nova com `v<N+1>` do mesmo
nome de atividade. Não edite por cima silenciosamente um arquivo que já foi compartilhado ou que é
entregável.

### O prefixo `@` — template canônico

`@` marca template ou referência canônica da casa, e serve também para fixar no topo da ordenação
alfabética. O número de `@` marca a geração: `@@` é a geração mais nova, `@` a anterior. Ao encontrar
duas gerações do mesmo template, **pergunte qual é a canônica** em vez de assumir que a mais recente
por data de arquivo é a certa.

### Antipadrões de nomenclatura

O que aparece quando não há convenção, e o custo de cada um:

| Antipadrão | Custo |
|---|---|
| `..._V_12-09-2025.pptx` (data no fim, formato invertido) | Não ordena. |
| `..._V2) atualizada.pptx`, `..._(V10) - A alterar.pptx` | "Atualizada" em relação a quê? Qual é a corrente? |
| `... BACKUP.pptx` | Backup é a pasta `Versões anteriores`, não o nome. |
| `DRE 2023 (1).pdf`, `BALANÇO 2024 (002).pdf` | Duplicata de download nunca resolvida. |
| Saltos de versão (V2, V3, V5, V9, V13) | As faltantes existiram? Foram perdidas? |

## Codinome de projeto

Todo mandato recebe um codinome. Ele não é enfeite: é o mecanismo de confidencialidade que permite
circular material antes do NDA.

| Material | Momento | Identificação |
|---|---|---|
| **Teaser** | Pré-NDA | **Somente o codinome.** Nada que permita identificar o alvo: nem nome, nem cidade específica, nem cliente nominal, nem nome de licença. |
| **IM** | Pós-NDA | Revela o nome real, **mantendo o codinome no título** — o comprador já conhece o projeto por ele. |
| **Modelo e análises** | Interno | Codinome no nome do arquivo. |

Ao redigir teaser, verifique ativamente o que identifica: uma foto do galpão com placa, um número de
licença ambiental, um cliente âncora nomeado ou uma métrica única no mercado local podem identificar
o alvo tão bem quanto o nome. Ver skill `teaser`.

## Memória do mandato

`Memórias/` guarda a memória central; `Memórias/checkpoint/` guarda um `.md` por etapa concluída.
Registre **decisão e lacuna no arquivo, não só na conversa** — para que qualquer sessão nova retome o
contexto sem depender do histórico de chat de outra pessoa.

Cada checkpoint traz: o que foi feito · decisões tomadas e por quê · o que ficou pendente · próximos
passos.

`3- Apresentações/Memórias/` é diferente e mais estreito: apoio de conteúdo daquele entregável
(mapeamento de disponibilidade, notas de conteúdo), não a memória do mandato.

## Diretrizes de processo

1. **Mapear antes de analisar.** Antes de produzir análise, valuation ou conteúdo de IM, mapeie o que
   já existe (teaser, data room, solicitações) contra o que falta. Não pule por pressão de prazo — é
   justamente sob prazo que se produz sobre o arquivo errado.
2. **Nunca sobrescrever sem checar.** Antes de editar, mover ou apagar arquivo que não foi criado
   nesta sessão: leia primeiro, e confirme com o usuário se o conteúdo divergir do esperado.
3. **Confirmar decisão estrutural.** Mudança de estrutura de pastas, de convenção de nomenclatura ou
   de qual template/benchmark usar é confirmada antes de executar, com pergunta objetiva e opção
   recomendada.
4. **Separar mapeamento de análise.** Documento de mapeamento de disponibilidade não contém opinião,
   conclusão nem análise. Análise é pedida e produzida separadamente. Misturar os dois faz o
   mapeamento parecer parecer, e a análise parecer inventário.
5. **Nível macro por padrão.** Entregável de planejamento mapeia por seção e tópico macro, não slide
   a slide, a menos que o usuário peça mais granularidade.
6. **Nenhum número inventado.** Todo valor vem de arquivo identificado do data room ou de fonte
   citada. Métrica derivada é declarada com a conta que a produziu. Em deck gerado por script,
   registre que o script não deve ser reexecutado depois de edição manual.

## Propagação — o mecanismo que faz o padrão subir

Ao concluir um mandato, **copie os entregáveis finais (teaser, IM, deck de valuation) para o
`0- Benchmarking` do mandato seguinte.** É assim que o padrão da casa se propaga: o próximo projeto
começa lendo o melhor material já produzido, não o template vazio.

Efeito colateral a conhecer: **o melhor entregável de um mandato passa a viver na pasta de outro.**
Ao procurar a melhor execução de um tipo de material, procure nos `0- Benchmarking` dos mandatos
posteriores, não só na pasta do mandato que o produziu. Quando o usuário pedir "o valuation do
projeto X" e não estiver na pasta de X, é aqui que está.

## O que verificar ao abrir ou auditar um mandato

- A árvore está pela ordem do processo, ou por entidade?
- Há arquivo solto na raiz? (Entregável na raiz é o primeiro sintoma.)
- Toda pasta de entregável tem `Versões anteriores/`?
- Os nomes seguem `YYYYMMDD ... vN INICIAIS`?
- Há duplicata do mesmo documento em duas pastas?
- O codinome está definido e usado consistentemente?
- Existe `Memórias/checkpoint/` com entrada da última etapa?
- Legado está em quarentena ou convive com o material corrente?
