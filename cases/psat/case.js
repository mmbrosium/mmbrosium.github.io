// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["psat"] = `
## Contexto

Operação de atendimento ao cliente (Chat e Voz) com mais de 80 mil atendimentos por mês, dividida em duas coordenações e oito supervisões. A coordenação precisava saber quem estava sendo bem avaliado e quem não, por agente, supervisor e coordenação, acompanhando a evolução dia a dia. Fui o responsável pela definição da métrica, pela estrutura da base e pela construção das visões.

![Visão geral: PSAT por supervisão, um mês inteiro em mapa de calor](01-visao-geral-supervisao.png)

## A métrica

A escala de avaliação vai de Péssimo a Ótimo, e só Bom e Ótimo contam como positivo.

- **PSAT** = (Ótimo + Bom) ÷ avaliações respondidas.
- **DSAT** = (Ruim + Péssimo) ÷ avaliações respondidas. A mesma lógica invertida: quanto maior, pior.
- Regular não entra em nenhum dos dois.
- Dia sem avaliação fica **em branco, não zero**, para não distorcer a média.

Exemplo: 5 atendimentos, 3 avaliados (2 ótimos e 1 regular) → PSAT de 2/3.

## Como foi construído

A base bruta tem um atendimento por linha. Em vez de cada visão consultar a base inteira, criei uma **camada de agregação**: uma aba que lê a base uma única vez e guarda, por agente e por dia do mês selecionado, o número de respondentes, de positivas e as contagens de cada nota. Todas as visões leem dessa camada, que tem 150 linhas, e não da base, que tem centenas de milhares. Um seletor de mês controla todas as abas.

![Camada de agregação: totais do mês por agente, lidos uma vez da base](08-agg-totais.png)

Em cima dela, cinco visões:

- **Visão geral** para coordenação: PSAT por supervisão, por coordenação (geral, Voz, Chat, Ouro/Diamante, Bronze/Prata/Visitante), por segmento e por local de trabalho, cada uma em mapa de calor dos 31 dias.

![Visão geral: PSAT por coordenação, com cortes por frente e tipo de cliente](02-visao-geral-coordenacao.png)

![Visão geral: PSAT por local de trabalho e DSAT por supervisão](03-visao-geral-local-dsat.png)

- **Individual por operador**: os 150 agentes, dia a dia, com segmento, status (férias e aviso prévio destacados) e supervisor, com filtros de coluna.

![Individual por operador](04-operadores.png)

- **Operador por supervisor**: cada supervisor escolhe o nome no seletor e vê o próprio time filtrado, com as faixas das oito supervisões acima para comparação.

![Operador por supervisor: seletor e lista filtrada](05-supervisores.png)

- **Atendimentos**: volume, respondentes, % de respondentes, distribuição de Ótimo a Péssimo, operador com mais atendimentos e operador mais bem avaliado.

![Atendimentos e avaliações por supervisor](06-atendimentos.png)

- **Resumo**: totais e distribuição percentual por supervisor, coordenação e segmento, com PSAT e DSAT lado a lado.

![Resumo por supervisor](07-resumo-supervisor.png)

## Resultado

- Passou a ser usada no acompanhamento individual de cada agente e das equipes, por supervisores e coordenadores das frentes de Chat e Voz.
- A métrica entrou na bonificação, com metas entre 90% e 95% conforme a frente.
- Apresentada a diretores e outras lideranças.
- Construída em cerca de um mês.

## Dashboard

Com a camada de agregação pronta, montei uma versão inicial de dashboard para a coordenação, com filtros combináveis (mês, coordenação, supervisor, frente, tipo de cliente e turno) e três leituras:

1. **Qualidade**: PSAT e DSAT por mês, uma linha por frente, contra a meta de 90%.
2. **Resposta**: quem não avaliou, separando *recusou avaliar* de *não avaliou*. São dois diagnósticos diferentes: o primeiro é abordagem do agente, o segundo é canal ou pesquisa. Cada um pede uma ação.
3. **Detalhe**: tabela por coordenação, supervisor ou agente no recorte escolhido.

![Dashboard: filtros combináveis e indicadores do mês](09-dash-filtros-kpis.png)

![Dashboard: PSAT e DSAT por mês, por frente, contra a meta](10-dash-qualidade.png)

