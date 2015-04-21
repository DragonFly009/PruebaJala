// Calculator

var Calculator = function(){
    this.add= function(a,b){
        if (typeof a == "string" || typeof  b=="string"){
            throw ("Invalid message");
        }
        return a+b;
    };

    this.substract = function(a,b){
        return a-b;
    };

    this.multiply = function(a,b){
        return a*b;
    };

    this.divide = function(a,b){
        return a/b;
    };
};