const findMin = require('../day16');

describe('findMin function', () => {
  test('returns the minimum value for an array of positive integers', () => {
    expect(findMin([5, 10, 2, 8])).toBe(2);
  });

  test('returns the minimum value for an array with negative integers', () => {
    expect(findMin([5, -3, 0, 12, -7])).toBe(-7);
  });

  test('returns undefined for an empty array', () => {
    expect(findMin([])).toBeUndefined();
  });

  test('returns the minimum value for an array with a single element', () => {
    expect(findMin([5])).toBe(5);
  });

  test('returns the minimum value for an array with duplicate values', () => {
    expect(findMin([5, 2, 2, 8, 2])).toBe(2);
  });

  test('returns the minimum value for a large array', () => {
    const inputArray = Array.from({ length: 1000 }, (_, index) => index - 500);
    expect(findMin(inputArray)).toBe(-500);
  });
});
