# Plataforma de conhecimento ACTA

Estudo de mercado, arquitetura e plano de implementação do portal interno que dá acesso ao
marketplace de plugins e ao acervo de conhecimento dos projetos da firma.

---

## 1. O problema que a plataforma resolve

O marketplace já funciona: sete plugins publicados, instaláveis por linha de comando. Mas ele só
serve a quem **já sabe** o que existe e o que instalar. Faltam três coisas que nenhum `marketplace.json`
resolve:

1. **Porta de entrada.** Um consultor que chega não tem onde ler o que é isso, como instalar, o que
   precisa ter antes, e o que fazer quando não funciona.
2. **Contexto do projeto, não só da ferramenta.** Saber que existe `acta-pesquisa-salarial` não é o
   mesmo que saber como se conduz uma pesquisa salarial — quais são as etapas, onde o projeto
   costuma dar errado, o que se entrega em cada fase. A skill ensina a fazer; falta o mapa do
   engajamento.
3. **Memória de projeto.** Hoje o que foi executado vive em pastas do OneDrive, achável por quem
   sabe o caminho. O conhecimento de "como ficou o relatório daquele projeto" não é recuperável.

---

## 2. Estudo de mercado

### O que os registries de skills fazem (skills-hub.ai e similares)

Arquitetura de informação observada:

| Elemento | Como aparece | Vale para a ACTA? |
|---|---|---|
| Busca em primeiro plano | caixa de busca dominando a home, com sugestões | **Não na home.** Busca serve catálogo de 13 mil itens; a ACTA tem dezenas. Aqui a home ensina, não busca |
| Instalação em um comando | bloco de terminal copiável, destacado | **Sim.** É o padrão que o consultor espera e reduz atrito |
| Dois eixos de navegação | *Categories* e *Industries* como recortes ortogonais | **Sim**, adaptado: prática (Consultoria / GRC) e tipo de projeto |
| Bundles | agrupamento de skills relacionadas | **Já temos**: é o próprio conceito de plugin |
| Badges de compatibilidade | "funciona com Claude Code, Cursor, Codex…" | Parcial. Interessa dizer onde a skill roda (Claude Code, Desktop, Cowork) |
| Métricas sociais | estrelas, downloads | **Não.** Dentro de uma firma isso vira ranking de colegas, não sinal de qualidade |
| Docs separados do catálogo | seção *Getting Started* / *CLI Reference* | **Sim.** É o que falta hoje |
| Autenticação | sign in / create account | **Sim, e obrigatória** — ver seção 4 |

### O que registry público faz e a ACTA **não** deve copiar

- **Otimizar para descoberta.** O problema de um registry público é ajudar a achar entre milhares. O
  problema da ACTA é o oposto: são poucos plugins e o consultor precisa saber **qual se aplica ao
  engajamento dele**. Isso é roteamento por tipo de projeto, não busca por palavra-chave.
- **Tratar a skill como o produto.** No registry, a unidade é a skill. Na ACTA, a unidade é o
  **projeto**: a pessoa não acorda querendo instalar uma skill, acorda tendo que conduzir uma
  pesquisa salarial. O catálogo tem de ser organizado pelo trabalho, não pelo artefato.
- **Publicação aberta.** Contribuição passa por revisão de método, não por upload.

### Referência mais próxima do que a ACTA precisa

Não é um registry — é um **manual de metodologia com catálogo acoplado**. O modelo mental certo é o
de um *engagement handbook* de firma grande (o "como se faz aqui", por tipo de projeto), com a
diferença de que cada capítulo termina em ferramenta instalável.

---

## 3. O princípio de desenho que evita a morte por desatualização

> **O site é gerado do repositório. Nada é mantido em paralelo.**

Todo portal interno morre do mesmo jeito: alguém escreve a documentação uma vez, o código evolui, e
seis meses depois o portal mente. A defesa é estrutural — o catálogo não é escrito, é **derivado**:

