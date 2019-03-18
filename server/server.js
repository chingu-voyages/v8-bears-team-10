//SETUP
var express = require('express');
var port = process.env.PORT || 3001;
var app = express();
var bodyParser = require('body-parser');
var chat = require('./socket/chat');

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

//SOCKET SETUP
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//ROUTES
app.use('/api/chat', require('./routes/chat')(io, chat));

//launch
server.listen(port, function() {
	console.log(`Server listening on port ${port}!`);
});
