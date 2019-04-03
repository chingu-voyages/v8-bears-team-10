
/*
    Vector class
*/
class Vector {
    constructor(x,y){
        this._x = x || 0;
        this._y = y || 0;
    }

    X(data){
        if(data){
            this._x = data;
        }
        else{
            return this._x;
        }
    }

    Y(data){
        if(data){
            this._x = data;
        }
        else{
            return this._x;
        }
    }
}

Vector.Difference = (vec1, vec2) => {
    //Calculate difference of two vectors
}

Vector.Add(vec1, vec2) = {
    //Add two vectors
}

module.exports = Vector;