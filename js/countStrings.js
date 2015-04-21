/**
 * Created by samuel on 18/04/2015.
 */


var cad = function(){
    var numPalabras = prompt("Ingrese un Parrafo");
    var cont = numPalabras.split(" ");
    //alert("el numero de palabras es " + cont.length);

    for(var i = 0; i<cont.length; i++){
        console.log( " * " + cont[i] + " * ");
        document.write("<br /> * "  + cont[i] + " * ");
    }

};