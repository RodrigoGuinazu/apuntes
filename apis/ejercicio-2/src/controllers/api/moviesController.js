// CONFIGURANDO EL CONTROLADOR PARA LA API DE MOVIES

const db = require('../../database/models')
const Actors = require('../../database/models/Actor')
const Genres = require('../../database/models/Genre')
const Movies = require('../../database/models/Movie')
const Sequelize = require('../../database/models')
const Op = db.Sequelize.Op;

let moviesController = {

    listado: function(req, res){

        db.Movies.findAll({
            include: ['genre','actors']
        })
        .then(function(movies){
            let respuesta = {
                meta: {
                    status: 200,
                    total: movies.length
                },
                data: movies
            }
            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })

    },

    detalle: function(req, res){

        db.Movies.findOne({
            where: {	
                id: req.params.id   
			},
            include: ['genre','actors']
        })
        .then(function(movie){
            let respuesta = {
                meta: {
                    status: 200,
                    title: movie.title
                },
                data: movie
            }
            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })

    },

    crear: function(req, res){

        db.Movies.create({
            id: req.body.id,
            title: req.body.title,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_dateid,
            genre_id: req.body.genre_id,
        })

        res.json({
            status: 200
        })

    },

    editar: function(req, res){

        db.Movies.update({
            id: req.body.id,
            title: req.body.title,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_dateid,
            genre_id: req.body.genre_id,
        },{
            where: ({
                id: req.params.id
            })
        })

        res.json({
            status: 200
        })

    },
    eliminar: function(req, res){

        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        
        res.json({
            status: 200
        })

    }

}

module.exports = moviesController;