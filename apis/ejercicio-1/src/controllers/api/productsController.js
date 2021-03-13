// CONFIGURANDO EL CONTROLADOR PARA LA API DE PRODUCTOS

const db = require('../../database/models')
const Product = require('../../database/models/product')
const Category = require('../../database/models/category')
const Sequelize = require('../../database/models')
const Op = db.Sequelize.Op;

let productsController = {
    latest: function(req, res){

        const ultimos = db.Product.findAll({
			order: [
				['createdAt', 'DESC']
			],
			limit: 8
		});
        
        ultimos
        .then(function(productos){
            let respuesta = {
                meta: {
                    status: 200,
                    total: productos.length,
                    url: "/api/products/latest"
                },
                data: productos
            }
            res.send(respuesta)
        })
        .catch(function(err){
            console.log(err)
        })   
    },
    
    offers: function(req, res){

        const inSale = db.Product.findAll({
			where: {
				discount: {
					[Op.gt]: 0
				}
			},
			limit: 8
		});

        inSale
        .then(function(productos){
            let respuesta = {
                meta: {
                    status: 200,
                    total: productos.length,
                    url: "/api/products/offers"
                },
                data: productos
            }
            res.send(respuesta)
        })
        .catch(function(err){
            console.log(err)
        })
    },

    categories: function(req, res) {
        const categories = db.Category.findAll();

        categories
        .then(function(categories){
            let respuesta = {
                meta: {
                    status: 200,
                    categories: categories.length,
                    url: "/api/products/" + categories.name
                },
                data: categories
            }
            res.send(respuesta)
        })
        .catch(function(err){
            console.log(err)
        })  
    },

    category: function(req, res) {

        const category = db.Category.findOne({
			where: {	
                name: req.params.category   
			}
		});

        category
        .then(function(category){
            let respuesta = {
                meta: {
                    status: 200,
                    category: category.name,
                    url: "/api/products/" + category.name
                },
                data: category
            }
            res.send(respuesta)
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = productsController;