var express = require('express');
var router = express.Router();
var http = require('http').Server(express);
var io = require('socket.io')(http);

var events = require('events');
var eventEmitter = new events.EventEmitter();
var ringBell = function ringBell()
{
  console.log('ring ring ring');
}
eventEmitter.on('doorOpen', ringBell);
eventEmitter.emit('doorOpen');

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


router.get('/', function(req, res){
	res.render('chat', {
		title : 'Chat Application',
	});
});

module.exports = router;
