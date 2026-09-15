---
name: relatorio-de-auditoria
description: Produza e altere o relatório de auditoria — deck em PowerPoint e relatório detalhado em Word — na identidade visual ACTA. Acionar ao montar ou alterar slide, ao inserir tabela ou gráfico em PPTX, ao desenhar organograma ou fluxo AS IS, ao converter o deck em relatório detalhado em Word, ou ao conferir o render antes de entregar.
---

# Relatório de auditoria — o deck em PPTX e o relatório detalhado em Word

## Papel desta skill

Carregue `metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não
são repetidas.

Esta skill organiza a **apresentação** do trabalho, não o cálculo: o conteúdo do ponto vem de
`redacao-de-achados`, o número vem de `bases-e-conciliacao`. Foi a área que mais gerou retrabalho
estético — as regras abaixo são o que sobrou depois de descobrir, uma a uma, por que cada tentativa
falhava.

A mecânica de código (python-pptx, `replace_data`, extração PPTX → JSON → DOCX) está em
[references/mecanica-pptx-docx.md](references/mecanica-pptx-docx.md). Armadilhas de ambiente
(arquivo travado, encoding, cache do OneDrive, COM, fluxo de cópia para o scratchpad antes de
operar) vivem em `acta-way:ambiente-tecnico` — carregue-a antes de mexer em render ou COM.

---

## 1. Geometria e identidade do slide

Slide **13,33" × 7,50"** (16:9 · 12192000 × 6858000 EMU).

```
┌──────────────┬────────────────────────────────────────────────┐
│              │  Título do ponto            [logo, topo dir.]  │
│  banda       │  ───────── linha ─────────                     │
│  lateral     │                                                │
│  esquerda    │  conteúdo: texto, tabela, gráfico              │
│  3,02" larg. │  x a partir de 3,18" · largura útil 9,80"      │
└──────────────┴────────────────────────────────────────────────┘
```

- **Banda lateral: 3,02" de largura, e ela nunca se estreita.** Quando o conteúdo não couber,
  escale o conteúdo proporcionalmente ou divida em dois slides. Estreitar a banda para ganhar
  espaço quebra a identidade do deck e é rejeitado na revisão.
- **Conteúdo:** começa em `x = 3,18"`; largura útil **9,80"**. Nada pode invadir a banda.
- **Tipografia:** fonte institucional **Rawline** no deck; **Arial** nos papéis de trabalho em Excel
  e nos documentos em Word. Se a Rawline causar problema visual real no deck, caia para Arial — só
  nesse caso, e avisando.

**Paleta institucional:** vive em `acta-way`. O que é específico do relatório e fica aqui é a
**regra de aplicação em série de gráfico**:

> Primeira série: verde institucional. Segunda: **preta**. Terceira: cinza escuro. Quarta: cinza
> claro. **Nunca dois verdes no mesmo gráfico** — tinta derivada do verde institucional é um segundo
> verde e é pega a olho na revisão. Onde você usaria verde claro, use cinza neutro; onde usaria
> verde médio para dar peso, use preto. Se precisar de mais de quatro séries, reveja o gráfico antes
> de rever a paleta.

O verde de farol (semáforo: divergência, severidade, grau de implementação) é exceção — é sinal, não
decoração, e não conta como segunda cor da série.

---

## 2. Padrão de tabela

**O primeiro passo é matar o estilo nativo.** Remova o `tableStyleId` e zere as flags de banding
(`firstRow`, `firstCol`, `lastRow`, `lastCol`, `bandRow`, `bandCol`). Sem isso o PowerPoint
reaplica o estilo do tema **por cima** dos seus preenchimentos — foi assim que um cabeçalho teimou
em voltar laranja depois de três correções. O código está na reference.

Depois:

- Cabeçalho: fundo verde institucional, fonte branca **bold**, centralizado.
- Faixa de seção dentro da tabela: fundo **preto**, fonte branca bold.
- Corpo: zebra cinza claro nas linhas ímpares; bordas cinza neutro; fonte preta.
- Linha TOTAL em negrito, com fundo de destaque cinza.
- Valor à direita, texto à esquerda, quantidade e percentual centralizados.
- `R$ 1.234,56` e `dd/mm/aaaa`.

**Fonte escalada pelo número de linhas.** Foi o que resolveu tabelas de trinta e poucas linhas
transbordando o slide:

| Linhas | Fonte | Margem vertical da célula |
|---|---|---|
| ≥ 25 | 6,5 pt | reduzida |
| 15 a 24 | 7,5 pt | reduzida |
| 10 a 14 | 8,5 pt | normal |
| < 10 | 9 pt | normal |

Se a tabela só couber abaixo de 6,5 pt, ela não cabe: quebre em dois slides ou mova o detalhe para
o papel de trabalho e deixe no slide o agregado.

