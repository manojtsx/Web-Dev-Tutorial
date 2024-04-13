const isPalindrome = require('../day6');

test('returns true for a palindrome with spaces and punctuation', () => {
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});

test('returns true for a palindrome with only letters', () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test('returns false for a non-palindrome', () => {
  expect(isPalindrome("hello")).toBe(false);
});

test('returns true for a palindrome with mixed case', () => {
  expect(isPalindrome("Racecar")).toBe(true);
});

test('returns true for a palindrome with digits', () => {
  expect(isPalindrome("12321")).toBe(true);
});

test('returns false for a non-palindrome with mixed case', () => {
  expect(isPalindrome("Palindrome")).toBe(false);
});
