let doble = a => a*2; //Al tener solo un parametro no hace falta poner (). Como se escribio todo en una sola linea no hace falta el return.

let suma = (a, b) => a+b; // Se usa el () ya que hay mas de un parametro.  Como se escribio todo en una sola linea no hace falta el return.

let resta = (a, b ) =>{
    return a-b;         // Cuando se escribe en mas de una linea se abren llaves y si hay que poner el return.
};

let saludo = () => 'Hola Mundo!' // En caso de que la funcion sea sin parametros se pone un ().

/*  Diferencias y limitaciones:

   * No tiene sus propios enlaces a this o super y no se debe usar como métodos.
   * No tiene argumentos o palabras clave new.target.
   * No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
   * No se puede utilizar como constructor.
   * No se puede utilizar yield dentro de su cuerpo.
*/

console.log(doble(5));
console.log(suma(12, 8));
console.log(resta(10, 8));
console.log(saludo());