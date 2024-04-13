/*
Challenge: Factorial Finder

Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.
Here are some examples of factorial calculations:

factorial(0) => 1
factorial(1) => 1
factorial(2) => 2
factorial(3) => 6
factorial(4) => 24
factorial(5) => 120

Your function should work for any non-negative integer input

Example: 
console.log(factorial(5));  Output: 120
console.log(factorial(0));  Output: 1
console.log(factorial(3));  Output: 6

Show it with recursive function
*/


function factorial(n){
    if(n<0) return "Cannot find factorial";
    else if(n==0) return 1;
    else {
        return n * factorial(n-1);
    }
}
function withoutRecursion(n){
    if(n<0) return "Cannot find factorial";
    else if(n==0) return 1;
    else{
        let result = 1;
        for(let i = 2 ; i <= n ; i++){
            result *= i;
        }
        return result;
    }
}
module.exports = {factorial, withoutRecursion}; 