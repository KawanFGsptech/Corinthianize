var express = require("express");
var router = express.Router();
var resultadoController = require("../controllers/resultadoController")

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarNota/:idUsuario", function (req, res) {
    resultadoController.cadastrarNota(req, res);
})

router.get("/listar1/:idUsuario", function (req, res) {
    resultadoController.listar1(req, res);
})

router.get("/listar2/", function (req, res) {
    resultadoController.listar2(req, res);
})

module.exports = router;