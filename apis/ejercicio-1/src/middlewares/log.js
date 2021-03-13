// ******** Sequelize ***********

const { User, Token } = require('../database/models');

module.exports = (req, res, next) => {

   res.locals.user = false;

   if (req.session.user) {
      res.locals.user = req.session.user;
      return next();
   } else if (req.cookies.userToken){
      Token.findOne({
         where: {
            token: req.cookies.userToken
         }
      })
       .then(token => {
          User.findByPk(token.userId)
            .then(user => {
               delete user.password;

               req.session.user = user;
               res.locals.user = user;

               return next();
            })
            .catch(e => console.log(e));
       })
       .catch(e => console.log(e));

   } else {
      return next();
   }
   

}