---
name: universo-da-folha
description: Feche o universo da folha antes de testar qualquer coisa, com competências cobertas, headcount por mês, dicionário de rubricas e a separação entre provento, desconto e base de incidência. Acionar ao abrir auditoria de folha, ao receber o arquivo de lançamentos, ao conciliar folha com a contabilidade e com o pagamento bancário, ou ao declarar competência fora de escopo.
---

# O universo da folha: competência, rubrica e conciliação

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas. Este plugin é de **processo auditado**. O método de auditar vive no plugin de método.

**Antes de abrir a base, carregue `acta-way:anonimizacao-e-lgpd`.** Ver §7. Base de folha é o
material mais sensível que entra na firma, e o cuidado com ela é pré-requisito do trabalho, não
providência de encerramento.

Esta é a skill de entrada do plugin. Ela decide **sobre o que se conclui**; as demais dizem **como**.

## 1. A pergunta-mestra

> **Pagou-se a quem trabalhou, pelo que foi contratado e efetivamente prestado, no valor que a regra
> aplicável determina, uma única vez, com os encargos e descontos que aquela verba comporta?**

Folha é, na empresa brasileira de porte médio, a maior linha de custo depois de matéria-prima, e a
de erro mais silencioso. O erro de folha não estoura: ele se repete todo mês, por parametrização, e
aparece anos depois em fiscalização ou em reclamatória, com juros e multa. Por isso o trabalho aqui
**não é recalcular a folha inteira**. É achar a regra errada que se repete, medir por quantas
competências ela rodou, e dimensionar o passivo que ela acumulou.

Essa é a diferença de mentalidade que separa auditoria de folha de conferência de folha. A
conferência pergunta se o contracheque daquele mês está certo. A auditoria pergunta **desde quando
está errado e para quantas pessoas**.

## 2. Os cinco subprocessos e os blocos executáveis

```
Admissão e cadastro → Movimentação e evento variável → Processamento e cálculo
  → Desembolso e recolhimento → Desligamento
  [transversal: terceiro, PJ, estagiário, cooperado, aprendiz]
```

Numeração no padrão `WP.<PROCESSO>.<NN>`; abreviação da casa **FOP**. O controle da terceira coluna é
o de **melhor prática de mercado**, não o normativo interno do cliente.

| WP | Bloco | O controle (melhor prática) | Skill |
|---|---|---|---|
| **FOP.01** | Universo, rubricas e conciliação | Dicionário de rubricas mantido, com incidência parametrizada e revisada; conciliação mensal da folha com o razão e com o arquivo bancário, assinada por quem não processa | `universo-da-folha` |
| **FOP.02** | Cadastro, admissão e registro | Registro tempestivo antes do início da prestação, documentação conferida por checklist, exame admissional prévio e evento de admissão transmitido no prazo | `admissao-e-desligamento` |
| **FOP.03** | Jornada e evento variável | Ponto eletrônico integrado à folha, aprovação prévia da hora extra, tratamento formal de banco de horas e crítica de inconsistência de marcação | `horas-extras-e-jornada` |
| **FOP.04** | Encargos, impostos e benefícios | Cálculo automático de INSS, FGTS e IRRF sobre base parametrizada por rubrica; conciliação do benefício faturado com o elegível e com o descontado | `encargos-e-beneficios` |
| **FOP.05** | Processamento, aprovação e desembolso | Segregação entre cadastrar, processar, revisar e liberar; aprovação do líquido total por alçada; remessa bancária conferida contra o resumo da folha | `universo-da-folha` |
| **FOP.06** | Desligamento e rescisão | Cálculo automático das verbas, exame demissional, pagamento no prazo legal e exclusão da folha e dos benefícios na competência seguinte | `admissao-e-desligamento` |
| **FOP.07** | Trabalhador sem vínculo direto | Contratação de PJ, cooperado, estágio e terceiro com objeto definido, sem subordinação, pessoalidade ou habitualidade, e com fiscalização documentada do prestador | `terceiros-e-pj` |

A matriz de riscos do processo está em `matriz-de-riscos-da-folha`. A mecânica de montar o papel de
trabalho está em `papel-de-trabalho`; a taxonomia de tipo de teste, a régua de amostragem e o código
de risco, em `programa-de-testes`.

