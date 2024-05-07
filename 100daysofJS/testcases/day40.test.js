const generateBarChart = require('../day40');

test('Generates correct bar chart for input [5,3,9,2]', () => {
  const input = [5, 3, 9, 2];
  const expectedOutput = `1 : *****\n2 : ***\n3 : *********\n4 : **`;
  expect(generateBarChart(input)).toBe(expectedOutput);
});

test('Generates correct bar chart for input [1,2,3,4,5]', () => {
  const input = [1, 2, 3, 4, 5];
  const expectedOutput = `1 : *\n2 : **\n3 : ***\n4 : ****\n5 : *****`;
  expect(generateBarChart(input)).toBe(expectedOutput);
});

test('Generates correct bar chart for input [10,20,30,40]', () => {
  const input = [10, 20, 30, 40];
  const expectedOutput = `1 : **********\n2 : ********************\n3 : ******************************\n4 : ****************************************`;
  expect(generateBarChart(input)).toBe(expectedOutput);
});

test('Generates correct bar chart for input [0,0,0,0]', () => {
  const input = [0, 0, 0, 0];
  const expectedOutput = `1 : \n2 : \n3 : \n4 : `;
  expect(generateBarChart(input)).toBe(expectedOutput);
});
