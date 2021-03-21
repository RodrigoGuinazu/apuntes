// VER LOS ARCHIVOS DENTRO DE LA CARPETA controllers/api, routes/api, LA CARPETA requests (ARCHIVOS DE AXIOS) Y EL ARCHIVO routes/index.js
// VER LINEAS DE CODIGO 14, 15, 16, 33, 34, 35 DEL app.js

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require("moment");
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE

var indexRouter = require('./routes/index');
var moviesRouter = require('./routes/movies');
const apiMovies = require('./routes/api/moviesRouter'); // API movies
const apiActors = require('./routes/api/actorRouter'); // API actors
const apiGenres = require('./routes/api/genreRouter'); // API genre

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.moment = moment;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE ?_method=PUT

app.use('/', indexRouter);
app.use('/movies', moviesRouter);
app.use('/api/movies', apiMovies); // app.use de la API
app.use('/api/actors', apiActors); // app.use de la API
app.use('/api/genres', apiGenres); // app.use de la API

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
