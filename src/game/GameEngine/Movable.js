/*
    
*/

const Movable = (superclass)=> class extends superclass{
    constructor(){
        super();
    }
    
    Move(){
        console.log("I can move!");
    }

}
module.exports = Movable;