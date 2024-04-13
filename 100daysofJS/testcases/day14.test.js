const isPowerOfTwo = require('../day14');

describe('isPowerOfTwo function', () => {
  test('returns true for a power of two', () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(4)).toBe(true);
    expect(isPowerOfTwo(8)).toBe(true);
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(32)).toBe(true);
    expect(isPowerOfTwo(64)).toBe(true);
    expect(isPowerOfTwo(128)).toBe(true);
    expect(isPowerOfTwo(256)).toBe(true);
  });

  test('returns false for a number that is not a power of two', () => {
    expect(isPowerOfTwo(3)).toBe(false);
    expect(isPowerOfTwo(5)).toBe(false);
    expect(isPowerOfTwo(7)).toBe(false);
    expect(isPowerOfTwo(9)).toBe(false);
    expect(isPowerOfTwo(10)).toBe(false);
    expect(isPowerOfTwo(15)).toBe(false);
    expect(isPowerOfTwo(17)).toBe(false);
    expect(isPowerOfTwo(100)).toBe(false);
    expect(isPowerOfTwo(123)).toBe(false);
  });

  test('returns false for zero', () => {
    expect(isPowerOfTwo(0)).toBe(false);
  });

  test('returns false for negative numbers', () => {
    expect(isPowerOfTwo(-1)).toBe(false);
    expect(isPowerOfTwo(-2)).toBe(false);
    expect(isPowerOfTwo(-4)).toBe(false);
    expect(isPowerOfTwo(-8)).toBe(false);
    expect(isPowerOfTwo(-16)).toBe(false);
  });
});
