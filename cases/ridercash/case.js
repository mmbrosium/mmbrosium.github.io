// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["ridercash"] = `
## O problema

Na Foundever, no Projeto Uber, eu atendia passageiros (Rider) com problemas de pagamento, principalmente em dinheiro (Cash): troco não devolvido, valor cobrado a mais, taxa de limpeza ou de cancelamento contestada, corrida que ficou pendente na conta. Cada ticket exigia uma verificação longa antes de responder: abrir a corrida, abrir o perfil do passageiro, abrir o do motorista, conferir as etiquetas de cada um (já pediu reembolso? quantas vezes no ano? o motorista tem ocorrências do mesmo tipo?), achar o procedimento certo na base de conhecimento, e só então escrever a resposta, a etiqueta de tabulação e o registro. Cerca de 10 minutos por atendimento, no turno da madrugada.

## O que eu fiz

Construí a planilha durante o treinamento, em um ou dois meses, dividindo o tempo entre atender e testar. Ela nasceu em duas gerações, e as duas ficaram no mesmo arquivo.

**Cash 1, a árvore de perguntas.** A primeira versão era um fluxo de Sim/Não, no estilo if/else: a pergunta 1 é sempre "o cliente pagou em dinheiro?"; a resposta leva à próxima pergunta (consta como pago? tem impeditivo na conta? já teve reembolso no mês? o valor passa da alçada? tem comprovante? a rota teve desvio?) até chegar numa resolução. A resolução entrega a etiquetação, o resumo pro cliente, o resumo do atendimento e o link do procedimento. Existiam também Cash 2 (pagamento digital em corrida marcada como dinheiro) e Cash 3 (outras formas). Era a pré-verificação: quem estava começando seguia as perguntas; quem já conhecia o sistema ia direto.

![Cash 1 original: perguntas, Sim/Não e a resolução com os textos prontos](03-cash1-original.png)

**Home, o log.** Depois que o fluxo estava na cabeça, a pré-verificação na planilha virou muleta. A segunda versão é um registro, uma linha por atendimento: data, hora, link do ticket, o problema escolhido num seletor (com sigla) e uma observação. A partir do problema, a base preenche o resto: contact type (a etiqueta da tabulação), link da base de conhecimento, etapa do procedimento, o que eu mesmo tinha que fazer (reembolsar, pedir comprovante, encerrar), observação pro usuário, observação pro motorista, resposta ao cliente e o status do ticket (Encerrado, resolve em mim; Aguardando resposta, falta algo do cliente; Em aberto, vai pra outra área). Do link, a planilha extrai o ID do ticket; da observação e da base, marca as flags: Scout (automação), CAR (procedimento interno), pushback e elegibilidade a pesquisa de satisfação. Se o passageiro era Uber One, a resposta mudava.

![Home original: um atendimento por linha, azul é o que eu preencho, laranja é o que a base devolve](01-home-log.png)

![Home original: status do ticket, ID extraído do link, sigla e as flags](02-home-status-flags.png)

A planilha não guardava histórico de um dia pro outro, então eu copiava a página em texto no fim do turno e extraía o que precisava com filtros e contagens, pra ter as minhas métricas, que na época só os supervisores viam. Era tosco e funcionava.

## Resultado

- Só com a árvore (Cash 1), o tempo médio de atendimento caiu de cerca de 10 minutos para 2 a 5.
- Com a Home, caiu para menos de 1 minuto e não passou mais disso: uns 15 segundos de verificação no sistema, uns 15 de copiar e colar.
- Usada por mim durante quatro meses, no treinamento e na operação, até o encerramento do turno da madrugada.
- Foi a segunda vez que resolvi o mesmo problema (a primeira foi o Meus Voos, no Projeto Smiles), e a solução ficou mais enxuta: menos abas, uma linha por atendimento, e o log já pronto pra virar métrica.

## Dashboard

O log de uma linha por ticket é a base; o dashboard é a leitura. A versão de uso era o mini-painel na aba Analysis da planilha. Pro portfólio, refiz em HTML, CSS e JavaScript, arquivo único, preto e branco com dourado, do jeito que a Uber se apresenta. Dados fictícios, quatro meses, um agente.

![Visão geral: tickets, dias atendidos, TMA, status, CAR, Scout, pushback e PSAT, mais os tickets por dia e o TMA caindo mês a mês](11-dash-visao-geral.png)

