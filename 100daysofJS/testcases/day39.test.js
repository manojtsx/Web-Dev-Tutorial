const calculateAge = require('../day39');

test('calculates age correctly when birthday has not yet occured this year', () => {
  expect(calculateAge("1990-05-15")).toBe(33);
});

test('calculates age correctly when birthday is today', () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let todayStr = year + "-" + month.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0');
  expect(calculateAge(todayStr)).toBe(0);
});

test('calculates age correctly when birthday has already occured this year', () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate() - 1;
  let todayStr = year + "-" + month.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0');
  expect(calculateAge("1990-05-15")).toBe(year - 1990 - 1);
});
