var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');

var about = require('./routes/about');
var bmi = require('./routes/bmi');
var workouts = require('./routes/workouts');
var chest = require('./routes/chest');
var triceps = require('./routes/triceps');
var biceps = require('./routes/biceps');
var back = require('./routes/back');
var shoulders = require('./routes/shoulders');
var forearms = require('./routes/forearms');
var legs = require ('./routes/legs');
var abdominals = require('./routes/abdominals');
var cardio = require('./routes/cardio');

var app = express();

// app.use('/static', express.static(__dirname + '/public'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/about', about);
app.use('/bmi', bmi);
app.use('/workouts', workouts);
app.use('/chest', chest);
app.use('/triceps', triceps);
app.use('/back', back);
app.use('/biceps', biceps);
app.use('/legs', legs);
app.use('/abdominals', abdominals);
app.use('/shoulders', shoulders);
app.use('/forearms', forearms);
app.use('/cardio', cardio);

var Account = require('./model/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//mongoose
mongoose.connect('mongodb://localhost/rfdb');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.use('/users', users);

module.exports = app;
