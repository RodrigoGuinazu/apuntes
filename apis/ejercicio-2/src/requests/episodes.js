const axios = require('axios');  // REQUERIMOS AXIOS
const defaults = require('./default');  // REQUERIMOS EL ARCHIVO default.js

const urlEpisode = 'episode/'  // CONSTANTE PARA COMPLEMENTAR LA URL DE LA API

let moviesResource = {
    listado: function(){
        return axios({
            ...defaults,  // HACEMOS UN SPREAD DE DEFAULTS QUE TIENE LA INFO BASE DE LA API (ver archivo requests/default.js)
            method: 'GET',
            url: urlEpisode  // COMPLEMENTAMOS LA URL QUE ESTA EN EL ARCHIVO default.js CON LA DIRECCION ESPECIFICA DECLARADA ARRIBA
        });
    },
    detalle: function(id){
        return axios({
            ...defaults,  // HACEMOS UN SPREAD DE DEFAULTS QUE TIENE LA INFO BASE DE LA API (ver archivo requests/default.js)
            method: 'GET',
            url: urlEpisode + id  // COMPLEMENTAMOS LA URL QUE ESTA EN EL ARCHIVO default.js CON LA DIRECCION ESPECIFICA DECLARADA ARRIBA
        });
    }
}

module.exports = moviesResource;