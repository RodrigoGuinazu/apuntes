// Destructuring: Nos permite extraer datos de arrays y objetos de una manera mas sencilla y facil de interpretar. Este no modifica o altera el array de origen.

// Destructurando Arrays: Para esto declaramos una variable y entre corchetes escribimos el o los nombres que queremos.Luego igualamos la variable a la estructura del array de donde queremos extraer los datos.

let colores = ['Rojo', 'Azul', 'Verde'];
let [rojo, azul, verde] = colores // Tambien podriamos saltear una posicion. Ejemplo [rojo, , Verde]

console.log(rojo); // Devuelve Rojo

// Destructurando Objetos: Para esto declaramos una variable y entre llaves escribimos el o los nombres de las propiedades que queremos extraer. Luego lo igualamos al objeto del cual queremos extraer los datos.

let persona = {
    nombre: 'Rodrigo',
    edad: 22,
    faltas: 0
};

let {nombre, edad, faltas} = persona;

console.log(nombre); // Devuelve Rodrigo