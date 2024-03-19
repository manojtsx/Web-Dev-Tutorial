// 5. Write a JavaScript program that uses a for loop to calculate the factorial of a given number, say 7.

// Factorial of 4 = 4 * 3 * 2 * 1
let num = 7;
let result = 1;
for( let i = num ; i >= 1 ; i-- ){
   result = i * result; 
}
console.log(result);