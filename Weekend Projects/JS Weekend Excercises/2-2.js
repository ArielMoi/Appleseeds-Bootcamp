// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

function booleanConverter(arr){
    let answer = 0;
    let index = 0;
    for (let i of arr.reverse()){
        answer = answer + (i == 1 ? 2 ** index : 0);
        index ++;
    } return answer;
}


console.log(booleanConverter([0, 1, 0, 1]));
console.log(booleanConverter([0, 1, 0, 1,1,0,0,1]));