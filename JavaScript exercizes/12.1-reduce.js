// 1.

function max(a, b){
    if (a > b) {
        return a;
    }else {
        return b;
    }
}

// console.log([1,2,3,4,5,67,4,3].reduce(max))

// 2. 

function sumOfEven(a, b){
    if (b % 2 == 0 && b != 1){
        return a + b;
    }else {
        return a;
    }
}

// console.log([1,2,3,4,5,6,79,9,10].reduce(sumOfEven, 0));

// 3.

function sum (a,b) {
    return a + b;
}

function average(arr){
    return arr.reduce(sum) / arr.length;
}

// console.log(average([10, 5, 30, 4, 2]));
