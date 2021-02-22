const db = require('../../database/models');
const Product = require('../../database/models/Product');

let userController = {

    // VISTA PRODUCTOS
    products: (req, res) => {
        db.Product.findAll()
        .then(products => {
            res.render('products', {products: products}); // COMPARTO LA VISTA DE LISTADO DE PRODUCTOS CON TODOS LOS PRODUCTOS CARGADOS EN LA DB
        })
        .catch(function(error){
            console.log(error);
        })
        
    },

    // VISTA PARA LA CREACION DEL PRODUCTO
    create: (req, res) => {
        res.render('create');
    },

    // LOGICA PARA LA CREACION DEL PRODUCTO
    createUpload: (req, res) => {
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            image: req.files[0].filename
        })
        .then(product => {
            res.redirect('/products/' + product.id); // REDIRIGE AL PRODUCTO CREADO
        })
        .catch(function(error){
            console.log(error);
        })
    },

    // VISTA PARA LA MODIFICACION DEL PRODUCTO
    edit: (req, res) => {
        db.Product.findByPk(req.params.id) // BUSCA POR EL ID EN EL URL EL PRODUCTO CORRESPONDIENTE Y COMPARTE LA INFO DE ESE PRODUCTO
        .then(productToEdit => {
            res.render('edit_product', {productToEdit: productToEdit});
        })
        .catch(function(error){
            console.log(error);
        })
    },

    // LOGICA EDICION DEL PRODUCTO
    editProcess: (req, res, next) => {

        db.Product.findByPk(req.params.id)
        .then(product => {
            if(req.files.length == 0){ // EN CASO DE QUE NO SE SUBA UNA IMAGEN NUEVA MANTIENE LA ANTERIOR
                db.Product.update({
                    name: req.body.name,
                    price: req.body.price,
                    image: product.image
                },{
                    where: ({
                        id: req.params.id
                    })
                })
                .then(
                    res.redirect(req.params.id)
                )
                .catch(function(error){
                    console.log(error);
                })
            } else { // SI SUBE UNA NUEVA IMAGEN LA REEMPLAZA
                db.Product.update({
                    name: req.body.name,
                    price: req.body.price,
                    image: req.files[0].filename
                },{
                    where: ({
                        id: req.params.id
                    })
                })
                .then(
                    res.redirect(req.params.id)
                )
                .catch(function(error){
                    console.log(error);
                })
            }
        })
        .catch(function(error){
            console.log(error);
        })
		
    },

    // VISTA DEL PRODUCTO
    detail: (req, res, next) => {
        db.Product.findByPk(req.params.id) // BUSCA POR EL ID EN EL URL EL PRODUCTO CORRESPONDIENTE Y COMPARTE LA INFO DE ESE PRODUCTO
            .then(productDetail => {
                res.render('detail', {productDetail: productDetail});
			})
			.catch(function(error){
				console.log(error);
			})
    },

    // CODIGO PARA ELIMINAR UN PRODUCTO
    delete: (req, res, next) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(
            res.redirect('/products')
        )
		.catch(function(error){
			console.log(error);
		})
    }
}

module.exports = userController;