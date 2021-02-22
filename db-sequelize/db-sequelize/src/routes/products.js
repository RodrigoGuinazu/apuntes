let multerMiddleware = require('../middlewares/multerMiddleware'); // SE REQUIERE EL multerMiddlware.js
const express = require('express');
let productsController = require('../controllers/productsController');

let router = express.Router();
router.get('/', productsController.products);
router.get('/create', productsController.create);
router.post('/', multerMiddleware.any(), productsController.createUpload);
router.get('/:id', productsController.detail);
router.get('/:id/edit', productsController.edit);
router.patch('/:id', multerMiddleware.any(), productsController.editProcess);
router.delete('/:id', productsController.delete);

module.exports = router;