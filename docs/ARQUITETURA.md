# Arquitetura do ACTA — Sistema de Conhecimento

Este documento responde a duas perguntas de desenho que definem o repositório:

1. Um plugin por área, com os projetos dentro dele, ou um plugin por projeto?
2. A taxonomia `consultoria | auditoria | outros` é a certa?

---

## 1. Um plugin por área ou um por projeto?

### O dado que resolve

`claude plugin details` reporta o custo de contexto de um plugin instalado. Medido no plugin de
Pesquisa Salarial na sua primeira versão:

```
acta-pesquisa-salarial — 5 skills — Always-on: ~555 tok
  dashboard-powerbi        ~80 always-on   ~1.7k on-invoke
  estatistica-remuneracao ~100 always-on   ~1.6k on-invoke
  matching-cargos          ~90 always-on     ~2k on-invoke
  modelagem-planilhas      ~90 always-on   ~1.6k on-invoke
  pesquisa-salarial       ~200 always-on   ~3.4k on-invoke
```

Duas leituras importam:

- **O custo permanente é por skill, não por plugin.** Cada skill custa 80 a 200 tokens em toda
  sessão — o tamanho da sua `description`. O plugin como invólucro custa aproximadamente zero.
- **O corpo da skill só custa quando ela dispara** (`on-invoke`, 1,6k a 3,4k). Ou seja: escrever
  skill longa é barato; escrever *muitas* skills é que é caro.

### O que isso desfaz

A objeção natural a "um plugin por área" é que as skills ficariam genéricas demais para dar conta da
particularidade de cada tipo de projeto. Isso mistura dois eixos que são independentes:

| Eixo | O que é | Depende do outro? |
|---|---|---|
| **Granularidade de skill** | Quão estreita é cada `SKILL.md` | Não |
| **Fronteira de plugin** | Unidade de instalar, habilitar, versionar, compartilhar, e o prefixo do nome | Não |

Dá para ter skills hiper-específicas dentro de um plugin grande, e skills genéricas dentro de trinta
plugins pequenos. A fronteira do plugin **não força** genericidade.

### Onde a objeção está certa

Ela está certa por economia, não por técnica. Um plugin por área, com 17 projetos × ~12 etapas,
daria **~200 skills = ~21 mil tokens em toda sessão** — pagos mesmo quando o trabalho do dia é um
projeto só. Essa pressão empurra, na prática, para escrever menos skills e mais largas. O medo é
real; a causa é o orçamento de contexto, não a arquitetura de pastas.

Um plugin por projeto elimina a pressão: habilita-se o engajamento ativo (~12 skills, ~1,3k tokens) e
a granularidade pode ser máxima, porque ela não é cobrada de quem não está naquele projeto.

### Onde um-plugin-por-projeto erra sozinho

Duplicação. Identidade visual, doutrina de qualidade, convenções de entregável, anonimização e
protocolo de checkpoint são idênticos em todos os projetos. Copiados trinta vezes, uma correção
precisa aterrissar trinta vezes — e não vai.

### A decisão: três camadas

| Camada | Plugin | Papel |
|---|---|---|
| **0. Fundação** | `acta-way` | Método transversal à firma inteira |
| **1. Método de prática** | `acta-metodo-consultoria`, `acta-metodo-auditoria` | O "como se conduz" de cada prática |
| **2. Projeto** | `acta-pccr`, `acta-pesquisa-salarial`, `acta-auditoria-folha`, … | Só o particular: as etapas do ciclo de vida |

Entrega ao mesmo tempo: granularidade máxima por projeto, zero duplicação de doutrina, custo de
contexto proporcional ao que está em uso, e uma unidade limpa de compartilhamento com a organização
— fundação obrigatória, projetos opt-in por equipe.

### O mecanismo: `user-invocable: false`

Levantamento nos plugins oficiais (`data`, `finance`, `legal`, `operations`, e mais oito): **nenhum
deles usa skill mestra orquestradora**. Não existe `SKILL.md` na raiz de plugin nenhum. O roteamento
é feito puramente pela `description` de cada skill.

Para conhecimento de fundo que não é uma ação, a marca é `user-invocable: false` — é assim que
`finance:close-management` e `data:sql-queries` funcionam: carregam quando o assunto aparece, sem
poluir a lista de comandos. É esse o mecanismo das camadas 0 e 1.

---

## 2. A taxonomia

A proposta inicial era `consultoria | auditoria | outros`. Dois ajustes:

**`auditoria` não é par de `consultoria`.** No material de oferta da ACTA, as duas práticas são
**Consultoria Empresarial** e **Governança, Riscos e Compliance**. Auditoria interna é um item
*dentro* de GRC, ao lado de Governança, Gestão de Riscos, Controles Internos, Forense e ESG.
Espelhar a taxonomia real da firma importa porque é a que as pessoas já usam para nomear engajamento
— o repositório deve falar a língua da proposta comercial.

**`outros` sai.** Balde estrutural: o que não tem dono cai lá e não sai mais. As duas práticas cobrem
a oferta atual. Frente nova ganha pasta de prática própria quando existir de fato.

```
acta-sistema-de-conhecimento/
├── CONVENCOES.md
├── docs/                          ARQUITETURA.md · ROADMAP.md
├── fundacao/acta-way/
├── consultoria-empresarial/
│   ├── _metodo/                   acta-metodo-consultoria
│   └── <17 projetos>/
└── governanca-riscos-compliance/
    ├── _metodo/                   acta-metodo-auditoria
    └── <12 projetos>/
```

### Pasta e nome de plugin são coisas diferentes

A pasta organiza o repositório para humanos e pode ser hierárquica. O **nome do plugin vive num
namespace global e plano** e precisa ser único sozinho — daí o prefixo `acta-` e a desambiguação
onde há colisão real: `valuation` aparece em Financeiro e em M&A, `benchmarking` em Estratégia e em
RH. O nome invocável de uma skill é `<plugin>:<skill>`, por exemplo
`acta-pesquisa-salarial:matching-cargos`.

---

## 3. Consequências operacionais

- **Plugin sem conteúdo não entra no `marketplace.json`.** Fica no repositório como esqueleto e é
  promovido quando tiver metodologia escrita. Assim ninguém da equipe instala plugin vazio.
  `docs/ROADMAP.md` controla o status.
- **Um processo auditado = um plugin.** Folha, estoques, compras, marketing e produção são plugins
  irmãos que orquestram as mesmas skills de mecânica de `acta-metodo-auditoria`. A lista da firma
  termina em "etc.", então o conjunto é extensível pelo mesmo molde.
- **Migrar para uma GitHub Organization não exige retrabalho.** O que muda é a origem do marketplace;
  a estrutura interna e os manifestos permanecem.
