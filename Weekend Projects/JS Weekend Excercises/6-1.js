// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("c") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z


function accum(str){
    if (!/^[a-zA-Z]+$/.test(str)) return 'there is numbers in yout string.. cant work with that'; // checkig if there somthing other than letters in string
    let answerArray = []; 
    for (let i = 0; i <= str.length - 1; i++){
        answerArray.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i)) // pushing the letter * index in array 
    }
    return answerArray.join('-')
}

console.log(accum('abcd'))
console.log(accum('cwAt'))
console.log(accum('cwA1t'))