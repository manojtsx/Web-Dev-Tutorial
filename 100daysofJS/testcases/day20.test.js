const reverseString = require('../day20');

describe('reverseString function', () => {
  test('reverses a string with an odd number of characters', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test('reverses a string with an even number of characters', () => {
    expect(reverseString("world")).toBe("dlrow");
  });

  test('reverses an empty string', () => {
    expect(reverseString("")).toBe("");
  });

  test('reverses a string with a single character', () => {
    expect(reverseString("a")).toBe("a");
  });

  test('reverses a string with special characters', () => {
    expect(reverseString("!@#$%^&*()")).toBe(")(*&^%$#@!");
  });

  test('reverses a string with spaces', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test('reverses a string with mixed case characters', () => {
    expect(reverseString("HeLLo WoRLd")).toBe("dLRoW oLLeH");
  });
});
