// Pontos explicados do Manche (Meus Voos): [x, y, largura, altura, título, texto, título EN, texto EN], em % da imagem.
window.CASE_PONTOS = window.CASE_PONTOS || {};
window.CASE_PONTOS.meusvoos = {
  "02-bloco-leticia.png": [
    [1, 4, 17, 10, "Bloco da operadora", "Cada operador tinha o próprio bloco, com nome, cor e ordem de campos do seu jeito. O da Letícia é rosa.", "Agent's block", "Each agent had their own block, with their own name, colors and field order. Letícia's is pink."],
    [21, 14, 16, 6, "Seletor de problema", "Lista suspensa com as situações da base. Escolher aqui é o que dispara tabulação, mensagem e registro nas linhas abaixo.", "Issue selector", "Dropdown with the situations in the base. Picking here is what fills tagging, message and log in the rows below."],
    [1, 21, 17, 10, "Caminho de tabulação", "Linha clara: só copiar e colar. É o caminho de classificação do ticket no sistema, devolvido pronto para a situação escolhida.", "Tagging path", "Light row: copy and paste only. It is the ticket's classification path in the system, returned ready for the chosen situation."],
    [1, 32, 17, 10, "Macro para o cliente", "A mensagem montada para o cliente, pronta para colar no ticket.", "Customer macro", "The assembled message for the customer, ready to paste into the ticket."],
    [1, 43, 17, 10, "Registro do atendimento", "O texto que vai no registro interno, para a monitoria. Sai junto com a mensagem, da mesma base.", "Contact log", "The text that goes into the internal log, for quality monitoring. Comes out with the message, from the same base."],
    [1, 54, 17, 9, "O que acrescentar", "A planilha diz o que falta preencher naquela situação: nome, localizador, ticket.", "What to add", "The spreadsheet says what is missing for that situation: name, booking code, ticket."],
    [1, 64, 17, 22, "Campos de entrada", "Linhas de cor forte pedem informação do agente: nome do cliente, localizador e ticket novo. O que entra aqui aparece no texto.", "Input fields", "Strong-colored rows ask the agent for input: customer name, booking code and new ticket. What goes in here shows up in the text."],
    [21, 87, 16, 7, "Status do Clube", "Elegível, assinante, suspenso ou pendente. A operação tinha meta de incentivar a assinatura, então o status muda o parágrafo da mensagem.", "Club status", "Eligible, member, suspended or pending. The operation had a target of promoting the subscription, so the status changes the message's paragraph."]
  ],
  "03-bloco-gislane.png": [
    [1, 5, 22, 9, "Outro bloco, mesma base", "O bloco da Gislane é roxo e tem campos a mais, mas lê a mesma base de problemas. O que mudava era a tela; a regra era uma.", "Another block, same base", "Gislane's block is purple and has extra fields, but reads the same issue base. The screen changed; the rule was one."],
    [26, 14, 17, 6, "Seletor de problema", "Um seletor por atendimento. Quatro colunas, quatro e-mails em paralelo.", "Issue selector", "One selector per contact. Four columns, four e-mails in parallel."],
    [2, 21, 20, 29, "Saídas prontas", "Tabulação, macro e registro em linhas claras: só copiar e colar (C&C) no sistema de tickets.", "Ready outputs", "Tagging, macro and log in light rows: copy and paste (C&C) into the ticketing system."],
    [2, 51, 20, 9, "O que acrescentar", "Lembrete do que a situação exige do agente antes de colar.", "What to add", "Reminder of what the situation requires from the agent before pasting."],
    [25, 61, 74, 17, "Dados do cliente", "Nome, localizador/PNR e ticket novo. Entram no texto onde a situação pede.", "Customer data", "Name, booking code/PNR and new ticket. They go into the text where the situation calls for them."],
    [26, 79, 17, 6, "Ida realizada", "Em cancelamento excepcional, quem já voou a ida só cancela a volta. Marcar sim ou não muda a mensagem e o registro.", "Outbound flown", "On exceptional cancellations, a customer who already flew the outbound can only cancel the return. Marking yes or no changes the message and the log."],
    [26, 85, 17, 6, "Clube", "Status da assinatura do Clube. Define qual parágrafo de adesão ou regularização entra na mensagem.", "Club", "Club subscription status. Decides which membership or regularization paragraph goes into the message."]
  ],
  "04-bloco-preenchido.png": [
    [17, 3, 70, 7, "Relógio e calendário", "Saudação (Bom dia), hora, data e dia da semana lidos do relógio. A saudação e a despedida da mensagem vêm daqui.", "Clock and calendar", "Greeting (Bom dia), time, date and weekday read from the clock. The message's greeting and sign-off come from here."],
    [17, 11, 14, 6, "Situação escolhida", "Assento (SA) - Assento selecionado no seletor. Tudo abaixo foi preenchido a partir dessa escolha.", "Chosen situation", "Assento (SA) - Assento picked in the selector. Everything below was filled from that choice."],
    [17, 19, 14, 8, "Tabulação", "Informação > Aéreas - GOL > Assento: o caminho de classificação do ticket, pronto para copiar.", "Tagging", "Informação > Aéreas - GOL > Assento: the ticket's classification path, ready to copy."],
    [17, 28, 14, 11, "Mensagem montada", "Já começa com Bom dia, Jorge! e emoji sorteado. É a célula que o agente copia para o ticket.", "Assembled message", "Already starts with Bom dia, Jorge! and a random emoji. This is the cell the agent copies into the ticket."],
    [17, 39, 14, 10, "Registro", "Texto do registro interno para a monitoria, com o mesmo problema e os dados do cliente.", "Log", "Internal log text for quality monitoring, with the same issue and the customer's data."],
    [1, 49, 30, 8, "O que acrescentar", "Nome do Cliente + Localizador: a planilha avisa o que essa situação precisa.", "What to add", "Nome do Cliente + Localizador: the spreadsheet says what this situation needs."],
    [17, 59, 14, 20, "Dados do cliente", "Jorge e SPAJKS entram no texto. O ticket novo fica vazio porque a situação não pede.", "Customer data", "Jorge and SPAJKS go into the text. The new ticket stays empty because the situation does not ask for it."],
    [17, 79, 14, 18, "Seletores de regra", "Categoria, ida realizada (cancelamento excepcional) e elegibilidade do Clube. Cada um troca um trecho da mensagem.", "Rule selectors", "Category, outbound flown (exceptional cancellation) and club eligibility. Each one swaps a piece of the message."]
  ],
  "05-seletor-problemas.png": [
    [1, 0, 48, 4, "Lista por categoria", "Cada item é categoria - situação, com uma cor por categoria. Aqui aparece só um pedaço das 263 situações da base.", "List by category", "Each item is category - situation, one color per category. This shows only part of the 263 situations in the base."],
    [1, 4, 70, 18, "Alteração involuntária", "Verde: a companhia mudou o voo. Inclui o corte da ANAC 400 e o que pode ser feito pelo cliente.", "Involuntary change", "Green: the airline changed the flight. Includes the ANAC 400 threshold and what can be done for the customer."],
    [1, 22, 81, 51, "Alteração voluntária", "Vermelho: o cliente quer mudar. A maior família, porque depende de tarifa, SPA, check-in e trecho já voado.", "Voluntary change", "Red: the customer wants to change. The biggest family, because it depends on fare, SPA, check-in and already flown segment."],
    [1, 73, 86, 21, "Assento (SA)", "Marrom: marcação, remarcação, assento não marcado, informação geral.", "Seat (SA)", "Brown: seat selection, reselection, seat not assigned, general information."],
    [1, 94, 52, 5, "Atendimento", "Cinza: perguntas sobre o próprio atendimento, como mudar de categoria.", "Service", "Grey: questions about the service itself, such as how to change tier."]
  ],
  "06-mensagem-montada.png": [
    [1, 16, 15, 6.5, "Tabulação", "A célula de tabulação, de onde sai o caminho do ticket.", "Tagging", "The tagging cell, where the ticket path comes from."],
    [1, 23, 15, 8, "Célula da mensagem", "A célula que o agente copia. As setas mostram onde cada pedaço cai no bloco de notas.", "Message cell", "The cell the agent copies. The arrows show where each piece lands in Notepad."],
    [1, 31, 15, 6, "Registro", "Remarcação de Assento (SA) e o texto do registro interno.", "Log", "Remarcação de Assento (SA) and the internal log text."],
    [1, 45, 15, 8, "Nome e localizador", "Jorge e SPAJKS, digitados pelo agente. Aparecem na saudação e na segunda linha da mensagem.", "Name and booking code", "Jorge and SPAJKS, typed by the agent. They show up in the greeting and the second line of the message."],
    [55, 9, 20, 5, "Saudação", "Bom dia pelo horário, nome do cliente e emoji sorteado a cada atendimento.", "Greeting", "Good morning by time of day, customer name and an emoji drawn at each contact."],
    [55, 16, 30, 4, "Localizador no texto", "O localizador entra na frase, sem o agente escrever a linha.", "Booking code in text", "The booking code goes into the sentence without the agent writing the line."],
    [55, 22, 43, 13, "Texto da situação", "A explicação própria da situação de assento, com os emojis no fim do parágrafo.", "Situation text", "The explanation specific to the seat situation, with emojis at the end of the paragraph."],
    [55, 38, 43, 24, "Instruções ao cliente", "Passo a passo de compra de franquia e os canais alternativos. Texto fixo da situação, igual para todos os agentes.", "Customer instructions", "Step by step for buying the allowance and the alternative channels. Fixed text for the situation, the same for every agent."]
  ],
  "07-clube-elegivel.png": [
    [0, 59, 19, 4, "Elegível", "O agente marcou Elegível no seletor do Clube. Só isso muda a mensagem ao lado.", "Eligible", "The agent marked Elegível in the club selector. That alone changes the message beside it."],
    [21, 0, 40, 2.5, "Saudação", "Bom dia, Jorge! com o emoji sorteado.", "Greeting", "Bom dia, Jorge! with the random emoji."],
    [21, 8, 78, 7, "Texto da situação", "O mesmo texto de assento das outras telas. O problema não mudou.", "Situation text", "The same seat text as the other screens. The issue did not change."],
    [21, 45, 78, 7, "Parágrafo do Clube", "Entrou sozinho: convida o cliente elegível ao upgrade de plano. A operação tinha meta de incentivar a assinatura.", "Club paragraph", "Came in by itself: invites the eligible customer to a plan upgrade. The operation had a target of promoting the subscription."],
    [21, 58, 70, 8, "Centrais de atendimento", "Chat, voz e custo da ligação. Bloco fixo de fechamento.", "Service channels", "Chat, voice and call cost. Fixed closing block."],
    [21, 72, 60, 5, "Pesquisa de satisfação", "Pedido de feedback com emoji, igual em toda resposta.", "Satisfaction survey", "Feedback request with emoji, the same in every reply."],
    [21, 79, 40, 5, "Despedida pelo dia", "Desejo uma excelente semana: a despedida muda com o dia da semana lido do relógio.", "Sign-off by weekday", "Desejo uma excelente semana: the sign-off changes with the weekday read from the clock."],
    [21, 86, 20, 5, "Assinatura", "Equipe Smiles, com emojis no fim.", "Signature", "Equipe Smiles, with emojis at the end."]
  ],
  "08-clube-suspenso.png": [
    [0, 17, 23, 4, "Fórmula", "A célula lê um intervalo da aba base ('Guilherme'!A728:A844). A regra mora numa aba só; o bloco é a tela.", "Formula", "The cell reads a range from the base tab ('Guilherme'!A728:A844). The rule lives in one tab; the block is the screen."],
    [2, 32, 20, 7, "Célula da mensagem", "A mesma célula de macro, agora com outro emoji sorteado na saudação.", "Message cell", "The same macro cell, now with another random emoji in the greeting."],
    [2, 69, 20, 5, "Suspenso", "Seletor do Clube em Suspenso, em vermelho. Mesmo problema, outro status.", "Suspended", "Club selector set to Suspenso, in red. Same issue, different status."],
    [23, 0, 35, 3, "Saudação", "Bom dia, Jorge! com emoji diferente da tela anterior.", "Greeting", "Bom dia, Jorge! with a different emoji from the previous screen."],
    [23, 11, 75, 8, "Texto da situação", "Explicação do assento, idêntica à da tela com cliente elegível.", "Situation text", "Seat explanation, identical to the screen with the eligible customer."],
    [23, 58, 70, 7, "Centrais de atendimento", "Bloco fixo de canais. Não depende do Clube.", "Service channels", "Fixed channels block. Does not depend on the club."],
    [23, 68, 50, 4, "Sem convite de upgrade", "Com a assinatura suspensa, o parágrafo de adesão sai e a mensagem segue a regra desse status.", "No upgrade invite", "With the subscription suspended, the membership paragraph drops out and the message follows that status's rule."],
    [23, 81, 40, 5, "Despedida", "Mesma despedida pelo dia da semana e assinatura.", "Sign-off", "Same weekday sign-off and signature."]
  ],
  "09-parser-internacional.png": [
    [10, 4, 29, 5, "Linha crua", "2 AF1183 T 30APR 3 PRGCDG TK1 1415 1605 30APR E AF/2RO854: colada do sistema de reservas, no formato internacional.", "Raw line", "2 AF1183 T 30APR 3 PRGCDG TK1 1415 1605 30APR E AF/2RO854: pasted from the reservation system, in the international format."],
    [1, 8, 9, 13, "Conexões da ida", "Até quatro conexões por trecho, uma linha cada.", "Outbound connections", "Up to four connections per leg, one line each."],
    [1, 23, 41, 17, "Voo de volta", "Mesmo bloco para a volta e suas conexões. Aqui vazio.", "Return flight", "Same block for the return and its connections. Empty here."],
    [1, 42, 8, 32, "Copiar colar", "A célula de saída: o agente copia daqui para o ticket.", "Copy paste", "The output cell: the agent copies from here into the ticket."],
    [9, 46, 33, 27, "Texto montado", "Aeronave, companhia parceira, classe, data, itinerário com códigos traduzidos e horário, separados da linha crua por fórmula.", "Assembled text", "Aircraft, partner airline, class, date, itinerary with translated codes and times, split from the raw line by formula."],
    [69, 21, 30, 24, "Resultado colado", "O mesmo texto no bloco de notas, como o cliente recebe. Air France saiu do código AF.", "Pasted result", "The same text in Notepad, as the customer receives it. Air France came from the AF code."],
    [69, 46, 30, 4, "Localizador da parceira", "2RO854: o localizador da companhia parceira, lido do fim da linha.", "Partner's record locator", "2RO854: the partner airline's record locator, read from the end of the line."]
  ],
  "10-parser-nacional.png": [
    [1, 4, 60, 32, "Recibo SPA", "Área para o recibo da reserva, usada quando a resposta precisa do comprovante.", "SPA receipt", "Area for the booking receipt, used when the reply needs the proof."],
    [1, 40, 60, 10, "Todos os trechos", "Célula que junta ida, conexões e volta num texto só, para copiar.", "All segments", "Cell that joins outbound, connections and return into a single text, to copy."],
    [16, 52, 45, 6, "Linha de ida", "1 G3 1245 W CZS - BSB 23DEC 1240-2005: a linha crua do sistema colada pelo agente.", "Outbound line", "1 G3 1245 W CZS - BSB 23DEC 1240-2005: the raw system line pasted by the agent."],
    [16, 59, 45, 5, "Conexão", "Segunda linha, BSB - VCP. Cada trecho tem a própria linha.", "Connection", "Second line, BSB - VCP. Each segment has its own line."],
    [1, 77, 14, 22, "Trecho de volta", "Bloco da volta e conexões, vazio neste exemplo.", "Return leg", "Return block and connections, empty in this example."],
    [62, 19, 37, 44, "Texto pronto", "Ida e Conexão com aeronave, itinerário traduzido (Cruzeiro do Sul, Brasília, Viracopos), data por extenso e horário.", "Ready text", "Outbound and Connection with aircraft, translated itinerary (Cruzeiro do Sul, Brasília, Viracopos), date spelled out and times."],
    [62, 68, 37, 18, "Linhas cruas", "As duas linhas originais, com duração e milhas, para comparar com o texto montado.", "Raw lines", "The two original lines, with duration and miles, to compare with the assembled text."]
  ],
  "11-nova-atendimento.png": [
    [1, 8, 25, 16, "Operador", "Nome do operador, hora, assinatura e supervisor. O nome puxa a assinatura da mensagem.", "Agent", "Agent name, time, signature and supervisor. The name pulls the message signature."],
    [27, 8, 73, 4, "Relógio", "Boa noite, hora, data e sábado: saudação e despedida lidas do relógio, como na original.", "Clock", "Boa noite, time, date and sábado: greeting and sign-off read from the clock, like the original."],
    [27, 25, 73, 4, "Atendimentos em paralelo", "Seis colunas, seis e-mails ao mesmo tempo no mesmo bloco.", "Parallel contacts", "Six columns, six e-mails at the same time in the same block."],
    [27, 30, 43, 6, "Problema (seletor)", "Um dos 26 problemas representativos. Assento, cancelamento excepcional e emissão nos três exemplos.", "Issue (selector)", "One of the 26 representative issues. Seat, exceptional cancellation and ticketing in the three examples."],
    [27, 36, 43, 18, "Saídas prontas", "Tabulação, mensagem e registro, calculados por fórmula. Sem script, como no original.", "Ready outputs", "Tagging, message and log, computed by formula. No script, like the original."],
    [27, 60, 43, 18, "Dados do cliente", "Nome, localizador e ticket, conforme a linha O que acrescentar pede em cada caso.", "Customer data", "Name, booking code and ticket, as the What to add row asks in each case."],
    [27, 78, 43, 17, "Categoria, ida e Clube", "Categoria do cliente, ida realizada e status do Clube: os três ajustes que trocam trechos da mensagem.", "Tier, outbound and club", "Customer tier, outbound flown and club status: the three settings that swap pieces of the message."],
    [27, 95, 43, 5, "Falta preencher?", "Verde: pronto para copiar. Vermelho: FALTA INFORMAÇÃO. O agente vê de longe o que ainda falta.", "Missing input?", "Green: ready to copy. Red: FALTA INFORMAÇÃO. The agent sees from afar what is still missing."]
  ],
  "12-nova-vn.png": [
    [0, 0, 100, 5, "Formato Sabre", "A aba VN lê linhas no formato nacional: 1 HZ 1245 W CZS BSB 23DEC 1240-2005 1 HK01 /E.", "Sabre format", "The VN tab reads lines in the domestic format: 1 HZ 1245 W CZS BSB 23DEC 1240-2005 1 HK01 /E."],
    [0, 13, 100, 11, "Linhas cruas da ida", "Trecho de ida e até duas conexões, uma linha colada por trecho.", "Raw outbound lines", "Outbound leg and up to two connections, one pasted line per segment."],
    [0, 24, 100, 12, "Volta", "Mesmo esquema para a volta: MR 2210 VCP CZS em 02JAN.", "Return", "Same scheme for the return: MR 2210 VCP CZS on 02JAN."],
    [10, 39, 10, 25, "Voo e classe", "Companhia, número e classe separados da linha crua.", "Flight and class", "Airline, number and class split from the raw line."],
    [20, 39, 23, 25, "De → Para", "Códigos de aeroporto traduzidos: CZS vira Cruzeiro do Sul, VCP vira Campinas/Viracopos.", "From → To", "Airport codes translated: CZS becomes Cruzeiro do Sul, VCP becomes Campinas/Viracopos."],
    [43, 39, 32, 25, "Data e horários", "Data por extenso, saída, chegada e status HK01, cada um na sua coluna.", "Date and times", "Date spelled out, departure, arrival and HK01 status, each in its own column."],
    [75, 39, 25, 25, "Texto por trecho", "A frase pronta de cada trecho, já em português.", "Text per segment", "The ready sentence for each segment, already in Portuguese."],
    [0, 66, 100, 30, "Copiar e colar", "Seu itinerário: ida, conexão e volta juntos, para colar na resposta.", "Copy and paste", "Seu itinerário: outbound, connection and return together, to paste into the reply."]
  ],
  "13-nova-vi.png": [
    [0, 0, 100, 7, "Formato Amadeus", "A aba VI lê o formato internacional, com classe e localizador da parceira no fim da linha.", "Amadeus format", "The VI tab reads the international format, with class and the partner's record locator at the end of the line."],
    [0, 14, 100, 11, "Ida", "GRU → AMS com a Kestrel Lines e conexão AMS → PRG com a Nimbus Europa, companhias inventadas.", "Outbound", "GRU → AMS with Kestrel Lines and AMS → PRG connection with Nimbus Europa, invented airlines."],
    [0, 25, 100, 12, "Volta", "Os dois trechos da volta em maio, no mesmo formato.", "Return", "The two return segments in May, in the same format."],
    [10, 40, 10, 24, "Companhia parceira", "KL e NB viram o nome da companhia e a classe T.", "Partner airline", "KL and NB become the airline name and class T."],
    [51, 40, 16, 24, "Chegada no dia seguinte", "Quando o voo cruza a meia-noite, a chegada marca (dia seguinte). Regra que só o internacional precisa.", "Next-day arrival", "When the flight crosses midnight, the arrival says (dia seguinte). A rule only the international one needs."],
    [75, 40, 25, 24, "Localizador da parceira", "Cada trecho sai com localizador 2RO854, o código da reserva na companhia parceira.", "Partner's record locator", "Each segment comes out with localizador 2RO854, the booking code at the partner airline."],
    [0, 67, 100, 32, "Copiar e colar", "Os quatro trechos montados, prontos para a resposta.", "Copy and paste", "The four segments assembled, ready for the reply."]
  ],
  "14-nova-terminal.png": [
    [1, 2, 75, 6, "Quadro de instruções", "A aba Terminal, no estilo do quadro original: regras de uso em texto de terminal.", "Instructions panel", "The Terminal tab, in the style of the original panel: usage rules in terminal text."],
    [1, 10, 62, 10, "Passo a passo", "Escolher o operador, o problema e preencher o que a linha O que acrescentar pede.", "Step by step", "Pick the agent, the issue and fill in what the What to add row asks for."],
    [1, 21, 80, 7, "Código de cores", "Linhas fortes pedem informação, claras são só C&C. Vermelho falta dado, verde pronto para copiar.", "Color code", "Strong rows ask for input, light ones are copy only. Red means missing data, green means ready to copy."],
    [1, 29, 80, 8, "Mensagem muda sozinha", "Saudação, despedida, emoji, parágrafo do Clube e regra de ida realizada: tudo automático.", "Message changes by itself", "Greeting, sign-off, emoji, club paragraph and outbound-flown rule: all automatic."],
    [1, 41, 82, 15, "VN e VI", "Como usar os parsers: uma linha crua por trecho, vermelho nacional (Sabre), azul internacional (Amadeus).", "VN and VI", "How to use the parsers: one raw line per segment, red for domestic (Sabre), blue for international (Amadeus)."],
    [1, 60, 96, 16, "Manutenção", "Problema novo é uma linha na aba PROBLEMAS, com {nome}, {loc}, {ticket} e {categoria} como marcadores. Textos fixos ficam na aba BLOCOS.", "Maintenance", "A new issue is one row in the PROBLEMAS tab, with {nome}, {loc}, {ticket} and {categoria} as placeholders. Fixed texts live in the BLOCOS tab."],
    [1, 79, 82, 12, "Sobre esta versão", "Reconstrução com dados fictícios. A original tinha 263 problemas, um bloco por operador e dois turnos.", "About this version", "Rebuild with fictitious data. The original had 263 issues, one block per agent and two shifts."]
  ],
  "15-dash-visao-geral.png": [
    [1, 6, 45, 8, "Resumo do recorte", "Uma frase com os números do filtro atual: e-mails, operadores, tempo por e-mail e a queda de setembro para outubro.", "Scope summary", "One sentence with the current filter's numbers: e-mails, agents, time per e-mail and the drop from September to October."],
    [53, 6, 46, 8, "Destaques", "Operador mais rápido e quem respondeu mais e-mails no recorte.", "Highlights", "Fastest agent and who answered the most e-mails in the scope."],
    [1, 14, 98, 4, "Filtros", "Mês, supervisor, turno, nacional ou internacional e categoria. Tudo abaixo recalcula.", "Filters", "Month, supervisor, shift, domestic or international and category. Everything below recalculates."],
    [1, 23, 15, 25, "Abas", "Visão geral, Mês contra mês, Operadores, Problemas e Detalhe.", "Tabs", "Overview, Month vs. month, Agents, Issues and Detail."],
    [17, 28, 82, 11, "KPIs", "E-mails, operadores, tempo por e-mail, abaixo de 5 min (a meta do case), internacional e Clube elegível, com a variação de outubro contra setembro.", "KPIs", "E-mails, agents, time per e-mail, under 5 min (the case's target), international and club eligible, with October vs. September variation."],
    [17, 40, 82, 34, "E-mails por dia", "Os dois meses sobrepostos pelo dia do mês. Domingo é folga, por isso os buracos.", "E-mails per day", "The two months overlaid by day of the month. Sunday is off, hence the gaps."],
    [17, 76, 40, 24, "Tempo por semana", "Minutos por e-mail contra a linha pontilhada de 5 min. As duas primeiras semanas ainda tinham metade do time no processo antigo.", "Time per week", "Minutes per e-mail against the dotted 5-minute line. The first two weeks still had half the team on the old process."],
    [58, 76, 41, 24, "Nacional × internacional", "Volume e tempo de cada um. Internacional demora mais porque o parser tem mais trecho para ler.", "Domestic × international", "Volume and time of each. International takes longer because the parser has more segments to read."]
  ],
  "16-dash-comparativo.png": [
    [1, 14, 18, 4, "Filtro de mês", "Ambos, set/26 ou out/26. Esta aba compara os dois mesmo com Ambos marcado.", "Month filter", "Both, Sep/26 or Oct/26. This tab compares the two even with Both selected."],
    [59, 23, 40, 4, "Todos os cortes", "Setembro contra outubro por categoria, supervisor, turno e Clube.", "Every cut", "September against October by category, supervisor, shift and club."],
    [17, 28, 32, 11, "Volume e tempo", "E-mails por dia quase iguais (228 → 230) e tempo por e-mail de 9,0 para 4,5 min: metade, com o mesmo volume.", "Volume and time", "E-mails per day almost equal (228 → 230) and time per e-mail from 9.0 to 4.5 min: half, with the same volume."],
    [50, 28, 16, 11, "Abaixo de 5 min", "De 20,4% para 61,9%: a fatia dentro da meta triplica.", "Under 5 min", "From 20.4% to 61.9%: the share within target triples."],
    [67, 28, 32, 11, "Internacional e operadores", "Internacional estável e os mesmos 12 operadores: o ganho não veio de mais gente.", "International and agents", "International stable and the same 12 agents: the gain did not come from more people."],
    [17, 40, 40, 42, "Tempo por categoria", "Uma barra por mês (cinza setembro, laranja outubro) em cada categoria. A queda aparece em todas.", "Time by category", "One bar per month (grey September, orange October) in each category. The drop shows in all of them."],
    [58, 40, 41, 42, "E-mails por supervisor", "Média por dia trabalhado de cada equipe, nos dois meses.", "E-mails by supervisor", "Average per worked day for each team, in both months."],
    [17, 84, 82, 16, "Distribuição do tempo", "E-mails por faixa de minutos. Outubro se empilha à esquerda, nas faixas curtas.", "Time distribution", "E-mails per minute bucket. October piles up on the left, in the short buckets."]
  ],
  "17-dash-operadores.png": [
    [1, 33, 15, 5, "Aba Operadores", "Quem responde mais e quem responde mais rápido.", "Agents tab", "Who answers more and who answers faster."],
    [57, 23, 42, 4, "Ordenar", "Clique no cabeçalho da tabela para ordenar por qualquer coluna.", "Sort", "Click the table header to sort by any column."],
    [17, 28, 40, 46, "Tempo por operador", "Minutos por e-mail, do mais rápido ao mais lento. Cor por turno (manhã e tarde) e a linha pontilhada é a média do time.", "Time per agent", "Minutes per e-mail, fastest to slowest. Color by shift (morning and afternoon) and the dotted line is the team average."],
    [59, 29, 40, 4, "Colunas", "Operador, supervisor, turno, dias trabalhados, e-mails, por dia e minutos por e-mail.", "Columns", "Agent, supervisor, shift, worked days, e-mails, per day and minutes per e-mail."],
    [59, 33, 40, 41, "Tabela", "Um operador por linha, com barra proporcional na coluna de e-mails.", "Table", "One agent per row, with a proportional bar in the e-mails column."],
    [1, 77, 81, 4, "Rodapé", "Dados fictícios: uma linha por e-mail, setembro e outubro de 2026. Arquivo único, abre sem internet.", "Footer", "Fictitious data: one row per e-mail, September and October 2026. Single file, opens offline."]
  ],
  "18-dash-problemas.png": [
    [65, 23, 34, 4, "O que chega", "Os 26 problemas da base em 10 categorias.", "What comes in", "The base's 26 issues in 10 categories."],
    [17, 28, 22, 34, "Por categoria", "Participação de cada categoria nos e-mails. Cancelamento é a maior fatia.", "By category", "Each category's share of e-mails. Cancellation is the biggest slice."],
    [40, 36, 17, 23, "Legenda", "Categoria e contagem, na mesma cor da rosca.", "Legend", "Category and count, in the donut's color."],
    [58, 28, 25, 34, "Status do Clube", "Elegível, suspenso ou não membro: o status que muda o texto da resposta.", "Club status", "Eligible, suspended or non-member: the status that changes the reply text."],
    [84, 44, 15, 8, "Legenda do Clube", "Contagem por status, com a cor de cada fatia.", "Club legend", "Count per status, with each slice's color."],
    [17, 70, 82, 3, "Cabeçalho da tabela", "Categoria, problema, e-mails, participação, minutos por e-mail e se depende da ida.", "Table header", "Category, issue, e-mails, share, minutes per e-mail and whether it depends on the outbound."],
    [40, 73, 39, 27, "Problema e volume", "Os 26 problemas por contagem, com barra proporcional e participação.", "Issue and volume", "The 26 issues by count, with proportional bar and share."],
    [87, 73, 12, 27, "Depende da ida?", "Sim quando a resposta depende do trecho de ida já voado, que é quando o parser entra.", "Depends on outbound?", "Yes when the reply depends on the already flown outbound, which is when the parser comes in."]
  ]
};
