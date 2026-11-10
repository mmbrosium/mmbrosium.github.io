// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["caixazen"] = `
## O que é

A planilha de fechamento de caixa de uma rede de restaurantes, e o primeiro script de automação que escrevi, em 2023, antes de saber programar. A rede tinha quinze unidades; cada uma tinha uma planilha por ano, uma pasta por dia, e um auxiliar financeiro que, na manhã seguinte, pegava os relatórios impressos das máquinas de cartão e do sistema de vendas, digitava tudo, batia caixa contra sistema, classificava cada lançamento no plano de contas e escrevia à mão as observações da auditoria. Eu era esse auxiliar.

A planilha aqui é uma reconstrução do zero, com restaurante, nomes e números inventados: a estrutura é a mesma, o dado não. O script é o mesmo princípio reescrito.

![O fechamento de um dia: operador, troco, pré/atual/pós por bandeira e máquina, auditoria de caixa, valores pagos, descontos, parcelados, contagem de notas e anotações](01-fechamento.png)

## Resultado

- A redação das observações da auditoria, que era feita à mão todo dia, caiu de **1–2 horas pra 20–40 minutos** com o script.
- As observações passaram a sair padronizadas: mesma frase, mesmo formato de número, mesma ordem, pra qualquer unidade e qualquer dia.
- A conferência de couvert e taxa de serviço por garçom virou tabela calculada, em vez de contagem manual comanda a comanda.
- Foi a primeira vez que eu troquei "fazer de novo todo dia" por "escrever uma vez e rodar". Tudo que veio depois (Sextante, Manche, SisGeral) começou aqui.

## O fluxo do dia

Na manhã seguinte ao turno, o auxiliar recebe três coisas: os relatórios das máquinas de cartão (uma por bandeira, uma por máquina), o relatório de movimentos encerrados do sistema de vendas (todas as comandas, item a item) e o relatório de cancelamentos. O trabalho é fazer os três baterem com o que o operador de caixa declarou no fechamento.

**Fechamento de Caixa** é a tela central. O bloco **Atual** é o que o operador digitou por bandeira e máquina; **Pré** e **Pós** são o que ficou de troco antes e depois. A **Auditoria de caixa** compara o valor do caixa (soma do Atual) com o valor do sistema, linha a linha, e calcula a diferença; acima de R$ 15 precisa de justificativa escrita. Embaixo, **Valores pagos** (despesas pagas com dinheiro do caixa, classificadas no plano de contas), **Descontos** por comanda, **Crédito parcelado** com a taxa da máquina, e a **contagem de notas e moedas**, que precisa bater com o cofre.

![BD Comandas: o relatório colado à esquerda, e à direita as colunas calculadas que extraem comanda, pessoas, garçom, couvert, taxa e desconto](02-bd-comandas.png)

**BD Comandas** é onde o relatório do sistema é colado. As colunas da direita fazem o trabalho: pra cada comanda, quantas pessoas, qual garçom, quanto de couvert foi cobrado contra quanto deveria (R$ 9,90 por pessoa), quanto de taxa de serviço foi cobrada contra os 13% esperados, e uma validação que marca "Conferir" quando a retirada de serviço passa de R$ 15.

![BD Cancelamentos: hora, minutos entre o lançamento e o cancelamento, motivo, quem cancelou e quem autorizou](03-cancelamentos.png)

**BD Cancelamentos** registra cada item cancelado com o tempo decorrido desde o lançamento. Cancelamento depois de 15 minutos de produção é prejuízo e aparece em vermelho.

## As tabelas de auditoria

![Taxa de serviço por garçom: comandas atendidas, retiradas, valor retirado e percentual, com status](04-taxa-servico.png)

**Taxa de Serviço** soma, por garçom, quantas comandas atendeu, em quantas a taxa foi retirada e quanto isso representa do que ele deveria ter recebido. Acima de 15% de retirada, o status vira "Alta" e entra na observação do dia.

![Couvert e serviço por comanda: esperado contra cobrado, com a marcação do que faltou](05-couvert.png)

![A grade da auditoria: cada coluna é uma comanda, cada linha uma categoria de item; ERRO onde o lançamento não bate](06-auditoria.png)

**Auditoria** é a grade final: comanda por comanda, categoria por categoria, OK ou ERRO, e embaixo as linhas de pessoas, total, desconto, couvert e serviço com cor onde o valor foge do padrão. É essa grade que o financeiro olhava.

## O script

![As observações geradas pelo script, prontas pra colar no relatório do dia](07-observacoes.png)

Antes do script, o auxiliar lia a grade e escrevia: "Porcentagem alta de retirada do serviço: Fulano 29,68%, total 6 comandas atendidas, 1 retirada, total de R$ 59,30". Uma frase dessas por garçom fora do padrão, uma por comanda sem couvert, uma pra diferença de caixa, todo dia. O script em Google Apps Script lê as tabelas de Taxa de Serviço e Couvert, aplica as mesmas regras (retirada acima de 15%, couvert faltando, diferença acima do limite) e escreve as frases prontas na aba de Auditoria, com número formatado em real e percentual. O que sobrou de manual foi colorir.

Na época eu não sabia programar. Li o básico, errei umas sete versões e pedi ajuda a uma IA de código, que em 2023 estava começando a servir pra isso. Aprendi duas coisas que carrego: que a ferramenta certa pra um trabalho repetitivo é um script, e que pedir ajuda bem é uma habilidade.

[Baixar a planilha reconstruída (.xlsx)](cases/caixazen/Caixa-Zen.xlsx) · [Ver o script (observacoes.gs)](cases/caixazen/observacoes.gs)

