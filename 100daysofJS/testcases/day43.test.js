const fizzBuzz = require('../day43');

test('FizzBuzz for range 1 to 15', () => {
  const startNum = 1;
  const endNum = 15;
  const expectedResult = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'];
  expect(fizzBuzz(startNum, endNum)).toEqual(expectedResult);
});

test('FizzBuzz for range 1 to 10', () => {
  const startNum = 1;
  const endNum = 10;
  const expectedResult = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
  expect(fizzBuzz(startNum, endNum)).toEqual(expectedResult);
});

test('FizzBuzz for range 10 to 20', () => {
  const startNum = 10;
  const endNum = 20;
  const expectedResult = ['Buzz',11,'Fizz',13,14,'FizzBuzz',16,17,'Fizz',19,'Buzz'];
  expect(fizzBuzz(startNum, endNum)).toEqual(expectedResult);
});
