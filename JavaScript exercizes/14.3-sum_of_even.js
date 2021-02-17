function getSumOfEven(arr) {
    // console.log(arr[2])
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// used console.log
// problem is that return NaN
// line 2 becuse arr[10] is undefined
// counting starts from ZERO - need to be 1, 3, 5, 7, 9 => FIXED!