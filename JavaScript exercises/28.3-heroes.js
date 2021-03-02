// The following exercise contains the following subjects:
//  bind, call, apply
// Instructions
// We have an array of super heroes objects:
// and a print name function:
// We want to print the all heroes names. Implement the
// printHeroes function: Note: you cannot change the super
// heroes objects

const wonderWoman = {
 name: "Diana Prince"
}
const batman = {
 name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
 console.log(`my name is ${this.name}`);
}
function printHeroes(heroes, printFunc) {
 //add your code here
  for (let h of heroes){
      printFunc.call(h);
  }
}

printHeroes(superHeroes, printName);
