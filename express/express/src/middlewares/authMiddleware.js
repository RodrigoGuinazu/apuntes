module.exports = function(req, res, next) {

    if(req.session.usuario){
        res.locals.user = req.session.usuario;
    } else if(req.cookies.usuario){                     // ESTE MIDDLEWARE SE ENCARGA DE VERIFICAR SI HAY UNA SESSION ACTIVA Y MANTENERLA
        req.session.usuario = req.cookies.usuario;      // ES UN MIDDLWARE A NIVEL APLICACION
        res.locals.user = req.cookies.usuario;          // TAMBIEN SE ENCARGA DE ALMACENAR LAS COOKIES
    }
    next();
    
}