// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["abs"] = `
## O que é

ABS é a sigla de **Aderência, Batimento e Supervisão**: a rotina diária que confere quem estava escalado e quem apareceu, bate esse registro com a base oficial e devolve visibilidade aos supervisores. Leva de 30 minutos a 1 hora por dia, prioridade média, e é a fonte do indicador de absenteísmo da operação.

Este case mostra **como a rotina funciona hoje**, de ponta a ponta: as três planilhas, o fluxo de um dia, o dashboard e a planilha pra download, reconstruída com a equipe fictícia da Minimop (Clube Horizonte).

## As três planilhas

Tudo gira em torno de três arquivos, cada um com um dono e um papel.

**1. ABS – Crc (Mês atual)**, Excel. É onde os supervisores preenchem o dia a dia dos agentes: uma aba por supervisor, uma linha por agente, uma coluna por dia. O status é sempre um de cinco: PRESENTE, FOLGA, FÉRIAS, JUSTIFICADA ou INJUSTIFICADA. Uma aba consolidada junta todas as supervisões e colore a grade.

![A grade mensal, como os supervisores enxergam: um agente por linha, um dia por coluna, cor por status, ABS do mês na ponta](04-abs-mes-atual.png)

**2. (Mensal) ABS CRC**, Google Sheets. É a minha planilha interna, apartada do time de relatórios. Recebe a cópia da grade do Excel, guarda o histórico em dados desde o início do ano e monta as linhas prontas pra planilha oficial. É ela que está reconstruída aqui pra download.

**3. NOVO ABS**, Google Sheets. É a planilha oficial, que o time de relatórios usa. A regra de ouro: **ela só recebe linhas, nunca colunas**. É dali que o dashboard lê.

## O fluxo de um dia

A rotina é sempre sobre o **D-1** (ontem). Na segunda-feira, D-3: sexta, sábado e domingo.

1. Abro o Excel dos supervisores e confiro se o D-1 está preenchido. O que ficou vazio aparece como "Preencher" e eu cobro a supervisão.
2. Copio a grade consolidada e colo **como valores** na aba ABS – Mês Atual da minha planilha. Como valores pra preservar o que foi registrado naquele momento, mesmo que o Excel mude depois.
3. No Painel Geral, escolho o dia. O ABS do dia e do mês, por frente e por supervisor, se recalcula sozinho.

![Painel Geral: escolhe o dia e tudo é COUNTIFS sobre o histórico](01-painel-geral.png)

4. Na Base Diário, o dia escolhido aparece em dados, uma linha por agente, pra conferir antes de bater.

![Base Diário: o mesmo dia em formato de tabela, pronto pra conferência](02-base-diario.png)

5. As linhas conferidas vão pro **BATE – Tabela Geral**, o histórico: uma linha por agente e dia desde 1º de janeiro, filtrável, com validação (PRESENTE, AUSENTE ou IGNORAR), tipo, justificativa, horário, coordenação, frente, segmento, semana e mês.

![BATE – Tabela Geral: o histórico em dados, 40 mil linhas no ano](03-bate-tabela-geral.png)

6. No **NOVO ABS – DIÁRIO**, escolho dia, mês e ano e as linhas se montam sozinhas: código único do agente no dia, operador, supervisor, data, validação, tipo, justificativa, horário, coordenação, frente, segmento, semana, mês e turno. Tudo fórmula, lendo a grade e o cadastro (MOP).

![NOVO ABS – DIÁRIO: o seletor no topo e as linhas prontas pra copiar](05-novo-abs-diario.png)

7. Seleciono as linhas preenchidas (Ctrl+Shift+seta, três vezes), copio e colo como valores na planilha oficial, na primeira linha vazia depois da última data.
8. O dashboard atualiza. Fim.

O cadastro que alimenta tudo é o **MOP**: uma linha por agente, com supervisor, coordenador, frente, segmento, horário, turno, status, admissão e rescisão. Na reconstrução ele é inteiramente fictício.

![MOP: o cadastro da Minimop, sem nenhum dado real](06-mop.png)

![AUX: as listas e a regra do ABS, que ninguém mexe](07-aux.png)

## Dashboard

A versão oficial roda no Looker Studio, em cima do NOVO ABS. A reconstrução abaixo é em HTML, CSS e JavaScript, arquivo único, com a mesma leitura e os mesmos filtros: período, coordenação, supervisor, frente, tipo de cliente e turno.

