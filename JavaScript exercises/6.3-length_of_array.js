var finalArray = [];

function lenWords(array){
    for (i of array){
        console.log(i);
        finalArray.push(i.length);
    }
}

lenWords(['gfg', 'rehiojero', 'rj']);

console.log(finalArray);