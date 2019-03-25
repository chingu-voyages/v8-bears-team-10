'use strict'

/*
    Connection handles sending and receiving messages to and from the client.
*/

const state = { INIT:0,PLAYING:1,DONE:2,ERROR:3};

class Connection{
    constructor(socket, server){
        this.socket = socket;   
        this.server = server;   
        this.state = state.INIT;

        this.setUpListeners()

        this.handleEvent = this.handleEvent.bind(this);
    }

    setUpListeners(){

        //Event Listener
        this.socket.on("Event", ()=>{
            let event = {Type:"LOGIN"};
            this.handleEvent(event);
            });

        //Disconnect Listener
        this.socket.on("Disconnected", ()=> this.server.onDisconnect(this));
    }

    handleEvent(event){
        console.log(event);
        if(this.state === state.INIT){
            if(event.Type != "LOGIN"){
                console.log("Must Login First!");
                return;
            }
            console.log("Logging In")
        }
    }

}

module.exports = Connection;