'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {

    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discount: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    
  },
  {
    tableName: 'products'
  });
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(
      models.Brand,
      {
        as: 'brand',
        foreingKey: 'brandId'
      }
    );

    Product.belongsTo(
      models.User,
      {
        as: 'user',
        foreignKey: 'userId'
      }
    );

    Product.belongsTo(
      models.Category,
      {
        as: 'category',
        foreignKey: 'categoryId'
      }
    );
    
    Product.hasMany(
      models.Item,
      {
        as: 'items',
        foreignKey: 'productId'
      }
    );
  };
  return Product;
};