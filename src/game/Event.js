
class Event{
    constructor(name){
        //Name of the event
        this._name = name;
        //An array of listeners to this event
        this._listeners = []; 
    }

    fire(data){
        for(let x = 0 ; x < this._listeners.length; x++){
            this._listeners[x](data);
        }
    }

    addListener(listener){
        this._listeners.push(listener);
    }
}

module.exports = Event;