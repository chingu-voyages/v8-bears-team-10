
/*
    Interface that handles the interaction between modules.  
*/

class EventHandler {
    constructor(){
        this.events = {}
        this.publish = this.publish.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
    
    init(){
        //
        let e = new Event("onConnection", {})
    }

    subscribe(event){

    }

    publish(event){

    }

    

}

module.exports = EventHandler;

let Event = (name,data)=> {
    let _name = name;
    let _data = data;

    return{
        getName() {
            return _name;
        },
        getData(){
            return _data;
        }
    } 
}