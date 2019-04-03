const MixIn = require("./Utils/Mixins");
const Movable = require("./Movable");
const GameObject = require("./GameObject");

class Player extends MixIn(GameObject).with(Movable){
    constructor(){
        super();
        console.log("I am a player!");
    }

    Move(){
        console.log("I am a player tho can move!");
    }
}

module.exports = Player;