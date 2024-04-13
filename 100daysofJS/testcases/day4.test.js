const checkTriangleType = require('../day4');

test('returns "equilateral" for all sides of equal length', () => {
  expect(checkTriangleType(3, 3, 3)).toBe("equilateral");
});

test('returns "isosceles" for two sides of equal length', () => {
  expect(checkTriangleType(3, 4, 3)).toBe("isosceles");
});

test('returns "scalene" for all sides of different lengths', () => {
  expect(checkTriangleType(5, 8, 6)).toBe("scalene");
});

test('returns "isosceles" for two sides of equal length with different order', () => {
  expect(checkTriangleType(4, 3, 3)).toBe("isosceles");
});

test('returns "equilateral" for all sides of equal length with different order', () => {
  expect(checkTriangleType(2, 2, 2)).toBe("equilateral");
});

test('returns "scalene" for all sides of different lengths with different order', () => {
  expect(checkTriangleType(8, 5, 6)).toBe("scalene");
});

test('returns "scalene" for sides of length 1, 2, and 3', () => {
  expect(checkTriangleType(1, 2, 3)).toBe("scalene");
});

test('returns "isosceles" for sides of length 3, 1, and 3', () => {
  expect(checkTriangleType(3, 1, 3)).toBe("isosceles");
});

test('returns "scalene" for sides of length 3, 2, and 4', () => {
  expect(checkTriangleType(3, 2, 4)).toBe("scalene");
});

test('returns "isosceles" for sides of length 2, 3, and 3', () => {
  expect(checkTriangleType(2, 3, 3)).toBe("isosceles");
});
