# Estudo de benchmarking: da pesquisa FJS e do case PASB ao plugin genérico

Este documento é o mapeamento que fundamenta o plugin `pesquisa-salarial`. Compara
dois casos de natureza distinta (FJS, em planejamento, terceiro setor de saúde,
Bahia; PASB, já concluído, educação internacional, benchmark de mercado) para
extrair o que é estrutural de toda pesquisa de remuneração e o que é específico de
cada cliente. Só o que aparece nos dois casos, ou que é uma variação previsível do
mesmo problema, entra no plugin. O resto fica no caso.

## 1. Os dois casos

| Dimensão | FJS (em planejamento) | PASB (concluído, benchmark) |
| --- | --- | --- |
| Setor | Saúde e terceiro setor | Educação internacional |
| Porte do cliente | 17.400 colaboradores, 265 cargos | Escola de porte médio |
| Painel | 34 indicadas, meta 12 por recorte, 3 recortes geográficos | 22 convidadas, 9 respondentes (41%), sem recorte geográfico, só porte |
| Moeda | Real, moeda única | Real e dólar, convivendo na mesma pesquisa |
| Regime de trabalho | Mensalista, com plantonistas e regime 12x36 | Mensalista e horista, horista mensalizado por carga horária |
| Critério de nível | Senioridade por cargo (I a V, Júnior a Sênior) | Qualificação acadêmica do professor (Bacharel a Doutorado) |
| Problema estrutural de matching | Nomenclatura de gestão sem equivalente (Superintendente), escala corporativa centralizada | Estrutura curricular sem equivalente direto entre escolas regionais e nacionais (comparação por 1º/2º ano versus 3º ano) |
| Segmentação obrigatória | Unidade própria versus contrato de gestão | Escola regional versus nacional |
| Ferramenta de coleta | A definir | Microsoft Forms |
| Entregáveis | Relatório PDF/PPT, Excel, Power BI, relatório individual | Relatório PPT, painel interativo (dashboards) |
| Benefícios pesquisados | A definir (padrão Total Rewards) | 10 benefícios fixos, incluindo auxílio moradia para expatriados |
| Transparência de tratamento | Nota metodológica planejada | Bloco de observações no corpo do relatório (mensalização, dissídio, cargo sem ocupante) |

## 2. O que é estrutural (entra no plugin sem alteração de conceito)

Presente nos dois casos, com o mesmo papel metodológico:

1. **A tríade de escopo**: cargos a pesquisar, painel de participantes, recortes
   de comparação. Toda pesquisa de remuneração começa definindo essas três coisas,
   independentemente do setor.
2. **Matching por conteúdo, não por nomenclatura.** A FJS resolve isso pelo fator
   de escala em cargos de gestão. A PASB resolve pelo mesmo princípio, mas o
   problema aparece na nomenclatura curricular, não na hierarquia. É o mesmo
   conceito com gatilho de negócio diferente, o que confirma que é regra geral e
   não particularidade FJS.
3. **A tradução de quartil em risco de retenção.** É o único slide do benchmark
   PASB que eu recomendei adotar quase sem alteração no roteiro FJS. Funciona
   porque é conceito puramente estatístico, sem nada específico de escola ou de
   hospital.
4. **Segmentação obrigatória de sub-painéis com lógica distinta.** FJS segmenta
   unidade própria de contrato de gestão. PASB segmenta escola regional de
   nacional. É o mesmo requisito metodológico (não misturar populações com regime
   de remuneração distinto) aparecendo com rótulo diferente em cada setor. Isso
   promove a regra de "segmentação por sub-painel" de particularidade FJS para
   regra geral do plugin, generalizando o que a skill de matching já tratava como
   específico da Fundação.
5. **Transparência de tratamento de dados como parte do corpo do relatório, não
   só do anexo.** O bloco de observações do PASB (mensalização de horista, cargo
   sem ocupante desconsiderado, dissídio já repassado) é exatamente o que a nota
   metodológica da FJS institucionaliza de forma mais estruturada. A prática é a
   mesma; o plugin adota o formato mais rigoroso (nota metodológica com os oito
   itens), mas reconhece a origem do padrão no benchmark.
6. **Estrutura de resultado em três cortes**: por participante, por cargo ou
   função, por nível. Os dois casos convergem nessa mesma tríade de leitura, o
   que era esperado, porque decorre de como uma base de matching x cargo x
   participante pode ser cortada, e não de escolha de estilo.
7. **Mínimos de agregação e confidencialidade do participante.** Não aparece
   formalizado no material do PASB da forma que a FJS institucionaliza, mas o
   princípio (não expor dado de participante individual, pseudonimizar como
   "Escola 5", "Escola 7") já está em uso lá. O plugin generaliza a prática do
   PASB com o rigor metodológico desenvolvido para a FJS.

