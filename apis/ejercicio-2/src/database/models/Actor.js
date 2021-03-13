'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actors', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    favorite_movie_id: DataTypes.INTEGER,
    rating: DataTypes.FLOAT
  }, {
    timestamps: false
  });
  Actor.associate = function(models) {
    Actor.belongsTo(models.Movies,{
        as: 'favorite',
        foreignKey: 'favorite_movie_id'
    });
    Actor.belongsToMany(models.Movies,{
        as: 'movies',
        through: 'actor_movie',
        foreignKey: 'actor_id',
        otherKey: 'movie_id',
        timestamps: false
    })
  };
  return Actor;
};