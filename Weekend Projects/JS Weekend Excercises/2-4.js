// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr) {
    let obj = {};
    let answer;
    arr.forEach(num => {
        obj[num] ? obj[num] += 1 :obj[num] = 1;
    })
    Object.entries(obj).forEach(([key, value]) => {
        if (value == Math.min(...Object.values(obj))) {
            answer = key;
        }
    })
    return answer;
}

console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));