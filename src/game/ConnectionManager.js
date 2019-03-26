'use strict'

/*
    Connection handles sending and receiving messages to and from the client.
*/
class ConnectionManager{
    constructor(gameManager){  
        this.gm = gameManager;   
        //Subscribe to Events
        this.onConnection = this.onConnection.bind(this);
    }

    init(){
        //Setup Events
        //Setup Event Listeners
        this.gm.getEventHandler().subscribe("Connection", this.onConnection)

    }
    
    
    onConnection(data){
       console.log("Connection manager has received a new connection");
    }


}

module.exports = ConnectionManager;