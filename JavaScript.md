# Fundamentos del lenguaje JavaScript

Surge como lenguaje “del lado del cliente”, es decir, que se ejecuta en el navegador del usuario.

Tiempo después, JavaScript fue envuelto en una capa C++ y de esta forma se hizo posible su uso “del lado del servidor” mediante NodeJs.

##### JavaScript es un lenguaje de programación orientado a objetos, donde no hay distinción entre los tipos de objetos. Es un lenguaje con tipado dinámico donde la responsabilidad de la asignación del tipo no es del desarrollador sino que el lenguaje la elige de forma automática en función del valor que tome la variable.



## Gramática y tipos

JS es case-sensitive (distingue entre mayúsculas y minúsculas). Por ejemplo:

```javascript
var Edad = 18;
var edad = 21;
```

Edad no es la misma variable que edad. El final de cada sentencia lleva un ; (punto y coma)



## Comentarios 

Hay 2 tipos de comentarios: 

De una sola línea y de varias líneas: 

```javascript
//este es un comentario de una sola línea

/* 
Esto es un comentario de varias líneas 
linea 1 
linea 2 
Ultima linea! 
*/
```



## Variables en JS

Una variable es un espacio en memoria donde se guarda un dato.

La definición de variables en JavaScript se realiza por medio de la palabra reservada var, let o const. El nombre de la variable debe comenzar con una letra o guión bajo, luego puede contener letras, números y/o guiones bajos.

```javascript
let nombre = ‘Juan’; 
const edad = 30; 
var esMayor = true;
```



#### Cambio de valores a una variable 

Podemos cambiar el valor de una variable con solo poner la variable del lazo izquierdo de una asignación. 

```javascript
var nombre = ‘Juan’; 
nombre = ‘Pedro’; 
```



#### Diferencia entre var y let

```javascript
if (true) {
 var nombre = "Juan";
}
console.log(nombre);
// Ok, muestra "Juan"
```

Cuando usamos **var** JavaScript ignora los bloques de código y convierte nuestra variable en global. 

```javascript
if (true) {
 let nombre = "Juan";
}
console.log(nombre)
// Error: nombre no existe
```

Cuando usamos **let** JavaScript respeta los bloques de código. Eso quiere decir que **nombre** no podrá ser accedida fuera del **if.**



## Arrays

Los **arrays** nos permiten generar una **colección** de **datos ordenados**.

Se utilizan corchetes [] para indicar el **inicio** y el **fin** de un array y comas "," para **separar** sus elementos.

```javascript
let miArray = ['Star Wars', true, 23];
var array = [1,2,3,4,5]
```

#### Posiciones dentro del array.

Cada dato de un array ocupa una posición numerada conocida como **índice**. La primera posición de un array **es siempre** **0**.

Para acceder a un elemento puntual de un array, nombramos al array y, **dentro** de los **corchetes**, escribiremos el **índice** al cual queremos acceder.

```javascript
array[2]; // accedemos al numero 3
```

#### Métodos de arrays</u>

Para JavaScript los arrays son un tipo especial de objetos. 

Por esta razón disponemos de un montón de **métodos** muy útiles a la hora de trabajar con la información que hay adentro



<u>**.length()**</u>

**Indica el número** de elementos que tiene un array.

```javascript
let cursos = ['Programación','UX','Data'];
cursos.length(); // retorna 3
```



<u>**.push()**</u>

**Agrega** uno o varios **elementos al final** del array.

**Recibe** uno o más elementos como parámetros

**Retorna** la nueva longitud del array

```javascript
let colores = ['Rojo','Naranja','Azul'];
colores.push('Violeta'); // retorna 4
console.log(colores);
// ['Rojo','Naranja','Azul','Violeta']
```



<u>**.pop()**</u>

**Quita** el **último elemento** de un array.

**No recibe** parámetros

**Devuelve** el elemento eliminado 

```javascript
let series = ['Mad Men','Breaking Bad','The Soprano'];
// creamos una variable para guardar lo que devuelve .pop()
let ultimaSerie = series.pop();
console.log(series); // ['Mad men', 'Breaking Bad']
console.log(ultimaSerie); // ['The Soprano']
```



<u>**.indexOf()**</u>

**Busca en el array el elemento** que recibe como parámetro. 

**Recibe** un elemento a buscar en el array

**Retorna** el **primer índice** donde encontró lo que buscábamos. Si no lo encuentra, retorna un **-1**.

```javascript
let frutas = ['Manzana','Pera','Frutilla'];
frutas.indexOf('Frutilla');
// Encontró lo que buscaba. 
// Devuelve 2, el índice del elemento
```



**<u>.map()</u>**

Este método recibe una función como parámetro (callback). Recorre el array y devuelve un nuevo array modificado. Las modificaciones serán aquellas que programemos en nuestra función de callback.

```javascript
array.map(function(elemento){ 
	// definimos las modificaciones que queremos 
	// aplicar sobre cada elemento del array 
})

var numeros = [2, 4, 6]; 
var dobleNumeros = numeros.map(function(num){ 
	// Multiplicamos por 2 cada número return num * 2; 
}); 
console.log(dobleNumeros); // [4,8,12]
```



**.filter()**

Este método también recibe una función como parámetro. Recorre el array y filtra los elementos según una condición que exista en el callback. Devuelve un nuevo array que contiene únicamente los elementos que hayan cumplido con esa condición. Es decir que nuestro nuevo array puede contener menos elementos que el original.

