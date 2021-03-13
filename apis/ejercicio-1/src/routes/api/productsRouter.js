// CONFIGURANDO EL ROUTEO PARA LA API DE PRODUCTOS

const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/api/productsController');

router.get('/latest', productsController.latest);
router.get('/offers', productsController.offers);
router.get('/categories', productsController.categories);
router.get('/:category?', productsController.category);

module.exports = router;
