
"use strict";
const Event = require('./EventBase');
const Connection = require("./ConnectionManager");

/*
    Server is created by the GameManager and handles all incomming connections.

*/

class Server {
    constructor(serverID,port,gameManager,ioSocket){
        this.serverID = serverID;
        this.port = port;
        this.server;
        this.connections = [];
        this.io = ioSocket;
        this.gm = gameManager;
        this.onConnect = this.onConnect.bind(this);
        this.onDisconnect = this.onDisconnect.bind(this);
    }

init(){

    //Setup Event Publishers
    this.gm.getEventHandler().createEvent("onConnection",{socket,server});
    

    //Setup Event Listeners
    this.gm.getEventHandler().subscribe("PlayerCreated", this.onConnection);

    
}

start(){
    //Start listening for connections
    this.server = this.io.listen(this.port)
    console.log(`${this.serverID} listening for connections on ${this.port}`);
    this.server.on("connect" , this.onConnect);
}



//Creates a new connection and stores it in @param connections.
onConnect(connection){
    let ip = connection.socket.handshake.address;
    console.log(`New connection from ${ip}`);
    this.connections.push(connection);
}

//Removes connection from @param connections
onDisconnect(connection){
    console.log("Disconnected"); 
    this.connections.splice(this.connections.findIndex((conn, index)=>{
        if(connection.socket === conn.socket ){
            return index;
        }
    }, connection),1);
}

onConnection(){
    console.log("New Connection!")
}

}

module.exports = Server;