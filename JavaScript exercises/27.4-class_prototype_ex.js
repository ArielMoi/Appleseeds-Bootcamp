/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h.
​
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
​
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
​
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
​
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/


function car(make, speed){
    this.make = make;
    this.speed = speed;
    this.accelerate = function (){
        this.speed += 10;
        console.log(`speed now is ${this.speed}`);
    };
    this.brake = function (){
        this.speed -= 5;
        console.log(`now speed is ${this.speed}`)
    }
}

let bmw = new car('bmw', 120);
let mer = new car('mercedes', 95);

bmw.accelerate()
bmw.brake();
console.log(bmw.make + bmw.speed)
mer.accelerate()
mer.brake();
console.log(mer.make + mer.speed)