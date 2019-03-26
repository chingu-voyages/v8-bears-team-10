
"use strict";
const Event = require('./EventBase');
const IO = require('socket.io');


/*
    This Module starts the server and handles incomming and disconnected connections.

*/

class Server {
    constructor(serverID,port,gameManager){
        this.serverID = serverID;
        this.port = port;
        this.sockets;
        this.connections = [];
        this.gm = gameManager;
        this.listeners = [];
        this.onConnect = this.onConnect.bind(this);
        this.onDisconnect = this.onDisconnect.bind(this);
        this.start = this.start.bind(this);
        
    }

/*
    Init is where Events are setup and data is loaded.
*/
init(){
    console.log("init Server");
    this.gm.getEventHandler().createEvent("Connection", this);
    this.gm.getEventHandler().createEvent("Disconnected", this); 

    this.gm.getEventHandler().subscribe("Start", this.start);
}

/*
    Start is where the module with listen to listeners
*/
start(){
    //Start listening for connections
    console.log("Starting server");
    this.sockets = IO.listen(this.port)
    console.log(`${this.serverID} listening for connections on ${this.port}`);

    //Handler Listener for incomming connection
    this.sockets.on("connect" , (socket) => { return this.onConnect(socket);});
    this.sockets.on("disconnect", (socket) =>{ return this.onDisconnect(socket)})
}

//Broadcast a new Connection event.
onConnect(socket){
    this.gm.getEventHandler().broadCast("Connection",socket);
}

//Lets the game know a socket has been disconnected.
onDisconnect(socket){
    console.log("Disconnected"); 
    this.gm.getEventHandler().broadCast("Disconnected",socket);
}

}

module.exports = Server;