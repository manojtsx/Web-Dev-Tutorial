const isValidDate = require('../day49');

test('Valid Date Format', () => {
  const validDates = [
    '01/01/1900',
    '12/31/2099',
    '06/15/2023',
    '11/30/2000',
  ];
  validDates.forEach(date => {
    expect(isValidDate(date)).toBe(true);
  });
});

test('Invalid Date Format', () => {
  const invalidDates = [
    '13/01/1900',
    '12/32/2099',
    '06-15-2023',
    '11/30/00',
    '00/01/1900',
    '01/00/1900',
    '01/01/1899',
    '01/01/2100',
  ];
  invalidDates.forEach(date => {
    expect(isValidDate(date)).toBe(false);
  });
});
