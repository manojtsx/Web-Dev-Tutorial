const validatePassword = require('../day31');

test('password with lowercase, uppercase, digit, and length >= 8', () => {
  expect(validatePassword("Password1")).toBe(true);
});

test('password without lowercase', () => {
  expect(validatePassword("PASSWORD1")).toBe(false);
});

test('password without uppercase', () => {
  expect(validatePassword("password1")).toBe(false);
});

test('password without digit', () => {
  expect(validatePassword("Password")).toBe(false);
});

test('password with length < 8', () => {
  expect(validatePassword("Pass1")).toBe(false);
});