**Visão geral.** Os números que eu olhava no fim do dia: quantos tickets, em quantos dias, quanto tempo por ticket. Encerrado na primeira resposta, aguardando resposta do passageiro, em aberto em outra área. CAR (ajuste de valor), Scout (revisão), pushback (o passageiro voltou) e elegíveis a PSAT. A linha do TMA por mês é o case em um gráfico: de 5 minutos pra menos de 1.

![Mapa de calor: dia da semana × hora, e o dia a dia do mês com tickets e TMA](12-dash-calor.png)

**Mapa de calor.** Quando os tickets chegam: terça a sábado, das 14h às 22h, com o pico no fim da tarde. Embaixo, o dia a dia do mês escolhido, com o TMA de cada dia.

![Problemas: por grupo, top 10 siglas e o catálogo da base B com desfecho e marcadores](13-dash-problemas.png)

**Problemas.** O que o passageiro pede, por grupo (Overpaid, taxa de limpeza, taxa de cancelamento, transferência de LOB, pushback) e por sigla da base B. O catálogo mostra, pra cada sigla, o desfecho esperado e os marcadores (CAR, pushback, PSAT).

![Status e TMA: status por mês, marcadores por mês e a distribuição do tempo por ticket](14-dash-status.png)

**Status e TMA.** Como os tickets terminam, mês a mês, e a distribuição do tempo por ticket: a curva anda pra esquerda conforme o fluxo de perguntas vira log.

[Abrir o dashboard](dashboards/cambio.html)

## A versão para testar

O arquivo da empresa ficou na empresa. O que está aqui é uma reconstrução com dados fictícios: 27 tipos de problema, 897 atendimentos num mês, links placeholder. A Home e a base são as mesmas; o Cash 1 ganhou a árvore completa, navegável (responde Sim/Não e a próxima pergunta aparece sozinha, até a resolução), e a aba Analysis, que na época ficou na ideia, está feita: atendimentos por dia e por status, mapa de calor hora × dia, flags e tipos de problema. O mapa de calor só tem movimento entre 0h e 5h porque era isso que eu fazia.

![Home reconstruída: log](04-nova-home.png)

![Home reconstruída: o que a base devolve e o status](05-nova-home-base.png)

![Home reconstruída: ID do ticket, sigla e flags](06-nova-home-flags.png)

![Cash 1 reconstruído: o fluxo responde e chega na resolução](07-nova-cash1.png)

![Analysis: indicadores do mês e atendimentos por dia](08-nova-analysis-kpis.png)

![Analysis: mapa de calor hora × dia, só madrugada](09-nova-analysis-heatmap.png)

![Analysis: atendimentos por tipo de problema](10-nova-analysis-tipos.png)

[Baixar a planilha (xlsx)](cases/ridercash/Rider_Cash.xlsx)

---

*Reconstrução com dados fictícios. Nomes de fluxos, siglas e procedimentos reproduzem a estrutura da planilha original, não o conteúdo da empresa.*
`;

// English version (shown when the visitor picks EN-US).
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["ridercash"] = `
## The problem

At Foundever, on the Uber Project, I supported riders with payment issues, mostly cash: change not returned, overcharge, disputed cleaning or cancellation fee, a trip left pending on the account. Every ticket required a long check before replying: open the trip, open the rider's profile, open the driver's, check each one's tags (already asked for a refund? how many times this year? does the driver have incidents of the same kind?), find the right procedure in the knowledge base, and only then write the reply, the tagging label and the log. About 10 minutes per contact, on the overnight shift.

## What I did

I built the spreadsheet during training, over one or two months, splitting my time between handling tickets and testing. It was born in two generations, and both stayed in the same file.

**Cash 1, the question tree.** The first version was a yes/no flow, if/else style: question 1 is always "did the customer pay in cash?"; the answer leads to the next question (does it show as paid? any flag on the account? already refunded this month? is the amount above my authority? is there a receipt? did the route deviate?) until it reaches a resolution. The resolution delivers the tagging, the customer summary, the contact summary and the procedure link. There were also Cash 2 (digital payment on a trip marked as cash) and Cash 3 (other payment methods). It was the pre-check: beginners followed the questions; those who knew the system went straight ahead.

![Original Cash 1: questions, yes/no and the resolution with ready texts](03-cash1-original.png)

