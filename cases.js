// Lista de cases e dados do cabeçalho. Edite aqui para adicionar um case.
window.CASES = {
  "autor": {
    "nome": "Paulo Guilherme de Souza Veiga",
    "cargo": "Analista de Dados e Processos · Melhoria Contínua",
    "cargo_en": "Data & Process Analyst · Continuous Improvement",
    "descricao": "Transformo rotinas manuais de operação em planilhas, dashboards e ferramentas que a equipe usa todo dia. Cada case abaixo saiu de um problema real, com o número de antes e o de depois.",
    "descricao_en": "I turn manual operations routines into spreadsheets, dashboards and tools the team uses every day. Every case below came from a real problem, with the before and after numbers.",
    "links": [
      {
        "rotulo": "GitHub",
        "url": "https://github.com/mmbrosium"
      },
      {
        "rotulo": "LinkedIn",
        "url": "https://www.linkedin.com/in/pgsveiga/"
      },
      {
        "rotulo": "E-mail",
        "url": "mailto:gp.pgsveiga@gmail.com"
      }
    ]
  },
  "categorias": [
    {
      "id": "planilhas",
      "titulo": "Planilhas",
      "titulo_en": "Spreadsheets",
      "sub": "Google Sheets e Excel em produção",
      "sub_en": "Google Sheets and Excel in production"
    },
    {
      "id": "dashboards",
      "titulo": "Dashboards",
      "titulo_en": "Dashboards",
      "sub": "Dashboards vivos: abra e filtre",
      "sub_en": "Live dashboards: open and filter"
    },
    {
      "id": "sistemas",
      "titulo": "Sistemas",
      "titulo_en": "Systems",
      "sub": "Ferramentas em HTML, CSS e JS",
      "sub_en": "Tools in HTML, CSS and JS"
    }
  ],
  "cases": [
    {
      "id": "psat",
      "titulo_en": "PSAT/DSAT: customer satisfaction by agent, supervisor and coordination",
      "curto_en": "PSAT & DSAT",
      "ferramentas_en": "Google Sheets; dashboard",
      "resumo_en": "Satisfaction metric by agent, supervisor and coordination, day by day, over 80k contacts a month.",
      "destaque_en": "Tied to bonuses, with a 90–95% target",
      "titulo": "Dashboard de satisfação do cliente (PSAT e DSAT)",
      "curto": "PSAT e DSAT",
      "categorias": [
        "planilhas",
        "dashboards"
      ],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Google Sheets, Looker Studio",
      "resumo": "Métrica de satisfação por agente, supervisor e coordenação, dia a dia, em 80 mil atendimentos/mês.",
      "destaque": "Entrou na bonificação com meta de 90–95%",
      "capa": "01-visao-geral-supervisao.png",
      "capa_dashboards": "09-dash-filtros-kpis.png",
      "ancora_dashboards": "dashboard"
    },
    {
      "id": "esteira",
      "titulo_en": "Sales, cancellations and retention pipeline",
      "curto_en": "Sales pipeline",
      "ferramentas_en": "Google Sheets; dashboard in HTML, CSS and JavaScript",
      "resumo_en": "Sales, upgrades, retention and target by day, supervisor and agent, with pace and closing projection before month end.",
      "destaque_en": "Target as a parameter: change the target, the whole panel changes",
      "titulo": "Esteira de vendas, cancelamentos e retenções",
      "curto": "Esteira de vendas",
      "categorias": [
        "planilhas",
        "dashboards"
      ],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Google Sheets; dashboard em HTML, CSS e JavaScript",
      "resumo": "Vendas, upgrades, retenção e meta por dia, supervisor e agente, com ritmo e projeção de fechamento antes do fim do mês.",
      "destaque": "Meta como parâmetro: mudou a meta, mudou o painel",
      "capa": "01-painel-kpis.png",
      "capa_dashboards": "09-dashboard-visao-geral.png",
      "link_dashboards": "dashboards/esteira.html"
    },
    {
      "id": "meusvoos",
      "titulo_en": "Meus Voos: guided e-mail support",
      "curto_en": "Meus Voos",
      "ferramentas_en": "Google Sheets",
      "resumo_en": "The agent picks the issue and gets tagging, reply and log ready. The reply assembles itself from the time of day, loyalty club status and flown segments. Plus an itinerary parser.",
      "destaque_en": "From 15–30 min to under 5 min per e-mail",
      "titulo": "Meus Voos: atendimento guiado por e-mail",
      "curto": "Meus Voos",
      "categorias": ["planilhas"],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Google Sheets",
      "resumo": "O agente escolhe o problema e recebe tabulação, mensagem e registro prontos. A mensagem se monta sozinha com horário, Clube e trecho voado. Mais um parser de itinerário.",
      "destaque": "De 15–30 min para menos de 5 min por e-mail",
      "capa": "04-bloco-preenchido.png"
    },
    {
      "id": "abs",
      "titulo_en": "Attendance check automation (ABS)",
      "curto_en": "ABS check",
      "ferramentas_en": "Google Sheets (UNIQUE, FILTER, SORT, INDEX+MATCH)",
      "resumo_en": "The daily attendance check took 1 to 2 hours and two systems. It became a 10-to-20-minute routine with an auditable history.",
      "destaque_en": "From 1–2 h to 10–20 min a day",
      "titulo": "Automação da conferência de aderência (ABS)",
      "curto": "Conferência ABS",
      "categorias": [
        "planilhas"
      ],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Google Sheets (UNIQUE, FILTER, SORT, ÍNDICE+CORRESP)",
      "resumo": "A conferência diária de presença levava de 1 a 2 horas e dois sistemas. Virou uma rotina de 10 a 20 minutos com histórico auditável.",
      "destaque": "De 1–2 h para 10–20 min por dia",
      "capa": ""
    },
    {
      "id": "ridercash",
      "titulo_en": "Rider Cash: from a question tree to a one-minute log",
      "curto_en": "Rider Cash",
      "ferramentas_en": "Google Sheets",
      "resumo_en": "Guided support for cash payment issues: a yes/no question tree that became a one-line-per-ticket log with tagging, reply and record ready.",
      "destaque_en": "AHT from ~10 min to under 1 min",
      "titulo": "Rider Cash: do fluxo de perguntas ao log de um minuto",
      "curto": "Rider Cash",
      "categorias": ["planilhas"],
      "empresa": "Foundever · Projeto Uber",
      "ferramentas": "Google Sheets",
      "resumo": "Atendimento guiado para problemas de pagamento em dinheiro: uma árvore de perguntas que virou um log de uma linha por ticket, com tabulação, resposta e registro prontos.",
      "destaque": "TMA de ~10 min para menos de 1 min",
      "capa": "04-nova-home.png"
    },
    {
      "id": "sisgeral",
      "titulo_en": "SisGeral · standardized contact logging",
      "curto_en": "SisGeral",
      "ferramentas_en": "HTML, CSS and JavaScript, no install; Node.js for tests",
      "resumo_en": "Logging a cancellation stopped being typed text and became one click, within the rules of the corporate environment.",
      "destaque_en": "Contact from 5–10 min to under 5",
      "titulo": "SisGeral · registro de atendimento padronizado",
      "curto": "SisGeral",
      "categorias": [
        "sistemas"
      ],
      "empresa": "Amil Dental",
      "ferramentas": "HTML, CSS e JavaScript, sem instalação; Node.js para testes",
      "resumo": "O registro do cancelamento deixou de ser texto digitado e virou um clique, dentro das regras do ambiente corporativo.",
      "destaque": "Atendimento de 5–10 min para menos de 5",
      "capa": ""
    }
  ]
};
