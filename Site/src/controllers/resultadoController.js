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

function listar1(req, res) {

    var idUsuario = req.params.idUsuario
    resultadoModel.listar1(idUsuario)
    .then(function(resultado){
        res.status(200).json(resultado)
    }).catch(err=>{
        res.status(500).send(err)
    })
}

function listar2(req, res) {

    resultadoModel.listar2()
    .then(function(resultado){
        res.status(200).json(resultado)
    }).catch(err=>{
        res.status(500).send(err)
    })
}

module.exports = {cadastrarNota, listar1, listar2}