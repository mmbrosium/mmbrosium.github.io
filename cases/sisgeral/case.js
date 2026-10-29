// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["sisgeral"] = `
## O que é

O SisGeral é um gerenciador de atendimento de SAC que roda num arquivo HTML, sem instalar nada, dentro das regras de um ambiente corporativo que bloqueia instalação e integração. Nasceu de um problema simples: no cancelamento de plano, escrever o registro tomava metade do atendimento, e o registro é praticamente o mesmo em todo cancelamento. Está na versão 3.24, depois de mais de cinquenta iterações, e é o projeto mais ambicioso que já fiz.

Seis abas: Novo Atendimento, Histórico & Arquivo, Calendário & Clima, Painel de Produtividade, ABC & VDN e Versões. As duas últimas são mais de consulta; as quatro primeiras são a rotina. Tema claro e escuro.

## Novo Atendimento

É a tela em que se passa o dia. Abre zerada, exceto o nome do atendente, que já vem preenchido.

![Novo Atendimento: identificação à esquerda, catálogo de procedimentos embaixo, prontuário compilado à direita](01-novo-atendimento.png)

**Identificação.** Nome do beneficiário é obrigatório, sempre. Protocolo é pra quando o caso vira chamado interno (o boleto foi pago, passou o prazo de baixa, o sistema ainda mostra em aberto e o cliente tem o comprovante). Pedido ou guia, quando houver. Os campos de telefone e e-mail também servem pra anotar o CPF quando a URA não traz os dados, porque a validação de quatro dados é obrigatória antes de qualquer coisa (LGPD). "Último registro" abre o que foi registrado por último, pro caso de ter esquecido de copiar.

**Catálogo de procedimentos.** Uma linha por procedimento, com etiqueta de categoria e grupo, busca por nome, categoria, grupo ou conteúdo, filtro por grupo e opção de ver os desativados. Marcou a caixa, o texto do procedimento entra no prontuário. Se o caso não está no catálogo, dá pra escrever à mão.

![Passando o mouse, o procedimento mostra o texto que vai pro prontuário](02-catalogo-hover.png)

![Os três pontos de cada linha: editar ou excluir o procedimento](03-catalogo-menu.png)

![O menu do catálogo: novo procedimento, ou ordenar por procedimento, categoria ou grupo](04-menu-novo.png)

**Novo procedimento.** Título, categoria (comportamento), grupo (organização, opcional), texto base (o que vai pro prontuário), orientação interna (o que confirmar antes de encerrar, o que informar ao beneficiário: não vai pro prontuário), até cinco links de referência e as variáveis que o sistema troca sozinho: {bnf}, {pedido}, {guia}, {protocolo}, {atendente}. Boleto é o que mais cai; segunda via de boleto não precisa de procedimento novo, é escolher o que existe e o nome do beneficiário entra sozinho.

![Modal de novo procedimento, com as variáveis à direita pra clicar ou arrastar](05-novo-procedimento.png)

**Prontuário.** O texto compilado é o que vai pro sistema da empresa. Embaixo, três botões: ✕ limpa tudo e volta à frase padrão ("Beneficiário(a) [nome] entrou em contato"), 📋 copia o prontuário inteiro, ✓ registra o atendimento e manda pro histórico. Quando o procedimento tem orientação interna, ela aparece num bloco de apoio abaixo do prontuário, de uso interno, com o artigo a verbalizar (RN 561, no cancelamento) e o link da base de conhecimento.

![Prontuário compilado e o bloco "Apoio ao atendimento", que não vai pro registro](06-prontuario-apoio.png)

Toda ação dá retorno visual: copiou, registrou, apagou, limpou. Nada acontece em silêncio.

![Os avisos no canto: aqui, três "campos limpos" seguidos](07-toasts.png)

## Histórico & Arquivo

Tudo que foi registrado, com filtros de ano, mês, dia e semana. Abre na semana atual por padrão, então numa segunda-feira parece vazio: é só trocar a semana. Clicar numa linha abre a gaveta com o prontuário completo, pra ver ou editar. Dá pra selecionar linhas, exportar só aquelas, apagar as selecionadas ou apagar tudo.

![Histórico filtrado na 3ª semana de outubro: 142 atendimentos, com data e hora, beneficiário, protocolo, pedido, atendente, procedimento, detalhes e excluir](08-historico.png)

Importar e exportar são em TXT, num formato que o próprio sistema lê de volta: "[CHAMADO #1]", data e hora, beneficiário, protocolo, guia, atendente, procedimentos e o prontuário final. É o arquivo que alimenta a base e o backup de tudo.

![A exportação em TXT: um bloco por chamado](09-exportacao-txt.png)

