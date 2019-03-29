/*
    Handles all Network Traffic
*/

class NetworkManager {
    constructor(){
        this._connections = [];    

        this.registerConnection = this.registerConnection.bind(this);
    }
    
    init(){
        // this._gm.listen("Transmit", this.transmit.bind(this));
        // this._gm.listen("NewConnection", this.registerConnection.bind(this));
    }

    transmit({socket:socket,event:event,...data}){
        //Create Packet to be sent and transmited
        socket.emit("Event",data);
       
    }

    handleClientMsg(data){
       
        console.log(data);

    }

    registerConnection(socket){
        this._connections[socket.id] = socket;
        socket.on("ClientMsg", this.handleClientMsg.bind(this));
    }


}

module.exports = NetworkManager;