const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

function compare(arr1, arr2){
    var finel = [];
    for(el of arr1){
        for(el2 of arr2){
            el == el2 && finel.push(el)
        }
    }
    return finel;
}

console.log(compare(food, food1))