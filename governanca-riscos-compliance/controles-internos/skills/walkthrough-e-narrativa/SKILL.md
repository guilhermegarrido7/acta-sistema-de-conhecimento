---
name: walkthrough-e-narrativa
description: Conduza o walkthrough de ponta a ponta e escreva a narrativa do processo com os pontos de controle evidenciados. Acionar ao percorrer uma transação do nascimento ao razão, ao redigir narrativa ou fluxograma de processo, ao confirmar se o controle descrito é o controle praticado, ou ao colher lacuna de desenho antes de testar efetividade.
---

# Walkthrough e narrativa do processo

Carregue `acta-metodo-auditoria` antes desta skill: as regras invioláveis, a doutrina do número
exato e a regra R8 (nunca presumir caminho, sempre perguntar) valem aqui integralmente e não são
repetidas.

De `programa-de-testes` vale integralmente, e não é repetido: **walkthrough não é teste nem tipo de
teste.** É técnica. Nunca entra na matriz como linha, nunca recebe conclusão `Eficaz` ·
`Parcialmente Eficaz` · `Ineficaz`. O que o walkthrough produz é **entendimento** e, como
subproduto, **achado de desenho** — e é a esse título que ele entra no relatório.

## Papel desta skill

O walkthrough responde a uma pergunta só, e é a pergunta mais barata de responder e a mais cara de
pular: **o controle que está escrito é o controle que acontece?**

Ele existe porque documento mente por omissão. A política diz que a requisição é aprovada no sistema;
o walkthrough descobre que a requisição chega por mensagem, é lançada depois pela assistente e o
gestor "aprova" um registro que ela criou. Nenhum teste de efetividade sobre a amostra do sistema
encontraria isso — todos os registros estariam aprovados.

Em ambiente SOX, o walkthrough é **exigido**: a **PCAOB AS 2201** o trata como o procedimento que,
sozinho, mais contribui para o entendimento do fluxo das transações e para avaliar o desenho dos
controles, e determina que o auditor percorra a transação desde a sua origem até a sua reflexão nos
registros contábeis. Fora de SOX, a **ISA 315 / NBC TA 315** exige o mesmo entendimento do sistema de
informação e do fluxo das transações relevantes. **Não existe trabalho sério de controles internos
que dispense o percurso.** No mid-market ele é ainda mais determinante, porque a distância entre o
normativo e a prática é maior.

## 1. O percurso: do nascimento ao razão

Escolha **uma** transação real e completa — não a hipotética, não a média, não o exemplo que o
entrevistado prefere — e siga-a ponta a ponta, exigindo **o documento de cada passo na hora**.

| Elo | Pergunta do elo | O que se pede na mesa |
|---|---|---|
| Origem | o que faz esta transação nascer? | o pedido, a solicitação, o chamado, o evento no sistema, o e-mail |
| Autorização | quem pôde autorizar, e com que poder? | a aprovação, com data/hora, e a alçada vigente que a sustenta |
| Execução | quem fez, e onde isso ficou registrado? | a tela, o log, o documento gerado |
| Registro | como virou lançamento? | o lançamento, com conta, valor, data e histórico |
| Processamento | que rotina automática tocou nisso? | a parametrização, o job, a integração, a regra |
| Reporte | como chega ao razão e ao relatório? | a conciliação, o relatório, a apuração final |

Três exigências que transformam o percurso de conversa em evidência:

- **Peça a evidência no momento em que o passo é descrito.** "Depois eu mando" é o mesmo que não
  existir. O que não foi mostrado no percurso é candidato imediato a lacuna.
- **Percorra no sistema, com quem executa, na estação de quem executa.** Sala de reunião com
  apresentação preparada não é walkthrough.
- **Uma transação não basta quando há variantes.** Compra com contrato e compra avulsa, admissão CLT
  e contratação PJ, venda à vista e venda faturada são **caminhos diferentes**, cada um com sua
  transação percorrida. Cada variante não percorrida é um ponto cego declarado.

