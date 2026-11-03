// Pontos explicados do PSAT: [x, y, largura, altura, título, texto, título EN, texto EN], em % da imagem.
window.CASE_PONTOS = window.CASE_PONTOS || {};
window.CASE_PONTOS.psat = {
  "01-visao-geral-supervisao.png": [
    [0, 13.5, 29, 5.5, "Seletor de mês", "Mês e ano escolhidos aqui. Todas as abas da planilha seguem este seletor, então a coordenação troca o período num lugar só.", "Month selector", "Month and year are picked here. Every tab in the workbook follows this selector, so coordination changes the period in one place."],
    [31, 13.5, 25, 5.5, "Instrução na tela", "Lembrete fixo ao lado do seletor, pra quem abre a planilha pela primeira vez.", "On-screen hint", "Fixed reminder next to the selector, for whoever opens the workbook for the first time."],
    [0, 22.5, 100, 7.5, "Bloco por agente", "Consulta de um agente só, dia a dia, antes de descer pra visão das supervisões.", "Per-agent block", "Lookup of a single agent, day by day, before going down to the supervision view."],
    [28, 34.5, 72, 8, "Linha do agente", "PSAT do agente em cada dia. Dia sem avaliação fica em branco, não zero, pra não derrubar a média.", "Agent row", "The agent's PSAT on each day. A day with no rating stays blank, not zero, so it does not drag the average down."],
    [0, 46.5, 100, 7, "PSAT por supervisão", "As oito supervisões da operação, um mês inteiro em mapa de calor.", "PSAT by supervision", "The operation's eight supervision teams, a whole month as a heat map."],
    [28, 57.5, 72, 4.5, "Dias do mês", "Uma coluna por dia. O número de colunas acompanha o mês selecionado.", "Days of the month", "One column per day. The number of columns follows the selected month."],
    [0, 62.5, 21.5, 35, "Supervisor e média", "Nome do supervisor e a média do mês. A média é calculada sobre as avaliações respondidas, não sobre os dias.", "Supervisor and average", "Supervisor name and the month's average. The average is computed over answered surveys, not over days."],
    [28, 62.5, 72, 35, "Mapa de calor", "Verde é PSAT alto, vermelho é baixo. A mancha vermelha mostra em que dia e em que time olhar primeiro.", "Heat map", "Green is high PSAT, red is low. The red patch shows which day and which team to look at first."]
  ],
  "02-visao-geral-coordenacao.png": [
    [0, 9.5, 29, 4.5, "Mesmo seletor", "O mês vem do seletor da aba, que vale pra todos os blocos da visão geral.", "Same selector", "The month comes from the tab's selector, which drives every block of the overview."],
    [0, 15, 100, 5.5, "Coordenação 1", "Bloco de uma coordenação. A operação tem duas, cada uma com quatro supervisões.", "Coordination 1", "One coordination's block. The operation has two, each with four supervision teams."],
    [0, 25, 21.5, 16.5, "Cinco cortes", "Geral, Voz, Chat, Ouro/Diamante e Bronze/Prata/Visitante. O mesmo PSAT recortado por frente e por tipo de cliente.", "Five cuts", "Overall, Voice, Chat, Gold/Diamond and Bronze/Silver/Visitor. The same PSAT cut by channel and by customer type."],
    [28, 25, 72, 16.5, "Dia a dia da coordenação", "Cada linha é um corte, cada coluna um dia. Dá pra ver se um dia ruim foi da Voz, do Chat ou de todo mundo.", "Coordination day by day", "Each row is a cut, each column a day. You can tell whether a bad day belonged to Voice, Chat or everyone."],
    [0, 44.5, 100, 5.5, "Coordenação 2", "Segunda coordenação, mesma estrutura, pra comparar lado a lado.", "Coordination 2", "Second coordination, same structure, to compare side by side."],
    [28, 54.5, 72, 16, "Comparação direta", "Com os dois blocos na mesma tela, a coordenação vê se o problema é dela ou da operação inteira.", "Direct comparison", "With both blocks on the same screen, coordination sees whether the problem is theirs or the whole operation's."],
    [0, 74, 100, 6, "Segmento geral", "Frente cruzada com tipo de cliente: Voz D+O, Voz BPV, Chat D+O, Chat BPV.", "Overall segment", "Channel crossed with customer type: Voice D+O, Voice BPV, Chat D+O, Chat BPV."],
    [0, 82, 100, 16.5, "Quatro segmentos", "Os quatro segmentos da operação, dia a dia. Separa \"o Chat vai mal\" de \"o Chat vai mal com cliente Bronze\".", "Four segments", "The operation's four segments, day by day. It separates \"Chat is doing badly\" from \"Chat is doing badly with Bronze customers\"."]
  ],
  "03-visao-geral-local-dsat.png": [
    [0, 18, 100, 5.5, "Segmento", "Fim do bloco de segmentos, o mesmo que fecha a tela anterior.", "Segment", "End of the segment block, the same one that closes the previous screen."],
    [0, 26, 100, 13.5, "Frente × cliente", "Voz e Chat cruzados com D+O (Ouro/Diamante) e BPV (Bronze/Prata/Visitante), com a média do mês na segunda coluna.", "Channel × customer", "Voice and Chat crossed with D+O (Gold/Diamond) and BPV (Bronze/Silver/Visitor), with the month's average in the second column."],
    [0, 42, 100, 6, "Local de trabalho", "PSAT por onde o agente atende: home office ou presencial, em cada frente.", "Work location", "PSAT by where the agent works: home office or on site, for each channel."],
    [0, 50, 100, 14, "Home office × presencial", "Quatro linhas pra responder uma pergunta que a liderança fazia: o atendimento remoto é pior avaliado? Aqui a resposta fica visível dia a dia.", "Home office × on site", "Four rows to answer a question leadership kept asking: is remote service rated worse? Here the answer is visible day by day."],
    [0, 66, 100, 5.5, "DSAT por supervisão", "A régua invertida: Ruim + Péssimo dividido por respondentes. Quanto maior, pior.", "DSAT by supervision", "The inverted ruler: Bad + Terrible divided by respondents. The higher, the worse."],
    [0, 73, 17, 4, "Supervisor", "As mesmas oito supervisões do mapa de calor, agora vistas pelo lado negativo.", "Supervisor", "The same eight supervision teams from the heat map, now seen from the negative side."],
    [17, 73, 4.5, 26, "DSAT", "Percentual de notas negativas do mês. Pintado em vermelho pra não confundir com o PSAT.", "DSAT", "Share of negative ratings in the month. Painted red so it is not confused with PSAT."],
    [22, 73, 10, 26, "PSAT, neutro e base", "PSAT ao lado, o Regular (que não entra em nenhum dos dois) e o total de respondentes, pra saber o tamanho da amostra.", "PSAT, neutral and base", "PSAT alongside, the Average rating (which counts in neither) and the total respondents, to know the sample size."]
  ],
  "04-operadores.png": [
    [0, 0, 25, 6.5, "Individual por operador", "Os 150 agentes da operação numa tabela só, dia a dia, no mês selecionado.", "Individual by agent", "All 150 agents of the operation in a single table, day by day, in the selected month."],
    [0, 9.5, 35, 3.5, "Filtros de coluna", "Cada cabeçalho tem filtro. O supervisor filtra o próprio time; a coordenação filtra por segmento ou status.", "Column filters", "Every header has a filter. A supervisor filters their own team; coordination filters by segment or status."],
    [13, 13.5, 7, 86, "Segmento", "Frente e tipo de cliente do agente: VOZ ou CHAT, D+O ou BPV.", "Segment", "The agent's channel and customer type: VOICE or CHAT, D+O or BPV."],
    [20.3, 13.5, 4.7, 86, "Status", "Ativo, férias ou aviso prévio. Explica um mês vazio sem precisar perguntar.", "Status", "Active, vacation or notice period. It explains an empty month without having to ask."],
    [25, 13.5, 10, 86, "Supervisor", "A quem o agente responde. É o campo que cada supervisor usa pra isolar o time dele.", "Supervisor", "Who the agent reports to. It is the field each supervisor uses to isolate their team."],
    [35, 13.5, 5, 86, "Média do mês", "PSAT do agente no mês, calculado sobre as avaliações respondidas. Vermelho abaixo, verde acima.", "Month average", "The agent's PSAT for the month, computed over answered surveys. Red below, green above."],
    [40, 13.5, 60, 86, "Grade diária", "Um agente atende poucos clientes avaliados por dia, por isso aparecem 0%, 50% e 100%. Dia sem avaliação fica em branco.", "Daily grid", "An agent gets few rated contacts a day, hence the 0%, 50% and 100%. A day with no rating stays blank."],
    [0, 59.5, 13, 3, "Linha destacada", "Agente de férias fica em amarelo; aviso prévio, em laranja. O destaque acompanha a linha inteira.", "Highlighted row", "An agent on vacation is shown in yellow; notice period, in orange. The highlight runs across the whole row."]
  ],
  "05-supervisores.png": [
    [1, 8, 19.5, 4.5, "Seletor de supervisor", "O supervisor escolhe o próprio nome e a lista de agentes lá embaixo é filtrada na hora.", "Supervisor selector", "The supervisor picks their own name and the agent list below is filtered on the spot."],
    [33, 8.5, 24, 4, "Instrução", "Texto fixo explicando o seletor. A aba foi feita pra ser aberta pelo supervisor, sem treino.", "Hint", "Fixed text explaining the selector. The tab was made to be opened by the supervisor, with no training."],
    [0, 14, 100, 3.5, "Cabeçalho", "Nº, coordenador, Chat/Voz, D+O e agente, seguidos da média e dos dias do mês.", "Header", "No., coordinator, Chat/Voice, D+O and agent, followed by the average and the days of the month."],
    [0, 17.5, 33, 33.5, "Oito supervisões", "As faixas coloridas são as oito supervisões, sempre visíveis. Servem de régua: o supervisor compara o time dele com os outros.", "Eight supervision teams", "The colored bands are the eight supervision teams, always visible. They work as a ruler: the supervisor compares their team with the others."],
    [36.5, 17.5, 63.5, 33.5, "PSAT das supervisões", "Mapa de calor de cada supervisão no mês, o mesmo da visão geral.", "Supervision PSAT", "Each supervision team's heat map for the month, the same as in the overview."],
    [0, 54, 33, 4, "Time filtrado", "Título muda conforme o seletor: aqui, os agentes de Jaqueline Azevedo.", "Filtered team", "The title changes with the selector: here, Jaqueline Azevedo's agents."],
    [0, 58, 17, 42, "Agentes do time", "Numerados, com coordenador e frente. Fundo bege pra separar da faixa das supervisões.", "Team agents", "Numbered, with coordinator and channel. Beige background to set them apart from the supervision bands."],
    [17, 58, 3.5, 42, "D+O", "SIM quando o agente atende Ouro/Diamante. Clientes de maior valor, cobrança maior.", "D+O", "YES when the agent serves Gold/Diamond. Higher-value customers, higher expectations."],
    [33, 58, 67, 42, "Dia a dia do time", "Média e grade diária de cada agente do time, pra conversa individual com dado na mão.", "Team day by day", "Average and daily grid of each agent on the team, for one-on-one conversations with data in hand."]
  ],
  "06-atendimentos.png": [
    [10, 15.5, 21.5, 7.5, "Supervisor selecionado", "A tela inteira muda conforme o supervisor escolhido aqui.", "Selected supervisor", "The whole screen changes with the supervisor chosen here."],
    [31.5, 8, 13.5, 19, "Mais atendimentos", "Operador do time com maior volume no mês, e quantos atendeu.", "Most contacts", "The team's agent with the highest volume in the month, and how many contacts."],
    [45, 8, 12.5, 19, "Mais bem avaliado", "Operador com mais Ótimo + Bom no mês. O reconhecimento vem do mesmo dado que a cobrança.", "Best rated", "Agent with the most Excellent + Good in the month. Recognition comes from the same data as accountability."],
    [57.5, 8, 21.5, 19, "Volume e resposta", "Total de atendimentos, quantos foram avaliados e o % de respondentes. Mostra o tamanho da amostra por trás do PSAT.", "Volume and response", "Total contacts, how many were rated and the % of respondents. It shows the sample size behind the PSAT."],
    [79, 8, 21, 19, "Contagem por nota", "Totais de Ótimo, Bom e Neutro do time. Cada nota com a sua cor, repetida na tabela abaixo.", "Count by rating", "The team's totals of Excellent, Good and Neutral. Each rating has its own color, repeated in the table below."],
    [0, 29, 100, 3.5, "Cabeçalho da tabela", "Coordenador, segmento, agente, e depois os números: total, respondentes, % e as cinco notas.", "Table header", "Coordinator, segment, agent, then the numbers: total, respondents, % and the five ratings."],
    [31.5, 32.5, 26, 60, "Volume por agente", "Total e respondentes com barra de dados: quanto mais verde, mais atendimentos.", "Volume per agent", "Total and respondents with data bars: the greener, the more contacts."],
    [65, 32.5, 35, 60, "Distribuição das notas", "Ótimo a Péssimo por agente. Verde é bom, laranja e vermelho pedem atenção.", "Rating distribution", "Excellent to Terrible per agent. Green is good, orange and red call for attention."]
  ],
  "07-resumo-supervisor.png": [
    [0, 0, 56, 7, "Resumo", "Totais e percentuais por supervisor, coordenação e segmento, na mesma aba.", "Summary", "Totals and percentages by supervisor, coordination and segment, in the same tab."],
    [0, 15, 100, 6, "Por supervisor", "Primeiro bloco: as oito supervisões. Os outros dois repetem a estrutura por coordenação e por segmento.", "By supervisor", "First block: the eight supervision teams. The other two repeat the structure by coordination and by segment."],
    [0, 21, 100, 9, "Colunas", "Totais absolutos primeiro, PSAT e DSAT no fim. Cada nota com a cor que usa em toda a planilha.", "Columns", "Absolute totals first, PSAT and DSAT at the end. Each rating in the color used across the workbook."],
    [16.5, 30, 24.5, 30, "Atendimentos e respondentes", "Quantos atendimentos o time fez, quantos foram avaliados e a proporção. Sem isso, o PSAT não tem contexto.", "Contacts and respondents", "How many contacts the team handled, how many were rated and the ratio. Without this, the PSAT has no context."],
    [41.5, 30, 41.5, 30, "Totais por nota", "Ótimo, Bom, Neutro, Ruim e Péssimo em números absolutos, com escala de cor por coluna.", "Totals by rating", "Excellent, Good, Neutral, Bad and Terrible in absolute numbers, with a color scale per column."],
    [83, 30, 17, 30, "PSAT e DSAT", "Os dois indicadores lado a lado. PSAT = (Ótimo + Bom) ÷ respondidas; DSAT = (Ruim + Péssimo) ÷ respondidas.", "PSAT and DSAT", "The two indicators side by side. PSAT = (Excellent + Good) ÷ answered; DSAT = (Bad + Terrible) ÷ answered."],
    [0, 64, 58.5, 4.5, "Distribuição percentual", "Segunda tabela: as mesmas notas em % das respondidas.", "Percentage distribution", "Second table: the same ratings as a % of answered surveys."],
    [16.5, 68.5, 42, 30, "Composição", "% de cada nota por supervisor. Mostra do que o PSAT é feito: muito Ótimo ou muito Bom dão o mesmo PSAT, mas não são a mesma coisa.", "Composition", "% of each rating per supervisor. It shows what the PSAT is made of: lots of Excellent or lots of Good give the same PSAT, but they are not the same thing."]
  ],
  "08-agg-totais.png": [
    [0, 0, 14, 11.5, "Parâmetros", "Mês, ano, número do mês e dias no mês, lidos do seletor. Tudo nesta aba deriva daqui.", "Parameters", "Month, year, month number and days in the month, read from the selector. Everything in this tab derives from here."],
    [14, 11.5, 86, 4, "Totais do mês", "Esta é a camada de agregação: lê a base bruta uma única vez e guarda os totais do mês por agente.", "Month totals", "This is the aggregation layer: it reads the raw base once and stores the month's totals per agent."],
    [0, 15.5, 14, 84.5, "Agente", "Uma linha por agente, 150 ao todo. As visões leem estas 150 linhas, não as centenas de milhares da base.", "Agent", "One row per agent, 150 in all. The views read these 150 rows, not the hundreds of thousands in the base."],
    [14, 15.5, 19, 84.5, "Atendimentos e respondentes", "Quantos atendimentos o agente fez no mês e quantos clientes responderam a pesquisa.", "Contacts and respondents", "How many contacts the agent handled in the month and how many customers answered the survey."],
    [33, 15.5, 24, 84.5, "Contagem por nota", "Ótimo, Bom, Regular, Ruim e Péssimo contados separadamente. Guardar a contagem permite recalcular qualquer indicador depois.", "Count by rating", "Excellent, Good, Average, Bad and Terrible counted separately. Keeping the counts allows any indicator to be recalculated later."],
    [57, 15.5, 13, 84.5, "Recusou e não avaliou", "Quem recusou avaliar e quem simplesmente não avaliou. São dois diagnósticos diferentes, por isso ficam separados.", "Declined and did not rate", "Who declined to rate and who simply did not rate. Two different diagnoses, so they are kept apart."],
    [70, 15.5, 11, 84.5, "Somas", "Psat (soma) = Ótimo + Bom; Dsat (soma) = Ruim + Péssimo. Numeradores prontos pras visões.", "Sums", "Psat (sum) = Excellent + Good; Dsat (sum) = Bad + Terrible. Numerators ready for the views."],
    [81, 15.5, 19, 84.5, "Indicadores", "PSAT %, DSAT % e % de respondentes, já divididos. É daqui que as abas de visão puxam o número.", "Indicators", "PSAT %, DSAT % and % of respondents, already divided. This is where the view tabs pull the number from."]
  ],
  "12-dash-mapa.png": [
    [1, 6, 46, 8, "Resumo do recorte", "Uma frase com o estado do período filtrado: PSAT, DSAT, respondentes, supervisões na meta e agentes abaixo de 80%.", "Cut summary", "One sentence with the state of the filtered period: PSAT, DSAT, respondents, supervision teams on target and agents below 80%."],
    [53, 6, 46, 8, "Destaques", "Faixa que roda melhor e pior supervisão, melhor mês e outros destaques do recorte.", "Highlights", "Ticker with the best and worst supervision team, best month and other highlights of the cut."],
    [1, 14.5, 59, 6.5, "Filtros", "Período, coordenação, supervisor, frente, tipo de cliente e turno. Combináveis, e valem pra todas as seções.", "Filters", "Period, coordination, supervisor, channel, customer type and shift. Combinable, and they apply to every section."],
    [71, 17.8, 28, 3.5, "Recorte ativo", "Descreve em texto o que está filtrado, pra ninguém ler um gráfico achando que é a operação inteira.", "Active cut", "Describes in text what is filtered, so nobody reads a chart thinking it is the whole operation."],
    [1, 23, 15.5, 25, "Seções", "Mapa de calor, Qualidade, Resposta, Ranking e Detalhe. A ordem é a ordem de leitura: do geral pro individual.", "Sections", "Heat map, Quality, Response, Ranking and Detail. The order is the reading order: from the overall to the individual."],
    [17, 28, 82, 12, "Indicadores do período", "PSAT, DSAT, atendimentos, respondentes, supervisões na meta e agentes abaixo de 80% com 20+ respondentes.", "Period indicators", "PSAT, DSAT, contacts, respondents, supervision teams on target and agents below 80% with 20+ respondents."],
    [78, 42.5, 20.5, 4, "Mês e métrica", "Escolhe o mês do mapa e alterna entre PSAT e DSAT. No DSAT a cor inverte.", "Month and metric", "Picks the map's month and toggles between PSAT and DSAT. On DSAT the color flips."],
    [18, 48, 81, 31, "Mapa de calor", "A leitura da planilha original, interativa: supervisão × dia, vinho abaixo de 80%, ocre até 90%, verde na meta. Clica num supervisor e abre os agentes dele.", "Heat map", "The original spreadsheet's reading, now interactive: supervision × day, wine below 80%, ochre up to 90%, green on target. Click a supervisor to open their agents."]
  ],
  "13-dash-qualidade.png": [
    [1, 14.5, 59, 6.5, "Filtros", "Os mesmos filtros do topo. Mudar a frente ou o turno redesenha os três gráficos.", "Filters", "The same top filters. Changing the channel or shift redraws all three charts."],
    [1, 27, 15.5, 6, "Qualidade", "Seção ativa: PSAT e DSAT ao longo do ano, contra a meta.", "Quality", "Active section: PSAT and DSAT over the year, against the target."],
    [17, 28, 82, 6, "PSAT por mês", "Uma linha por frente contra a meta de 90%. Responde se o problema é de uma frente ou da operação inteira.", "PSAT by month", "One line per channel against the 90% target. It answers whether the problem belongs to one channel or the whole operation."],
    [47.5, 34.5, 21, 2.8, "Legenda", "Chat em ciano, Voz em laranja. As cores se repetem no dashboard inteiro.", "Legend", "Chat in cyan, Voice in orange. The colors repeat across the whole dashboard."],
    [18, 42.5, 79, 3, "Meta", "Linha pontilhada em 90%. Nenhuma das duas frentes alcança no ano.", "Target", "Dotted line at 90%. Neither channel reaches it over the year."],
    [21, 46, 76, 16, "Linhas por frente", "Voz um pouco acima do Chat o ano inteiro, as duas estáveis. Piora ou melhora apareceria aqui antes de aparecer na meta.", "Lines per channel", "Voice slightly above Chat all year, both stable. Worsening or improvement would show here before it shows on the target."],
    [17, 63, 40.5, 35, "DSAT por mês", "A régua invertida, em barras vermelhas: Ruim + Péssimo sobre as respondidas. Quanto maior, pior.", "DSAT by month", "The inverted ruler, as red bars: Bad + Terrible over answered surveys. The higher, the worse."],
    [59, 63, 40, 35, "PSAT por supervisão", "Barras ordenadas da melhor pra pior, com a meta pontilhada. Mostra quem está a que distância.", "PSAT by supervision", "Bars sorted from best to worst, with the dotted target. It shows who is how far away."]
  ],
  "14-dash-dsat-supervisao.png": [
    [1, 14.5, 59, 6.5, "Filtros", "Valem pra todas as seções. Aqui o recorte é o ano inteiro, sem filtro.", "Filters", "They apply to every section. Here the cut is the whole year, unfiltered."],
    [17, 21, 40.5, 34, "DSAT por mês", "Ruim + Péssimo sobre as respondidas, mês a mês. Rótulo em cima de cada barra pra não depender do eixo.", "DSAT by month", "Bad + Terrible over answered surveys, month by month. A label on each bar so it does not depend on the axis."],
    [59, 21, 40, 34, "PSAT por supervisão", "Ranking das oito supervisões no período filtrado. A linha pontilhada vertical é a meta de 90%.", "PSAT by supervision", "Ranking of the eight supervision teams in the filtered period. The vertical dotted line is the 90% target."],
    [17, 57, 82, 5.5, "Frente × tipo de cliente", "Chat e Voz cruzados com Ouro/Diamante e Bronze/Prata/Visitante: os quatro segmentos da operação.", "Channel × customer type", "Chat and Voice crossed with Gold/Diamond and Bronze/Silver/Visitor: the operation's four segments."],
    [47, 63, 22, 2.8, "Legenda", "PSAT na cor da frente, DSAT em vermelho, meta pontilhada.", "Legend", "PSAT in the channel's color, DSAT in red, dotted target."],
    [23, 66.5, 28, 22, "Chat", "Barras em ciano: os dois segmentos do Chat, cada um com o PSAT grande e o DSAT pequeno ao lado.", "Chat", "Cyan bars: Chat's two segments, each with the large PSAT and the small DSAT beside it."],
    [61, 66.5, 36, 22, "Voz", "Barras em laranja: os dois segmentos da Voz. Separa \"o Chat vai mal\" de \"o Chat vai mal com cliente Bronze\".", "Voice", "Orange bars: Voice's two segments. It separates \"Chat is doing badly\" from \"Chat is doing badly with Bronze customers\"."],
    [17, 92, 82, 8, "Definições", "As fórmulas na tela: PSAT = (Ótimo + Bom) ÷ respondidas; DSAT = (Ruim + Péssimo) ÷ respondidas; Regular não entra; dia sem avaliação fica em branco.", "Definitions", "The formulas on screen: PSAT = (Excellent + Good) ÷ answered; DSAT = (Bad + Terrible) ÷ answered; Average counts in neither; a day with no rating stays blank."]
  ],
  "15-dash-segmentos.png": [
    [1, 14.5, 59, 6.5, "Filtros", "Clicar em Chat ou Voz, ou num tipo de cliente, filtra todo o dashboard e muda a cor da tela.", "Filters", "Clicking Chat or Voice, or a customer type, filters the whole dashboard and changes the screen's color."],
    [17, 21, 40.5, 24, "DSAT por mês", "Final do gráfico de DSAT, visto na seção anterior.", "DSAT by month", "End of the DSAT chart, seen in the previous section."],
    [59, 21, 40, 24, "PSAT por supervisão", "Final do ranking de supervisões, com a meta pontilhada em 90%.", "PSAT by supervision", "End of the supervision ranking, with the dotted target at 90%."],
    [17, 47, 82, 5, "Os quatro segmentos", "O mesmo PSAT e DSAT, agora por frente e tipo de cliente, lado a lado.", "The four segments", "The same PSAT and DSAT, now by channel and customer type, side by side."],
    [47, 53, 22, 2.8, "Legenda", "PSAT, DSAT e a meta de 90%.", "Legend", "PSAT, DSAT and the 90% target."],
    [23, 56.5, 28, 21, "Chat", "Chat Bronze/Prata/Visitante e Chat Ouro/Diamante. Rótulo de PSAT em cima da barra, DSAT em vermelho ao lado.", "Chat", "Chat Bronze/Silver/Visitor and Chat Gold/Diamond. PSAT label on top of the bar, DSAT in red beside it."],
    [61, 56.5, 36, 21, "Voz", "Voz Bronze/Prata/Visitante e Voz Ouro/Diamante. Cada segmento pode pedir uma ação diferente.", "Voice", "Voice Bronze/Silver/Visitor and Voice Gold/Diamond. Each segment may call for a different action."],
    [17, 82, 82, 9, "Definições", "Fórmulas e regras ficam na tela, pra ninguém discutir o número sem saber como ele é calculado.", "Definitions", "Formulas and rules stay on screen, so nobody argues about the number without knowing how it is calculated."]
  ],
  "16-dash-resposta.png": [
    [17, 28, 27, 9, "% respondentes", "Quantos dos atendidos avaliaram. É a base de tudo: PSAT de amostra pequena não vale muito.", "% respondents", "How many of those served rated. It is the base of everything: a PSAT from a small sample is not worth much."],
    [44.5, 28, 27, 9, "Recusou avaliar", "O cliente foi convidado e disse não. Isso é abordagem do agente, e se resolve com treino.", "Declined to rate", "The customer was invited and said no. That is the agent's approach, and it is fixed with training."],
    [72, 28, 27, 9, "Não avaliou", "A pesquisa nem chegou ou o cliente não respondeu. Isso é canal ou pesquisa, não o agente.", "Did not rate", "The survey never arrived or the customer did not answer. That is the channel or the survey, not the agent."],
    [17, 39, 82, 5.5, "Resposta por mês", "As três situações empilhadas, em % dos atendimentos, mês a mês.", "Response by month", "The three situations stacked, as a % of contacts, month by month."],
    [44, 45.3, 28, 2.8, "Legenda", "Azul respondeu, laranja recusou, cinza não avaliou.", "Legend", "Blue answered, orange declined, gray did not rate."],
    [18, 48.2, 81, 22.3, "Barras empilhadas", "Cada mês soma 100%. Se o azul encolhe, o PSAT fica menos confiável mesmo que o número suba.", "Stacked bars", "Each month adds up to 100%. If the blue shrinks, the PSAT gets less reliable even if the number goes up."],
    [17, 74, 25, 26, "Distribuição das notas", "Rosca com as cinco notas entre as respondidas. Mostra do que o PSAT é feito.", "Rating distribution", "Donut with the five ratings among answered surveys. It shows what the PSAT is made of."],
    [42, 88, 15, 12, "Notas com contagem", "Percentual e quantidade absoluta de cada nota, de Ótimo a Péssimo.", "Ratings with count", "Percentage and absolute count of each rating, from Excellent to Terrible."],
    [59, 74, 40, 26, "Recusa por supervisão", "% de recusas entre os atendidos, por time. Alto aqui aponta onde a abordagem precisa de treino.", "Declines by supervision", "% of declines among those served, by team. High here points to where the approach needs training."]
  ],
  "17-dash-ranking.png": [
    [1, 37, 15.5, 6, "Ranking", "Seção ativa: quem puxa a média pra cima e quem precisa de acompanhamento.", "Ranking", "Active section: who pulls the average up and who needs follow-up."],
    [17, 29, 40.5, 5, "Top 10", "Os dez melhores PSAT do período, com mínimo de 20 respondentes pra não premiar amostra pequena.", "Top 10", "The ten best PSAT in the period, with a minimum of 20 respondents so small samples are not rewarded."],
    [17, 34.5, 40.5, 3, "Colunas", "Agente, PSAT, DSAT e respondentes. O número de respondentes fica à vista pra validar a posição.", "Columns", "Agent, PSAT, DSAT and respondents. The number of respondents stays in view to validate the position."],
    [17, 37.5, 40.5, 53, "Lista de cima", "Nome, supervisor e frente de cada agente. O PSAT vem numa pílula verde-azulada com barra proporcional.", "Top list", "Name, supervisor and channel of each agent. The PSAT comes in a teal pill with a proportional bar."],
    [59, 29, 40, 5, "10 agentes abaixo", "Mesmo critério, invertido. Esta é a lista de acompanhamento individual do supervisor.", "Bottom 10 agents", "Same criterion, inverted. This is the supervisor's individual follow-up list."],
    [59, 37.5, 40, 53, "Lista de baixo", "Posição conta de trás pra frente (153 é o último). PSAT em vermelho, DSAT alto ao lado.", "Bottom list", "Position counts from the back (153 is last). PSAT in red, high DSAT beside it."],
    [17, 94, 82, 6, "Supervisões", "Logo abaixo, a tabela das oito supervisões com PSAT, DSAT, respondentes e recusa.", "Supervision teams", "Right below, the table of the eight supervision teams with PSAT, DSAT, respondents and declines."]
  ],
  "18-dash-supervisoes.png": [
    [1, 33.5, 15.5, 6, "Ranking", "Ainda na seção Ranking, rolada até o fim.", "Ranking", "Still in the Ranking section, scrolled to the end."],
    [17, 23, 82, 27, "Fim das listas", "Posições 6 a 10 de cima e 148 a 144 de baixo, com supervisor e frente de cada agente.", "End of the lists", "Positions 6 to 10 at the top and 148 to 144 at the bottom, with each agent's supervisor and channel."],
    [17, 53, 82, 6, "Supervisões", "As oito supervisões numa tabela: PSAT, DSAT, respondentes e recusa, no recorte ativo.", "Supervision teams", "The eight supervision teams in one table: PSAT, DSAT, respondents and declines, in the active cut."],
    [18, 60, 36, 3, "Supervisão e coordenação", "A quem cada supervisão responde. Dá pra somar de cabeça o lado de cada coordenação.", "Supervision and coordination", "Who each supervision team reports to. You can add up each coordination's side in your head."],
    [55, 63, 6, 27, "PSAT", "Em pílula âmbar: nenhuma supervisão na meta de 90% no ano.", "PSAT", "In an amber pill: no supervision team on the 90% target over the year."],
    [62, 63, 6, 27, "DSAT", "A régua invertida ao lado, pra ver quem tem PSAT parecido mas DSAT diferente.", "DSAT", "The inverted ruler alongside, to see who has a similar PSAT but a different DSAT."],
    [70, 63, 18, 27, "Atendimentos e respostas", "Volume, respondentes e % de resposta. O tamanho da amostra por time.", "Contacts and responses", "Volume, respondents and % response. The sample size per team."],
    [91, 63, 8, 27, "% recusa", "Recusas entre os atendidos. É o número que diz onde a abordagem precisa de treino.", "% declines", "Declines among those served. It is the number that says where the approach needs training."]
  ],
  "19-dash-detalhe.png": [
    [1, 43.5, 15.5, 6, "Detalhe", "Última seção: a tabela por trás dos gráficos.", "Detail", "Last section: the table behind the charts."],
    [17, 23, 15, 4.5, "Título", "Tudo que os gráficos mostram sai destas linhas, no recorte escolhido.", "Title", "Everything the charts show comes from these rows, in the chosen cut."],
    [72, 28.5, 26.5, 3.5, "Agrupar por", "Coordenação, supervisor, agente ou mês. A mesma tabela reagrupada com um clique.", "Group by", "Coordination, supervisor, agent or month. The same table regrouped with one click."],
    [18, 32, 80.5, 2.5, "Colunas", "Atendimentos, respondentes, %, as cinco notas, recusou, não avaliou, PSAT e DSAT.", "Columns", "Contacts, respondents, %, the five ratings, declined, did not rate, PSAT and DSAT."],
    [18, 35, 13, 26, "Supervisor", "Agrupado por supervisor: oito linhas, uma por time.", "Supervisor", "Grouped by supervisor: eight rows, one per team."],
    [31, 35, 16, 26, "Volume", "Atendimentos, respondentes e % de resposta por time.", "Volume", "Contacts, respondents and % response per team."],
    [47, 35, 25, 26, "Contagem por nota", "Ótimo, Bom, Regular, Ruim e Péssimo em números absolutos, igual à camada de agregação da planilha.", "Count by rating", "Excellent, Good, Average, Bad and Terrible in absolute numbers, same as the spreadsheet's aggregation layer."],
    [72, 35, 16, 26, "Recusou e não avaliou", "As duas contagens de quem não respondeu, separadas porque pedem ações diferentes.", "Declined and did not rate", "The two counts of who did not answer, kept apart because they call for different actions."],
    [88, 35, 11, 26, "PSAT e DSAT", "Os indicadores calculados a partir das colunas ao lado. Conferir a conta é só dividir.", "PSAT and DSAT", "The indicators computed from the columns beside them. Checking the math is just a division."]
  ]
};