## 3. Fechar o universo: o que se pede e o que se confere

O erro de escopo mais comum na auditoria de folha é concluir sobre uma base que já chegou incompleta,
porque o sistema de folha exporta por competência, por coligada e por **período de cálculo**, e quem
exporta costuma entregar só o período 1.

### 3.1 A base de lançamentos

Peça o **lançamento analítico por pessoa e por rubrica**, não o resumo. O resumo por rubrica serve
para a leitura horizontal da §5, e não permite nenhum dos testes das outras skills. A base que
sustenta o trabalho tem, em alguma nomenclatura, estes campos:

| Campo | Para que serve no teste |
|---|---|
| Empresa e filial | Corte por entidade legal; o mesmo grupo tem regra de convenção coletiva diferente por filial |
| Matrícula ou registro | Chave da pessoa. É o identificador que substitui o nome em todo papel de trabalho |
| Função e seção ou centro de custo | Base do teste de adicional por função e do teste de isonomia |
| Ano, mês e **período de cálculo** | Ver §3.2. Sem esse campo a base parece completa e não é |
| Situação | Ativo, férias, afastado, demitido. Entra no cruzamento de pagamento a inativo |
| Admissão, demissão e motivo | Teste de tempestividade, de pagamento após desligamento e de rescisão |
| Unidade da federação | Piso regional e convenção aplicável |
| **Tipo da rubrica: provento, desconto ou base** | Ver §4. É o campo que impede o auditor de somar o que não se soma |
| Código e descrição da rubrica | Chave do dicionário de rubricas |
| Valor, e quando houver, referência em horas ou dias | O número que se recalcula |

Peça também o **espelho do contracheque** de alguns registros da amostra: é como se confere que a
base exportada reproduz o documento que a pessoa recebeu.

### 3.2 Os períodos de cálculo que somem

Uma competência não é uma folha. Numa mesma competência rodam folhas distintas, cada uma com seu
identificador de período, e cada sistema numera à sua maneira: adiantamento quinzenal, folha mensal,
férias, rescisão, primeira e segunda parcela do décimo terceiro, participação nos resultados, folha
complementar. **Peça a relação de todos os períodos processados no intervalo auditado** e confronte
com o que veio na base. O que mais some, nessa ordem: rescisão, folha complementar e décimo terceiro.

A folha complementar merece nome próprio. Ela existe para corrigir o que o fechamento errou, e é
justamente por isso que é a população mais informativa da base: **volume e recorrência de folha
complementar são a medida direta da qualidade do processamento**. Levante quantas houve, por qual
motivo e para quantas pessoas, antes de qualquer outro teste.

### 3.3 O headcount por competência

Monte a série de headcount por competência contando **matrículas distintas com lançamento no mês**,
por entidade. Não derive o passado da relação de ativos de hoje: quem saiu não aparece nela, e o
headcount dos meses antigos sai subestimado.

Confronte a série com três referências e explique cada degrau: a relação de admitidos e demitidos do
período, o efetivo informado pela área de pessoal e o quadro do controle de ponto. Divergência entre
eles é achado antes de qualquer teste de valor, porque **pessoa que está numa base e não está na
outra é ou pagamento sem contrapartida ou trabalho sem registro**, e as duas hipóteses são graves.

## 4. Provento, desconto e base de incidência

A distinção que organiza a base inteira, e a que o auditor iniciante ignora, somando tudo que é
valor e chegando a um total que não existe em lugar nenhum.

| Tipo | O que é | O que nunca fazer |
|---|---|---|
| **Provento** | O que entra: salário, adicional, hora extra, comissão, férias, décimo terceiro, prêmio, benefício pago em dinheiro | Somar provento com base: a base é reflexo do provento, não parcela nova |
| **Desconto** | O que sai: contribuição previdenciária, imposto retido, adiantamento, vale-transporte, plano de saúde, consignado, pensão, faltas | Tratar desconto como despesa da empresa. Desconto sai do bruto da pessoa, não do custo do empregador |
| **Base** | Rubrica de memória que registra sobre quanto incidiu cada encargo: base previdenciária, base de FGTS, base de imposto retido | Somar. Base é a fotografia do cálculo, e é a ponte entre o que se pagou e o que se recolheu |

