const sumOfDigits = require('../day11');

describe('sumOfDigits function', () => {
  test('returns the sum of digits for a four-digit number', () => {
    expect(sumOfDigits(1234)).toBe(10);
  });

  test('returns the sum of digits for a six-digit number', () => {
    expect(sumOfDigits(123456)).toBe(21);
  });

  test('returns the sum of digits for a single-digit number', () => {
    expect(sumOfDigits(9)).toBe(9);
  });

  test('returns the sum of digits for a two-digit number', () => {
    expect(sumOfDigits(45)).toBe(9);
  });

  test('returns the sum of digits for a large number', () => {
    expect(sumOfDigits(987654321)).toBe(45);
  });
});
