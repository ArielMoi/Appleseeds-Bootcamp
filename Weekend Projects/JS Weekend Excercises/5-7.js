// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function shortesWord(str){
    let shortest = str.split(' ')[0];
    for (let word of str.split(' ')){
        shortest = word.length <= shortest.length ? word : shortest;
    }
    return shortest;
}


console.log(shortesWord('hello my name Georgio'));