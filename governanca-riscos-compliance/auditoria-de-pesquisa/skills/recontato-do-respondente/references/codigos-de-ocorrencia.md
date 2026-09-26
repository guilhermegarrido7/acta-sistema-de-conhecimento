# Códigos de ocorrência do recontato

Tabela fechada de resultado de tentativa de contato, usada em `recontato-do-respondente`. Em trabalho
regulado a tabela vem do ato normativo e não é alterável; fora dele, use esta estrutura, que é a que
a casa aplica.

A coluna **Denominador** diz se a ocorrência entra na base de cálculo da taxa de confirmação. Essa
coluna é a razão de a tabela existir: sem ela, não contato e negativa se misturam e a taxa deixa de
significar alguma coisa.

---

## Bloco 1. Sem contato útil

| Código | Situação | Denominador |
|---|---|---|
| 01 | **Não atende.** A ligação completa e ninguém atende até o encerramento. | Não |
| 02 | **Telefone desligado ou ocupado.** Não foi possível efetuar a ligação. | Não |
| 03 | **Número inexistente.** A operadora informa que o número não existe. | Não |
| 04 | **Número em formato inválido.** O número registrado tem formato diverso do padrão, por exemplo quantidade de dígitos incompatível. Vira achado de cadastro mesmo sem tentativa. | Não |
| 05 | **Respondente ausente no momento.** Quem atende conhece a pessoa registrada, confirma o número, e informa que ela não está. Comporta nova tentativa. | Não |
| 06 | **Sem número informado.** O registro não trouxe telefone de contato. Vira achado de completude da base. | Não |

## Bloco 2. Contato com pessoa diversa

| Código | Situação | Denominador |
|---|---|---|
| 07 | **O número não é do respondente.** Quem atende informa que o número pertence a pessoa diversa da registrada. | Não, e vira achado |

Neste bloco a ligação termina imediatamente. Nada é perguntado sobre a pesquisa, e nada é revelado
sobre a participação da pessoa registrada.

## Bloco 3. Contato com o respondente

| Código | Situação | Denominador |
|---|---|---|
| 08 | **Esteve no local e confirmou a coleta.** | Sim, confirma |
| 09 | **Esteve no local e nega a coleta.** Afirma ter estado no período e nega ter sido abordado, mesmo depois de o auditor explicar como a abordagem é feita. | Sim, nega |
| 10 | **Esteve no local e não lembra.** Afirma ter estado, sem certeza sobre a abordagem, mesmo depois da explicação. | Sim, inconclusivo |
| 11 | **Não esteve no local.** Nega ter estado no período. Cruza com o teste de existência do evento. | Sim, nega o evento |
| 12 | **Desligou antes de confirmar.** Por qualquer motivo, inclusive recepção ruim. | Sim, inconclusivo |

## Bloco 4. Residual

| Código | Situação | Denominador |
|---|---|---|
| 99 | **Outras situações**, não previstas acima, em que não houve confirmação da coleta. Exige descrição livre no papel de trabalho. | Sim, inconclusivo |

Uso frequente do código 99 é sinal de que a tabela precisa de revisão, ou de que o operador do
recontato está escapando da classificação. Monitore a participação dele.

---

## Regras de escolha entre códigos próximos

- **05 contra 07.** Em 05, quem atende confirma que o número é da pessoa registrada. Em 07, informa
  que não é. A diferença é o que quem atende diz sobre a titularidade, não a ausência.
- **09 contra 10.** Em 09 há negativa afirmativa. Em 10 há ausência de memória. Registrar 10 como 09
  inflaciona o indício mais grave do trabalho e é o erro de codificação mais caro da tabela.
- **11 contra 09.** Em 11 a pessoa nega o evento inteiro, não só a coleta. Essa negativa é mais forte,
  porque pode ser cruzada com a fonte oficial de movimento.
- **12 contra 01.** Em 12 houve contato e a ligação caiu depois. Em 01 nunca houve atendimento.

---

## As três taxas

```
Taxa de contato útil    = ocorrências do bloco 3 / total de tentativas
Taxa de confirmação     = código 08 / ocorrências do bloco 3
Taxa de negativa        = códigos 09 e 11 / ocorrências do bloco 3
```

Publique as três, sempre juntas. A primeira mede o cadastro, a segunda mede a coleta, e a terceira é
a que carrega gravidade.

## Política de tentativas

Fixe no início do ciclo e registre no papel de trabalho:

- Número máximo de tentativas por registro, e intervalo mínimo entre elas.
- Faixas de horário distribuídas ao longo do dia.
- Critério de encerramento de um registro como não contatado.

Sem política escrita, a taxa de contato útil vira função do esforço de quem ligou e deixa de ser
comparável entre ciclos.
