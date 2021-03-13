const { validationResult } = require('express-validator');
const createError = require('http-errors');

// ******** Sequelize ***********

const { Product, Brand, Category } = require('../database/models');

module.exports = {
	
	// Root - Show all products
	async index (req, res, next) {

		if(Number(req.params.page)){
			let products = await Product.findAll({
				limit: 4,
				offset: (req.params.page - 1) * 4
			})
			
			let nextProducts = await Product.findAll({
				limit: 4,
				offset: req.params.page * 4
			});
			if(products.length > 0){
				return res.render('products/products', { products, nextProducts, page: req.params.page})
			}
			return next(createError(404))
		} else {
			// return res.status(500).send('Something broke! :(')
			return next(createError(404))
		}
		
	},

	// Detail - Detail from one product
	detail (req, res) {
		Product.findByPk(req.params.id)
			.then(product => res.render('products/detail', { product }))
			.catch(e => console.log(e));
	},

	// Create - Form to create
	create (req, res) {
		const categories = Category.findAll();
		const brands = Brand.findAll();

		Promise.all([categories, brands])
			.then(([categories, brands]) => res.render('products/product-create-form', { categories, brands }))
			.catch(e => console.log(e));
	},
	
	// Create -  Method to store
	store (req, res) {

		const errors = validationResult(req);

		if(errors.isEmpty()){
			const _body = req.body;
			_body.price = Number(req.body.price);
			_body.discount = Number(req.body.discount);
			_body.image = req.file.filename;
			_body.userId = req.session.user.id;
			_body.categoryId = Number(req.body.category);
			_body.brandId = Number(req.body.brand);

			Product.create(_body)
				.then(product => {

					return res.redirect(`/products/detail/${product.id}`)
				})
				.catch(e => console.log(e));
		} else {
			const categories = Category.findAll();
			const brands = Brand.findAll();

			Promise.all([categories, brands])
				.then(([categories, brands]) => res.render('products/product-create-form', { categories, brands, errors: errors.mapped(), old: req.body }))
				.catch(e => console.log(e));
		}

	},

	// Update - Form to edit
	edit (req, res) {
		const product = Product.findByPk(req.params.id);
		const categories = Category.findAll();
		const brands = Brand.findAll();

		Promise.all([product, categories, brands])
			.then(([product, categories, brands]) => res.render('products/product-edit-form', { product, categories, brands }))
			.catch(e => console.log(e));
	},
	// Update - Method to update
	update (req, res) {

		const errors = validationResult(req);

		if (errors.isEmpty()) {

			Product.findByPk(req.params.id)
				.then(product => {

					const _body = req.body;

					_body.price = Number(req.body.price);
					_body.discount = Number(req.body.discount);
					_body.image = req.file != undefined ? req.file.filename : product.image;
					_body.userId = req.session.user.id;
					_body.categoryId = Number(req.body.category);
					_body.brandId = Number(req.body.brand);
					// delete _body.brand;
					// delete _body.category;

					return Product.update(_body, {
						where: {
							id: req.params.id
						}
					})
				})
				.then(confirm => res.redirect(`/products/detail/${req.params.id}`))
				.catch(e => console.log(e));

		} else {
			const categories = Category.findAll();
			const brands = Brand.findAll();

			console.log(req.body)
	
			Promise.all([categories, brands])
				.then(([categories, brands]) => {
					
					return res.render(
						'products/product-edit-form',
						{ 
							product: req.body,
							id: req.params.id,
							categories,
							brands,
							errors: errors.mapped()
					})
				})
				.catch(e => console.log(e));
		}
	},

	// Delete - Delete one product from DB
	destroy (req, res) {
		Product.destroy({
			where: {
				id: req.params.id
			},
			force: true
		})
			.then(confirm => {
				res.redirect('/')
			})
			.catch(e => console.log(e));
	},
	async categories (req, res) {
		let where = {};
		let products = [];
		let title = "Todos los productos";

		if (req.params.category) {
			let category = await Category.findOne({
				where: {
				   name: req.params.category
				},
				include: ['products']
			});
			
			title = req.params.category;
			 
			if (category) {
				products = category.products
			};
		} else {
			products = await Product.findAll(where);
		}

		let categories = await Category.findAll({
			include: ['products']
		});

		return res.render('products/categories', { products, categories, title })
	}
}