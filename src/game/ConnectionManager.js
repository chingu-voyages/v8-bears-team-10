'use strict'

/*
    Connection handles sending and receiving messages to and from the client.
*/
class ConnectionManager{
    constructor(gameManager){  
        this.gm = gameManager;   
        //Subscribe to Events
        this.playerConnection = this.playerConnection.bind(this);
    }

    Start(){
        this.gm.listen("PlayerConnected",this.playerConnection);
    }
    
    
    playerConnection(socket){
       console.log("Connection manager has received a new connection");
       console.log(socket.id);
    }


}

module.exports = ConnectionManager;