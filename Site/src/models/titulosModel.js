var database = require("../database/config")

function listar() {
    console.log('Estou na model dos titulos')
    var instrucaoSql = `select campeonato, qtd from Titulos`
    return database.executar(instrucaoSql)
}

module.exports = {listar}