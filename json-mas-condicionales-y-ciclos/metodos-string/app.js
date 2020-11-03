let mensaje = 'Gran dia para practicar Javascript!';

// .length  ->  Devuelve la cantidad de posiciones.
console.log(mensaje.length); // Devuelve 35. Comienza desde la posicion 0, que seria la G de Gran hasta el ! posicion 35.

// .indexOf  ->  Muestra la posicion del parametro que indiquemos en el (). Devuelve -1 si el parametro no existe.
console.log(mensaje.indexOf('dia')); // Devuelve 5, que es la posicion donde arranca la palabra dia.

// .slice ->  Lo que hace este metodo es recortar desde las posiciones indicadas en el ().
console.log(mensaje.slice(0, 24)); // Devuelve 'Gran dia para practicar' ya que corto desde la poscion 0 hasta la 24.

// .trim  ->  Elimina los espacios que se encuentran al principio y al final del string.
console.log(mensaje.trim());

// .split  ->  Divide un string en varios strings. Separandolos segun el string que pasemos como parametro.
console.log(mensaje.split(' ')); // Devuelve [ 'Gran', 'dia', 'para', 'practicar', 'Javascript!' ], ya que separa por cada (' ') que haya en el string original.

// .replace  ->  Reemplaza por las palabras que pasemos como parametro.
console.log(mensaje.replace('Javascript', 'todo')); // Devuelve 'Gran dia para practicar todo!'.

console.log(mensaje); // Ningun metodo que usamos reemplaza el mensaje original.
