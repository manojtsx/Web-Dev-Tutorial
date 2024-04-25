const numberRangeRecursion = require('../day30');

test('Generate number range from 0 to 5', () => {
  expect(numberRangeRecursion(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
});

test('Generate number range from -3 to 3', () => {
  expect(numberRangeRecursion(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
});

test('Generate number range from 1 to 10', () => {
  expect(numberRangeRecursion(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('Generate number range from -5 to -1', () => {
  expect(numberRangeRecursion(-5, -1)).toEqual([-5, -4, -3, -2, -1]);
});

test('Generate number range from 3 to 3', () => {
  expect(numberRangeRecursion(3, 3)).toEqual([3]);
});

 
