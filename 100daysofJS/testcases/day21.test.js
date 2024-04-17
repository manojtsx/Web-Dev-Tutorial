const calculateMean = require('../day21');

describe('calculateMean function', () => {
  test('calculates the mean of positive integers', () => {
    expect(calculateMean([1, 2, 3, 4, 5])).toBe(3);
  });

  test('calculates the mean of positive integers with decimal result', () => {
    expect(calculateMean([10, 20, 30])).toBe(20);
  });

  test('calculates the mean of negative, zero, and positive integers', () => {
    expect(calculateMean([-1, 0, 1])).toBe(0);
  });

  test('returns 0 for an empty array', () => {
    expect(calculateMean([])).toBe(0);
  });

  test('calculates the mean of a single number', () => {
    expect(calculateMean([5])).toBe(5);
  });

  test('calculates the mean of decimal numbers', () => {
    expect(calculateMean([1.5, 2.5, 3.5, 4.5, 5.5])).toBe(3.5);
  });

  test('calculates the mean of large numbers', () => {
    expect(calculateMean([1000000, 2000000, 3000000, 4000000, 5000000])).toBe(3000000);
  });
});
