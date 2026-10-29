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

Com a camada de agregação pronta, montei uma primeira versão de dashboard para a coordenação, com filtros combináveis (mês, coordenação, supervisor, frente, tipo de cliente e turno). A versão foi apresentada à coordenação e não chegou a ser implementada na operação. Para o portfólio, refiz o dashboard como arquivo HTML único, com os dados do ano embutidos, que abre sem internet. Os filtros valem para todas as seções, e o recorte ativo colore a tela: Chat em ciano, Voz em laranja, manhã e tarde, Ouro/Diamante e Bronze/Prata/Visitante, cada um com a sua cor.

**Mapa de calor.** A leitura da planilha original, agora interativa: PSAT por supervisão, dia a dia, verde na meta (90% ou mais), amarelo entre 80% e 90%, vermelho abaixo. Dia sem avaliação fica em branco. Clica num supervisor e o mapa abre os agentes dele, no mesmo formato. É por onde a coordenação começa: a mancha vermelha diz onde olhar.

![Mapa de calor: supervisão × dia, com os indicadores do período em cima](12-dash-mapa.png)

**Qualidade.** PSAT por mês, uma linha por frente, contra a linha pontilhada da meta. Responde se o problema é de uma frente ou da operação inteira, e se está melhorando ou piorando.

![Qualidade: PSAT por mês, por frente, contra a meta](13-dash-qualidade.png)

**DSAT por mês e PSAT por supervisão.** O DSAT é a mesma régua invertida: quanto maior, pior. As barras por supervisão mostram quem está a que distância da meta, no período filtrado.

![DSAT por mês e PSAT por supervisão](14-dash-dsat-supervisao.png)

**Os quatro segmentos.** Chat e Voz cruzados com Ouro/Diamante e Bronze/Prata/Visitante. Separa "o Chat vai mal" de "o Chat vai mal com cliente Bronze", que pedem ações diferentes.

![PSAT e DSAT por frente e tipo de cliente](15-dash-segmentos.png)

**Resposta.** Quem não avaliou, e por quê. *Recusou avaliar* é abordagem do agente; *não avaliou* é canal ou pesquisa. Dois diagnósticos, duas ações. A distribuição das notas mostra a composição do PSAT, e a recusa por supervisão aponta onde a abordagem precisa de treino.

![Resposta: respondeu, recusou e não avaliou por mês; distribuição das notas; recusa por supervisão](16-dash-resposta.png)

**Ranking.** Top 10 e os 10 de baixo, com mínimo de 20 respondentes para não premiar nem punir amostra pequena. A lista de baixo é a lista de acompanhamento individual do supervisor.

![Ranking: top 10 e 10 agentes abaixo](17-dash-ranking.png)

![Supervisões: PSAT, DSAT, respondentes e recusa](18-dash-supervisoes.png)

**Detalhe.** A tabela por trás dos gráficos, agrupada por coordenação, supervisor, agente ou mês, com as contagens de cada nota.

![Detalhe por supervisor](19-dash-detalhe.png)

[Abrir o dashboard](dashboards/psat.html)

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

With the aggregation layer in place, I built a first dashboard for coordination, with combinable filters (month, coordination, supervisor, channel, customer type and shift). It was presented to coordination and was not rolled out to the operation. For the portfolio, I rebuilt it as a single HTML file with the year's data embedded, which opens without internet. The filters apply to every section, and the active cut colors the screen: Chat in cyan, Voice in orange, morning and afternoon, Gold/Diamond and Bronze/Silver/Visitor, each with its own color. The interface is in Portuguese.

**Heat map.** The original spreadsheet's reading, now interactive: PSAT by supervision team, day by day, green on target (90% or more), yellow between 80% and 90%, red below. A day with no rating stays blank. Click a supervisor and the map opens their agents in the same format. It is where coordination starts: the red patch says where to look.

![Heat map: supervision × day, with the period's indicators on top](12-dash-mapa.png)

**Quality.** PSAT by month, one line per channel, against the dotted target line. It answers whether the problem belongs to one channel or the whole operation, and whether it is getting better or worse.

![Quality: PSAT by month, by channel, against the target](13-dash-qualidade.png)

**DSAT by month and PSAT by supervision.** DSAT is the same ruler inverted: the higher, the worse. The bars by supervision show who is how far from the target in the filtered period.

![DSAT by month and PSAT by supervision](14-dash-dsat-supervisao.png)

**The four segments.** Chat and Voice crossed with Gold/Diamond and Bronze/Silver/Visitor. It separates "Chat is doing badly" from "Chat is doing badly with Bronze customers", which call for different actions.

![PSAT and DSAT by channel and customer type](15-dash-segmentos.png)

**Response.** Who did not rate, and why. *Declined to rate* is the agent's approach; *did not rate* is the channel or the survey. Two diagnoses, two actions. The rating distribution shows what the PSAT is made of, and declines by supervision point to where the approach needs training.

![Response: answered, declined and did not rate by month; rating distribution; declines by supervision](16-dash-resposta.png)

**Ranking.** Top 10 and bottom 10, with a minimum of 20 respondents so small samples are neither rewarded nor punished. The bottom list is the supervisor's individual follow-up list.

![Ranking: top 10 and bottom 10 agents](17-dash-ranking.png)

![Supervisions: PSAT, DSAT, respondents and declines](18-dash-supervisoes.png)

**Detail.** The table behind the charts, grouped by coordination, supervisor, agent or month, with the count of each rating.

![Detail by supervisor](19-dash-detalhe.png)

[Open the dashboard](dashboards/psat.html)

---

*The screens above use fictitious data generated for the portfolio, with the same structure as the original spreadsheet.*
`;
