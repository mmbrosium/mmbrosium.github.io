// Texto do case em Markdown. Edite só o que está entre as crases.
window.CASE_MD = window.CASE_MD || {};
window.CASE_MD["sisgeral"] = `
## Problema

No cancelamento de plano, o atendimento levava cerca de 5 a 10 minutos, sem contar a confirmação de dados. Uma parte desse tempo era escrever o registro, que é praticamente o mesmo em todo cancelamento. Como não dá para digitar enquanto se ouve o cliente, era preciso pedir que ele aguardasse. A tabulação no sistema da empresa também precisava ser feita à mão.

## Ação

- Criei modelos de texto por assunto. No cancelamento, o atendente marca um procedimento e o registro sai pronto, com a frase padrão, o protocolo e o atendente. Quando o cliente pede dois ou três assuntos, os procedimentos são combinados na ordem escolhida.
- Liguei cada atendimento ao procedimento por identificador. Renomear um procedimento atualiza histórico e painel de uma vez, e o mesmo assunto não aparece duas vezes nos relatórios.
- Montei um painel por semanas do calendário e relatórios em TXT por mês ou semana.
- Tratei a privacidade como decisão de projeto: o nome do beneficiário não é salvo (só a inicial), os dados ficam no navegador e há regra de retenção.
- Usei a restrição do ambiente como critério de projeto. Extensões e integrações provavelmente seriam barradas pela política da empresa, então a solução abre com duplo clique, sem instalar nada e sem internet. Por isso a tabulação continua manual: automatizá-la exigiria uma extensão ou integração fora dos padrões.
- Cobri o núcleo com 41 testes automatizados, além de testes da tela em navegador.

## Resultado

- Antes: cerca de 5 a 10 minutos por atendimento de cancelamento, sem a confirmação de dados. Depois: menos de 5 minutos.
- O registro deixou de ser texto digitado e passou a ser um clique, sem pedir ao cliente que espere para escrever.
- Registros padronizados, com o mesmo assunto sempre com o mesmo título, o que dá base confiável para análise.
- Ferramenta funcionando dentro das regras do ambiente corporativo.

## Próximo passo

Medir o ganho em atendimentos reais e, se a empresa permitir, avaliar a sincronização entre atendentes. Hoje os dados ficam só no navegador de cada computador.

*Telas e repositório em preparação.*

`;