A identidade que tem de fechar, por pessoa e por competência:

```
Total de proventos − Total de descontos = Líquido a pagar
Base de cada encargo = Σ dos proventos cuja rubrica incide naquele encargo
```

A segunda linha é o teste central de `encargos-e-beneficios`. A base não é um dado recebido do
sistema para ser aceito: é um número que o auditor **reconstrói pela parametrização declarada** e
confronta com o que a folha gravou. Divergência entre a base reconstruída e a base gravada é rubrica
com incidência parametrizada errada, que é o erro que mais se repete na folha brasileira.

### O dicionário de rubricas

Peça o cadastro de rubricas com, para cada código: descrição, natureza (provento, desconto, base),
incidência declarada em cada encargo, fórmula ou referência de cálculo, e as datas de criação e da
última alteração. Esse cadastro é o **critério** contra o qual todo o resto se testa, e quase sempre
ele chega desatualizado, com rubricas criadas por alguém que já saiu e nunca revisadas.

Três leituras imediatas, antes de qualquer teste de valor:

1. **Rubricas criadas ou alteradas dentro do período auditado.** População pequena, risco alto, se
   testa a 100%: quem criou, com que autorização, com que incidência, e quantas pessoas foram pagas
   por ela desde então.
2. **Rubricas de descrição genérica** (diversos, ajuste, complemento, acerto, outros). São o
   escoadouro de tudo que não coube em lugar nenhum, e concentram pagamento fora de política.
3. **Rubricas com incidência zerada em todos os encargos.** Cada uma precisa de fundamento próprio.
   A rubrica sem incidência é o instrumento clássico de pagar remuneração como se não fosse, e é a
   que a fiscalização procura primeiro.

## 5. A leitura horizontal: rubrica por competência

Antes de amostrar qualquer coisa, monte a **matriz de rubrica por competência**: uma linha por
rubrica, uma coluna por competência, o valor total em cada célula, com total geral à direita. É uma
peça barata de produzir a partir da base analítica, e é a que mais dirige o resto do trabalho.

O que ela revela, e nenhuma amostra revelaria:

- **Rubrica que aparece num mês só.** Pagamento pontual que não se repetiu: ou foi acerto, ou foi
  pagamento fora de rotina. Os dois casos exigem documento.
- **Degrau abrupto de valor** numa rubrica estável. Mudança de parâmetro, de fórmula ou de população
  elegível, e a data do degrau é a data da mudança que ninguém mencionou.
- **Rubrica que cresce em linha reta** enquanto o headcount está estável. Habitualidade instalando-se,
  tipicamente em hora extra e em prêmio.
- **Rubrica de valor irrisório espalhada por muitas pessoas.** Costuma ser resíduo de arredondamento
  ou rubrica morta que ninguém desligou.
- **As dez maiores rubricas** concentram quase toda a folha. É por elas que o esforço começa, e é
  sobre elas que a conclusão vai pesar.

Rode a matriz **por entidade legal**, não consolidada. Grupo com várias empresas tem parametrização
divergente entre elas, e é exatamente a divergência que localiza o erro: a mesma rubrica com
incidência diferente em duas empresas do mesmo grupo significa que uma das duas está errada.

## 6. Os quatro pares que têm de fechar

A doutrina do número está em `acta-metodo-auditoria`; a mecânica de casar base com consumo de pool
está em `bases-e-conciliacao`. O que é próprio da folha são **quais** pares fecham. Reconcilie ao
centavo, por competência e por entidade. Nunca com aproximação.

1. **Folha × contabilidade.** O resumo da folha por competência contra a despesa de pessoal lançada
   no razão, aberta por conta. Concilie **por conta e por competência**, nunca só pelo total do ano:
   diferença positiva numa conta compensa a negativa de outra e a soma fecha enganando. Investigue
   todo lançamento manual em conta de pessoal, que é onde a diferença costuma ter sido empurrada.
   Inclua na conciliação as provisões de férias e de décimo terceiro, e confronte o saldo provisionado
   com o direito apurado pessoa a pessoa.

