/**
 * observacoes.gs — Auditoria de fechamento de caixa (Marola Cozinha de Mar · MAR01)
 *
 * Lê as abas "Taxa de Serviço (Garçom)" e "Couvert-Serviço" e grava, na aba
 * "Auditoria", uma lista de frases de observação prontas para o relatório do dia.
 * Também lê a célula "Diferença de caixa" da aba "Fechamento de Caixa".
 *
 * Dados 100% fictícios — projeto de portfólio.
 */

// ---------- configuração ----------
var ABA_TAXA     = 'Taxa de Serviço (Garçom)';
var ABA_COUVERT  = 'Couvert-Serviço';
var ABA_AUDIT    = 'Auditoria';
var ABA_FECH     = 'Fechamento de Caixa';
var CEL_DIF_CAIXA = 'Q24';          // célula "Diferença de caixa" no fechamento
var LIMITE_CAIXA  = 15.00;          // tolerância aceita para a diferença de caixa (R$)
var LIMITE_PCT    = 0.15;           // % de retirada acima da qual o garçom é citado
var LINHA_CAB_TAXA    = 4;          // linha do cabeçalho em cada aba-fonte
var LINHA_CAB_COUVERT = 4;
var CEL_DESTINO   = 'A24';          // onde as observações começam na aba Auditoria

// ---------- menu ----------
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Auditoria')
    .addItem('Gerar observações', 'escreverObservacoes')
    .toSeparator()
    .addItem('Limpar observações', 'limparObservacoes')
    .addToUi();
}

// ---------- utilitários ----------

/** Formata número como moeda pt-BR: 1234.5 -> "R$ 1.234,50". */
function brl(v) {
  return 'R$ ' + Number(v).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** Formata fração como percentual pt-BR: 0.1832 -> "18,32%". */
function pct(v) {
  return (Number(v) * 100).toFixed(2).replace('.', ',') + '%';
}

/** Junta uma lista em português: [17, 24, 395] -> "17, 24 e 395". */
function listar(itens) {
  if (itens.length <= 1) return itens.join('');
  return itens.slice(0, -1).join(', ') + ' e ' + itens[itens.length - 1];
}

/**
 * Lê uma aba como tabela: a linha `linhaCab` vira as chaves e cada linha
 * seguinte vira um objeto { 'Nome da coluna': valor }. Para na primeira
 * linha cuja 1ª coluna está vazia ou contém "TOTAL".
 */
function lerTabela(sheet, linhaCab) {
  var dados = sheet.getDataRange().getValues();
  var cab = dados[linhaCab - 1].map(function (h) { return String(h).trim(); });
  var linhas = [];
  for (var i = linhaCab; i < dados.length; i++) {
    var primeira = String(dados[i][0]).trim();
    if (primeira === '' || primeira.toUpperCase() === 'TOTAL') break;
    var obj = {};
    cab.forEach(function (chave, j) { if (chave) obj[chave] = dados[i][j]; });
    linhas.push(obj);
  }
  return linhas;
}

// ---------- geração ----------

/** Monta o array de frases de observação a partir das abas-fonte. */
function gerarObservacoes() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var taxa    = lerTabela(ss.getSheetByName(ABA_TAXA), LINHA_CAB_TAXA);
  var couvert = lerTabela(ss.getSheetByName(ABA_COUVERT), LINHA_CAB_COUVERT);
  var obs = [];

  // 1) Serviço: retirada total (taxa cobrada = 0) e parcial (0 < cobrada < esperada)
  var total = [], parcial = [];
  couvert.forEach(function (c) {
    var cobrada = Number(c['Taxa cobrada']), esperada = Number(c['Taxa esperada']);
    if (esperada <= 0) return;
    if (cobrada === 0) total.push(c['Comanda']);
    else if (cobrada < esperada - 0.05) parcial.push(c['Comanda']);
  });
  if (total.length || parcial.length) {
    var frase = '- Serviço: ';
    if (total.length)   frase += 'desconto total ' + (total.length > 1 ? 'nas comandas ' : 'na comanda ') + listar(total) + '.';
    if (parcial.length) frase += ' Parcial ' + (parcial.length > 1 ? 'nas comandas ' : 'na comanda ') + listar(parcial) + '.';
    obs.push(frase.trim());
  }

  // 2) Garçons com porcentagem alta de retirada
  taxa.forEach(function (g) {
    var p = Number(g['% retirado']);
    if (p > LIMITE_PCT) {
      obs.push('- Porcentagem alta de retirada do serviço: ' + g['Garçom'] + ' ' + pct(p) +
               ' — Total ' + g['Comandas atendidas'] + ' comandas atendidas — ' +
               g['Retiradas'] + ' retirada' + (g['Retiradas'] == 1 ? '' : 's') +
               ' — Total de ' + brl(g['Valor retirado']) + '.');
    }
  });

  // 3) Couvert não cobrado ou cobrado a menor
  couvert.forEach(function (c) {
    var dif = Number(c['Dif. couvert']);
    if (dif > 0.01) {
      var pessoas = c['Pessoas'] + (c['Pessoas'] == 1 ? ' pessoa' : ' pessoas');
      obs.push(Number(c['Couvert cobrado']) === 0
        ? '- Couvert não cobrado na comanda ' + c['Comanda'] + ' (' + pessoas + ').'
        : '- Couvert parcial na comanda ' + c['Comanda'] + ': cobrado ' + brl(c['Couvert cobrado']) +
          ' para ' + pessoas + ' (esperado ' + brl(c['Couvert esperado']) + ').');
    }
  });

  // 4) Diferença de caixa
  var dif = Number(ss.getSheetByName(ABA_FECH).getRange(CEL_DIF_CAIXA).getValue()) || 0;
  obs.push('- Diferença de caixa: ' + brl(dif) +
           (Math.abs(dif) <= LIMITE_CAIXA ? ' (dentro do limite de ' : ' (FORA do limite de ') + brl(LIMITE_CAIXA) + ').');

  return obs.length ? obs : ['- Nenhuma ocorrência encontrada.'];
}

/** Escreve as observações na aba Auditoria, a partir de CEL_DESTINO. */
function escreverObservacoes() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName(ABA_AUDIT);
  var obs = gerarObservacoes();
  limparObservacoes();
  var ini = aba.getRange(CEL_DESTINO);
  aba.getRange(ini.getRow(), ini.getColumn(), obs.length, 1)
     .setValues(obs.map(function (o) { return [o]; }))
     .setFontSize(10).setWrap(false);
  ss.toast(obs.length + ' observação(ões) gerada(s).', 'Auditoria', 4);
}

/** Limpa a área de observações (até 40 linhas abaixo de CEL_DESTINO). */
function limparObservacoes() {
  var aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA_AUDIT);
  var ini = aba.getRange(CEL_DESTINO);
  aba.getRange(ini.getRow(), ini.getColumn(), 40, 1).clearContent();
}
