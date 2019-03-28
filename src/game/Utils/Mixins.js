/*
    A utility class used to Mix to implement functionality of other classes without 
    direcly inheriting from them.
*/
let MixIn = (superclass) => new MixInBuilder(superclass);

class MixInBuilder{
    constructor(superclass){
        this._superclass = superclass;
    }

    with(...mixins){
        return mixins.reduce((c,mixin)=> mixin(c), this._superclass);
    }
}

module.exports = MixIn;