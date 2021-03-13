const path = require("path");
const { body } = require("express-validator");
const bycript = require("bcryptjs");

// ******** Sequelize ***********

const { User } = require("../database/models");

module.exports = {
  register: [
    //Username
    body("username")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value) => {
        return User.findOne({
          where: {
            username: value,
          },
        }).then((user) => {
          if (user) {
            return Promise.reject("Usuario ya registrado");
          }
        });
      }),
    // Email
    body("email")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isEmail()
      .withMessage("Debes ingresar un email válido")
      .bail()
      .custom((value) => {
        return User.findOne({
          where: {
            email: value,
          },
        }).then((user) => {
          if (user) {
            return Promise.reject("Email registrado");
          }
        });
      }),
    // Image
    body("image")
      .custom((value, { req }) => {
        if (req.file != undefined) {
          const acceptedExtensions = [".jpg", ".jpeg", ".png"];
          const ext = path.extname(req.file.originalname);
          return acceptedExtensions.includes(ext);
        }

        return true;
      })
      .withMessage(
        "La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG"
      ),
    // Password
    body("password")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("La contraseña debe tener al menos 3 carácteres"),
    // Retype password
    body("retype")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value, { req }) => req.body.password == value)
      .withMessage("Las contraseñas no coinciden"),
  ],
  login: [
    // Email
    body("email")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isEmail()
      .withMessage("Debes ingresar un email válido")
      .bail()
      .custom((value, { req }) => {
        return User.findOne({
          where: {
            email: value,
          },
        }).then((user) => {
          if (user) {
            if (!bycript.compareSync(req.body.password, user.password)) {
              return Promise.reject("Contraseña o email inválidos");
            }
          } else {
            return Promise.reject("Contraseña o email inválidos");
          }
        });
      }),
  ],
  createProduct: [
    body("name").notEmpty().withMessage("Campo obligatorio"),
    body("price")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isNumeric()
      .withMessage("Solo se aceptan números")
      .bail()
      .custom((value, { req }) => req.body.price > 0)
      .withMessage("No se aceptan números negativos"),
    body("image")
      .custom((value, { req }) => req.file)
      .withMessage("Debes ingresar una imagen para tu producto")
      .bail()
      .custom((value, { req }) => {
        const acceptedExtensions = [".jpg", ".jpeg", ".png"];
        const ext = path.extname(req.file.originalname);
        return acceptedExtensions.includes(ext);
      })
      .withMessage(
        "La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG"
      ),
    body("price")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value) => parseInt(value, 10) > 0)
      .withMessage("No se aceptan números negativos"),
    body("discount")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isNumeric()
      .withMessage("Solo se aceptan números")
      .bail()
      .custom((value) => parseInt(value, 10) >= 0)
      .withMessage("No se aceptan números negativos")
      .bail()
      .custom((value) => parseInt(value, 10) < 99)
      .withMessage("El descuento no puede ser mayor ni igual al 100%"),
    body("category").notEmpty().withMessage("Campo obligatorio"),
    body("description")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isLength({ min: 30 })
      .withMessage("La descripción debe tener al menos 30 carácteres")
      .bail()
      .isLength({ max: 100 })
      .withMessage("La descripción debe tener menos de 100 carácteres"),
  ],
  editProduct: [
    body("name").notEmpty().withMessage("Campo obligatorio"),
    body("price")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isNumeric()
      .withMessage("Solo se aceptan números")
      .bail()
      .custom((value, { req }) => req.body.price > 0)
      .withMessage("No se aceptan números negativos"),
    body("image")
      .custom((value, { req }) => {
        if (req.file != undefined) {
          const acceptedExtensions = [".jpg", ".jpeg", ".png"];
          const ext = path.extname(req.file.originalname);
          return acceptedExtensions.includes(ext);
        }

        return true;
      })
      .withMessage(
        "La imagen debe tener uno de los siguientes formatos: JPG, JPEG, PNG"
      ),
    body("price")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value) => parseInt(value, 10) > 0)
      .withMessage("El valor de tu producto no puede ser negativo ni 0"),
    body("discount")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isNumeric()
      .withMessage("Solo se aceptan números")
      .bail()
      .custom((value) => parseInt(value, 10) >= 0)
      .withMessage("No se aceptan números negativos")
      .bail()
      .custom((value) => parseInt(value, 10) < 99)
      .withMessage("El descuento no puede ser mayor ni igual al 100%"),
    body("category").notEmpty().withMessage("Campo obligatorio"),
    body("description")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isLength({ min: 30 })
      .withMessage("La descripción debe tener al menos 30 carácteres")
      .bail()
      .isLength({ max: 100 })
      .withMessage("La descripción debe tener menos de 100 carácteres"),
  ],
  addToCart: [
    body("quantity")
      .custom((value) => value > 0)
      .withMessage("Debe agregar al menos 1 producto al carrito"),
  ],
};
