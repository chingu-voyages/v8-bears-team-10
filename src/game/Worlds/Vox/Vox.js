
const Server = require("../../Server/Server");
const World = require("../../GameEngine/World");


let server = new Server(1,3000);
server.Start();


let world = new World("Vox",server);
world.Start();