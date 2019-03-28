
const Server = require('./Server');
const EventHandler = require('./EventHandler');



class GameManager{
    constructor(){
        console.log("Init GameManager");
        //Set Up Event Handler
        let eventHandler = new EventHandler;
        this.listen = eventHandler.subscribe;
        this.broadCast = eventHandler.broadCast;

       
    }
        Start(){
            console.log("Game Engine Starting");
        }
}


module.exports = new GameManager();