## O que faltou

- **Colar o relatório ainda era manual.** A versão ideal lê o arquivo exportado direto. A equipe que ficou depois de mim fez exatamente isso: um script que roda o dia inteiro sem intervenção.
- **Uma planilha por unidade por ano** não escala. O certo seria uma base só com a coluna "unidade".
- **O plano de contas** dentro da própria planilha, repetido quinze vezes. Deveria ser uma fonte única.

## Como foi feito

Google Sheets com SOMASE, CONT.SES, SE e FILTER; Google Apps Script pro gerador de observações. A reconstrução aqui foi feita em Excel com as mesmas fórmulas, pra abrir em qualquer lugar.
`;

window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["caixazen"] = `
## What it is

The cash-closing spreadsheet of a restaurant chain, and the first automation script I ever wrote, in 2023, before I knew how to program. The chain had fifteen units; each had one spreadsheet per year, one folder per day, and a finance assistant who, the next morning, took the printed reports from the card machines and the POS, typed everything in, matched cash against system, classified every entry in the chart of accounts and wrote the audit observations by hand. I was that assistant.

The spreadsheet here is a from-scratch reconstruction, with an invented restaurant, names and numbers: the structure is the same, the data is not. The script is the same principle rewritten.

![One day's closing: operator, float, pre/current/post by brand and machine, cash audit, payments, discounts, installments, note count and remarks](01-fechamento.png)

## Result

- Writing the audit observations, done by hand every day, dropped from **1–2 hours to 20–40 minutes** with the script.
- Observations became standardized: same sentence, same number format, same order, for any unit and any day.
- Checking cover charge and service fee per waiter became a calculated table instead of a manual tab-by-tab count.
- It was the first time I swapped "do it again every day" for "write it once and run it". Everything after (Sextante, Manche, SisGeral) started here.

## The day's flow

The morning after the shift, the assistant receives three things: the card-machine reports (one per brand, one per machine), the POS closed-movements report (every tab, item by item) and the cancellations report. The job is to make all three match what the cashier declared at closing.

**Fechamento de Caixa** is the central screen. The **Atual** block is what the cashier typed per brand and machine; **Pré** and **Pós** are the float before and after. **Auditoria de caixa** compares the cash value (sum of Atual) with the system value, line by line, and computes the difference; above R$ 15 needs a written justification. Below, **Valores pagos** (expenses paid from the till, classified in the chart of accounts), **Descontos** per tab, **Crédito parcelado** with the machine fee, and the **note and coin count**, which must match the safe.

![BD Comandas: the report pasted on the left, and on the right the calculated columns extracting tab, people, waiter, cover, fee and discount](02-bd-comandas.png)

**BD Comandas** is where the POS report is pasted. The right-hand columns do the work: for each tab, how many people, which waiter, how much cover charge was billed against what it should be (R$ 9.90 per person), how much service fee was billed against the expected 13%, and a validation that flags "Conferir" when the fee removal exceeds R$ 15.

![BD Cancelamentos: time, minutes between order and cancellation, reason, who cancelled and who authorized](03-cancelamentos.png)

**BD Cancelamentos** logs every cancelled item with the time elapsed since it was ordered. Cancelling after 15 minutes of production is a loss and shows in red.

## The audit tables

![Service fee per waiter: tabs served, removals, amount removed and percentage, with status](04-taxa-servico.png)

**Taxa de Serviço** sums, per waiter, how many tabs they served, in how many the fee was removed and how much that is of what they should have received. Above 15% removal, status turns "Alta" and goes into the day's observations.

![Cover and service per tab: expected against billed, with what was missing marked](05-couvert.png)

![The audit grid: each column a tab, each row an item category; ERRO where the entry does not match](06-auditoria.png)

**Auditoria** is the final grid: tab by tab, category by category, OK or ERRO, and below it the rows of people, total, discount, cover and service with color where the value is off. This grid is what finance looked at.

## The script

![The observations generated by the script, ready to paste into the day's report](07-observacoes.png)

Before the script, the assistant read the grid and wrote: "High service-fee removal rate: Fulano 29.68%, 6 tabs served, 1 removal, total R$ 59.30". One such sentence per out-of-pattern waiter, one per tab without cover charge, one for the cash difference, every day. The Google Apps Script reads the Taxa de Serviço and Couvert tables, applies the same rules (removal above 15%, missing cover, difference above the limit) and writes the ready sentences into the Auditoria sheet, with numbers formatted in reais and percent. What stayed manual was the coloring.

At the time I could not program. I read the basics, failed about seven versions and asked a coding AI for help, which in 2023 was just starting to be useful for that. I learned two things I still carry: that the right tool for a repetitive job is a script, and that asking for help well is a skill.

[Download the reconstructed spreadsheet (.xlsx)](cases/caixazen/Caixa-Zen.xlsx) · [View the script (observacoes.gs)](cases/caixazen/observacoes.gs)

## What was left

- **Pasting the report was still manual.** The ideal version reads the exported file directly. The team that stayed after me did exactly that: a script that runs the whole day with no intervention.
- **One spreadsheet per unit per year** does not scale. The right thing is a single base with a "unit" column.
- **The chart of accounts** inside the spreadsheet itself, repeated fifteen times. It should be a single source.

## How it was built

Google Sheets with SUMIF, COUNTIFS, IF and FILTER; Google Apps Script for the observation generator. The reconstruction here was made in Excel with the same formulas, to open anywhere.
`;
