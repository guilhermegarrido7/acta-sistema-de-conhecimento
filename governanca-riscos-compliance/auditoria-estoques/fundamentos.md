---
titulo: Fundamentos
---

## A ideia que sustenta o método

Estoque é a conta do balanço em que o erro sobrevive mais tempo. Caixa se concilia todo dia contra o
extrato. Contas a receber tem um cliente do outro lado que reclama se a cobrança estiver errada.
Estoque não tem contraparte: o saldo do sistema é uma afirmação da própria Companhia sobre ela
mesma, e a única coisa que a contesta é alguém indo ao depósito contar. Entre uma contagem e a
seguinte, a falta não aparece no resultado, a perda não aparece na margem, e o erro de cadastro se
acumula em silêncio.

Daí a primeira escolha de método: **o inventário físico é o eixo do trabalho e tem data marcada.**
Todos os outros testes deste plugin rodam sobre base e podem ser feitos em qualquer semana. O
inventário não. O corte de movimentação, que é o teste de maior rendimento do ciclo, tem de ser
fixado antes de a primeira equipe entrar no depósito, e não existe forma de recuperá-lo depois. Um
mandato de estoques se planeja da data da contagem para trás.

A segunda escolha é a que dá nome à estrutura do plugin: **quatro perguntas, e não uma.** O programa
usual de estoques conta, calcula acuracidade e encerra. Isso responde à existência e deixa três
perguntas abertas, cada uma com um achado próprio: se a quantidade certa está avaliada pelo custo
certo, se aquele custo ainda se realiza, e por que a divergência existe. Um trabalho que só conta
entrega um número de acuracidade que o comitê aceita e uma conta de ativo sobre a qual ninguém sabe
mais do que sabia antes.

A terceira é sobre o que a divergência significa. A tentação é ler toda falta como perda. Na prática,
boa parte da divergência de um inventário é **erro de identificação**: falta de um item e sobra de
outro parecido, no mesmo local, pela mesma quantidade, quase sempre com cadastro duplicado por trás.
Isso não é perda, o ajuste líquido é zero, e reportar como perda derruba o achado na primeira
reunião. O inverso também é regra da casa: compensação declarada sem confirmação em campo não zera
divergência nenhuma, e o par permanece separado como falta e como sobra.

## As referências

| Referência | O que é | Onde aparece no método |
|---|---|---|
| CPC 16, Estoques | A norma contábil brasileira de estoques: mensuração pelo menor valor entre custo e valor realizável líquido, critérios admitidos de atribuição de custo com exigência de consistência por natureza, e os gastos vedados na formação do custo | A avaliação item a item de `obsolescencia-e-provisao` §4, o teste de consistência de método de `custeio-e-giro` §1 e a composição do custo de entrada §2 |
| Normas do IIA | O corpo normativo da auditoria interna, inclusive a exigência de documentação suficiente para que um terceiro reproduza o trabalho | O papel de trabalho por bloco INV e o padrão Plano A/B/C, que registra tanto a evidência obtida quanto a que faltou |
| NBC TA 501 / ISA 501 | Evidência de auditoria em itens específicos, com o tratamento próprio do estoque: presença na contagem física, observação dos procedimentos e reperformance de contagens selecionadas | O que o auditor faz no dia em `acuracidade-e-inventario` §4, e a regra de que ele observa e reperforma em vez de conduzir |
| NBC TA 315 / ISA 315 | Entendimento da entidade e do fluxo das transações como base para identificar onde o erro material nasce | As seis perguntas de dimensionamento do mandato em `matriz-de-riscos-de-estoques` §6 |
| COSO, Internal Control, Integrated Framework (revisão de 2013) | O referencial de controle interno: atividade de controle existe para mitigar risco identificado, e se avalia se está presente e funcionando | A estrutura risco × controle × teste da matriz, e o confronto de controle sem risco e risco sem controle na matriz do próprio cliente |
| Ciclo de estoque e armazenagem (literatura clássica de auditoria, Arens) | A organização do trabalho por ciclos de transação, do recebimento à baixa, com a conta de estoque como ponto de encontro de compras, produção e vendas | A fronteira declarada com `acta-auditoria-compras` e os casamentos de base de `movimentacao-e-perdas` |
| Dicionário de Riscos da ACTA | A taxonomia fechada da casa, com 52 categorias numeradas | A coluna de categoria dos quatorze riscos `INV.R<NN>`, com a decisão de classificar provisão sem baixa e ajuste sem aprovação em conduta, e não em perda operacional |
| Segregação de funções | O princípio de que custodiar, movimentar, contar, ajustar e registrar não podem ficar na mesma mão | A regra de que ninguém conta a área que custodia (`acuracidade-e-inventario` §1) e o corte de aprovação de ajuste (`movimentacao-e-perdas` §4) |
| Prática de inventário físico da casa | A mecânica de campo construída em trabalho real: planilha por local, descrição estruturada por atributo com validação mecânica, vocabulário fechado de ocorrência, segunda contagem cega e recontagem dirigida por bloco físico | `acuracidade-e-inventario` §2 e §3, e a reference `planilha-e-roteiro.md` inteira |