```javascript
array.filter(function(elemento){ 
    // definimos la condición que queremos utilizar 
    // como filtro para cada elemento del array 
});

var edades = [22, 8, 17, 14, 30]; 
var mayores = edades.filter(function(edad){
    return edad > 18; 
}); 
console.log(mayores); // [22, 30]
```



**.reduce()**

Este método recorre el array y devuelve un único valor. Recibe un callback que se va a ejecutar sobre cada elemento del array. El mismo, a su vez, recibe dos parámetros: un acumulador y el elemento actual que esté recorriendo.

```javascript
array.reduce(function(acumulador, elemento){ 
    // definimos el comportamiento que queremos 
    // implementar sobre el acumulador y el elemento 
});

var numeros = [5, 7, 16]; 
var suma = numeros.reduce(function(acum, num){ 
    return acum + num; 
}); 
console.log(suma); // 28
```



**.forEach()**

La finalidad de este método es iterar sobre un array. Recibe un callback como parámetro y, a diferencia de los métodos anteriores, éste no retorna nada.

```javascript
array.forEach(function(elemento){ 
    // definimos el comportamiento que queremos 
    // implementar sobre cada elemento 
});

var paises = ['Argentina', 'Brasil', 'Colombia']; 
paises.forEach(function(pais){ 
    console.log(pais); 
});
```





## Estructura de datos en JS

#### Condicionales:

Permiten **evaluar condiciones** y realizar diferentes acciones **según el resultado** de esas evaluaciones.

<u>**Condicional simple**</u>

```javascript
if (condición) {
 // código a ejecutar si la *condición* es **verdadera**
}
```

#### <u>Con bloque else</u>

```javascript
if (condición) {
 // código a ejecutar si la *condición* es **verdadera**
} else {
 // código a ejecutar si la *condición* es **falsa**
}
```

#### <u>Con bloque else if</u>

```javascript
if (condición) {
  // código a ejecutar si la condición es verdadera
} else if (otra condición) {
  // código a ejecutar si la otra condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

#### <u>IF ternario</u>

A diferencia de un if tradicional, el if ternario se escribe de forma horizontal. Ambas estructuras tienen el mismo flujo interno (si esta condición es verdadera hacé esto, si no, hacé ésto otro) pero en este caso no hace falta escribir la palabra if ni la palabra else.

```
condición ? primera expresión : segunda expresión
```

#### <u>SWITCH</u>

El switch, al igual que los otros condicionales, evalúa una condición y, según el resultado, ejecuta sólo las líneas de código que correspondan. 

Nos propone una sintaxis más legible para esos casos en los que queremos evaluar que un valor sea igual a alguno de los casos que proponemos. 

También nos permite agrupar casos y ejecutar un mismo bloque de código para cualquier caso de ese grupo.

```javascript
switch (expresión) { 
	case valorA: 
	//código que se ejecuta si valorA es verdadero 
	break; 
	case valorB: 
	//código que se ejecuta si valorB es verdadero 
	break; 
}
```

Si ningún caso es verdadero introducimos la palabra reservada default, que nos permite tener un comportamiento por defecto cuando ningún caso evalúa como verdadero.



#### Operadores:

Los **operadores** nos permiten **manipular el valor** de las variables, realizar **operaciones** y **comparar** sus valores

**<u>DE ASIGNACIÓN**</u>

Asignan el valor de la derecha en la variable de la izquierda.

```javascript
let edad = 35; // Asigno el número 35 a edad
```

**<u>ARITMÉTICOS**</u>

Nos permiten hacer operaciones matemáticas, devuelven el resultado de la operación.

```javascript
10 + 15 // Suma → 25
10 - 15 // Resta → -5
10 * 15 // Multiplicación → 150
15 / 10 // División → 1.5
```

<u>**DE COMPARACIÓN SIMPLE**</u>

Comparan dos valores, devuelven verdadero o falso.

```javascript
10 == 15 // Igualdad → false
10 != 15 // Desigualdad → true
```

<u>**DE COMPARACIÓN ESTRICTA**</u>

Comparan el valor y el tipo de dato también.

```javascript
10 === "10" // Igualdad estricta → false
10 !== 15 // Desigualdad estricta → true
```

En el primer caso el valor es 10 en ambos casos, pero los tipos de datos son number y string. Como estamos pidiendo que ambas cosas sean iguales, el resultado es **false**.

<u>**DE COMPARACIÓN (CONTINUACIÓN)**</u>

Comparan dos valores, devuelven verdadero o falso.

```javascript
15 > 15 // Mayor que → false
15 >= 15 // Mayor o igual que → true
10 < 15 // Menor que → true
10 <= 15 // Menor o igual que → true
```

<u>**DE CONCATENACIÓN**</u>

Sirve para unir cadenas de texto. Devuelve otra cadena de texto.

```javascript
let nombre = 'Teodoro';
let apellido = 'García';
let nombreCompleto = nombre + ' ' + apellido;
```



## Operadores logicos

Permiten combinar valores booleanos, el resultado también devuelve un booleano. 

Existen tres operadores **y** (and), **o** (or), **negación** (not).

**AND** (&&) **todos** los valores deben evaluar como **true**.

```javascript
(10 > 15) && (10 != 20) // false
(12 % 4 == 0) && (12 != 24) // true
```

**OR** ( || ) **al menos un** valor debe evaluar como **true**.

```javascript
(10 > 15) || (10 != 20) // true
(12 % 4 == 0) && (12 != 24) // true
```

**NOT** ( ! ) niega la condición, si era true, será false y viceversa

```javascript
!false // true
!(10 > 15) // true
```



## Ciclos

Los **ciclos** nos permiten **repetir instrucciones** de manera sencilla. Podemos hacerlo una determinada **cantidad de veces** o mientras que se **cumpla** una **condición**.

#### <u>FOR</u>

Consta de **3 partes** que definimos dentro de los paréntesis. En conjunto, nos permiten determinar de qué manera se van a realizar las **repeticiones**, y definir las **instrucciones** que queremos que se lleven a cabo en cada una de ellas.

```javascript
for (inicio; condición ; modificador) {
//código que se ejecutará en cada repetición
}
```

Inicio: Se establece el valor inicial.

Condición: Se pregunta si la condición es verdadera o falsa antes de ejecutar el código. Si es verdadera continua, si no, detiene el ciclo.

Modificador: Luego de ejecutar el código, modifica el contador (inicio) como le hayamos indicado



#### <u>FOR IN, FOR OF</u>

Permiten iterar elementos usando una sintaxis clara y sencilla.

El bucle for … in nos permite iterar sobre cada una de las propiedades de un objeto. 

```javascript
var persona = { nombre: 'Guille', edad: 23 }; 
for (var dato in persona) { 
	console.log(dato, persona[dato]); 
};
```

El bucle for … of nos permite iterar sobre cada uno de los valores de un elemento iterable, por ejemplo, un array.

```javascript
var musicos = ['Charly','Spinetta','Fito']; 
for (var musico of musicos) { 
	console.log(musico); 
};
```



#### <u>WHILE</u>

El ciclo while ejecutará nuestro código mientras la condición que especifiquemos se cumpla. Consta de dos partes: la condición y el bloque de código que queremos ejecutar mientras que la condición establecida evalúe como verdadera.

```javascript
while (condicion) { 
// bloque de código que se ejecuta 
// si la condición es verdadera 
}
```

```javascript
let contador = 0; 
while (contador <= 4) { 
console.log('Contador: ' + contador); 
contador++; 
}
```

#### <u>DO WHILE</u>

A diferencia del while, el do while primero ejecuta el código y después evalúa la condición. Eso quiere decir que nuestro código siempre se ejecutará al menos una vez. Al igual que el while, el do while ejecutará nuestro código mientras que la condición sea verdadera.

```javascript
do { 
// bloque de código que se ejecuta al menos una vez 
// y cada vuelta si la condición es verdadera 
} while (condicion)
```



## Funciones

Una función es un **bloque de código** que podemos invocar todas las veces que necesitemos. Puede realizar una **tarea** **específica** y **retornar** un valor. Nos permite **agrupar** el **código** que vayamos a **usar muchas veces**.

Para la definición y uso de funciones debemos utilizar la siguiente sintaxis 

function <nombre de la funcion> (<parametros separados por coma>) { <codigo de la funcion>  }

```javascript
function sumar (a,b) {
 return a + b;
 }
