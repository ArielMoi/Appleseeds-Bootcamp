function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log(calcAverage([85, 90, 92]));

// line 3 arr.length
//  used console.log
// return was NaN
// sum needed to be drfined as 0.
// FIXED