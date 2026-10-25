// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["meusvoos"] = `
## Contexto

Meus Voos era a frente de e-mail do Projeto Smiles: o cliente escrevia com um problema (voo alterado, cancelamento, bagagem, assento, pontos) e o agente respondia pelo sistema de tickets. Cada resposta exigia três coisas: a **tabulação** (o caminho de classificação do ticket), a **mensagem** ao cliente e o **registro** do atendimento para a monitoria. Eram mais de 250 situações possíveis, cada uma com texto e regra próprios, e tudo era procurado e digitado à mão. Um e-mail levava de 15 a 30 minutos.

Eu era operador nessa frente. Propus uma planilha para o meu turno, ensinei os colegas a usar, e a coordenação pediu para levar ao turno da manhã.

## Como funcionava

O agente escolhia o problema num seletor. A planilha devolvia, prontos para copiar e colar, a tabulação, a mensagem e o registro, e dizia o que faltava preencher: nome do cliente, localizador, ticket. Linhas de cor forte pediam informação; linhas claras eram só copiar.

![Seletor de problemas: parte das 263 situações da base](05-seletor-problemas.png)

![Bloco preenchido: tabulação, mensagem e registro saem prontos](04-bloco-preenchido.png)

A mensagem não era um texto fixo. Ela se montava em camadas:

- **Saudação pelo horário** (bom dia, boa tarde, boa noite) e despedida pelo dia da semana, lidas do relógio.
- **Nome e localizador** entravam no texto onde a situação pedia.
- **Status do Clube**: a operação tinha meta de incentivar a assinatura, então o agente marcava se o cliente era elegível, assinante, suspenso ou pendente, e a mensagem ganhava o parágrafo certo.
- **Ida realizada**: em cancelamento excepcional, o cliente que já voou a ida só pode cancelar a volta. O agente marcava sim ou não e a regra entrava na mensagem e no registro.
- **Emojis sorteados** a cada atendimento, para as respostas não saírem idênticas.

![Mensagem montada, pronta para colar no sistema](06-mensagem-montada.png)

![Mesmo problema, cliente elegível ao Clube: o parágrafo de adesão entra sozinho](07-clube-elegivel.png)

![Mesmo problema, assinatura suspensa: a mensagem muda para a regularização](08-clube-suspenso.png)

Cada operador tinha o próprio bloco, com cor e ordem de campos do seu jeito, lendo da mesma base. O que mudava era a tela; a regra era uma.

![Bloco da Letícia](02-bloco-leticia.png)

![Bloco da Gislane](03-bloco-gislane.png)

## O parser de itinerário

