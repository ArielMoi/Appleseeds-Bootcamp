class Car {
    constructor(brand, speed){
        this._brand = brand;
        this._speed = speed;
    }

    get brand(){
        return this._brand;
    }

    get speed(){
        return this._speed;
    }

    print(){
        console.log(`this car is ${this.brand}, and her speed ${this.speed}`)
    }

    setSpeed(speed){
        this._speed = speed;
    }

}

let toyota = new Car('toyota', 180);
let tesla = new Car('tesla', 120);
let niro = new Car('niro', 90);
let mercedes = new Car('mercedes', 150);

function getFastestCar(cars){
    let myArr =[];
    for (let car of cars){
        console.log(car.speed)
        myArr.push(car.speed);
    }
    return myArr.sort((a, b) => a - b )
}

console.log(getFastestCar([toyota, tesla, niro, mercedes]));

console.log(toyota.brand);
toyota.print();
niro.print();
tesla.print();
niro.setSpeed(100);
tesla.setSpeed(100);
toyota.print();
tesla.print();
niro.print();