/**/
/**
 * Module dependencies.
 */
//var app = express();
var app = require('express')();

var express = require('express')
  , routes = require('./routes')
  , join = require('./routes/join')
  , cafe = require('./routes/cafe')
  , path = require('path')
  , http = require('http').Server(app);
  , io = require('socket.io')(http);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/join', join.index);
//app.get('/cafe'), cafe.index);

/*
io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
            console.log('a user has disconnected');
    });

    // picks up user client sent message to server and prints to console    
    socket.on('chat message', function(msg) {
            console.log('message: '+msg);
    });

    // emits the message to client side                                     
    socket.on('chat message', function(msg){
            io.emit('chat message', msg);
    });

    // listens to keypress from client and prints to server console         
    socket.on('keyPress', function(msg){
            console.log('key pressed: '+msg);
            io.emit('keyPress', msg)
    });



    // listens to backspace keypress from client                            
    socket.on('backSpace', function(msg) {
            console.log('backspace hit!!');
            io.emit('backSpace', msg);
    });
});
*/


//http.createServer(app).listen(app.get('port'), function(){
//require('http').createServer(app).listen(app.get('port'), function(){
http.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
