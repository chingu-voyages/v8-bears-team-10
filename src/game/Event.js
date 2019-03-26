
class Event{
    constructor(invoker,name){
        //Name of the event
        this._name = name;
        //An array of listeners to this event
        this._listeners = [];
        //The data that is passed when the event fired.
        this._data = new EventData(invoker);

      
    }

    fire(data){
        if(data){
            this._data.setData(data);
        }
        console.log("in Fire");
        for(let x = 0 ; x < this._listeners.length; x++){
            console.log(this._data);
            this._listeners[x](this._data);
        }
    }
    addListener(listener){
        this._listeners.push(listener);
        console.log(this._listeners);
    }
}

module.exports = Event;

class EventData {
    constructor(invoker){
        this._invoker = invoker;
        this._data = null;
    }

    getData(){
        return this._data;
    }
    getInvoker(){
        return this._invoker;
    }
    setData(data){
        this._data = data;
    }
}