// ******** Sequelize ***********

const { Product } = require('../database/models');

module.exports = (req, res, next) => {
   Product.findByPk(req.params.id)
      .then(product => {
         if(product){
            if(req.session.user.id != product.userId){
               return res.redirect('/');
            }
            return next();
         }
         return next();
      })
}