var express = require('express');
var router = express.Router();

var returnRouter = function(io, rooms, images) {
	router.get('/', function(req, res, next) {});

	io.on('connection', socket => {
		console.log('User Connected');

		//HANDLE CHAT MESSAGE
		socket.on('message_sent', function(data) {
			console.log('message', data.message);
			io.emit('message_received', data.message);
		});

		//HANDLE CHAT MESSAGE
		socket.on('ping_room', function(fn) {
			fn('pong');
		});
	});
	return router;
};
module.exports = returnRouter;
