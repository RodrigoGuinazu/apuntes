//.map(): Recibe un callback como parametro. Recorre el array y devuelve uno muevo con las modificaciones que haga el callback

let notas = [5, 4, 6, 2, 3, 7];

let notasHasta100 = notas.map(function(nota){
    return nota * 10;
});

console.log(notasHasta100); // Devuelve [50, 40, 60, 20, 30, 70]

//.filter(): Recibe un callback como parametro. Recorre el array y filtra los elementos dependiendo si cumplen la condicion dada o no.

let notas = [5, 4, 6, 2, 3, 7];

let notasAprobadas = notas.filter(function(nota){
    return nota>=4;
});

console.log(notasAprobadas); // Devuelve [5, 4, 6, 7]

//.reduce(): Recibe un callback como parametro. El mismo recibe dos parametros, un acumulador y el elemento actual. Este metodo devuelve un unico array.

let numeros = [5, 4, 6, 2, 3, 7];

let resultadoFinal = numeros.reduce(function(acumulador, numero){
    return acumulador + numero;
});

console.log(resultadoFinal); // Devuelve 27

//.forEach(): Recibe un callback como parametro. Este no retrona nada. Su funcionalidad es iterar sobre un array

let numeros = [5, 4, 6, 2, 3, 7];

numeros.forEach(function(valor, indice){
    console.log('El valor ' + valor + ' Esta en el indice ' + indice);
})
 /* Devuelve
El valor 5 Esta en el indice 0
El valor 4 Esta en el indice 1
El valor 6 Esta en el indice 2
El valor 2 Esta en el indice 3
El valor 3 Esta en el indice 4
El valor 7 Esta en el indice 5
*/