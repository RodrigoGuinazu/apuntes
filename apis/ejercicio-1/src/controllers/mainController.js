// ******** Sequelize ***********

const { Product, Sequelize, Brand, Category } = require('../database/models');
const Op = Sequelize.Op;

module.exports = {
	index (req, res){

		const ultimos = Product.findAll({
			order: [
				['createdAt', 'DESC']
			],
			limit: 8
		});
		
		const inSale = Product.findAll({
			where: {
				discount: {
					[Op.gt]: 0
				}
			},
			limit: 8
		});

		Promise.all([ultimos, inSale])
			.then(([ultimos, inSale]) => res.render('index', { ultimos, inSale: inSale.sort(() => Math.random() - 0.5) }))
			.catch(e => console.log(e));

	},

	// Ejemplo con async / await
	async search (req, res) {

		let products = await Product.findAll({
			where: {
				name: {
					[Op.substring]: req.query.search
				}
			},
			limit: 12
		});

		return res.render('results', { products: products.sort(() => Math.random() - 0.5), search: req.query.search })
	}
};