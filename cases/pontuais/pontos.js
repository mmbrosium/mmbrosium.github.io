// Pontos explicados do Hangar (projetos pontuais): [x, y, largura, altura, título, texto, título EN, texto EN], em % da imagem.
window.CASE_PONTOS = window.CASE_PONTOS || {};
window.CASE_PONTOS.pontuais = {
  "01-diario-de-bordo.png": [
    [0, 0, 40, 13, "Diário de Bordo", "Registro dos impactos operacionais do dia. Quando o indicador sai estranho, é aqui que se olha primeiro.", "Logbook", "Record of the day's operational impacts. When the indicator comes out odd, this is where you look first."],
    [0, 18, 85, 6, "Cabeçalho", "Data, início, fim, duração, frente, tipo, impacto, descrição, ação, responsável e status. Uma linha por ocorrência.", "Header", "Date, start, end, duration, channel, type, impact, description, action, owner and status. One row per event."],
    [0, 24, 15, 76, "Quando e quanto tempo", "Data, hora de início e fim. A duração é calculada: dá pra cruzar com o horário em que o indicador caiu.", "When and how long", "Date, start and end time. Duration is calculated: you can cross it with the time the indicator dropped."],
    [15, 24, 11, 76, "Frente e tipo", "Chat, Voz ou os dois; e a categoria: sistema fora, fila represada, campanha, procedimento, infra, ferramenta.", "Channel and type", "Chat, Voice or both; and the category: system down, queue backed up, campaign, procedure, infra, tool."],
    [26, 24, 4, 76, "Impacto", "Alto, médio ou baixo, com cor. Vermelho é o que explica um dia ruim.", "Impact", "High, medium or low, color-coded. Red is what explains a bad day."],
    [30, 24, 22, 76, "Descrição", "O que aconteceu, em uma linha, escrito por quem estava de plantão.", "Description", "What happened, in one line, written by whoever was on duty."],
    [52, 24, 20, 76, "Ação", "O que foi feito na hora: remanejamento, hora extra, chamado aberto, script de contenção.", "Action", "What was done at the time: reassignment, overtime, ticket opened, containment script."],
    [72, 24, 13, 76, "Responsável e status", "Quem tratou (TI, coordenação, analista, supervisão) e se a ocorrência foi encerrada ou segue em acompanhamento, em vermelho.", "Owner and status", "Who handled it (IT, coordination, analyst, supervision) and whether the event is closed or still being followed, in red."],
    [85.5, 0, 14.5, 46, "Resumo por tipo", "Quantas ocorrências de cada tipo e quantas de impacto alto. Fórmula de contagem lendo a tabela ao lado.", "Summary by type", "How many events of each type and how many with high impact. A count formula reading the table beside it."]
  ],
  "02-controle-de-acessos.png": [
    [0, 0, 36, 7, "Controle de Acessos", "Quem tem acesso a quê e quem precisa de chamado. Cruzamento da lista de cada sistema com o MOP, a base de pessoal.", "Access control", "Who has access to what and who needs a ticket. A match between each system's list and the MOP, the staff base."],
    [0, 9.5, 77, 3, "Cabeçalho", "Dados do agente à esquerda, os três sistemas no meio, pendências e chamado à direita.", "Header", "Agent data on the left, the three systems in the middle, pending items and ticket on the right."],
    [13.5, 12.5, 25.5, 87, "Supervisor, frente, turno", "Filtro por supervisor era a pergunta mais comum: \"quem do meu time ainda não tem acesso?\".", "Supervisor, channel, shift", "Filtering by supervisor was the most common question: \"who on my team still has no access?\"."],
    [39, 12.5, 16, 87, "Amadeus e Sabre", "Os dois sistemas de reservas: internacional e nacional. Liberado em verde, pendente em amarelo, sem acesso em vermelho, chamado aberto em azul.", "Amadeus and Sabre", "The two booking systems: international and domestic. Enabled in green, pending in yellow, no access in red, open ticket in blue."],
    [55, 12.5, 9.5, 87, "LinkedIn Learning", "Programa de cursos vinculado ao LinkedIn pessoal: ativado, não ativado ou trilha pendente.", "LinkedIn Learning", "Course program linked to the personal LinkedIn: activated, not activated or pending track."],
    [64.5, 12.5, 5.5, 87, "Pendências", "Contagem de quantas das três colunas estão fora do lugar. Zero em preto, o resto em vermelho.", "Pending", "Count of how many of the three columns are out of place. Zero in black, the rest in red."],
    [70, 12.5, 7, 87, "Chamado", "Número do INC aberto, quando há. Sem chamado, um traço.", "Ticket", "The open INC number, when there is one. No ticket, a dash."],
    [77.5, 0, 22.5, 23, "Resumo", "Contagem por status em cada sistema. A resposta pronta pra quando a pergunta chegava.", "Summary", "Count by status in each system. The answer ready for when the question came."]
  ],
  "03-base-kpi.png": [
    [0, 0, 52, 7, "Base KPI", "Modelo neutro, sem marca: dimensões à esquerda, métricas à direita, uma linha por combinação. É a mesma estrutura dos dashboards do portfólio.", "KPI base", "Neutral, unbranded model: dimensions on the left, metrics on the right, one row per combination. Same structure as the portfolio's dashboards."],
    [74.5, 0, 9.5, 5, "Mês", "Seletor que alimenta a leitura por supervisor ao lado.", "Month", "Selector that feeds the per-supervisor reading beside it."],
    [0, 8, 74, 3.5, "Cabeçalho", "Mês, coordenação, supervisor, frente, segmento, turno; depois atendimentos e as métricas.", "Header", "Month, coordination, supervisor, channel, segment, shift; then contacts and the metrics."],
    [0, 11.5, 37, 88.5, "Dimensões", "Cinco dimensões por linha. Qualquer leitura é um filtro em cima delas.", "Dimensions", "Five dimensions per row. Any reading is a filter on top of them."],
    [37, 11.5, 13, 88.5, "Volume e satisfação", "Atendimentos, PSAT e DSAT: as métricas que vieram do projeto PSAT.", "Volume and satisfaction", "Contacts, PSAT and DSAT: the metrics that came from the PSAT project."],
    [50, 11.5, 9, 88.5, "ABS e TMA", "Absenteísmo e tempo médio de atendimento, em minutos.", "ABS and AHT", "Absenteeism and average handling time, in minutes."],
    [59, 11.5, 15, 88.5, "Conversão, retenção, escalados", "Conversão e retenção em %, e o número de agentes escalados na combinação.", "Conversion, retention, staffed", "Conversion and retention in %, and the number of agents staffed for the combination."],
    [74.5, 8, 25.5, 22.5, "Leitura por supervisor", "A base em linhas embaixo, a leitura em cima: atendimentos, PSAT, ABS e conversão por supervisor no mês escolhido.", "Per-supervisor reading", "The base as rows below, the reading on top: contacts, PSAT, absenteeism and conversion per supervisor in the chosen month."]
  ]
};
