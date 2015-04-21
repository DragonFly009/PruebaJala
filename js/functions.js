/**
 * Created by samuelvargas on 4/21/2015.
 */

var sayHello = function(name){
    console.log('hello ' + name + ';');
};

sayHello('Leo');

//funciones anonimas
(function(name, lastName){
    console.log('hello ' + name + ';' +  lastName + ';');
})('hola','mundo');




//funciones con objetos

var Person = function(name, age){
    this.name= name;
    //this.age = age;  <----- esta es una variable publica
    //para que sea una variable privada se debe declara con barra abajo y se pone 'var' para q pertenezca solo a esa funcion
    var _age = age;

    //creando getters
    this.getAge = function(){
        return _age;
    };

    //creadon setters
    this.setAge = function(newAge){
        _age = newAge;
    };

    this.getHistory = function(){
        console.log(this.name + ' was born ' + _age + ' years age ');
    }
};



//instanciacion de clases
var pepe= new Person(' pepe ', 12);
pepe.getAge();
pepe.getHistory();