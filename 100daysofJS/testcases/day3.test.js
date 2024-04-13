const countChar = require('../day3');

describe('countChar function', () => {
  test('counts the number of specified character occurrences in a string', () => {
    expect(countChar("Hello", "l")).toBe(2);
  });

  test('counts the number of specified character occurrences in a string with mixed case', () => {
    expect(countChar("Hello World", "o")).toBe(2);
  });

  test('counts the number of specified character occurrences in an empty string', () => {
    expect(countChar("", "a")).toBe(0);
  });

  test('counts the number of specified character occurrences in a string with no occurrences', () => {
    expect(countChar("Hello", "z")).toBe(0);
  });

  test('counts the number of specified character occurrences in a string with all occurrences', () => {
    expect(countChar("aaaaa", "a")).toBe(5);
  });

  test('counts the number of specified character occurrences in a string with special characters', () => {
    expect(countChar("!@#$%^&*()_+", "$")).toBe(1);
  });

  test('counts the number of specified character occurrences in a long string', () => {
    const longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    expect(countChar(longString, "e")).toBe(38);
  });
});
