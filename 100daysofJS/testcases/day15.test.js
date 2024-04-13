const sumOfSquares = require('../day15');

describe('sumOfSquares function', () => {
  test('returns the sum of squares for an array of positive integers', () => {
    expect(sumOfSquares([1, 2, 3])).toBe(14);
  });

  test('returns the sum of squares for an array with a single element', () => {
    expect(sumOfSquares([5])).toBe(25);
  });

  test('returns 0 for an empty array', () => {
    expect(sumOfSquares([])).toBe(0);
  });

  test('returns the sum of squares for an array with negative integers', () => {
    expect(sumOfSquares([-1, -2, -3])).toBe(14);
  });

  test('returns the sum of squares for an array with mixed positive and negative integers', () => {
    expect(sumOfSquares([-1, 2, -3])).toBe(14);
  });

  test('returns the sum of squares for a large array', () => {
    const inputArray = Array.from({ length: 1000 }, (_, index) => index + 1);
    const expectedSum = (1000 * 1001 * 2001) / 6; // Sum of squares of first 1000 natural numbers
    expect(sumOfSquares(inputArray)).toBe(expectedSum);
  });
});
