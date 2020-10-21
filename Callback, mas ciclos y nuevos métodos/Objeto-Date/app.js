// Objeto Date: Para trabajar con este objeto hay que vrear una instancia

let miCumple = new Date(1998, 6, 8) // Se pasan 3 parametros en orden Anio completo, Mes (Tener en cuenta que o es Enero y 11 Diciembre, en este caso 6 es Julio), y dia.

let dia = miCumple.getDate(); // Retorna el dia del Mes
let mes = miCumple.getMonth(); // Retorna el nro de Mes. Tener en cuenta que 0 es Enero y 11 Diciembre
let diaSemana = miCumple.getDay(); // Retorna el dia de la semana. Tener en cuenta que 0 es Domingo y 6 Sabado
let anio = miCumple.getFullYear();// Retorna el anio en 4 digitos

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] // Es comun hacer un array con los meses para porder acceder a ellos a traves de meses[mes].

console.log('Mi cumple es el ' + dia + ' de ' + meses[mes] + ' de ' + anio); // Devuelve Mi cumple es el 8 de Julio de  1998