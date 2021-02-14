var myObject = {};

console.time('object')

for (let i = 0; i != 1000000; i++){
    myObject.i = i;
}

console.timeEnd('object')

var myMap = new Map();

console.time('map');

for (let i = 0; i != 1000000; i++){
    myMap.set(i, i);
}

console.timeEnd('map');
