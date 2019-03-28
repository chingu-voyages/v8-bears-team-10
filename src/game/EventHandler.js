const Event = require('./Event');
/*
    The EventHandler is an interface that handles all events in the game.  
    New events can be created and modules can listen for when the events occur
    and handle them as needed. 
*/
class EventHandler {
    constructor(){   
        //Contains all the events that can be broadcast.     
        this.eventList = [];

        this.broadCast = this.broadCast.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
/*
    Register a handler for an event.
    @param {string} name - Name of the event
    @param {function} cbFunction- The function that is fired when the event is broadcast.
*/
    subscribe(name,cbFunction){
        if(!this.eventList[name]){
            let e = new Event(name)
            e.addListener(cbFunction);
            this.eventList[name] = e;
        }else
            this.eventList[name].addListener(cbFunction);
    }

/*
    Invoke the Event.
    @param {string} name - Name of the event.
    @param {object} data - The data associated with the event to be used by the subscriber.
*/
    broadCast(name,data){
        if(this.eventList[name]){
            this.eventList[name].fire(data);
        }
        else 
            console.log(`Nobody is listening for ${name}`);
    }
}
module.exports = EventHandler;

