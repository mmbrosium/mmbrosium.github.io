// Lista de cases e dados do cabeçalho. Edite aqui para adicionar um case.
window.CASES = {
  "autor": {
    "nome": "Guilherme de Souza Veiga",
    "cargo": "Analista de Dados e Processos · Melhoria Contínua",
    "descricao": "Transformo rotinas manuais de operação em planilhas, dashboards e ferramentas que a equipe usa todo dia. Cada case abaixo saiu de um problema real, com o número de antes e o de depois.",
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
      "sub": "Google Sheets e Excel em produção"
    },
    {
      "id": "dashboards",
      "titulo": "Dashboards",
      "sub": "Dashboards vivos: abra e filtre"
    },
    {
      "id": "sistemas",
      "titulo": "Sistemas",
      "sub": "Ferramentas em HTML, CSS e JS"
    }
  ],
  "cases": [
    {
      "id": "psat",
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
      "id": "abs",
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
      "id": "uber",
      "titulo": "Planilha inteligente de atendimento",
      "curto": "Planilha de atendimento",
      "categorias": [
        "planilhas"
      ],
      "empresa": "Foundever · Projeto Uber (Rider)",
      "ferramentas": "Google Sheets (PROCX, FILTER, REGEX, listas suspensas)",
      "resumo": "O agente escolhe o problema numa lista e recebe a etapa, o link da base de conhecimento e a resposta pronta.",
      "destaque": "Consulta de ~10 min para ~30 s",
      "capa": ""
    },
    {
      "id": "sisgeral",
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
