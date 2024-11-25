var resultadoModel = require("../models/resultadoModel");

function cadastrarNota(req, res) {
    var Nota = req.body.NotaServer
    console.log(`nota: ${Nota}`)

    var idUsuario = req.params.idUsuario
    console.log(idUsuario)

    resultadoModel.cadastrarNota(Nota, idUsuario)
    .then(function(){
        res.status(201).send("Resultado cadastrado!!!")
    }).catch(err=>{
        res.status(500).send(err)
    })
}

function listar(req, res) {
    resultadoModel.listar()
    .then(function(resultado){
        res.status(200).json(resultado)
    }).catch(err=>{
        res.status(500).send(err)
    })
}

module.exports = {cadastrarNota,listar}