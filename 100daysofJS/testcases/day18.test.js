const isUpperCase = require('../day18');

describe('isUpperCase function', () => {
  test('returns true for uppercase characters', () => {
    expect(isUpperCase('A')).toBe(true);
    expect(isUpperCase('Z')).toBe(true);
  });

  test('returns false for lowercase characters', () => {
    expect(isUpperCase('a')).toBe(false);
    expect(isUpperCase('z')).toBe(false);
  });

  test('returns false for non-alphabetical characters', () => {
    expect(isUpperCase('1')).toBe(false);
    expect(isUpperCase('@')).toBe(false);
    expect(isUpperCase(' ')).toBe(false);
    expect(isUpperCase('%')).toBe(false);
  });
});
