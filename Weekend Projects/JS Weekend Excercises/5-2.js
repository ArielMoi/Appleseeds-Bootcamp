// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(count, str){
    return str.repeat(count);
}

console.log(repeatStr(6, "I"))
console.log(repeatStr(5, "Hello"))