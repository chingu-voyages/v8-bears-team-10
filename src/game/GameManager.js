
const Server = require('./Server');
const io = require('socket.io');
const EventHandler = require('./EventHandler');

class GameManager{
    constructor(){
        console.log("Init GameManager");
        this._server = new Server("1",3000,this,io);
        this._eventHandler = new EventHandler;
        //this._world = new World("Vox");

        this._server.start();

        this.getEventHandler = this.getEventHandler.bind(this);
    }

    getEventHandler(){
        return this._eventHandler;
    }







}

module.exports = new GameManager();
