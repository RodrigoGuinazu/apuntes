const bcrypt = require('bcrypt');
const db = require('../../database/models');
const User = require('../../database/models/User');
let {validationResult} = require('express-validator');

let userController = {

    // VISTA DE USUARIOS
    user: (req, res) => {
        res.render('user');
    },

    // VISTA DE LOGIN
    login: (req, res) => {
        res.render('login');
    },

    // VISTA DE REGISTRO
    register: (req, res) => {
        res.render('register');
    },

    // VISTA PARA LA MODIFICACION DEL USUARIO
    edit: (req, res) => {
        res.render('edit');
    },

    // CODIGO PARA PROCESAR Y GUARDAR AL USUARIO
    saveNewUser: (req, res) => {
        db.User.create({
            email: req.body.email,
            password: bcrypt.hashAsync(req.body.password, 10),
            name: req.body.name,
            role_id: 2
        })
        .then(
            res.redirect('login')
        )
        .catch(function(error){
            console.log(error);
        })
    },

    // CODIGO PARA PROCESAR EL LOGIN
    userLoged: (req, res) => {
        let errors = validationResult(req);
        db.User.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(user => {
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    req.session.user = user;    
                    res.redirect('/users');
                } else{
                    res.render('login', {errors: {msg: "Credenciales Incorrectas"}}) // En caso de que el mail exista en la DB, pero que las credenciales sean incorrectas
                }
            } else{
                res.render('login', {errors: {msg: "El email que ingresaste no esta registrado en el sitio"}}) // En caso de que el mail no exista en la DB
            }
        })
        .catch(function(error){
            console.log(error);
        })
    },

    // CODIGO PARA PROCESAR LA MODIFICACION DEL USUARIO // LA EDICION FUNCIONA CORRECTAMENTE, PERO HAY QUE HACER LOGOUT Y LOGIN NUEVAMENTE PARA VER LOS CAMBIOS
    userModified: (req, res) => {
        db.User.update(
        {
            email: req.body.email,
            password: res.locals.user.password,
            name: req.body.name,
            role_id: res.locals.user.role_id
        },
        {
            where: ({
                id: res.locals.user.id // USAMOS ESTE WHERE PARA IDENTIFICAR QUE COLUMNA ESTAMOS EDITANDO EN LA TABLA users DE LA DB    
            })
        })
        .then(
            res.redirect('/users')
        )
        .catch(function(error){
            console.log(error); // NO OLVIDAR LOS CATCH EN LAS PROMESAS
        })
    },

    // CODIGO PARA EL LOGOUT
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/users/login')
    },

    // CODIGO PARA ELIMINAR USUARIO // NO REDIRIGE AL REGISTRO PERO ELIMINA EL USUARIO CORRECTAMENTE
    delete: function(req, res){
        db.User.destroy({
            where: {
                id: res.locals.user.id // USAMOS ESTE WHERE PARA IDENTIFICAR QUE COLUMNA ESTAMOS "ELIMINANDO" EN LA TABLA users DE LA DB. RECORDAR QUE EL SOFT DELETE NO BORRA LOS DATOS DE LA TABLA SI NO QUE ACTULIZA LA COLUMNA deleted_at
            }
        })
        .then(
            res.redirect('/users/register')
        )
		.catch(function(error){
			console.log(error);
		})
    },
}

module.exports = userController;