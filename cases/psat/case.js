// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["psat"] = `
## Contexto

Operação de atendimento ao cliente (Chat e Voz) com mais de 80 mil atendimentos por mês, dividida em duas coordenações e oito supervisões. A coordenação precisava saber quem estava sendo bem avaliado e quem não, por agente, supervisor e coordenação, acompanhando a evolução dia a dia. Fui o responsável pela definição da métrica, pela estrutura da base e pela construção das visões.

![Visão geral: PSAT por supervisão, um mês inteiro em mapa de calor](01-visao-geral-supervisao.png)

## A métrica

A escala de avaliação vai de Péssimo a Ótimo, e só Bom e Ótimo contam como positivo.

- **PSAT** = (Ótimo + Bom) ÷ avaliações respondidas.
- **DSAT** = (Ruim + Péssimo) ÷ avaliações respondidas. A mesma lógica invertida: quanto maior, pior.
- Regular não entra em nenhum dos dois.
- Dia sem avaliação fica **em branco, não zero**, para não distorcer a média.

Exemplo: 5 atendimentos, 3 avaliados (2 ótimos e 1 regular) → PSAT de 2/3.

## Como foi construído

A base bruta tem um atendimento por linha. Em vez de cada visão consultar a base inteira, criei uma **camada de agregação**: uma aba que lê a base uma única vez e guarda, por agente e por dia do mês selecionado, o número de respondentes, de positivas e as contagens de cada nota. Todas as visões leem dessa camada, que tem 150 linhas, e não da base, que tem centenas de milhares. Um seletor de mês controla todas as abas.

![Camada de agregação: totais do mês por agente, lidos uma vez da base](08-agg-totais.png)

Em cima dela, cinco visões:

- **Visão geral** para coordenação: PSAT por supervisão, por coordenação (geral, Voz, Chat, Ouro/Diamante, Bronze/Prata/Visitante), por segmento e por local de trabalho, cada uma em mapa de calor dos 31 dias.

![Visão geral: PSAT por coordenação, com cortes por frente e tipo de cliente](02-visao-geral-coordenacao.png)

![Visão geral: PSAT por local de trabalho e DSAT por supervisão](03-visao-geral-local-dsat.png)

- **Individual por operador**: os 150 agentes, dia a dia, com segmento, status (férias e aviso prévio destacados) e supervisor, com filtros de coluna.

![Individual por operador](04-operadores.png)

- **Operador por supervisor**: cada supervisor escolhe o nome no seletor e vê o próprio time filtrado, com as faixas das oito supervisões acima para comparação.

![Operador por supervisor: seletor e lista filtrada](05-supervisores.png)

- **Atendimentos**: volume, respondentes, % de respondentes, distribuição de Ótimo a Péssimo, operador com mais atendimentos e operador mais bem avaliado.

![Atendimentos e avaliações por supervisor](06-atendimentos.png)

- **Resumo**: totais e distribuição percentual por supervisor, coordenação e segmento, com PSAT e DSAT lado a lado.

![Resumo por supervisor](07-resumo-supervisor.png)

## Resultado

- Passou a ser usada no acompanhamento individual de cada agente e das equipes, por supervisores e coordenadores das frentes de Chat e Voz.
- A métrica entrou na bonificação, com metas entre 90% e 95% conforme a frente.
- Apresentada a diretores e outras lideranças.
- Construída em cerca de um mês.

## Dashboard

Com a camada de agregação pronta, montei uma versão inicial de dashboard para a coordenação, com filtros combináveis (mês, coordenação, supervisor, frente, tipo de cliente e turno) e três leituras:

1. **Qualidade**: PSAT e DSAT por mês, uma linha por frente, contra a meta de 90%.
2. **Resposta**: quem não avaliou, separando *recusou avaliar* de *não avaliou*. São dois diagnósticos diferentes: o primeiro é abordagem do agente, o segundo é canal ou pesquisa. Cada um pede uma ação.
3. **Detalhe**: tabela por coordenação, supervisor ou agente no recorte escolhido.

![Dashboard: filtros combináveis e indicadores do mês](09-dash-filtros-kpis.png)

![Dashboard: PSAT e DSAT por mês, por frente, contra a meta](10-dash-qualidade.png)

![Dashboard: resposta, distribuição e detalhe por supervisor](11-dash-resposta-tabela.png)

A versão foi apresentada à coordenação e não chegou a ser implementada na operação. O dashboard lê da camada agregada, não da base bruta, o que o mantém leve mesmo com o ano inteiro carregado.

---

*As telas acima usam dados fictícios gerados para o portfólio, com a mesma estrutura da planilha original.*

`;
