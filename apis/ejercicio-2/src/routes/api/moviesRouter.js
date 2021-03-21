// CONFIGURANDO EL ROUTEO PARA LA API DE MOVIES

const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.get('/', moviesController.listado);
router.get('/:id', moviesController.detalle);
router.post('/', moviesController.crear);
router.patch('/:id', moviesController.editar);
router.delete('/:id', moviesController.eliminar);

module.exports = router;
