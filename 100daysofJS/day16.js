/*
Q. Write a function that takes an array of numbers as input and returns the minimum value found in the array.

Constraints: 
1. The input array may contain both positive and negative integers.
2. The input array may be empty.
3. The input array may contain duplicate values.

console.log(findMin([5,10,2,8])) Output: 2
console.log(findMin([5,-3,0,12,-7])) Output: -7
console.log(findMin([])) Output: undefined (or any suitable message for empty array)

Note: 
1. Ensure the function handle edge cases gracefully, such as an empty input array.
2. Consider using ES6 features like the spread syntax (...) for a concise implementation.

The spread syntax ( ...) in JavaScript is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
For example: if arr is [5,10,2,8] then ...arr expands to 5.10,2,8.
*/