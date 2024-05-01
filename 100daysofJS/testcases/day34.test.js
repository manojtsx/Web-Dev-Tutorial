const removeDuplicates = require('../day34');

test('removes duplicate elements from an array', () => {
  expect(removeDuplicates([1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(removeDuplicates(["a", "b", "c", "b", "a"])).toEqual(["a", "b", "c"]);
  expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(removeDuplicates(["x", "y", "z", "x", "y", "z"])).toEqual(["x", "y", "z"]);
});

test('returns an empty array if input array is empty', () => {
  expect(removeDuplicates([])).toEqual([]);
});
