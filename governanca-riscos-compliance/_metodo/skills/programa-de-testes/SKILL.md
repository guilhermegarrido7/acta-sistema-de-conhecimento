---
name: programa-de-testes
description: Construa e revise programa de testes, registro de riscos e matriz de controles versus riscos. Acionar ao desenhar plano de testes, ao numerar riscos R1..Rx, ao montar a matriz controles × riscos, ao avaliar grau de implementação, ou ao calibrar a régua de riscos.
---

# Programa de testes, registro de riscos e matriz de controles

Carregue `metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não
são repetidas.

## Papel desta skill

**Documento de comando do trabalho.** O programa define o que se testa, por quê, com qual técnica —
e concentra o resultado. Tudo o que se conclui em papel de trabalho, achado ou slide volta para cá.

Artefato em `~~pasta de trabalho`, pasta do programa de trabalho: `Matriz de Testes — <cliente>
(vN).xlsx`, com uma aba de matriz, uma de riscos e uma de régua de amostragem. **Sem célula mesclada
em nenhuma delas** — regra e verificação em `papel-de-trabalho`.

Detalhe operacional — as 26 colunas, a régua de amostragem, o formato do ID, as colunas da aba de
riscos e a matriz limpa do relatório — em
[references/matriz-e-amostragem.md](references/matriz-e-amostragem.md).

## 1. A regra estruturante: política não limita controle

É a R7 do método, e aqui ela vira **estrutura**: duas colunas separadas na matriz.

| Coluna | O que entra | Exemplo |
|---|---|---|
| **Política** | onde está no normativo do cliente e o que diz, de forma simples | *"Aprovação conforme alçada (Coord R$ 5 mil / Ger R$ 10 mil / Diretoria R$ 100 mil), item 6.11"* |
| **Controle** | o que se verifica de fato, completo, em melhor prática de mercado | *"Verificar a existência de compras aprovadas conforme alçada, verificando se: (i) houve aprovação da solicitação de compra; (ii) houve aprovação da cotação/pedido, se material; (iii) houve aprovação da cotação, se contrato; (iv) houve aprovação e formalização do contrato."* |

Quando a política é pobre, o controle testado **continua sendo o completo** — e o resultado provável
é que não exista aprovação em uma ou mais etapas. O que a política **exige mas não operacionaliza**
é achado de desenho por si só.

O mesmo vale para o mínimo declarado. Se a política pede cinco campos na requisição, esse é o
**piso**: o controle verifica se a requisição traz informação suficiente para a área técnica apreciar
— especificação, quantidade, setor, finalidade, urgência, descrição —, o que pega não só a compra sem
necessidade como a compra sem cobertura de informação.

## 2. Um teste, uma conclusão

Quando a fonte é um **roteiro corporativo com muitas etapas** (roadmap de inventário, checklist de
recebimento, protocolo de fechamento), a tentação é virar tudo num único teste "verificar aderência à
política, contemplando (i) a (ix)". **Não faça.**

Um teste produz **uma** conclusão. As etapas de um roteiro falham por razões diferentes, com
recomendações e severidades diferentes: comprimir nove pontos em um destrói oito conclusões e some
com oito achados. Desdobre o roteiro nas suas fases — uma linha por ponto de controle, cada uma com
ID, evidência, técnica e conclusão próprias. Se o roteiro tem fases (pré, durante, pós), use-as como
Subprocesso: a estrutura do roteiro costuma ser a melhor estrutura do programa.

**O sinal de que você comprimiu:** a coluna Controle tem mais de quatro incisos numerados **e** as
evidências requeridas são de naturezas distintas (documento, tela, log, contagem física).

### Roteiro que pressupõe presença, quando não vai haver presença

Roteiro de inventário, contagem ou acompanhamento operacional é escrito para quem vai **estar lá**.
Se o escopo acordado não inclui a presença, converta cada ponto para **avaliação retrospectiva sobre
o último ciclo realizado**, e declare a conversão nos Critérios.

Para cada ponto, pergunte: *que rastro este controle deixou?* Fichas de contagem, log de digitação
com usuário e horário, relação de equipes, chamado ao TI, vias físicas das últimas notas antes do
corte, carta de inventário com data de aprovação, relatório de movimentação na janela. Esse rastro é
a coluna Evidência requerida. Três cuidados:

- **Varra o programa por resíduo de presença.** "No momento da auditoria", "acompanhar a contagem" ou
  dependência de "data do próximo ciclo" nos Critérios denunciam teste que ainda pressupõe a janela.
  Num engajamento, um teste de contagem cega sobreviveu à conversão e caiu só na versão seguinte.
- **Reperformance substitui presença.** Recalcular a divergência pelas fichas contra o saldo da
  data-base e confrontar com o ajuste efetivamente lançado recupera a efetividade sem estar lá.
  Procure o equivalente reperformável antes de aceitar que só resta desenho.
- **Procedimento próprio da auditoria não é o ciclo do cliente.** Contagem amostral feita pelo
  auditor na visita é teste substantivo, não inventário da unidade. Mantenha-a, mas nomeie e declare
  assim — senão parece que você reintroduziu o que foi excluído do escopo.

### Processos que se cruzam num item: teste recíproco

Quando o escopo tem **dois processos que se encontram no mesmo item** (sucata é receita na venda e
baixa no estoque; adiantamento é contas a pagar e pessoal; frete é compras e estoque), escreva o
**par de testes recíproco** e faça cada um **citar o ID do outro** na Crítica ACTA.

Sem isso cada processo audita metade do fenômeno e a falha não aparece em nenhum dos dois: a saída
sem nota fica invisível para quem olha só a baixa, e a nota sem baixa fica invisível para quem olha
só a receita. O par certo é *"da quantidade física para o registro"* e *"do registro para a
quantidade física"*, executados na mesma passada.

## 3. Tipo de Controle

`Preventivo` · `Detectivo` · `Corretivo`, cruzado com `Manual` · `Automático` · `Semiautomático`.
Marque também `Key control` quando a falha isolada do controle já produz o risco.

A taxonomia não é rótulo: ela decorre da cadeia causal do §6. O **preventivo** ataca o *fator*; o
**detectivo** captura o *evento*; o **corretivo** reduz o *impacto*.

## 4. Tipo de Teste: vocabulário fechado de cinco valores

**Existem exatamente cinco tipos de teste.** Vocabulário fechado, decisão do auditor responsável.

| Tipo de Teste | O que é |
|---|---|
| `Análise documental` | conferência de documento e evidência preexistente: contrato, aprovação, certificado, ficha, nota, recibo, laudo, cartão de autógrafos |
| `Testes de base` | teste sobre dado: cruzamento de bases, recálculo, reperformance, corte analítico |
| `Inspeção física` | o que se conclui a partir do que o auditor **vê, mede ou conta no local**, sem documento preexistente e sem base a cruzar: lonamento de veículo na portaria, válvula antifurto no tanque, endereçamento do estoque, condição de material inservível, medição de tanque por régua, contagem física |
| `Revisão de acessos` | perfis, permissões, trilha de usuário e segregação de funções |
| `Simulação sistêmica` | tentar **violar** um bloqueio parametrizado: lançar preço fora da tabela, pagar fornecedor não cadastrado, criar ticket manual fora do fluxo. Descreve a tentativa de burla, não a visualização de tela |

**A fronteira entre `Inspeção física` e `Análise documental`** é *onde a conclusão se apoia*, não
onde o auditor está. Se existe documento que a sustenta (atestado de calibração, reserva assinada,
recibo de EPI), o tipo é `Análise documental` ainda que a conferência ocorra em campo. Se a conclusão
só existe porque alguém olhou, mediu ou contou, é `Inspeção física`. Por isso contagem física e
medição por instrumento são `Inspeção física`, **não** `Testes de base`: o ato que gera a evidência é
físico, e a comparação com o saldo sistêmico vem depois. `Testes de base` é dado-sobre-dado.

**O que não é tipo de teste:**

- `Reperformance`, `Amostragem` e `Teste de base 100%` são **atributos** que vivem dentro de um dos
  cinco. Reperformar um cálculo é `Testes de base`; conferir documento por amostra é
  `Análise documental` com abrangência amostral.
- `Walkthrough` não é teste nem tipo de teste — walkthrough de processo é, por si, entregável de
  nível consultoria. Usa-se a técnica de forma isolada para **entender** o processo, mas ela nunca
  entra na matriz como linha e nunca recebe conclusão: *"Nunca um teste, mas uma técnica que podemos
  usar."*
- `Indagação` e `Observação` seguem a mesma sorte: são meios de obter evidência. A linha recebe o
  tipo pelo **que a conclusão se apoia**, não pelo gesto de obter a evidência.

**Um tipo só por linha.** Se o teste usa dois, quebre em dois testes: facilita concluir e evita
conclusão ambígua. **Abrangência é coluna própria**, ao lado do tipo: `100%` ou `Amostral` — critério
e régua de dimensionamento por frequência × risco na reference.

**Não existe coluna "Tipo de Teste: desenho / efetividade / ambos".** Foi removida por decisão do
auditor responsável: *"não entendi as colunas tipo do teste (efetividade, desenho e ambos), isso não
faz sentido."* A distinção desenho × efetividade vale como **regra de raciocínio** (R6) e aparece no
**resultado**, em duas colunas. Como classificação a priori do teste, não entra.

## 5. Conclusão: vocabulário fechado

**Só existem três resultados de teste de controle:** `Eficaz` · `Parcialmente Eficaz` · `Ineficaz`.
Nada de "Atende", "Conforme" nem sinônimo. Vale no programa, na matriz, no campo Resultado do papel
de trabalho e no slide. **Este é o lugar canônico desse vocabulário.**

### Desenho e efetividade em duas colunas, não em uma

O RACM corporativo de referência tinha uma **única** coluna `Status Controle`. Isso confunde duas
perguntas distintas e impede distinguir *controle que não existe* de *controle que existe e falhou*.
Duas colunas:

| Coluna | Pergunta | Vocabulário |
|---|---|---|
| `Status do Controle (desenho)` | o controle existe, está formalizado e é adequado? | `Implementado` · `Parcialmente Implementado` · `Não Implementado` · `Não Aplicável` · `A avaliar` |
| `Conclusão do Teste (efetividade)` | ele funcionou no período, caso a caso? | `Eficaz` · `Parcialmente Eficaz` · `Ineficaz` |

O grau de eficácia sai da coluna de **efetividade**; o percentual de implementação, quando pedido,
sai da de **desenho** — e os `Não Implementado` / `Parcialmente Implementado` são o backlog de
recomendação.

**Controle que não pôde ser testado é `Ineficaz` por default.** Se não houve como testar, o controle
não é evidenciável, portanto não opera. Nunca deixe "Não testado" como resultado. Ao lado, registre a
**razão** da não testabilidade, separando três situações que parecem iguais: (i) o controle não
existe; (ii) existe mas não foi evidenciado pela Companhia; (iii) depende de acesso sistêmico que a
auditoria não obteve. Sem essa distinção o Conselho não diferencia ausência de controle de ausência
de evidência. A coluna `Doc. Recebida?` operacionaliza a razão (ii).

**Nunca deixe célula no valor default do dropdown.** Num RACM corporativo de referência, 9 de 68
controles ficaram com `Selecionar` — na prática, controle sem conclusão, o mesmo vício do "Não
testado".

**Grau de eficácia por processo**, com a fórmula declarada no slide em que ele aparece:

```
grau = (eficazes + 0,5 × parcialmente eficazes) / total de controles
```

### Coluna `Solicitação`: amarre cada teste ao item da carta

Cada teste aponta o item da solicitação documental que o alimenta (`C.8`, `E.1`) — assim, item não
atendido mostra imediatamente quais testes caem. Teste cuja evidência é produzida em campo pela
auditoria recebe `In loco`: não há documento a pedir, e deixar em branco parece omissão. Gere esse
índice **por código**, a partir da própria aba de solicitação, nunca à mão.

## 6. Registro de riscos: cinco conceitos que não se misturam

Este é o erro que mais custou: num engajamento, **oito dos 24 riscos** traziam no campo do risco
aquilo que era fator de risco, e tiveram de ser reescritos.

| Campo | O que é |
|---|---|
| **Risco (categoria)** | a **natureza da perda**, usada para agrupar e para a régua do relatório. Taxonomia fechada, abaixo |
| **Evento de risco** | o **acontecimento futuro e incerto** que, se ocorrer, prejudica o objetivo do processo. Substantivo de acontecimento, curto, sem descrever causa nem controle ausente |
| **Fator de risco** | a **condição presente e observável** que torna o evento provável. É a causa, e é aqui que entra o achado. **Vários por evento**, em bullets |
| **Impacto** | a **consequência** nas operações — Alto, Médio ou Baixo — **caso** o evento se materialize |
| **Vulnerabilidade** | o **risco residual** — Alto, Médio ou Baixo — resultante das práticas de controle que **estão operando** |

`Risco` e `Evento de risco` são **colunas separadas**, não sinônimos: `Inadimplência` é a categoria;
*"Concessão de crédito superior à capacidade financeira do cliente"* é o evento. **A cadeia causal:**

```
FATOR DE RISCO ──habilita──▶ EVENTO DE RISCO ──produz──▶ IMPACTO
 (presente,                   (futuro,                    (consequência)
  observável)                  incerto)
                                   │
                  após os controles que operam ──▶ VULNERABILIDADE
