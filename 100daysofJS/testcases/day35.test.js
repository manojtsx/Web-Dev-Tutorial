const isEmptyObject = require('../day35');

test('checks if an object is empty', () => {
  expect(isEmptyObject({ name: "Manoj" })).toBe("it's not empty");
  expect(isEmptyObject({})).toBe("it's empty");
  expect(isEmptyObject({ keyWithNull: null })).toBe("it's empty");
  expect(isEmptyObject({ keyWithUndefined: undefined })).toBe("it's empty");
});

test('checks if an object with null and undefined properties is empty', () => {
  expect(isEmptyObject({ keyWithNull: null, keyWithUndefined: undefined })).toBe("it's empty");
});

test('checks if an object with properties is empty', () => {
  expect(isEmptyObject({ key: "value" })).toBe("it's not empty");
});

test('checks if an empty object is empty', () => {
  expect(isEmptyObject({})).toBe("it's empty");
});
