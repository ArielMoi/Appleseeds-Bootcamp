// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F6.6

function abbreviateTwoWords(str) {
    return (str.split(' ').length > 2 
    ? 'we asked for two words.' 
    : `${str.split(' ')[0][0].toUpperCase()}.${str.split(' ')[1][0].toUpperCase()}`);
}

console.log(abbreviateTwoWords('Sam Harris'));
console.log(abbreviateTwoWords('Patrick Feeney'));