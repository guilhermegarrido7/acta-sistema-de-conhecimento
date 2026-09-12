---
name: redacao-de-achados
description: Redija ponto de auditoria, achado e memorando de deficiências na voz e no vocabulário da ACTA. Acionar ao escrever condição, risco e recomendação, ao calibrar severidade, ao codificar e numerar achados, ao consolidar entrevistas em pontos negativos e contradições, ou ao revisar texto que vai ao cliente ou ao Conselho.
---

# Redação de achados de auditoria

Carregue `metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não
são repetidas.

## Papel desta skill

Esta skill é a **forma**. O número vem de `bases-e-conciliacao`, a evidência de
`papel-de-trabalho`, o controle e a conclusão de `programa-de-testes`, o slide de
`relatorio-de-auditoria`. Aqui se decide **como aquilo vira frase**.

A razão de ela existir: o achado certo redigido errado não sobrevive à leitura do cliente. Ou
vira opinião, porque perdeu a referência; ou vira briga, porque julgou uma pessoa; ou vira
retratação, porque afirmou mais do que a evidência sustenta. O padrão abaixo se manteve estável
em clientes diferentes, e é o que o sócio responsável espera encontrar ao revisar o deck.

> A síntese do auditor responsável: *"a forma de escrever tanto os testes quanto os resultados é
> mais sucinta: Identificamos que… Após realização de teste em… que…"*

## 1. Pontuação: vírgula, nunca travessão

**Não use travessão**, nem o longo (—) nem o médio (–), como conectivo, aposto ou pausa. Use
vírgula, ou dois pontos quando o que vem depois é definição ou lista, ou reescreva a frase. Vale
para todo texto de entregável e também para a conversa no chat.

O hífen continua normal onde a ortografia pede e em intervalos (itens 4.5.8 e 4.5.9, 2025/2026).

| Em vez de | Escreva |
|---|---|
| 1.412 compras, R$ 742.300,00 — 4,6× o esperado | 1.412 compras, R$ 742.300,00, ou 4,6 vezes o esperado |
| A política cita a homologação — porém não existe o processo | A política cita a homologação, porém não existe o processo |
| Cartões corporativos — natureza e controles | Cartões corporativos: natureza e controles |

## 2. Pessoa, tempo e voz

**Primeira pessoa do plural, no pretérito.** É a voz da firma, não a do auditor.

> *"Analisamos uma amostra de 36 pagamentos e identificamos…"*
> *"Verificamos que, para a amostra selecionada, 100% dos casos…"*
> *"Solicitamos a documentação comprobatória e fomos informados de que…"*

Nunca "eu", nunca "você", nunca imperativo dirigido ao cliente dentro do corpo do achado. A
**recomendação usa infinitivo** ("Criar procedimento…", "Vincular a emissão…"), nunca "vocês
devem".

## 3. As fórmulas consagradas

| Situação | Fórmula |
|---|---|
| Descrever um teste | "**Verificar a existência de** [controle], contemplando [atributos]…" |
| Abrir um resultado | "**Após realização de teste em** [objeto], **identificamos que**: (i)… (ii)… (iii)…" |
| Relatar constatação | "**Verificamos que**, para amostra de X, N% dos casos…" |
| Relatar ausência | "**Não existe** processo formal de […]" / "**Não identificamos** evidência de […]" |
| Registrar recusa ou impossibilidade | "Ao solicitarmos […], **fomos informados de que** […]" |
| Lacuna de política | "A política **cita** [X], **porém não define** [Y]" |
| Ressalva | "**Ressalva metodológica:** […]" |
| Pendência de validação | "[…], **pendente de validação pela Companhia**" |

**A construção central do método:** *"A política cita X, mas não existe o processo de X."* É o
achado de **desenho**: a norma menciona um controle que não está operacionalizado. Exemplo
canônico, a política manda homologar fornecedor, mas não há processo de homologação, com
critérios, responsável, cadastro de homologados nem reavaliação.

Quando enumerar dentro de um parágrafo, use **(i), (ii), (iii)**. É o padrão dos papéis de
trabalho e dos pontos.

## 4. Tom

- Objetivo e verificável. **Sem adjetivo de intensidade**: nada de "gravíssimo", "absurdo",
  "péssimo", "alarmante". A gravidade é comunicada pelo **campo Severidade**, não pelo texto.
- **Não personalize.** Descreva a função, nunca julgue a pessoa.
  ✅ *"o cargo é Analista Administrativo II, porém lidera encarregados"*
  ❌ *"o [nome do funcionário] não tem competência para…"*
- Português do Brasil, sem estrangeirismo desnecessário. Termos técnicos consagrados podem ficar
  em inglês: *three-way match*, *lapping*, *aging*, *key control*, *walkthrough*.
- Números `R$ 1.234,56`; datas `dd/mm/aaaa`; percentuais com a casa decimal que o dado tem.
  **Nunca arredonde percentual dentro do texto.** Formatar 2,4% como "2%" já produziu uma
  conclusão inteira errada.
- Sucinto. Corte o que não sustenta o ponto.

## 5. A estrutura de um ponto

Quatro elementos, nesta ordem. É o padrão do Memorando de Deficiências e o que alimenta o slide:

```
<CÓDIGO>, <Título afirmativo>                            [SEVERIDADE]