2. **Folha × pagamento bancário.** O líquido da folha contra o arquivo de remessa, contra o arquivo
   de retorno do banco e contra o débito no extrato. Três documentos, não um. Casa-se por matrícula e
   valor, e o que se procura são os resíduos: crédito no banco sem lançamento na folha, pagamento a
   pessoa que não está no cadastro, conta bancária que não bate com a cadastrada, e a mesma conta
   bancária recebendo por mais de uma matrícula.

3. **Folha × recolhimento.** A base gravada de cada encargo contra o valor efetivamente recolhido na
   guia, e o saldo a recolher no fim da competência contra o pagamento do mês seguinte. Detalhe em
   `encargos-e-beneficios`.

4. **Folha × declaração ao fisco trabalhista.** O que a folha calculou contra o que foi transmitido
   nos eventos periódicos de folha. Divergência entre folha e declaração é risco de autuação
   independente do mérito do cálculo: o número declarado é o que a fiscalização vai usar.

Cada par que não fecha é achado próprio, e a diferença se explica pessoa a pessoa, não por
justificativa agregada do tipo "diferença de arredondamento". Arredondamento tem ordem de grandeza
de centavos por pessoa; qualquer coisa acima disso tem outra causa.

## 7. O cuidado com a base, que vem antes do primeiro teste

`acta-way:anonimizacao-e-lgpd` vale aqui com peso maior que em qualquer outro plugin da casa. Base de
folha reúne, no mesmo arquivo, identificador direto, remuneração individual e, por rubrica de
benefício e de afastamento, **dado pessoal sensível**: condição de saúde, filiação sindical, cota
legal, pensão alimentícia. O que aquela skill obriga, aplicado a este trabalho:

1. **Peça o mínimo.** Se o teste roda por matrícula, a base vem sem nome e sem número de documento.
   A identificação só é necessária no confronto com a documentação física da amostra, e ali ela se
   resolve com a lista dos registros selecionados, não com a base inteira identificada.
2. **Corte na entrada.** Derrube as colunas identificadoras na primeira leitura e trabalhe da base
   reduzida. O arquivo com identificador direto na pasta já é exposição, independente do uso.
3. **Pseudonimize e isole.** A tabela que liga matrícula a pessoa fica separada, com acesso
   restrito, e não entra em papel de trabalho, anexo ou relatório.
4. **Descreva o achado pelo papel.** No ponto e no relatório, o caso se descreve pelo cargo, pela
   seção e pelo registro. Nunca pelo nome, inclusive nos anexos e nas abas ocultas da planilha.
5. **Rubrica que revela saúde ou filiação sindical não entra em papel de trabalho nominal.** Quando o
   teste precisa dela, trabalhe com o código da rubrica e a contagem, não com a relação de pessoas.
6. **Não cole base de folha em conversa com assistente.** Trabalhe por caminho de arquivo e por
   agregado.
7. **Registre a decisão de tratamento** e elimine ou devolva a base bruta no encerramento.

Avise o cliente quando ele enviar mais do que foi pedido, e registre o aviso. Acontece na maioria dos
mandatos, porque o sistema exporta tudo e quem exporta não olha o que exportou.

## 8. Planos A, B e C: o padrão de execução deste plugin

Para **cada teste**, registre a forma ideal e os fallbacks, porque a forma ideal quase nunca está
disponível, e a diferença entre o auditor sênior e o júnior é saber o Plano B sem baixar o rigor da
conclusão.

```
Teste: <nome>   ·   WP: <código>
Plano A (forma certa):  a evidência ideal e como obtê-la.
Plano B:                falta o dado ideal; a evidência substituta e o que ela ainda prova.
Plano C:                nem isso existe; indagação formal + limitação de escopo declarada.
Limitação a declarar:   a frase exata que entra na aba Critérios e, se material, no ponto.
```

> **Regra de ouro: degradar a evidência não é degradar a conclusão em silêncio.**

