//  bind, call, apply
// Instructions
// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

function Name(name) {
    this.name = name;
    this.printsName = function(){
        console.log(this.name);
    };
    this.printDelayName = function(){
        setTimeout(this.printsName.bind(this), 1000);
    };
}

let ariel = new Name('ariel')

ariel.printsName();
ariel.printDelayName();