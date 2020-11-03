let amigos = ['Micho', 'Tito', 'Gordo', 'Cabezon']; // Array de stings nombres de amigos.

let amigosJSON = JSON.stringify(amigos); // Convierte los datos del array en un texto formato JSON.
console.log(amigosJSON); // ["Micho","Tito","Gordo","Cabezon"] formato string.

let amigosOriginal = JSON.parse(amigosJSON); // Aca estamos convirtiendo el texto JSON a el dato equivalente de JS.
console.log(amigosOriginal); // ['Micho','Tito','Gordo','Cabezon'] formato array.

// Ejemplo con Objetos Literales
let persona ={
    nombre: 'Rodrigo',
    apellido: 'Guinazu',        // Objeto.
    edad: 22,
};

let personaJSON = JSON.stringify(persona); // Convierte los datos del objeto en un texto formato JSON.
console.log(personaJSON); // {"nombre":"Rodrigo","apellido":"Guinazu","edad":22} formato string.

let personaOriginal = JSON.parse(personaJSON); // Aca estamos convirtiendo el texto JSON a el dato equivalente de JS.
console.log(personaOriginal); // {nombre: 'Rodrigo', apellido: 'Guinazu', edad: 22} formato objeto.