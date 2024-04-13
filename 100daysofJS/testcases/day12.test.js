const removeDuplicates = require('../day12');

describe('removeDuplicates function', () => {
  test('returns an array with unique elements for an array with duplicates', () => {
    expect(removeDuplicates([1, 2, 3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  test('returns an array with unique elements for an array with consecutive duplicates', () => {
    expect(removeDuplicates([5, 6, 7, 7, 8, 8, 9])).toEqual([5, 6, 7, 8, 9]);
  });

  test('returns the same array for an array with no duplicates', () => {
    expect(removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('returns an empty array for an empty input array', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test('returns the same array for an array with all unique elements', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('returns an array with unique elements for an array with negative numbers', () => {
    expect(removeDuplicates([1, -2, 3, -2, 1, 4])).toEqual([1, -2, 3, 4]);
  });

  test('returns an array with unique elements for a large array', () => {
    const inputArray = Array.from({ length: 1000 }, (_, index) => index % 10);
    expect(removeDuplicates(inputArray)).toEqual(Array.from({ length: 10 }, (_, index) => index));
  });
});
