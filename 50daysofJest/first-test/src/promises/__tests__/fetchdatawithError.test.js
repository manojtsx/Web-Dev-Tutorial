const fetchDataWithError = require('../fetchDatawithError');

test('the fetch fails with an error', () => {
  return fetchDataWithError().catch(e => expect(e).toMatch('error'));
});

// or using async/await and the rejects matcher
test('the fetch fails with an error', async () => {
  await expect(fetchDataWithError()).rejects.toMatch('error');
});