| O que aparece no site | De onde vem, sem digitação manual |
|---|---|
| Lista de plugins instaláveis | `.claude-plugin/marketplace.json` |
| Nome, versão, descrição do plugin | `<plugin>/.claude-plugin/plugin.json` |
| Lista de skills e o que cada uma faz | frontmatter `name` e `description` de cada `SKILL.md` |
| Visão geral do plugin, fluxo típico | `<plugin>/README.md` |
| Status (completo, parcial, esqueleto) | `docs/ROADMAP.md` |
| Comando de instalação | gerado do nome do plugin |

A única coisa **escrita à mão** é o que não existe em lugar nenhum hoje: a página do projeto.

### O arquivo novo: `projeto.md`

Um por plugin de projeto, dentro da pasta do plugin. É o conteúdo editorial que o consultor lê antes
de começar, e que hoje só existe na cabeça de quem já fez. Estrutura fixa:

```markdown
---
titulo: Pesquisa Salarial
pratica: consultoria-empresarial
duracao_tipica: 10 a 14 semanas
plugin: acta-pesquisa-salarial
---

## O que é, e quando a ACTA é contratada para isso
## As etapas do ciclo de vida
## Onde este projeto dá errado          ← riscos, com o sintoma e a prevenção
## O que se entrega, e em que formato
## Quem participa, do lado do cliente e do nosso
## O que é preciso ter antes de começar
```

A seção de riscos é a que mais vale e a que ninguém escreve. Ela é o ativo que transforma o portal
de catálogo em memória de firma.

---

## 4. Segurança: a decisão que condiciona todo o resto

O repositório permanece **privado** — é onde vive o método por extenso, incluindo o que ainda não
passou pela revisão de anonimização. Mas o **portal é uma vitrine**: mostra o catálogo de plugins,
o que cada skill faz e o método já anonimizado (sem nome de cliente, sem dado de projeto real — ver
`scripts/validar-skills.py` e `clientes.local.txt`). Não existe conta de usuário, não existe login,
e essa é uma decisão deliberada, não uma pendência.

Consequência prática: **nenhuma autenticação é necessária.** O portal é HTML estático, público, sem
sessão e sem senha — porque não há nada nele que dependa de quem está lendo. Confidencial fica no
repositório (privado) e no SharePoint/OneDrive dos projetos executados (seção 4.2); o que chega ao
portal já passou pelo filtro que existe exatamente para poder ser mostrado sem crachá.

Isso também reabre uma opção descartada antes por engano: **GitHub Pages** funciona aqui, porque a
objeção original (site público expõe conteúdo confidencial) não se aplica mais — o conteúdo público
é, por desenho, o que pode ser público. Ainda assim mantém-se o Cloudflare (seção 5): já está no ar,
já resolve o build a partir de `site/`, e evita mudar de fornecedor sem necessidade.

### Por que não o Vercel no plano grátis

O plano Hobby do Vercel declara, na própria documentação de planos: *"the Hobby plan restricts users
to non-commercial, personal use only"*. A ACTA é uma empresa e o portal é ferramenta de trabalho —
o uso é comercial. O plano grátis não cobre. Essa objeção continua valendo independentemente da
autenticação, porque é sobre os termos de uso, não sobre acesso.

### A recomendação

**Cloudflare Workers/Pages, no plano gratuito, sem Cloudflare Access.**
O passo a passo de execução está em [DEPLOY.md](DEPLOY.md).

| Requisito | Como é atendido | Custo |
|---|---|---|
| Hospedagem de site estático | Cloudflare Workers (assets), build a partir do repositório privado | grátis, sem restrição de uso comercial, sem cartão |
| Autenticação | nenhuma — o conteúdo publicado já é o que pode circular sem controle de acesso | — |
| Controle de quem pode publicar | permanece no GitHub: só quem tem acesso ao repositório privado consegue mudar o conteúdo | já existente |
| Revisão de conteúdo | `scripts/validar-skills.py`, rodado antes de qualquer pull request | grátis |

Não ter autenticação no site é um ganho, não uma concessão: sem formulário de login, sem sessão, sem
banco de usuários, não há o que ser mal implementado nem o que vazar. A superfície de risco vira
"o que entra no `master`", que já é controlada pelo validador e pela revisão do pull request — não
"quem consegue abrir a URL".

### Onde o acervo de projetos fica (fase 2)

