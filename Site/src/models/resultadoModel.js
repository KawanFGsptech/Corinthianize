var database = require("../database/config")

function cadastrarNota(Nota, idUsuario) {
    console.log('estou na model do resultado')
    var instrucaoSql = `insert into ResultadoQuiz (Resultado, fkUsuario) values (${Nota}, ${idUsuario});`
    return database.executar(instrucaoSql)
}

function listar1(idUsuario) {
    console.log('Estou na model do resultado')
    var instrucaoSql = `select resultado from ResultadoQuiz where fkUsuario = ${idUsuario}`
    return database.executar(instrucaoSql)
}

function listar2() {
    console.log('Estou na model do resultado')
    var instrucaoSql = `select u.nome, r.resultado from Usuario as u join ResultadoQuiz as r on fkUsuario = idUsuario`
    return database.executar(instrucaoSql)
}

module.exports = {cadastrarNota, listar1, listar2}