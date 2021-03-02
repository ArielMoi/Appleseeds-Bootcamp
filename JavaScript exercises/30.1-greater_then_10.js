//  promises
// Instructions
// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.
// Submit the file to Hive.


function myPromise(n) {
    return somePromise = new Promise(function (resolve, reject) {

        if (n > 10) {
            resolve(`${n} is bigger than 10`);
        } else {
            reject(`${n} is smaller than 10`);
        }
    })
};

// const biggerPromise = myPromise(9);
const smallerPromise = myPromise(5);

const biggerPromise = myPromise(9).then(function (n) {
    console.log(n);
}).catch(function (n) {
    console.log(n);
})