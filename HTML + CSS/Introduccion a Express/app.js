// Introuccion a Express: Express es un framework que facilita y agiliza el desarrollo de apps web en Node. Este es un entorno de trabajo que trae resuelta una serie de tareas, automotizando asi el desarrollo de cualquier app

// 1) Instalar la libreria en un proyecto de Node ya inicializado. Luego escribimos         npm install express --save
// 2) Luego hacemos el requier en el entry-point                                            const express = require('express');
// 3) Almacenamos la ejecucion en una variable                                              const app = express();

// Funcionalidades de Express: el objeto que devuelve express(); tiene metodos asociados para gestionar las peticiones que se hagan, las siguientes son:                            app.get(); app.post(); app.delete(); app.put(); app.patch();

// Servidor http en Express

// 1) Levantando el servidor. Ej: app.listen(3000, ()=> console.log('Exito'));                                                                                                      Este metodo recibe dos parametros, el 1ero es el nro de puerto, y el 2do un callback que retorna un console.log para verificar que el servidor se haya levantado correctamente.

// 2) Definiendo las rutas y los response. Ej: app.get('/', (req, res)=> {res.send('Hola')})                                                                                           Este recibe dos parametros, el 1ero un string que define la ruta, y el 2do un callback con dos parametros (req,res) que express pone a disposicion. Y dentro del callback definimos la respuesta, usando el obejto res y el metodo .send

const express = require('express');
const app = express();
productos = ['Autos ', 'Motos ', 'Camionetas']

app.listen(3000, ()=> console.log('Exito!'));

app.get('/', (req, res)=>{
    res.end('Bienvenido a la Homepage!');
})

app.get('/listado', (req, res)=>{
    res.end('Este es el listado de productos: ' + productos);
})

app.get('/login', (req, res)=>{
    res.end('Bienvenido al LogIn');
})