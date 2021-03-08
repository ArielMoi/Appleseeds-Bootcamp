class Animal {
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
    getName(){
        return this.name;
    }
    getSound(){
        return this.sound;
    }
}

let lion = new Animal('lion', 'roar!');

console.log(lion.getName())
console.log(lion.getSound())

lion.getSound();