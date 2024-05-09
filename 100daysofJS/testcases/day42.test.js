const validateCreditCard = require('../day42');

test('Validates credit card number "4539 1488 0343 6467" correctly', () => {
  const cardNum = '4539 1488 0343 6467';
  expect(validateCreditCard(cardNum)).toBe(true);
});

test('Validates credit card number "7992 7398 7134 6783" correctly', () => {
  const cardNum = '7992 7398 7134 6783';
  expect(validateCreditCard(cardNum)).toBe(false);
});

test('Validates credit card number "1234-5678-9876-5432" correctly', () => {
  const cardNum = '1234-5678-9876-5432';
  expect(validateCreditCard(cardNum)).toBe(false);
});

test('Validates credit card number "6011 1111 1111 1117" correctly', () => {
  const cardNum = '6011 1111 1111 1117';
  expect(validateCreditCard(cardNum)).toBe(true);
});
