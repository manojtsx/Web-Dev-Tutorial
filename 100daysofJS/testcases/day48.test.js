const validateHexColor = require('../day48');

// Test case 1: Validate hex color code with 3 characters
test('Valid hex color code with 3 characters', () => {
    expect(validateHexColor("#a3c")).toBe(true);
});
test('Invalid hex color code with 3 characters', () => {
    expect(validateHexColor("#a3c1")).toBe(false);
});

// Test case 2: Validate hex color code with 6 characters
test('Valid hex color code with 6 characters', () => {
    expect(validateHexColor("#a3c113")).toBe(true);
});
test('Invalid hex color code with 6 characters', () => {
    expect(validateHexColor("#a3c1134")).toBe(false);
});

// Test case 3: Validate hex color code with invalid characters
test('Invalid hex color code with invalid characters', () => {
    expect(validateHexColor("#a3c1g3")).toBe(false);
});