**Duas armadilhas de dimensão:**

1. **Definir `.width` no shape da tabela não redimensiona as colunas.** É preciso escalar cada
   `table.columns[i].width` individualmente, proporcionalmente. Sem isso duas tabelas do mesmo
   slide se sobrepõem sem que a inspeção programática acuse nada.
2. **A altura armazenada mente.** Uma tabela reportou 5,10" quando a altura real no render era
   1,68". Para posicionar o que vem abaixo dela, **meça no render**, não no XML.

**Slide que parece tabela e não é.** Decks herdados trazem grades de caixas de texto soltas.
Escalar proporcionalmente corta o rótulo; ative quebra de linha e respeite o piso de 6,2 pt. Se for
reformar o slide, prefira converter a grade em tabela real.

---

## 3. Gráficos nativos, nunca imagem

O gráfico entra como **objeto nativo do PowerPoint**, não como PNG. O motivo é operacional: o
auditor responsável edita os dados depois, direto no arquivo, sem precisar de nova geração — e o
revisor consegue conferir a série contra o papel de trabalho. Gráfico como imagem é um beco sem
saída na primeira correção de número.

Tipos em uso: colunas empilhadas (evolução por competência), barras 100% (grau de implementação por
processo), pizza (composição). Para atualizar um gráfico existente, substitua os dados em vez de
recriar o shape.

**Rótulo de série nunca carrega identificador.** Final de cartão, número de conta, CPF/CNPJ,
matrícula, nome de pessoa e nome de fornecedor ficam **fora** do rótulo do gráfico e do título do
slide: use o papel ou um rótulo genérico (`Meio de pagamento A`, `Centro de custo 1`). O
identificador vive no papel de trabalho, de acesso restrito — o deck circula.

**Ênfase.** Quando o slide tem tabela e gráfico, o gráfico manda no espaço. Se não couber, divida em
dois slides antes de encolher a fonte.

**Quando a escolha visual é legítima, entregue as duas.** Barra e pizza do mesmo dado em slides
duplicados, e o auditor apaga a que não quiser. Funciona melhor que tentar acertar de primeira.

---

## 4. Operações de slide: o que é seguro

**Duplique o último slide e escreva no fim.** É o padrão, sem exceção. Mover slide depois de criado
desloca os índices de todos os demais, e uma segunda operação sobre um índice antigo atinge outro
slide — já apagou um ponto inteiro do relatório, recuperado só porque existia a versão anterior na
pasta. Se a posição final importa, mova **uma única vez** e reconfira contagem e títulos antes de
qualquer outra operação.

**Localize o slide pelo texto do título, nunca pelo índice.** O auditor reordena os slides entre
turnos. Índice de ontem não vale hoje; título vale.

**Não remova slide editando `sldIdLst`** sem tratar a relação correspondente: gera partes duplicadas
e aviso de reparo ao abrir. Prefira editar no lugar — limpe as shapes e redesenhe.

**Preserve o que o auditor mexeu.** O arquivo mais recente é a verdade, inclusive quando contradiz o
que você gerou. Leia o estado atual antes de reescrever qualquer bloco. Quando a alteração é pequena
e o risco de conflito é real, ofereça o texto pronto para ele aplicar no próprio PowerPoint em vez
de reescrever o slide.

**Copiar slide entre decks** (trazer um bloco da sua versão para a versão revisada pelo sócio
responsável): use COM, que preserva imagens e relações. É mais rápido e mais seguro que refazer.

**Antes de operar, copie o arquivo e trabalhe na cópia; depois releia o que você acha que
escreveu.** O fluxo completo de publicação segura está em `acta-way:ambiente-tecnico`.

---

## 5. Estrutura canônica do deck

```
1        capa
2        objetivo e escopo do teste          ← só os processos efetivamente avaliados
3        maturidade do processo e volumetria
4        avaliação dos riscos / nível de maturidade dos controles
5 e 6    régua de riscos (por origem: ciclo × execução)
7 e 8    grau de implementação dos controles + matriz enxuta
9 a 12   panorama quantitativo (pagamentos, partes relacionadas, fornecedores, natureza do gasto)
13…      divisória de processo, depois os pontos
n        cada ponto: 1+ slides + slide de Riscos e Recomendações com o MESMO título
```

**Escada de maturidade** (slide 4): barra mais alta = mais controle = mais segurança. A visão é
ascendente e **nunca se achata** em blocos de altura igual — achatar destrói a leitura, que é o
único conteúdo do slide. E **não posicione processo sem resultado de teste concluído**: inventar
nível num slide que a Diretoria vai ler como retrato do ambiente é pior que omitir o processo.