```

La forma de **invocar** (ejecutar) una función es escribiendo su nombre seguido de apertura y cierre de paréntesis. 

```javascript
nombreFuncion();
```

En caso de querer ver o guardar el dato que **retorna**, será necesario almacenarlo en una variable, o hacer un *console.log* de la ejecución.

```javascript
let resultado = nombreFuncion();
console.log(nombreFuncion());
```

Si la función espera argumentos, podemos pasárselos dentro del paréntesis.

Es importante respetar el orden si hay más de un parámetro ya que Javascript los asignará en el orden que lleguen.



#### <u>Arrow functions</u>

Permiten escribir funciones con una sintaxis más compacta.

```javascript
function sumar (a, b) { return a + b; } 
let sumar = (a, b) => a + b; // funcion arrow
```



#### <u>Callback</u>

Un callback es una función que se pasa como parámetro de otra función. La función que lo recibe es quien se encarga de ejecutarla cuando sea necesario

**Anonima:**

En este caso la función que pasamos como callback no tiene nombre, es decir que es una función anónima. Como las funciones anónimas no pueden ser llamadas luego por su nombre, necesitamos escribirla dentro de la función que se encargará de al callback.

**Definida**:

La función que pasamos como callback puede ser una función definida previamente. Al momento de pasarla como parámetro de otra función, nos referiremos a la misma por su nombre.



```javascript
function nombreCompleto(nombre, apellido) { 
	return nombre + ' ' + apellido; 
}; 
function saludar(nombre, apellido, callback) { 
	return '¡Hola ' + callback(nombre, apellido) + '!'; 
}; 
saludar('Juanito', 'Sánchez', nombreCompleto);
```



## Objetos literales

Podemos decir que son la representación en código de un elemento de la vida real.

Un objeto es una estructura de datos que puede contener propiedades y métodos. 

Para crearlo usamos llave de apertura y de cierre { }.

Un objeto puede tener la cantidad de propiedades que queramos, si hay más de una las separamos con comas , .

Con la notación objeto.propiedad accedemos al valor de cada una de ellas.

```javascript
let tenista = { 
	nombre: 'Roger', 
	apellido: 'Federer' 
	}; 
