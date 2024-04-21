const fibonacci = require('../day26');

test('Fibonacci of 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('Fibonacci of 1', () => {
  expect(fibonacci(1)).toBe(1);
});

test('Fibonacci of 2', () => {
  expect(fibonacci(2)).toBe(1);
});

test('Fibonacci of 3', () => {
  expect(fibonacci(3)).toBe(2);
});

test('Fibonacci of 4', () => {
  expect(fibonacci(4)).toBe(3);
});

test('Fibonacci of 5', () => {
  expect(fibonacci(5)).toBe(5);
});

test('Fibonacci of 6', () => {
  expect(fibonacci(6)).toBe(8);
});

test('Fibonacci of 7', () => {
  expect(fibonacci(7)).toBe(13);
});

test('Fibonacci of 8', () => {
  expect(fibonacci(8)).toBe(21);
});
