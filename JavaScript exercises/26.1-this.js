// 1. will console.log empty obj because looking for the outer scope obj and there is none
console.log(this);

// 2.
const myObj = {
    name: "Timmy",
    greet: function greet() {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet()

// a. will point to nothing beacuse arrow func. do hello undefined
// b. change from arrow func to regular

// 3.
const myFuncDec = function () {
    console.log(this);
};
myFuncDec()
console.log('----')
// point to myfuncdec objects is function

// 4.
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();// point to {} because arrow function ---- arrow function donr collect 'father' details.

// 5.

document.querySelector(".element").addEventListener(function(){
    console.log(this);
});

// a. point to {} because arrow function
// b. fixed by declearing func