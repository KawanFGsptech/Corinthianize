var database = require("../database/config")

function cadastrarNota(Nota, idUsuario) {
    var instrucaoSql = `insert into ResultadoQuiz (Resultado, fkUsuario) values (${Nota}, ${idUsuario});`
    return database.executar(instrucaoSql)
}

function listar1(idUsuario) {
    var instrucaoSql = `select resultado from ResultadoQuiz where fkUsuario = ${idUsuario}`
    return database.executar(instrucaoSql)
}

function listar2() {
    var instrucaoSql = `select u.nick, r.resultado from Usuario as u join ResultadoQuiz as r on fkUsuario = idUsuario order by r.resultado desc`
    return database.executar(instrucaoSql)
}

function kpis() {
    var instrucaoSql = `select count(resultado) as total,  avg(resultado) as media from ResultadoQuiz`
    return database.executar(instrucaoSql)
}

module.exports = {cadastrarNota, listar1, listar2, kpis}