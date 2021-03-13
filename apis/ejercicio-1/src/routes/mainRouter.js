// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); /* GET - home page */
router.get('/search', mainController.search); /* GET - search results */

module.exports = router;
