# População e amostra no ciclo de acesso

Detalhe operacional da skill `perfis-e-acessos`. Consulte ao dimensionar a amostra de um controle de
acesso, ao trabalhar com população de período parcial, ao dividir o teste entre duas fases, ou ao
testar controle que foi remediado durante o exercício.

**A régua base não está aqui.** A tabela de frequência do controle contra nível de risco vive em
`acta-metodo-auditoria:programa-de-testes`, na referência `matriz-e-amostragem.md` §2, e continua
valendo integralmente. Este documento traz só o que é próprio do ciclo de acesso e não existe lá.

E antes de qualquer amostra vale o primeiro critério da casa: **dá para cruzar bases e verificar
100%?** Então é 100%. No ciclo de acesso, três testes são sempre integrais e nunca amostrais:
usuários ativos contra vínculo vigente, conflito efetivo de SoD sobre a base usuário × perfil, e
revogação do perfil de origem para a base de transferidos. Amostra só para o que exige ler documento
item a item, que é o teste de concessão e o de revogação por chamado.

## 1. Anualizar a população de período parcial

O teste raramente cobre doze meses. Quando a população disponível é de um recorte, dimensionar a
amostra sobre o recorte subdimensiona o teste, porque a régua de frequência supõe população anual.

O ajuste é aritmético e se declara nos critérios:

```
população anualizada = população observada × (12 ÷ meses observados)
```

Exemplo real de recorte de sete meses: 28 desligamentos observados, anualizados para 48. O tamanho
de amostra sai da população **anualizada** e do nível de risco do controle, não dos 28.

Quatro coisas vão para o papel de trabalho, e sem as quatro o número não se reproduz: a população
observada, a janela em meses com data inicial e final, a população anualizada, e o nível de risco
atribuído ao controle com a razão da atribuição.

## 2. Fase intermediária e fase final

Controle de frequência alta se testa em duas passagens no mesmo exercício. A primeira, no meio do
ano, dá tempo de remediar o que falhar; a segunda, no fechamento, cobre o restante e conclui sobre o
exercício.

A divisão que funciona:

| Fase | Janela | Amostra | Função |
|---|---|---|---|
| **Intermediária** | do início do exercício até a data de corte | parcela da amostra anual, proporcional à janela | detectar cedo, com prazo útil de remediação |
| **Final** | da data de corte ao fechamento, mais o roll-forward da primeira fase | o complemento até o tamanho anual | concluir sobre o exercício inteiro |

Duas regras que a prática impõe:

- **A soma das duas fases é o tamanho anual**, nunca o tamanho anual em cada uma. Testar a amostra
  cheia duas vezes é dobrar o custo sem aumentar a asseguração.
- **A fase final faz o roll-forward da intermediária**: confirma que o controle continuou operando
  da data de corte em diante e que o que se concluiu no meio do ano permanece válido. Sem o
  roll-forward, a conclusão da primeira fase vale para a janela dela e não para o exercício.

Falha encontrada na fase intermediária não é motivo para parar. É o contrário: é a única falha do
ciclo que ainda tem tempo de virar controle remediado antes do fechamento, e é por isso que a fase
intermediária existe.

## 3. Controle remediado: a régua própria

Controle que falhou e foi corrigido durante o exercício não se testa pela régua normal, porque ele
não operou no formato novo durante o ano inteiro. Duas exigências, cumulativas:

**Primeira, tempo mínimo de operação** no formato remediado, contado até o fechamento do exercício.
Sem esse tempo decorrido, não há o que testar: o controle é novo e a conclusão fica para o exercício
seguinte.

**Segunda, número mínimo de itens** testados nesse período.

| Frequência do controle | Tempo mínimo de operação até o fechamento | Itens mínimos a testar |
|---|---|---|
| Trimestral | 2 trimestres | 2 |
| Mensal | 2 meses | 2 |
| Semanal | 5 semanas | 2 |
| Diária | 20 dias | 10 |
| Múltiplas vezes ao dia | 25 ocorrências ao longo de vários dias | 25 |

Controle anual remediado não aparece na tabela por construção: ele opera uma vez, e se a única
ocorrência do exercício falhou, não há remediação testável dentro do exercício.

**A conclusão de controle remediado se escreve em duas partes**, e omitir a primeira é o erro comum:
o controle **falhou** no formato anterior, durante a janela em que aquele formato vigorou, e
**opera** no formato remediado desde a data da correção. Reportar só a segunda parte transforma uma
deficiência do exercício em controle eficaz, e a janela de exposição desaparece do relatório.

## 4. Seleção, substituição e o registro do critério

**Aleatória** é o padrão, e o método de sorteio se declara.

**Dirigida** quando a escolha exige ler a descrição de cada item para cobrir sistemas distintos,
tipos de acesso distintos ou perfis de risco distintos. Seleção dirigida é legítima, e a única
exigência é que o critério esteja escrito antes da seleção, não depois do resultado.

**Substituição** acontece quando um item sorteado se revela inválido: chamado duplicado, chamado que
não é de concessão, desligado que não tinha acesso a sistema nenhum. Registre os três dados, sempre:
o item descartado, a razão do descarte, e o item que entrou no lugar. Substituição silenciosa é a
diferença entre amostra e escolha, e é o primeiro ponto que um revisor externo ataca.

**Item inválido não reduz a população.** Se o chamado sorteado não era de concessão, a população
continua a mesma e o item é trocado. Recalcular a população para baixo a cada item descartado é como
se chega a uma amostra que confirma o que se queria confirmar.
