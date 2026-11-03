// Texto da página "Sobre" em Markdown. Edite só o que está entre as crases.
// Num título "##", o que vai entre chaves é o rótulo curto na barra: "## Como cheguei aqui {Trajetória}".
// Fotos: uma por seção, na ordem das seções, alternando esquerda e direita. Apague uma linha pra tirar.
window.SOBRE_FOTOS = ["assets/foto-3.jpg", "assets/foto-1.jpg", "assets/foto-2.jpg"];

// Referências, por hierarquia (nivel 1 = gerência, 2 = coordenação, 3 = análise). Quanto maior o nível, mais moldura.
// Em "texto", [Nome do case](case:id) vira link pro case (ids em cases.js). Apague uma linha pra tirar alguém.
// "citacao" é a recomendação da pessoa, nas palavras aprovadas por ela. Apague o campo pra tirar a citação.
window.REF_NIVEIS = { 1: "Gerência", 2: "Coordenação", 3: "Análise" };
window.REF_NIVEIS_EN = { 1: "Management", 2: "Coordination", 3: "Analysis" };
window.REFERENCIAS = [
  { nivel: 1, foto: "assets/refs/leidy.jpg", nome: "Leidy Almeida", cargo: "Gerente sênior de canais de atendimento, eficiência operacional e customer experience", cargo_en: "Senior manager of service channels, operational efficiency and customer experience", empresa: "Concentrix · projeto Smiles",
    texto: "Acompanhou o conjunto do trabalho no Smiles: o [PSAT e DSAT (Sextante)](case:psat), a [esteira de vendas, cancelamentos e retenções (Cruzeiro)](case:esteira), o [ABS (Pulso)](case:abs), o relatório de reorientações e o controle de acessos ([projetos pontuais (Hangar)](case:pontuais)), além dos relatórios que subiam pra diretoria.",
    texto_en: "Followed the whole body of work at Smiles: [PSAT and DSAT (Sextante)](case:psat), the [sales, cancellation and retention pipeline (Cruzeiro)](case:esteira), [ABS (Pulso)](case:abs), the re-routing report and access control ([one-off projects (Hangar)](case:pontuais)), plus the reports that went up to the board.",
    citacao: "O Paulo entrou como operador e, em pouco tempo, estava entregando o que a operação precisava enxergar e ninguém tinha pedido: o PSAT, a esteira de vendas, o ABS. O trabalho dele passou a ser usado no acompanhamento das equipes e em apresentações pra diretoria. É alguém que resolve o problema de vez, não só o de hoje.", citacao_en: "Paulo joined as an agent and, in little time, was delivering what the operation needed to see and nobody had asked for: PSAT, the sales pipeline, ABS. His work ended up used in team follow-up and in presentations to the board. He is someone who solves the problem for good, not just today's." },
  { nivel: 2, foto: "assets/refs/amanda.jpg", nome: "Amanda Soares", cargo: "Coordenadora de Customer Experience Management e Customer Service", cargo_en: "Customer Experience Management and Customer Service coordinator", empresa: "Smiles",
    texto: "Só o [Meus Voos (Manche)](case:meusvoos): foi quem levou a planilha pro turno da manhã depois de ver o tempo de resposta cair de 15–30 minutos pra menos de 5.",
    texto_en: "Only [Meus Voos (Manche)](case:meusvoos): the one who took the spreadsheet to the morning shift after seeing response time drop from 15–30 minutes to under 5.",
    citacao: "A planilha do Meus Voos que o Paulo montou derrubou o tempo de resposta do e-mail de 15 a 30 minutos pra menos de 5. Vi funcionar no turno dele e levei pro turno da manhã. Além de construir, ele ensinou o time a usar.", citacao_en: "The Meus Voos spreadsheet Paulo built brought e-mail response time down from 15–30 minutes to under 5. I saw it work on his shift and took it to the morning shift. Beyond building it, he taught the team to use it." },
  { nivel: 2, foto: "assets/refs/livia.jpg", nome: "Lívia Nowacyzk", cargo: "Coordenadora de operações, analista de processos e Customer Experience Management", cargo_en: "Operations coordinator, process analyst and Customer Experience Management", empresa: "Concentrix · projeto Smiles",
    texto: "Coordenação direta nos mesmos projetos: [PSAT (Sextante)](case:psat), [esteira (Cruzeiro)](case:esteira), [ABS (Pulso)](case:abs), reorientações e controle de acessos.",
    texto_en: "Direct coordination on the same projects: [PSAT (Sextante)](case:psat), [pipeline (Cruzeiro)](case:esteira), [ABS (Pulso)](case:abs), re-routing and access control.",
    citacao: "Coordenei o Paulo no período dos projetos. Ele tem iniciativa e cuidado com o dado: o que entregava já vinha testado, documentado e com passo a passo pra equipe. Confiável e rápido pra aprender o que ainda não sabia.", citacao_en: "I coordinated Paulo during the projects. He has initiative and care for the data: what he delivered came tested, documented and with a step-by-step for the team. Reliable, and fast to learn what he did not yet know." },
  { nivel: 2, foto: "assets/refs/lino.jpg", nome: "Crhistopher Lino", cargo: "Coordenador de operações, gestão de pessoas, planejamento estratégico e otimização de processos", cargo_en: "Operations coordinator, people management, strategic planning and process optimization", empresa: "Concentrix · projeto Smiles",
    texto: "Os mesmos projetos da coordenação, mais pedidos pontuais de análise: vouchers de parceiro, controle de pausas e consultas no Zendesk e no Callflex.",
    texto_en: "The same projects as the coordination, plus one-off analysis requests: partner vouchers, break control and lookups in Zendesk and Callflex.",
    citacao: "Sempre que precisava de uma análise fora da rotina, vouchers, controle de pausas, uma consulta no Zendesk ou no Callflex, era pro Paulo que eu pedia. Voltava com a resposta e, quase sempre, com uma planilha pra não precisar pedir de novo.", citacao_en: "Whenever I needed an analysis outside the routine, vouchers, break control, a lookup in Zendesk or Callflex, Paulo was who I asked. He came back with the answer and, almost always, with a spreadsheet so I would not need to ask again." },
  { nivel: 2, foto: "assets/refs/eduardo.jpg", nome: "Eduardo Hauck", cargo: "Coordenador financeiro", cargo_en: "Finance coordinator", empresa: "Indaiá Restaurantes",
    texto: "A rotina do financeiro, em 2023: emissão e controle de notas e recibos, abertura e fechamento de caixa, conferência e correção de dados em planilha.",
    texto_en: "The finance routine, in 2023: issuing and tracking invoices and receipts, opening and closing the till, checking and fixing data in spreadsheets.",
    citacao: "No financeiro, o Paulo cuidou de notas, recibos, caixa e conferência de dados com atenção e sem retrabalho. Foi onde ele descobriu que gostava de planilha, e já ali resolvia com fórmula o que antes era feito na mão.", citacao_en: "In finance, Paulo handled invoices, receipts, the till and data checks with attention and no rework. It was where he found out he liked spreadsheets, and already there he solved with a formula what used to be done by hand." },
  { nivel: 3, foto: "assets/refs/henrique.jpg", nome: "Henrique Vital", cargo: "Analista de melhoria contínua", cargo_en: "Continuous improvement analyst", empresa: "Concentrix · projeto Smiles",
    texto: "O [ABS (Pulso)](case:abs) e o relatório de reorientações, feitos em dupla, e a aprovação de reembolsos manuais (assento, bagagem, assunto especial), que chegava a ele por GP e localizador. Cobri as férias dele antes de a função ficar comigo.",
    texto_en: "[ABS (Pulso)](case:abs) and the re-routing report, done as a pair, and the approval of manual refunds (seat, baggage, special subject), which reached him by GP and locator. I covered his vacation before the role became mine.",
    citacao: "Trabalhamos juntos no ABS e nas reorientações, e ele cobriu minhas férias sem deixar nada parado. Bom de processo, bom de planilha e bom de explicar pra quem vai usar.", citacao_en: "We worked together on ABS and the re-routing report, and he covered my vacation without leaving anything behind. Good with process, good with spreadsheets, and good at explaining to whoever will use it." },
];


