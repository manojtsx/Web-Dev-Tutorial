const {sum,myFunction} = require('./sum');

// function testFunction(){
//     expect(sum(1,2)).toBe(3);
// }
// test('adds 1 and 2 equal to 3', testFunction);
// test('adds 2 and 2 to be 4', ()=>{
//     expect(2 + 2).toBe(4);
// })

// test('object assignment',() => {
//     const data ={one : 1};
//     data['two'] = 2;
//     expect(data).toEqual({one : 1 , two : 2});
// })

// test("null is falsy", () => {
//   // null, undefined or 0 is falsy
//   let n = 0;
//   expect(n).toBeFalsy();
// });
// test("value is falsy", () => {
//   // numbers, string, arrays, objects are truthy
//   let n = [1, 2, 3];
//   expect(n).toBeTruthy();
// });

test ("throw error",()=>{
    expect(()=>{myFunction("manoj")}).toThrow('String isnot valid.');
})