![Visão geral: ABS geral, escalados, faltas, ABS por dia, por supervisor e os cartões por carteira](08-dash-visao-geral.png)

**Visão geral.** O número que a coordenação quer ver primeiro, com a variação contra o período anterior. ABS por dia do último mês, colorido pela faixa (verde até 5%, âmbar até 10%, vermelho acima). ABS por supervisor contra a média da operação. E os cartões por carteira, como no dashboard oficial: frente × tipo de cliente, cada um com escalados e faltas.

![Grade: a planilha dos supervisores lida como mapa de calor](09-dash-grade.png)

**Grade.** A grade mensal do Excel, lida como mapa de calor: cada célula é faltas ÷ escalados do dia, por supervisor. Verde-azulado é baixo, vinho é alto.

![Grade por agente: um status por agente por dia, como no Excel](10-dash-grade-agentes.png)

Clicando num supervisor, abre o time dele com o status de cada dia (P, F, V, J, I), exatamente como está no Excel, mais o ABS do mês de cada agente.

![Operadores: a tabela "Resumo ABS", ordenável por qualquer coluna](11-dash-operadores.png)

**Operadores.** A tabela "Resumo ABS" do dashboard oficial: escalados, presentes, justificadas, injustificadas, faltas e ABS por operador. Clique no cabeçalho pra ordenar.

![Motivos: justificadas × injustificadas, dia da semana, mistura de status, turno e frente](12-dash-motivos.png)

**Motivos.** O que foi a falta e quando ela acontece: justificadas contra injustificadas por mês, ABS por dia da semana (segunda e sábado lideram), a mistura de status do período e as quatro combinações de turno e frente.

[Abrir o dashboard](dashboards/abs.html)

## O que saiu do processo

Antes dessa estrutura, a conferência levava de 1 a 2 horas e passava por dois sistemas. Dois cortes a deixaram em 10 a 20 minutos:

- **A checagem no CallFlex.** Um atendimento registrado no Zendesk já prova que o agente estava trabalhando; o segundo sistema não acrescentava informação. A aba CALLFLEX ainda existe na planilha, vazia, só com o cabeçalho.
- **A conferência nome a nome.** Desligados, férias e afastados passaram a ser identificados pelo cruzamento com o MOP, não por alguém lendo a lista.

## Planilha pra download

A reconstrução da (Mensal) ABS CRC, com a equipe da Minimop e um status por agente por dia de janeiro a outubro de 2026. Sete abas: Painel Geral, Base Diário, BATE – Tabela Geral, ABS – Mês Atual, NOVO ABS – DIÁRIO, MOP e AUX. Tudo fórmula, compatível com Excel e Google Sheets.

[Baixar a planilha (xlsx)](cases/abs/ABS_Mensal.xlsx)
`;

// English version (shown when the visitor picks EN-US).
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["abs"] = `
## What it is

ABS stands for **Aderência, Batimento e Supervisão** (adherence, reconciliation and supervision): the daily routine that checks who was scheduled and who showed up, reconciles that record with the official base and gives supervisors visibility. It takes 30 minutes to 1 hour a day, medium priority, and it is the source of the operation's absenteeism indicator.

This case shows **how the routine works today**, end to end: the three spreadsheets, a day's flow, the dashboard and the downloadable spreadsheet, rebuilt with Minimop's fictitious team (Clube Horizonte).

## The three spreadsheets

Everything revolves around three files, each with an owner and a role.

**1. ABS – Crc (current month)**, Excel. Where supervisors fill in the agents' day by day: one tab per supervisor, one row per agent, one column per day. The status is always one of five: PRESENTE (present), FOLGA (day off), FÉRIAS (vacation), JUSTIFICADA (justified absence) or INJUSTIFICADA (unjustified absence). A consolidated tab joins every supervision and colors the grid.

![The monthly grid as supervisors see it: one agent per row, one day per column, color by status, month ABS at the end](04-abs-mes-atual.png)

**2. (Mensal) ABS CRC**, Google Sheets. My internal spreadsheet, separate from the reporting team. It receives the copy of the Excel grid, keeps the history as data since the start of the year and builds the rows ready for the official spreadsheet. This is the one rebuilt here for download.

**3. NOVO ABS**, Google Sheets. The official spreadsheet, used by the reporting team. The golden rule: **it only receives rows, never columns**. The dashboard reads from it.

## A day's flow

The routine is always about **D-1** (yesterday). On Mondays, D-3: Friday, Saturday and Sunday.

