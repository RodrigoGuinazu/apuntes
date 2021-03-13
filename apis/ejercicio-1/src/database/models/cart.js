'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    orderNumber: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  },
  {
    tableName: 'carts'
  });
  Cart.associate = function(models) {
    Cart.belongsTo(
      models.User,
      {
        as: 'user',
        foreignKey: 'userId'
      }
    );

    Cart.hasMany(
      models.Item,
      {
        as: 'items',
        foreignKey: 'cartId'
      }
    );
  };
  return Cart;
};