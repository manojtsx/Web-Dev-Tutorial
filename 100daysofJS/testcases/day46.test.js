const validateIndianMobileNumber = require('../day46');

test('Valid Indian Mobile Numbers', () => {
  const validMobileNumbers = [
    '9876543210',
    '8765432109',
    '7654321098',
    '6543210987',
  ];
  validMobileNumbers.forEach(number => {
    expect(validateIndianMobileNumber(number)).toBe(true);
  });
});

test('Invalid Indian Mobile Numbers', () => {
  const invalidMobileNumbers = [
    '0123456789',
    '897654321',
    '78965432107',
    '123456789',
    '987654321',
  ];
  invalidMobileNumbers.forEach(number => {
    expect(validateIndianMobileNumber(number)).toBe(false);
  });
});
