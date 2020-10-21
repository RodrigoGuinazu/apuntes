/* Crear variable (por convencion mismo nombre que el modulo). Usamos la palabra reservada require para llamar
al modulo y entre parentesis y '' el nombre del modulo*/

let fs = require('fs'); // modulo de node, en este caso usamos la libreria fs.
let moment = require('moment'); //modulo de npm, en este caso usamos la libreria moment.
let madres = require('./madres'); // modulo propio. Tener en cuenta si es propio hay que aclarar el path de la carpeta.

let leer = fs.readFileSync(__dirname + '/TuMama.txt', 'utf-8');
/*
Metodo readFileSync para ver y leer un archivo.
Constante __dirname que se va cambiar por la carpeta en donde se encuentra el archivo que estamos ejecutando.
En string agregando la / y el nombre del archivo que queremos leer.
Usamos 'utf-8' para que lea las tildes en el archivo.
*/

console.log(leer);
console.log(moment().format('Do MMM YYYY')); // .format propio de la libreria moment.
console.log(madres); /* Al nombrar index.js el archivo del modulo no hace falta especificar el nombre del archivo.
En caso de nombrarlo de otra manera abria que agregar /nombre del archivo luego del nombre del modulo*/