const { Item } = require('../database/models');

module.exports = async (req, res, next) => {
   if (req.session.user) {
      Item.findAndCountAll({
         where: {
            userId: req.session.user.id,
            state: 1
         },
         force: true
      })
         .then(data => {
            res.locals.cartQty = data.count;
            return next();
         })
   }  else {
      return next();
   }
}