## 2. As quatro perguntas de cada passo

Em cada passo, quatro perguntas fixas. São elas que separam walkthrough de visita guiada:

1. **O que você faz aqui?** — a atividade, na voz de quem executa.
2. **Como você sabe que está certo?** — é aqui que o controle aparece. Se a resposta for "eu
   confiro", a pergunta seguinte é *"confere contra o quê?"*, e a seguinte é *"e se não bater, o que
   acontece?"*.
3. **O que fica como rastro?** — se nada fica, o controle não é testável, e isso já é achado.
4. **O que acontece quando dá errado?** — a exceção é onde o controle real mora. Todo processo tem um
   caminho de exceção, e quase nenhum normativo o descreve.

A pergunta 2 é a que produz a narrativa; a 4 é a que produz os achados. Anote separadamente as
respostas de 4: elas viram a seção *Exceções e desvios* da narrativa, e costumam ser o material mais
valioso do documento inteiro.

## 3. A narrativa

A narrativa é o texto que descreve o processo **como ele é**, não como deveria ser. Estrutura:

1. **Escopo e data-base.** Que processo, que unidade, que período, com quem foi percorrido — pelo
   **cargo**, nunca pelo nome —, e qual transação serviu de fio condutor.
2. **Fluxo em passos numerados.** Um parágrafo curto por passo, na ordem em que acontece. Sujeito é
   sempre um **cargo** ou um **sistema**, nunca uma pessoa.
3. **Pontos de controle.** Marcados no texto com o código do controle do RACM (`CMP-C03`), de modo
   que a narrativa e a matriz se leiam uma pela outra.
4. **Sistemas e integrações.** Onde o dado entra, onde é transformado, por onde transita, onde é
   relatado. Integração manual — exportação, planilha intermediária, digitação — recebe destaque:
   é onde o dado se perde.
5. **Exceções e desvios.** O caminho alternativo, quem o autoriza, com que frequência ocorre.
6. **Lacunas observadas.** O que o percurso mostrou que não existe.

Regras de redação da narrativa:

- **Tempo presente e voz ativa.** *"O comprador registra a cotação no sistema"*, não *"a cotação é
  registrada"* — a voz passiva esconde exatamente o que se quer saber, que é quem faz.
- **Nada de adjetivo de qualidade.** A narrativa descreve; a avaliação é da etapa seguinte.
  *"Adequadamente aprovado"* não é narrativa, é conclusão sem teste.
- **Frequência e volume em número, com a fonte.** *"Cerca de 40 requisições por mês, conforme
  extração do período"* — nunca *"muitas"*.
- **Diferença entre o normativo e a prática sempre declarada.** Quando a política diz A e o percurso
  mostrou B, a narrativa registra os dois, e a divergência vira achado de desenho.

**O fluxograma é complemento da narrativa, não substituto.** Um fluxograma mostra a sequência e
esconde o critério; quem aprova, contra o quê, e o que acontece quando não bate não cabem numa caixa.
Desenhe o fluxograma se ajudar o cliente a ler, mas a narrativa é o documento.

## 4. O que o walkthrough conclui — e o que não conclui

| Conclui | Não conclui |
|---|---|
| que o controle descrito existe ou não existe | que ele operou durante todo o período |
| que ele é ou não é adequado para o risco | com que taxa de falha ele opera |
| que ele deixa ou não deixa rastro testável | que o resultado do período é confiável |
| que a população para testá-lo existe ou não | nada sobre exatidão de saldo |

O walkthrough alimenta a avaliação de **desenho**. Ele não é amostra de um. Uma transação percorrida
que passou não diz nada sobre efetividade — e essa é a confusão mais comum em equipe júnior, e a que
`desenho-vs-efetividade` existe para impedir.

