const findMedian = require('../day22');

describe('findMedian function', () => {
  test('calculates median for odd number of elements', () => {
    expect(findMedian([3, 3, 5, 9, 15])).toBe(5);
    expect(findMedian([1, 2, 3, 4, 5])).toBe(3);
    expect(findMedian([10, 20, 30, 40, 50, 60, 70, 80, 90])).toBe(50);
  });

  test('calculates median for even number of elements', () => {
    expect(findMedian([3, 5, 7, 9])).toBe(6);
    expect(findMedian([2, 4, 6, 8])).toBe(5);
    expect(findMedian([11, 12, 13, 14, 15, 16])).toBe(13.5);
  });

  test('calculates median for single element array', () => {
    expect(findMedian([5])).toBe(5);
    expect(findMedian([10])).toBe(10);
    expect(findMedian([0])).toBe(0);
  });

  test('calculates median for negative numbers', () => {
    expect(findMedian([-5, -3, -1, 1, 3])).toBe(-1);
    expect(findMedian([-10, -5, 0, 5, 10])).toBe(0);
    expect(findMedian([-15, -10, -5, 0, 5, 10, 15])).toBe(0);
  });

  test('calculates median for unsorted arrays', () => {
    expect(findMedian([5, 3, 15, 9, 3])).toBe(5);
    expect(findMedian([4, 8, 2, 6])).toBe(5);
    expect(findMedian([20, 10, 30, 40, 5])).toBe(20);
  });

  test('returns null for empty array', () => {
    expect(findMedian([])).toBeNull();
  });
});
