const GM = require('./GameManager');
const Server = require("./Server");
const ConnectionManager = require("./ConnectionManager");

GM.Start()

let server1 = new Server(1,3000,GM);
let cm = new ConnectionManager(GM);
server1.Start();
cm.Start();