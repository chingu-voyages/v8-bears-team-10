
"use strict";
//const Event = require('./EventBase');
const IO = require('socket.io');
const NetworkManager = require("./NetworkManager");
const EventHandler = require("./EventHandler");


/*
    This Module starts the server and handles incomming and disconnected connections.

*/

class Server {
    constructor(serverID,port){
        this.serverID = serverID;
        this.port = port;
        this.server =IO();
        
        let em = new EventHandler();
        let nm = new NetworkManager();

        this.listen = em.subscribe;
        this.broadCast = em.broadCast;
        this.transmit = nm.transmit;
        this.register = nm.registerConnection;
    
      
        this.playerDisconnected = this.playerDisconnected.bind(this);

        
    }

/*
    Init is where Events are setup and data is loaded.
*/
Start(){
    console.log("Starting Server");
    this.server.listen(this.port);
    console.log(`${this.serverID} listening for connections on ${this.port}`);

    this.server.on("connect" , this.playerConnected.bind(this));
    this.server.on("disconnect", this.playerDisconnected)
}


//Broadcast a new Connection event.
playerConnected(socket){
    this.register(socket);
    this.broadCast("PlayerConnected", socket);
}

//Lets the game know a socket has been disconnected.
playerDisconnected(socket){
    console.log("Disconnected"); 
    
}



}

module.exports = Server;