const add = require('../add');
test('two plus two',()=>{
    const value = add(2,2);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4); // toBe uses Object.is to test exact equality
    expect(value).toEqual(4) // toEqual is also fine for numbers
})