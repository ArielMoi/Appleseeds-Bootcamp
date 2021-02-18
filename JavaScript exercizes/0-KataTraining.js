// function incrementString (strng) {
//     // return incrementedString
//     if (isNaN(strng.slice(strng.length-1))){
//         return `${strng}1`
//     } else {
//         let num = [];
//         let numWithZero = [];
//         for (letter of strng){
//             !isNaN(letter) && letter != 0 && num.push(letter)
//             !isNaN(letter) && numWithZero.push(letter)
//         }
//         if (num.length == 0){
//             return `${strng.slice(0, strng.length - 1)}1`
//         }

//         let index = strng.indexOf(num[0]);
//         num = parseInt(num.join(''))+ 1;

//         console.log(String(num).length)
//         console.log(numWithZero.length)

//         if (num.length < numWithZero.length){
//             console.log(num + numWithZero)
//         }
//         return strng.slice(0, index) + parseInt(num);
//     }
// }


function incrementString(strng) {
    if (isNaN(strng.slice(strng.length - 1))) {
        return `${strng}1`
    } else {
        let num = [];
        for (letter of strng) {
            !isNaN(letter) && letter != 0 && num.push(letter)
        }
        if (num.length == 0) {
            return `${strng.slice(0, strng.length - 1)}1`
        }

        let index = strng.indexOf(num[0]);
        num = parseInt(num.join('')) + 1;

        let strng1 = strng.slice(0, index) + parseInt(num);
        if (strng1.length > strng.length) {
            if (strng.slice(0, index).includes('0')) {
                return strng.slice(0, index - 1) + parseInt(num)
            }
        }
        return strng.slice(0, index) + parseInt(num);
    }
}


console.log(incrementString('foobar99'))