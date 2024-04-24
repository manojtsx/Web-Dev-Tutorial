/*
    Coding Challenge : Number Range Generator

    Write a function called numberRanage that generate an array containing consecutive numbers from a to b (inclusive).

    INPUT:
    a: An integer representing the starting number of the range.
    b: An integer representing the ending number of the range.
    arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

    OUTPUT:
    An array containing consecutive numbers from a to b (inclusive).

    CONSTRAINTS:
    a and b will be integers else print "Parameters must be integer."
    a will be less than or equal to b else print "First parameter should be less than or equal to second parameter."
    
    console.log(numberRange(0,5)) // [0,1,2,3,4,5];
*/
function numberRange(a, b) {
  if (typeof a !== "number" && typeof b !== "number") {
    return "Parameters must be integer.";
  }
  if (a > b) {
    return "First parameter should be less than or equal to the second parameter.";
  } else {
    let range = [];
    let temp = a;
    for (let i = 0; i <= b - temp; i++) {
      range.push(a);
      a++;
    }
    return range;
  }
}
module.exports = numberRange;
