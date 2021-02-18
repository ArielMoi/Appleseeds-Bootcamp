// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

function longestWord(str){
    let longest = str.split(' ')[0];
    for (let word of str.split(' ')){
        longest = word.length >= longest.length ? word : longest;
    }
    return longest;
}

console.log(longestWord('hi my name is chichi slimShady'));
console.log(longestWord('hi my name is chichi'));