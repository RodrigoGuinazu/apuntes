let operacion = require('./operaciones');

let resultado = operacion.dividir(Number(process.argv[2]), Number(process.argv[3]));

console.log(resultado);