// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["esteira"] = `
## Contexto

A mesma operação de atendimento do case PSAT (Chat e Voz, duas coordenações, oito supervisões, ~150 agentes) vende adesões e upgrades de plano durante o atendimento e, nos pedidos de cancelamento, tenta reter o cliente. A coordenação precisava acompanhar, por dia e por pessoa: quantas vendas e upgrades saíram, quanto faltava para a meta, quanto do cancelamento estava sendo revertido, e se o mês ia fechar.

Fui o responsável pela esteira inteira: bases, regra de meta, projeção e as visões por supervisor e por agente.

![Painel: indicadores do mês, ritmo, projeção de fechamento e o dia a dia](01-painel-kpis.png)

## As métricas

- **Consolidado** = vendas (adesões) + upgrades.
- **Conversão** = vendas ÷ atendimentos.
- **Retenção** = retidos ÷ (retidos + cancelados). Retido inclui quem ficou no mesmo plano e quem ficou num plano menor (downgrade). O downgrade aparece separado, porque retenção alta sustentada por downgrade é receita caindo.
- **Ritmo** = vendas até D-1 ÷ meta acumulada até D-1. Diz se o mês está no passo sem esperar o fim dele. No dia 19, o atingimento bruto mostrava 67% e assustava; o ritmo mostrava 117%.
- **Projeção de fechamento** = realizado ÷ dias decorridos × dias do mês.
- **Esperado pelo volume** = atendimentos do dia × conversão média do mês. A linha "real − esperado" separa "vendeu pouco porque veio pouca gente" de "vendeu pouco com muita gente".

## A meta é um parâmetro, não um número solto

Uma aba de metas guarda a meta mensal de cada supervisor (vendas e upgrades) e o peso de cada dia da semana. A meta diária da operação é a meta mensal distribuída pelos dias proporcionalmente ao peso: fim de semana pesa menos. Tudo que é meta, atingimento, ritmo e projeção deriva daí. Mudou a meta, mudou o painel inteiro.

![Metas e parâmetros: meta por supervisor e peso por dia da semana](08-metas.png)

## Como foi construído

Duas bases: atendimentos por agente e dia (chamadas, cancelamentos, retenções, downgrades) e um registro por movimento (venda, upgrade, downgrade, retenção, com o plano). Um calendário gera os dias do mês, o dia da semana e a meta do dia. Uma camada de agregação lê as bases uma vez, por dia, por supervisor e por agente; as visões leem dela. Um seletor de mês controla todas as abas; a base cobre doze meses.

Em cima disso, três visões:

- **Painel**: dez indicadores, a faixa dos 30 dias com os dias futuros em branco, a tabela de supervisores com meta, realizado, projeção e atingimento para vendas, upgrades e consolidado, e o top 10 de agentes.

![Painel: por supervisor e top 10 agentes](02-painel-supervisores-top10.png)

- **Dia a dia**: atendidas, meta, vendas, atingimento, conversão, esperado, upgrades, retidos (e quantos com downgrade), cancelamentos e retenção, com a linha de total.

![Resultado dia a dia](03-dia-a-dia.png)

![Resultado dia a dia: final do mês e totais](04-dia-a-dia-total.png)

- **Supervisor**: o supervisor escolhe o nome, vê os indicadores do time, o dia a dia do time, os agentes do mês ordenados por consolidado, e os agentes num dia escolhido.

![Performance comercial por supervisor: indicadores e dia a dia do time](05-supervisor-time.png)

![Agentes do supervisor no mês](06-supervisor-agentes-mes.png)

![Agentes do supervisor em um dia](07-supervisor-agentes-dia.png)

## Resultado

- Visão consolidada de vendas, cancelamentos e retenções por agente, supervisão e coordenação, usada como base do incentivo coletivo: a venda de um agente beneficiava a equipe.
- Metas, atingimento e projeção numa regra só, auditável na aba de metas.
- Construída em paralelo a outras demandas da coordenação.

## Dashboard

A esteira ganhou um dashboard com os doze meses da base e filtros combináveis (período, coordenação, supervisor, frente, tipo de cliente e turno). Seis seções: visão geral, vendas × meta, conversão e retenção, dia a dia, equipe e detalhe. A seção Equipe desce de coordenação para supervisor e para agente, em três colunas. É um arquivo HTML único, com os dados embutidos, que abre sem internet.

![Dashboard: visão geral](09-dashboard-visao-geral.png)

![Dashboard: equipe, de coordenação a agente](10-dashboard-equipe.png)

[Abrir o dashboard](dashboards/esteira.html)

---

*As telas usam dados fictícios gerados para o portfólio, com a mesma equipe fictícia do case PSAT e a mesma estrutura da esteira original.*
`;
