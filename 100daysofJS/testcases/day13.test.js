const countVowels = require('../day13');

describe('countVowels function', () => {
  test('returns the count of vowels for a string with both lowercase and uppercase vowels', () => {
    expect(countVowels("Helloo world")).toBe(4);
  });

  test('returns the count of vowels for a string with mixed case vowels', () => {
    expect(countVowels("ThE quIck brOwn fOx")).toBe(5);
  });

  test('returns 0 for a string with no vowels', () => {
    expect(countVowels("qwf")).toBe(0);
  });

  test('returns 0 for an empty string', () => {
    expect(countVowels("")).toBe(0);
  });

  test('returns the count of vowels for a string with only vowels', () => {
    expect(countVowels("AEIOUaeiou")).toBe(10);
  });

  test('returns the count of vowels for a string with repeated vowels', () => {
    expect(countVowels("aaeeiioouu")).toBe(10);
  });

  test('returns the count of vowels for a large string', () => {
    expect(countVowels("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBe(19);
  });

  test('returns the count of vowels for a string with special characters', () => {
    expect(countVowels("h@ll0 W0rld!")).toBe(0);
  });
});
