// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function countingDuplicates(str){
    let obj = [];
    for (let letter of str){
        obj[letter] 
        ? obj[letter] += 1
        : obj[letter] = 1;
    }

    let duplicates = Object.entries(obj).filter(([key, value]) => value > 1)
    return duplicates.length;
}

console.log(countingDuplicates('Indivisibilities'));
console.log(countingDuplicates('indivisibility'));
