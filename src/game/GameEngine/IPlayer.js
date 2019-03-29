const Player = require("./Player");

/*
    Player factory that listens for New Player 
    Event and replies with a New Player Object.
*/

class IPlayer {
    constructor(gm){
        console.log(gm);
        gm.getEventHandler().createEvent("PlayerLoaded", null);

        // @param data - Is a player object either new or loaded from DB.
        gm.getEventHandler().subscribe("Connection", this.onConnection);
    }

    onConnection(){
        console.log("Create new player!");
    }

}

module.exports = IPlayer;

