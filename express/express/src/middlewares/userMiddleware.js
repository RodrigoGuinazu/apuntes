let userMiddleware = {
    registered: function(req, res, next) {
        if(req.session.usuario){
            res.redirect('/users/profile')
        } else {
            next();
        }
    },
    guest: function(req, res, next) {
        if(req.session.usuario){
            next();
        } else {
            res.redirect('/users/login')
        }
    },
}

module.exports = userMiddleware;