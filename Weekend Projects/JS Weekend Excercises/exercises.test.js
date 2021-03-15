const findPerimeter = require('./8');

test('should return a *2 + b *2', () => {
  expect(findPerimeter(2, 3)).toEqual(10);
})


const [filter, forEach, map] = require('./7');

function isZogy(num){
  return num % 2 == 0;
}

test('filter implement', () => {
  expect(filter([12,23, 45],isZogy)).toEqual([ 12 ])
})

test("map implement", () => {
  expect(map([1,2,3], (a) => a * 2)).toEqual([2,4,6])
});

const isogram = require("./6-4");

test('check if hae no repeating letters', () => {
  expect(isogram('aba')).toEqual(false);
})

const longest = require('./6-3');

test("creat longest word containing distinct letters", () => {
  expect(longest("a", "aba")).toBe("ab");
});
