// function declaration
function percentageOfWorld1(counrtyPopulation) {
    return counrtyPopulation / 7900 * 100;
}

var precentageOfChina = percentageOfWorld1(1441);
var precentageOfUS = percentageOfWorld1(328);
var precentageOfUK = percentageOfWorld1(66);

console.log(`china precentage is ${precentageOfChina}%.
US precentage is ${precentageOfUS}%
UK precentage is ${precentageOfUK}%`)

// function expression
var percentageOfWorld2 = (counrtyPopulation) => counrtyPopulation / 7900 * 100;

console.log(`china precentage is ${percentageOfWorld2(1441)}%.
US precentage is ${percentageOfWorld2(328)}%
UK precentage is ${percentageOfWorld2(66)}%`)