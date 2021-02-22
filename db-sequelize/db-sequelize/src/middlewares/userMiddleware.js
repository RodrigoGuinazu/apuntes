let userMiddleware = {
    registered: function(req, res, next) {
        if(req.session.user){
            res.redirect('/users')
        } else {
            next();
        }
    },
    guest: function(req, res, next) {           // ESTE MIDDLEWARE SE ENCARGA DE RENSTRINGIR EL ACCESO A userS QUE SEAN VISITANTES O QUE ESTEN LOGUEADOS
        if(req.session.user){
            next();
        } else {
            res.redirect('/users/login')
        }
    },
}

module.exports = userMiddleware;