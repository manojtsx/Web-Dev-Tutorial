const truncateString = require('../day28');

test('Truncate string to fit within maxLength', () => {
  expect(truncateString("A-tisket a-tasket A green and yellow basket", 8)).toBe("A-tisket...");
});

test('Truncate string to fit within maxLength', () => {
  expect(truncateString("Hello, world!", 5)).toBe("Hello...");
});

test('Truncate string to fit within maxLength', () => {
  expect(truncateString("This is a long string", 10)).toBe("This is a...");
});
