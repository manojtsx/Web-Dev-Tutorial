/*
    Coding Challenge : Number Range Generator Recursively

    Write a function called numberRange that generate an array containing consecutive numbers from a to b (inclusive) with recursion.

    INPUT:
    a: An integer representing the starting number of the range.
    b: An integer representing the ending number of the range.
    arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

    OUTPUT:
    An array containing consecutive numbers from a to b (inclusive).

    CONSTRAINTS:
    a and b will be integers
    a will be less than or equal to b.
    console.log(numberRangeRecursion(0,5)) // [0,1,2,3,4,5];
*/
function numberRangeRecursion(a, b, arr = []) {
    if(a<=b){
        arr.push(a);
        return numberRangeRecursion(a+1,b,arr);
    }
    return arr;
}
module.exports = numberRangeRecursion;
