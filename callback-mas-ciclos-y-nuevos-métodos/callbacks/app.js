//Callbacks:  Es una funcion que se pasaq como parametro de otra funcion. La funcion que lo recibe es quien se encarga de ejecutarla. Son funciones sin nombres. 
//Anonima: Estas las escribimos dentro del parametro de la funcion sobre la que estamos trabajando.

setTimeout (function{               //    
    console.log('Hola Mundo!');     //  Toda la funcion es el primer parametro y 1000 es el 2do parametro    
}, 1000)                            //

// Definida: Funciones con nombres previamente definidios.

let miCallback = () => console.log('Hola Mundo!');
setTimeout(miCallback, 1000); // El 1er parametro lo definimos arriba y lo llamamos por su nombre.

let nombreCompleto = (nombre, apellido) => nombre + ' ' + apellido;

let saludar = (nombre, apellido, nombreCompleto) => 'Hola ' + nombreCompleto(nombre, apellido) + '!';

saludar('Rodrigo', 'Guinazu', nombreCompleto);