window.SOBRE_MD = `
## Quem sou

Analista de dados e processos em operações de atendimento de alto volume. Pego rotina manual, entendo onde ela trava e devolvo uma planilha, um dashboard ou uma ferramenta que a equipe usa todo dia. Comecei na operação, do lado de quem atende, e é de lá que vem o meu jeito de construir: a solução tem que caber na rotina de quem vai usar, senão ela não é solução.

Se tiver que resumir numa frase: se eu não sei a resposta, eu vou atrás até ter. Não descanso com problema aberto.

## Referências

Pessoas que acompanharam o trabalho de perto e autorizaram a citação. Contato mediante solicitação.

## Como cheguei aqui {Trajetória}

O primeiro contato com planilha pra valer foi no financeiro de uma rede de restaurantes em Santa Catarina, em 2023. Gostei de uma coisa que não esperava gostar: a fórmula certa resolve de vez um problema que antes era resolvido todo dia, na mão.

A virada veio na Concentrix, no Projeto Smiles, em 2024. Entrei como operador de atendimento. Na frente de e-mail, a resposta exigia preencher o sistema por partes, e meus colegas levavam de 15 a 30 minutos por caso. Propus montar uma planilha guiada e ensinar o time a usar. Toparam. O tempo caiu pra menos de 5 minutos. Apresentei à coordenação, que pediu pra levar pro turno da manhã também.

Pouco depois cobri as férias do analista de melhoria contínua. Ele saiu da empresa e eu fiquei com a função: aderência e absenteísmo, o PSAT/DSAT sobre mais de 80 mil atendimentos, a esteira de vendas e retenção. Boa parte desses projetos ninguém pediu. Fiz porque a operação precisava enxergar aquilo, e o trabalho passou a ser usado no acompanhamento das equipes, na bonificação e em apresentação pra diretoria. Os cases deste site são esses.

Na Foundever, no Projeto Uber, repeti a receita no treinamento: uma planilha que guia o atendimento, da escolha do problema até a resposta padronizada. Consulta de cerca de 10 minutos para 30 segundos. O projeto encerrou o turno em que eu atuava em março de 2026.

Hoje estou numa operação de atendimento de plano odontológico. No papel, atendente; na prática, foi ali que construí o projeto mais ambicioso que já fiz, o SisGeral: um gerenciador de atendimentos em HTML, CSS e JavaScript que abre sem instalar nada, com catálogo de procedimentos, prontuário compilado, histórico, calendário e painel de produtividade. Está na versão 3.24 depois de mais de cinquenta iterações, já foi apresentado à supervisão, e é o case da coluna Sistemas. O padrão se repete em todo lugar que passei: entro pela operação, enxergo o que trava, e construo a ferramenta que faltava. É isso que eu quero fazer de ofício.

## Como trabalho {Método}

- **Primeiro o caminho inteiro, depois a solução.** Antes de mexer em qualquer coisa, mapeio do sintoma até a causa. O objetivo é resolver de um jeito que o mesmo problema não volte, não só tirar o problema de hoje da frente.
- **A meta é parâmetro, o dado é base.** Separo entrada, cálculo e visualização. Quem usa mexe num seletor, não numa fórmula. Mudou a regra, muda num lugar só.
- **A restrição do ambiente faz parte do projeto.** Se a empresa bloqueia instalação e integração, a ferramenta tem que abrir com duplo clique. Se o time usa Google Sheets, a solução é em Google Sheets.
- **Entrego pra quem vai usar.** Ensino o time, escrevo o passo a passo, deixo a planilha com a mínima quantidade de coisa pra alguém quebrar.
- **Erro ensina.** Já entreguei soma errada em esteira de vendas e já joguei fora versões inteiras do SisGeral. O que ficou disso foi testar antes de entregar e versionar tudo.

Aprendi planilha, SQL e Power BI por conta: documentação, tentativa e erro, YouTube e gente mais experiente que eu encontrei pelo caminho. Depois passei a ensinar o que sabia pra colegas e gestores.

## Ferramentas

- **Planilhas:** Google Sheets e Excel avançado (QUERY, FILTER, UNIQUE, ÍNDICE+CORRESP, PROCX, ARRAYFORMULA, IMPORTRANGE, REGEX), Power Query, VBA.
- **Dados e BI:** SQL (consultas, JOINs, agregações), Power BI e Looker Studio.
- **Código:** HTML, CSS e JavaScript para ferramentas que rodam sem servidor. Em formação em Python e desenvolvimento.
- **Processos:** mapeamento (BPMN), melhoria contínua (Lean / Six Sigma), KPIs de operação (PSAT, DSAT, ABS, TMA, conversão, retenção).

## Formação e idiomas {Formação}

- Tecnólogo em Análise e Desenvolvimento de Sistemas, Unicesumar, conclusão prevista para 2026.
- Inglês fluente (conversação, entrevistas e tradução de documentos). Espanhol intermediário.
- Cursos: Power BI (formação executiva, técnicas avançadas), SQL para análise de dados, fundamentos de engenharia de dados, análise de negócios, gestão de projetos.

## O que busco {Busco}

Vaga de analista de dados, processos, BI ou melhoria contínua, e estou abrindo caminho pra desenvolvimento. Gosto de operação grande, onde um indicador bem feito muda a semana de muita gente. Presencial, híbrido ou remoto, em Curitiba e região.

Fora do trabalho: jogos. Foi querendo fazer um que eu comecei a programar, e o visual deste site é uma lembrança disso.

## Contato

- E-mail: [gp.pgsveiga@gmail.com](mailto:gp.pgsveiga@gmail.com)
- LinkedIn: [linkedin.com/in/pgsveiga](https://www.linkedin.com/in/pgsveiga/)
- GitHub: [github.com/mmbrosium](https://github.com/mmbrosium)
`;

