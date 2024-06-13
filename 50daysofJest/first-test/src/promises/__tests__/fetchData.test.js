const fetchData = require('../fetchData')

test('the data is peanut butter',()=>{
    return fetchData().then(data =>{
        expect(data).toBe('peanut butter');
    })
})

test('the data is peanut butter',async()=>{
    const data = await fetchData();
    expect(data).toBe('peanut butter');
})