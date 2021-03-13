'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    admin: DataTypes.TINYINT,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'users'
  });
  User.associate = function(models) {
    User.hasMany(
      models.Product,
      {
        as: 'products',
        foreignKey: 'userId'
      }
    );

    User.hasMany(
      models.Token,
      {
        as: 'tokens',
        foreignKey: 'userId'
      }
    );

    User.hasMany(
      models.Cart, 
      {
        as: 'carts',
        foreignKey: 'userId'
      }
    );

    User.hasMany(
      models.Item,
      {
        as: 'sales',
        foreignKey: 'sellerId'
      }
    );
  };
  return User;
};