
const Server = require('./Server');
const EventHandler = require('./EventHandler');
const ConnectionManager = require('./ConnectionManager');


class GameManager{
    constructor(){
        console.log("Init GameManager");
        this._gameObjects = [];
        this._gameObjects["server"] = new Server(1,3000,this);
        this._gameObjects["eventHandler"] = new EventHandler;
        this._gameObjects["connectionManager"] = new ConnectionManager(this);
        //this._world = new World("Vox");
        this._connectionManager;
        this.getEventHandler = this.getEventHandler.bind(this);
       
    }

    init(){

        this._gameObjects["eventHandler"].createEvent("Start",this)
        
        for (let go in this._gameObjects){
            this._gameObjects[go].init();
        }

        this._gameObjects["eventHandler"].broadCast("Start", null);
        
    }

    getEventHandler(){
        return this._gameObjects["eventHandler"];
    }







}

module.exports = new GameManager();
