const calculateDaysBetweenDates = require('../day38');

test('calculates days between two dates correctly', () => {
  expect(calculateDaysBetweenDates("2024-01-01", "2024-01-30")).toBe(29);
});

test('calculates days between two dates correctly with different months', () => {
  expect(calculateDaysBetweenDates("2024-02-01", "2024-03-01")).toBe(29);
});

test('calculates days between two dates correctly with different years', () => {
  expect(calculateDaysBetweenDates("2023-12-31", "2024-01-01")).toBe(1);
});

test('calculates days between two dates correctly with same dates', () => {
  expect(calculateDaysBetweenDates("2024-01-01", "2024-01-01")).toBe(0);
});

test('calculates days between two dates correctly with negative days', () => {
  expect(calculateDaysBetweenDates("2024-01-30", "2024-01-01")).toBe(-29);
});
