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

A esteira ganhou um dashboard com os doze meses da base e filtros combináveis (período, coordenação, supervisor, frente, tipo de cliente e turno). Seis seções: visão geral, vendas × meta, conversão e retenção, dia a dia, equipe e detalhe. A seção Equipe desce de coordenação para supervisor e para agente, em três colunas. É um arquivo HTML único, com os dados embutidos, que abre sem internet.

![Dashboard: visão geral](09-dashboard-visao-geral.png)

![Dashboard: equipe, de coordenação a agente](10-dashboard-equipe.png)

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

The pipeline got a dashboard with the twelve months of the base and combinable filters (period, coordination, supervisor, channel, customer type and shift). Six sections: overview, sales × target, conversion and retention, day by day, team and detail. The Team section drills from coordination to supervisor to agent, in three columns. It is a single HTML file with the data embedded, which opens without internet.

![Dashboard: overview](09-dashboard-visao-geral.png)

![Dashboard: team, from coordination to agent](10-dashboard-equipe.png)

[Open the dashboard](dashboards/esteira.html)

---

*The screens use fictitious data generated for the portfolio, with the same fictitious team as the PSAT case and the same structure as the original pipeline. The dashboard interface is in Portuguese.*
`;
