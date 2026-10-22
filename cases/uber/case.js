// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["uber"] = `
## Problema

O procedimento de consulta era uma tabela longa. A cada atendimento, o agente consultava o perfil do cliente e do motorista, subia e descia a tabela, abria e fechava guias e voltava ao atendimento para checar condições (por exemplo, se havia uma tag que impedia reembolso). Uma consulta levava cerca de 10 minutos.

## Ação

- **Aba de registro**: o agente seleciona o problema numa lista e a planilha devolve a etapa do procedimento, o link da base de conhecimento, as observações para usuário e motorista e a resposta pronta para o cliente. Há também um controle do status do ticket.
- **Aba de checagem**: perguntas de Sim/Não de acordo com o que o cliente relata. Com as respostas, a planilha entrega a etiquetação, o resumo do cliente, o resumo do atendimento e o link do problema.
- **Lógica de dependência com FILTER**: a lista de problemas só é liberada depois do preenchimento do nome do cliente, e as opções de resposta só aparecem depois da seleção das perguntas anteriores. Isso evita seleções fora de ordem.

## Resultado

- Consulta de cerca de 10 minutos para cerca de 30 segundos para quem domina o fluxo, e de 2 a 4 minutos para novatos.
- Respostas ao cliente padronizadas e menos variação entre atendimentos.
- Menos risco de erro, com as perguntas e as respostas em um só lugar.

*Telas em preparação.*

`;
