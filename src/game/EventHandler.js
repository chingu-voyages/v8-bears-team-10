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

        this.createEvent = this.createEvent.bind(this);
        this.broadCast = this.broadCast.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    init(){

    }
    
    /*
    Allows objects to subscribe to a specific event.
    @param name - Name of the event.
    @param cbFunction - A callback function that is fired when the event is broadcast.
*/
    subscribe(name,cbFunction){
        console.log(this);
       this.eventList[name].addListener(cbFunction);
    }

/*
    Invoke the Event.
    @param name - Name of the event.
    @param data - The data associated with the event to be used by the subscriber.
*/
    broadCast(name,data){
        this.eventList[name].fire(data);
    }

/*
    Creates a new Event
    @param name - is the name of the event.
    @param invoker - is the broadCaster of the event.
*/
    createEvent(name,broadCaster){
        let e = new Event(broadCaster,name);
        this.eventList[name] = e;
    }
}
module.exports = EventHandler;