O ponto desta aba: registrar cada atendimento alimenta o painel. Dá pra usar como bloco de notas, mas o valor está em ter a própria visão geral sem depender do supervisor.

## Calendário & Clima

Começou porque o calendário do sistema da empresa às vezes não carrega. Virou mais que isso.

![Calendário do mês com feriados, previsão nos dias, clima atual por cidade e o seletor de período](10-calendario.png)

Clique em duas datas e o seletor mostra o período, os dias corridos e os dias úteis (sem sábado, domingo e feriado), com botões pra copiar corridos, úteis, ambos ou o dia atual. Serve, por exemplo, pra saber há quanto tempo o beneficiário tem o plano. Clique no mês e ele abre os doze meses do ano; clique no ano e ele abre 35 anos. "Fechar" volta pra hoje. O clima é por cidade, Curitiba por padrão, com previsão nos dias da semana e uma estimativa da semana.

![Seletor de meses do ano](11-seletor-meses.png)

![Seletor de anos, 2009 a 2043](12-seletor-anos.png)

## Painel de Produtividade

O grandioso painel. Filtros à esquerda (ano, mês, semana, dia, com atalhos "hoje" e "mês inteiro"), janelas à esquerda também (visão diária, mensal, top procedimentos, evolução diária, fluxo por horário, semana × dia, horário × dia), e as duas gavetas fecham pra ficar mais limpo.

![Painel de Produtividade em outubro: 312 atendimentos no mês, 24 por dia, pico às 17h; filtros e janelas à esquerda, procedimentos mais acionados, fluxo por horário e evolução diária](13-painel.png)

![Os cartões: ano, mês, filtrado, validados, manuais, média por dia, média por semana, maior e menor dia, pico de horário, hora mais fraca](14-metricas.png)

**As métricas.** Em outubro: 312 atendimentos no mês, 236 manuais, média de 24 por dia e 168 por semana, maior dia 21 (34), menor dia 9 (12), pico às 17h (58) e hora mais fraca às 8h (5). Ano e mês são os totais. Filtrado é o recorte atual (o dia escolhido, por exemplo). Validados são os atendimentos que passaram pela validação de quatro dados. Manuais são os registrados sem usar o catálogo, caso a caso. Média por dia e por semana, o maior e o menor dia do mês, o pico de horário e a hora mais fraca.

![Os filtros do painel, com os atalhos "hoje" e "mês inteiro"](15-filtros.png)

**Procedimentos mais acionados.** O que mais aparece no mês: indicação de rede credenciada, transferência (VDN) e autorização de guia dividem o topo. É o que diz onde vale caprichar no catálogo.

![Procedimentos mais acionados em outubro](23-top-procedimentos.png)

**Evolução diária.** Um atendimento por barra por dia, com o dia da semana e a semana do mês embaixo. Clicar numa barra filtra o dia; clicar de novo volta ao mês.

![Evolução diária: barras por dia, com dia da semana e semana do mês](16-evolucao-diaria.png)

**Fluxo por horário.** Quantos atendimentos em cada hora do dia, das 7h às 19h.

![Fluxo por horário](17-fluxo-horario.png)

**Semana × dia e horário × dia.** Dois mapas de calor do mês: qual dia da semana concentra mais atendimento em cada semana, e em que hora de que dia o fluxo é maior. O segundo é o fluxo por horário aberto por dia da semana, bem mais fácil de ler.

![Semana × dia da semana, com o pico marcado](18-semana-dia.png)

![Horário × dia da semana, com o pico marcado](19-horario-dia.png)

## ABC & VDN

Duas listas de consulta. O catálogo ABC são os procedimentos odontológicos com código e descrição (cirurgia, dentística, endodontia, periodontia, prótese, urgência). O diretório VDN são os ramais pra transferência: beneficiário dental, médico, reembolso, ação judicial, SAC, corretor, vendas, cada um com VDN, telefone e horário. Muito atendimento não é do setor (empresarial, PME, financeiro), e transferir certo é parte do trabalho.

![Catálogo ABC e diretório VDN, com busca e ordenação](20-abc-vdn.png)

## Cabeçalho, faixa e configurações

Três coisas ficam fixas no topo, em qualquer aba. O cabeçalho mostra dia, data e hora em tempo real, o clima da cidade configurada no calendário e quantos atendimentos foram registrados hoje; ao lado, o botão de tema (sol ou lua) e a engrenagem das configurações.

![Cabeçalho: data e hora, clima, atendimentos do dia, tema e configurações](25-cabecalho.png)

A faixa logo abaixo roda os indicadores do mês, lidos do próprio histórico: total, procedimento mais acionado, maior e menor dia de fluxo, pico de horário, hora mais fraca e tamanho do catálogo. É o painel em uma linha, sem sair da tela de atendimento.

