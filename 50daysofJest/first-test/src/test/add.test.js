const add = require('../module/add');

test('1 plus 1 equals 2', ()=>{
    expect(add(1,1)).toBe(2);
})

test('1 plus 2 is not equals 4',()=>{
    expect(add(1,2)).not.toBe(4);
})