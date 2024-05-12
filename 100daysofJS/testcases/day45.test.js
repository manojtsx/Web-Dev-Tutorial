const validatePassword = require('../day45');

test('Valid Passwords', () => {
  const validPasswords = [
    'Passw0rd!',
    'StrongP@ssw0rd',
    '1234!Abcd',
    'SecureP@55',
  ];
  validPasswords.forEach(password => {
    expect(validatePassword(password)).toBe(true);
  });
});

test('Invalid Passwords', () => {
  const invalidPasswords = [
    'short!',
    'no_digit_or_special',
    'NoSpecialCharacter',
    'nouppercase@123',
  ];
  invalidPasswords.forEach(password => {
    expect(validatePassword(password)).toBe(false);
  });
});
