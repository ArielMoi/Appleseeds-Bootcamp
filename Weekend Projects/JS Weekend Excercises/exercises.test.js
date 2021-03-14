const findPerimeter = require('./8');

test('should return a *2 + b *2', () => {
  expect(findPerimeter(2, 3)).toEqual(10);
})


const [filter, forEach, map] = require('./7');

function isZogy(num){
  return num % 2 == 0;
}

test('filter implement', () => {
  console.log(filter([12,23, 45],isZogy))
  expect(filter([12,23, 45],isZogy).toEqual(12))
})