const findMode = require('../day24');

describe('findMode function', () => {
  test('finds the mode of an array with a single mode', () => {
    expect(findMode([1, 2, 2, 3, 4, 4, 4, 5])).toBe(4);
    expect(findMode([5, 5, 5, 5, 5, 5, 5, 5])).toBe(5);
    expect(findMode([10, 20, 30, 40, 40, 40, 50, 60])).toBe(40);
  });

  test('finds the mode of an array with multiple modes', () => {
    expect(findMode([1, 2, 2, 3, 3, 4, 4, 5])).toBe(2);
    expect(findMode([5, 5, 5, 5, 10, 10, 10, 10])).toBe(5);
    expect(findMode([10, 10, 20, 20, 30, 30, 40, 40, 50])).toBe(10);
  });

  test('finds the mode of an array with negative numbers', () => {
    expect(findMode([-1, -1, -2, -2, -2, -3])).toBe(-2);
    expect(findMode([-5, -5, -5, -5, -10])).toBe(-5);
    expect(findMode([-5, -5, -10, -10, -10, -20, -20])).toBe(-10);
  });

  test('finds the mode of an array with mixed positive and negative numbers', () => {
    expect(findMode([-5, -5, -5, 0, 0, 0, 5, 5, 5])).toBe(-5);
    expect(findMode([-10, -5, 0, 0, 5, 5, 10, 10])).toBe(0);
    expect(findMode([-10, -10, 0, 0, 5, 5, 10, 10])).toBe(-10);
  });

  test('finds the mode of an array with repeating modes', () => {
    expect(findMode([1, 1, 2, 2, 3, 3, 4, 4])).toBe(1);
    expect(findMode([5, 5, 5, 10, 10, 10, 20, 20])).toBe(5);
    expect(findMode([10, 10, 20, 20, 30, 30, 40, 40])).toBe(10);
  });

  test('finds the mode of an array with a single element', () => {
    expect(findMode([7])).toBe(7);
    expect(findMode([-3])).toBe(-3);
    expect(findMode([0])).toBe(0);
  });
});