Condição:      o que encontramos, com a evidência e a referência
Risco:         o que pode acontecer por causa disso, em termos de negócio
Recomendação:  o que fazer, acionável e específico
```

**Título:** afirmativo, autoexplicativo, compreensível fora de contexto.
✅ "Processo de homologação de fornecedor inexistente" · "Fraude reconhecida e não tratada"
❌ "Fornecedores" · "Problema em compras"

**Condição:** precisa conter a **referência**, onde está escrito, qual documento falta, qual base
mostra, quantos casos, qual valor. Sem isso não é achado, é opinião.
✅ *"A política cita 'seleção e homologação de fornecedores' (itens 4 e Definição), porém não
define o processo: não há critérios, documentos exigidos, responsável, cadastro de homologados
nem reavaliação periódica."*

**Risco:** consequência concreta, ligada a dinheiro, fraude, continuidade ou conformidade.

> **O erro mais comum do método inteiro: o Risco não pode ser a Condição reescrita.** Se o texto
> do risco é a mesma frase da condição com "risco de" na frente, ele não existe.

✅ *"Aquisições de fornecedores sem crivo de idoneidade, regularidade fiscal/trabalhista e
capacidade técnica; exposição a fornecedores inaptos ou de fachada."*
❌ *"Risco de não haver homologação."* ← isso é a condição de novo.

Quando o risco for tributário ou trabalhista, seja específico no efeito: *"verba de natureza
salarial paga como benefício está sujeita a reclassificação pela fiscalização, com incidência de
INSS, FGTS e IRRF, multa e juros sobre a base reclassificada, além de passivo trabalhista pela
integração ao salário."*

**Recomendação:** precisa dizer **o quê**, **quem** e com **qual gatilho**. Recomendação que não
vira tarefa não serve. Detalhamento na seção 9.

A conclusão sobre o controle testado (Eficaz, Parcialmente Eficaz, Ineficaz) tem vocabulário
fechado e critério próprio em `programa-de-testes`, não se redefine aqui.

## 6. Severidade

| Nível | Quando usar |
|---|---|
| **ALTA** | Risco financeiro ou de fraude relevante; ausência de segregação de funções; controle-chave inexistente; exposição legal ou societária. Exige ação prioritária. |
| **MÉDIA** | Controle existe, mas é frágil, incompleto ou não formalizado; risco de erro material sem vetor direto de fraude. |
| **BAIXA** | Melhoria de eficiência, formalização, indicador, padronização. Sem risco financeiro direto. |

O critério é fechado: não invente nível intermediário nem grau "média-alta". Se o ponto não se
encaixa, o problema é a redação da condição, não a régua.

**Feche todo documento com o quadro-resumo por severidade**, é obrigatório:
`Total: 28 (Alta: 11 | Média: 14 | Baixa: 3)`. O total tem de bater com a contagem de IDs
emitidos no documento.

## 7. Codificação

| Prefixo | Uso |
|---|---|
| `D-01…D-nn` | Deficiências de controle interno, Memorando de Deficiências |
| `E-01…E-nn` | Discrepâncias de estrutura organizacional |
| `PN-01…PN-nn` | Pontos negativos consolidados de entrevistas |
| `OP-01…OP-nn` | Oportunidades e insights de melhoria |
| `C-01…C-nn` | Contradições entre fontes, a validar |
| `R1…Rx` | Riscos do registro de riscos (ver `programa-de-testes`) |

A lista é fechada. Prefixo novo só entra por decisão do sócio responsável, e vale para o
engajamento inteiro.

**Nunca renumere um ID já emitido.** Ele já foi citado em papel de trabalho, slide e e-mail. Se a
ordem mudar, a renumeração só acontece a pedido explícito do auditor responsável, e aí tem de ser
propagada para **todos** os artefatos no mesmo passo.

## 8. Consolidação de entrevistas: regime próprio

Aqui o trabalho é outro: **percepção é o dado**. Não se exige evidência documental do que foi
dito, exige-se atribuição. Regras próprias:

- **Atribua sempre, e por cargo.** "Segundo o Gerente de Operações…", "A Gerente Comercial
  relatou…". Cargo, nunca nome de pessoa no texto do entregável.
- **Consolide por linha de raciocínio, não por entrevistado.** O valor está no padrão que repete
  em três entrevistas independentes, não no depoimento isolado. Um relato de uma pessoa só é
  registrado como tal.
- **Separe** práticas de RH, operacionais, sistêmicas e de controle.
- **Registre contradições** como `C-nn`, com as duas versões e como resolver (regra R5 da skill
  mãe: contradição é achado, não problema).
- Extraia insight de melhoria (`OP-nn`) e ponto negativo (`PN-nn`) **separadamente**, são
  artefatos distintos e não se misturam no mesmo bullet.

## 9. Recomendação e plano de ação

A recomendação endereça o risco **não adequadamente coberto** pelas técnicas de controle em uso.
Abre com **verbo no infinitivo** e detalha em subitens, com exemplo numérico entre parênteses
quando couber.

Verbos consagrados: Formalizar · Implantar · Implementar · Estabelecer · Definir · Segregar ·
Restringir · Parametrizar · Centralizar · Submeter · Obter · Bloquear · Inventariar · Inativar ·
Avaliar a implantação · Estudar a viabilidade.

> *"Formalizar as normas e procedimentos a serem observados na execução das atividades de
> compras, definindo responsabilidades e alçadas, e detalhando: definição de indicadores do
> processo; valor mínimo para abertura de processo de compra; quantidade mínima de cotações com
> base no valor (ex.: três cotações acima de R$ 1.000,00); justificativa obrigatória para
> ausência do mínimo."*

Consolide todas no **plano de ação**, uma linha por recomendação:

`Rec. | Controle que a originou | Recomendação | Riscos mitigados | Prazo | Responsável`

Prazo sugerido: **curto** até 90 dias, **médio** até 180 dias, **longo** acima de 180 dias.
Quando o responsável e o prazo dependem do cliente, marque com destaque visível em vez de
inventar nome ou data.

## 10. Escrever só o que a evidência sustenta

Escreva o que a evidência sustenta, não o que ela sugere. Duas correções que custaram
retratação:

- *"13 colaboradores não ativos"* → **"não localizados na base recebida, pendente de validação"**.
  Um dos nomes era o gerente recém-contratado; a base era anterior à contratação.
- *"não existe regra de cálculo; as planilhas foram construídas depois para justificar um valor
  já decidido"* → retratado por inteiro. Num engajamento, a regra existia e reconstruía todas as
  comissões ao centavo, e a conclusão tinha nascido de um arredondamento nosso.

Quando a informação depende do cliente, o ponto correto é: aspecto identificado + o que foi
solicitado + que está **pendente de validação**. E quando **não há quem valide**, como num
mandato em que quem usava o cartão corporativo era quem validaria e não existia controladoria,
diga isso e entregue o máximo de informação para o Conselho decidir. É posição legítima.

## 11. Nunca leve referência interna ao cliente

Texto reaproveitado de deck ou de papel de trabalho carrega versão de apresentação, número de
slide e código de WP. Nada disso vai ao entregável do cliente: substitua por remissão à seção do
próprio documento, no padrão *"Vide Seção II.B"*. É higiene, e já passou batido em 57 páginas até
a verificação final pegar.

## 12. No relatório

Cada ponto ocupa um ou mais slides e é seguido de um slide de **Riscos e Recomendações** em
bullets, **com o mesmo título do ponto**. Quando um ponto ocupa vários slides, o slide de riscos
cobre o conjunto e repete o título. Layout, paleta e mecânica de PPTX em `relatorio-de-auditoria`.

## O que entregar

1. O ponto completo: `<CÓDIGO>, <Título afirmativo> [SEVERIDADE]`, com Condição, Risco e
   Recomendação, cada um cumprindo o seu papel.
2. A condição com referência explícita: item da política, documento ausente, base, quantidade,
   valor.
3. O risco distinto da condição, ligado a dinheiro, fraude, continuidade ou conformidade.
4. A recomendação em infinitivo, dizendo o quê, quem e com qual gatilho.
5. O quadro-resumo por severidade, com total conferido contra os IDs emitidos.
6. O plano de ação consolidado, com prazo classificado em curto, médio ou longo.
7. A lista do que ficou **pendente de validação pela Companhia** e o que foi solicitado.

Antes de fechar, uma passada de revisão: algum travessão sobrou? Algum nome de pessoa? Algum
adjetivo de intensidade? Algum percentual arredondado? Alguma referência interna de WP ou de
número de slide?

## Próximo passo

`relatorio-de-auditoria`, para levar o ponto ao deck e ao status report. Se a redação do risco
revelou que a evidência não sustenta a condição, volte a `bases-e-conciliacao` ou a
`papel-de-trabalho` antes de emitir o ID, porque ID emitido não se renumera.
