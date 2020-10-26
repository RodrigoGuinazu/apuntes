let colors = require('colors');
let operacion = require('./operaciones');
let a = Number(process.argv[2])
let operador = (process.argv[3])
let b = Number(process.argv[4])

switch(operador){
    case '+':
        console.log(operacion.sumar(a, b));
        break;
    case '-':
        console.log(operacion.restar(a, b));
        break;
    case '*':
        console.log(operacion.multiplicar(a, b));
        break;
    case '/':
        console.log(operacion.dividir(a, b));
         break;
    default:
        console.log('Operacion no soportada, actualmente se soporta suma(+), resta(-), multiplicacion(*), division(/). Ejemplo de operacion 10 / 2 RESPETAR LOS ESPACIOS!'.red);
        break;        
}