console.log(tenista.nombre) // Roger 
console.log(tenista.apellido) // Federer
```

#### <u>Métodos de un objeto</u>

```javascript
let tenista = { 
	nombre: 'Roger', 
	apellido: 'Federer', 
	edad: 38, 
	saludar: function() { 
		return '¡Hola! Me llamo Roger'; } 
}; 
```

Para ejecutar el método de un objeto usamos la notación objeto.metodo(), los paréntesis del final son los que hacen que el método se ejecute.

#### <u>Construir un objeto</u>

Javascript nos da una opción más para crear un objeto y es a través del uso de una función constructora. La función constructora nos permite armar un molde y luego crear todos los objetos que necesitemos. La función recibe un parámetro por cada propiedad que queramos asignarle al objeto.

```javascript
function auto(marca, modelo){
	this.marca = marca; 
	this.modelo = modelo; 
};
```

La función constructora Auto() espera dos parámetros: marca y modelo. Para crear un objeto Auto debemos usar la palabra reservada new y llamar a la función pasándole los parámetros que espera.

```javascript
let miAuto = new Auto('Ford', 'Falcon');
```

Cuando ejecutamos el método new para crear un objeto, lo que nos devuelve es una instancia. Es decir, en la variable miAuto tendremos almacenada una instancia del objeto Auto. Usando la misma función, podemos instanciar cuantos autos queramos.



## JSON

Es un formato de texto sencillo utilizado para el intercambio de datos entre distintos sistemas.

Como su nombre lo indica, JSON es muy similar a un objeto literal. 

La diferencias entre ellos son: 

**Objeto Literal** 

- Admite comillas simples y dobles 
- Las claves del objeto van sin comillas
- Podemos escribir métodos
- Se recomienda poner una coma en la última propiedad 

**JSON** 

- Sólo se pueden usar comillas dobles
- Las claves van entre comillas 
- No admite métodos, sólo propiedades y valores
- No podemos poner una coma en el último elemento

Javascript nos proporciona un objeto nativo JSON con dos métodos que nos permiten convertir el formato de un archivo JSON a objeto literal o array, y viceversa.



**JSON.parse()**

Convierte un texto JSON al tipo de dato equivalente de Javascript

- Recibe una cadena de texto con formato JSON. 
- Devuelve el mismo dato que recibió en formato Javascript.

```javascript
let datosJson = '{"club": "Independiente", "barrio": "Avellaneda"}'; 
let datosConvertidos = JSON.parse(datosJson); 
console.log(datosConvertidos); 
// Se verá en consola un objeto literal 
// { // club: 'Independiente', 
// barrio: 'Avellaneda' // }
```

**JSON.stringify()**

Convierte un tipo de dato Javascript en un texto en formato JSON

- Recibe un tipo de dato de Javascript. 
- Devuelve una cadena de texto con formato JSON

```javascript
let objetoLiteral = { nombre: 'Carla', pais: 'Argentina' }; 
let datosConvertidos = JSON.stringify(datosObjeto); 
console.log(datosConvertidos); 
// Se verán en consola los datos en un string de tipo JSON 
// '{ "nombre": "Carla", "pais": "Argentina" }'
```





# NODE JS

Es un entorno de ejecución que nos permite ejecutar Javascript por fuera de un navegador.

Hay que instalar Node, de su pagina oficial, con el mismo viene el gestor de paquetes NPM el cual  permite descargar e instalar librerías para incorporar a nuestro proyecto.

**¿Que son las librerias?**

Son bloques de código que nos permiten abordar soluciones específicas dentro de la aplicación que estemos desarrollando.

**¿Como empezar?**

Para usar npm es inicializar nuestro proyecto Node usando el comando . Este comando creará un archivo package.json, dentro del cual se se irán guardando todas las configuraciones del proyecto.

Para instalar una librería usamos el siguiente comando: en donde reemplazaremos la palabra por el nombre de la librería que queramos instalar. 

El comando guarda dentro del package.json, en la propiedad , una referencia a la librería que estamos instalando.

Dentro de la carpeta Node Modules se irán creando las carpetas de las librerías que instalemos.



#### <u>Node modules:</u>

Son estructuras de código que, en conjunto, conforman la totalidad de nuestra aplicación y configuran su usabilidad.

Un módulo es un bloque de código reusable, una unidad funcional, cuya existencia o no, no altera el comportamiento de otros bloques de código.

Existen tres tipos de módulos: 

- Los módulos nativos, aquellos que ya vienen instalados. 
- Los módulos de terceros, aquellos que podemos instalar usando NPM. 
- Los módulos creados, aquellos que definimos nosotros.

**¿Como se requiere un modulo?**

Para requerir un módulo, sin importar de qué tipo sea, hace falta situarse dentro del archivo en el que queremos incorporarlo y hacer uso de la función nativa de node .

La misma recibe como parámetro un string, que será el nombre del módulo. 

Esta función devuelve un objeto literal, por lo tanto es importante guardar la ejecución en una variable, para poder acceder, a través del dot notation, a todas las propiedades y funcionalidades del módulo.

```javascript
let modulo = require('nombreModulo'); 
modulo.propiedad; 
modulo.funcionalidad();
```



**Modulo nativo**

Para requerir un módulo nativo usamos la función y le pasamos como argumento el nombre del módulo que queremos requerir.

```javascript
const fs = require('fs');
```

**Modulo de terceros**

Para requerir un módulo de terceros, primero hay que instalarlo usando el comando . Una vez instalado, usamos la función y le pasamos como argumento el nombre del módulo que instalamos.

```javascript
npm install moment --save
const moment = require('moment');
```

**Modulo creado**

Para requerir un módulo creado por nosotros, primero hay que crear un archivo con extensión y dentro del mismo escribir el script que necesitemos. 

Una vez definido nuestro código, tenemos que dejarlo accesible para poder importarlo dentro de nuestra aplicación. Para eso hay que hacer uso del objeto nativo y de su propiedad . 

Al mismo le asignaremos el nombre de la variable que contenga la información que queremos exponer.

```javascript
const series = [ 
    {titulo: 'Mad Men', temporadas: 7}, 
    {titulo: 'Breaking Bad', temporadas: 5}, 
    {titulo: 'Seinfeld', temporadas: 9}, 
]; 
module.exports = series;
```

En otro archivo, lo requeriremos.

```javascript
const series = require('./series/index');
```





# Express



#### <u>Arquitectura</u> <u>cliente-servidor</u>

Dentro del contexto de desarrollo web, esta arquitectura hace referencia a un modelo de comunicación que vincula a varios dispositivos con un servidor a través de internet. 

**Flujo cliente-servidor**

- Request / solicitud: Es la solicitud que hacemos a través del navegador (el cliente) a un servidor, en este ejemplo, la página de Facebook que está almacenada en sus servidores.
- Response  / respuesta: El servidor recibe nuestra solicitud, la procesa, y envía como resultado una respuesta al cliente (navegador), en este ejemplo devolverá la página principal del sitio.



#### <u>HTTP</u>

HTTP (Hyper Text Transfer Protocol) es el protocolo que gestiona las transacciones web entre clientes y servidores

Dentro de esta estructura de comunicación, hablamos de request cada vez que el cliente le solicita un recurso al servidor, y de response cada vez que el servidor le devuelve una respuesta al cliente.

**Métodos de petición**

- GET Se utiliza para pedirle información al servidor de un recurso específico. Cada vez que escribimos una dirección en el navegador o accedemos a un enlace, estamos utilizando el método GET. En caso de querer enviar información al servidor usando éste método, la misma viajará a través de la URL.
- POST Se utiliza para enviar datos al servidor. Este método es más seguro que get ya que la información no viaja a través de la URL.
- DELETE Borra un recurso presente en el servidor. Cuando eliminamos un posteo en facebook, por ejemplo, estamos utilizando este método.
- PUT Es muy parecido a post. Se usa para reemplazar toda la información actual de un recurso presente en el servidor.
- PATCH Similar a PUT. Es utilizado para aplicar modificaciones parciales a un recurso en el servidor.



#### <u>HTTP EN NODE</u>

Usando el módulo nativo HTTP, podemos crear un servidor web dentro de nuestro proyecto.

Lo primero que tenemos que hacer es requerir el módulo nativo en el entry-point de nuestra aplicación: .

```javascript
const http = require('http');
```

En la variable tenemos almacenado un objeto, que presenta todas las propiedades y funcionalidades que necesitamos para crear nuestro servidor. Lo siguiente, es pedirle a ese objeto, el método , que se encargará de levantar el servidor y manejar las peticiones que le lleguen

```javascript
http.createServer();
```

Este método recibe como parámetro un callback, que se ejecutará cada vez que se envíe un request al servidor. El callback recibirá dos parámetros: el primero representa los datos que envió el cliente como solicitud (request), el segundo representa la respuesta que le enviará el servidor al cliente (response).

```javascript
http.createServer(function (req, res){ 
    //cuerpo del callback 
});
```

Es momento de definir el puerto en el que el servidor escuchará las peticiones. Eso lo haremos a través del método , el cual recibe dos parámetros: el primero, el puerto donde se escuchará la aplicación (puede ser cualquier número de 4 dígitos), y el segundo, el dominio donde queremos que se ejecute el servidor. 

```javascript
http.createServer(function (req, res){ 
	//cuerpo del callback 
}).listen(3030, 'localhost');
```

Para levantar el servidor haremos uso de la consola para ejecutar nuestro archivo entry-point.

node app.js



#### <u>Definiendo el response y el proceso de ruteo</u>

Ahora es momento de definir el contenido que le enviaremos al cliente. Para eso usaremos el método que recibe como parámetro un string, que representará el cuerpo del contenido que estaremos enviando. Este método debe ir siempre después de la definición de las cabeceras, y cuando éste termina, cierra el ciclo del response.

```javascript
http.createServer(function (req, res){ 
    res.writeHead(200, {"Content-Type": "text/plain"}); 
    res.end('Mi primer server con Node'); 
}).listen(3030, 'localhost');
```

Por cada url que escribamos en el navegador, estamos haciendo un request diferente, y por lo tanto, esperando una respuesta específica en cada caso. 

Se define routing al proceso en que definimos esas rutas y sus respuestas. 

Dentro de la estructura que definimos para crear el servidor, contamos con el parámetro que será el request que envíe el cliente. El mismo es un dato de tipo objeto, con propiedades y funcionalidades. 

La propiedad nos permite saber qué url ingresó el cliente al momento de hacer el request.

```javascript
http.createServer(function (req, res){ 
    res.writeHead(200, {"Content-Type": "text/plain"}); 
    if(req.url == '/'){ 
        res.end('Mi primer server con Node'); 
    } 
    if(req.url == '/saludo'){ 
        res.end('Hola! Estamos en localhost:3030/saludo'); 
    } 
}).listen(3030, 'localhost');
```



#### <u>**Express**</u>

Es un framework que facilita y agiliza el desarrollo de aplicaciones web en Node JS

**¿Pero que es un framework?**

Un entorno de trabajo que trae resueltas una serie de tareas, automatizando así el desarrollo de cualquier aplicación.

**Para usar express:**

Instalar la librería en un proyecto Node ya inicializado, es decir, haber hecho y tener creado el archivo .

> npm install express --save

Una vez instalado Express, tendremos que requerir el módulo en nuestro entry-point, . 

```javascript
const express = require('express'); 
```

Lo que devuelve la librería es una función que encapsula todas las funcionalidades de Express y para poder empezar a usarlas, hace falta ejecutar esa función. Lo próximo, entonces, sería crear una variable nueva y almacenar en ella la ejecución de - y así poder tener todos lo métodos de la librería disponibles.

```javascript
 const app = express();
