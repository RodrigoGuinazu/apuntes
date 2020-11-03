// While    --->    Ejecuta el codigo mientras la condicion que especifiquemos se cumpla.

let clase = 1;
while (clase <= 5){ // Mientras clase sea menor o igual a 5 el codigo se seguira ejecutando.
    console.log('Bienvendio a la clase ' + clase);
    clase++
};

// Do While   --->   A diferencia del while, este primero ejecuta y despues evalua la condicion.

let diaSemana = 1;

do{
    console.log('Dia de la semana nro ' + diaSemana);
    diaSemana++
}while(diaSemana <= 7);