const repeatString = require('../day27');

test('Repeat a string multiple times', () => {
  expect(repeatString("abc", 5)).toBe("abcabcabcabcabc");
});

test('Repeat a string multiple times', () => {
  expect(repeatString("123", 3)).toBe("123123123");
});

test('Repeat a string once', () => {
  expect(repeatString("xyz", 1)).toBe("xyz");
});

test('Repeat an empty string', () => {
  expect(repeatString("", 5)).toBe("");
});

test('Repeat a string zero times', () => {
  expect(repeatString("test", 0)).toBe("");
});
