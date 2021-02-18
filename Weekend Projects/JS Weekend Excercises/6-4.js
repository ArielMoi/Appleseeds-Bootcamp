// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isogram(str){
    let obj = {};
    for (let letter of str.toLowerCase()){
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }
    return Object.values(obj).find(value => value > 1) == undefined;
}


console.log(isogram('Dermatoglyphics'))
console.log(isogram('aba'))
console.log(isogram('mMOse'))