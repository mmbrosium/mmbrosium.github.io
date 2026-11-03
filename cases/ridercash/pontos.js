// Pontos explicados do Rider Cash: [x, y, largura, altura, título, texto, título EN, texto EN], em % da imagem.
window.CASE_PONTOS = window.CASE_PONTOS || {};
window.CASE_PONTOS.ridercash = {
  "01-home-log.png": [
    [0, 0, 6, 6, "Qtd Atnd p/dia", "Contador de atendimentos do dia, no canto da página. Era a única métrica que eu via em tempo real.", "Contacts per day", "The day's contact counter, in the page corner. The only metric I could see in real time."],
    [8, 0, 11, 100, "Data e hora", "Azul é o que eu preencho. Data e hora fixas de cada atendimento, uma linha por ticket.", "Date and time", "Blue is what I fill in. Fixed date and time of each contact, one row per ticket."],
    [19, 0, 6, 100, "Link do atendimento", "O link do ticket, colado do sistema. Dele a planilha extrai o ID mais à direita.", "Ticket link", "The ticket link, pasted from the system. The spreadsheet extracts the ID from it further right."],
    [25, 0, 25, 100, "Problema do cliente", "Seletor com os problemas da base, cada um com a sigla entre colchetes. É a chave que preenche todo o resto da linha.", "Customer issue", "Dropdown with the issues from the base, each with its code in brackets. It is the key that fills in the rest of the row."],
    [50, 0, 7, 100, "Observação", "Nota livre. \"Scout\" aqui marca que o ticket passou pela automação, e vira flag mais à direita.", "Note", "Free text. \"Scout\" here marks that the ticket went through the automation, and becomes a flag further right."],
    [57, 0, 2.5, 100, "U1", "Caixa de Uber One. Se o passageiro era membro, a resposta ao cliente mudava.", "U1", "Uber One checkbox. If the rider was a member, the reply to the customer changed."],
    [60, 0, 24, 100, "O que a base devolve", "Laranja é fórmula. Contact type (a etiqueta da tabulação), link da base de conhecimento, etapa do procedimento e o que eu tinha que fazer.", "What the base returns", "Orange is formulas. Contact type (the tagging label), knowledge base link, procedure step and what I had to do."],
    [84, 0, 16, 100, "Textos prontos", "Observação pro usuário, observação pro motorista e a resposta ao cliente, já escritas. Era só copiar e colar.", "Ready texts", "Note for the rider, note for the driver and the reply to the customer, already written. Just copy and paste."]
  ],
  "02-home-status-flags.png": [
    [0, 0, 49, 100, "Base", "Continuação das colunas laranja: contact type, link da KB, etapa, informação extra e as observações. Tudo vem do problema escolhido.", "Base", "Continuation of the orange columns: contact type, KB link, step, extra information and the notes. All comes from the chosen issue."],
    [49, 0, 8.5, 100, "Resposta ao cliente", "O texto que vai pro passageiro, começando por \"Olá, usuário!\". Vazio quando o ticket vai pra outra área.", "Reply to customer", "The text that goes to the rider, starting with \"Olá, usuário!\". Empty when the ticket goes to another team."],
    [60, 0, 11, 100, "Status do ticket", "Encerrado (verde) resolve em mim; Aguardando resposta (laranja) falta algo do cliente; Em aberto (azul) vai pra outra área.", "Ticket status", "Encerrado (green) is resolved by me; Aguardando resposta (orange) needs something from the customer; Em aberto (blue) goes to another team."],
    [71, 0, 8, 100, "ID do ticket", "Extraído do link por fórmula. Era o que eu usava pra achar o ticket de novo e pra contar no fim do turno.", "Ticket ID", "Extracted from the link by formula. What I used to find the ticket again and to count at the end of the shift."],
    [79, 0, 9, 100, "Sigla", "A sigla do problema, separada do texto. É o que vira contagem por tipo nas métricas.", "Code", "The issue code, separated from the text. This is what becomes counts by type in the metrics."],
    [90, 0, 10, 100, "Flags", "SC é Scout (automação), CR é CAR (procedimento interno), XX é pushback, PS é elegível a pesquisa de satisfação. Marcadas pela base e pela observação.", "Flags", "SC is Scout (automation), CR is CAR (internal procedure), XX is pushback, PS is eligible for the satisfaction survey. Set by the base and the note."]
  ],
  "03-cash1-original.png": [
    [0, 9, 8.5, 14, "Perguntas", "A árvore no estilo if/else. A pergunta 1 é sempre \"o cliente pagou em dinheiro?\"; a resposta decide qual é a próxima.", "Questions", "The if/else-style tree. Question 1 is always \"did the customer pay in cash?\"; the answer decides which comes next."],
    [8.5, 9, 11.5, 14, "Descritivo", "O texto de cada pergunta. Quem estava começando lia daqui; quem já sabia o fluxo pulava.", "Description", "Each question's text. Beginners read from here; those who knew the flow skipped it."],
    [21, 9, 8, 14, "Sim/Não", "Seletor de resposta. A combinação de respostas leva à resolução lá embaixo.", "Yes/No", "Answer dropdown. The combination of answers leads to the resolution below."],
    [0, 31, 20, 17, "Resolução", "O que fazer: reembolsar, explicar, etiquetar e anexar o link. Era o fim do fluxo.", "Resolution", "What to do: refund, explain, tag and attach the link. The end of the flow."],
    [29, 37, 12, 5, "Etiquetação", "O caminho da tabulação (Rider > Problemas com pagamento...), pronto pra copiar no sistema.", "Tagging", "The tagging path (Rider > Problemas com pagamento...), ready to copy into the system."],
    [41, 23, 19, 33, "Resumo do cliente", "A resposta pro passageiro, com o nome como variável. Saudação, o que foi feito e o fechamento.", "Customer summary", "The reply to the rider, with the name as a variable. Greeting, what was done and the closing."],
    [60, 28, 23, 22, "Resumo do atendimento", "O registro interno do ticket: o que o cliente informou, o que foi verificado e o que foi feito.", "Contact summary", "The ticket's internal log: what the customer reported, what was checked and what was done."],
    [83, 36, 17, 6, "Link do problema", "O procedimento na base de conhecimento. Na reconstrução é um placeholder.", "Issue link", "The procedure in the knowledge base. In the rebuild it is a placeholder."]
  ],
  "04-nova-home.png": [
    [2.5, 3, 8.5, 8, "Qtd Atnd p/dia", "Contagem de linhas preenchidas no dia. Na reconstrução são 60 no dia 01/02.", "Contacts per day", "Count of filled rows for the day. In the rebuild, 60 on 01/02."],
    [13, 3, 17, 97, "Data e hora", "Colunas que eu preencho, em azul. Data e hora fixas, pra não recalcular depois.", "Date and time", "Columns I fill in, in blue. Fixed date and time, so they do not recalculate later."],
    [30, 3, 9.5, 97, "Link", "Link do ticket. Placeholder na reconstrução; o ID é extraído dele mais à direita.", "Link", "Ticket link. Placeholder in the rebuild; the ID is extracted from it further right."],
    [39.5, 3, 39.5, 97, "Problema", "Seletor com os 27 tipos de problema, cada um com a sigla. É a chave que puxa a base.", "Issue", "Dropdown with the 27 issue types, each with its code. The key that pulls from the base."],
    [79, 3, 9, 97, "Observação", "Nota livre. \"Scout\" marca o ticket que passou pela automação.", "Note", "Free text. \"Scout\" marks a ticket that went through the automation."],
    [88, 3, 2, 97, "U1", "Caixa de Uber One, estreita de propósito. Muda a resposta ao cliente.", "U1", "Uber One checkbox, narrow on purpose. Changes the reply to the customer."],
    [92, 3, 8, 97, "Início da base", "Daqui pra direita é laranja: fórmula. Começa pelo contact type.", "Start of the base", "From here to the right it is orange: formulas. Starting with contact type."]
  ],
  "05-nova-home-base.png": [
    [0, 3, 3, 97, "U1", "A coluna do Uber One, estreita, à esquerda da base.", "U1", "The Uber One column, narrow, to the left of the base."],
    [4.5, 3, 15.5, 97, "Contact type e KB", "A etiqueta da tabulação (Passageiro, Motorista ou Outros) e o link do procedimento na base de conhecimento.", "Contact type and KB", "The tagging label (Passageiro, Motorista or Outros) and the procedure link in the knowledge base."],
    [20, 3, 24, 97, "Etapa e informação extra", "A etapa do procedimento e o que eu mesmo tinha que fazer: reembolsar, explicar, verificar, encaminhar.", "Step and extra info", "The procedure step and what I had to do myself: refund, explain, check, forward."],
    [44, 3, 20, 97, "Obs usuário e motorista", "Observações pro perfil do passageiro e do motorista, com o UUID da corrida como variável. Vazias quando não se aplicam.", "Rider and driver notes", "Notes for the rider's and the driver's profile, with the trip UUID as a variable. Empty when not applicable."],
    [64, 3, 10, 97, "Resposta ao cliente", "O texto da resposta. Só aparece quando o ticket se resolve em mim.", "Reply to customer", "The reply text. Only appears when the ticket is resolved by me."],
    [76, 3, 15, 97, "Status do ticket", "Encerrado, Aguardando resposta ou Em Aberto, decidido pela base a partir do problema.", "Ticket status", "Encerrado, Aguardando resposta or Em Aberto, decided by the base from the issue."],
    [94.5, 3, 5.5, 97, "Hora", "A hora extraída da hora fixa, pro mapa de calor da aba Analysis.", "Hour", "The hour extracted from the fixed time, for the Analysis tab heat map."]
  ],
  "06-nova-home-flags.png": [
    [0, 3, 13, 97, "Resposta ao cliente", "Última coluna de texto da base. Vazia quando o ticket vai pra outra área.", "Reply to customer", "Last text column of the base. Empty when the ticket goes to another team."],
    [13.5, 3, 15.5, 97, "Status do ticket", "Encerrado, Em Aberto ou Aguardando resposta. Verde é a cor da seção de saída.", "Ticket status", "Encerrado, Em Aberto or Aguardando resposta. Green is the color of the output section."],
    [29.5, 3, 10.5, 97, "Somente link", "O ID do ticket extraído do link por fórmula de texto.", "Link only", "The ticket ID extracted from the link by a text formula."],
    [40, 3, 9.5, 97, "Sigla", "A sigla do problema, isolada. É o que a aba Analysis conta por tipo.", "Code", "The issue code, isolated. This is what the Analysis tab counts by type."],
    [52, 3, 10, 97, "SC", "Scout: o ticket passou pela automação. VERDADEIRO quando a observação diz \"Scout\".", "SC", "Scout: the ticket went through the automation. TRUE when the note says \"Scout\"."],
    [62, 3, 10, 97, "CR", "CAR: procedimento interno de ajuste de valor. Vem da base, pelo tipo de problema.", "CR", "CAR: internal fare adjustment procedure. Comes from the base, by issue type."],
    [72, 3, 10, 97, "XX", "Pushback: o passageiro voltou depois da resposta. Siglas XX e XXA.", "XX", "Pushback: the rider wrote back after the reply. Codes XX and XXA."],
    [82, 3, 10.5, 97, "PS", "Elegível a pesquisa de satisfação. Só os tickets encerrados em mim, de alguns tipos.", "PS", "Eligible for the satisfaction survey. Only tickets closed by me, of some types."]
  ],
  "07-nova-cash1.png": [
    [0, 5, 8.5, 55, "Perguntas", "Pergunta 1, 2, 3, 5, 6, 7, 8, 9: a numeração pula porque cada resposta escolhe a próxima. Aparecem uma a uma.", "Questions", "Questions 1, 2, 3, 5, 6, 7, 8, 9: the numbering skips because each answer picks the next one. They appear one at a time."],
    [8.5, 5, 31, 55, "Descritivo", "O texto de cada pergunta: pagou em dinheiro, consta como pago, troco não devolvido, impeditivo na conta, reembolso no mês, alçada, comprovante, desvio de rota.", "Description", "Each question's text: paid in cash, shows as paid, change not returned, flag on the account, refund this month, authority limit, receipt, route deviation."],
    [39.5, 2, 5.5, 74, "Sim/Não", "Responde de cima pra baixo. A próxima pergunta aparece sozinha; a árvore completa está navegável na reconstrução.", "Yes/No", "Answer from top to bottom. The next question appears on its own; the full tree is navigable in the rebuild."],
    [0, 61, 39.5, 9, "Resolução", "O fim da árvore pra esse caminho: zerar pendência e devolver troco.", "Resolution", "The end of the tree for this path: clear the pending amount and return the change."],
    [45, 61, 24, 9, "Etiquetação", "O caminho da tabulação (Rider > Problemas com pagamento em dinheiro > Troco), pronto pra copiar.", "Tagging", "The tagging path (Rider > Problemas com pagamento em dinheiro > Troco), ready to copy."],
    [69, 61, 31, 9, "Resumo do cliente", "A resposta pro passageiro, com o nome como variável.", "Customer summary", "The reply to the rider, with the name as a variable."],
    [0, 79.5, 100, 4, "Instrução", "Como usar: responder Sim/Não de cima pra baixo, copiar etiquetação, resumos e link na resolução, apagar as respostas pra recomeçar.", "Instructions", "How to use: answer yes/no from top to bottom, copy tagging, summaries and link at the resolution, clear the answers to start over."]
  ],
  "08-nova-analysis-kpis.png": [
    [0, 2, 36, 8, "Lê a aba Home", "A aba Analysis não tem dado próprio: tudo é contagem sobre o log da Home.", "Reads the Home tab", "The Analysis tab has no data of its own: everything is a count over the Home log."],
    [0, 11, 19, 5, "Mês e ano", "Seletor do mês. Os indicadores e a tabela por dia seguem ele.", "Month and year", "Month selector. The indicators and the day table follow it."],
    [0, 23, 91, 19, "Indicadores do mês", "Atendimentos, os três status, Scout, CAR, pushback, elegíveis a PSAT, Uber One e a média por dia. Os mesmos números do dashboard.", "Month indicators", "Contacts, the three statuses, Scout, CAR, pushback, PSAT-eligible, Uber One and the daily average. The same numbers as the dashboard."],
    [0, 50, 30, 8, "Por dia", "Atendimentos e status, dia a dia do mês.", "By day", "Contacts and statuses, day by day for the month."],
    [11, 58.5, 88, 9.5, "Atendimentos por dia", "Um dia por coluna, com escala de cor pelo volume. Dias sem linha no log ficam vazios.", "Contacts per day", "One day per column, color-scaled by volume. Days with no rows in the log stay empty."],
    [11, 68, 88, 15, "Status por dia", "Encerrados, aguardando e em aberto de cada dia. Os três somam os atendimentos.", "Status per day", "Closed, awaiting and open for each day. The three add up to the contacts."],
    [11, 83, 88, 12, "Flags por dia", "Pushback e Scout por dia, contados pelas colunas de flag da Home.", "Flags per day", "Pushback and Scout per day, counted from the Home flag columns."]
  ],
  "09-nova-analysis-heatmap.png": [
    [0, 1, 35, 6, "Hora × dia", "Quantos tickets em cada hora de cada dia do mês. Contagem direta sobre a coluna Hora da Home.", "Hour × day", "How many tickets in each hour of each day of the month. A direct count over the Home Hour column."],
    [0, 10, 11, 90, "Hora", "As 24 horas do dia, de 00h a 23h.", "Hour", "The 24 hours of the day, from 00h to 23h."],
    [25, 7.5, 74, 3.5, "Dia do mês", "Um dia por coluna, de 1 a 31.", "Day of month", "One day per column, 1 to 31."],
    [11, 11.5, 80, 21, "Madrugada", "Só tem movimento entre 0h e 5h porque era isso que eu fazia: turno da madrugada. Azul mais escuro é mais ticket.", "Overnight", "There is only activity between 0h and 5h because that is what I worked: the overnight shift. Darker blue is more tickets."],
    [11, 33, 88, 67, "Resto do dia", "Zeros de 06h a 23h. Fica na tabela pra que o mesmo modelo sirva pra qualquer turno.", "Rest of the day", "Zeros from 06h to 23h. Kept in the table so the same template works for any shift."],
    [91, 11.5, 8, 21, "Dias 29 a 31", "Vazios: o mês fictício é fevereiro.", "Days 29 to 31", "Empty: the fictitious month is February."]
  ],
  "10-nova-analysis-tipos.png": [
    [0, 2, 63, 6, "Por tipo de problema", "Contagem do mês por sigla, na mesma ordem da base, pra conferir com ela linha a linha.", "By issue type", "Month count by code, in the same order as the base, to check against it row by row."],
    [0, 8, 18, 89, "Sigla", "As 27 siglas da base: OPEN, OPEC, TXL, TI, XX e assim por diante.", "Code", "The 27 codes from the base: OPEN, OPEC, TXL, TI, XX and so on."],
    [18, 8, 52, 89, "Problema", "O nome por extenso: Overpaid, taxa de limpeza, transferência de LOB, pushback, comprovante.", "Issue", "The full name: Overpaid, cleaning fee, LOB transfer, pushback, receipt."],
    [70, 8, 4.5, 89, "Qtd", "Tickets do mês com essa sigla, com escala de cor pelo volume.", "Qty", "Tickets in the month with that code, color-scaled by volume."],
    [74.5, 8, 5, 89, "% do total", "A fatia de cada sigla nos atendimentos do mês.", "% of total", "Each code's share of the month's contacts."],
    [79.5, 8, 20, 89, "Status", "O desfecho esperado daquele tipo: Encerrado, Em Aberto ou Aguardando resposta. É o que a base devolve na Home.", "Status", "The expected outcome for that type: Encerrado, Em Aberto or Aguardando resposta. What the base returns on Home."]
  ],
  "11-dash-visao-geral.png": [
    [1, 6, 50, 8, "Chamada", "O recorte em uma frase: tickets, dias, média por dia, TMA, encerrados na primeira resposta, pushback e ajuste de valor.", "Headline", "The selection in one sentence: tickets, days, daily average, AHT, closed on first reply, pushback and fare adjustment."],
    [53, 6, 46, 8, "Destaques", "Faixa que roda o dia mais cheio, o grupo líder e a sigla líder do período.", "Highlights", "A strip that scrolls the busiest day, the leading group and the leading code of the period."],
    [1, 14, 72, 7, "Filtros", "Período, grupo do problema, status, Uber One e Scout. Valem pra todas as seções.", "Filters", "Period, issue group, status, Uber One and Scout. They apply to every section."],
    [17, 27.5, 82, 11, "Volume e desfecho", "Tickets, dias atendidos, TMA e os três status: encerrados, aguardando e em aberto em outra área. CAR é a fatia com ajuste de valor.", "Volume and outcome", "Tickets, days worked, AHT and the three statuses: closed, awaiting and open in another area. CAR is the share with fare adjustment."],
    [17, 39.5, 35, 9, "Marcadores", "Scout (revisão pela automação), pushback (o passageiro voltou) e elegíveis a PSAT.", "Flags", "Scout (reviewed by the automation), pushback (the rider wrote back) and PSAT-eligible."],
    [17, 50.5, 82, 32.5, "Tickets por dia", "Dia a dia do último mês, empilhado por status. Branco é encerrado, dourado é aguardando, cinza é em aberto.", "Tickets per day", "Day by day for the last month, stacked by status. White is closed, gold is awaiting, gray is open."],
    [17, 86, 41, 14, "TMA por mês", "O case em um gráfico: a média de segundos por ticket caindo mês a mês, conforme a árvore de perguntas vira log.", "AHT by month", "The case in one chart: average seconds per ticket falling month by month, as the question tree becomes a log."],
    [58.5, 86, 40.5, 14, "Por dia da semana", "Tickets de terça a sábado. Domingo e segunda eram folga.", "By weekday", "Tickets from Tuesday to Saturday. Sunday and Monday were days off."]
  ],
  "12-dash-calor.png": [
    [59, 24, 40, 3, "O que é", "Quando os tickets chegam: dia da semana × hora no período, e o dia a dia do mês escolhido.", "What it is", "When the tickets come in: weekday × hour over the period, and the day by day of the chosen month."],
    [88, 29, 10, 3, "Mês", "Escolhe o mês da faixa de baixo, independente do período dos filtros.", "Month", "Picks the month for the strip below, independent of the filter period."],
    [18, 34.5, 15, 2.5, "Escala", "De 0 a máximo. Dourado é movimento; quanto mais claro, mais ticket.", "Scale", "From 0 to max. Gold is activity; the lighter, the more tickets."],
    [18, 39, 72, 19, "Dia da semana × hora", "Terça a sábado, das 14h às 22h, com o pico no fim da tarde. Segunda e domingo ficam vazios: folga.", "Weekday × hour", "Tuesday to Saturday, 2 pm to 10 pm, peaking late afternoon. Monday and Sunday stay empty: days off."],
    [90, 37, 8, 21, "Total", "Tickets de cada dia da semana no período, somando todas as horas.", "Total", "Tickets per weekday in the period, summing all hours."],
    [17, 61.5, 82, 16, "Dia a dia", "Cada célula é um dia do mês: tickets em cima, TMA médio embaixo. Em branco é folga.", "Day by day", "Each cell is a day of the month: tickets on top, average AHT below. Blank is a day off."],
    [1, 81.5, 80, 2.5, "Rodapé", "Dados fictícios com a mesma estrutura do log (uma linha por ticket, sigla da base B). Arquivo único, abre sem internet.", "Footer", "Fictitious data with the same structure as the log (one row per ticket, base B code). Single file, opens offline."]
  ],
  "13-dash-problemas.png": [
    [18, 29, 22, 32, "Por grupo", "A fatia de cada grupo nos tickets do período. Overpaid lidera; taxa de cancelamento e de limpeza vêm depois.", "By group", "Each group's share of the period's tickets. Overpaid leads; cancellation and cleaning fees come next."],
    [40, 36, 17, 23, "Grupos e contagens", "Os dez grupos com o total de tickets de cada um. Dourado é o que eu resolvia; cinza é o que ia pra outra área.", "Groups and counts", "The ten groups with each one's ticket total. Gold is what I resolved; gray is what went to another team."],
    [59, 29, 40, 32, "Top 10 siglas", "As siglas mais recorrentes da base B, com o total de cada uma.", "Top 10 codes", "The most frequent base B codes, with each one's total."],
    [17, 64, 42, 6, "Catálogo", "Sigla, problema, grupo, desfecho, marcadores e contagem. Clicar no cabeçalho ordena.", "Catalog", "Code, issue, group, outcome, flags and count. Clicking a header sorts."],
    [17, 73.5, 51, 26.5, "Sigla, problema e grupo", "Cada sigla da base com o nome por extenso e o grupo a que pertence.", "Code, issue and group", "Each base code with its full name and the group it belongs to."],
    [68, 73.5, 7, 26.5, "Desfecho", "O status esperado daquele tipo: Encerrado, Aguardando resposta ou Em aberto.", "Outcome", "The expected status for that type: Encerrado, Aguardando resposta or Em aberto."],
    [75, 73.5, 13, 26.5, "Marcadores", "Ponto branco em CAR, pushback ou PSAT quando a sigla aciona aquele marcador.", "Flags", "A white dot under CAR, pushback or PSAT when the code triggers that flag."],
    [88, 73.5, 11, 26.5, "Tickets e TMA", "Quantos tickets e o tempo médio por sigla no período.", "Tickets and AHT", "How many tickets and the average time per code in the period."]
  ],
  "14-dash-status.png": [
    [65, 24, 34, 3, "O que é", "Como os tickets terminam e quanto tempo cada um leva, mês a mês.", "What it is", "How tickets end and how long each one takes, month by month."],
    [17, 28.5, 40.5, 33, "Status por mês", "Encerrado, aguardando resposta e em aberto, em % de cada mês. Branco é encerrado, dourado é aguardando, cinza é em aberto.", "Status by month", "Closed, awaiting reply and open, as % of each month. White is closed, gold is awaiting, gray is open."],
    [58.5, 28.5, 40.5, 33, "Marcadores por mês", "CAR, Scout, pushback e elegíveis a PSAT, em % dos tickets, uma linha por marcador.", "Flags by month", "CAR, Scout, pushback and PSAT-eligible, as % of tickets, one line per flag."],
    [17, 64, 40, 6, "Distribuição do TMA", "Tickets por faixa de tempo, uma série por mês.", "AHT distribution", "Tickets by time band, one series per month."],
    [17, 70, 82, 23, "A curva anda pra esquerda", "Cinza são os primeiros meses, concentrados em 2 a 8 minutos; dourado são os últimos, em menos de 2. É a árvore de perguntas virando log.", "The curve moves left", "Gray is the first months, concentrated in 2 to 8 minutes; gold is the last ones, under 2. The question tree becoming a log."],
    [44, 94, 27, 2.5, "Legenda", "Um tom por mês, do cinza escuro de jul/26 ao dourado de out/26.", "Legend", "One shade per month, from the dark gray of Jul/26 to the gold of Oct/26."]
  ]
};
