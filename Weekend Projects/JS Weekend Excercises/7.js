// Implement Functionality
// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)


function filter(arr, callback) {
    for (let el of arr){
       if (callback(el)) return el
    }
}

// console.log(filter([1,5,3, 4, 2], (el) => el % 2 == 0))


function forEach(arr, callback){
    for (let el of arr){
        callback(el);
    }
}

//forEach([1,2,3,4], console.log);

function map(arr, callback){
    let arr2 = [];
    for (let el of arr){
        arr2.push(callback(el));
    }
    return arr2;
}

//console.log(map([1,2,3,4], el => el * 2))