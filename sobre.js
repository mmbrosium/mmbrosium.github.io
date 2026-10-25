// Texto da página "Sobre" em Markdown. Edite só o que está entre as crases.
// Num título "##", o que vai entre chaves é o rótulo curto na barra: "## Como cheguei aqui {Trajetória}".
// Fotos: uma por seção, na ordem das seções, alternando esquerda e direita. Apague uma linha pra tirar.
window.SOBRE_FOTOS = ["assets/foto-3.jpg", "assets/foto-1.jpg", "assets/foto-2.jpg"];

window.SOBRE_MD = `
## Quem sou

Analista de dados e processos em operações de atendimento de alto volume. Pego rotina manual, entendo onde ela trava e devolvo uma planilha, um dashboard ou uma ferramenta que a equipe usa todo dia. Comecei na operação, do lado de quem atende, e é de lá que vem o meu jeito de construir: a solução tem que caber na rotina de quem vai usar, senão ela não é solução.

Se tiver que resumir numa frase: se eu não sei a resposta, eu vou atrás até ter. Não descanso com problema aberto.

## Como cheguei aqui {Trajetória}

O primeiro contato com planilha pra valer foi no financeiro de uma rede de restaurantes em Santa Catarina, em 2023. Gostei de uma coisa que não esperava gostar: a fórmula certa resolve de vez um problema que antes era resolvido todo dia, na mão.

A virada veio na Concentrix, no Projeto Smiles, em 2024. Entrei como operador de atendimento. Na frente de e-mail, a resposta exigia preencher o sistema por partes, e meus colegas levavam de 15 a 30 minutos por caso. Propus montar uma planilha guiada e ensinar o time a usar. Toparam. O tempo caiu pra menos de 5 minutos. Apresentei à coordenação, que pediu pra levar pro turno da manhã também.

Pouco depois cobri as férias do analista de melhoria contínua. Ele saiu da empresa e eu fiquei com a função: aderência e absenteísmo, o PSAT/DSAT sobre mais de 80 mil atendimentos, a esteira de vendas e retenção. Boa parte desses projetos ninguém pediu. Fiz porque a operação precisava enxergar aquilo, e o trabalho passou a ser usado no acompanhamento das equipes, na bonificação e em apresentação pra diretoria. Os cases deste site são esses.

Na Foundever, no Projeto Uber, repeti a receita no treinamento: uma planilha que guia o atendimento, da escolha do problema até a resposta padronizada. Consulta de cerca de 10 minutos para 30 segundos. O projeto encerrou o turno em que eu atuava em março de 2026.

Hoje atuo em operação de atendimento e construí, pra uso próprio, o SisGeral: um gerenciador de atendimentos em HTML, CSS e JavaScript que abre sem instalar nada. Está na terceira versão depois de mais de cinquenta iterações, e também virou case.

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

## How I got here {Path}

My first real contact with spreadsheets was in the finance team of a restaurant chain in Santa Catarina, in 2023. I liked something I did not expect to like: the right formula solves for good a problem that used to be solved every day, by hand.

The turning point came at Concentrix, on the Smiles Project, in 2024. I joined as a support agent. On the e-mail channel, a reply required filling the system in parts, and my colleagues took 15 to 30 minutes per case. I proposed building a guided spreadsheet and teaching the team to use it. They said yes. Time dropped to under 5 minutes. I presented it to coordination, who asked to roll it out to the morning shift too.

Shortly after, I covered the continuous improvement analyst's vacation. He left the company and I kept the role: adherence and absenteeism, PSAT/DSAT over 80,000 contacts, the sales and retention pipeline. Much of that nobody asked for. I built it because the operation needed to see it, and the work went on to be used in team follow-up, in bonuses and in presentations to directors. The cases on this site are those.

At Foundever, on the Uber Project, I repeated the recipe during training: a spreadsheet that guides the contact, from picking the issue to the standardized reply. Lookup from about 10 minutes to 30 seconds. The project closed my shift in March 2026.

Today I work in a support operation and built, for my own use, SisGeral: a contact manager in HTML, CSS and JavaScript that opens with no install. It is on its third version after more than fifty iterations, and it became a case too.

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
