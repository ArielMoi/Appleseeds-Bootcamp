function switchValues(object){
    let newObject = {};
    for (i in object){
        // console.log(object[i]);
        newObject[object[i]] = i;
    } return newObject;
}

var z = {
    's':5,
    'd':6,
    'g':8,
}

console.log(switchValues(z));