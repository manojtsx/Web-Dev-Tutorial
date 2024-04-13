const findMax = require('../day7');

test('returns the maximum number in an array with positive numbers', () => {
  expect(findMax([1, 5, 3, 9, 2])).toBe(9);
});

test('returns the maximum number in an array with negative numbers', () => {
  expect(findMax([-10, -5, -3, -9, -2])).toBe(-2);
});

test('returns the maximum number in an array with a single element', () => {
  expect(findMax([5])).toBe(5);
});

test('returns the maximum number in an array with positive and negative numbers', () => {
  expect(findMax([1, -5, 3, -9, 2])).toBe(3);
});

test('returns the maximum number in an array with only negative numbers', () => {
  expect(findMax([-1, -5, -3, -9, -2])).toBe(-1);
});

test('returns the maximum number in an array with decimals', () => {
  expect(findMax([1.5, 5.2, 3.7, 9.1, 2.3])).toBe(9.1);
});

test('returns the maximum number in an array with mixed types', () => {
  expect(findMax([1, '5', 3, '9', 2])).toBe(9);
});