![A faixa de indicadores do mês](24-faixa.png)

Nas configurações: nome padrão do atendente, retenção do histórico em dias ou nunca apagar, tema padrão, exportar e importar backup completo em JSON, uso do armazenamento local, desfazer a última exclusão e **apagar tudo**, o reset que devolve o sistema como veio no arquivo. O histórico de versões fica dentro do sistema: o que mudou, quando, em que versão.

![Configurações do sistema](26-configuracoes.png)

![O mesmo sistema no tema claro, com a aba Versões ao fundo](22-configuracoes.png)

![Histórico de versões](21-versoes.png)

## Como foi feito

HTML, CSS e JavaScript puros, num arquivo que abre com duplo clique. Os dados ficam no armazenamento local do navegador; o backup sai em JSON ou TXT. Node.js só pra testes. A restrição do ambiente definiu o projeto: sem servidor, sem instalação, sem integração, e mesmo assim com catálogo, histórico, calendário e painel.

## Resultado

- Registro de cancelamento de texto digitado pra um clique.
- Atendimento de 5 a 10 minutos pra menos de 5.
- Histórico próprio, exportável, com painel de produtividade sem depender de ninguém.
- Mais de cinquenta iterações até a v3.24, com histórico de versões dentro do próprio sistema.
`;

// English version (shown when the visitor picks EN-US).
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["sisgeral"] = `
## What it is

SisGeral is a customer-service contact manager that runs in a single HTML file, with nothing to install, inside the rules of a corporate environment that blocks installs and integrations. It was born from a simple problem: on plan cancellations, writing the log took half the contact, and the log is practically the same in every cancellation. It is on version 3.24, after more than fifty iterations, and it is the most ambitious project I have built.

Six tabs: New Contact, History & Archive, Calendar & Weather, Productivity Panel, ABC & VDN and Versions. The last two are reference; the first four are the routine. Light and dark theme.

## New Contact

The screen where the day happens. Opens blank, except for the agent's name, already filled in.

![New Contact: identification on the left, procedure catalog below, compiled record on the right](01-novo-atendimento.png)

**Identification.** The member's name is mandatory, always. Protocol is for when the case becomes an internal ticket (the bill was paid, the clearing deadline passed, the system still shows it open and the customer has the receipt). Order or guide number, when there is one. The phone and e-mail fields also serve to note the CPF when the IVR does not bring the data, because validating four data points is mandatory before anything (LGPD). "Last record" opens what was last logged, in case you forgot to copy it.

**Procedure catalog.** One row per procedure, with category and group tags, search by name, category, group or content, group filter and an option to show disabled ones. Tick the box and the procedure's text goes into the record. If the case is not in the catalog, you can type by hand.

![Hovering a procedure shows the text that goes into the record](02-catalogo-hover.png)

![The three dots on each row: edit or delete the procedure](03-catalogo-menu.png)

![The catalog menu: new procedure, or sort by procedure, category or group](04-menu-novo.png)

**New procedure.** Title, category (behavior), group (organization, optional), base text (what goes into the record), internal guidance (what to confirm before closing, what to tell the member: does not go into the record), up to five reference links and the variables the system fills on its own: {bnf}, {pedido}, {guia}, {protocolo}, {atendente}. Bills are the most common case; a duplicate bill needs no new procedure, just pick the existing one and the member's name goes in by itself.

![New procedure modal, with the variables on the right to click or drag](05-novo-procedimento.png)

**Record.** The compiled text is what goes into the company's system. Below it, three buttons: ✕ clears everything back to the default line ("Member [name] got in touch"), 📋 copies the whole record, ✓ logs the contact and sends it to history. When the procedure has internal guidance, it appears in a support block under the record, for internal use, with the article to read out (RN 561, on cancellations) and the knowledge-base link.

![Compiled record and the "Contact support" block, which does not go into the log](06-prontuario-apoio.png)

Every action gives visual feedback: copied, logged, deleted, cleared. Nothing happens silently.

![The toasts in the corner: here, three "fields cleared" in a row](07-toasts.png)

## History & Archive

Everything logged, with year, month, day and week filters. It opens on the current week by default, so on a Monday it looks empty: just change the week. Clicking a row opens the drawer with the full record, to view or edit. You can select rows, export only those, delete the selected ones or delete all.

![History filtered to the 3rd week of October: 142 contacts, with date and time, member, protocol, order, agent, procedure, details and delete](08-historico.png)

Import and export are TXT, in a format the system itself reads back: "[CHAMADO #1]", date and time, member, protocol, guide, agent, procedures and the final record. It is the file that feeds the base and the backup of everything.

![The TXT export: one block per ticket](09-exportacao-txt.png)

