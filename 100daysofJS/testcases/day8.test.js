const {factorial,withoutRecursion} = require('../day8');

describe('factorial function', () => {
  test('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('returns 1 for factorial of 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('returns 2 for factorial of 2', () => {
    expect(factorial(2)).toBe(2);
  });

  test('returns 6 for factorial of 3', () => {
    expect(factorial(3)).toBe(6);
  });

  test('returns 24 for factorial of 4', () => {
    expect(factorial(4)).toBe(24);
  });

  test('returns 120 for factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  test('returns "Cannot find factorial" for negative input', () => {
    expect(factorial(-1)).toBe("Cannot find factorial");
  });
});

describe('withoutRecursion function', () => {
  test('returns 1 for factorial of 0', () => {
    expect(withoutRecursion(0)).toBe(1);
  });

  test('returns 1 for factorial of 1', () => {
    expect(withoutRecursion(1)).toBe(1);
  });

  test('returns 2 for factorial of 2', () => {
    expect(withoutRecursion(2)).toBe(2);
  });

  test('returns 6 for factorial of 3', () => {
    expect(withoutRecursion(3)).toBe(6);
  });

  test('returns 24 for factorial of 4', () => {
    expect(withoutRecursion(4)).toBe(24);
  });

  test('returns 120 for factorial of 5', () => {
    expect(withoutRecursion(5)).toBe(120);
  });

  test('returns "Cannot find factorial" for negative input', () => {
    expect(withoutRecursion(-1)).toBe("Cannot find factorial");
  });
});