Para confirmar um voo ao cliente, o agente copiava a linha crua do sistema de reservas, no formato que os sistemas de distribuição usam (\`1 HZ 1245 W CZS BSB 23DEC 1240-2005 1 HK01 /E\`), e a planilha separava companhia, número do voo, classe, origem, destino, data e horários, traduzia os códigos de aeroporto e montava o texto em português. Dois formatos: nacional e internacional, ida, conexões e volta.

![Parser nacional: linha crua à esquerda, texto pronto à direita](10-parser-nacional.png)

![Parser internacional, com classe e localizador da companhia parceira](09-parser-internacional.png)

## Resultado

- De 15 a 30 minutos para menos de 5 minutos por e-mail, para quem dominava o fluxo.
- Resposta, tabulação e registro padronizados entre os agentes: menos erro de classificação e de texto.
- Usada nos dois turnos da frente, por iniciativa da coordenação.
- Foi o projeto que me tirou da operação: a cobertura de férias do analista de melhoria contínua veio depois dela, e os cases PSAT e Esteira vieram na sequência.
- A mesma ideia virou, um ano depois, a planilha guiada do Projeto Uber (case à parte), com fluxo de perguntas Sim/Não.

## A versão para testar

Reconstruí a planilha com dados fictícios, no mesmo formato da original, para quem quiser abrir e mexer: programa Horizonte, companhias inventadas, a mesma equipe fictícia dos outros cases. A aba Atendimento tem um bloco de operador com seis atendimentos em paralelo; VN e VI são os dois parsers de itinerário, nacional e internacional, com até duas conexões por trecho; Terminal é o quadro de instruções. Por trás, 26 problemas representativos das categorias reais, cada um com tabulação, mensagem e registro, e uma aba com os blocos de saudação, Clube, ida realizada e emojis. Tudo em fórmula de planilha, sem script, como no original.

![Atendimento: um bloco, seis atendimentos em paralelo, vermelho onde falta informação e verde quando está pronto](11-nova-atendimento.png)

![VN: linha crua do sistema em cima, leitura no meio, texto pronto embaixo](12-nova-vn.png)

![VI: voos internacionais, com localizador da parceira e chegada no dia seguinte](13-nova-vi.png)

![Terminal: as instruções, no estilo do quadro original](14-nova-terminal.png)

[Baixar a planilha (xlsx)](cases/meusvoos/Meus_Voos.xlsx)

---

*As telas da planilha original foram capturadas com dados de exemplo (nomes e localizadores fictícios). A versão para download é uma reconstrução com dados fictícios.*
`;

// English version (shown when the visitor picks EN-US).
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["meusvoos"] = `
## Context

Meus Voos ("My Flights") was the e-mail channel of the Smiles Project: the customer wrote in with a problem (changed flight, cancellation, baggage, seat, points) and the agent replied through the ticketing system. Every reply required three things: the **tagging** (the ticket's classification path), the **message** to the customer and the **log** for quality monitoring. There were over 250 possible situations, each with its own text and rule, and all of it was searched and typed by hand. One e-mail took 15 to 30 minutes.

I was an agent on that channel. I proposed a spreadsheet for my shift, taught my colleagues to use it, and coordination asked to roll it out to the morning shift too.

## How it worked

The agent picked the issue from a dropdown. The spreadsheet returned, ready to copy and paste, the tagging, the message and the log, and said what was missing: customer name, booking code, ticket. Strong-colored rows asked for input; light rows were copy only.

![Issue selector: part of the 263 situations in the base](05-seletor-problemas.png)

![Filled block: tagging, message and log come out ready](04-bloco-preenchido.png)

The message was not a fixed text. It was assembled in layers:

- **Greeting by time of day** (good morning, afternoon, evening) and a sign-off by weekday, read from the clock.
- **Name and booking code** went into the text where the situation called for them.
- **Loyalty club status**: the operation had a target of promoting the subscription, so the agent marked whether the customer was eligible, a member, suspended or pending, and the message got the right paragraph.
- **Outbound flown**: on exceptional cancellations, a customer who already flew the outbound can only cancel the return. The agent marked yes or no and the rule went into both message and log.
- **Random emojis** per contact, so replies did not come out identical.

![Assembled message, ready to paste into the system](06-mensagem-montada.png)

![Same issue, customer eligible for the club: the membership paragraph comes in by itself](07-clube-elegivel.png)

![Same issue, suspended membership: the message switches to regularization](08-clube-suspenso.png)

Each agent had their own block, with their own colors and field order, all reading from the same base. The screen changed; the rule was one.

![Letícia's block](02-bloco-leticia.png)

![Gislane's block](03-bloco-gislane.png)

## The itinerary parser

To confirm a flight to the customer, the agent copied the raw line from the reservation system, in the format distribution systems use (\`1 HZ 1245 W CZS BSB 23DEC 1240-2005 1 HK01 /E\`), and the spreadsheet split airline, flight number, class, origin, destination, date and times, translated airport codes and assembled the text in Portuguese. Two formats: domestic and international; outbound, connections and return.

![Domestic parser: raw line on the left, ready text on the right](10-parser-nacional.png)

![International parser, with class and the partner airline's record locator](09-parser-internacional.png)

## Result

- From 15–30 minutes to under 5 minutes per e-mail, for agents who knew the flow.
- Reply, tagging and log standardized across agents: fewer classification and text errors.
- Used by both shifts of the channel, at coordination's initiative.
- It was the project that took me out of the queue: covering the continuous improvement analyst's vacation came after it, and the PSAT and Pipeline cases followed.
- The same idea became, a year later, the guided spreadsheet for the Uber Project (its own case), with a yes/no question flow.

## The version you can try

I rebuilt the spreadsheet with fictitious data, in the same layout as the original, for anyone who wants to open it and play: the Horizonte loyalty program, invented airlines, the same fictitious team as the other cases. The Atendimento tab has one agent block with six contacts in parallel; VN and VI are the two itinerary parsers, domestic and international, with up to two connections per leg; Terminal is the instructions panel. Behind it, 26 issues representative of the real categories, each with tagging, message and log, and one tab with the greeting, club, outbound-flown and emoji blocks. All spreadsheet formulas, no script, like the original. The interface is in Portuguese.

![Rebuilt Atendimento tab: one block, six contacts in parallel, red where input is missing and green when ready](11-nova-atendimento.png)

![VN: raw system line on top, parsed in the middle, ready text at the bottom](12-nova-vn.png)

![VI: international flights, with the partner's record locator and next-day arrival](13-nova-vi.png)

![Terminal: the instructions, in the style of the original panel](14-nova-terminal.png)

[Download the spreadsheet (xlsx)](cases/meusvoos/Meus_Voos.xlsx)

---

*Screens of the original spreadsheet were captured with sample data (fictitious names and booking codes). The download is a rebuild with fictitious data.*
`;
