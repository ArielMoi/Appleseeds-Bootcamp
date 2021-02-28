function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            // console.log(str.charAt(i));
            counter += 1;
        }
    }
    return counter;
}

console.log(countOccurrences("ini mini miny moe", "n"));

// line 6
// was always defined as 1
// used console.log
// fixed with = '+='