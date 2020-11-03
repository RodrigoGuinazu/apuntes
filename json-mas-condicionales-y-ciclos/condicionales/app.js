// if ternario  --->  Se escribe de forma horizontal. No hace falta usar ni el if ni el else.

// Estructura: condicion? primera exprecion: segunda expresion;

let fruta = 'manzana';

let resultado = fruta == 'manzana'? 'Buenisimo, me gustan las manzanas': 'Ufa, queria manzanas';
console.log(resultado);

// Switch   ----> Evalua una condicion, y segun el resultado, ejecuta el codigo correspondiente.

let fruit = 'naranja';

switch(fruit){
    case 'manzana': // Si fruit = manzana ejecuta este case
        console.log('Que rica es la manzana!');
        break;
    case 'naranja': // Si fruit = naranja ejecuta este case
        console.log('Que rica es la naranja!');
        break;
    default: // En caso de que los dos casos anteriores no se cumplan el default se va ejecutar.
        console.log('No conozco esa fruta');
        break;
}