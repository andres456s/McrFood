//requerimientos
const {Router} = require("express");
const {defaul:mongoose} = require("mongoose");
const router =Router()
const RecetaCrl = require('../controller/Receta.Controllers');

//rutas y endspoints
router.post("/crearReceta",RecetaCrl.crearReceta)

module.exports = router;