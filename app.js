var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//允许跨域访问中间件
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
  res.set('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  res.set('Access-Control-Allow-Credentials', 'true');
  if(req.method=='OPTIONS')
  res.sendStatus(200)
  else
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//使用session中间件
app.use(session({
  secret: 'asdfjklk#$%^&*()$%^&*',
  resave: false,
  saveUninitialized: true,
	cookie: {maxAge: 1000 * 60 * 60 * 3}
}));

//路由
var router = require('./routes');

//var checkPermission=require('./middlewares/checkPermission')
//app.use(checkPermission)

app.use('/', router);

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
