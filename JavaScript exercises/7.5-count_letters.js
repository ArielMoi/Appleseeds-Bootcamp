const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgers"];

console.log(array.join(''))


var lettersObject = {};

function countLetters(array) {
    for (x of array) {
        for (i of x) {
            i = i;
            if (i != ' ') {
                if (!lettersObject.hasOwnProperty(i.toLowerCase())) {
                    lettersObject[i.toLowerCase()] = 1;
                } else { lettersObject[i.toLowerCase()]++; }

            }
        }
    }
}

countLetters(array)
console.log(lettersObject);