var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
// var socket = require("./socket")
var { WebSocketServer } = require('ws');

const sockserver = new WebSocketServer({ port: 443 })
sockserver.on('connection', ws => {
  console.log("ll")
  var a = {
    'alal': 1,
    "mmmm": 2,
    "pol": "mmm"
  };
  ws.send(JSON.stringify(a));
  ws.on('close', () => console.log('Client has disconnected!'))
  // ws.on('message', data => {
  //   // sockserver.clients.forEach(client => {
  //     console.log(data.)
  //     // client.send(`hello`)
  // })
  // // })
  ws.onerror = function () {
    console.log('websocket error')
  }
 })
var app = express();
app.use(cors())

// socket();

var orderPlacementRouter = require('./routes/orderPlacement');
var orderStatusRouter = require('./routes/orderStatus');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/order/place', orderPlacementRouter);
app.use('/order/status', orderStatusRouter);

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
  res.send('internal server error - ' + err);
});

module.exports = app;