Na folha há uma degradação específica que vale nomear: o cliente entrega o **relatório de resumo da
folha** em PDF, por competência, e não a base analítica. Esse resumo permite a conciliação com a
contabilidade e não permite nenhum recálculo, nenhum cruzamento e nenhum teste de incidência. Aceitar
o resumo como base do trabalho é concluir sobre o total sem ter olhado dentro dele.

**Conclusão não é ressalva.** Quando a base não traz o tipo da rubrica nem a base de incidência
gravada, o teste de incidência não degrada, ele cai, e a ausência do campo é ela própria deficiência
do dicionário de rubricas. Isso se conclui, não se ressalva.

## 9. Como dimensionar o escopo do mandato

Antes de escrever o programa, responda estas sete perguntas ao mandato, e pergunte, não deduza (R8):

1. **Quantas entidades legais e quantos estabelecimentos entram?** Regra de convenção coletiva, piso
   e adicional variam por sindicato, e sindicato varia por atividade preponderante e por município.
   Uma conclusão consolidada sobre grupo com convenções diferentes é conclusão sobre nada.
2. **Quais convenções coletivas se aplicam, e qual é a vigência de cada uma?** É o critério de metade
   dos testes deste plugin, e ela muda de ano para ano. Peça o instrumento vigente **e o anterior**,
   se o período auditado atravessa a data-base.
3. **Qual é a composição da remuneração?** Salário fixo puro, fixo com comissão, fixo com prêmio
   variável, produção. A composição decide onde o risco mora: onde há variável, o risco está nos
   reflexos; onde há só fixo, está na jornada e nos benefícios.
4. **Há turno, escala ou trabalho noturno?** Decide se `horas-extras-e-jornada` é bloco central ou
   periférico, e se o adicional noturno e o intervalo entram no programa.
5. **Existe terceirização, PJ, cooperativa ou estágio, e em que proporção do quadro?** Decide o peso
   de `terceiros-e-pj`, que é o bloco de maior passivo potencial por pessoa.
6. **Qual é o sistema de folha, o de ponto, e eles conversam?** A resposta muda o Plano A de metade
   dos testes. Peça a demonstração da integração em tela, e não a declaração de que ela existe.
7. **Há passivo trabalhista em curso, e sobre quê?** A relação de reclamatórias por objeto é o melhor
   mapa de risco disponível de graça: o que já foi questionado por quem saiu é o que está errado
   para quem ficou. Peça-a antes de desenhar o programa.

## 10. O que não transportar de um mandato para o outro

Não transporte: percentual de adicional e piso de convenção, dicionário de rubricas, a conclusão de
que o sistema de ponto integra com a folha, a definição de quem é elegível a cada benefício, e o
tratamento dado a banco de horas. Todos são parâmetros de implantação ou de negociação coletiva
daquele cliente, e a mesma marca de sistema de folha calcula de um jeito num cliente e de outro no
seguinte, porque a diferença está na parametrização, não no produto.

Registre, ao fechar, o que colapsou por particularidade do mandato, para que o trabalho seguinte não
herde a simplificação como se fosse o método.

## O que entregar

1. A relação de competências e de períodos de cálculo cobertos, com os declarados fora de escopo e a
   razão de cada um.
2. A série de headcount por competência e por entidade, conciliada com a relação de admitidos e
   demitidos e com o efetivo informado, com cada degrau explicado.
3. O dicionário de rubricas, com as três leituras da §4 e as rubricas criadas ou alteradas no período
   testadas a 100%.
4. A matriz de rubrica por competência, por entidade, com as anomalias da §5 apontadas.
5. Os quatro pares da §6 conciliados ao centavo, com os resíduos isolados e quantificados.
6. O levantamento de folhas complementares do período, com motivo e população.
7. O registro da decisão de tratamento de dado pessoal, na forma de `acta-way:anonimizacao-e-lgpd`.
8. A lista do que não foi testável, com a limitação redigida para a aba Critérios.

## Próximo passo

`matriz-de-riscos-da-folha`, para converter os blocos em registro de riscos e programa de testes;
depois as skills de bloco. O registro do que se aprendeu ao fechar vai para `acta-way:checkpoint` e
para o ritual de aprendizado do plugin de método.
