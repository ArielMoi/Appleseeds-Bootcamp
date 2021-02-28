// Instructions
// Your Task: Edit the storm object. Invoke the printSuperPower function using
// the storm object as the context of the function.
// So your output should be: my super power is flying.
// Well, Storm also controls the weather, so, whatever you choose!
// You cannot change the printSuperPower function
// Submit the file to Hive.
// const storm = {
//  // add code here
// }
// function printSuperPower() {
//  console.log("my superpower is " + this.superPower);
// }

const storm = {
    // add code here
    superPower: 'flying',
    stormfunc: null,
}

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.stormfunc = printSuperPower;
storm.stormfunc();