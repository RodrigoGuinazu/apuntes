const express = require('express');
let usersController = require('../controllers/usersController');
const userMiddleware = require('../middlewares/userMiddleware'); // SE REQUIERE EL userMiddleware.js

let router = express.Router();
router.get('/', userMiddleware.guest, usersController.user);
router.get('/login', userMiddleware.registered, usersController.login);
router.post('/login', usersController.userLoged);
router.get('/register', userMiddleware.registered, usersController.register);
router.post('/register', usersController.saveNewUser);
router.get('/edit', userMiddleware.guest, usersController.edit);
router.patch('/edit', usersController.userModified);
router.get('/logout', userMiddleware.guest, usersController.logout);
router.get('/delete', userMiddleware.guest, usersController.delete);

module.exports = router;