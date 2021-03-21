// CONFIGURANDO EL CONTROLADOR PARA LA API DE GENEROS

const db = require('../../database/models')
const Genres = require('../../database/models/Genre')

let genresController = {

    listado: function(req, res){

        db.Movies.findAll()
        .then(function(genres){
            let respuesta = {
                meta: {
                    status: 200,
                    total: genres.length
                },
                data: genres
            }
            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })

    }
}

module.exports = genresController;