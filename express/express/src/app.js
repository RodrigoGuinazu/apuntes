var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require("express-session"); // Se requiere express-session
var logger = require('morgan');
const methodOverride = require('method-override'); // Se requiere el methodOverride para poder usar POST, PUT, PATCH Y DELETE
let authMiddleware = require('./middlewares/authMiddleware.js') // Se requiere el authMiddleware a nivel applicacion

// REQUIRES
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let resumenRouter = require('./routes/resumen'); // Se requiere el codigo del archivo resumen.js que se encuentra en la carpeta routes

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//APP.USE IMPORTANTE EL ORDER!
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use('/', indexRouter);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); // SE CAMBIO A ../public ya que se agrego la carpeta src
app.use(session({               //
  secret: "una frase secreta",  //  Se aplica express-session a nivel applicacion
  resave: false,                //
  saveUninitialized: true       //
}))
app.use(authMiddleware); // Se aplica el authMiddleware a nivel applicacion

app.use('/users', usersRouter); // Route de login, perfil de usuario, register y edit
app.use('/resumen', resumenRouter); // Route de Resumen

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
