// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1,s2){
    let array = [];
    for (letter of s1){
        if (!/^[a-zA-Z]+$/.test(letter)) continue; 
        !array.includes(letter) && array.push(letter);
    }
    for (letter of s2){
        if (!/^[a-zA-Z]+$/.test(letter)) continue;
        !array.includes(letter) && array.push(letter);
    }

    return array.sort().join('');
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));