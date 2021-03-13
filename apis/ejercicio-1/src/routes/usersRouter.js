// ************  Requires  ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Middlewares ************

const guestMiddleware = require('../middlewares/guest');
const authMiddleware = require('../middlewares/auth');
const validator = require('../middlewares/validator');

// ************ Controller Require ************

const usersController = require('../controllers/usersController');

// ************  Multer Config  ***************

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
         cb(null, path.resolve(__dirname, '../../public/images/users'))
   },
   filename: function (req, file, cb) {
         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
})

var upload = multer({
   storage,

   // Validate image
   fileFilter: (req, file, cb) => {
      
      const acceptedExtensions = ['.jpg', '.jpeg', '.png'];

      const ext = path.extname(file.originalname);

      if (!acceptedExtensions.includes(ext)){
            req.file = file;
      }
         
      cb(null, acceptedExtensions.includes(ext));
   }
});

// ************       Routes       ************

router.get('/', usersController.index); /* GET - All users */
router.get('/profile/', authMiddleware, usersController.profile); /* GET - user detail */
router.get('/profile/sales', authMiddleware, usersController.sales);

/*** REGISTER user ***/ 
router.get('/register/', guestMiddleware , usersController.create); /* GET - Form to create */
router.post('/register/', guestMiddleware, upload.single('image'), validator.register, usersController.store); /* POST - Store in DB */

/*** LOG user ***/
router.get('/login/', guestMiddleware, usersController.showLogin); /* GET - Form to create */
router.post('/login/', guestMiddleware, validator.login, usersController.processLogin); /* POST - Log user */

/*** LOGOUT user ***/

router.post('/logout/', authMiddleware, usersController.logout); /* POST - Logout user */

/*** EDIT ONE user ***/ 
router.get('/:id/edit/', usersController.edit); /* GET - Form to create */
// router.patch('/:id', usersController.update); /* PATCH - Update in DB */

/*** DELETE ONE user***/ 
router.delete('/:id', usersController.destroy); /* DELETE - Delete from DB */

router.get('/cart', authMiddleware, usersController.cart);
router.post('/addToCart', authMiddleware, validator.addToCart, usersController.addToCart);
router.get('/history', authMiddleware, usersController.history);
router.post('/shop', authMiddleware, usersController.shop);
router.post('/deleteFromCart', authMiddleware, usersController.deleteFromCart);
router.get('/buy-detail/:id', authMiddleware, usersController.showBuyDetail);


module.exports = router;
