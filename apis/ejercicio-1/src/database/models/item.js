"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    salePrice: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    subTotal: DataTypes.INTEGER,
    state: DataTypes.TINYINT,
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
  },
  {
    tableName: 'items'
  });

  Item.closeItems = function (idUser) {
    return sequelize.query(
      `UPDATE items SET state = 0 WHERE userId = ${idUser} AND state = 1`
    );
  };

  Item.assignItems = function (idUser, idCart) {
    return sequelize.query(
      `UPDATE items SET cartId = ${idCart} WHERE userId = ${idUser} AND cartId IS NULL`
    );
  };

  Item.associate = function (models) {
    Item.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });

    Item.belongsTo(models.Cart, {
      as: "cart",
      foreignKey: "cartId",
    });

    Item.belongsTo(models.Product, {
      as: "product",
      foreignKey: "productId",
    });

    Item.belongsTo(models.User, {
      as: "seller",
      foreignKey: "sellerId",
    });
  };
  return Item;
};
