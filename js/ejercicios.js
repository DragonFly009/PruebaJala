/**
 * Created by samuelvargas on 4/21/2015.
 */
var Operations = function(){

    var numbers= prompt("Enter values");
    var ser= numbers.split(",");
    var real= [];
    for ( var i= 0; i<ser.length;i++)
    {
        real[i] =parseInt(ser[i]) ;
    }
    window.alert('The maximum number is :'+getMaximo(real));
    window.alert('The minimum number is :'+getMinimo(real));
    window.alert('The Average is :'+getAverage(real));
    window.alert('The sum total is :'+getSuma(real));

}


var getMaximo = function(number, pos, max){
//var max;
    if (pos == undefined)
        pos = number.length-1;
    if (max==undefined)
        max = number[pos];
    if (pos==0)
        return max;
    if (max < number [pos-1])
        max =number[pos-1]
    return getMaximo(number, pos-1, max);
};



function getMinimo(number, pos, min){
    if (pos == undefined)
        pos = number.length-1;
    if (min==undefined)
        min = number[pos];
    if (pos==0)
        return min;
    if (min > number [pos-1])
        min =number[pos-1]
    return getMinimo(number, pos-1, min);
};


function getAverage(number,pos,suma){

    var prome = 0;
    if(pos==undefined)
        pos=number.length-1;

    if(pos==0) {
        return prome;
    }
    else {
        total = getSuma(number,pos,suma);
        pos++;
        prome = total/pos;
    }
    return prome;

};

function getSuma(number,pos,suma){
    if(pos==undefined)
        pos=number.length -1

    if (suma== undefined)
        suma=number[pos];

    if(pos==0) {
        return suma;
    }
    else {
        suma = suma + number[pos-1]
    }
    return getSuma(number,pos-1,suma);
};