1. I open the supervisors' Excel and check whether D-1 is filled in. Whatever is empty shows up as "Preencher" (fill in) and I chase supervision.
2. I copy the consolidated grid and paste it **as values** into the ABS – Mês Atual tab of my spreadsheet. As values, to preserve what was recorded at that moment, even if the Excel changes later.
3. In Painel Geral (overview), I pick the day. The day's and the month's ABS, by channel and by supervisor, recalculates on its own.

![Painel Geral: pick the day and everything is COUNTIFS over the history](01-painel-geral.png)

4. In Base Diário, the chosen day appears as data, one row per agent, for checking before reconciling.

![Base Diário: the same day as a table, ready for review](02-base-diario.png)

5. The reviewed rows go into **BATE – Tabela Geral**, the history: one row per agent and day since January 1st, filterable, with validation (PRESENTE, AUSENTE or IGNORAR), type, justification, schedule, coordination, channel, segment, week and month.

![BATE – Tabela Geral: the history as data, 40 thousand rows in the year](03-bate-tabela-geral.png)

6. In **NOVO ABS – DIÁRIO**, I pick day, month and year and the rows build themselves: the agent's unique code for the day, agent, supervisor, date, validation, type, justification, schedule, coordination, channel, segment, week, month and shift. All formulas, reading the grid and the staff base (MOP).

![NOVO ABS – DIÁRIO: the selector at the top and the rows ready to copy](05-novo-abs-diario.png)

7. I select the filled rows (Ctrl+Shift+arrow, three times), copy and paste as values into the official spreadsheet, on the first empty row after the last date.
8. The dashboard updates. Done.

The base that feeds everything is the **MOP**: one row per agent, with supervisor, coordinator, channel, segment, schedule, shift, status, hire and termination dates. In the rebuild it is entirely fictitious.

![MOP: Minimop's staff base, with no real data](06-mop.png)

![AUX: the lists and the ABS rule, which nobody touches](07-aux.png)

## Dashboard

The official version runs on Looker Studio, on top of NOVO ABS. The rebuild below is in HTML, CSS and JavaScript, a single file, with the same reading and the same filters: period, coordination, supervisor, channel, customer tier and shift.

![Overview: overall ABS, scheduled, absences, ABS by day, by supervisor and the portfolio cards](08-dash-visao-geral.png)

**Overview.** The number coordination wants to see first, with the variation against the previous period. ABS by day for the last month, colored by band (green up to 5%, amber up to 10%, red above). ABS by supervisor against the operation average. And the portfolio cards, as in the official dashboard: channel × customer tier, each with scheduled and absences.

![Grid: the supervisors' spreadsheet read as a heat map](09-dash-grade.png)

**Grid.** The monthly Excel grid read as a heat map: each cell is absences ÷ scheduled for the day, by supervisor. Teal is low, wine is high.

![Grid by agent: one status per agent per day, as in the Excel](10-dash-grade-agentes.png)

Clicking a supervisor opens their team with each day's status (P, F, V, J, I), exactly as it is in the Excel, plus each agent's month ABS.

![Agents: the "ABS summary" table, sortable by any column](11-dash-operadores.png)

**Agents.** The official dashboard's "ABS summary" table: scheduled, present, justified, unjustified, absences and ABS per agent. Click a header to sort.

![Reasons: justified × unjustified, weekday, status mix, shift and channel](12-dash-motivos.png)

**Reasons.** What the absence was and when it happens: justified against unjustified by month, ABS by weekday (Monday and Saturday lead), the period's status mix and the four shift × channel combinations.

[Open the dashboard](dashboards/abs.html)

## What was cut from the process

Before this structure, the check took 1 to 2 hours and went through two systems. Two cuts brought it down to 10 to 20 minutes:

- **The CallFlex check.** A contact logged in Zendesk already proves the agent was working; the second system added no information. The CALLFLEX tab still exists in the spreadsheet, empty, header only.
- **The name-by-name check.** Leavers, vacations and leaves became identified by matching against the MOP, not by someone reading the list.

## Spreadsheet for download

The rebuild of (Mensal) ABS CRC, with Minimop's team and one status per agent per day from January to October 2026. Seven tabs: Painel Geral, Base Diário, BATE – Tabela Geral, ABS – Mês Atual, NOVO ABS – DIÁRIO, MOP and AUX. All formulas, compatible with Excel and Google Sheets.

[Download the spreadsheet (xlsx)](cases/abs/ABS_Mensal.xlsx)
`;
