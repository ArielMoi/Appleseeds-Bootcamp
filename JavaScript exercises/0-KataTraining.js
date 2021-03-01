alphabet = 'abcd';

console.log(alphabet.charCodeAt(0) - 96) ///// - 96
console.log(alphabet.charCodeAt(1))
console.log(alphabet.charCodeAt(2))

function alphabetPosition(text) {
    let answer = [];
    for (let i = 0; i < text.length; i++){
        /[a-zA-Z]+/g.test(text[i]) && answer.push(text.toLowerCase().charCodeAt(i) - 96);
    }
    return answer.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));