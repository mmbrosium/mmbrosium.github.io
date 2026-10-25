// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["abs"] = `
## Problema

A conferência diária de presença (aderência) era o procedimento mais demorado da operação, de 1 a 2 horas. Exigia dois sistemas de registro (Zendesk e CallFlex) e várias etapas manuais: extrair o relatório, cruzar com a base de colaboradores (MOP), checar nome a nome se a pessoa estava desligada ou de férias, cruzar com a planilha de abonos dos supervisores e copiar coluna por coluna para a planilha final.

## Ação

A primeira decisão foi de processo, não de planilha: **retirei a checagem no CallFlex**. Um atendimento registrado no Zendesk já comprova que o agente estava trabalhando, então o segundo sistema não acrescentava informação.

Depois, automatizei o resto:

- As duas limpezas de dados: o cruzamento entre Zendesk e MOP, e a identificação automática de desligados, férias, suspensos e ausências justificadas ou injustificadas.
- Consolidei os abonos de todos os supervisores numa aba auxiliar.
- Criei uma aba conversora: escolho dia e mês e as colunas saem prontas para alimentar o dashboard.
- Mantive a base bruta com o status de cada dia, o que preserva o histórico e permite auditoria.
- Acompanhei o preenchimento dos supervisores e escalei a coordenação quando havia atraso.
- Construí do zero um dashboard visual de aderência alimentado por essa base, no lugar de um dashboard antigo, lento e impreciso. Cobre Chat, Voz e o time de clientes Diamante e Ouro, com aderência por supervisão, coordenação, segmento, frente e agente, comparativo entre o mês atual e o anterior com filtro por data, faltas no mês frente à meta, presentes e volume de atendimentos e chamados.

## Resultado

- Conferência de 1 a 2 horas para 10 a 20 minutos por dia.
- Fim da checagem manual nome a nome.
- Histórico diário confiável e auditável.
- Projeto entregue em cerca de um mês, em paralelo a outras demandas da coordenação.

*Telas em preparação.*

`;

// English version (shown when the visitor picks EN-US).
window.CASE_MD_EN = window.CASE_MD_EN || {};
window.CASE_MD_EN["abs"] = `
## Problem

The daily attendance check (adherence) was the slowest procedure in the operation, 1 to 2 hours. It required two logging systems (Zendesk and CallFlex) and several manual steps: export the report, cross it with the staff base (MOP), check name by name whether the person had left or was on vacation, cross it with the supervisors' excused-absence sheet and copy column by column into the final spreadsheet.

## Action

The first decision was about process, not spreadsheets: **I removed the CallFlex check**. A contact logged in Zendesk already proves the agent was working, so the second system added no information.

Then I automated the rest:

- The two data cleanups: the match between Zendesk and MOP, and the automatic identification of leavers, vacations, suspensions and excused or unexcused absences.
- Consolidated all supervisors' excused absences in a helper tab.
- Built a converter tab: pick day and month and the columns come out ready to feed the dashboard.
- Kept the raw base with each day's status, which preserves history and allows auditing.
- Followed up on supervisors' input and escalated to coordination when it was late.
- Built from scratch a visual adherence dashboard fed by that base, replacing an old, slow and imprecise one. It covers Chat, Voice and the Diamond/Gold customer team, with adherence by supervision, coordination, segment, channel and agent, current vs. previous month with a date filter, absences in the month against target, present agents and contact and call volume.

## Result

- Check from 1–2 hours to 10–20 minutes a day.
- No more manual name-by-name checking.
- Reliable, auditable daily history.
- Delivered in about a month, alongside other coordination demands.

*Screens in preparation.*
`;
