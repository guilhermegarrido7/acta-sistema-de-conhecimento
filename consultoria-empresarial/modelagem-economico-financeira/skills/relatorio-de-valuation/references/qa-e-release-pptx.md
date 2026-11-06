# QA e release do deck

## O manifesto

`scripts/manifesto_release.py` gera o manifesto de release. Só lê: copia o modelo e o deck para uma
pasta temporária e trabalha nas cópias.

```
<~~interpretador python> manifesto_release.py
    --modelo <modelo.xlsx> --deck <deck.pptx> --saida <manifesto.md>
    --mapa <mapa-modelo-slides.csv>          # conciliação e gate de data
    --deck-anterior <deck_versao_anterior>   # diff slide a slide
    --proibidos <termos.txt>                 # nomes que não podem aparecer (material externo)
    --recalcular                             # recalcula numa instância NOVA do Excel
    --render                                 # exporta PDF pelo PowerPoint
```

Dependências: `python-pptx`, `openpyxl`; `pywin32` para `--recalcular` e `--render`.

## Gates

| Gate | Confere | Aberto significa |
|---|---|---|
| G1 | Nenhum erro de fórmula no modelo | Não liberar |
| G2 | Cada número do mapa aparece no slide indicado, formatado em pt-BR | Número divergente ou mapa desatualizado |
| G3 | Data-base do EV = data da dívida líquida | Ponte em datas diferentes (`triangulacao-e-faixa`, TF-01) |
| G4 | Nenhum resíduo: placeholder, texto de layout, erro colado, termo proibido, ACTA como fonte | Limpar antes de entregar |

O código de saída é 1 com qualquer gate aberto. O veredito "pronto" de `revisao-de-modelo` exige o
manifesto sem gate aberto.

## Leitura do resultado

- **Sem `--recalcular`**, os valores são os do último salvamento no Excel. Modelo editado por script
  e não aberto no Excel pode ter cache vazio ou antigo: rode com `--recalcular`.
- **G2 com divergência** quase sempre é uma de três coisas: o slide arredondou diferente do mapa, o
  slide ficou com valor de versão anterior, ou o mapa aponta para a célula errada.
- **Diff** lista os slides alterados e o trecho. Slide alterado que ninguém pediu para mudar é o
  primeiro a revisar.
- **Render** grava o PDF ao lado do manifesto, com a contagem de slides e o hash.

## Regras de ambiente

- O PowerPoint é instância única: o script nunca fecha o PowerPoint que já estava aberto. Só fecha o
  que ele mesmo abriu.
- O Excel do `--recalcular` é uma instância nova, encerrada ao fim. A do usuário não é tocada.
- Chamada COM rejeitada (`RPC_E_CALL_REJECTED`) é repetida com espera crescente.
- Arquivo em pasta do OneDrive: o script lê a cópia, nunca o original. Ver `acta-way:ambiente-tecnico`.

## Checklist visual que o script não cobre

1. Texto herdando cor errada do `clrMap` (corpo saindo teal): abrir o PDF e conferir.
2. Fonte substituída por falta de Rawline instalada.
3. Tabela cortando na régua inferior.
4. Gráfico com série fora da paleta.
5. Divisores de capítulo batendo com o Sumário do valuation.

## Arquivamento

Manifesto, PDF e mapa vão para `~~entregaveis`, com o mesmo nome-base do deck. A entrada de sessão do
checkpoint cita o hash do deck enviado.
