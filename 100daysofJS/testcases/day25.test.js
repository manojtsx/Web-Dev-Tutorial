const factorial = require('../day25');

// Test cases
test('Factorial of 5', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial of 0', () => {
  expect(factorial(0)).toBe(1);
});

test('Factorial of 1', () => {
  expect(factorial(1)).toBe(1);
});

test('Factorial of 10', () => {
  expect(factorial(10)).toBe(3628800);
});

test('Factorial of 3', () => {
  expect(factorial(3)).toBe(6);
});

test('Factorial of 7', () => {
  expect(factorial(7)).toBe(5040);
});

test('Factorial of 9', () => {
  expect(factorial(9)).toBe(362880);
});

test('Factorial of 12', () => {
  expect(factorial(12)).toBe(479001600);
});

test('Factorial of 15', () => {
  expect(factorial(15)).toBe(1307674368000);
});
