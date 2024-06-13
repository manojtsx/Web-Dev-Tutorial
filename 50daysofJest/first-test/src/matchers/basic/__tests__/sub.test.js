const sub = require('../sub');

test('3 minus 3 is equal to 0',()=>{
    expect(sub(3,3)).toBe(0);
})

test('4 minus 2 is not equal to 1',()=>{
    expect(sub(4,2)).not.toBe(1);
})