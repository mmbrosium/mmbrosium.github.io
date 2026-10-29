// Lista de cases e dados do cabeçalho. Edite aqui para adicionar um case.
window.CASES = {
  "autor": {
    "nome": "Paulo Guilherme de Souza Veiga",
    "cargo": "Analista de Dados e Processos · Melhoria Contínua",
    "cargo_en": "Data & Process Analyst · Continuous Improvement",
    "descricao": "Transformo rotinas manuais de operação em planilhas, dashboards e ferramentas que a equipe usa todo dia. Cada case abaixo saiu de um problema real, com o número de antes e o de depois.",
    "descricao_en": "I turn manual operations routines into spreadsheets, dashboards and tools the team uses every day. Every case below came from a real problem, with the before and after numbers.",
    "comecar": ["psat", "abs", "sisgeral"],
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
      "nome": "Sextante",
      "nome_en": "Sextant",
      "titulo_en": "PSAT/DSAT: customer satisfaction by agent, supervisor and coordination",
      "curto_en": "PSAT & DSAT",
      "ferramentas_en": "Google Sheets; dashboard in HTML, CSS and JavaScript",
      "resumo_en": "Satisfaction metric by agent, supervisor and coordination, day by day, over 80k contacts a month.",
      "destaque_en": "A visual read for supervisors: who is on target, day by day",
      "titulo": "Dashboard de satisfação do cliente (PSAT e DSAT)",
      "curto": "PSAT e DSAT",
      "categorias": [
        "planilhas",
        "dashboards"
      ],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Google Sheets; dashboard em HTML, CSS e JavaScript",
      "resumo": "Métrica de satisfação por agente, supervisor e coordenação, dia a dia, em 80 mil atendimentos/mês.",
      "destaque": "Leitura visual pros supervisores: quem está na meta, dia a dia",
      "capa": "01-visao-geral-supervisao.png",
      "capa_dashboards": "12-dash-mapa.png",
      "link_dashboards": "dashboards/psat.html"
    },
    {
      "id": "esteira",
      "nome": "Cruzeiro",
      "nome_en": "Cruise",
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
      "nome": "Manche",
      "nome_en": "Manche",
      "titulo_en": "Meus Voos: guided e-mail support",
      "curto_en": "Meus Voos",
      "ferramentas_en": "Google Sheets; dashboard in HTML, CSS and JavaScript",
      "resumo_en": "The agent picks the issue and gets tagging, reply and log ready. The reply assembles itself from the time of day, loyalty club status and flown segments. Plus an itinerary parser.",
      "destaque_en": "From 15–30 min to under 5 min per e-mail",
      "titulo": "Meus Voos: atendimento guiado por e-mail",
      "curto": "Meus Voos",
      "categorias": ["planilhas", "dashboards"],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Google Sheets; dashboard em HTML, CSS e JavaScript",
      "capa_dashboards": "15-dash-visao-geral.png",
      "link_dashboards": "dashboards/manche.html",
      "resumo": "O agente escolhe o problema e recebe tabulação, mensagem e registro prontos. A mensagem se monta sozinha com horário, Clube e trecho voado. Mais um parser de itinerário.",
      "destaque": "De 15–30 min para menos de 5 min por e-mail",
      "capa": "04-bloco-preenchido.png"
    },
    {
      "id": "abs",
      "nome": "Pulso",
      "nome_en": "Pulse",
      "titulo_en": "ABS: the daily attendance routine, end to end",
      "curto_en": "ABS routine",
      "ferramentas_en": "Excel and Google Sheets (COUNTIFS, INDEX+MATCH, array formulas); dashboard in HTML, CSS and JavaScript",
      "resumo_en": "How the attendance check works today: three spreadsheets, an eight-step daily flow, the history as data and the dashboard. Rebuilt with fictitious data, for download.",
      "destaque_en": "From 1–2 h to 10–20 min a day",
      "titulo": "ABS: a rotina diária de aderência, de ponta a ponta",
      "curto": "Rotina ABS",
      "categorias": [
        "planilhas",
        "dashboards"
      ],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Excel e Google Sheets (COUNTIFS, ÍNDICE+CORRESP, fórmulas matriciais); dashboard em HTML, CSS e JavaScript",
      "resumo": "Como a conferência de presença funciona hoje: três planilhas, o fluxo diário em oito passos, o histórico em dados e o dashboard. Reconstruída com dados fictícios, pra download.",
      "destaque": "De 1–2 h para 10–20 min por dia",
      "capa": "00-capa.png",
      "capa_dashboards": "08-dash-visao-geral.png",
      "link_dashboards": "dashboards/abs.html"
    },
    {
      "id": "pontuais",
      "nome": "Hangar",
      "nome_en": "Hangar",
      "titulo_en": "One-off and single-use projects",
      "curto_en": "One-offs",
      "ferramentas_en": "Google Sheets and Excel",
      "resumo_en": "Small tools built for one need, parked but ready: the operations logbook, system access controls and the KPI base. Rebuilt for download.",
      "destaque_en": "Three one-off sheets, one workbook",
      "titulo": "Projetos pontuais e de uso único",
      "curto": "Avulsos",
      "categorias": ["planilhas"],
      "empresa": "Concentrix · Projeto Smiles",
      "ferramentas": "Google Sheets e Excel",
      "resumo": "Ferramentas pequenas, feitas pra uma necessidade só, guardadas mas prontas: o diário de bordo da operação, os controles de acesso a sistemas e a base de KPI. Reconstruídas pra download.",
      "destaque": "Três planilhas avulsas, um arquivo",
      "capa": "00-capa.png"
    },
    {
      "id": "ridercash",
      "nome": "Câmbio",
      "nome_en": "Shift",
      "titulo_en": "Rider Cash: from a question tree to a one-minute log",
      "curto_en": "Rider Cash",
      "ferramentas_en": "Google Sheets; dashboard in HTML, CSS and JavaScript",
      "resumo_en": "Guided support for cash payment issues: a yes/no question tree that became a one-line-per-ticket log with tagging, reply and record ready.",
      "destaque_en": "AHT from ~10 min to under 1 min",
      "titulo": "Rider Cash: do fluxo de perguntas ao log de um minuto",
      "curto": "Rider Cash",
      "categorias": ["planilhas", "dashboards"],
      "empresa": "Foundever · Projeto Uber",
      "ferramentas": "Google Sheets; dashboard em HTML, CSS e JavaScript",
      "capa_dashboards": "11-dash-visao-geral.png",
      "link_dashboards": "dashboards/cambio.html",
      "resumo": "Atendimento guiado para problemas de pagamento em dinheiro: uma árvore de perguntas que virou um log de uma linha por ticket, com tabulação, resposta e registro prontos.",
      "destaque": "TMA de ~10 min para menos de 1 min",
      "capa": "04-nova-home.png"
    },
    {
      "id": "sisgeral",
      "nome": "SisGeral",
      "nome_en": "SysGem",
      "titulo_en": "SisGeral · general contact system, standardized logging",
      "curto_en": "SisGeral",
      "ferramentas_en": "HTML, CSS and JavaScript, no install; Node.js for tests",
      "resumo_en": "A contact manager in a single HTML file: procedure catalog, compiled record, history with TXT export, calendar and a productivity panel. v3.25, fifty-plus iterations.",
      "destaque_en": "Contact from 5–10 min to under 5",
      "titulo": "SisGeral · sistema geral de atendimento, registro padronizado",
      "curto": "SisGeral",
      "categorias": [
        "sistemas"
      ],
      "empresa": "Amil Dental",
      "ferramentas": "HTML, CSS e JavaScript, sem instalação; Node.js para testes",
      "resumo": "Gerenciador de atendimento num arquivo HTML: catálogo de procedimentos, prontuário compilado, histórico com exportação em TXT, calendário e painel de produtividade. v3.25, mais de cinquenta iterações.",
      "destaque": "Atendimento de 5–10 min para menos de 5",
      "capa": "00-capa.png"
    },
    {
      "id": "gnc",
      "nome": "GNC",
      "nome_en": "GNC",
      "titulo": "GNC · gerenciador de notas compartimentado, pastas e checklists",
      "titulo_en": "GNC · compartmented notes manager, folders and checklists",
      "curto": "GNC",
      "curto_en": "GNC",
      "categorias": ["sistemas"],
      "empresa": "Projeto pessoal",
      "ferramentas": "HTML, CSS e JavaScript num arquivo só",
      "ferramentas_en": "HTML, CSS and JavaScript in a single file",
      "resumo": "Bloco de notas num arquivo HTML: pastas, subpastas e notas na barra da esquerda, editor com formatação e checklist à direita, busca no conteúdo. Ctrl+S baixa o próprio arquivo com as notas dentro.",
      "resumo_en": "A notepad in a single HTML file: folders, subfolders and notes on the left, an editor with formatting and a checklist on the right, full-text search. Ctrl+S downloads the file itself with the notes inside.",
      "destaque": "O arquivo é o banco de dados",
      "destaque_en": "The file is the database",
      "capa": "03-nota.png",
      "demo": "demos/gnc/index.html"
    },
    {
      "id": "gamecenter",
      "nome": "Game Center",
      "nome_en": "Game Center",
      "titulo": "Game Center · três jogos com adversário de máquina",
      "titulo_en": "Game Center · three games with a machine opponent",
      "curto": "Game Center",
      "curto_en": "Game Center",
      "categorias": ["sistemas"],
      "empresa": "Projeto pessoal",
      "ferramentas": "HTML, CSS e JavaScript num arquivo só",
      "ferramentas_en": "HTML, CSS and JavaScript in a single file",
      "resumo": "Jogo da velha, campo minado e batalha naval num arquivo só. Máquina que fecha ou bloqueia a linha, primeiro clique nunca é bomba, frota arrastável na doca. Feito pra passar o tempo, e pra exercitar estado e lógica.",
      "resumo_en": "Tic-tac-toe, minesweeper and battleship in one file. A machine that closes or blocks the line, a first click that is never a mine, a draggable fleet in the dock. Made to pass the time, and to exercise state and logic.",
      "destaque": "Três jogos, zero bibliotecas",
      "destaque_en": "Three games, zero libraries",
      "capa": "01-velha.png",
      "demo": "demos/gamecenter/index.html"
    }
  ]
};
