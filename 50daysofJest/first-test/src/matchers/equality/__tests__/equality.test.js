test('object assignment',()=>{
    const data = { one : 1};
    data['two'] = 2;
    expect(data).toEqual({one : 1, two  :2}); // toEqual checks deep equality
})

describe('push data into array',()=>{
    test('checks that data is pushed at the last',()=>{
        const arr = [1,2,3];
        arr.push(4);
        expect(arr).toEqual([1,2,3,4]); // toEqual checks deep equality
    });

    test('checks that data is not pushed at the front',()=>{
        const arr = [1,2,3];
        arr.push(4);
        expect(arr).toEqual([1,2,3,4]); // toEqual checks deep equality
    })
})