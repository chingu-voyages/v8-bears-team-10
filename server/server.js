//SETUP
const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const chat = require('./socket/chat');
const auth = require('./authentication/auth');
const player = require('./routes/player');

app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
	);
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

//SOCKET SETUP
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//ROUTES
app.use('/api/chat', require('./routes/chat')(io, chat));
app.use('/api/auth', auth);
app.use('/api/register', auth);

app.use('/api/player', require('./routes/player'));

//launch
server.listen(port, function() {
	console.log(`Server listening on port ${port}!`);
});
