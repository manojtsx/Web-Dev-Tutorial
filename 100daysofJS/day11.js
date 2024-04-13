/*
Q. Write a function that takes a number as input and returns the sum of its digits.

//Example usage:
console.log(sumOfDigits(1234)) Output: 10
console.log(sumOfDigits(4321)) Output: 10
console.log(sumOfDigits(123456)) Output: 21

Constraints: 
1. The input number will always be a positive integer.
2. The input can have multiple digits.
3. The output should be thes um of all the digits in the input number.

Homework: 
1. This function calculates the sum of digits without converting the number to  a string.

*/
// BY CONVERTING INTO STRING
// function sumOfDigits(num){
//     let splittedNum = num.toString().split("");
//     let sum = 0;
//     for(let number of splittedNum){
//         sum += Number(number);
//     }
//     return sum;
// }

// WITHOUT CONVERTING INTO STRING
function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        let digit = num % 10; // GET THE LAST DIGIT AS IT IS THE REMAINDER
        sum += digit; //ADD THE REMAINDER TO THE SUM
        num = Math.floor(num / 10); // REMOVE THE LAST DIGIT
    }
    return sum;
}
module.exports = sumOfDigits;