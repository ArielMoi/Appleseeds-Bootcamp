
Array.prototype.filter = function (callback){
    let elements = [];
    for (let element of this){
        if(callback(element)){
            elements.push(element);
        }
    } return elements;
}

function biggerThanOne(n){
    return n > 1;
}

console.log([1,2,3].filter(biggerThanOne));


Array.prototype.find = function (callback){
    for (let element of this){
        if(callback(element)){
            return element;
        }
}}

console.log([1, 2, 3].find(biggerThanOne))

function add(a, b){
    return a + b;
}

Array.prototype.reduce = function (callback, start = 0){
    let s = start;
    for (let element of this){
        s = callback(s, element);
    }
    return s;
}

console.log([1, 2, 3].reduce(add))
console.log([1, 2, 3].reduce(add, 5))