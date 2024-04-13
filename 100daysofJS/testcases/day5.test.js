const sortAscending = require('../day5');

test('sorts an array of numbers in ascending order', () => {
  expect(sortAscending([5, 3, 10, 8])).toEqual([3, 5, 8, 10]);
});

test('sorts an array with negative numbers in ascending order', () => {
  expect(sortAscending([-5, -3, -10, -8])).toEqual([-10, -8, -5, -3]);
});

test('sorts an array with duplicate numbers in ascending order', () => {
  expect(sortAscending([5, 3, 5, 8, 3])).toEqual([3, 3, 5, 5, 8]);
});

test('sorts an array with decimal numbers in ascending order', () => {
  expect(sortAscending([5.2, 3.1, 10.5, 8.3])).toEqual([3.1, 5.2, 8.3, 10.5]);
});

test('sorts an empty array', () => {
  expect(sortAscending([])).toEqual([]);
});

test('sorts an array with one element', () => {
  expect(sortAscending([5])).toEqual([5]);
});

test('sorts a large array of numbers in ascending order', () => {
  const inputArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
  const sortedArray = [...inputArray].sort((a, b) => a - b);
  expect(sortAscending(inputArray)).toEqual(sortedArray);
});
