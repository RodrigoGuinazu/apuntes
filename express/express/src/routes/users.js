const express = require('express');
let loginController = require('../controllers/userController');
let multerMiddleware = require('../middlewares/multerMiddleware');
let { check, validationResult, body } = require('express-validator');
const registrationValidate = require('../middlewares/registrationValidate');
const userMiddleware = require('../middlewares/userMiddleware');

let router = express.Router();
router.get('/', userMiddleware.guest, loginController.profile);
router.get('/login', userMiddleware.registered, loginController.login);
router.post('/login', loginController.userLoged);
router.get('/register', userMiddleware.registered, loginController.register);
router.post('/register', registrationValidate, loginController.saveNewUser);
router.get('/edit', multerMiddleware.any(), loginController.edit);
router.patch('/edit', multerMiddleware.any(), loginController.userModified);
router.get('/logout', loginController.logout);

module.exports = router;