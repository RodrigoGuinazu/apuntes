// CONFIGURANDO EL ROUTEO PARA LA API DE GENEROS

const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

router.get('/', genresController.listado);

module.exports = router;
