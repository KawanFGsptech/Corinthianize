var database = require("../database/config");

function atualizarVoto(nomeJogador) {
  var instrucaoSql = `
        UPDATE votos
        SET qtd = qtd + 1
        WHERE jogador = '${nomeJogador}'
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarVotos() {
    var instrucaoSql = `SELECT jogador, posicao, qtd FROM Votos`;
  
    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    atualizarVoto,
    buscarVotos,
  };