## Onde a ACTA se afasta do manual

**O manual trata a acuracidade como um número. A casa trata como dois.** Acuracidade por item e
acuracidade por valor respondem a perguntas diferentes e costumam divergir muito no mesmo estoque:
milhares de itens baratos certos e alguns itens caros errados produzem um indicador alto e outro
baixo. Reportar só um dos dois é escolher a conclusão antes do teste. A regra é reportar ambos,
sempre, dizendo qual sustenta a conclusão sobre controle operacional e qual sustenta a conclusão
sobre a demonstração contábil.

**A casa exige que a segunda contagem seja cega, e testa se ela foi.** A prática comum é a segunda
contagem feita com a primeira folha em mãos, "para conferir". Isso não é uma segunda medição, é uma
revisão da primeira, e não detecta o erro sistemático da equipe. Onde a contagem não foi cega, o
indicador de acuracidade mede a consistência da equipe e não a qualidade do controle, e a conclusão
tem de dizer isso.

**A divergência se soma em valor absoluto.** Somar com sinal produz um número pequeno e confortável
que não mede nada, porque a falta de um item cancela a sobra de outro. O número com sinal serve para
dimensionar o ajuste contábil líquido, e para mais nada. O par de números, bruto e líquido, é o que
separa controle ruim de resultado contábil relevante, e costuma ser a leitura mais útil do relatório
inteiro.

**O teste de valor realizável líquido é obrigatório e quase nunca é feito.** A norma manda comparar
custo com realizável líquido item a item, e o programa usual verifica se existe provisão e se ela
segue o critério, sem nunca perguntar por quanto o item se vende hoje. O teste exige dado de fora do
estoque, que é exatamente por que fica órfão entre auditoria de estoques e auditoria de receita. A
casa o coloca dentro, porque é onde o ativo se descobre superavaliado sem que nenhuma quantidade
esteja errada.

**Os testes que decidem o trabalho são de população, não de amostra.** Saldo com valor zero, custo
unitário negativo, saldo negativo, transferência com uma ponta só, ajuste lançado pelo custodiante,
ajuste na véspera da contagem: todos rodam sobre a base inteira, em minutos, e nenhum aparece em
conciliação por total, porque são muitas linhas de valor pequeno ou valores que se cancelam. A régua
de amostragem continua valendo como segundo critério, acionada quando o cruzamento integral não é
possível e para o que só se testa em campo.

**A última divergência é de disciplina de campo, e parece detalhe até a apuração começar.** A
descrição do item tem de ser estruturada por atributo, com separador fixo, e o campo de ocorrência
tem de ser lista fechada. Descrição livre e ocorrência digitada à mão produzem o mesmo fato escrito
de cinco formas, com caixa e espaço diferentes, e a apuração deixa de fechar por um motivo que não
tem nada a ver com o estoque. A casa valida a descrição por máquina no mesmo dia, contando os
separadores de cada linha, enquanto o item ainda está no corredor e o erro custa dois minutos.
