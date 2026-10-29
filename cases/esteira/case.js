// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["esteira"] = `
## Contexto

A mesma operação de atendimento do case PSAT (Chat e Voz, duas coordenações, oito supervisões, ~150 agentes) vende adesões e upgrades de plano durante o atendimento e, nos pedidos de cancelamento, tenta reter o cliente. A coordenação precisava acompanhar, por dia e por pessoa: quantas vendas e upgrades saíram, quanto faltava para a meta, quanto do cancelamento estava sendo revertido, e se o mês ia fechar.

Fui o responsável pela esteira inteira: bases, regra de meta, projeção e as visões por supervisor e por agente.

![Painel: indicadores do mês, ritmo, projeção de fechamento e o dia a dia](01-painel-kpis.png)

## As métricas

- **Consolidado** = vendas (adesões) + upgrades.
- **Conversão** = vendas ÷ atendimentos.
- **Retenção** = retidos ÷ (retidos + cancelados). Retido inclui quem ficou no mesmo plano e quem ficou num plano menor (downgrade). O downgrade aparece separado, porque retenção alta sustentada por downgrade é receita caindo.
- **Ritmo** = vendas até D-1 ÷ meta acumulada até D-1. Diz se o mês está no passo sem esperar o fim dele. No dia 19, o atingimento bruto mostrava 67% e assustava; o ritmo mostrava 117%.
- **Projeção de fechamento** = realizado ÷ dias decorridos × dias do mês.
- **Esperado pelo volume** = atendimentos do dia × conversão média do mês. A linha "real − esperado" separa "vendeu pouco porque veio pouca gente" de "vendeu pouco com muita gente".

## A meta é um parâmetro, não um número solto

Uma aba de metas guarda a meta mensal de cada supervisor (vendas e upgrades) e o peso de cada dia da semana. A meta diária da operação é a meta mensal distribuída pelos dias proporcionalmente ao peso: fim de semana pesa menos. Tudo que é meta, atingimento, ritmo e projeção deriva daí. Mudou a meta, mudou o painel inteiro.

![Metas e parâmetros: meta por supervisor e peso por dia da semana](08-metas.png)

## Como foi construído

Duas bases: atendimentos por agente e dia (chamadas, cancelamentos, retenções, downgrades) e um registro por movimento (venda, upgrade, downgrade, retenção, com o plano). Um calendário gera os dias do mês, o dia da semana e a meta do dia. Uma camada de agregação lê as bases uma vez, por dia, por supervisor e por agente; as visões leem dela. Um seletor de mês controla todas as abas; a base cobre doze meses.

Em cima disso, três visões:

- **Painel**: dez indicadores, a faixa dos 30 dias com os dias futuros em branco, a tabela de supervisores com meta, realizado, projeção e atingimento para vendas, upgrades e consolidado, e o top 10 de agentes.

![Painel: por supervisor e top 10 agentes](02-painel-supervisores-top10.png)

- **Dia a dia**: atendidas, meta, vendas, atingimento, conversão, esperado, upgrades, retidos (e quantos com downgrade), cancelamentos e retenção, com a linha de total.

![Resultado dia a dia](03-dia-a-dia.png)

![Resultado dia a dia: final do mês e totais](04-dia-a-dia-total.png)

- **Supervisor**: o supervisor escolhe o nome, vê os indicadores do time, o dia a dia do time, os agentes do mês ordenados por consolidado, e os agentes num dia escolhido.

![Performance comercial por supervisor: indicadores e dia a dia do time](05-supervisor-time.png)

![Agentes do supervisor no mês](06-supervisor-agentes-mes.png)

![Agentes do supervisor em um dia](07-supervisor-agentes-dia.png)

## Resultado

- Visão consolidada de vendas, cancelamentos e retenções por agente, supervisão e coordenação, usada como base do incentivo coletivo: a venda de um agente beneficiava a equipe.
- Metas, atingimento e projeção numa regra só, auditável na aba de metas.
- Construída em paralelo a outras demandas da coordenação.

## Dashboard

A esteira ganhou um dashboard com os doze meses da base e os mesmos filtros combináveis (período, coordenação, supervisor, frente, tipo de cliente e turno). É um arquivo HTML único, com os dados embutidos, que abre sem internet. A paleta é quente, de operação comercial, e o recorte ativo colore as barras: filtrou Chat, tudo fica ciano; filtrou manhã, amarelo-sol.

