test('null',()=>{
    const n = null;
    expect(n).toBeNull(); //checks if n is null
    expect(n).toBeDefined() //checks if n is defined
    expect(n).not.toBeUndefined(); // checks if n is not undefined
    expect(n).not.toBeTruthy(); //checks if n is not truthy vlaue
    expect(n).toBeFalsy(); // n is falsy value
    // In JavaScript, null is falsy value
})