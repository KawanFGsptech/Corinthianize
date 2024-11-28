var express = require("express");
var router = express.Router();
var titulosController = require("../controllers/titulosController")


router.get("/listar/", function (req, res) {
    titulosController.listar(req, res);
})

module.exports = router;