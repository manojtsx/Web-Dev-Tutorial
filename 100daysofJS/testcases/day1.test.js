const findLongestWord = require('../day1');

test('the longest word in Hello this is javascript programming language is programming', () => {
    expect(findLongestWord("Hello this is javascript programming language")).toBe('programming');
});

test('empty string', () => {
    expect(findLongestWord("")).toBe(false);
});

test('single word', () => {
    expect(findLongestWord("JavaScript")).toBe('JavaScript');
});

test('multiple words with the same length longest word', () => {
    expect(findLongestWord("hello world programming")).toBe('programming');
});

test('multiple words with leading and trailing spaces', () => {
    expect(findLongestWord("  Hello  this  is  javascript  programming  language  ")).toBe('programming');
});

test('input with punctuation marks', () => {
    expect(findLongestWord("Hello, this is JavaScript")).toBe('JavaScript');
});

test('input with numbers', () => {
    expect(findLongestWord("The longest number is 1234567890")).toBe('1234567890');
});

test('input with special characters', () => {
    expect(findLongestWord("Hello @#$$% programming")).toBe('programming');
});
