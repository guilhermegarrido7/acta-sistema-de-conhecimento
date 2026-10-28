# Auditoria de Pesquisa

Verificação independente de pesquisa e de indicador apurado por terceiro: crítica do instrumento e do
dicionário de dados, aderência da amostra ao plano conferida contra a população oficial, bateria de
oito testes sobre a base entregue, recontato do respondente com tabela de códigos padronizada, e a
apuração do indicador com memória de cálculo publicável.

> **Pré-requisito: `acta-way`**, declarado como dependência no `plugin.json`: o `claude plugin install` deste plugin instala o `acta-way` junto. É onde vive o mecanismo de checkpoint entre sessões e consultores. Se a sua versão do Claude Code não instalar dependências, instale-o antes: `claude plugin install acta-way@acta-sistema-de-conhecimento --scope user`.
>
> **Segundo pré-requisito: `acta-metodo-auditoria`**, também declarado como dependência. Este plugin é de **processo auditado**. As
> regras invioláveis, a doutrina do número exato, o papel de trabalho, o programa de testes e a
> redação de achados vivem lá e **não são repetidos aqui**. Cada skill manda carregá-lo antes.
>
> **Status: completo.** As 6 skills do ciclo estão escritas.

## O que faz

Responde uma pergunta só, e responde com evidência: **o número publicado é sustentado pelos dados que
dizem tê-lo produzido?**

Quem coletou não audita. O trabalho reconstrói evidência de um evento que não deixou rastro próprio,
e por isso nunca se apoia num único tipo de prova. Confere o registro contra a gravação, a gravação
contra o roteiro obrigatório, o evento declarado contra a base oficial de movimento, e a coleta
contra o próprio respondente, por telefone. Depois recalcula o indicador do zero, com denominador
próprio por pergunta, e escreve a memória de cálculo que permite a qualquer leitor chegar ao mesmo
número.

Traz o que é próprio do domínio e não existe no plugin de método: as seis etapas do ciclo, a bateria
de oito testes organizada por famílias de gravidade, a tabela fechada de códigos de ocorrência do
recontato, as três taxas que nunca podem ser somadas, a classificação de aderência em três faixas, a
distinção entre média de escala e proporção de satisfação, e a mecânica de ajuste de base por
conflito de interesse.

## Os dois modos

| Modo | Cadência | Onde o peso está |
|---|---|---|
| **Contínuo** | Ciclo repetido, indicador reportado a regulador ou a contrato | Recontato e comparabilidade entre ciclos |
| **Pontual** | Ciclo único, resultado decidido por avaliadores | Memória de cálculo e conflito de interesse |

A bateria de testes é a mesma nos dois.

## As skills

| Skill | Para quê |
|---|---|
| `ciclo-da-auditoria-de-pesquisa` | O método, os dois modos, o que a opinião cobre, independência e conflito de interesse, dado pessoal |
| `instrumento-e-dicionario-de-dados` | As três tabelas do dicionário, domínio fechado, o valor que significa ausência, as seis verificações de auditabilidade |
| `amostra-e-aderencia-ao-plano` | A fonte externa de universo, os quatro cortes de aderência, classificação em três faixas, estrato descoberto |
| `bateria-de-testes-de-base` | Os oito testes por famílias, a planilha de teste, o que roda na população e o que roda na subamostra |
| `recontato-do-respondente` | O roteiro de quatro movimentos, a tabela de códigos, as três taxas, política de tentativas |
| `apuracao-do-indicador-e-memoria` | Reexecução, as duas famílias de indicador, denominador por pergunta, base ajustada, memória e parecer |

## Fluxo típico

```
1. Instrumento e dicionário      instrumento-e-dicionario-de-dados
2. Plano amostral                amostra-e-aderencia-ao-plano
3. Base entregue                 instrumento-e-dicionario-de-dados, seção 5
4. Testes                        bateria-de-testes-de-base
5. Recontato                     recontato-do-respondente
6. Apuração e parecer            apuracao-do-indicador-e-memoria
```

Os passos 1 e 2 são de desenho e rendem mais quando o campo ainda não começou. Os passos 3 a 5 são de
execução. O passo 6 é o entregável, e vem por último de propósito: recalcular antes de qualificar a
base produz um número errado com aparência de conferido.

## Fronteiras

| Se o assunto é | O plugin é |
|---|---|
| Desenhar e operar pesquisa própria | `acta-pesquisa-salarial` |
| Testar o controle interno do operador | `acta-controles-internos` |
| Classificar o risco na taxonomia da casa | `acta-gestao-de-riscos` |
| Método, papel de trabalho, achado, relatório | `acta-metodo-auditoria` |
