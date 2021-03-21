var express = require('express');
var router = express.Router();
let characters = require('../requests/characters') // REQUERIMOS EL ARCHIVO DE LA API CON LA INFO DE LOS PERSONAJES
let episodes = require('../requests/episodes')  // REQUERIMOS EL ARCHIVO DE LA API CON LA INFO DE LOS EPISODIOS
let locations = require('../requests/locations')  // REQUERIMOS EL ARCHIVO DE LA API CON LA INFO DE LOS LUGARES
let indexController = require('../controllers/indexController');

router.get('/characters', function(req, res, next) {

  characters.listado()
  .then(function(result){
      res.json(result.data.results)
  })
  .catch(function(error){
      console.log(error)
  })

});

router.get('/episodes', function(req, res, next) {

  episodes.listado()
  .then(function(result){
      res.json(result.data.results)
  })
  .catch(function(error){
      console.log(error)
  })

});

router.get('/locations', function(req, res, next) {

  locations.listado()
  .then(function(result){
      res.json(result.data.results)
  })
  .catch(function(error){
      console.log(error)
  })

});


router.get('/ram', indexController.vista);

module.exports = router;
