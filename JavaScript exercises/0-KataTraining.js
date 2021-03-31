// alphabet = 'abcd';

// console.log(alphabet.charCodeAt(0) - 96) ///// - 96
// console.log(alphabet.charCodeAt(1))
// console.log(alphabet.charCodeAt(2))

// function alphabetPosition(text) {
//     let answer = [];
//     for (let i = 0; i < text.length; i++){
//         /[a-zA-Z]+/g.test(text[i]) && answer.push(text.toLowerCase().charCodeAt(i) - 96);
//     }
//     return answer.join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// function add(num1){
//     return (num2) => {
//         return num1 + num2    };
// }

// console.log(add(2)(3));

// function howManyTimeAWord(str){
//     myObj = {};
//     str.toLowerCase().split(/ |,|;/g).forEach(e => {
//         myObj[e]
//           ? myObj[e]++
//           : (myObj[e] = 1);
//     });

//     return myObj;
// }

// console.log(howManyTimeAWord('hi,my my name;is is ariel a a be b'));

// מערך ממויין בסדר עולה במספר N
// האם יש שני מספרים במערך שהסכום שלהם שווה N
// one match or none

function isSumOfLength(array, n){
    for(let e of array){
        for (let t of array){
            if (t + e == n){
                return [array.indexOf(e), array.indexOf(t)];
            }
        }
    }
    return -1;
}

console.log(isSumOfLength([1, 2, 3, 4], 7));