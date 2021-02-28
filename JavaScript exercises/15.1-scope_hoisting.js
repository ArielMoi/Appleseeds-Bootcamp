function funcA() {
    console.log(a); // returns undefines caude a was declared but not defined yet
    console.log(foo()); //console log 2
    var a = 1; // declares a

    function foo() {
        return 2; //declares the function
    }
}
funcA(); // executes the function


var fullName = 'John Doe'; //declared
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
}; // declaring the object
console.log(obj.prop.getFullName()); // returns full name and console log it
var test = obj.prop.getFullName; // saves the function value to test
console.log(test()); // returns undefined becuse returns this.full name. and this of test is not defined



function funcB() {
    let a = b = 0; // declares a as the decleration of b
    console.log(a)
    a++;
    console.log(a)
    return a; // returns b = 0 and a = undefined
}
funcB(); // executes the function
console.log(typeof a); //return undefined
console.log(typeof b, '----b'); // returns int (= 0)



function funcC() {
    console.log("1");
}
funcC(); // console log 2

function funcC() {
    console.log("2");
}
funcC(); // console log 2


function funcD1() {
    d = 1;
}
funcD1(); // creates global object
console.log(d); // 1

function funcD2() {
    var e = 1;
}
funcD2(); // declares e
//console.log(e); //undefined




function funcE() {
    console.log("Value of f in local scope: ", f); 
}
console.log("Value of f in global scope: ", f);// log and the end - undefined
var f = 1;
funcE(); // log and the end - 1