```

Express cuenta con una función de alto nivel que, al invocarla, retorna un objeto con múltiples propiedades y métodos: la función . Al almacenar la ejecución de esa función en una constante, podremos tener acceso a través de ella a todas esas funcionalidades que nos da el objeto.

El objeto que devuelve tiene métodos asociados para gestionar las peticiones que se hagan a través de get, post, delete, put y patch.

```javascript
app.get(); 
app.post(); 
app.put(); 
app.patch(); 
app.delete();
```

Podemos iniciar un servidor de la siguiente manera:

```javascript
const express = require('express'); 
const app = express(); 
app.listen(3000, () => console.log('Servidor corriendo')); 
app.get('/', (req, res) => { 
    res.send('¡Hola mundo!'); 
})
```

El método app.get() recibe dos parámetros: El primero, un string que define la url de la ruta. El segundo, un callback con dos parámetros: objetos request y response que nos pone a disposición Express cada vez que trabajamos con algún método de petición HTTP.

El nombre de esos parámetros puede ser el que queramos. Se estila usar req para request y res para response.

Dentro del callback definimos la respuesta que enviaremos. Al objeto res (response), le pedimos el método send. Como parámetro le pasamos lo que queremos mostrar en el browser. En este caso, el texto ¡Hola mundo!.



#### <u>Express-Generator:</u>

Express cuenta con un generador de proyectos llamado express-generator.

Esta herramienta presenta una gran ventaja al momento de empezar un proyecto nuevo y es que, al instalarlo, trae consigo un esqueleto de carpetas, archivos y dependencias que nos puede servir para inicializar cualquier aplicación.

En la carpeta raíz encontramos el entry point app.js, y el archivo package.json . Dentro de la carpeta bin encontramos el archivo sin extensión www. El mismo trae definida una lógica interna y se encargará de hacer que la aplicación corra. Dentro de la carpeta public podremos guardar todos los recursos estáticos de nuestra aplicación. Dentro de la carpeta routes estaremos administrando el route system de la aplicación. Encontramos los archivos index.js y users.js . Dentro de la carpeta views encontramos dos vistas iniciales que trae el generador: index.ejs y error.js .

Este generador no trae consigo la carpeta controllers y sus archivos, por lo tanto tendremos que crearla nosotros si queremos respetar la arquitectura con la que venimos trabajando.

**Para instalar**

> npm install express-generator -g

Lo próximo será crear un proyecto Node usando Express con un comando que creará la carpeta del proyecto con el nombre que definamos nosotros. Adicionalmente, podemos configurar el motor de vistas que queremos usar. Si no lo aclaramos, por defecto se instalará el motor de vistas pug.

> express myApp --ejs

Por último, dentro de la carpeta del proyecto, tenemos que correr el comando para instalar todas las dependencias que vinieron configuradas en el para que el proyecto funcione.

> npm install

**¿Que es un motor de vistas?**

Los motores de vistas, también conocidos como motores de plantillas o template engines, nos permiten crear una estructura dinámica para las vistas de nuestro proyecto. Es decir, definir bloques de contenido que se pueden rellenar con datos variables.

**Para levantar el servidor**

Dentro de la carpeta del proyecto debemos correr el siguiente comando, en el cual indicaremos el archivo que queremos ejecutar.

> nodemon bin/www

Por último ingresar a http://localhost:3000 para comprobar que el servidor se levantó correctamente.



# MVC

Es un patrón de diseño. Sus siglas corresponden a Modelo Vista Controlador

Dentro del mundo de la programación existen lo que se conocen como Patrones de Diseño. Los mismos proponen un esquema de trabajo, una serie de reglas que permiten simplificar el código y encarar mejor la solución de diferentes situaciones a lo largo del desarrollo. 

Uno de los patrones más populares es MVC. Su objetivo es crear aplicaciones modulares, dividiendo la columna vebral del proyecto en tres componentes principales, en donde cada uno de ellos cumple con un rol determinado.

Estos componentes son: los modelos, las vistas y los controladores.

- Vistas: Conforman la interfaz gráfica de la aplicación y contienen todos los elementos que son visibles al usuario. A través de ellas el usuario interactúa enviando y solicitando información al servidor.
- Modelos: Conforman y contienen la lógica de la aplicación. Sus responsabilidades son conectarse con la base de datos, realizar consultas y administrar lo que se conoce como la lógica de negocio. Los modelos no se comunican de forma directa con las vistas.
- Controladores: Conforman la capa intermedia entre las vistas y los modelos. Su responsabilidad es procesar los datos que recibe de los modelos y elegir la vista correspondiente en función de aquellos datos. Tienen relación directa con las vistas y con los modelos y es un componente fundamental dentro del flujo del patrón.



## Rutas parametrizadas

Express permite crear rutas dinámicas en las que definimos qué parámetro es el que va a ir variando. 

Usando la misma estructura básica para definir una ruta, aclaramos en el path, cuál es el parámetro que va a ir variando haciendo uso de los dos puntos , seguido del nombre que represente al dato que estará llegando en la url.

```javascript
app.get('/productos/:id', function (req,res) { 
    // código 
})
```

Haciendo uso de la propiedad params del objeto literal request , podemos capturar esos valores parametrizados y así empezar a definir qué hacer con cada uno de ellos.

Esta propiedad, a su vez, es un objeto literal que guarda los parámetros que llegan por url con la estructura propiedad:valor, en donde cada propiedad tendrá el nombre del parámetro que definimos en el path.

```javascript
app.get('/productos/:id', function (req,res) { 
    let idProducto = req.params.id; 
})
```



## Sistemas de ruteo

Mantener orden estructural a la hora de desarrollar.

En la carpeta routes guardaremos, por cada recurso, un archivo js que administre los request a las rutas que tengan que ver con ese recurso. Cada archivo js será un módulo que exportaremos, para luego requerir dentro del entry point de la aplicación: app.js

Para empezar a definir el sistema de ruteo de cada recurso, hace falta situarse dentro del archivo js del recurso, requerir el módulo express y guardar la ejecución del método que nos provee Express en una variable nueva.

```javascript
const express = require('express'); 
const router = express.Router();
```

Este método nos va a permitir modularizar por completo todo el sistema de ruteo de una manera sencilla.

Definimos las rutas que consideremos necesarias para manejar distintos tipos de request.

```javascript
// Ruta raiz de los productos / Inicio 
router.get('/', (req, res) => { 
    // código 
}); 
// Ruta que muestra el detalle de un producto 
router.get('/detalle/:id', (req, res) => { 
    // código 
});
```

En la última línea del archivo exportamos todo el contenido de router para hacerlo visible.

```javascript
module.exports = router;
```

Para implementarlo dentro de , creamos una constante y requerimos el módulo.

```javascript
const rutasProductos = require('./routes/productos');
```

Por último, hacemos uso del método que recibe dos parámetros. El primero un string que será el nombre del recurso, en este caso productos. Al ser una ruta debe empezar con la . El segundo el nombre de la constante en la que almacenamos el módulo del recurso. 

```javascript
app.use('/productos', rutasProductos)
```

De esta forma estamos definiendo que cada solicitud del recurso productos, sea atendida por el módulo rutasProductos y toda su lógica.



## Controladores

Son pequeñas porciones de código. Su responsabilidad es atender a los distintos request del cliente y generar comunicación entre las vistas y los modelos.

En la carpeta raíz del proyecto, crearemos la carpeta controllers. Adentro almacenaremos un controlador por cada recurso que tenga la aplicación. Cada controlador será un módulo que exportaremos, para luego requerirlo en donde lo necesitemos.

Crearemos un archivo para manejar nuestro recurso. Para nombrar los archivos se estila empezar con el nombre del recurso seguido de la palabra Controller usando el estilo camelCase.

Lo primero que hay que hacer es definir una variable en el archivo del controlador del recurso y asignarle un objeto literal

```javascript
const controlador = {};
```

Dentro del objeto, iremos definiendo los métodos que se encargarán de manejar, cada uno, un request en particular.

```javascript
const controlador = { 
    index: //mostrar listado de productos, 
    show: //mostrar detalle de un producto, 
    create: //enviar datos para agregar un producto, 
};
```

Hasta el momento, la lógica de cómo manejar cada request que llegaba, la veníamos escribiendo en el archivo de rutas de cada recurso, en donde definíamos una url y un callback que se encargaba de manejar esa petición.

```javascript
// código del archivo productos.js en la carpeta routes 
router.get('/', (req, res) => { 
    res.send('Index de productos'); 
});
```

Al trabajar con el patrón MVC, podemos apoyarnos en sus reglas y dividir las responsabilidades de nuestros archivos. 

Siguiendo con esa línea, serán los métodos de cada controlador los que recibirán esos datos y enviarán la información correspondiente.

De modo que, quitaremos el callback que habíamos definido en las rutas y lo escribiremos en el método index del controlador de productos.

```javascript
const controlador = { 
    index: (req, res) => { 
        res.send('Index de productos'); 
    }, 
};
```

**<u>Para implementarlo</u>**

Primero hay que hacer visible todo el código que definimos en el controlador. Para eso, exportaremos la variable en la última línea del archivo.

```javascript
module.exports = controlador;
```

Para empezar a usar los métodos que definimos, debemos requerir el módulo dentro del archivo de ruteo del recurso

```javascript
const productosController = require('../controllers/productosController');
```

Con nuestro módulo ya visible en el archivo, es momento de terminar de configurar aquella ruta a la que le quitamos el callback.

```javascript
router.get('/', productosController.index);
```



## EJS

Si no se utiliza express-generator, el proceso para iniciar un motor es el siguiente:

Definir qué motor de plantilla queremos usar en nuestra aplicación, en este caso ejs y luego instalarlo con npm.

> npm i ejs --save

Aclararle a Express cual es ese motor que vamos a estar utilizando a lo largo del proyecto utilizando el método set() con la propiedad 'view engine' y el valor del motor, en este caso ejs.

```javascript
app.set('view engine', 'ejs');
```

Al implementar un motor de plantillas, todas las vistas que creemos en nuestro proyecto deberán almacenarse en una carpeta específica.

Por defecto, Express va a ir a buscar esas vistas a una carpeta llamada views, que tendremos que crear en nuestro directorio. 

Allí almacenaremos todos los archivos de vistas con la extensión que corresponda según el motor de plantillas que hayamos instalado. En caso de querer almacenarlas en otra carpeta, deberemos aclararlo usando el método set() .

**.set()**

Es un método que nos permite definir configuraciones de express. Se ejecuta sobre la variable que tenga asociada la ejecución de express, en la mayoría de los casos llamada app.js

Para configurar el motor de plantillas le pasamos el string 'view engine' y el nombre del motor de plantillas que instalamos.

```javascript
app.set('view engine', 'ejs');
```

Para configurar la carpeta que almacena las vistas le pasamos el string 'view' y la ruta absoluta hacia esa carpeta haciendo uso de __dirname .

```javascript
app.set('view', __dirname + '/carpeta-vistas');
```



#### <u>Primera vista</u>

**Metodo .render()**

Es un método que se encuentra dentro del objeto response de la petición. Nos permite enviarle una vista al navegador para que este la renderice. 

Recibe un string como parámetro: el nombre del archivo de la vista que queremos renderizar. 

Es importante aclarar que, cuando le pasamos el nombre del archivo, no hace falta aclararle la carpeta en donde está almacenada esa vista -siempre y cuando hayamos configurado el template engine correctamente con el método use(). Tampoco hace falta aclarar la extensión del archivo.

```javascript
const controller = { 
    mostrarPeliculas: (req, res) => { 
        res.render('peliculas') 
    } 
}
```



#### **<u>Recursos estaticos</u>**

Son aquellos recursos públicos que manejamos dentro de nuestra aplicación: imágenes, archivos css, videos, archivos de javascript, etc. 

ara poder disponer libremente de ellos en nuestro proyecto, hace falta aclararle a Express dónde vamos a estar almacenando esos recursos.

```javascript
app.use(express.static(__dirname + '/public');
```

Con esa línea de código le estamos dando a Express acceso libre a todo lo que se encuentre dentro de la carpeta public.

Para requerir cualquier recurso:

```html
<img src="/images/logo.png">
```



#### <u>Tags de EJS</u>

EJS trae consigo un conjunto de etiquetas que nos permiten integrar funcionalidad de javaScript dentro de nuestras estructuras html.

Para poder implementar las etiquetas que nos brinda el template engine, es necesario que nuestros archivos tengan la extensión .ejs

**<% … %>**

Esta etiqueta nos permite incorporar código de JavaScript, como condicionales, estructuras de control de flujo, declaración de variables, etc.

Por cada línea de javascript que escribamos, debemos encerrar ese código entre la etiqueta <% de apertura y la etiqueta %> de cierre. En el medio podemos escribir cualquier contenido html.

```ejs
<% if(4 < 5) { %> 
	<h2>El 4 es menor que el 5</h2>
<% } %>
```

```ejs
<% for(var i=0; i<5; i++) { %>
	<p> Probando la etiqueta <% </p>
<% } %>
```



**<%= … %>**

Esta etiqueta nos permite imprimir un valor dinámico y de esta manera incorporarlo en la estructura html general.

Al valor dinámico que busquemos renderizar, los tendremos que encerrar entre la etiqueta <%= de apertura y la etiqueta %> de cierre.

```ejs
<% if(nombre) { %>
 <h2>¡Hola <%= nombre %>! </h2>
<% } %>
```



#### <u>Parametros compartidos</u>

La gran ventaja de utilizar un motor de plantillas, es que nos permite compartir información desde los controladores hacia las vistas y disponer de ella como queramos.

**¿Como muestro una vista?**

Sobre el objeto response ejecutamos el método .render() , pasándole como argumento el nombre de la vista que queremos renderizar.

```javascript
const controller = {
mostrarPeliculas: (req, res) => {
 	res.render('peliculas')
	}
}
```

El método .render() puede recibir un objeto literal como segundo parámetro. Este objeto tendrá almacenada la información que queremos enviar en conjunto con la vista que estemos renderizando.

Al objeto tendremos que asignarle una propiedad y un valor.

- El valor será la información que queremos que viaje hasta la vista. 
- El nombre de la propiedad será el que usaremos para disponer de esa información dentro del archivo de la vista.

```javascript
const peliculas = ['Deadpool', 'The Joker', 'Batman'];
const controller = {
	mostrarPeliculas: (req, res) => {
 		res.render('peliculas', {listaPeliculas: peliculas})
		}
	}
```

Cada una de esas propiedades será una variable que tendremos disponible en la vista y así disponer de la información que almacena cada una.

Para mostrar la información en la vista, haremos uso de los tags que nos provee el motor de plantillas ejs y llamaremos a la propiedad que creamos en el objeto para almacenar la información.



#### <u>Planillas personalizadas</u>

Existen maneras de modularizar nuestra estructura html logrando así simplificar mucho el desarrollo y ensamblado final de nuestro proyecto. 

Lo primero a tener en cuenta es detectar aquellas porciones de código que vemos repetidas en todos los archivos del proyecto.

En una estructura corriente de html podemos encontrar que todos los archivos fácilmente van a contar con: un head, una barra de navegación y un footer, por mencionar algunas. Cada una de estas partes, se convertirá en un archivo nuevo que contendrá únicamente esa porción de código.

Tendremos que cortar el código que queramos modularizar y pegarlo en un nuevo archivo al cual le asignaremos un nombre que represente la parte que contiene, aclarando siempre la extensión del motor de plantillas que usemos, por ejemplo: head.ejs .

Para disponer del código que modularizamos, necesitamos hacer uso de la función include() que nos provee ejs. La misma recibe como parámetro un string que será la ruta hacia el archivo que queremos incluir.

```ejs
include('./partials/head') 
```

Por último, deberemos escribir la etiqueta <%-, que imprimirá en el documento el contenido exacto que retorne el include() .

```ejs
<!DOCTYPE html>
<html lang="en">
<%- include('./partials/head') %>
<!-- Código -->
```