**Visão geral.** O que a coordenação olha em trinta segundos: vendas, upgrades, consolidado, meta do período, atingimento, conversão, atendimentos, retenção e retidos com downgrade, cada um comparado com o mesmo trecho do mês anterior. Embaixo, vendas e upgrades por mês contra a linha da meta.

![Visão geral: indicadores do período e vendas por mês contra a meta](09-dashboard-visao-geral.png)

![Visão geral: conversão por mês por frente, e retenção por mês separando quem ficou no plano de quem fez downgrade](10-dashboard-conversao-retencao.png)

**Vendas × meta.** O mesmo gráfico alternando entre quantidade e atingimento, o consolidado por supervisor com a meta do período em cinza atrás de cada barra, e o top 10 de agentes. Quanto foi feito, quanto era pra ter sido feito, e quem está puxando.

![Vendas × meta: realizado contra a meta, mês a mês](11-dashboard-vendas-meta.png)

![Consolidado por supervisor contra a meta, e top 10 agentes](12-dashboard-supervisores-top10.png)

**Conversão e retenção.** Conversão por frente ao longo dos meses, retenção por mês e por supervisor, sempre separando retido no plano de retido com downgrade, porque retenção sustentada por downgrade é receita caindo.

![Retenção por supervisor: barra cheia é retido, a parte laranja é downgrade](13-dashboard-retencao-supervisor.png)

**Dia a dia.** O último mês do período, dia por dia: as barras de vendas contra a linha do esperado pelo volume (atendimentos do dia × conversão média do mês). Barra acima da linha é dia bom de verdade; abaixo, dia que vendeu pouco apesar do movimento. A tabela do mês traz a mesma leitura com atendimentos, esperado, real − esperado, upgrades, retidos, downgrades, cancelados e retenção.

![Dia a dia: vendas contra o esperado pelo volume](14-dashboard-dia-a-dia.png)

![Tabela do mês](15-dashboard-tabela-mes.png)

**Equipe.** Três colunas: coordenação → supervisor → agente. Clica numa coordenação e as outras duas colunas filtram; clica num supervisor e aparecem só os agentes dele, com atendimentos, vendas, upgrades e conversão. A lista de agentes mostra quem teve atendimento no período, por isso o número varia com o filtro.

![Equipe: de coordenação a agente, em três colunas](16-dashboard-equipe.png)

**Detalhe.** A tabela completa no recorte, agrupada por coordenação, supervisor ou agente, com meta, atingimento, conversão, retenção e downgrade, ordenável por qualquer coluna.

![Detalhe por supervisor](17-dashboard-detalhe.png)

[Abrir o dashboard](dashboards/esteira.html)

---

*As telas usam dados fictícios gerados para o portfólio, com a mesma equipe fictícia do case PSAT e a mesma estrutura da esteira original.*
`;

// English version (shown when the visitor picks EN-US).
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["esteira"] = `
## Context

The same support operation as the PSAT case (Chat and Voice, two coordinations, eight supervision teams, ~150 agents) sells memberships and plan upgrades during contacts and, on cancellation requests, tries to retain the customer. Coordination needed to follow, by day and by person: how many sales and upgrades went out, how far from target, how much of the cancellation volume was being reversed, and whether the month would close.

I owned the whole pipeline: bases, target rule, projection and the views by supervisor and by agent.

![Panel: month indicators, pace, closing projection and the day by day](01-painel-kpis.png)

## The metrics

- **Consolidated** = sales (memberships) + upgrades.
- **Conversion** = sales ÷ contacts.
- **Retention** = retained ÷ (retained + cancelled). Retained includes customers who kept the same plan and those who moved to a smaller plan (downgrade). Downgrade is shown separately, because retention sustained by downgrades is revenue going down.
- **Pace** = sales up to D-1 ÷ target accumulated up to D-1. It says whether the month is on track without waiting for it to end. On day 19, raw attainment showed 67% and looked scary; pace showed 117%.
- **Closing projection** = actual ÷ days elapsed × days in the month.
- **Expected from volume** = contacts of the day × average conversion of the month. The "actual − expected" line separates "sold little because few people came" from "sold little with many people".

## The target is a parameter, not a loose number

A targets tab holds each supervisor's monthly target (sales and upgrades) and the weight of each weekday. The operation's daily target is the monthly target spread across the days in proportion to the weight: weekends weigh less. Everything that is target, attainment, pace and projection derives from it. Change the target, the whole panel changes.

