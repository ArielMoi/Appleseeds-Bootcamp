function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

let a = describeCountry('finland', ' 6 milion', 'some capital');
let b = describeCountry('dddfs', ' 8 milion', 'some capital');
let c = describeCountry('wefwefwef', ' 12 milion', 'some capital');

console.log(a + b + c)