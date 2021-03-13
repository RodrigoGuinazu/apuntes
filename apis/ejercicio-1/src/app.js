// REVISAR LOS ARCHIVOS (src\controllers\api\productsController.js), (src\routes\api\productsRouter.js), (public\js\products.js), (public\js\categories.js)
// Y LAS LINEAS 48 Y 53 DEL APP.JS

// ************ Require's ************
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

const logMiddleware = require('./middlewares/log');
const cartMiddleware = require('./middlewares/cart');
const helpersMiddleware = require('./middlewares/helpers')

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(session({
  secret: 'mercadoliebre',
  resave: false,
  saveUninitialized: true
}));
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// My middlewares
app.use(logMiddleware);
app.use(cartMiddleware);
app.use(helpersMiddleware);

// ************ WRITE YOUR CODE FROM HERE ************
// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRouter'); // Rutas main
const productsRouter = require('./routes/productsRouter'); // Rutas /products
const usersRouter = require('./routes/usersRouter'); // Rutas /user
const apiProductsRouter = require('./routes/api/productsRouter'); // API productos

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/api/products', apiProductsRouter); // app.use de la API

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ************ exports app - dont'touch ************
module.exports = app;
