# ACTA — Sistema de Conhecimento

Marketplace privado de plugins do Claude Code com a metodologia da ACTA Advisory. Um plugin por tipo
de projeto, organizado pelas duas práticas da firma.

> **Repositório privado.** Uso pessoal hoje; estruturado para migrar a uma GitHub Organization sem
> retrabalho.

## Estrutura

```
ACTA — Sistema de Conhecimento
│
├── Fundação
│   └── acta-way ......................... método transversal a toda a firma
│
├── Consultoria Empresarial
│   ├── _metodo .......................... como se conduz um projeto de consultoria
│   ├── Planejamento Estratégico          ├── M&A Sell Side / Buy Side
│   ├── Planejamento Orçamentário         ├── Modelagem Econômico-Financeira
│   ├── Modelos de Operações Inteligentes ├── Análise de Aderência e Seleção de ERP
│   ├── Centro de Serviços Compartilhados ├── Perfis de Acesso e Segregação de Funções
│   ├── Modelos de Custeio                ├── Dados e Analytics
│   ├── Redução Estratégica de Custos     ├── Plano de Cargos, Carreira e Remuneração
│   ├── Transformação Comercial           ├── Pesquisa Salarial ✅
│   ├── Excelência Operacional            ├── Avaliação de Desempenho
│   └──                                   └── Remuneração Variável
│
└── Governança, Riscos e Compliance
    ├── _metodo ✅ ....................... como se audita na ACTA
    ├── Governança                        ├── Auditoria de Folha de Pagamento
    ├── Gestão de Riscos                  ├── Auditoria de Estoques
    ├── Auditoria Interna da Receita      ├── Auditoria de Compras
    ├── Programa de Integridade           ├── Auditoria de Marketing
    ├── Controles Internos                └── Auditoria de Produção
    ├── Forense
    └── ESG
```

✅ = tem conteúdo e está no marketplace. Os demais são esqueleto — ver
[docs/ROADMAP.md](docs/ROADMAP.md).

## Como está desenhado, e por quê

Três camadas: **fundação** (método da firma) → **método de prática** (como se audita, como se
consulta) → **projeto** (as etapas do ciclo de vida daquele tipo de trabalho). Cada projeto é um
plugin independente, para que a granularidade das skills não seja limitada pelo orçamento de
contexto de quem não está naquele projeto.

O raciocínio completo, com os números que sustentam a decisão, está em
**[docs/ARQUITETURA.md](docs/ARQUITETURA.md)**.

As regras que todo plugin segue — placeholders de pasta, a regra de perguntar em vez de presumir,
formato de frontmatter, onde vive cada camada — estão em **[CONVENCOES.md](CONVENCOES.md)**.

## Instalação

```bash
claude plugin marketplace add guilhermegarrido7/acta-sistema-de-conhecimento --scope user
```

```bash
claude plugin install acta-metodo-auditoria@acta-sistema-de-conhecimento --scope user
```

```bash
claude plugin install acta-pesquisa-salarial@acta-sistema-de-conhecimento --scope user
```

Só plugins com conteúdo entram no marketplace. Um plugin em esqueleto existe no repositório mas não
é instalável até ter metodologia escrita — evita que alguém instale casca vazia.

## Contribuindo

Ao completar um plugin, siga o checklist em [docs/ROADMAP.md](docs/ROADMAP.md#ao-completar-um-plugin).
Antes de subir:

```bash
claude plugin validate . && claude plugin validate <caminho-do-plugin> --strict
```
