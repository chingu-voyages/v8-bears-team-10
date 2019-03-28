/*
    Handles all Network Traffic
*/

class NetworkManager {
    constructor(gameManager){
        this._gm = gameManager;
       
    }
    init(){
        this._gm.listen("Transmit", this.transmit.bind(this));
    }

    transmit({socket:socket,event:event,...data}){
        //Create Packet to be sent and transmited
        console.log(event);
        console.log(data);
        socket.emit("event",data);
       
    }


}

module.exports = NetworkManager;