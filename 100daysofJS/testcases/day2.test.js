const generateHash = require('../day2');

describe('generateHash function', () => {
  test('generates hash tag from a given string', () => {
    expect(generateHash("Hello this is manoj")).toBe('#HelloThisIsManoj');
  });

  test('returns false for empty string', () => {
    expect(generateHash("")).toBe(false);
  });

  test('returns false for string with only whitespace', () => {
    expect(generateHash("   ")).toBe(false);
  });

  test('returns false for string longer than 280 characters', () => {
    const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    expect(generateHash(longString)).toBe(false);
  });

  test('generates hash tag with only one word', () => {
    expect(generateHash("hello")).toBe('#Hello');
  });

  test('generates hash tag with special characters', () => {
    expect(generateHash("hello $%# world!")).toBe('#Hello$%#World!');
  });
});
