const people = ["Greg", "Mary", "Devon", "James"];

// 1.
for (i of people){
    // console.log(i);
}

// 2. 
people.shift();
console.log(people);

// 3.
people.pop();
console.log(people);

// 4.
people.unshift('Matt');
console.log(people);

// 5.
people.push('ariel')
console.log(people);

// 6.
for (i of people){
    if (i == 'Mary') {
        console.log(i)
        break
    } console.log(i);
}

// 7. 
let peopleCopy = people.slice(people.indexOf('Mary') + 1);
console.log(peopleCopy);

// 8.
console.log(people.indexOf('Mary'));
// 9.
console.log(people.indexOf('Foo'));

// 10.
console.log(people);
people.splice(2, 1, 'Elizabeth', 'Anton')
console.log(people);

// 11.
var withBob = [...people, 'Bob']
console.log(withBob);