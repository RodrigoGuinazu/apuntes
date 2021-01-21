module.exports = function(req, res, next) {

    if(req.session.usuario){
        res.locals.user = req.session.usuario;
    } else if(req.cookies.usuario){
        req.session.usuario = req.cookies.usuario;
        res.locals.user = req.cookies.usuario;
    }
    next();
    
}