# ACTA — Sistema de Conhecimento

Marketplace privado e pessoal de plugins do Claude Code com a metodologia da ACTA Advisory,
organizado por prática e subsegmentação.

> **Repositório privado.** Uso pessoal — não compartilhado com a organização.

## Estrutura

```
ACTA — Sistema de Conhecimento
│
├── Consultoria
│   ├── Financeiro
│   │   ├── DRE                          [planejado]
│   │   ├── Working Capital              [planejado]
│   │   └── Valuation                    [planejado]
│   │
│   ├── M&A
│   │   ├── Teaser                       [planejado]
│   │   ├── CIM                          [planejado]
│   │   ├── Market Mapping               [planejado]
│   │   ├── Financial Due Diligence      [planejado]
│   │   └── Valuation                    [planejado]
│   │
│   ├── Estratégia
│   │   ├── Market Sizing                [planejado]
│   │   ├── Benchmarking                 [planejado]
│   │   ├── Diagnóstico Operacional      [planejado]
│   │   └── Strategic Planning           [planejado]
│   │
│   └── RH
│       ├── Pesquisa Salarial            ✅ pronto (matching de cargos, estatística,
│       │                                   modelagem de planilhas, dashboard Power BI)
│       ├── Job Architecture             [planejado]
│       └── Compensation Analysis        [planejado]
│
├── Auditoria
│   ├── Auditoria Interna                ✅ pronto (skill mestra: regras invioláveis,
│   │                                       doutrina do número exato, ritual de aprendizado)
│   └── Auditoria de Folha               [planejado] (análise de folha, encargos, horas
│                                           extras, benefícios, anomalias, benchmark de
│                                           remuneração)
│
└── Outros
    └── (reservado para novas frentes: Tecnologia, ESG, Jurídico, etc.)
```

Cada subsegmentação é um **plugin independente** do Claude Code (`.claude-plugin/plugin.json`),
listado no marketplace raiz (`.claude-plugin/marketplace.json`). Plugins marcados **[planejado]**
têm apenas a estrutura de pastas e um `SKILL.md` placeholder — ainda sem metodologia consolidada.

## Convenção de cada plugin

```
<área>/<subsegmentação>/
  .claude-plugin/plugin.json     ← manifesto do plugin
  SKILL.md                       ← skill mestra da subsegmentação (se houver)
  skills/<sub-skill>/SKILL.md    ← skills específicas (uma pasta por skill)
  references/                    ← metodologia, dicionários, livros de cálculo, templates
```

## Instalação (pessoal, local)

```bash
claude plugin marketplace add guilhermegarrido7/acta-sistema-de-conhecimento --scope user
claude plugin install acta-pesquisa-salarial@acta-sistema-de-conhecimento
claude plugin install acta-auditoria-interna@acta-sistema-de-conhecimento
```

## Nota sobre conteúdo sensível

O conteúdo de `auditoria/auditoria-interna` preserva nomes de clientes e da equipe ACTA (necessários
para o roteamento e contexto da metodologia), mas **caminhos pessoais de máquina foram removidos e
substituídos por referências lógicas** (ex.: "pasta de Python do usuário" em vez do caminho literal).
