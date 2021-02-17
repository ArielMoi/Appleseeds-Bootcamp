var populationValues = [5, 411, 100, 66];

var percentageOfWorld = (counrtyPopulation) => counrtyPopulation / 7900 * 100;

// function populationPercentages(array){
//     let percentages = [];
//     for (i of array){
//         percentages.push(parseFloat(percentageOfWorld(i).toFixed(2)) + '%');
//     }
//     return percentages;
// }

// console.log(populationPercentages(populationValues));

let i = 0;
while(i < populationValues.length){
    console.log(percentageOfWorld(populationValues[i]))
    i++;
}