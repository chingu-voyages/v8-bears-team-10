/*

*/

class GameObject {
    /*
        @params name - string
        @params position - vector 
        @params active - bool
    */
    constructor(name,position){
        this._name = name;
        this._position = position;
        this._active = true;
    }
}

module.exports = GameObject;