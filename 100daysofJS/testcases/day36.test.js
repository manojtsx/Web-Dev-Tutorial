const {objectToArray, arrayToObject} = require("../day36");

describe('objectToArray and arrayToObject functions', () => {
    test('objectToArray converts object to key-value pair array', () => {
      const obj = { name: "Kodyfier Shrestha", age: 23, city: "Damauli" };
      const expectedArray = [['name', 'Kodyfier Shrestha'], ['age', 23], ['city', 'Damauli']];
      expect(objectToArray(obj)).toEqual(expectedArray);
    });
  
    test('objectToArray handles different data types', () => {
      const obj = {
        name: "John Doe",
        age: 30,
        isActive: true,
        details: { city: "New York" },
      };
      const expectedArray = [
        ['name', 'John Doe'],
        ['age', 30],
        ['isActive', true],
        ['details', { city: "New York" }],
      ];
      expect(objectToArray(obj)).toEqual(expectedArray);
    });
  
    test('arrayToObject converts array back to object', () => {
      const arr = [['name', 'Kodyfier Shrestha'], ['age', 23], ['city', 'Damauli']];
      const expectedObj = { name: "Kodyfier Shrestha", age: 23, city: "Damauli" };
      expect(arrayToObject(arr)).toEqual(expectedObj);
    });
  
    test('arrayToObject handles nested objects', () => {
      const arr = [
        ['name', 'John Doe'],
        ['age', 30],
        ['isActive', true],
        ['details', { city: "New York" }],
      ];
      const expectedObj = {
        name: "John Doe",
        age: 30,
        isActive: true,
        details: { city: "New York" },
      };
      expect(arrayToObject(arr)).toEqual(expectedObj);
    });
  
    
  });
  