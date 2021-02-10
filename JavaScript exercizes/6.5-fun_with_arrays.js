// 1.
var randomArray = Array(100);
randomArray.fill(1, 0);
// 2.
console.log(Array.from({length:100}, function(item, index){
    return index;
}));

// 3.
var myObject = {
    'a':1,
    'b':2,
    'c':3
};

var objectArray = Object.values(myObject);

console.log(objectArray);

// 4. 
var s = {};
randomArray = [1, 2, 3, 4, 5,65];
for (i of randomArray) {
    console.log(i)
    s[randomArray.indexOf(i)] = i;
}
console.log(s);

// 5.
console.log(Array.isArray(randomArray));

// 6. dont effect - 
var someArray = [...randomArray];
console.log(randomArray);
randomArray.pop()
console.log(someArray);

// do effect -
var anotherArray = randomArray;
randomArray.pop()
console.log(anotherArray);