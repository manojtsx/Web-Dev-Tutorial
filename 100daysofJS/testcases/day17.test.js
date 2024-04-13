const {toCamelCase, toSnakeCase} = require("../day17");

describe('toCamelCase function', () => {
  test('converts a string to camelCase', () => {
    expect(toCamelCase("hello world thapa")).toBe("helloWorldThapa");
    expect(toCamelCase("HeLlo worLd thapa")).toBe("helloWorldThapa");
    expect(toCamelCase("Camel Case Example")).toBe("camelCaseExample");
  });
});

describe('toSnakeCase function', () => {
  test('converts a string to snake_case', () => {
    expect(toSnakeCase("hello World")).toBe("hello_world");
    expect(toSnakeCase("HeLlo WorLd thapa")).toBe("hello_world_thapa");
    expect(toSnakeCase("Snake Case Example")).toBe("snake_case_example");
  });
});
