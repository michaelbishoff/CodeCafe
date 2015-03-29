var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

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

http.listen(3000, function(){
  console.log('listening on *:3000');
});


