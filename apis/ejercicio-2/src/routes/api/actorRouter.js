// CONFIGURANDO EL ROUTEO PARA LA API DE ACTORES

const express = require('express');
const router = express.Router();
const actorsController = require('../../controllers/api/actorsController');

router.get('/', actorsController.listado);

module.exports = router;
