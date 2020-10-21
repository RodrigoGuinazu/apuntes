// ForIn: Nos permite iterar sobre cada una de las propiedades de un objeto. SE USA CON OBJETOS

let persona = {
    nombre: 'Armando',
    apellido: 'Barreda',
    edad: 44,
}

for (let key in persona) {
    console.log('En el atributo ' + key + ' su valor es ' + persona[key]);
}

/* Devuelve:
En el atributo nombre su valor es Armando
En el atributo apellido su valor es Barreda
En el atributo edad su valor es 44
*/

// ForOn: Este bucle nos permite iterar sobre cada uno de los valores de un elemento iterable, ejemplo, un array. SE USA CON ARRAYS Y STRINGS

let notas = [5, 6, 9, 3, 7];

for (const nota of notas) {
    console.log(nota);
}

/* Devuelve:
5
6
9
3
7
*/