
// 1.
function isString(myVar, callback){
    if (typeof(myVar) === 'string'){
        callback(myVar)
    }
}

isString('km', console.log);
isString(080, console.log);
    
// 2.
var func = function (string) {
  let i = string.split(' ')[0].toUpperCase() + string.slice(1);
  return i.split(' ').join('-');
}

function firstWordUpperCase(string, func){
    return func(string);
}

console.log(firstWordUpperCase('hi im ariel', func));


// 4.
function ariel(o, d){
    d(o);
}

function oo(a){
    console.log(a);
}

ariel('aaa gg', oo);