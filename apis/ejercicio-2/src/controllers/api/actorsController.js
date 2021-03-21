// CONFIGURANDO EL CONTROLADOR PARA LA API DE ACTORES

const db = require('../../database/models')
const Actors = require('../../database/models/Actor')

let actorsController = {

    listado: function(req, res){

        db.Actors.findAll()
        .then(function(actors){
            let respuesta = {
                meta: {
                    status: 200,
                    total: actors.length
                },
                data: actors
            }
            res.json(respuesta)
        })
        .catch(function(error){
            console.log(error)
        })

    }

}

module.exports = actorsController;