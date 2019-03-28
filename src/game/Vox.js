const GM = require('./GameManager');
const Server = require("./Server");
const WorldManager = require("./WorldManager");

GM.Start()

let server1 = new Server(1,3000,GM);
let cm = new WorldManager(GM);
server1.Start();
cm.Start();