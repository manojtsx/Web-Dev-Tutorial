const calculateAverage = require('../day9');

describe('calculateAverage function', () => {
  test('returns the average of numbers in the array', () => {
    expect(calculateAverage([5, 10, 2, 8])).toBe(6.25);
  });

  test('returns 0 for an empty array', () => {
    expect(calculateAverage([])).toBe(0);
  });

  test('returns the same number for an array with a single element', () => {
    expect(calculateAverage([5])).toBe(5);
  });

  test('returns the average of negative numbers in the array', () => {
    expect(calculateAverage([-5, -10, -2, -8])).toBe(-6.25);
  });

  test('returns the average of decimal numbers in the array', () => {
    expect(calculateAverage([5.5, 10.5, 2.5, 8.5])).toBe(6.75);
  });

  test('returns NaN for an array with non-numeric elements', () => {
    expect(calculateAverage(['a', 'b', 'c'])).toBe(NaN);
  });

  test('returns NaN for an array with a non-numeric element', () => {
    expect(calculateAverage([5, 10, 'a', 8])).toBe(NaN);
  });

  test('returns the average of a large array of numbers', () => {
    const inputArray = Array.from({ length: 1000 }, (_, index) => index + 1);
    const expectedAverage = (1000 * 1001) / 2000; // Sum of first 1000 natural numbers divided by 1000
    expect(calculateAverage(inputArray)).toBe(expectedAverage);
  });
});
