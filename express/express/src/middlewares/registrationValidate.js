const {check} = require('express-validator');

module.exports = [
    check('nombre').isLength({min:1}).withMessage('Ingresá tu nombre.'),
    check('apellido').isLength({min:1}).withMessage('Ingresá tu apellido.'),
    check('email').isEmail().withMessage('Ingresá un E-mail válido.'),
    check('password').isLength( {min: 8} ).withMessage('La contraseña debe tener al menos 8 caracteres.'),    // SE ENCARGA DE MANDAR LOS ERRORES DE LOS CAMPOS DE REGISTRO
    /*body('confirmarPassword').custom(function(value) {
      if ('password' != 'confirmarPassword') {
        return true;
      } else {
        return false;
      }
    }).withMessage('Las contraseñas deben coincidir.')*/
  ]