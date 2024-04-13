const arraysAreEqual = require('../day10');

describe('arraysAreEqual function', () => {
  test('returns true for equal arrays', () => {
    expect(arraysAreEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('returns false for arrays with different lengths', () => {
    expect(arraysAreEqual([1, 2, 3], [1, 2])).toBe(false);
  });

  test('returns false for arrays with different elements', () => {
    expect(arraysAreEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  test('returns true for empty arrays', () => {
    expect(arraysAreEqual([], [])).toBe(true);
  });

  test('returns true for arrays with equal elements but different order', () => {
    expect(arraysAreEqual([1, 2, 3], [3, 1, 2])).toBe(false);
  });

  test('returns true for arrays with equal elements and same order', () => {
    expect(arraysAreEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('returns false for arrays with equal elements but different types', () => {
    expect(arraysAreEqual([1, 2, 3], ['1', '2', '3'])).toBe(false);
  });

  test('returns true for arrays with equal elements and same order (large arrays)', () => {
    const inputArray = Array.from({ length: 1000 }, (_, index) => index + 1);
    expect(arraysAreEqual(inputArray, inputArray)).toBe(true);
  });
});