// English version (shown when the visitor picks EN-US). Same rule for short labels: "## Title {Short}".
window.SOBRE_MD_EN = `
## Who I am

Data and process analyst in high-volume customer service operations. I take a manual routine, find where it jams, and hand back a spreadsheet, a dashboard or a tool the team uses every day. I started in the operation, on the side of the people who take the calls, and that is where my way of building comes from: the solution has to fit the routine of whoever will use it, or it is not a solution.

In one sentence: if I don't know the answer, I go after it until I do. I don't rest with an open problem.

## References

People who followed the work closely and authorized being named. Contact details on request.

## How I got here {Path}

My first real contact with spreadsheets was in the finance team of a restaurant chain in Santa Catarina, in 2023. I liked something I did not expect to like: the right formula solves for good a problem that used to be solved every day, by hand.

The turning point came at Concentrix, on the Smiles Project, in 2024. I joined as a support agent. On the e-mail channel, a reply required filling the system in parts, and my colleagues took 15 to 30 minutes per case. I proposed building a guided spreadsheet and teaching the team to use it. They said yes. Time dropped to under 5 minutes. I presented it to coordination, who asked to roll it out to the morning shift too.

Shortly after, I covered the continuous improvement analyst's vacation. He left the company and I kept the role: adherence and absenteeism, PSAT/DSAT over 80,000 contacts, the sales and retention pipeline. Much of that nobody asked for. I built it because the operation needed to see it, and the work went on to be used in team follow-up, in bonuses and in presentations to directors. The cases on this site are those.

At Foundever, on the Uber Project, I repeated the recipe during training: a spreadsheet that guides the contact, from picking the issue to the standardized reply. Lookup from about 10 minutes to 30 seconds. The project closed my shift in March 2026.

Today I am in a dental-plan customer-service operation. On paper, an agent; in practice, that is where I built the most ambitious project I have done, SisGeral: a contact manager in HTML, CSS and JavaScript that opens with no install, with a procedure catalog, a compiled record, history, calendar and a productivity panel. It is on version 3.24 after more than fifty iterations, it has been presented to supervision, and it is the case in the Systems column. The pattern repeats everywhere I have been: I come in through the operation, see what jams, and build the tool that was missing. That is what I want to do for a living.

## How I work {Method}

- **The whole path first, then the solution.** Before touching anything, I map from symptom to cause. The goal is to solve it so the same problem does not come back, not just clear today's problem out of the way.
- **The target is a parameter, the data is the base.** I separate input, calculation and visualization. Users touch a selector, not a formula. When the rule changes, it changes in one place.
- **The environment's constraints are part of the design.** If the company blocks installs and integrations, the tool has to open with a double click. If the team uses Google Sheets, the solution is in Google Sheets.
- **I deliver to the people who will use it.** I teach the team, write the step by step, and leave the spreadsheet with as little as possible for someone to break.
- **Mistakes teach.** I have shipped a wrong sum in a sales pipeline and thrown away whole versions of SisGeral. What stayed from that is testing before delivering and versioning everything.

I learned spreadsheets, SQL and Power BI on my own: documentation, trial and error, YouTube and more experienced people I met along the way. Then I started teaching what I knew to colleagues and managers.

## Tools

- **Spreadsheets:** Google Sheets and advanced Excel (QUERY, FILTER, UNIQUE, INDEX+MATCH, XLOOKUP, ARRAYFORMULA, IMPORTRANGE, REGEX), Power Query, VBA.
- **Data and BI:** SQL (queries, JOINs, aggregations), Power BI and Looker Studio.
- **Code:** HTML, CSS and JavaScript for tools that run without a server. Learning Python and software development.
- **Process:** mapping (BPMN), continuous improvement (Lean / Six Sigma), operations KPIs (PSAT, DSAT, absenteeism, AHT, conversion, retention).

## Education and languages {Education}

- Associate degree in Systems Analysis and Development, Unicesumar, expected completion 2026.
- Fluent English (conversation, interviews and document translation). Intermediate Spanish.
- Courses: Power BI (executive track, advanced techniques), SQL for data analysis, data engineering fundamentals, business analysis, project management.

## What I'm looking for {Looking for}

A data, process, BI or continuous improvement analyst role, and I am working my way into software development. I like large operations, where a well-built indicator changes the week of many people. On-site, hybrid or remote, in Curitiba, Brazil, and the surrounding region.

Outside work: games. I started programming because I wanted to make one, and the look of this site is a reminder of that.

## Contact

- E-mail: [gp.pgsveiga@gmail.com](mailto:gp.pgsveiga@gmail.com)
- LinkedIn: [linkedin.com/in/pgsveiga](https://www.linkedin.com/in/pgsveiga/)
- GitHub: [github.com/mmbrosium](https://github.com/mmbrosium)
`;
