var titulosModel = require("../models/titulosModel");

function listar(req, res) {

    titulosModel.listar()
    .then(function(resultado){
        res.status(200).json(resultado)
    }).catch(err=>{
        res.status(500).send(err)
    })
}

module.exports = {listar}