The point of this tab: logging every contact feeds the panel. You can use it as a notepad, but the value is in having your own overview without depending on the supervisor.

## Calendar & Weather

It started because the company system's calendar sometimes does not load. It became more than that.

![Month calendar with holidays, forecast on the days, current weather by city and the period selector](10-calendario.png)

Click two dates and the selector shows the period, calendar days and business days (no Saturday, Sunday or holiday), with buttons to copy calendar days, business days, both or today. Useful, for instance, to know how long the member has had the plan. Click the month and it opens the twelve months of the year; click the year and it opens 35 years. "Close" goes back to today. Weather is by city, Curitiba by default, with a forecast on the weekdays and a week estimate.

![Month selector](11-seletor-meses.png)

![Year selector, 2009 to 2043](12-seletor-anos.png)

## Productivity Panel

The big one. Filters on the left (year, month, week, day, with "today" and "whole month" shortcuts), windows on the left too (daily view, monthly view, top procedures, daily evolution, flow by hour, week × day, hour × day), and both drawers collapse to keep it clean.

![Productivity Panel in October: 312 contacts in the month, 24 a day, peak at 5 pm; filters and windows on the left, most used procedures, flow by hour and daily evolution](13-painel.png)

![The cards: year, month, filtered, validated, manual, average per day, average per week, best and worst day, peak hour, weakest hour](14-metricas.png)

**The metrics.** In October: 312 contacts in the month, 236 manual, an average of 24 a day and 168 a week, busiest day the 21st (34), quietest the 9th (12), peak at 5 pm (58) and weakest hour at 8 am (5). Year and month are totals. Filtered is the current slice (the chosen day, for instance). Validated are the contacts that passed the four-data validation. Manual are the ones logged without the catalog, case by case. Average per day and per week, the busiest and quietest day of the month, the peak hour and the weakest hour.

![The panel filters, with the "today" and "whole month" shortcuts](15-filtros.png)

**Most used procedures.** What shows up most in the month: network referrals, transfers (VDN) and guide authorizations share the top. It says where the catalog is worth polishing.

![Most used procedures in October](23-top-procedimentos.png)

**Daily evolution.** One bar per day, with the weekday and the week of the month underneath. Clicking a bar filters that day; clicking again goes back to the month.

![Daily evolution: bars per day, with weekday and week of the month](16-evolucao-diaria.png)

**Flow by hour.** How many contacts in each hour of the day, from 7 am to 7 pm.

![Flow by hour](17-fluxo-horario.png)

**Week × day and hour × day.** Two heat maps of the month: which weekday concentrates the most contacts in each week, and at what hour of which day the flow is highest. The second one is the flow by hour opened up by weekday, much easier to read.

![Week × weekday, with the peak marked](18-semana-dia.png)

![Hour × weekday, with the peak marked](19-horario-dia.png)

## ABC & VDN

Two reference lists. The ABC catalog is the dental procedures with code and description (surgery, restorative, endodontics, periodontics, prosthetics, urgent care). The VDN directory is the extensions for transfers: dental member, medical, reimbursement, legal, SAC, broker, sales, each with VDN, phone and hours. Many contacts are not for this team (corporate, SME, finance), and transferring correctly is part of the job.

![ABC catalog and VDN directory, with search and sorting](20-abc-vdn.png)

## Header, ticker and settings

Three things stay fixed at the top, on every tab. The header shows weekday, date and time in real time, the weather for the city set in the calendar and how many contacts were logged today; next to it, the theme button (sun or moon) and the settings gear.

![Header: date and time, weather, today's contacts, theme and settings](25-cabecalho.png)

The ticker right below scrolls the month's indicators, read from the history itself: total, most used procedure, busiest and slowest day, peak hour, weakest hour and catalog size. It is the panel in one line, without leaving the contact screen.

![The month's ticker](24-faixa.png)

In settings: default agent name, history retention in days or never delete, default theme, export and import a full JSON backup, local storage usage, undo the last delete and **delete all**, the reset that returns the system to how it came in the file. The version history lives inside the system: what changed, when, in which version.

![System settings](26-configuracoes.png)

![The same system in the light theme, with the Versions tab behind](22-configuracoes.png)

![Version history](21-versoes.png)

## How it was built

Plain HTML, CSS and JavaScript, in a file that opens with a double click. Data lives in the browser's local storage; backup goes out as JSON or TXT. Node.js only for tests. The environment's constraint defined the project: no server, no install, no integration, and still a catalog, history, calendar and panel.

## Result

- Cancellation log from typed text to one click.
- Contact from 5–10 minutes to under 5.
- Own history, exportable, with a productivity panel that depends on no one.
- More than fifty iterations up to v3.24, with the version history inside the system itself.
`;
