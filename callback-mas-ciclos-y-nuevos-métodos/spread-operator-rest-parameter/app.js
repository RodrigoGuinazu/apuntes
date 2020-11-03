// Spread Operator: Este nos permite expandir cada uno de los datos de un elemento iterable dentro de otro elemento. Nos sirve para copiar y mover datos de un lugar a otro de forma eficaz.

// Spread en Arrays
let clubesUno = ['Boca', 'River', 'Independiente'];
let clubesDos = ['San Lorenzo', 'Lanus', 'Racing'];

let todosLosClubes = [...clubesUno, ...clubesDos];
console.log(todosLosClubes) // Devuelve ['Boca', 'River', 'Independiente', 'San Lorenzo', 'Lanus', 'Racing']

// Tambien se puede agregar dentro de un array
let parte = ['los', 'cumplas'];
let oracion = ['Que', ...parte, 'feliz'];

console.log(oracion); // Devuelve ['Que', 'los', 'cumplas', 'feliz'].

// Spread en Objetos
let auto = {
    marca: 'Ferrari',
    kms: 0,
    anio: 2019
};

let corredorUno = {
    nombre: 'Lolo',
    edad: 22,
    ...auto
};

console.log(corredorUno); // Devuelve: { nombre: 'Lolo', edad: 22, marca: 'Ferrari', kms: 0, anio: 2019 }.

// Spread en Funciones: Permite pasar un array como argumento de una funcion.

let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); // Devuelve 3.2

// Rest Parameter: Utilizado como ultimo parmetro de una funcion nos permite capturar cada uno de los argumentos adicionales pasados a esa funcion. Este parametro genera un array con los argumentos adicionales.

function miFuncion(param1, param2, ...otros){
    return otros;
}
console.log(miFuncion(4, 5, 6, 7 ,9, 3)) // Devuelve [6, 7, 9, 3] ya que los dos parametros param1 = 4 y param 2 = 5.   El spread pasado como parametro devuelve un array!!

//Tambien puede ser el unico parametro
function sumar(...numeros){ // El spread pasado como parametro devuelve un array!!
    return numeros.reduce((acum, num)=> acum+= num) // Utilizamos el metodo de array reduce para que simplifique el array. En este caso estamos sumando los elementos del array.
}

console.log(sumar(4, 6)); // Devuelve 10
