'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define('Brand', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  },
  {
    tableName: 'brands'
  });
  Brand.associate = function(models) {
    // associations can be defined here
    Brand.hasMany(
      models.Product,
      {
        as: 'products',
        foreignKey: 'brandId'
      }
    );
  };
  return Brand;
};