![Dashboard: resposta, distribuição e detalhe por supervisor](11-dash-resposta-tabela.png)

A versão foi apresentada à coordenação e não chegou a ser implementada na operação. O dashboard lê da camada agregada, não da base bruta, o que o mantém leve mesmo com o ano inteiro carregado.

---

*As telas acima usam dados fictícios gerados para o portfólio, com a mesma estrutura da planilha original.*

`;

// English version (shown when the visitor picks EN-US). Same images, same structure.
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["psat"] = `
## Context

A customer service operation (Chat and Voice) with over 80,000 contacts a month, split into two coordinations and eight supervision teams. Management needed to know who was being rated well and who was not, by agent, supervisor and coordination, following the trend day by day. I owned the metric definition, the data structure and the views.

![Overview: PSAT by supervision team, a whole month as a heat map](01-visao-geral-supervisao.png)

## The metric

The rating scale goes from Terrible to Excellent, and only Good and Excellent count as positive.

- **PSAT** = (Excellent + Good) ÷ answered surveys.
- **DSAT** = (Bad + Terrible) ÷ answered surveys. Same logic, inverted: the higher, the worse.
- Average counts in neither.
- A day with no rating stays **blank, not zero**, so it does not distort the average.

Example: 5 contacts, 3 rated (2 excellent, 1 average) → PSAT of 2/3.

## How it was built

The raw base has one contact per row. Instead of every view querying the whole base, I built an **aggregation layer**: a sheet that reads the base once and stores, per agent and per day of the selected month, the number of respondents, positives and the count of each rating. All views read from that layer, which has 150 rows, not from the base, which has hundreds of thousands. One month selector drives every tab.

![Aggregation layer: month totals per agent, read once from the base](08-agg-totais.png)

On top of it, five views:

- **Overview** for coordination: PSAT by supervision team, by coordination (overall, Voice, Chat, Gold/Diamond, Bronze/Silver/Visitor), by segment and by work location, each as a 31-day heat map.

![Overview: PSAT by coordination, with cuts by channel and customer type](02-visao-geral-coordenacao.png)

![Overview: PSAT by work location and DSAT by supervision team](03-visao-geral-local-dsat.png)

- **Individual by agent**: all 150 agents, day by day, with segment, status (vacation and notice period highlighted) and supervisor, with column filters.

![Individual by agent](04-operadores.png)

- **Agents by supervisor**: each supervisor picks their name and sees their own team filtered, with the eight supervision bands above for comparison.

![Agents by supervisor: selector and filtered list](05-supervisores.png)

- **Contacts**: volume, respondents, % of respondents, distribution from Excellent to Terrible, agent with the most contacts and best-rated agent.

![Contacts and ratings by supervisor](06-atendimentos.png)

- **Summary**: totals and percentage distribution by supervisor, coordination and segment, with PSAT and DSAT side by side.

![Summary by supervisor](07-resumo-supervisor.png)

## Result

- Adopted for individual follow-up of every agent and team by supervisors and coordinators of the Chat and Voice channels.
- The metric entered the bonus scheme, with targets between 90% and 95% depending on the channel.
- Presented to directors and other leaders.
- Built in about a month.

## Dashboard

With the aggregation layer in place, I built a first dashboard for coordination, with combinable filters (month, coordination, supervisor, channel, customer type and shift) and three readings:

1. **Quality**: PSAT and DSAT by month, one line per channel, against the 90% target.
2. **Response**: who did not rate, separating *declined to rate* from *did not rate*. Two different diagnoses: the first is the agent's approach, the second is the channel or the survey. Each calls for a different action.
3. **Detail**: a table by coordination, supervisor or agent in the chosen cut.

![Dashboard: combinable filters and month indicators](09-dash-filtros-kpis.png)

![Dashboard: PSAT and DSAT by month, by channel, against the target](10-dash-qualidade.png)

![Dashboard: response, distribution and detail by supervisor](11-dash-resposta-tabela.png)

This version was presented to coordination and was not rolled out to the operation. The dashboard reads from the aggregated layer, not the raw base, which keeps it light even with the whole year loaded.

---

*The screens above use fictitious data generated for the portfolio, with the same structure as the original spreadsheet.*
`;
