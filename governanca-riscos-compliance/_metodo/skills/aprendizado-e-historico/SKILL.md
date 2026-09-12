---
name: aprendizado-e-historico
description: Feche um bloco de trabalho de auditoria e decida o destino da lição aprendida. Acionar ao encerrar uma frente ou etapa, ao registrar o que foi feito, refeito e não feito, ao conduzir o momento de reflexão com o auditor, ou ao decidir se um aprendizado sobe para a metodologia.
---

# Aprendizado e histórico

Esta skill é o **ritual de auditoria** rodando sobre o mecanismo comum. O protocolo de checkpoint,
os templates e a regra de defasagem vivem em `acta-way`, skill `checkpoint` — carregue-a primeiro.
Aqui está só o que a auditoria acrescenta.

Carregue também `metodo-auditoria`: as regras invioláveis e a doutrina do número exato valem
integralmente e não são repetidas.

---

## 1. O ritual, em ordem

O momento de aprendizado **precede** a gravação. Nunca registre uma lição que o auditor ainda não
corrigiu.

1. **Apresente no chat**, em bloco curto e destacado:
   - O que aprendi — a técnica, 2 a 4 linhas, já escrita de forma reutilizável.
   - O que errei e como descobri — inclusive o erro que morreu no rascunho.
   - O que ficou em aberto.
2. **Espere a reflexão do auditor.** É aqui que a lição é corrigida. Foi assim que "não existe regra
   no benefício" virou "a regra existe e fecha ao centavo": a primeira versão da lição estava errada, e
   registrá-la teria propagado o erro para o próximo cliente.
3. **Só então grave**, conforme a seção 3.

Pular o passo 2 é o erro que esta skill existe para impedir.

---

## 2. Quando acionar

- Ao fechar uma frente de trabalho ou uma etapa do programa de testes.
- Ao terminar de tratar um tipo de base que você nunca tinha visto.
- Ao inventar ou adaptar um teste.
- Ao resolver um problema de layout, ferramenta ou ambiente que custou tempo.
- Antes de sobrescrever ou publicar qualquer entregável.

---

## 3. Onde cada coisa é gravada

| O que | Onde | Natureza |
|---|---|---|
| O que foi **feito, refeito e não feito** nesta sessão | `~~controle/Sessoes/AAAAMMDD-HHMM <Auditor>.md` | imutável |
| Estado do engajamento, decisões, pendências | `~~controle/CHECKPOINT.md` | consolidado |
| **Técnica e erro reutilizáveis em outro cliente** | `~~controle/APRENDIZADOS.md` | append-only |
| Lição que virou método | repositório do plugin, no GitHub | versionado |

**Nunca dentro da pasta do cliente.** Regra R1, sem exceção.

O "não feito" tem o mesmo peso do "feito". Registrar o que não foi possível concluir e o que falta
solicitar é parte do checklist de conclusão do método de auditoria — e é o que impede que uma
limitação de escopo desapareça silenciosamente entre uma sessão e outra.

---

## 4. O critério de promoção

A pergunta é sempre a mesma: **isto vale para outro cliente?**

| Alcance da lição | Destino | Como chega nos colegas |
|---|---|---|
| Só este engajamento | `CHECKPOINT.md`, seção de decisões | OneDrive |
| Qualquer auditoria **deste processo** | plugin do processo: `acta-auditoria-folha`, `acta-revenue-assurance`, ... | `claude plugin update` |
| Qualquer auditoria, **qualquer processo** | `acta-metodo-auditoria` | `claude plugin update` |
| Qualquer trabalho da firma | `acta-way` | `claude plugin update` |

Enquanto a lição estiver só no `APRENDIZADOS.md` do projeto, **ela não existe** para quem nunca
abriu aquela pasta. Promover é abrir alteração no repositório, subir a versão do plugin e avisar a
equipe. É o passo que quase sempre é adiado e é exatamente o que separa conhecimento acumulado de
conhecimento perdido.

Ao promover, **generalize**: tire nome de cliente, caminho de máquina e qualquer detalhe que só
existe naquele engajamento. Lição amarrada a um cliente não é método, é anedota.

---

## 5. Conformidade

Para auditoria interna o registro não é opcional. A Norma 14.6 do IIA exige que a documentação
permita a um auditor informado e prudente **repetir o trabalho e chegar ao mesmo resultado**, e
lista como obrigatório o nome de quem executou e de quem supervisionou.

Por isso toda entrada de sessão carrega **fonte do dado**, **preparado por / em**, e **revisado por
/ em** — os campos já estão no template comum. Ao fechar a sessão, confira que estão preenchidos:
entrada sem fonte do dado não sustenta reperformance, e entrada sem revisão não sustenta supervisão.
