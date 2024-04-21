/*
Q. Write a function to find the nth Fibonacci number.

The fibonacci series is a sequence of numbers in which each number (fibonacci number) is the sum of the two preceding ones. It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. So, the fibonacci series looks like this: 0,1,2,3,5,8,13,21,...

todo: The Fibonacci number is calculated using the following formula:
todo syntax: f(n) = f(n-1)+f(n-2) where f(1) = f(2) = 1

console.log(fibonacci(0)); OUTPUT: 0
console.log(fibonacci(1)); OUTPUT: 1
console.log(fibonacci(2)); OUTPUT: 1
console.log(fibonacci(3)); OUTPUT: 2
console.log(fibonacci(4)); OUTPUT: 3
console.log(fibonacci(5)); OUTPUT: 5
*/

// function fibonacci(num) {
//   if (num <= 1) {
//     return num;
//   } else {
//     let fib = [0, 1];
//     for (let i = 2; i <= num; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib[num];
//   }
// }

function fibonacci(num){
    if(num <= 1){
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}
module.exports = fibonacci;
