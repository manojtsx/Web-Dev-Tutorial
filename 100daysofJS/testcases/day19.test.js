const startsWith = require('../day19');

describe('startsWith function', () => {
  test('returns true if the string starts with the specified substring', () => {
    expect(startsWith("Hello world", "Hello")).toBe(true);
    expect(startsWith("Hello world", "world")).toBe(false);
    expect(startsWith("The quick brown fox", "The")).toBe(true);
    expect(startsWith("The quick brown fox", "The quick")).toBe(true);
  });

  test('returns true if the string and substring are empty', () => {
    expect(startsWith("", "")).toBe(true);
  });

  test('returns false if the substring is longer than the string', () => {
    expect(startsWith("Hello", "Hello World")).toBe(false);
  });

  test('returns false if the substring does not match the beginning of the string', () => {
    expect(startsWith("Hello world", "hello")).toBe(false);
    expect(startsWith("Hello world", "World")).toBe(false);
  });
});
