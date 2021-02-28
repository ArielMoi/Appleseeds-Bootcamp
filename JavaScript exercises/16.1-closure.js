var b = 1; //declare b as 1

function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5; // declare b as 5
    return otherFunction; // returns b as 5
}
var firstResult = someFunction(9);
var result = firstResult(2); // there is no use for the arguments. so answer stay 5.



var a = 1; // declares a as 1

function b2() {
    a = 10; // declares globaly
    return; // returns nothing

    function a() {} // changes the scoped global a to func - thats why it wont return as 10 (now a func not a var)
}
b2(); // execute the function 
console.log(a); // console.log 1


let i; // declares i (undefined)
for (i = 0; i < 3; i++) { //increments the global i (becuse wasnt declared as let or var)
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100); //console log 3 because inline loop is referred as new let but touches the global
    // so when loop end the log referres to the global loop that was already updated to 3
    // if he was to - for (let i). the log were to use the local i and log as such.
}