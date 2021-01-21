const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require("express-validator");

let users = fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json'), {encoding: 'utf-8'}); // SE HACE UN READFILESYNC PARA ACCEDER A LOS DATOS DE USUARIOS.JSON
users = JSON.parse(users); // SE PARSEA USUARIOS.JSON PARA QUE JS LO PUEDA LEER

let userController = {

    // VISTA LOGIN
    login: (req, res) => {
        res.render('login');
    },

    // CODIGO PARA PROCESAR EL LOGIN
    userLoged: (req, res) => {
        let errors = validationResult(req); // SI HAY ERRORES EN LA VALIDACION DE LOGIN O REGISTRO ESTOS SON ALMACENADOS AQUI

            let usuario = users.find(user => user.email == req.body.email); // SE CREA LA VARIABLE USUARIO PARA ALMACENAR LA SESSION DE LA PERSONA QUE SE HAYA LOGUEADO EN LA PAGINA

            if(usuario != undefined) { // SI EL USUARIO EXISTE (MAIL Y CONTRASENA VALIDAS) EJECUTA...
                if(bcrypt.compareSync(req.body.password, usuario.password)) { // COMPARA LA CONTRASENA HASHEADA EN EL JSON CON LA QUE SE PUSO EN EL FORM DE LOGIN
                    req.session.usuario = usuario; // EN CASO DE QUE LAS CREDENCIALES SEAN VALIDAS AHORA REQ.SESSION.USUARIO SERA LA PERSONA QUE SE LOGUEO
 
                    if(req.body.remindme){ // COOKIES
                        res.cookie('usuario', usuario.email, {maxAge: 1000 * 60 * 60}) // QUE SE GUARDA EN LA COOKIE Y POR CUANTO TIEMPO
                        res.locals.usuario = req.session.usuario
                    }
                    res.redirect('/users');
                } else {
                res.render("login", { errors: [
                    {msg: "Credenciales incorrectas"} // EN CASO DE TENER CREDENCIALES INCORRECTAS MANDARA ESTE MENSAJE
                ]})
                }
            } else {
            res.render("login", { errors: [
                {msg: "No existe ningun usuario registrado con ese email"} // EN CASO DE QUE EL MAIL NO FIGURE EN EL JSON MANDARA ESTE MENSAJE
            ]})
        }
    },

    // CODIGO PARA EL LOGOUT

    logout: function(req, res){
        req.session.destroy(); // DESTRUYE LA SESSION
        res.redirect('/users/login')
    },

    // VISTA REGISTRO
    register: (req, res) => {
        res.render('register');
    },

    // CODIGO PARA PROCESAR Y GUARDAR AL USUARIO
    saveNewUser: (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('register', {errors: errors.errors});
        } else {
            let arrayId = [];                                   //
                                                                
            arrayId = users.map(function(obj) {                 //
                return obj.id                                   //
            })                                                  //

            let mayorId = arrayId.reduce((a, b) => {            //
                if(a > b) {                                     // ESTO GENERAR UN NUEVO ID (NUMERO QUE LE SIGUE AL ULTIMO EN EL JSON) PARA CUANDO UN USUARIO NUEVO SE REGISTRA
                    return a                                    //
                } else {                                        //
                    return b                                    //
                }                                               //
            })                                                  //

            let nuevoId = mayorId+1;                            //

            let newUser = {                                     //
                id: nuevoId,                                    //
                email: req.body.email,                          //  TOMA TODOS LOS DATOS DEL FORM DE REGISTRO Y LOS ALMACENA EN LA VARIABLE newUser
                nombre: req.body.nombre,                        //
                apellido: req.body.apellido,                    //
                fotoPerfil: "",                                 //
                password: bcrypt.hashSync(req.body.password, 10),// TOMA LA CONTRASENA QUE PONE EN EL FORM Y LA HASHEA PARA ALMACENARLA CON MAS SEGURIDAD
            }

            users.push(newUser);                                                            //  

            const JSONnewUser = JSON.stringify(users)                                       //  SE CONVIERTE EL newUser A STRINGIFY PARA PODER ALMACENARLO EN EL JSON

            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSONnewUser);   //  SE PUSHEA A newUser AL JSON DE USUARIOS

            res.redirect("login")
        }
    },

    // VISTA DEL USUARIO
    userInfo: (req, res) => {
        res.render('user');
    },

    // VISTA PARA LA MODIFICACION DEL USUARIO
    edit: (req, res) => {
        res.render('edit');
    },

    // CODIGO PARA PROCESAR LA MODIFICACION DEL USUARIO
    userModified: (req, res) => {
        users.forEach(user => {
            if(req.session.usuario.id == user.id){
                user.nombre = req.body.nombre
                user.apellido = req.body.apellido
                user.fechaNacimiento = req.body.fechaNacimiento             // BUSCA A TRAVES DEL ID DEL USUARIO CON LA SESSION PARA PODER MODFICAR SUS DATOS
                user.direccion = req.body.direccion                         // Y REEMPLAZA LOS DATOS QUE ESTAN EN EL JSON CON LOS QUE PONE EN EL FORM
                user.genero = req.body.genero
                if (req.files[0] != undefined){
                    user.imagen = req.files[0].filename
                }
            }
            
        });
        const JSONuser = JSON.stringify(users);                                             //  SE CONVIERTE A STRINGIFY PARA PODER ALMACENARLO EN EL JSON
        fs.writeFileSync(path.join(__dirname, '..','data','usuarios.json'), JSONuser);      // SE PUSHEAN LOS CAMBIOS AL JSON DE USUARIOS
        res.redirect('/users')                                                              //  
    },
    profile: function(req, res) {
        res.render('user');
    }
}

module.exports = userController;