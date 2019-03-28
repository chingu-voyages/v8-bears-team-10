
"use strict";
//const Event = require('./EventBase');
const IO = require('socket.io');
const IPlayer = require("./IPlayer.js");

/*
    This Module starts the server and handles incomming and disconnected connections.

*/

class Server {
    constructor(serverID,port,gameManager){
        this.serverID = serverID;
        this.port = port;
        this.server;
        this.connections = [];
        this.gm = gameManager;
        this.listeners = [];
        
        this.playerConnected = this.playerConnected.bind(this);
        this.playerDisconnected = this.playerDisconnected.bind(this);

        
    }

/*
    Init is where Events are setup and data is loaded.
*/
Start(){
    console.log("Starting Server");
    this.server = IO.listen(this.port);
    console.log(this.server.emit);
    console.log(`${this.serverID} listening for connections on ${this.port}`);

    this.server.on("connect" , this.playerConnected);
    this.server.on("disconnect", this.playerDisconnected)
}

/*
    Start is where the module with listen to listeners
*/
//Broadcast a new Connection event.
playerConnected(socket){
        this.gm.broadCast("PlayerConnected", socket);
}

//Lets the game know a socket has been disconnected.
playerDisconnected(socket){
    console.log("Disconnected"); 
    this.gm.broadCast("PlayerDisconnected", socket);
}


}

module.exports = Server;