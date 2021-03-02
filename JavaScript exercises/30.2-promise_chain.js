// Instructions
// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

function makeAllCaps(arr) {
    return new Promise(function (resolve, reject) {
        const newArr = [];
        for (let e of arr) {
            for (let letter of e) {
                if (!/[a-zA-Z]+/g.test(letter)) {
                    reject('not all words made of letters')
                }
            }
            newArr.push(e.toUpperCase());
        }
        resolve(newArr);
    })
}

function sortWord(arr) {
    return new Promise(function(resolve, reject){
        for (let e of arr) {
            for (let letter of e) {
                if (!/[a-zA-Z]+/g.test(letter)) {
                    reject('not all words made of letters');
                }
            }
        }
        resolve(arr.sort());
    })
}

let a = makeAllCaps(['ariel', 'is', '129']).then(
    (value) => {
        console.log(value)
    }
).catch(
    (erroe) => {
        console.log(erroe)
    }
)


let b = makeAllCaps(['ariel', 'is', 'jjuh']).then(
    (value) => {
        console.log(value)
    }
).catch(
    (erroe) => {
        console.log(erroe)
    }
)


let c = sortWord(['friel', 'as', 'jjuh']).then(
    (value) => {
        console.log(value)
    }
).catch(
    (erroe) => {
        console.log(erroe)
    }
)

let d = sortWord(['ariel', 'is', '1234']).then(
    (value) => {
        console.log(value)
    }
).catch(
    (erroe) => {
        console.log(erroe)
    }
)