```

Daí decorre a taxonomia de Tipo de Controle (§3), e daí decorre também que **controle sem risco
associado é sinal de controle desnecessário** e **risco sem controle é lacuna de cobertura**.
**Teste rápido de classificação:**

| Sinal na frase | Classificação |
|---|---|
| Começa com *"Ausência de", "Inexistência de", "Falta de", "Descentralização de"* | **fator** |
| Substantivo de acontecimento (*"Receita não faturada"*, *"Desvio de combustível"*) | **evento** |
| Consequência mensurável em dinheiro, prazo ou reputação | **impacto** |

Pares de reescrita fator → evento, e a armadilha de preencher o fator com o impacto (que quebra a
associação do controle preventivo, porque some a condição que ele atacaria), em
[references/matriz-e-amostragem.md](references/matriz-e-amostragem.md) §5.

### Taxonomia fechada de categoria de risco

Use estas antes de inventar categoria nova: `Aderência às Regras` · `Falha de Produto / Serviço` ·
`Inadimplência` · `Contábil e Financeira` · `Fiscal e Regulatória` · `Fraude e Desvio` ·
`Confiabilidade da Medição`.

As três últimas foram acrescentadas por serem estruturais e não existirem no RACM de referência, que
classificava multa fiscal como falha de serviço — erro. `Confiabilidade da Medição` vale para todo
processo cuja receita ou cujo saldo é apurado por instrumento: balança, medidor de vazão, apuração
por agente externo, contagem física.

### Código de risco: `<CódProcesso>.R<NN>`

`CTR.R01`, `EST.R01`, `TRV.R01` — `TRV` para o que é transversal a dois processos. Substitui a
numeração simples `R1..Rx`, que **colide** quando há mais de um processo no mesmo registro: com `R13`
não se sabe se é risco de receita ou de estoque. Ordene por prefixo, depois por número.

**Aba de riscos separada, associação por código.** Não repita o texto do risco na linha do controle.
Num RACM de referência, as cinco linhas que faziam isso produziram pareamento falso: o risco
*"concessão de crédito superior à capacidade"* apareceu na linha do controle *"base de dados única de
clientes"*, que não o mitiga. Risco e controle em colunas independentes viram associação por acidente
de ordenação.

**Toda atividade do fluxo recebe risco, e todo controle recebe risco.** E **não declare risco de
processo não concluído**: sem os testes fechados não há como afirmar a vulnerabilidade, que depende
dos controles que operam — deixe a coluna como *a definir* e sinalize. **Melhoria sua entra como
sub-ID em cor diferente:** se o `R2` do cliente é incompleto, proponha `R2.1` em outra cor,
preservando o original.

### Renumerar riscos

Acontece. Renumeração é operação de **três frentes no mesmo passo**, senão gera inconsistência:

1. A aba de riscos.
2. A coluna `Riscos (Cód.)` de **todos** os controles da matriz de testes.
3. A régua de riscos e a matriz no **relatório**.

Faça o mapa `antigo → novo` explícito, aplique por substituição de **token inteiro** — cuidado:
`R1` casa dentro de `R12`, use fronteira de palavra — e **reconte** ao final: quantos IDs distintos,
quantas células de associação, nenhum órfão.

## 7. Revisar um programa existente

1. **Leia os benchmarkings da pasta antes de mexer.** Planos de outros mandatos são a fonte da
   taxonomia e da forma de escrever. Não invente categoria nova se o benchmark já tem uma.
2. **Cheque cliente e contexto.** Plano herdado costuma trazer nome de outro cliente e testes
   defasados ou impertinentes (teste de cheque, teste de estoque numa auditoria de contas a pagar).
   Sinalize em vez de apagar em silêncio.
3. **Marque como N/A o que o cliente não tem**, com a razão. É informação, não lacuna.
4. **Confronte com a política e com a narrativa:** o que a política exige e não existe; o que a
   narrativa revela e a política não cobre (requisição por WhatsApp, comprador que cota sem
   registrar).
5. **Verifique a cobertura por atividade do fluxo.** Atividade sem teste é ponto cego.
6. **Devolva o que falta solicitar.** Lacuna documental é entregável, e vira solicitação complementar.

## O que entregar

1. A matriz de testes com as 26 colunas preenchidas, retangular, sem célula mesclada, e a aba de
   régua com a `Frequência do Controle` preenchida em todas as linhas.
2. O registro de riscos em aba própria, código `<CódProcesso>.R<NN>`, com `Controles associados`
   gerado por código.
3. A matriz limpa `Processo | Subprocesso | Controle | Conclusão | Riscos` para o relatório, e o
   grau de eficácia por processo com a fórmula declarada.
4. A lista do que **não** pôde ser testado, com a razão classificada em (i), (ii) ou (iii).
5. A solicitação complementar decorrente das lacunas documentais encontradas.

## Checklist antes de dar por concluído

- Nenhum teste com mais de quatro incisos cujas evidências sejam de naturezas distintas.
- Um único Tipo de Teste por linha, dentre os cinco. Nenhum `Walkthrough`, `Indagação`, `Observação`,
  `Reperformance` ou `Amostragem` como tipo.
- Nenhuma célula de conclusão no default do dropdown, nenhum "Não testado", nenhum ID já emitido
  renumerado.
- Todo controle com pelo menos um risco associado; nenhum risco com `Controles associados` vazio; e
  nenhum risco cujo campo Evento esteja preenchido com fator ou impacto.
- Nenhum resíduo de presença ("no momento da auditoria", "acompanhar a contagem") se o escopo não
  inclui a visita. Par recíproco escrito e com citação cruzada onde dois processos se cruzam.

## Próximo passo

`papel-de-trabalho`, que executa cada linha da matriz e devolve o resultado para as colunas 20 a 23.
Depois `redacao-de-achados`, que converte a conclusão em ponto com Condição, Risco, Recomendação e
Severidade, e `relatorio-de-auditoria`, que leva a matriz limpa e a régua de riscos para o deck.
