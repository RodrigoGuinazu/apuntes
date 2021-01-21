let multer = require('multer');
let path = require('path');

   var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {                                              
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))   // MIDDLEWARE PARA SUBIR IMAGENES
    },
  })

  module.exports = multer({ storage: storage });