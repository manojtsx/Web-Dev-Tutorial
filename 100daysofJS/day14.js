/*
Q. Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two and false otherwise.
Example usage: 
console.log(isPowerOfTwo(8)) Output: true
console.log(isPowerOfTwo(7)) Output: false

Notes:
1. The input will be a positive integer.
2. Zero(0) and negative integers are not considered power of two.
3. The function should return true if the given number is a power of 2, and false otherwise.

We can solve it using bitwise operator to but it your choice to do it and let me know in the comment section.

*/
// function isPowerOfTwo(num){
//     for(let i = 1 ; i < num ; i++){
//         if(2 * i === num) return true;
//     }
//     return false;
// }

// BITWISE OPERATOR
function isPowerOfTwo(num){
    return num > 0 && (num & (num - 1))===0;
}
module.exports = isPowerOfTwo;