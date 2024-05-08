const convertCurrency = require('../day41');

test('Converts 100 GBP to EUR correctly', () => {
  const amount = 100;
  const fromCurrency = 'GBP';
  const toCurrency = 'EUR';
  const expectedOutput = 100 * 0.9 / 0.8;
  expect(convertCurrency(amount, fromCurrency, toCurrency)).toBe(expectedOutput);
});

test('Converts 500 USD to INR correctly', () => {
  const amount = 500;
  const fromCurrency = 'USD';
  const toCurrency = 'INR';
  const expectedOutput = 500 * 82 / 1;
  expect(convertCurrency(amount, fromCurrency, toCurrency)).toBe(expectedOutput);
});

test('Converts 100 EUR to GBP correctly', () => {
  const amount = 100;
  const fromCurrency = 'EUR';
  const toCurrency = 'GBP';
  const expectedOutput = 100 * 0.8 / 0.9;
  expect(convertCurrency(amount, fromCurrency, toCurrency)).toBe(expectedOutput);
});

test('Converts 0 USD to EUR correctly', () => {
  const amount = 0;
  const fromCurrency = 'USD';
  const toCurrency = 'EUR';
  const expectedOutput = 0 * 0.9 / 1;
  expect(convertCurrency(amount, fromCurrency, toCurrency)).toBe(expectedOutput);
});
