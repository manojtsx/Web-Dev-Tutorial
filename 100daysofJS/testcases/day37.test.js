const calculateSimpleInterest = require('../day37');

test('calculates simple interest correctly', () => {
  expect(calculateSimpleInterest(1000, 5, 3)).toBe(150);
});

test('calculates simple interest correctly with different values', () => {
  expect(calculateSimpleInterest(1500, 7, 5)).toBe(525);
});

test('calculates simple interest correctly with zero principal', () => {
  expect(calculateSimpleInterest(0, 5, 3)).toBe(0);
});

test('calculates simple interest correctly with zero rate', () => {
  expect(calculateSimpleInterest(1000, 0, 3)).toBe(0);
});

test('calculates simple interest correctly with zero time', () => {
  expect(calculateSimpleInterest(1000, 5, 0)).toBe(0);
});

test('calculates simple interest correctly with negative principal', () => {
  expect(calculateSimpleInterest(-1000, 5, 3)).toBe(-150);
});
