module.exports = function(req, res, next) {

    if(req.session.user){
        res.locals.user = req.session.user;
    } else if(req.cookies.user){                     // ESTE MIDDLEWARE SE ENCARGA DE VERIFICAR SI HAY UNA SESSION ACTIVA Y MANTENERLA
        req.session.user = req.cookies.user;      // ES UN MIDDLWARE A NIVEL APLICACION
        res.locals.user = req.cookies.user;          // TAMBIEN SE ENCARGA DE ALMACENAR LAS COOKIES
    }
    next();
    
}