Os entregáveis executados — relatórios, planilhas, painéis — **continuam no SharePoint/OneDrive**. A
plataforma indexa e aponta; não copia. Duplicar arquivo confidencial num segundo sistema cria um
segundo lugar para vazar e um segundo lugar para ficar desatualizado. A permissão continua sendo a
do SharePoint, que a firma já administra.

---

## 5. Stack

| Camada | Escolha | Por quê |
|---|---|---|
| Gerador | **Astro** com content collections | Feito para site de conteúdo derivado de arquivos. Gera HTML estático, envia zero JavaScript por padrão. Sem servidor, sem banco, sem segredo |
| Conteúdo | Markdown do próprio repositório + `projeto.md` | Fonte única de verdade (seção 3) |
| Busca | **Pagefind** | Índice estático gerado no build. Sem backend, sem serviço externo |
| Hospedagem | **Cloudflare Workers (assets)** | Grátis, uso comercial permitido, conecta em repositório privado, sem cartão |
| Acesso | nenhum — portal público | O conteúdo publicado já passou pela anonimização; não há o que proteger com login |
| Acervo de projetos | SharePoint, referenciado | Não duplica arquivo confidencial |

Deliberadamente **fora** do stack: banco de dados, backend, Supabase, autenticação própria, Cloudflare
Access. Nada disso é necessário para o que a plataforma faz, e cada um deles seria mais uma
superfície para manter e para proteger. Se algum dia a plataforma precisar mostrar algo não
anonimizado, essa decisão se reabre — não antes.

---

## 6. Arquitetura de informação

```
/                        Início — o que é, pré-requisitos, instalação, dicas de uso
/comecar                 Guia completo: instalar, verificar, atualizar, resolver problema
/projetos                Catálogo por tipo de projeto, agrupado por prática
/projetos/<slug>         A página que o consultor lê antes de começar:
                           o que é · etapas · onde dá errado · entregáveis ·
                           skills do plugin · como instalar
/fundacao                acta-way e os métodos de prática
/conceitos               Lentes teóricas (acta-pensadores-de-negocios)
/skills                  Índice de todas as skills, com busca
/skills/<slug>           Detalhe da skill: o que faz, quando dispara, em que plugin vive
/avulsas                 Skills e plugins de terceiros que a firma usa (ex.: find-skills)
/benchmarking            (fase 3) projetos executados, por tipo de projeto
/benchmarking/<slug>     (fase 3) registro de um engajamento: contexto, o que foi
                           entregue, o que se aprendeu, link para os arquivos no SharePoint
```

A home **não** é uma caixa de busca. É a página que responde, em ordem: o que é isto, o que preciso
ter, como instalo, e por onde começo no meu tipo de projeto.

---

## 7. Fases

### Fase 1 — o portal do marketplace
Home, guia de instalação, catálogo de projetos gerado do repositório, páginas de plugin e de skill,
busca. Publicado no Cloudflare, público, sem autenticação — ver seção 4.

### Fase 2 — as páginas de projeto
Um `projeto.md` por plugin de projeto, começando pelos que já têm método escrito. É trabalho
editorial, não de código, e é onde está o valor que nenhum `marketplace.json` entrega.

### Fase 3 — o acervo de benchmarking
Registro dos engajamentos executados por tipo de projeto, com o que se aprendeu e o apontador para os
arquivos no SharePoint. Depende de uma decisão de governança: **o que pode ser referenciado e o que
não pode**, dado que engajamento tem cláusula de confidencialidade. Essa decisão precede a
implementação.

---

## 8. O que precisa de decisão antes da fase 3

1. **Confidencialidade do acervo.** Referenciar entregável de cliente, ainda que só por link e
   atrás de autenticação, exige clareza sobre o que o contrato permite. A regra da casa hoje —
   caso vira exemplo anonimizado — precisa ser estendida ou explicitamente excepcionada aqui.
2. **Quem mantém.** O catálogo se mantém sozinho porque é derivado. As páginas de projeto e o acervo
   não: alguém precisa ser dono de cada um, ou envelhecem.
3. **Domínio.** `conhecimento.acta.com.br` ou subdomínio equivalente, apontado ao Cloudflare.
