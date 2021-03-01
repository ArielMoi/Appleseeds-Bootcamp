function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
    console.log(`i choose you, ${this.name}`)
}

Pokemon.prototype.attack = function () {
    console.log(`${this.name} used ${this.attackList}`)
}

let pokemonA = new Pokemon('ariel', 'ninja', 'knife');
let pokemonB = new Pokemon('b', 'pickachu', 'lightning');
let pokemonC = new Pokemon('c', 'fire', 'fireballs');

pokemonA.callPokemon();
pokemonB.attack();
pokemonB.callPokemon();
pokemonC.attack();