![Targets and parameters: target per supervisor and weight per weekday](08-metas.png)

## How it was built

Two bases: contacts per agent and day (calls, cancellations, retentions, downgrades) and one record per movement (sale, upgrade, downgrade, retention, with the plan). A calendar generates the days of the month, the weekday and the day's target. An aggregation layer reads the bases once, by day, by supervisor and by agent; the views read from it. One month selector drives every tab; the base covers twelve months.

On top of that, three views:

- **Panel**: ten indicators, the 30-day strip with future days blank, the supervisor table with target, actual, projection and attainment for sales, upgrades and consolidated, and the top 10 agents.

![Panel: by supervisor and top 10 agents](02-painel-supervisores-top10.png)

- **Day by day**: contacts, target, sales, attainment, conversion, expected, upgrades, retained (and how many with downgrade), cancellations and retention, with a total line.

![Day-by-day results](03-dia-a-dia.png)

![Day-by-day results: end of month and totals](04-dia-a-dia-total.png)

- **Supervisor**: the supervisor picks their name, sees the team indicators, the team's day by day, the month's agents sorted by consolidated, and the agents on a chosen day.

![Commercial performance by supervisor: indicators and the team's day by day](05-supervisor-time.png)

![The supervisor's agents in the month](06-supervisor-agentes-mes.png)

![The supervisor's agents on one day](07-supervisor-agentes-dia.png)

## Result

- A consolidated view of sales, cancellations and retentions by agent, supervision and coordination, used as the basis for the team incentive: one agent's sale benefited the team.
- Targets, attainment and projection in a single rule, auditable in the targets tab.
- Built alongside other coordination demands.

## Dashboard

The pipeline got a dashboard with the twelve months of the base and the same combinable filters (period, coordination, supervisor, channel, customer type and shift). It is a single HTML file with the data embedded, which opens without internet. The palette is warm, a sales-operation look, and the active cut colors the bars: filter Chat and everything turns cyan; filter morning and it turns sun-yellow. The interface is in Portuguese.

**Overview.** What coordination looks at in thirty seconds: sales, upgrades, consolidated, period target, attainment, conversion, contacts, retention and retained with downgrade, each compared with the same stretch of the previous month. Below, sales and upgrades by month against the target line.

![Overview: period indicators and sales by month against the target](09-dashboard-visao-geral.png)

![Overview: conversion by month by channel, and retention by month separating those who kept the plan from those who downgraded](10-dashboard-conversao-retencao.png)

**Sales × target.** The same chart switching between quantity and attainment, the consolidated per supervisor with the period target in grey behind each bar, and the top 10 agents. How much was done, how much should have been done, and who is pulling.

![Sales × target: actual against target, month by month](11-dashboard-vendas-meta.png)

![Consolidated per supervisor against target, and top 10 agents](12-dashboard-supervisores-top10.png)

**Conversion and retention.** Conversion by channel over the months, retention by month and by supervisor, always separating retained in the plan from retained with downgrade, because retention sustained by downgrades is revenue going down.

![Retention by supervisor: the full bar is retained, the orange part is downgrade](13-dashboard-retencao-supervisor.png)

**Day by day.** The last month of the period, day by day: sales bars against the line of what was expected from volume (contacts of the day × average conversion of the month). A bar above the line is a truly good day; below it, a day that sold little despite the traffic. The month table gives the same reading with contacts, expected, actual − expected, upgrades, retained, downgrades, cancelled and retention.

![Day by day: sales against expected from volume](14-dashboard-dia-a-dia.png)

![Month table](15-dashboard-tabela-mes.png)

**Team.** Three columns: coordination → supervisor → agent. Click a coordination and the other two columns filter; click a supervisor and only their agents show, with contacts, sales, upgrades and conversion. The agent list shows who had contacts in the period, so the count changes with the filter.

![Team: from coordination to agent, in three columns](16-dashboard-equipe.png)

**Detail.** The full table in the chosen cut, grouped by coordination, supervisor or agent, with target, attainment, conversion, retention and downgrade, sortable by any column.

![Detail by supervisor](17-dashboard-detalhe.png)

[Open the dashboard](dashboards/esteira.html)

---

*The screens use fictitious data generated for the portfolio, with the same fictitious team as the PSAT case and the same structure as the original pipeline. The dashboard interface is in Portuguese.*
`;
