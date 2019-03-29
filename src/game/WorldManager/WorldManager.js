'use strict'

/*
    Connection handles sending and receiving messages to and from the client.
*/
class WorldManager{
    constructor(gameManager){  
        this.gm = gameManager;
        this.connections = [];   
        
        //Maintains list of currently active worlds
        this.worlds = [];
              
    }

    Init(){
        //Load in Worlds from world data
        this.worlds.push(new World(1));
    }

    Start(){
        this.gm.listen("PlayerConnected",this.onPlayerConnection.bind(this));
        this.gm.listen("ClientLogin", this.onLogin.bind(this));
        
    }
    
    
    onPlayerConnection(socket){
      // console.log("World Manager has received a new connection");
       this.connections[socket.id] = {
           socket: socket,
           state: `init`,
       };

       //Load data from User Table - User Table holds Player ID, and Character IDs those Worlds
       //If data send back the information through the network
       /*
        If no data send new player event to client.
        1. New Player ID
        2. Save player into database - Database should be listening for event sent
        */
       let obj = {
           socket:socket,
           event: "NewPlayer",
           playerID:1
       }
      // this.gm.broadCast("NewConnection",socket);

    }

    onLogin(data){
        
    }


}

module.exports = WorldManager;