## 3. O que é uma variação prevista (entra no plugin como parâmetro ou módulo opcional)

Aparece em um caso, mas é reconhecível como uma variação de um problema geral que
qualquer pesquisa futura pode encontrar. Vira parâmetro de configuração ou módulo
adicional do plugin, não uma exceção hardcoded.

1. **Moeda mista (Real e dólar).** Só aparece no PASB, mas qualquer cliente com
   colaboradores expatriados ou referência internacional (ONGs, escolas
   internacionais, multinacionais) vai ter o mesmo problema. Generalizado como
   novo cálculo do livro, `C-FX Conversão cambial`, com moeda de referência
   configurável por projeto.
2. **Horista versus mensalista.** Só aparece no PASB, mas é comum em educação,
   varejo e serviços. Generalizado como novo cálculo, `C-HOR Mensalização de
   horista`, parametrizado pela carga horária de referência do cliente (no PASB,
   176 horas-aula).
3. **Critério de nível alternativo à senioridade numérica.** A FJS usa I a V e
   Júnior a Sênior. A PASB usa qualificação acadêmica. O plugin generaliza como
   "critério de nivelamento", que é configurável por família de cargo: pode ser
   senioridade, qualificação acadêmica, tempo de casa, ou combinação, desde que
   documentado e aplicado de forma consistente.
4. **Cargo sem ocupante.** Explícito no PASB (Escola 7, Professor com
   Especialização sem ocupante, desconsiderado). Vira regra explícita do livro de
   cálculos: cargo declarado pelo participante sem incumbente é excluído da
   estatística com motivo padronizado, e não apenas uma observação de rodapé.
5. **Regime de convite sem recorte geográfico.** A PASB não segmenta por região,
   só por porte e caráter (regional/nacional). Isso mostra que o recorte
   geográfico da FJS é uma escolha de projeto, não uma regra universal. O plugin
   trata "recorte" como um conceito genérico (pode ser geográfico, de porte, de
   setor, ou combinação), configurável por projeto.
6. **Ferramenta de coleta.** PASB usou Microsoft Forms puro. FJS ainda vai
   decidir. O plugin não fixa ferramenta, mantém o critério de seis requisitos já
   documentado (pré-preenchimento, salvar e retomar, validação condicional,
   upload alternativo, exportação limpa, conformidade de hospedagem) e registra
   Microsoft Forms como opção validada em campo por um caso real.

## 4. O que fica de fora do plugin (é do caso, não do método)

Não generaliza porque é característica do cliente, não da metodologia:

- Os 265 cargos da FJS e a lista de 34 empresas indicadas.
- O problema específico do cargo Superintendente e a isenção de CEBAS.
- As 9 escolas do PASB e os 10 benefícios exatamente como listados (o conceito de
  catálogo de benefícios é genérico; a lista fechada de 10 itens é do caso).
- Qualquer valor numérico de resultado (salário, gap, comparatio) dos dois casos.

## 5. Decisão de arquitetura do plugin

Três camadas, para que o próximo projeto real não comece do zero nem carregue
lixo de projeto anterior:

```
plugin/          -> método genérico, sem nome de cliente, com placeholders
casos/           -> uma pasta por projeto real que já usou o plugin (aponta para
                     onde o trabalho vive de fato; não duplica dado de cliente)
benchmarks/       -> material de referência que não é metodologia executável,
                     é estudo de caso para consulta (o que este documento é)
```

Regra de manutenção: uma decisão nova só sobe de `casos/` para `plugin/` quando
aparecer pela segunda vez em um projeto diferente, com o mesmo raciocínio deste
estudo. Isso evita que o plugin vire uma coleção de exceções de um único cliente
disfarçada de método geral, que foi exatamente o risco corrigido na seção 2.4 e
3.3 acima.

## 6. Como proceder a partir daqui

1. Usar o plugin como ponto de partida em todo novo projeto de pesquisa de
   remuneração, copiando a pasta `plugin/` para o Project daquele cliente e
   preenchendo o cartão de identidade (seção 1 do `SKILL.md` do plugin).
2. Quando a pesquisa da FJS avançar e gerar decisões novas de método (não de
   dado), avaliar contra a seção 5 acima antes de subir a decisão para o plugin.
3. Ao concluir cada novo projeto, adicionar um arquivo de benchmark equivalente a
   este, em `benchmarks/`, repetindo o exercício das seções 2 a 4. É esse hábito,
   não uma única generalização bem feita, que mantém o plugin genérico de
   verdade em vez de enviesado para o primeiro cliente.
