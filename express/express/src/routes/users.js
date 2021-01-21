const express = require('express');
let loginController = require('../controllers/userController');
let multerMiddleware = require('../middlewares/multerMiddleware'); // SE REQUIERE EL multerMiddlware.js
let { check, validationResult, body } = require('express-validator'); // EXPRESS VALIDATOR
const registrationValidate = require('../middlewares/registrationValidate'); // SE REQUIERE EL registrationValidate.js
const userMiddleware = require('../middlewares/userMiddleware'); // SE REQUIERE EL userMiddleware.js

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