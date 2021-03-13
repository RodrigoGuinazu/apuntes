
module.exports = (sequelize, DataTypes) => {

    const cols = {
        title: DataTypes.STRING,
        awards: DataTypes.INTEGER,
        length: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        genre_id: DataTypes.INTEGER
    }

    const config = {
        tableName : 'movies',
        timestamps: false
    }

    const Movie = sequelize.define('Movies',cols,config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genres,{
            as: 'genre',
            foreignKey: 'genre_id'
        });
        Movie.belongsToMany(models.Actors,{
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })
    }
    
    return Movie;

};