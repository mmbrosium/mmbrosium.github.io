// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["pontuais"] = `
## O que é isto

Nem todo projeto vira rotina. Alguns nascem pra resolver uma necessidade específica, são usados uma vez ou por uma temporada, e ficam guardados: é o hangar. Aqui estão três deles, reconstruídos com a equipe fictícia da Minimop numa planilha só, uma aba por projeto, pra download no fim.

## Diário de bordo

![Diário de Bordo: uma linha por ocorrência, com duração, impacto e ação; resumo por tipo no canto](01-diario-de-bordo.png)

Um registro dos impactos operacionais do dia: sistema fora, fila represada, campanha inesperada, mudança de procedimento. Uma linha por ocorrência, com data, hora, frente afetada, descrição e desfecho. O objetivo era simples: quando o indicador do dia saísse estranho, ter onde olhar pra saber o que aconteceu, em vez de depender da memória de quem estava de plantão.

## Controles de acesso

![Controle de Acessos: Amadeus, Sabre e LinkedIn Learning por agente, pendências contadas e chamado aberto](02-controle-de-acessos.png)

Três planilhas com a mesma pergunta: quem tem acesso a quê, e quem precisa abrir chamado.

- **Amadeus**: quem tinha o sistema de reservas internacionais liberado, quem estava com acesso pendente, quem precisava de chamado.
- **Sabre (Interact RES)**: a mesma conferência pro sistema de reservas nacionais.
- **LinkedIn Learning**: o programa de cursos da empresa, vinculado ao LinkedIn pessoal de cada agente. Controle de quem ativou, quem não, e quem tinha trilha pendente.

Nada sofisticado: cruzamento da lista do sistema com o MOP, status por pessoa, filtro por supervisor. O valor estava em ter a resposta pronta quando a pergunta chegava.

## Base de KPI

![Base KPI: dimensões à esquerda, métricas à direita, e uma leitura por supervisor no mês escolhido](03-base-kpi.png)

A coordenação me passou dois modelos de KPI de outras operações da empresa como referência, com a ideia de transformar a operação inteira em indicadores padronizados num só lugar. Cheguei a montar uma base neutra, sem marca, com a estrutura: dimensões (coordenação, supervisor, frente, segmento, turno), métricas (PSAT, DSAT, ABS, TMA, conversão, retenção) e período. O projeto não foi adiante, mas a estrutura é a mesma que aparece nos dashboards deste portfólio: a base em linhas, a leitura em cima.

## Esteiras anuais

Diferentes da esteira de vendas: uma consolidação por mês, do ano inteiro, pra virar dashboard um dia. Ficou na primeira versão.

## Planilha pra download

As três abas num arquivo: Diário de Bordo, Controle de Acessos e Base KPI. Dados fictícios, fórmulas abertas.

[Baixar a planilha (xlsx)](cases/pontuais/Hangar.xlsx)
`;

// English version (shown when the visitor picks EN-US).
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["pontuais"] = `
## What this is

Not every project becomes a routine. Some are born to solve one specific need, get used once or for a season, and are put away: that is the hangar. Here are three of them, rebuilt with Minimop's fictitious team in a single workbook, one tab per project, for download at the end.

## Operations logbook

![Logbook: one row per event, with duration, impact and action; summary by type in the corner](01-diario-de-bordo.png)

A record of the day's operational impacts: system down, queue backed up, unexpected campaign, procedure change. One row per event, with date, time, channel affected, description and outcome. The goal was simple: when the day's indicator came out odd, have somewhere to look to know what happened, instead of depending on the memory of whoever was on duty.

## Access controls

![Access control: Amadeus, Sabre and LinkedIn Learning per agent, pending items counted and open ticket](02-controle-de-acessos.png)

Three spreadsheets with the same question: who has access to what, and who needs to open a ticket.

- **Amadeus**: who had the international booking system enabled, who had access pending, who needed a ticket.
- **Sabre (Interact RES)**: the same check for the domestic booking system.
- **LinkedIn Learning**: the company's course program, linked to each agent's personal LinkedIn. Control of who had activated it, who had not, and who had a pending track.

Nothing sophisticated: a match between the system's list and the staff base (MOP), status per person, filter by supervisor. The value was in having the answer ready when the question came.

## KPI base

![KPI base: dimensions on the left, metrics on the right, and a per-supervisor reading for the chosen month](03-base-kpi.png)

Coordination handed me two KPI models from other operations in the company as a reference, with the idea of turning the whole operation into standardized indicators in one place. I got as far as a neutral, unbranded base with the structure: dimensions (coordination, supervisor, channel, segment, shift), metrics (PSAT, DSAT, absenteeism, AHT, conversion, retention) and period. The project did not move forward, but the structure is the same one that appears in this portfolio's dashboards: the base as rows, the reading on top.

## Yearly pipelines

Different from the sales pipeline: a month-by-month consolidation of the whole year, to become a dashboard one day. It stayed at the first version.

## Spreadsheet for download

The three tabs in one file: Logbook, Access Control and KPI Base. Fictitious data, open formulas.

[Download the spreadsheet (xlsx)](cases/pontuais/Hangar.xlsx)
`;
