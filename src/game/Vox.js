const GM = require('./GameManager');
const Server = require("./Server");
const WorldManager = require("./WorldManager");
const NetworkManager = require("./NetworkManager");

GM.Start()

let server1 = new Server(1,3000,GM);
let cm = new WorldManager(GM);
let nm = new NetworkManager(GM,server1.server);
nm.init();
server1.Start();
cm.Start();