// Ex 8 - Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.
// Examples
// f ➞ 26
// indPerimeter(6, 7)
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
// Notes
// ● Don't forget to return the result.
// ● If you're stuck, find help in the Resources tab.
// ● If you're really stuck, find solutions in the Solutions tab.


function findPerimeter(a, b){
    return (a * 2) + (b * 2)
}

console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

module.exports = findPerimeter;