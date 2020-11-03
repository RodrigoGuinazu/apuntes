let curso = {
    cantidadDeAlumnos: 32,
    docente: ['Elber', 'Galarga'],     // Objeto Literal
    horarios: 'De 8.30 a 12 hrs',
    Notificaciones: function(){
        return 'La cantidad de alumnos de este curso es ' + this.cantidadDeAlumnos; // se usa this cuando se hace referencia al objeto en si
    } 
}

console.log('La cantidad de alumnos de este curso es ' + curso.cantidadDeAlumnos); //curso.cantidadDeAlumnos para acceder al dato.
console.log(curso.Notificaciones()); // Devuelve la funcion que decalre en el objeto.

function Curso(cantidadDeAlumnos, docentes, horarios){ // Funcion constructora, por buena practica el nombre empieza con Mayuscula.
    this.cantidadDeAlumnos = cantidadDeAlumnos,        // Se usa como plantilla para crear nuevos objetos a partir de este. 
    this.docentes = docentes,
    this.horarios = horarios
}

let curso1 = new Curso(69, ['Esteban', 'Quito'], 'De 12.30 a 15 hrs'); // Usar la palabra reservada new para crear el objeto
console.log(curso1);