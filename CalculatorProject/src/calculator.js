/**
 * Created by Samuel Vargas on 4/15/2015.
 */

var Calculator = function() {

    var res = 0;
    var res2 = 1;

    this.getSuma = function (n1, n2) {
        if (typeof n1 == "string" || typeof n2 =="string"){
            throw ('Invalid message');
        }
        if ((n1 != undefined) && (n2 != undefined)) {
            res = n1 + n2;
            return res;
        }
        if ((n1 != undefined) && (n2 == undefined)) {
            res = res + n1;
            return res;
        } else {
            res = res + n2;
            return res;
        }
    };

    this.getSubstract = function (n1, n2) {
        if (typeof n1 == "string" || typeof n2 =="string") {
            throw ('Invalid message');
        }
        if ((n1 != undefined) && (n2 != undefined)) {

            res = n1 - n2;
            return res;
        }
        if ((typeof  n1 == "number") && (n2 == undefined)) {
            res = res - n1;
            return res;
        }

    };


        this.getMultiplication = function(n1,n2){

            if(typeof n1 == 'number' || n2 =='number')
                return n1*n2;

            if(typeof n1 == 'string' || n2 =='string')
                throw('Invalid message')

            if(typeof n1 == 'number' || n2 =='string')
                throw('Invalid message')

            if(typeof n1 == 'string' || n2 =='number')
                throw('Invalid message')
        };



    this.getDivide = function(n1,n2){

        if(typeof n1 == 'number' || n2 =='number')
            return n1/n2;

        if(typeof n1 == 'string' || n2 =='string')
            throw('Invalid message')

        if(typeof n1 == 'number' || n2 =='string')
            throw('Invalid message')

        if(typeof n1 == 'string' || n2 =='number')
            throw('Invalid message')
    };
};





