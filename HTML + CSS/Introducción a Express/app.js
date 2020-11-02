// Protocolo http: Es la gestion de transacciones web entre clientes y servidores. Se trabaja con request (cuando el cliente solicita algo) y response (la respuesta que da el servidor a esa solicitud especifica).

// Meotodos de Peticion:
// .get: Se utiliza para pedirle informacion al servidor de un recurso especifico. La info que se envie con este metodo viajara a traves de la url 
// .post: Se utiliza para enviar datos. Es mas seguro que get, ya que la info no viaja por la url.
// .delete: Borra un recurso presente en el servidor.
// .put: Muy parecido al post. Se usa para reemplazar toda la info actual de un recurso presente en el servidor.
// .patch: Similar a .put. Se utiliza para modificaciones parciales.

// http en Node
// 1) Requerir el modulo nativo en el entry point                       const http = require('http')

// 2) Levantar el servidor y recibir las peticiones que le lleguen      http.createServer(function (req, res){Cuerpo del Callback}.listen(puerto, dominio));

// 3) Para levantar el servidor solo basta con ejecutar por terminal el archivo entry-point, y para cortarlo presionar 'ctrl+c'

// 4) Una vez con la estructura necesaria para hacer las peticiones al servidor. Es momento de definir el response que nos dara.                                                       Lo que iria dentro del callback en el 2) seria: 
// res.writeHead(200, {'content-type': 'text/plain'}); Donde 200 es el status de la peticion, en este caso 200 = response satisfactorio. El segundo parametro es el tipo de contenido que el response enviara, es enste caso texto plano. Tambien podria ser PLANO, HTML, JSON.
// res.end('Probando http con Node!')  Este seria el contenido que veria el cliente en la pagina.

// Porceso de Routing: Proceso en el que se define cada ruta y respuesta que habra en cada una.

//Ejemplo:

const http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    switch(req.url){
        case '/':
            res.end('Bienvenido a mi Homepage!');
            break;
        case '/productos':
             res.end('Estos son los productos disponibles');
            break;
        default:
            res.end('Error, Intente mas tarde');
            break;
    }
    res.end('Probando http con Node!')
}).listen(3030, 'localhost');
