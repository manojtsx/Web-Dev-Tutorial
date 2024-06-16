
// Assuming we have a module `api.js` with a function `fetchData()`
jest.mock('../basic_mocking', () => ({
    fetchData: jest.fn()
    }));
const  {fetchData}  = require('../basic_mocking');


test('fetchData returns "data" and is called correctly', async() => {
  // Mock the implementation to return a promise that resolves with "data"
  fetchData.mockResolvedValue('data');

  const result = await fetchData();

  // Assert that the mock function was called
  expect(fetchData).toHaveBeenCalled();
  // Assert the resolved value
  expect(result).toBe('data');
});