**Espaço para print.** Quando o auditor pede área reservada para colar evidência, deixe o espaço
vazio alinhado à grade e diga em qual slide ele está.

**Faixa preta / tarja.** Tarja num slide serve para cobrir dado sensível antes de circular. Aplique
como retângulo sólido sobre a região — não apague o conteúdo por baixo, ele é a evidência.

---

## 6. Versão nova, sempre

`Relatório <Assunto> - v<N>.pptx`, N inteiro crescente. Nunca sobrescreva. A versão anterior fica
intacta na pasta (ou em `Revisão\`). Quando chega a versão revisada pelo sócio responsável, **ela**
passa a ser a base: seu trabalho é copiar o que você fez para dentro dela, nunca o contrário.

Antes de publicar: abre sem aviso de reparo? A contagem de slides é a esperada? Nenhum slide ficou
vazio? O título do slide alterado continua o mesmo, se não devia mudar?

---

## 7. Render não é opcional

Inspeção programática não vê estouro de caixa, texto cortado, tabela fora da margem nem
sobreposição. Renderize os slides tocados para PNG e **olhe**.

O que procurar no PNG:

- texto cortado no fim da caixa;
- tabela invadindo a banda lateral;
- shapes sobrepostos;
- rótulo de gráfico ilegível ou truncado;
- vão morto entre colunas (tabela estreita demais para a largura útil);
- título em duas linhas empurrando o conteúdo para fora do slide;
- cor fora da paleta — um segundo verde aparece no PNG antes de aparecer no XML.

Se o render mostrar conteúdo velho duas vezes seguidas, suspeite do ambiente antes de "corrigir" o
que já está certo (ver `acta-way:ambiente-tecnico`).

---

## 8. Relatório detalhado em Word

Quando o cliente pede o relatório em Word, o deck **não é convertido slide a slide**: ele é
reorganizado na estrutura do relatório detalhado, que é outro documento, com outra lógica de
leitura — o deck argumenta em blocos visuais, o relatório detalhado amarra risco, controle, teste e
ação em texto corrido auditável.

**Ordem das seções:**

```
carta de apresentação · índice · capa interna
I        objetivo e escopo
II.A     matriz de riscos e controles
II.B     resultado dos testes
III      recomendações e plano de ação
Anexo I  mapa de riscos: impacto versus vulnerabilidade
Anexo II análise dos riscos de negócio
```

**A matriz de II.A é duas tabelas por subprocesso, empilhadas** — nunca uma tabela larga só:

| Tabela de cima (riscos) | Tabela de baixo (controles) |
|---|---|
| `Risco` · `Fator de risco` · `Imp.` · `Vuln.` | `Técnica de controle` · `Resultado` · `Aspectos identificados` · `Rec.` |

É esse empilhamento que permite ler risco → controle → teste → ação numa página só, por subprocesso.
Uma tabela única com oito colunas não cabe no A4 e perde a correspondência.

**Geometria da página:** A4 retrato, margens **3 cm** laterais e **2,5 cm** topo e base. Fonte
institucional declarada também no tema do documento. Cabeçalho com logo à esquerda, rótulo à direita
e linha na cor institucional; rodapé com nota de confidencialidade e campo `PAGE`. O índice usa
remissão textual às seções; a paginação é atualizada no Word pelo próprio usuário.

**Sanitize toda referência interna antes de escrever.** Versão de deck, número de slide e código de
papel de trabalho são vocabulário de produção, não do entregável: troque por *"Vide Seção II.B"*.
Já vazou remissão interna para a versão entregue — o que a pegou foi o render, não a leitura.

**Numeração dos aspectos é contínua** no documento inteiro e não reinicia por bloco temático: um
bloco vira um título em caixa alta, cada slide de origem vira um aspecto numerado em sequência.

A mecânica de extração, sanitização e montagem está em
[references/mecanica-pptx-docx.md](references/mecanica-pptx-docx.md), §6.

---

## O que entregar

1. O deck na estrutura canônica da §5, em **versão nova**, com os slides tocados renderizados e
   conferidos no PNG contra a lista da §7.
2. Quando o cliente pedir o formato, o **relatório detalhado em Word** na estrutura da §8,
   verificado por render em PDF.
3. O aviso ao auditor responsável, em uma linha: quantos slides tem a versão, onde o conteúdo novo
   entrou, o que mudou em relação à versão anterior — e o que ficou reservado para ele (espaço de
   print, conferência tipográfica, atualização de índice).

## Próximo passo

Nenhum — este é o artefato final do trabalho de auditoria. Se ao montar o slide aparecer um número
que não fecha, volte para `bases-e-conciliacao` antes de desenhar; se o texto do ponto não sustentar
o título, volte para `redacao-de-achados`. Nunca ajuste o número ao slide.
