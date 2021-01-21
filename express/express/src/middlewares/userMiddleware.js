let userMiddleware = {
    registered: function(req, res, next) {
        if(req.session.usuario){
            res.redirect('/users/profile')
        } else {
            next();
        }
    },
    guest: function(req, res, next) {           // ESTE MIDDLEWARE SE ENCARGA DE RENSTRINGIR EL ACCESO A USUARIOS QUE SEAN VISITANTES O QUE ESTEN LOGUEADOS
        if(req.session.usuario){
            next();
        } else {
            res.redirect('/users/login')
        }
    },
}

module.exports = userMiddleware;