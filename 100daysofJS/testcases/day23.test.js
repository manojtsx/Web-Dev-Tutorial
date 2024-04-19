const countOccurrences = require('../day23');

describe('countOccurrences function', () => {
  test('counts occurrences of each element in the array', () => {
    const numbers = [1, 2, 2, 3, 1, 4, 2];
    const expectedCounts = { '1': 2, '2': 3, '3': 1, '4': 1 };
    expect(countOccurrences(numbers)).toEqual(expectedCounts);
  });

  test('counts occurrences of elements in a different array', () => {
    const numbers = [5, 10, 15, 5, 20, 10, 5];
    const expectedCounts = { '5': 3, '10': 2, '15': 1, '20': 1 };
    expect(countOccurrences(numbers)).toEqual(expectedCounts);
  });

  test('counts occurrences of single element in the array', () => {
    const numbers = [7];
    const expectedCounts = { '7': 1 };
    expect(countOccurrences(numbers)).toEqual(expectedCounts);
  });

  test('counts occurrences of elements with different values', () => {
    const numbers = [2, 4, 6, 8];
    const expectedCounts = { '2': 1, '4': 1, '6': 1, '8': 1 };
    expect(countOccurrences(numbers)).toEqual(expectedCounts);
  });

  test('counts occurrences of large numbers in the array', () => {
    const numbers = [1000, 2000, 1000, 5000, 2000, 1000];
    const expectedCounts = { '1000': 3, '2000': 2, '5000': 1 };
    expect(countOccurrences(numbers)).toEqual(expectedCounts);
  });
});
