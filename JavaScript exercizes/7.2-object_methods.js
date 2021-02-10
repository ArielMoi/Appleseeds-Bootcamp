const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: 8,
    neighbours: ['Jorden', 'Egypt', 'Lebanon'],
    decribe: function () {
        console.log(`${this.country} has ${this.population} mil people, their mother tongue is ${this.language}, theu have ${this.neighbours.length + 1} neighbouring countries and a capital called ${this.capital}`)
    },
    checkIsland: function (){
        if (this.neighbours.length >= 1){
            myCountry.isIsland = false;
        } else {myCountry.isIsland = true}
    }
}

myCountry.decribe();
myCountry.checkIsland();
console.log(myCountry.isIsland);