**Consequência prática de escopo:** processo cujo walkthrough revelou que o controle não existe
**não segue para teste de efetividade**. Testar efetividade de controle inexistente consome horas
para chegar à conclusão que já se tinha. Declare o desenho deficiente, redirecione as horas, e
registre a decisão — não a ausência de teste.

## 5. Quando fazer, e quando refazer

- **Uma vez por ciclo, por processo, no início.** Antes de qualquer teste, porque é o walkthrough que
  valida a população e a evidência que os testes vão usar.
- **Refaça quando houver mudança relevante**: troca de sistema, reestruturação de área, mudança de
  alçada, saída da pessoa-chave que era o controle. Em ciclo SOX, essa é a razão formal para
  refazer o walkthrough no ano seguinte em vez de reaproveitar a narrativa.
- **Reaproveitar narrativa de ano anterior sem percorrer é a falha mais cara do ciclo**, porque
  contamina tudo o que vem depois: a população errada, a evidência que não existe mais, o controle
  que mudou de dono. Quando reaproveitar for a decisão deliberada, **confirme passo a passo com o
  executor e registre a confirmação** — atualização de narrativa é procedimento, não presunção.

## 6. Mid-market brasileiro: o que muda

Em empresa fechada sem SOX, o walkthrough costuma ser **o coração do trabalho**, não a sua abertura.
Quatro adaptações:

- **Não há narrativa prévia para confirmar; há narrativa para escrever.** O entregável é a primeira
  descrição formal que a Companhia terá do próprio processo, e frequentemente o item que o cliente
  mais usa depois — para treinar, para onboarding, para discutir com o sistema.
- **O controle é frequentemente uma pessoa.** *"O gerente confere tudo"* é o padrão. Trate como
  controle real — ele pode ser efetivo —, mas registre a **concentração** como fator de risco e a
  ausência de rastro como lacuna de evidência.
- **Segregação de funções aparece no percurso, não na planilha.** Quando a mesma pessoa cadastra o
  fornecedor, lança a nota e libera o pagamento, isso se vê no walkthrough e em nenhum outro lugar.
- **A planilha intermediária é onde o trabalho dá resultado.** Toda exportação para Excel entre dois
  sistemas é ponto de fragilidade: sem log, sem versionamento, sem trilha, editável por qualquer um.
  Mapeie todas, com dono e finalidade.

## O que entregar

1. A narrativa por processo, na estrutura do §3, com o cargo de quem participou e a data-base.
2. O fluxograma, quando ajudar a leitura, com os pontos de controle marcados pelo código do RACM.
3. A **matriz de pontos de controle**: passo do fluxo × controle que opera × evidência que ele deixa
   × existe rastro testável (`Sim` · `Não`).
4. A lista de lacunas de desenho encontradas no percurso, cada uma com o passo em que aparece.
5. A lista de variantes do processo **não** percorridas, declarada como ponto cego — e não omitida.
6. A lista de integrações manuais e planilhas intermediárias, com dono e finalidade.

## Checklist antes de dar por concluído

- Todo passo da narrativa tem sujeito que é cargo ou sistema. Nenhum nome de pessoa no documento.
- Toda afirmação de frequência ou volume tem número e fonte.
- Toda divergência entre normativo e prática está declarada nos dois lados.
- Existe seção de exceções preenchida. Processo sem caminho de exceção descrito é processo não
  percorrido até o fim.
- Todo passo do fluxo tem, ou um controle associado, ou a marcação explícita de que não tem.
- Nenhum adjetivo de qualidade e nenhuma conclusão de efetividade dentro da narrativa.

## Próximo passo

`desenho-vs-efetividade`, que converte o que o percurso revelou em avaliação de desenho e decide o
que segue para teste. Depois `teste-de-controle-e-amostragem`. O que virou lacuna vai para
`deficiencias-e-severidade`, e os achados são redigidos em `redacao-de-achados`, do plugin de método.
