'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genres', {
    name: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    timestamps : false
  });

  Genre.associate = function(models) {
    Genre.hasMany(models.Movies,{
      as: 'movies',
      foreignKey: 'genre_id'
    });
  };
  return Genre;
};