**Home, the log.** Once the flow was in my head, the pre-check in the spreadsheet became a crutch. The second version is a record, one row per contact: date, time, ticket link, the issue picked from a dropdown (with its code) and a note. From the issue, the base fills in the rest: contact type (the tagging label), knowledge base link, procedure step, what I had to do myself (refund, ask for a receipt, close), note for the rider, note for the driver, reply to the customer and the ticket status (Closed, resolved by me; Awaiting reply, something needed from the customer; Open, goes to another team). From the link, the spreadsheet extracts the ticket ID; from the note and the base it sets the flags: Scout (automation), CAR (internal procedure), pushback and eligibility for the satisfaction survey. If the rider was an Uber One member, the reply changed.

![Original Home: one contact per row, blue is what I fill in, orange is what the base returns](01-home-log.png)

![Original Home: ticket status, ID extracted from the link, code and flags](02-home-status-flags.png)

The spreadsheet did not keep history from one day to the next, so at the end of the shift I copied the page as text and extracted what I needed with filters and counts, to have my own metrics, which at the time only supervisors could see. Crude, and it worked.

## Result

- With the tree alone (Cash 1), average handling time dropped from about 10 minutes to 2 to 5.
- With Home, it dropped to under 1 minute and never went back: about 15 seconds of checking in the system, 15 of copy and paste.
- Used by me for four months, in training and in production, until the overnight shift was closed.
- It was the second time I solved the same problem (the first was Meus Voos, on the Smiles Project), and the solution came out leaner: fewer tabs, one row per contact, and the log already fit to become metrics.

## Dashboard

The one-row-per-ticket log is the base; the dashboard is the reading. The working version was the mini-panel in the spreadsheet's Analysis tab. For the portfolio I rebuilt it in HTML, CSS and JavaScript, single file, black and white with gold, the way Uber presents itself. Fictitious data, four months, one agent.

![Overview: tickets, days worked, AHT, status, CAR, Scout, pushback and PSAT, plus tickets per day and AHT falling month by month](11-dash-visao-geral.png)

**Overview.** The numbers I looked at at the end of the day: how many tickets, over how many days, how long per ticket. Closed on first reply, awaiting the rider, open in another area. CAR (fare adjustment), Scout (review), pushback (the rider wrote back) and PSAT-eligible. The AHT-by-month line is the case in one chart: from 5 minutes to under 1.

![Heat map: weekday × hour, and the day-by-day of the month with tickets and AHT](12-dash-calor.png)

**Heat map.** When the tickets come in: Tuesday to Saturday, 2 pm to 10 pm, peaking late afternoon. Below, the day by day of the chosen month, with each day's AHT.

![Issues: by group, top 10 codes and the base B catalog with outcome and flags](13-dash-problemas.png)

**Issues.** What the rider asks for, by group (Overpaid, cleaning fee, cancellation fee, LOB transfer, pushback) and by base B code. The catalog shows, for each code, the expected outcome and the flags (CAR, pushback, PSAT).

![Status and AHT: status by month, flags by month and the distribution of time per ticket](14-dash-status.png)

**Status and AHT.** How tickets end, month by month, and the distribution of time per ticket: the curve moves left as the question flow becomes a log.

[Open the dashboard](dashboards/cambio.html)

## The version you can try

The company's file stayed at the company. What is here is a rebuild with fictitious data: 27 issue types, 897 contacts in a month, placeholder links. Home and the base are the same; Cash 1 got the full, navigable tree (answer yes/no and the next question appears by itself, up to the resolution), and the Analysis tab, which at the time stayed an idea, is done: contacts by day and by status, hour × day heat map, flags and issue types. The heat map only has activity between 0h and 5h because that is what I did. The interface is in Portuguese.

![Rebuilt Home: log](04-nova-home.png)

![Rebuilt Home: what the base returns and the status](05-nova-home-base.png)

![Rebuilt Home: ticket ID, code and flags](06-nova-home-flags.png)

![Rebuilt Cash 1: the flow answers and reaches the resolution](07-nova-cash1.png)

![Analysis: month indicators and contacts by day](08-nova-analysis-kpis.png)

![Analysis: hour × day heat map, overnight only](09-nova-analysis-heatmap.png)

![Analysis: contacts by issue type](10-nova-analysis-tipos.png)

[Download the spreadsheet (xlsx)](cases/ridercash/Rider_Cash.xlsx)

---

*Rebuild with fictitious data. Flow names, codes and procedures reproduce the structure of the original spreadsheet, not the company's content.*
`;
