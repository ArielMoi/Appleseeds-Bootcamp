// 1.

function doubleValues(array) {
    return array.map(el => `${el}${el}`)
}

console.log(doubleValues(['a', 'c']))

// 2.
function onlyEvenValues(array){
    // let newearray = array.map(el => (el % 2 == 0) ? el);
    return array.map(el => (el % 2 == 0) && el);
}

console.log(onlyEvenValues([1,2,3,4]));

// 3. 


function showFirstAndLast(array){
    var newarr = [];
    array.forEach(function(el, i, arr){

        if(i == 0 || i == arr.length - 1){
            if (typeof(el) == 'string') {newarr.push(el);}
            
        }
    }) 
    return newarr;
}

console.log(showFirstAndLast(['1',2,3,4]))

// 4.

function vowelCount (str){
    // var arr1 = str.split('').map(el => console.log(el))
    var obj = {
        e: 0,
        i: 0,
        a: 0,
        y: 0,
        o: 0
    };
    var arr1 = str.split('').map(function (el){
        if (el == 'i') { obj.i = obj.i + 1}
        else if (el == 'e') {obj.e = obj.e + 1 }
        else if (el == 'y') {obj.y = obj.y + 1 }
        else if (el == 'a') {obj.a = obj.a + 1 }
        else if (el == 'o') {obj.o = obj.o + 1 }
    }) 
    console.log(obj)
}

vowelCount('ariel');

// 5. 
function capitalize(str){
    return str.toUpperCase();
}

console.log(capitalize('ariel'))

// 6.
const abc = ['a', ]

function shiftLetters(str){
    return str.split('').map((el, i) => el.charCodeAt(0) - 1);
}


console.log(shiftLetters('ariel'))

// 7.

function swapCase(str){
    var swapped = [];
    str.split(' ').map(function (el, i){
        if (i % 2 == 0) {swapped.push(el.toUpperCase())}
        else {swapped.push(el)}
        }
    )
    return swapped.join(' ');
}

console.log(swapCase('ariel is me and me is ariel'));