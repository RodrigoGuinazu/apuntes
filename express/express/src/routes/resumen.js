const express = require('express');
let resumenController = require('../controllers/resumenController');

let router = express.Router();
router.get('/', resumenController.resumenExpress);
router.get('/ruta-parametrizada/:id/opcion/:idOpcion?', resumenController.rutaParametrizada);

module.exports = router;
