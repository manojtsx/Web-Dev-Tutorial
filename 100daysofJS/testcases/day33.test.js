const randomHexColor = require('../day33');

test('Random Hex Color', () => {
  const color = randomHexColor();
  expect(color).toMatch(/^#[0-9A-F]{6}$/i);
});

test('Random Hex Color is unique', () => {
  const colors = new Set();
  for (let i = 0; i < 1000; i++) {
    const color = randomHexColor();
    expect(colors.has(color)).toBe(false);
    colors.add(color);
  }
});
